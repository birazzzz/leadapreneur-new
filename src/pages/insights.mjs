import { insights } from '../../data/content.mjs';
import { featuredInsights, finalCta } from '../components.mjs';
import { breadcrumb, escapeHtml, pageHeroArt } from '../templates.mjs';

const articles = {
  'the-great-acceleration-a-strategic-briefing-for-ceos-in-the-age-of-ai': {
    dek: 'The next five years may bring as much change as the previous twenty-five. Leaders need a way to turn that acceleration into useful action.',
    author: 'Jan Henrik Bartscht',
    sections: [
      ['Change itself has changed', 'New technological capabilities and political realities are arriving faster, with greater organisational impact. The challenge will look different in every company, but the shared experience is the same: decisions that once had years of runway now arrive in compressed cycles.'],
      ['The management model has to move', 'Tool access is not the same as readiness. Organisations need managers who can identify a painful problem, use AI to shape a better answer and build enough evidence to win support. Leadapreneur calls this person a leadapreneur: a leader who innovates with AI.'],
      ['Turn acceleration into a working pipeline', 'The practical response is not to predict every change. It is to build the capability to notice, propose, prototype, deploy and measure—again and again. That makes future-proofing a system of work rather than a one-off training intervention.'],
    ],
  },
  'from-resistance-to-renewal-wendys-leadership-journey-through-the-toshiba-teka-greatness-games': {
    dek: 'Real transformation begins when an organisation stops protecting what worked before and decides how it will lead forward.',
    author: 'Leadapreneur',
    sections: [
      ['When transformation stops being a concept', 'Most organisations talk about transformation. Living through it is harder: habits are challenged, assumptions are exposed and leaders have to act while the future is still unclear. That was the context in which the TOSHIBA TEKA Greatness Games began.'],
      ['Leadership begins with a decision', 'Launching the Games was not an obvious or frictionless choice. It asked people to move beyond business-as-usual, experiment with AI and take responsibility for a problem worth solving. The programme used the energy of competition without losing sight of real work.'],
      ['From ideas into implementation', 'The lasting shift was not a single moment of inspiration. It was the movement from learning to doing: participants developed confidence, built ideas around live business needs and began a longer journey from proposals into measurable implementation.'],
    ],
  },
  'what-we-witnessed-at-leadapreneur-open-day-2025-a-real-look-at-future-proofing-your-talent-in-the-age-of-ai': {
    dek: 'An unscripted story at Open Day 2025 showed what future-proofing looks like when one manager decides to change a system.',
    author: 'Leadapreneur',
    sections: [
      ['A voice the room did not expect', 'After a speaker finished, Fitria Khalid from Generali Malaysia asked to share her experience. Years earlier, while at AXA, she had completed an intensive Leadapreneur innovation programme. She described the challenge honestly—and what it made possible afterwards.'],
      ['One manager changed the system', 'Without coming from IT, Fitria helped integrate retail products into a front-end point-of-sale system, won support from developers and senior leaders and contributed to a system now used by 6,500 agents daily. Her story made the day’s theme tangible: leadership can come from anyone willing to take ownership.'],
      ['The real lesson from the room', 'Future-proofing is not a vocabulary exercise. It asks people to identify pain, imagine a better system, build support and keep moving until the change works in the real world. Open Day became proof that capability grows when people are challenged to use it.'],
    ],
  },
};

export function insightsPage() {
  return `
    <section class="page-hero page-hero--insights">${pageHeroArt('insights')}<div class="shell">${breadcrumb([{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights/' }])}<div class="page-hero__grid"><div><p class="kicker">Insights</p><h1>Ideas for people building what comes next.</h1></div><p class="page-hero__lede">Field notes on AI, leadership, innovation and the work of turning pressure into progress.</p></div></div></section>
    <section class="section insights-index" aria-labelledby="latest-insights-title"><div class="shell"><div class="section-heading"><p class="kicker">Latest</p><h2 id="latest-insights-title">Read what changes the work.</h2></div>${featuredInsights()}</div></section>
    ${finalCta()}`;
}

export function articlePage(insight) {
  const article = articles[insight.slug];
  const displayDate = new Intl.DateTimeFormat('en', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${insight.date}T00:00:00Z`));
  return `
    <article class="article-page">
      <header class="article-header"><div class="article-header__inner shell-narrow">${breadcrumb([{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights/' }, { name: insight.title, path: `/blog/${insight.slug}/` }])}<p class="kicker">${insight.category}</p><h1>${insight.title}</h1><p class="article-dek">${article.dek}</p><div class="article-byline"><span>By ${article.author}</span><time datetime="${insight.date}">${displayDate}</time><span>5 min read</span></div></div></header>
      <div class="article-body shell-narrow"><p class="article-drop">The intelligence age is not a distant scenario. It is already changing the speed, shape and standard of leadership.</p>${article.sections.map(([title, copy]) => `<section><h2>${title}</h2><p>${copy}</p></section>`).join('')}<aside><p class="kicker">Put the idea to work</p><h2>Future-proofing becomes real when someone builds.</h2><a class="button button--teal" href="/ai-x-talent-accelerator/">Explore the Accelerator</a></aside></div>
    </article>`;
}

export function articleSchema(insight) {
  const article = articles[insight.slug];
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: insight.title,
    description: article.dek,
    datePublished: insight.date,
    dateModified: insight.date,
    author: { '@type': article.author === 'Leadapreneur' ? 'Organization' : 'Person', name: article.author },
    publisher: { '@type': 'Organization', name: 'Leadapreneur', url: 'https://www.leadapreneur.com' },
    mainEntityOfPage: `https://www.leadapreneur.com/blog/${insight.slug}/`,
  };
}
