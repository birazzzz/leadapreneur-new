import { companies, insights, roles, site } from '../data/content.mjs';
import { arrow, escapeHtml, link } from './templates.mjs';

export function roleCards({ limit = roles.length, interactive = true } = {}) {
  return roles
    .slice(0, limit)
    .map(
      (role, index) => `
      <article class="role-card reveal" style="--role:${role.accent};--card-index:${index}" data-role-card>
        <div class="role-card__visual">
          <img src="${role.image}" alt="${role.name} archetype artwork" width="1024" height="1365" loading="${index === 0 ? 'eager' : 'lazy'}">
          <span class="role-card__number">${role.number}</span>
          <span class="role-card__symbol" aria-hidden="true">${role.symbol}</span>
        </div>
        <div class="role-card__body">
          <p class="role-card__label">${role.bestAt}</p>
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
  return `<div class="logo-strip" aria-label="Organisations that have worked with Leadapreneur">
    ${companies
      .map(
        ([name, image]) => `<figure><img src="${image}" alt="${escapeHtml(name)}" loading="lazy"><figcaption class="sr-only">${escapeHtml(name)}</figcaption></figure>`,
      )
      .join('')}
  </div>`;
}

export function projectCard(project, index = 0) {
  return `<article class="project-card reveal" style="--delay:${index * 70}ms" data-tag="${project.theme.toLowerCase().replaceAll(' ', '-')}">
    <div class="project-card__meta"><span>${project.industry}</span><span class="status-dot">${project.status}</span></div>
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
    <a href="/blog/${insight.slug}/" aria-label="Read ${escapeHtml(insight.title)}">
      <div class="insight-card__art" aria-hidden="true"><span>${String(index + 1).padStart(2, '0')}</span><i></i></div>
      <div class="insight-card__meta"><span>${insight.category}</span><time datetime="${insight.date}">${displayDate}</time></div>
      <h3>${insight.title}</h3>
      <p>${insight.excerpt}</p>
      <span class="text-link">Read insight ${arrow}</span>
    </a>
  </article>`;
}

export function featuredInsights() {
  return `<div class="insight-grid">${insights.map(insightCard).join('')}</div>`;
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
    <div class="shell final-cta__inner">
      <div><p class="kicker kicker--light">Your move</p><h2>Dare<br>to be<br><em>great.</em></h2></div>
      <div class="final-cta__copy">
        <p>The future will not wait for your people to catch up. Give them a real challenge—and the system to turn it into measurable value.</p>
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
