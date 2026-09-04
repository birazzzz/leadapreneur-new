import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { events, insights, site } from '../data/content.mjs';
import { aboutPage } from '../src/pages/about.mjs';
import { acceleratorPage } from '../src/pages/accelerator.mjs';
import { assessmentPage } from '../src/pages/assessment.mjs';
import { caseStudiesPage } from '../src/pages/case-studies.mjs';
import { contactPage } from '../src/pages/contact.mjs';
import { eventDetailPage, eventSchema, eventsPage } from '../src/pages/events.mjs';
import { homePage } from '../src/pages/home.mjs';
import { articlePage, articleSchema, insightsPage } from '../src/pages/insights.mjs';
import { projectsPage } from '../src/pages/projects.mjs';
import { roleQuizPage } from '../src/pages/role-quiz.mjs';
import { breadcrumbSchema, layout, organizationSchema } from '../src/templates.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const buildDate = new Date();

const crumbs = (name, path) => breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name, path },
]);

const pages = [
  {
    path: '/',
    title: 'Future-Proof Your People | AI Talent Development | Leadapreneur',
    description: 'Transform managers into AI-powered innovators who build real solutions with verified business value.',
    body: homePage(),
    pageClass: 'home-page',
    structuredData: [
      organizationSchema(),
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        name: site.name,
        url: site.url,
        publisher: { '@id': `${site.url}/#organization` },
        description: site.description,
      },
    ],
  },
  {
    path: '/role-quiz/',
    title: 'AI Role Quiz | Find Your Leadapreneur Role',
    description: 'Discover whether you are an AI Explorer, AI Innovator or AI Vanguard in three private questions.',
    body: roleQuizPage(),
    pageClass: 'role-quiz-page',
    scripts: ['/assets/quiz.js?v=20260904-8'],
    structuredData: [crumbs('Role Quiz', '/role-quiz/')],
  },
  {
    path: '/ai-x-talent-accelerator/',
    title: 'AI × Talent Accelerator | Build Real AI Projects',
    description: 'Upgrade managers into leadapreneurs who propose, build and deploy real AI innovations with measurable value.',
    body: acceleratorPage(),
    pageClass: 'accelerator-page',
    structuredData: [crumbs('AI × Talent Accelerator', '/ai-x-talent-accelerator/')],
  },
  {
    path: '/events/',
    title: 'Events | Leadapreneur',
    description: 'Explore upcoming Leadapreneur experiences and past Greatness Games seasons.',
    body: eventsPage(buildDate),
    pageClass: 'events-page',
    structuredData: [crumbs('Events', '/events/')],
  },
  {
    path: `/events/${events[0].slug}/`,
    title: `${events[0].title} | Leadapreneur Events`,
    description: events[0].summary,
    body: eventDetailPage(events[0]),
    pageClass: 'event-detail-page',
    structuredData: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Events', path: '/events/' },
        { name: events[0].title, path: `/events/${events[0].slug}/` },
      ]),
      eventSchema(events[0]),
    ],
  },
  {
    path: '/projects/',
    title: 'Impact Projects | Real AI Solutions Built by Leadapreneurs',
    description: 'Explore real AI projects, deployed solutions and verified business value created by leadapreneurs.',
    body: projectsPage(),
    pageClass: 'projects-page',
    structuredData: [crumbs('Projects', '/projects/')],
  },
  {
    path: '/case-studies/',
    title: 'Client Results | Leadapreneur Case Studies',
    description: 'See measurable innovation results from DBS, UOB, OCBC and other Leadapreneur programmes.',
    body: caseStudiesPage(),
    pageClass: 'case-studies-page',
    structuredData: [crumbs('Case studies', '/case-studies/')],
  },
  {
    path: '/insights/',
    title: 'Insights on AI, Leadership and Innovation | Leadapreneur',
    description: 'Read field notes on AI adoption, innovative leadership and future-proofing talent.',
    body: insightsPage(),
    pageClass: 'insights-page',
    structuredData: [crumbs('Insights', '/insights/')],
  },
  {
    path: '/about/',
    title: 'About Leadapreneur | AI Leadership Development in Southeast Asia',
    description: 'Meet the team that has spent 20 years turning managers into innovators who build measurable business value.',
    body: aboutPage(),
    pageClass: 'about-page',
    structuredData: [crumbs('About', '/about/')],
  },
  {
    path: '/future-proof-assessment/',
    title: 'Future-Proof Assessment for Organisations | Leadapreneur',
    description: 'Understand how ready your people, culture and systems are for whatever future emerges.',
    body: assessmentPage(),
    pageClass: 'assessment-page',
    structuredData: [crumbs('Future-Proof Assessment', '/future-proof-assessment/')],
  },
  {
    path: '/contact/',
    title: 'Future-Proof Your People | Contact Leadapreneur',
    description: 'Start a conversation about AI adoption, talent acceleration, Greatness Games or Stratecution.',
    body: contactPage(),
    pageClass: 'contact-page-body',
    structuredData: [crumbs('Contact', '/contact/')],
  },
  ...insights.map((insight) => ({
    path: `/blog/${insight.slug}/`,
    title: `${insight.title} | Leadapreneur`,
    description: insight.excerpt,
    body: articlePage(insight),
    pageClass: 'article-page-body',
    structuredData: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Insights', path: '/insights/' },
        { name: insight.title, path: `/blog/${insight.slug}/` },
      ]),
      articleSchema(insight),
    ],
  })),
];

