import { site } from '../data/content.mjs';

export const arrow = `<svg class="icon-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M12 5l7 7-7 7"/></svg>`;
export const navChevron = `<svg class="nav-chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="m4 6 4 4 4-4"/></svg>`;

const pageHeroArtwork = {
  accelerator: `<svg viewBox="0 0 720 440" role="presentation" focusable="false">
    <path class="art-mass" d="M52 382 210 300l126 34 142-128L670 72v310Z"/>
    <path class="art-contour" d="M28 404 206 330l130 34 152-126L692 104M18 432l192-72 130 34 160-124 202-130"/>
    <path class="art-line art-line--strong" d="m58 356 146-86 126 38 148-142L634 54"/>
    <path class="art-line art-line--strong" d="m576 50 70-8-8 70"/>
    <circle class="art-node" cx="204" cy="270" r="10"/><circle class="art-node" cx="330" cy="308" r="10"/><circle class="art-node" cx="478" cy="166" r="10"/>
  </svg>`,
  projects: `<svg viewBox="0 0 720 440" role="presentation" focusable="false">
    <path class="art-mass" d="m112 234 152-132 176 42 156 172-198 74-238-34Z"/>
    <path class="art-line" d="M82 354 264 102l134 288 198-74L440 144 160 356l280-212"/>
    <path class="art-line art-line--strong" d="m264 102 176 42-42 246-238-34Z"/>
    <path class="art-soft" d="m362 202 86 46-86 72-86-52Z"/>
    <circle class="art-node" cx="264" cy="102" r="13"/><circle class="art-node" cx="440" cy="144" r="13"/><circle class="art-node" cx="596" cy="316" r="13"/><circle class="art-node" cx="398" cy="390" r="13"/><circle class="art-node" cx="160" cy="356" r="13"/><circle class="art-node art-node--hot" cx="362" cy="258" r="17"/>
  </svg>`,
  insights: `<svg viewBox="0 0 720 440" role="presentation" focusable="false">
    <path class="art-mass" d="M88 314c98-70 194-70 288 0 94-70 190-70 288 0v86c-98-66-194-66-288 0-94-66-190-66-288 0Z"/>
    <path class="art-line art-line--strong" d="M88 314c98-70 194-70 288 0 94-70 190-70 288 0M376 314v86"/>
    <path class="art-line" d="M144 346c72-42 142-42 210 0M398 346c70-42 140-42 210 0"/>
    <path class="art-line art-line--strong" d="M376 240V80M324 102l52-52 52 52"/>
    <path class="art-contour" d="M274 212c-58-40-88-88-92-144M478 212c58-40 88-88 92-144M246 246c-92-52-144-114-154-188M506 246c92-52 144-114 154-188"/>
    <circle class="art-node art-node--hot" cx="376" cy="196" r="18"/>
  </svg>`,
  events: `<svg viewBox="0 0 720 440" role="presentation" focusable="false">
    <circle class="art-mass" cx="400" cy="220" r="154"/>
    <circle class="art-line" cx="400" cy="220" r="154"/><circle class="art-contour" cx="400" cy="220" r="206"/>
    <path class="art-line art-line--strong" d="M246 220h308M400 66v308"/>
    <path class="art-soft" d="m400 112 104 108-104 108-104-108Z"/>
    <path class="art-line art-line--strong" d="m400 112 104 108-104 108-104-108Z"/>
    <path class="art-line" d="m400 154 62 66-62 66-62-66Z"/>
    <circle class="art-node art-node--hot" cx="400" cy="220" r="16"/><circle class="art-node" cx="186" cy="118" r="12"/><circle class="art-node" cx="610" cy="332" r="12"/>
  </svg>`,
  cases: `<svg viewBox="0 0 720 440" role="presentation" focusable="false">
    <path class="art-mass" d="M112 380V284h92v96Zm132 0V228h92v152Zm132 0V158h92v222Zm132 0V86h92v294Z"/>
    <path class="art-line" d="M82 380h550M112 284h92M244 228h92M376 158h92M508 86h92"/>
    <path class="art-line art-line--strong" d="m118 316 92-72 94 18 106-96 128-78"/>
    <path class="art-line art-line--strong" d="m492 82 60-10-10 60"/>
    <path class="art-soft" d="m130 174 42 42 82-92 32 30-114 126-74-74Z"/>
  </svg>`,
  assessment: `<svg viewBox="0 0 720 440" role="presentation" focusable="false">
    <circle class="art-contour" cx="390" cy="226" r="188"/>
    <path class="art-line" d="M390 38v376M202 226h376M390 38l178 130-68 210H280l-68-210Z"/>
    <path class="art-contour" d="m390 94 126 92-48 148H312l-48-148Zm0 56 74 54-28 88h-92l-28-88Z"/>
    <path class="art-mass" d="m390 94 104 116-58 82-92 42-80-148Z"/>
    <path class="art-line art-line--strong" d="m390 94 104 116-58 82-92 42-80-148Z"/>
    <circle class="art-node art-node--hot" cx="390" cy="226" r="16"/>
  </svg>`,
  about: `<svg viewBox="0 0 720 440" role="presentation" focusable="false">
    <path class="art-line" d="m128 310 128-176 144 76 140-128 74 230-214 54Z"/>
    <path class="art-contour" d="m82 374 174-240 144 76 140-128 98 306"/>
    <path class="art-mass" d="m256 134 144 76-46 148-174-24Z"/>
    <circle class="art-soft" cx="256" cy="134" r="54"/><circle class="art-soft" cx="400" cy="210" r="62"/><circle class="art-soft" cx="540" cy="82" r="48"/><circle class="art-soft" cx="180" cy="334" r="45"/><circle class="art-soft" cx="614" cy="312" r="52"/>
    <circle class="art-node art-node--hot" cx="256" cy="134" r="17"/><circle class="art-node" cx="400" cy="210" r="17"/><circle class="art-node" cx="540" cy="82" r="17"/><circle class="art-node" cx="180" cy="334" r="17"/><circle class="art-node" cx="614" cy="312" r="17"/>
  </svg>`,
};

