import { companies, educationalVideos, insights, inspiringPodcasts, roles, site } from '../data/content.mjs';
import { arrow, escapeHtml, link } from './templates.mjs';

// `withArt: false` drops the per-card artwork, for surfaces that carry one
// shared illustration behind the deck instead.
export function roleCards({ limit = roles.length, interactive = true, withArt = true } = {}) {
  return roles
    .slice(0, limit)
    .map(
      (role, index) => `
      <article class="role-card reveal${withArt ? '' : ' role-card--plain'}" style="--role:${role.accent};--card-index:${index}" data-role-card>
        ${withArt ? `<div class="role-card__visual">
          <img src="${role.image}" alt="${role.name} archetype artwork" width="1024" height="1365" loading="${index === 0 ? 'eager' : 'lazy'}">
          <span class="role-card__number">${role.number}</span>
        </div>` : ''}
        <div class="role-card__body">
          <p class="role-card__label">${withArt ? '' : `<span class="role-card__number">${role.number}</span>`}${role.bestAt}</p>
          <h3>${role.name}</h3>
          <p>${role.tagline}</p>
          <div class="trait-list" aria-label="Signature traits">${role.traits.map((trait) => `<span>${trait}</span>`).join('')}</div>
          ${interactive ? `<button type="button" class="role-reveal" aria-expanded="false" aria-controls="role-more-${role.id}" data-role-reveal>See if this sounds like you <span aria-hidden="true">+</span></button>
          <div class="role-card__more" id="role-more-${role.id}" hidden>
            <p><b>You may be this role if…</b></p>
            <p>${role.description}</p>
            <a href="/role-quiz/">Discover your role ${arrow}</a>
          </div>` : ''}
        </div>
      </article>`,
    )
    .join('');
}

export function logoStrip() {
  const logos = companies
    .map(
      ([name, image]) => `<figure><img src="${image}" alt="${escapeHtml(name)}" loading="lazy"><figcaption class="sr-only">${escapeHtml(name)}</figcaption></figure>`,
    )
    .join('');
  const echoes = companies
    .map(([, image]) => `<figure><img src="${image}" alt="" loading="lazy"></figure>`)
    .join('');

  return `<div class="logo-strip" aria-label="Organisations that have worked with Leadapreneur">
    <div class="logo-strip__track">
      <div class="logo-strip__group">${logos}</div>
      <div class="logo-strip__group" aria-hidden="true">${echoes}</div>
    </div>
  </div>`;
}

// One mark per project theme, drawn on a shared 24x24 grid.
const themeIcons = {
  sales: '<path d="M4 19V9m5 10V5m5 14v-7m5 7V8"/>',
  operations: '<path d="M4 12h4l2.5 6 3-13L16 12h4"/>',
  'risk & compliance': '<path d="M12 3.5 5 6.5v5c0 4.2 2.9 7.8 7 8.8 4.1-1 7-4.6 7-8.8v-5Z"/><path d="m9 11.8 2.1 2.2L15 10"/>',
  people: '<circle cx="9" cy="9" r="3"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><path d="M16 6.4a3 3 0 0 1 0 5.2M18 14.2a5.5 5.5 0 0 1 2.5 4.8"/>',
};

function projectIcon(theme) {
  const key = theme.toLowerCase();
  return `<span class="project-card__icon" aria-hidden="true"><svg viewBox="0 0 24 24">${themeIcons[key] || themeIcons.operations}</svg></span>`;
}

export function projectCard(project, index = 0) {
  return `<article class="project-card reveal" style="--delay:${index * 70}ms" data-tag="${project.theme.toLowerCase().replaceAll(' ', '-')}">
    <div class="project-card__meta">${projectIcon(project.theme)}<span class="status-dot">${project.status}</span></div>
    <p class="project-card__programme">${project.programme}</p>
    <h3>${project.title}</h3>
    <div class="project-card__value"><strong>${project.value}</strong><span>${project.valueLabel}</span></div>
    <dl>
      <div><dt>Evidence</dt><dd>${project.secondary}</dd></div>
      <div><dt>Result</dt><dd>${project.result}</dd></div>
    </dl>
    <details>
      <summary>See the project <span aria-hidden="true">+</span></summary>
      <div>
        <p class="project-card__industry">${project.industry} · ${project.theme}</p>
        <p><b>Problem:</b> ${project.problem}</p>
        <p><b>Solution:</b> ${project.solution}</p>
        <p class="small"><b>Built with:</b> ${project.builtWith.join(' · ')}</p>
      </div>
    </details>
  </article>`;
}

