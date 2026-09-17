# Leadapreneur CMS

Blogs, events and authors are edited in [Keystatic](https://keystatic.com) at `admin.leadapreneur.com`. Every save is a commit to this repository; Vercel rebuilds the static site from those files. There is no database.

```
Editor → admin.leadapreneur.com (Keystatic, admin/) → commit to GitHub → Vercel builds dist/ → www.leadapreneur.com
```

## How it fits together

| Piece | Where | Notes |
| --- | --- | --- |
| Content model | `keystatic.config.ts` | One schema, used by both the editor and the site build. |
| Content | `content/blogs/*.mdoc`, `content/events/*.yaml`, `content/authors/*.yaml` | Blog bodies are Markdoc. File name = slug = URL. |
| Uploaded images | `public/uploads/{blogs,events,authors}/<slug>/` | Copied into `dist/` by the build. |
| Editor app | `admin/` | Small Next.js app that only hosts Keystatic. Separate Vercel project. |
| Build-time reader | `lib/cms.mjs` | Reads `content/` from disk, drops drafts, renders Markdoc to HTML, resolves authors. |
| Templates | `src/pages/insights.mjs`, `src/pages/events.mjs`, `src/components.mjs` | The existing design, now fed by CMS data. |

The public site stays a dependency-light static build: no Keystatic or React code ships to visitors, and nothing is fetched from GitHub at request time. `/keystatic` does not exist on the public site (404).

Why not embed Keystatic in the site? Keystatic's editor needs Next.js, Astro or Remix. The public site is a plain Node static generator, so the editor lives in its own tiny app in the same repository rather than rewriting the site.

## Status rules

- **Blogs:** only `Published` posts get a page, a card, a sitemap entry and structured data. Drafts are committed but invisible, and their URLs 404.
- **Events:** upcoming / happening now / past is calculated from the start and end date in the venue's timezone at build time. The nightly rebuild (`.github/workflows/nightly-rebuild.yml`) keeps that current without anyone touching the event. Upcoming events are sorted soonest first, past events by most recently finished.
- **SEO:** the SEO title falls back to the title, the social image to the banner/feature image, the canonical to the page URL. `Hide from search engines` sets `noindex` and removes the page from the sitemap.

## One-time setup

### 1. Admin Vercel project

1. In Vercel, **Add New → Project** and import this same repository again.
2. **Root Directory:** `admin`. Framework: Next.js (auto-detected). Leave "Include files outside the root directory" on.
3. Deploy once. It will fail until step 2 adds the environment variables; that is expected.
4. **Settings → Domains:** add `admin.leadapreneur.com` (during the draft phase, use the `*.vercel.app` domain Vercel assigns).

`admin/vercel.json` skips admin rebuilds when only content changed.

### 2. GitHub App (sign-in for editors)

Keystatic creates the GitHub App for you:

1. Locally, create `admin/.env.local` with `NEXT_PUBLIC_KEYSTATIC_STORAGE=github`.
2. `npm install`, then `npm run admin`, and open `http://localhost:4174/keystatic`.
3. Follow **Create GitHub App**. Name it e.g. `leadapreneur-cms`, owned by the account or organisation that owns the repository. Keystatic writes `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET` and `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` into `admin/.env.local`. Never commit that file.
4. On GitHub, open the app's settings and add the production **Callback URL**: `https://admin.leadapreneur.com/api/keystatic/github/oauth/callback` (plus the `*.vercel.app` equivalent while in draft).
5. Install the app on the repository.
6. Copy the four variables into the admin Vercel project (**Settings → Environment Variables**) and redeploy. If the repository ever moves, also set `NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO=owner/name`.

### 3. DNS

This cannot be done from the repository. At the DNS provider for `leadapreneur.com`, add:

```
admin   CNAME   cname.vercel-dns.com.
```

Vercel shows the exact target when the domain is added in step 1.4. `www` and the apex stay on the public-site project.

### 4. Nightly rebuild

In the public-site Vercel project: **Settings → Git → Deploy Hooks**, create a hook for the production branch, and save its URL as the GitHub Actions secret `VERCEL_DEPLOY_HOOK_URL`.

### 5. Editor access

Each editor needs a GitHub account with **write** access to the repository. Access is removed by removing them from the repository. Editors never need Git, code or Vercel.

## Editor guide

### Write a blog post

1. Open `admin.leadapreneur.com` and sign in with GitHub.
2. **Blogs → Add**.
3. Fill in the title. The slug (web address) is suggested automatically; check it before publishing and do not change it afterwards.
4. Leave **Status** on *Draft* while writing. Set the publish date, short description, author and optional category (for example *COO Notes*).
5. Upload the **banner image** and describe it in the alt text field.
6. Write in the editor on the left. Use the toolbar for headings (H2, H3), bold, italic, links, lists, quotes and dividers. To add an image between paragraphs, place the cursor on an empty line and use the **+** menu or drag an image in. Click the image to add alt text and a caption.
7. Fill the **SEO** section: at least the meta description.
8. **Save**. Drafts are stored but not visible.
9. When ready, switch **Status** to *Published* and **Save**. The site updates in about a minute.

### Create an event

**Events → Add**, then work down the form: title, slug, programme/series, season, ticket codes, dates and timezone, format, location, short description, hero, event facts, quest section, registration panel, route items (drag to reorder; numbers are automatic), what's included, images and SEO.

Leave **Status label override** on *Automatic* in almost every case. The card and page switch from *Upcoming event* to *Past event* on their own after the end date, and the included section's label changes from *What's included* to *What was included*.

### Manage authors

**Authors** holds name, job title, photo and an optional bio. Changing a profile updates every post by that author on the next build. Keep the **Author ID** unchanged; posts refer to it. The *Leadapreneur* author is the company byline for posts without a named writer.

## Migration from Framer

`scripts/import-live-blogs.mjs` (`npm run import:blogs`) crawled `https://www.leadapreneur.com/blog` on 17 September 2026 and wrote all 17 live articles into `content/blogs/`:

- Slugs are identical to the live URLs, including `you-won-t-hear-from-me-for-a-while.-here-s-why` and the curly apostrophe in the Wendy article.
- Titles, publish dates, live meta descriptions, heading order, lists, quotes, links and bold/italic are preserved. The script re-renders every converted post and fails if any word from the live article is lost.
- Every banner and inline image was downloaded from Framer's CDN into `public/uploads/blogs/<slug>/`. Nothing references `framerusercontent.com` any more.
- Attribution: *Written by Hanaa Maysoon / COO Notes* signatures became author `hanaa-maysoon` with category *COO Notes*. Jan's *By Jan Henrik Bartscht* opening line became author `jan-bartscht`. Posts with no byline on the live site use the *Leadapreneur* company author.
- The one live link to `/greatness-games` now points to `/ai-x-talent-accelerator/#greatness-games`.

Re-running without `--force` only adds posts that are new on the live site, so it is safe to run again just before the domain switch. `--force` overwrites and discards CMS edits.

### Still open before switching the domain

- Banner images on the live site have no alt text. Add descriptions in the CMS.
- The live site also serves `/terms`, `/privacy-policy`, `/eula` and `/previous`, which do not exist in this build. The footer links to the first two on `www.leadapreneur.com`, so they must exist (or redirect) before the switch.
- The previous event data held a price (`RM 2,000 per person`) that was never displayed. It is not in the CMS schema, so it is not published in structured data either.