export function pageHeroArt(type) {
  const artwork = pageHeroArtwork[type];
  return artwork ? `<div class="page-hero-art page-hero-art--${type}" aria-hidden="true">${artwork}</div>` : '';
}

export function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export function link(href, label, className = '', external = false) {
  const attrs = external ? ' target="_blank" rel="noreferrer"' : '';
  const ext = external
    ? '<span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span>'
    : arrow;
  return `<a class="${className}" href="${href}"${attrs}>${label}${ext}</a>`;
}

function header() {
  return `
    <header class="site-header" data-header>
      <div class="header-inner">
        <a class="brand" href="/" aria-label="Leadapreneur home">
          <img src="/images/logo-horizontal.png" alt="" width="394" height="68">
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" data-menu-toggle>
          <span class="sr-only">Open menu</span><i></i><i></i>
        </button>
        <nav class="primary-nav" id="primary-nav" aria-label="Primary navigation" data-nav>
          <a class="quiz-nav" href="/role-quiz/"><span aria-hidden="true">✦</span> Find your role</a>
          <details class="nav-group">
            <summary>What we do ${navChevron}</summary>
            <div class="nav-panel">
              <a href="/ai-x-talent-accelerator/"><b>AI × Talent Accelerator</b><span>Build real AI projects with measurable value.</span></a>
              <a href="/ai-x-talent-accelerator/#greatness-games"><b>Greatness Games</b><span>Turn AI adoption into serious fun.</span></a>
              <a href="/ai-x-talent-accelerator/#stratecution"><b>Stratecution</b><span>Move from proposal to deployed solution.</span></a>
              <a href="${site.cosmos}" target="_blank" rel="noreferrer"><b>COSMOS ↗</b><span>The digital command centre for innovation.</span><span class="sr-only">Opens in a new tab</span></a>
            </div>
          </details>
          <details class="nav-group">
            <summary>Impact ${navChevron}</summary>
            <div class="nav-panel nav-panel--compact">
              <a href="/projects/"><b>Projects</b><span>Real problems. Real solutions.</span></a>
              <a href="/case-studies/"><b>Case studies</b><span>Enterprise change with evidence.</span></a>
            </div>
          </details>
          <a href="/events/">Events</a>
          <a href="/insights/">Insights</a>
          <a href="/about/">About</a>
          <a class="header-cta solution-trigger" href="/contact/">Future-proof your people ${arrow}</a>
        </nav>
      </div>
    </header>`;
}

