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
          <stop stop-color="#81EDFF" stop-opacity=".32"/><stop offset=".55" stop-color="#009FB8" stop-opacity=".10"/><stop offset="1" stop-color="#009FB8" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="journey-terrain" x1="364" y1="580" x2="840" y2="94" gradientUnits="userSpaceOnUse">
          <stop stop-color="#009FB8" stop-opacity=".04"/><stop offset="1" stop-color="#81EDFF" stop-opacity=".20"/>
        </linearGradient>
        <linearGradient id="journey-ridge" x1="0" y1="0" x2="0" y2="1">
          <stop stop-color="#81EDFF" stop-opacity=".10"/><stop offset="1" stop-color="#81EDFF" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="journey-beacon" x1="0" y1=".5" x2="1" y2=".5">
          <stop stop-color="#81EDFF" stop-opacity="0"/><stop offset=".68" stop-color="#81EDFF" stop-opacity=".18"/><stop offset="1" stop-color="#81EDFF" stop-opacity=".46"/>
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

        <!-- Stone: pale face catching the dawn, falling into deep teal shadow. -->
        <linearGradient id="stone-lit" x1="0" y1="0" x2=".65" y2="1">
          <stop stop-color="#DFF6FB" stop-opacity=".92"/><stop offset="1" stop-color="#8FD3E4" stop-opacity=".62"/>
        </linearGradient>
        <linearGradient id="stone-mid" x1="0" y1="0" x2=".4" y2="1">
          <stop stop-color="#8FD3E4" stop-opacity=".58"/><stop offset="1" stop-color="#2C7C8C" stop-opacity=".48"/>
        </linearGradient>
        <linearGradient id="stone-dark" x1="0" y1="0" x2=".3" y2="1">
          <stop stop-color="#2C7C8C" stop-opacity=".52"/><stop offset="1" stop-color="#0E3F49" stop-opacity=".72"/>
        </linearGradient>
        <linearGradient id="portal-light" x1=".5" y1="1" x2=".5" y2="0">
          <stop stop-color="#FFF4DC" stop-opacity=".95"/><stop offset=".45" stop-color="#81EDFF" stop-opacity=".55"/><stop offset="1" stop-color="#81EDFF" stop-opacity=".05"/>
        </linearGradient>
        <linearGradient id="snow-cap" x1="0" y1="0" x2=".5" y2="1">
          <stop stop-color="#FFFFFF" stop-opacity=".95"/><stop offset="1" stop-color="#BFE9F5" stop-opacity=".6"/>
        </linearGradient>
        <linearGradient id="sea-sheen" x1="0" y1="0" x2="1" y2="0">
          <stop stop-color="#81EDFF" stop-opacity="0"/><stop offset=".5" stop-color="#81EDFF" stop-opacity=".34"/><stop offset="1" stop-color="#81EDFF" stop-opacity="0"/>
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

      <!-- 01 - THE GATE ------------------------------------------------------
           A pointed arch cut from crystal, with the way through already lit. -->
      <g class="journey-gateway" transform="translate(148 374)">
        <path class="gate-plinth gate-plinth--outer" d="M-36 130 56 99l96 32-94 32Z"/>
        <path class="gate-plinth gate-plinth--inner" d="M-6 130 56 111l60 20-58 20Z"/>

        <path class="gate-portal" d="M28 128V48C28 22 40 0 56-16 72 0 84 22 84 48v80Z"/>
        <path class="gate-portal__core" d="M40 128V52c0-18 6-32 16-42 10 10 16 24 16 42v76Z"/>

        <path class="gate-frame" fill-rule="evenodd" d="M4 128V38C4 2 26-30 56-52 86-30 108 2 108 38v90H84V48C84 22 72 0 56-16 40 0 28 22 28 48v80Z"/>
        <path class="gate-facet gate-facet--lit" d="M4 128V38C4 12 16-12 34-30l8 10C26-4 16 20 16 44v84Z"/>
        <path class="gate-facet gate-facet--dark" d="M108 128V38c0-26-12-50-30-68l-8 10c16 16 26 40 26 64v84Z"/>
        <path class="gate-facet gate-facet--mid" d="M34-30 56-52l22 22-22 14Z"/>
        <path class="gate-key" d="M56-56 66-36 56-22 46-36Z"/>

        <path class="gate-band" d="M4 62h24M84 62h24M4 92h24M84 92h24"/>
        <path class="gate-shard gate-shard--a" d="M-18 36 -12 44 -18 52 -24 44Z"/>
        <path class="gate-shard gate-shard--b" d="M128 14 133 20 128 26 123 20Z"/>
        <path class="gate-shard gate-shard--c" d="M122 68 126 73 122 78 118 73Z"/>
        <path class="gate-shard gate-shard--d" d="M-26 76 -21 82 -26 88 -31 82Z"/>

        <circle class="journey-glow" cx="56" cy="138" r="30" fill="url(#journey-halo)"/>
        <circle class="journey-marker" cx="56" cy="138" r="7"/><circle class="journey-marker__ring" cx="56" cy="138" r="17"/>
        <text class="journey-label" x="-4" y="174">01 &#183; ENTER</text>
      </g>

      <!-- 02 - THE LIGHTHOUSE -------------------------------------------------
           One fixed point on a small island, sweeping the dark. -->
      <g class="journey-lighthouse" transform="translate(426 230)">
        <ellipse class="lh-sea lh-sea--far" cx="64" cy="156" rx="128" ry="19"/>
        <ellipse class="lh-sea lh-sea--near" cx="64" cy="160" rx="96" ry="14"/>
        <path class="lh-sheen" d="M-44 152h216" stroke="url(#sea-sheen)" stroke-width="2"/>

        <path class="lh-rock lh-rock--dark" d="M-34 152 8 126l46-10 52 10 46 26-40 18-108 2Z"/>
        <path class="lh-rock lh-rock--mid" d="M8 126 54 116l30 8-18 26-52 4Z"/>
        <path class="lh-rock lh-rock--lit" d="M54 116 106 126l14 16-40 8-14-24Z"/>
        <path class="lh-rock__edge" d="M-34 152 8 126l46-10 52 10 46 26M8 126l6 30M106 126l-26 24"/>

        <g class="journey-beam">
          <path d="M64 26-152-38-144 80 64 40Z" fill="url(#journey-beacon)"/>
          <path class="journey-beam__edge" d="M64 26-144-38M64 40-144 80"/>
        </g>

        <path class="lh-tower" d="M40 140 47 56h44l7 84Z"/>
        <path class="lh-tower__lit" d="M40 140 47 56h16l-6 84Z"/>
        <path class="lh-band" d="M43 114h52M45 90h48M46.5 72h45"/>
        <path class="lh-base" d="M34 142h70l-4-10H38Z"/>

        <path class="lh-gallery" d="M40 56 43 47h52l3 9Z"/>
        <path class="lh-rail" d="M43 47V34M51 47V34M59 47V34M67 47V34M75 47V34M83 47V34M91 47V34"/>
        <path class="lh-rail__top" d="M41 34h56"/>

        <path class="lh-lantern" d="M52 34 54 12h30l2 22Z"/>
        <path class="lh-glass" d="M60 32V14M69 33V13M78 32V14"/>
        <path class="lh-roof" d="M48 12 69-6l21 18Z"/>
        <path class="lh-finial" d="M69-6v-8"/>

        <circle class="journey-glow journey-glow--lamp" cx="69" cy="24" r="36" fill="url(#journey-halo)"/>
        <circle class="journey-lamp" cx="69" cy="24" r="7"/>

        <circle class="journey-glow" cx="69" cy="159" r="30" fill="url(#journey-halo)"/>
        <circle class="journey-marker" cx="69" cy="159" r="7"/><circle class="journey-marker__ring" cx="69" cy="159" r="17"/>
        <text class="journey-label" x="18" y="196">02 &#183; ORIENT</text>
      </g>

      <!-- 03 - THE SUMMIT -----------------------------------------------------
           The climb is drawn on the face of the mountain, switchback by switchback. -->
      <g class="journey-summit" transform="translate(682 54)">
        <circle class="journey-glow journey-glow--sun" cx="142" cy="-30" r="92" fill="url(#journey-halo)"/>

        <path class="peak-back" d="M-104 190-16 106 36 140 94 72 142 44 198 100 252 190Z"/>
        <path class="peak-face peak-face--left" d="M-104 190-16 106 36 140 58 190Z"/>
        <path class="peak-face peak-face--spur" d="M-16 106 36 140 12 190-52 190Z"/>
        <path class="peak-face peak-face--front" d="M36 140 94 72 142 44 124 190 58 190Z"/>
        <path class="peak-face peak-face--gully" d="M94 72 142 44 124 190 96 190Z"/>
        <path class="peak-face peak-face--right" d="M142 44 198 100 176 190 124 190Z"/>
        <path class="peak-face peak-face--buttress" d="M198 100 252 190 176 190Z"/>
        <path class="peak-snow" d="M142 44 170 74 146 82 124 66 108 78 94 72Z"/>
        <path class="peak-snow peak-snow--spur" d="M-16 106 6 128-8 134-24 120Z"/>
        <path class="peak-edge" d="M-104 190-16 106 36 140 94 72 142 44 198 100 252 190M36 140 58 190M142 44 124 190M94 72 108 78M198 100 176 190M-16 106 12 190"/>

        <path class="peak-trail__glow" d="M6 184 60 168 28 146 84 130 52 110 104 94 78 76 124 62 106 52 140 46"/>
        <path class="peak-trail" pathLength="1" d="M6 184 60 168 28 146 84 130 52 110 104 94 78 76 124 62 106 52 140 46"/>
        <g class="peak-trail__nodes">
          <circle cx="60" cy="168" r="2.6"/><circle cx="84" cy="130" r="2.6"/>
          <circle cx="104" cy="94" r="2.6"/><circle cx="124" cy="62" r="2.6"/>
        </g>

        <path class="flag-pole" d="M142 46V-34"/>
        <g class="journey-flag">
          <path class="flag-cloth" d="M144-32c24 12 44-6 68 6v40c-24-12-44 6-68-6Z"/>
          <path class="flag-fold" d="M152-20c17 6 33-5 50 1"/>
          <text class="flag-mark" x="168" y="-3">AI</text>
        </g>

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
