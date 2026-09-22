# Leadapreneur website redesign

A dependency-light, production-oriented static site generated with Node.js, with blogs, events and authors edited in a Git-based CMS (Keystatic). The build produces clean multi-page HTML, centralized content, a private browser-only role quiz, structured data, sitemap, robots rules and deployment redirects.

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
- `/role-quiz/`
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

Legacy `/blog` and `/greatness-games-kl-season-1` routes redirect to their new destinations. Legacy `.html` page paths also receive static redirect files.

## Architecture

- `keystatic.config.ts`, `content/`, `public/uploads/`: CMS schema, content files and uploaded images. See `docs/cms.md`.
- `admin/`: Next.js app that hosts the Keystatic editor (deployed separately to `admin.leadapreneur.com`).
- `lib/cms.mjs`: build-time reader that loads published content and renders Markdoc.
- `data/content.mjs`: central source for roles, quiz questions, companies, projects, case studies, stats, videos and team.
- `src/pages/`: server-rendered page templates.
- `src/components.mjs`: reusable cards, tickets, logo strip and CTA compositions.
- `src/templates.mjs`: global layout, navigation, footer, metadata and structured-data helpers.
- `lib/quiz-engine.mjs`: deterministic quiz validation, scoring and tie breaking.
- `lib/events.mjs`, `lib/time.mjs`: timezone-safe event status and sorting.
- `src/site.js`: narrow progressive enhancement for navigation, cards, carousels, filtering and motion.
- `src/quiz.js`: private client-side quiz state and result sharing.
- `scripts/build.mjs`: production build, sitemap, robots and redirects.

See `docs/content-audit.md` for source decisions and public-content conflicts.
