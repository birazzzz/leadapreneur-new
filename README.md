# Leadapreneur website redesign

A dependency-light, production-oriented static site generated with Node.js, with blogs, events and authors edited in a Git-based CMS (Keystatic). The build produces clean multi-page HTML, centralized content, structured data, sitemap, robots rules and deployment redirects.

## Commands

```powershell
npm run build
npm test
npm run check
npm run serve
npm run admin          # CMS editor at http://localhost:4174/keystatic (edits files locally)
npm run import:blogs   # pull new posts from the live Framer blog
```

The local preview runs at `http://127.0.0.1:4173`.

## Route map

- `/`
- `/assessment/`
- `/ai-x-talent-accelerator/`
- `/events/`
- `/events/[slug]/` for every event in `content/events/`
- `/projects/`
- `/case-studies/`
- `/insights/`
- `/blog/[slug]/` for every published post in `content/blogs/`
- `/about/`
- `/future-proof-assessment/`
- `/assessment/` — the built Future-Proofing Assessment app, vendored from its own repository with `npm run sync:assessment`
- `/contact/`
- `/future-proof-friday/` — weekly webinar registration; Google Calendar link appears after a saved name/email submission.

Legacy `/role-quiz`, `/blog` and `/greatness-games-kl-season-1` routes redirect to their new destinations. Legacy `.html` page paths also receive static redirect files.

## Architecture

- `keystatic.config.ts`, `content/`, `public/uploads/`: CMS schema, content files and uploaded images. See `docs/cms.md`.
- `admin/`: Next.js app that hosts the Keystatic editor (deployed separately to `cms.leadapreneur.com`).
- `lib/cms.mjs`: build-time reader that loads published content and renders Markdoc.
- `data/content.mjs`: central source for roles, quiz questions, companies, projects, case studies, stats, videos and team.
- `src/pages/`: server-rendered page templates.
- `src/components.mjs`: reusable cards, tickets, logo strip and CTA compositions.
- `src/templates.mjs`: global layout, navigation, footer, metadata and structured-data helpers.
- `lib/events.mjs`, `lib/time.mjs`: timezone-safe event status and sorting.
- `src/site.js`: narrow progressive enhancement for navigation, cards, carousels, filtering and motion.
- `scripts/build.mjs`: production build, sitemap, robots and redirects.

## Assessment result emails

`api/send-result.js` is a Vercel serverless function that emails participants a branded copy of their Future-Proofing Assessment result via Resend. The vendored app at `/assessment/` posts to it after the result is computed; the API key only ever exists server-side.

- `RESEND_API_KEY` — set in the Vercel project environment (and in `.env.local` for local testing).
- `ASSESSMENT_EMAIL_FROM` — optional verified sender. Until `leadapreneur.com` is verified as a sending domain in Resend, the default `Leadapreneur <onboarding@resend.dev>` is used, which can only deliver to the Resend account owner's address.
- Send a real sample for visual testing: `node scripts/test-result-email.mjs you@example.com`.

See `docs/content-audit.md` for source decisions and public-content conflicts.

## Future-Proof Fridays registrations

`POST /api/register-webinar` is a Cloudflare Pages Function. It validates name, email and the registration notice, then saves a row in the private `WEBINAR_DB` Cloudflare D1 binding. The supplied Google Calendar event link is returned only after that save succeeds. No registration information is sent to Resend or Vercel, stored in browser storage, or published in the Git repository.

The page and registration backend both run on Cloudflare. `migrations/webinar-registration.sql` defines the registration table. After registering, visitors choose **Google Calendar** or an **Apple / Outlook / Other** `.ics` download. `lib/webinar-calendar.mjs` builds both formats for **Future-Proof Friday Weekly Briefing**, every Friday **11:00–12:00 Malaysia Time (MYT)**, starting from the next session, with `https://meet.google.com/zek-romn-csi` and a weekly Friday recurrence rule. The description comes from the corrected event printout. The Google link does not rely on access to an existing private calendar event. The ICS uses UTC timestamps, a stable UID, CRLF line endings and byte-aware line folding. It contains no registrant details and does not send invitations. Notion Calendar users can save the event into a connected Google, Apple or Outlook calendar; no direct Notion workspace write is performed.

To download all registrations into one local spreadsheet-compatible CSV:

```powershell
npx wrangler login
npm run export:webinar
# Optional output path:
npm run export:webinar -- --out exports/friday-registrations.csv
```

The export is written to `exports/` (ignored by Git), with timestamp, name, email, consent version, and source. The export uses the authenticated Cloudflare CLI. CSV cells are escaped and spreadsheet formulas are neutralized. No publicly accessible CSV or unauthenticated export endpoint is exposed. Duplicate submissions remain separate timestamped rows.

Refreshing the page starts a fresh form. CSV exports contain personal information and should stay outside public site directories.