function solutionModal() {
  const plans = [
    {
      tier: 'Lite',
      title: 'AI Explorer',
      purpose: 'Discover future-proofing',
      bestFor: 'Individuals and teams',
      engagement: '1 day',
      outcome: 'Discover AI opportunities',
      roi: '1× minimum ROI',
      href: 'https://api.whatsapp.com/send/?phone=60173397455&amp;text=Hello%21+I%27m+interested+in+your+future-proofing+solutions.+Could+you+share+more+details+about+the+Lite-AI+Explorer+plan%3F&amp;type=phone_number&amp;app_absent=0',
    },
    {
      tier: 'Professional',
      title: 'Future-Proofing System',
      purpose: 'Future-proof the organisation',
      bestFor: 'Enterprise transformation',
      engagement: '3 seasons',
      outcome: 'Create a culture of AI excellence',
      roi: '3× minimum ROI',
      href: 'https://api.whatsapp.com/send/?phone=60173397455&amp;text=Hello%21+I%27m+looking+into+your+future-proofing+solutions+and+would+like+more+information+on+the+Professional+plan.&amp;type=phone_number&amp;app_absent=0',
    },
    {
      tier: 'Premium',
      title: 'AI × Talent Accelerator',
      purpose: 'Future-proof your people',
      bestFor: 'Departments and talent programmes',
      engagement: '2–6 months',
      outcome: 'Build valuable AI solutions',
      roi: '2× minimum ROI',
      href: 'https://api.whatsapp.com/send/?phone=60173397455&amp;text=Hello%21+I+want+to+fully+leverage+your+future-proofing+solutions.+Could+we+discuss+the+Premium+plan%3F&amp;type=phone_number&amp;app_absent=0',
    },
  ];

  return `<dialog class="solution-dialog" data-solution-dialog aria-labelledby="solution-dialog-title" aria-describedby="solution-dialog-copy">
    <div class="solution-dialog__panel">
      <form method="dialog" class="solution-dialog__close-form">
        <button class="solution-dialog__close" type="submit" aria-label="Close future-proofing solutions">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>
        </button>
      </form>
      <header class="solution-dialog__header">
        <div>
          <p class="kicker">Choose your route</p>
          <h2 id="solution-dialog-title">Future-proofing solutions.</h2>
          <p id="solution-dialog-copy">Enable your people to build valuable solutions to important problems with AI.</p>
        </div>
        <svg class="solution-dialog__art" viewBox="0 0 220 128" aria-hidden="true">
          <path class="solution-sketch solution-sketch--soft" d="M10 112c42 2 36-34 73-30 38 4 34-36 68-34 29 2 34-24 57-34"/>
          <path class="solution-sketch" d="M8 102c42 2 36-34 73-30 38 4 34-36 68-34 29 2 34-24 57-34"/>
          <path class="solution-sketch" d="m183 4 27-2-3 27"/>
          <circle cx="80" cy="72" r="7"/><circle cx="148" cy="38" r="7"/>
        </svg>
      </header>
      <div class="solution-plans">
        ${plans.map((plan, index) => `<article class="solution-plan" style="--plan-index:${index}">
          <div class="solution-plan__top"><p>${plan.tier}</p><h3>${plan.title}</h3><span>${plan.purpose}</span></div>
          <dl>
            <div><dt>Best for</dt><dd>${plan.bestFor}</dd></div>
            <div><dt>Engagement</dt><dd>${plan.engagement}</dd></div>
            <div><dt>Outcome</dt><dd>${plan.outcome}</dd></div>
            <div><dt>Return</dt><dd>${plan.roi}</dd></div>
          </dl>
          <a class="button button--teal" href="${plan.href}" target="_blank" rel="noreferrer">Contact team ${arrow}</a>
        </article>`).join('')}
      </div>
      <p class="solution-dialog__note">Each option opens a pre-filled WhatsApp conversation with our team.</p>
    </div>
  </dialog>`;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="footer-lead shell">
        <p class="kicker kicker--light">Lead what comes next</p>
        <p class="footer-statement">Believe in yourself. Be brave. Be bold. Be brilliant. Build your better world.</p>
      </div>
      <div class="footer-grid shell">
        <div class="footer-brand">
          <a class="brand brand--footer" href="/" aria-label="Leadapreneur home"><span class="brand__white-logo" aria-hidden="true"></span></a>
          <p>Future-proofing people, culture and organisations through real AI innovation.</p>
          <div class="social-links" aria-label="Social media">
            <a href="${site.social.linkedin}" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="${site.social.instagram}" target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href="${site.social.youtube}" target="_blank" rel="noreferrer">YouTube ↗</a>
          </div>
        </div>
        <div>
          <h2>Explore</h2>
          <ul>
            <li><a href="/role-quiz/">Role Quiz</a></li>
            <li><a href="/ai-x-talent-accelerator/">AI × Talent Accelerator</a></li>
            <li><a href="/projects/">Projects</a></li>
            <li><a href="/case-studies/">Case studies</a></li>
            <li><a href="/events/">Events</a></li>
          </ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            <li><a href="/about/">About</a></li>
            <li><a href="/insights/">Insights</a></li>
            <li><a href="/future-proof-assessment/">Organisation assessment</a></li>
            <li><a href="/contact/">Contact</a></li>
            <li><a href="${site.cosmos}" target="_blank" rel="noreferrer">COSMOS ↗</a></li>
          </ul>
        </div>
        <div class="footer-contact">
          <h2>${site.legalName}</h2>
          <address>${site.address.join('<br>')}</address>
          <a href="${site.whatsapp}" target="_blank" rel="noreferrer">Chat on WhatsApp ↗</a>
        </div>
      </div>
      <div class="footer-meta shell">
        <p>© ${new Date().getFullYear()} Leadapreneur. All rights reserved.</p>
        <nav aria-label="Legal">
          <a href="https://www.leadapreneur.com/terms">Terms of use</a>
          <a href="https://www.leadapreneur.com/privacy-policy">Privacy policy</a>
        </nav>
      </div>
    </footer>`;
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/images/logo-horizontal.png`,
    slogan: 'Dare to be great',
    description: site.description,
    foundingDate: '2006',
    founder: {
      '@type': 'Person',
      name: 'Jan Henrik Bartscht',
      jobTitle: 'Founder & CEO',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${site.address[0]}, ${site.address[1]}`,
      addressLocality: 'Kuala Lumpur',
      postalCode: '59200',
      addressCountry: 'MY',
    },
    areaServed: ['MY', 'SG', 'KH', 'PH', 'ID', 'HK'],
    sameAs: Object.values(site.social),
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function layout({
  path,
  title,
  description,
  image = '/images/quiz-banner.jpeg',
  ogType = 'website',
  body,
  pageClass = '',
  scripts = [],
  structuredData = [],
  noindex = false,
}) {
  const canonical = `${site.url}${path === '/' ? '/' : `${path.replace(/\/$/, '')}/`}`;
  const socialImage = image.startsWith('http') ? image : `${site.url}${image}`;
  const jsonLd = structuredData
    .map((schema) => `<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>`)
    .join('\n');
  const scriptTags = scripts.map((src) => `<script type="module" src="${src}"></script>`).join('\n');

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#f3eee5">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="robots" content="${noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large'}">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" href="/images/logo.svg" type="image/svg+xml">
  <meta property="og:type" content="${ogType}">
  <meta property="og:site_name" content="Leadapreneur">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${socialImage}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="${socialImage}">
  <link rel="stylesheet" href="/assets/styles.css?v=20260904-13">
  ${jsonLd}
</head>
<body class="${pageClass}">
  <a class="skip-link" href="#main">Skip to content</a>
  ${header()}
  <main id="main">${body}</main>
  ${footer()}
  ${solutionModal()}
  <script type="module" src="/assets/site.js?v=20260904-13"></script>
  ${scriptTags}
  <script>
    if (/(^|\\.)leadapreneur\\.com$/.test(location.hostname)) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
      var gtm = document.createElement('script');
      gtm.async = true;
      gtm.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-NMB5H6C4';
      document.head.appendChild(gtm);
    }
  </script>
</body>
</html>`;
}

export function sectionHeading(kicker, title, copy = '', align = '') {
  return `<div class="section-heading ${align}">
    <p class="kicker">${kicker}</p>
    <h2>${title}</h2>
    ${copy ? `<p>${copy}</p>` : ''}
  </div>`;
}

export function breadcrumb(items) {
  return `<nav class="breadcrumbs" aria-label="Breadcrumb"><ol>${items
    .map((item, index) => `<li>${index === items.length - 1 ? escapeHtml(item.name) : `<a href="${item.path}">${escapeHtml(item.name)}</a>`}</li>`)
    .join('')}</ol></nav>`;
}
