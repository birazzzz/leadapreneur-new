# Leadapreneur website redesign

A dependency-free, production-oriented static site generated with Node.js. The build produces clean multi-page HTML, centralized content, a private browser-only role quiz, structured data, sitemap, robots rules and deployment redirects.

## Commands

```powershell
npm run build
npm test
npm run check
npm run serve
```

The local preview runs at `http://127.0.0.1:4173`.

## Route map

- `/`
- `/role-quiz/`
- `/ai-x-talent-accelerator/`
- `/events/`
- `/events/greatness-games-kl-season-1/`
- `/projects/`
- `/case-studies/`
- `/insights/`
- `/blog/[slug]/` for the three migrated featured articles
- `/about/`
- `/future-proof-assessment/`
- `/contact/`

Legacy `/blog` and `/greatness-games-kl-season-1` routes redirect to their new destinations. Legacy `.html` page paths also receive static redirect files.

## Architecture

- `data/content.mjs`: central source for roles, quiz questions, companies, projects, case studies, stats, events, insights and team.
- `src/pages/`: server-rendered page templates.
- `src/components.mjs`: reusable cards, tickets, logo strip and CTA compositions.
- `src/templates.mjs`: global layout, navigation, footer, metadata and structured-data helpers.
- `lib/quiz-engine.mjs`: deterministic quiz validation, scoring and tie breaking.
- `lib/events.mjs`: timezone-safe event status and sorting.
- `src/site.js`: narrow progressive enhancement for navigation, cards, carousels, filtering and motion.
- `src/quiz.js`: private client-side quiz state and result sharing.
- `scripts/build.mjs`: production build, sitemap, robots and redirects.

See `docs/content-audit.md` for source decisions and public-content conflicts.