export function insightCard(insight, index = 0) {
  const displayDate = new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${insight.date}T00:00:00Z`));
  return `<article class="insight-card reveal" style="--delay:${index * 80}ms">
    <a href="/blog/${encodeURI(insight.slug)}/" aria-label="Read ${escapeHtml(insight.title)}">
      <figure class="insight-card__art"><img src="${insight.thumbnail}" alt="" width="800" height="450" loading="lazy"><span aria-hidden="true">${String(index + 1).padStart(2, '0')}</span></figure>
      <div class="insight-card__meta"><span>${escapeHtml(insight.category)}</span><time datetime="${insight.date}">${displayDate}</time></div>
      <h3>${escapeHtml(insight.title)}</h3>
      <p>${escapeHtml(insight.excerpt)}</p>
      <span class="text-link">Read insight ${arrow}</span>
    </a>
  </article>`;
}

export function featuredInsights(limit = 3) {
  return `<div class="insight-grid">${insights.slice(0, limit).map(insightCard).join('')}</div>`;
}

export function allInsights() {
  return `<div class="insight-grid insight-grid--library">${insights.map(insightCard).join('')}</div>`;
}

function mediaCard(item, index, label) {
  const watchUrl = `https://www.youtube.com/watch?v=${item.youtubeId}`;
  return `<article class="media-card reveal" style="--delay:${index * 70}ms">
    <a href="${watchUrl}" target="_blank" rel="noreferrer" aria-label="Watch ${escapeHtml(item.title)} on YouTube">
      <figure><img src="https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg" alt="Thumbnail for ${escapeHtml(item.title)}" width="480" height="360" loading="lazy"><span class="media-card__play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m9 7 8 5-8 5Z"/></svg></span><figcaption>${label}</figcaption></figure>
      <h3>${escapeHtml(item.title)}</h3>
      <span class="text-link">Watch on YouTube ${arrow}</span>
    </a>
  </article>`;
}

export function educationalVideoGrid() {
  return `<div class="media-grid">${educationalVideos.map((item, index) => mediaCard(item, index, 'How-to video')).join('')}</div>`;
}

export function inspiringPodcastGrid() {
  return `<div class="media-grid">${inspiringPodcasts.map((item, index) => mediaCard(item, index, 'Leadership conversation')).join('')}</div>`;
}

export function eventTicket(event, state = 'past') {
  return `<article class="event-ticket reveal">
    <div class="event-ticket__date"><span>22</span><b>JUN</b><small>2026</small></div>
    <div class="event-ticket__body">
      <div class="event-ticket__meta"><span>${event.type}</span><span>${state === 'past' ? 'Past event' : event.status}</span></div>
      <h3>${event.title}</h3>
      <p>${event.summary}</p>
      <p class="event-ticket__place">${event.city} · ${event.venue}</p>
      <a class="text-link" href="/events/${event.slug}/">View event recap ${arrow}</a>
    </div>
    <div class="event-ticket__stub" aria-hidden="true"><span>GGKL</span><i></i><span>S01</span></div>
  </article>`;
}

export function finalCta() {
  return `<section class="final-cta">
    <div class="final-cta__scene" aria-hidden="true">
      <img src="/images/cta-journey.svg" alt="" width="1672" height="952" loading="lazy" decoding="async">
    </div>

    <div class="shell final-cta__inner">
      <div class="final-cta__lead"><p class="kicker kicker--light">Your move</p><h2>Dare<br>to be<br><em>great.</em></h2></div>
      <div class="final-cta__copy">
        <p>The future will not wait for your people to catch up. Give them a real challenge&#8212;and the system to turn it into measurable value.</p>
        ${link('/contact/', 'Future-proof your people', 'button button--cyan solution-trigger')}
      </div>
    </div>
  </section>`;
}

export function emptyEvents() {
  return `<div class="event-empty reveal">
    <div class="event-empty__signal" aria-hidden="true"><span></span><span></span><span></span></div>
    <div>
      <p class="kicker">Next season</p>
      <h3>The next public event is being prepared.</h3>
      <p>No future date is published yet. Explore the latest season while the next one takes shape.</p>
    </div>
    ${link('/events/', 'See events and past seasons', 'button button--outline')}
  </div>`;
}

export function contactButtons() {
  return `<div class="button-row">
    ${link('/contact/', 'Start a conversation', 'button button--cyan')}
    ${link(site.cosmos, 'Open COSMOS', 'button button--ghost', true)}
  </div>`;
}