function outputPath(path) {
  return path === '/' ? join(dist, 'index.html') : join(dist, path.replace(/^\//, ''), 'index.html');
}

function write(path, contents) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, contents);
}

function redirectHtml(from, to) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><link rel="canonical" href="${site.url}${to}"><meta http-equiv="refresh" content="0;url=${to}"><title>Redirecting | Leadapreneur</title></head><body><p>This page has moved to <a href="${to}">${to}</a>.</p></body></html>`;
}

if (existsSync(dist)) rmSync(dist, { recursive: true, force: true });
mkdirSync(join(dist, 'assets'), { recursive: true });
cpSync(join(root, 'public'), dist, { recursive: true });
cpSync(join(root, 'src', 'styles.css'), join(dist, 'assets', 'styles.css'));
cpSync(join(root, 'src', 'site.js'), join(dist, 'assets', 'site.js'));
cpSync(join(root, 'src', 'quiz.js'), join(dist, 'assets', 'quiz.js'));
cpSync(join(root, 'lib', 'quiz-engine.mjs'), join(dist, 'assets', 'quiz-engine.mjs'));
mkdirSync(join(dist, 'data'), { recursive: true });
cpSync(join(root, 'data', 'content.mjs'), join(dist, 'data', 'content.mjs'));

for (const page of pages) write(outputPath(page.path), layout(page));

const redirects = [
  ['/blog/', '/insights/'],
  ['/greatness-games-kl-season-1/', `/events/${events[0].slug}/`],
];
for (const [from, to] of redirects) write(outputPath(from), redirectHtml(from, to));

const legacyFiles = {
  'index.html': '/',
  'ai-x-talent-accelerator.html': '/ai-x-talent-accelerator/',
  'case-studies.html': '/case-studies/',
  'projects.html': '/projects/',
  'insights.html': '/insights/',
  'about.html': '/about/',
  'contact.html': '/contact/',
};
for (const [file, to] of Object.entries(legacyFiles)) {
  if (file === 'index.html') continue;
  write(join(dist, file), redirectHtml(`/${file}`, to));
}

const indexed = pages.filter((page) => !page.noindex).map((page) => page.path);
const lastmod = buildDate.toISOString().slice(0, 10);
write(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexed
    .map((path) => `  <url><loc>${site.url}${path === '/' ? '/' : path}</loc><lastmod>${lastmod}</lastmod></url>`)
    .join('\n')}\n</urlset>\n`,
);
write(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
write(
  join(dist, '_redirects'),
  `/blog /insights/ 301\n/greatness-games-kl-season-1 /events/${events[0].slug}/ 301\n`,
);

console.log(`Built ${pages.length} indexable pages and ${redirects.length + Object.keys(legacyFiles).length - 1} redirects.`);
