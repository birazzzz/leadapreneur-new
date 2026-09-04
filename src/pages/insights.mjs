import { educationalVideos, insights, inspiringPodcasts, site } from '../../data/content.mjs';
import { allInsights, educationalVideoGrid, finalCta, inspiringPodcastGrid } from '../components.mjs';
import { breadcrumb, escapeHtml, pageHeroArt } from '../templates.mjs';

function displayDate(date) {
  return new Intl.DateTimeFormat('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}

export function insightsPage() {
  return `
    <section class="page-hero page-hero--insights">${pageHeroArt('insights')}<div class="shell">${breadcrumb([{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights/' }])}<div class="page-hero__grid"><div><p class="kicker">Insights</p><h1>Ideas for people building what comes next.</h1></div><p class="page-hero__lede">Leadership thinking, practical AI lessons and honest conversations with people who chose to move.</p></div></div></section>

    <nav class="insight-directory shell" aria-label="Insights library">
      <a href="#leadership"><span>${String(insights.length).padStart(2, '0')}</span> Leadership articles</a>
      <a href="#videos"><span>${String(educationalVideos.length).padStart(2, '0')}</span> Educational videos</a>
      <a href="#podcasts"><span>${String(inspiringPodcasts.length).padStart(2, '0')}</span> Inspiring podcasts</a>
    </nav>

    <section class="section insights-index" id="leadership" aria-labelledby="leadership-title"><div class="shell"><div class="section-heading insight-library__heading"><p class="kicker">Leadership articles</p><h2 id="leadership-title">Read what changes the work.</h2><p>Field notes, lived experience and practical thinking on leadership, innovation and becoming future-proof.</p></div>${allInsights()}</div></section>

    <section class="section media-library media-library--videos" id="videos" aria-labelledby="videos-title"><div class="shell"><div class="section-heading insight-library__heading"><p class="kicker">Educational videos</p><h2 id="videos-title">Learn one useful move at a time.</h2><p>Short, practical demonstrations for putting AI to work without the theatre.</p></div>${educationalVideoGrid()}</div></section>

    <section class="section media-library media-library--podcasts" id="podcasts" aria-labelledby="podcasts-title"><div class="shell"><div class="section-heading insight-library__heading"><p class="kicker">Inspiring podcasts</p><h2 id="podcasts-title">Listen to people who made the move.</h2><p>Open conversations about courage, leadership, reinvention and the work behind meaningful change.</p></div>${inspiringPodcastGrid()}</div></section>
    ${finalCta()}`;
}

export function articlePage(insight) {
  const date = displayDate(insight.date);
  return `
    <article class="article-page">
      <header class="article-header">
        <div class="article-header__inner shell-narrow">
          ${breadcrumb([{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights/' }, { name: insight.title, path: `/blog/${encodeURI(insight.slug)}/` }])}
          <p class="kicker">${escapeHtml(insight.category)}</p>
          <h1>${escapeHtml(insight.title)}</h1>
          <p class="article-dek">${escapeHtml(insight.excerpt)}</p>
          <div class="article-byline"><span>By ${escapeHtml(insight.author)}</span><time datetime="${insight.date}">${date}</time><span>${insight.readingTime} min read</span></div>
        </div>
        <figure class="article-cover shell"><img src="${insight.thumbnail}" alt="" width="1600" height="900"></figure>
      </header>
      <div class="article-body shell-narrow">
        <div class="article-content">${insight.contentHtml}</div>
        <aside><p class="kicker kicker--light">Put the idea to work</p><h2>Future-proofing becomes real when someone builds.</h2><a class="button button--cyan" href="/ai-x-talent-accelerator/">Explore the Accelerator</a></aside>
      </div>
    </article>`;
}

export function articleSchema(insight) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: insight.title,
    description: insight.excerpt,
    image: `${site.url}${insight.thumbnail}`,
    datePublished: insight.date,
    dateModified: insight.date,
    author: { '@type': insight.author === 'Leadapreneur' ? 'Organization' : 'Person', name: insight.author },
    publisher: { '@type': 'Organization', name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/blog/${encodeURI(insight.slug)}/`,
  };
}
