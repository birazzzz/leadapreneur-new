import { companies, educationalVideos, insights, inspiringPodcasts, roles, site } from '../data/content.mjs';
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
    <svg class="final-cta__journey" viewBox="0 0 920 580" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="journey-dawn" cx=".5" cy=".5" r=".5">
          <stop stop-color="#81EDFF" stop-opacity=".30"/><stop offset=".55" stop-color="#009FB8" stop-opacity=".10"/><stop offset="1" stop-color="#009FB8" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="journey-terrain" x1="364" y1="580" x2="840" y2="94" gradientUnits="userSpaceOnUse">
          <stop stop-color="#009FB8" stop-opacity=".04"/><stop offset="1" stop-color="#81EDFF" stop-opacity=".20"/>
        </linearGradient>
        <linearGradient id="journey-ridge" x1="0" y1="0" x2="0" y2="1">
          <stop stop-color="#81EDFF" stop-opacity=".10"/><stop offset="1" stop-color="#81EDFF" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="journey-beacon" x1="0" y1=".5" x2="1" y2=".5">
          <stop stop-color="#81EDFF" stop-opacity="0"/><stop offset=".68" stop-color="#81EDFF" stop-opacity=".16"/><stop offset="1" stop-color="#81EDFF" stop-opacity=".40"/>
        </linearGradient>
        <linearGradient id="journey-aurora" x1="0" y1="0" x2="1" y2="0">
          <stop stop-color="#81EDFF" stop-opacity="0"/><stop offset=".5" stop-color="#81EDFF" stop-opacity=".22"/><stop offset="1" stop-color="#009FB8" stop-opacity="0"/>
        </linearGradient>
        <radialGradient id="journey-halo" cx=".5" cy=".5" r=".5">
          <stop stop-color="#81EDFF" stop-opacity=".85"/><stop offset=".4" stop-color="#81EDFF" stop-opacity=".28"/><stop offset="1" stop-color="#81EDFF" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="journey-trail" x1="0" y1="0" x2="1" y2="0">
          <stop stop-color="#81EDFF" stop-opacity="0"/><stop offset="1" stop-color="#81EDFF" stop-opacity=".55"/>
        </linearGradient>
      </defs>

      <circle class="journey-dawn" cx="812" cy="40" r="300" fill="url(#journey-dawn)"/>
      <path class="journey-aurora" d="M120 96C300 34 520 150 900 44" stroke="url(#journey-aurora)" stroke-width="46" stroke-linecap="round"/>

      <g class="journey-stars">
        <circle cx="188" cy="94" r="1.7"/><circle cx="286" cy="52" r="1.2"/><circle cx="352" cy="132" r="1.9"/>
        <circle cx="447" cy="70" r="1.3"/><circle cx="530" cy="150" r="1.6"/><circle cx="612" cy="66" r="1.2"/>
        <circle cx="676" cy="126" r="1.8"/><circle cx="742" cy="42" r="1.4"/><circle cx="820" cy="118" r="1.5"/>
        <circle cx="884" cy="70" r="1.2"/><circle cx="238" cy="168" r="1.4"/><circle cx="404" cy="196" r="1.2"/>
      </g>

      <path class="journey-ridge" d="M-20 486C90 442 168 452 250 414C334 375 388 396 470 352C560 304 604 318 690 262C772 209 826 214 920 148V580H-20Z" fill="url(#journey-ridge)"/>

      <g class="journey-terrain">
        <path class="journey-terrain__mass" d="M311 580C360 516 412 489 465 474C536 454 551 390 616 363C689 332 715 250 764 209C816 165 850 101 920 54V580Z"/>
        <path class="journey-terrain__facet journey-terrain__facet--one" d="M465 474 616 363 699 398 573 503Z"/>
        <path class="journey-terrain__facet journey-terrain__facet--two" d="m616 363 148-154 64 121-129 68Z"/>
        <path class="journey-terrain__facet journey-terrain__facet--three" d="m764 209 88-126 68-29v146l-92 130Z"/>
        <path class="journey-contour" d="M330 567C395 507 448 500 501 465C555 430 567 377 627 350C689 322 716 244 776 196C830 152 858 100 916 68"/>
        <path class="journey-contour journey-contour--two" d="M366 580C421 532 468 520 524 480C577 442 594 395 645 373C719 341 748 268 794 228C846 183 872 139 920 107"/>
        <path class="journey-contour journey-contour--three" d="M450 580C493 548 536 533 581 497C623 464 641 423 683 401C746 367 780 305 820 267C858 231 889 190 920 168"/>
      </g>

      <path class="journey-road journey-road--shadow" d="M54 528C131 530 151 491 231 478C324 463 344 407 431 389C520 370 539 324 611 302C694 276 721 215 787 172C824 148 848 116 875 79"/>
      <path class="journey-road journey-road--edge" d="M54 528C131 530 151 491 231 478C324 463 344 407 431 389C520 370 539 324 611 302C694 276 721 215 787 172C824 148 848 116 875 79"/>
      <path class="journey-road journey-road--live" pathLength="1" d="M54 528C131 530 151 491 231 478C324 463 344 407 431 389C520 370 539 324 611 302C694 276 721 215 787 172C824 148 848 116 875 79"/>

      <g class="journey-gateway" transform="translate(148 374)">
        <path class="journey-platform" d="M-28 123 53 96l112 29-84 32Z"/>
        <path class="journey-architecture journey-gateway__frame" d="M0 126V28L56 0l62 28v98M0 28l56 25 62-25M56 53v72M-10 128h140"/>
        <path class="journey-detail" d="M10 37V18L56-6l51 23v20M8 70l48 18 53-18"/>
        <g class="journey-gateway__door journey-gateway__door--left">
          <path class="journey-panel" d="M8 38 52 56v65L8 111Z"/><path class="journey-panel__line" d="m16 54 28 11M16 78l28 10"/>
        </g>
        <g class="journey-gateway__door journey-gateway__door--right">
          <path class="journey-panel" d="m60 56 49-18v73l-49 10Z"/><path class="journey-panel__line" d="m69 65 31-11M69 87l31-9"/>
        </g>
        <circle class="journey-glow" cx="56" cy="138" r="30" fill="url(#journey-halo)"/>
        <circle class="journey-marker" cx="56" cy="138" r="7"/><circle class="journey-marker__ring" cx="56" cy="138" r="17"/>
        <text class="journey-label" x="-4" y="174">01 &#183; ENTER</text>
      </g>

      <g class="journey-lighthouse" transform="translate(426 230)">
        <path class="journey-cliff" d="M-45 154 47 119l107 38-90 41Z"/>
        <g class="journey-beam"><path d="M66 29-150-34-142 82 66 42Z" fill="url(#journey-beacon)"/><path class="journey-beam__edge" d="M65 29-142-34M65 42-142 82"/></g>
        <path class="journey-tower" d="m35 139 13-83h40l15 83Z"/>
        <path class="journey-architecture" d="m35 139 13-83h40l15 83M28 139h83M43 87h52M39 113h60"/>
        <path class="journey-detail" d="m50 57-7-12h51l-7 12M48 44V29h40v15M42 29h52M50 29l7-13h23l8 13M69 16V5"/>
        <path class="journey-railing" d="M35 45V32M45 45V32M55 45V32M65 45V32M75 45V32M85 45V32M95 45V32"/>
        <circle class="journey-glow journey-glow--lamp" cx="69" cy="35" r="34" fill="url(#journey-halo)"/>
        <circle class="journey-lamp" cx="69" cy="35" r="8"/>
        <circle class="journey-glow" cx="69" cy="159" r="30" fill="url(#journey-halo)"/>
        <circle class="journey-marker" cx="69" cy="159" r="7"/><circle class="journey-marker__ring" cx="69" cy="159" r="17"/>
        <text class="journey-label" x="18" y="196">02 &#183; ORIENT</text>
      </g>

      <g class="journey-summit" transform="translate(682 54)">
        <path class="journey-summit__back" d="m-86 186 98-91 62 38 68-85 96 138Z"/>
        <path class="journey-summit__face journey-summit__face--left" d="m12 95 62 38-42 53-118 0Z"/>
        <path class="journey-summit__face journey-summit__face--right" d="m74 133 68-85 96 138H32Z"/>
        <path class="journey-architecture" d="m-86 186 98-91 62 38 68-85 96 138M12 95l20 91M74 133l-42 53M142 48l-8 138"/>
        <path class="journey-contour" d="m-39 169 52-47 53 32 69-83 63 91M-8 182l24-31 44 25M100 152l37-51 42 57"/>
        <path class="journey-flagpole" d="M142 49V-25"/>
        <g class="journey-flag"><path d="M143-23c25 13 45-5 70 7v39c-24-12-46 6-70-7Z"/><path d="M151-11c18 6 34-5 51 2"/></g>
        <circle class="journey-glow journey-glow--sun" cx="142" cy="-25" r="86" fill="url(#journey-halo)"/>
        <g class="journey-sun"><circle cx="142" cy="-25" r="34"/><circle cx="142" cy="-25" r="47"/></g>
        <circle class="journey-glow" cx="142" cy="49" r="30" fill="url(#journey-halo)"/>
        <circle class="journey-marker" cx="142" cy="49" r="7"/><circle class="journey-marker__ring" cx="142" cy="49" r="17"/>
        <text class="journey-label" x="104" y="213">03 &#183; RISE</text>
      </g>

      <g class="journey-traveller">
        <path class="journey-traveller__trail" d="M-46 0H0" stroke="url(#journey-trail)" stroke-width="5" stroke-linecap="round"/>
        <circle class="journey-traveller__halo" r="17" fill="url(#journey-halo)"/>
        <circle class="journey-traveller__core" r="5.5"/>
      </g>
    </svg>
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
