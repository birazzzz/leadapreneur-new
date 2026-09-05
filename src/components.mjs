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
    <svg class="final-cta__journey" viewBox="0 0 1600 900" fill="none" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMax slice">
      <defs>
        <linearGradient id="sc-sky" x1="0" y1="0" x2=".35" y2="1">
          <stop stop-color="#0B3238"/><stop offset=".55" stop-color="#0E3F47"/><stop offset="1" stop-color="#0A2C32"/>
        </linearGradient>
        <radialGradient id="sc-halo" cx=".5" cy=".5" r=".5">
          <stop stop-color="#81EDFF" stop-opacity=".55"/><stop offset=".45" stop-color="#81EDFF" stop-opacity=".16"/><stop offset="1" stop-color="#81EDFF" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="sc-aurora" x1="0" y1="0" x2="1" y2="0">
          <stop stop-color="#81EDFF" stop-opacity="0"/><stop offset=".45" stop-color="#81EDFF" stop-opacity=".20"/><stop offset="1" stop-color="#81EDFF" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="sc-ridge-far" x1="0" y1="0" x2="0" y2="1">
          <stop stop-color="#2A7F8C" stop-opacity=".34"/><stop offset="1" stop-color="#2A7F8C" stop-opacity=".10"/>
        </linearGradient>
        <linearGradient id="sc-ridge-mid" x1="0" y1="0" x2="0" y2="1">
          <stop stop-color="#164E58" stop-opacity=".85"/><stop offset="1" stop-color="#123F48" stop-opacity=".6"/>
        </linearGradient>
        <linearGradient id="sc-water" x1="0" y1="0" x2="0" y2="1">
          <stop stop-color="#1B5C67" stop-opacity=".5"/><stop offset="1" stop-color="#0B2F36" stop-opacity=".1"/>
        </linearGradient>
        <linearGradient id="sc-sheen" x1="0" y1="0" x2="1" y2="0">
          <stop stop-color="#81EDFF" stop-opacity="0"/><stop offset=".5" stop-color="#81EDFF" stop-opacity=".3"/><stop offset="1" stop-color="#81EDFF" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="sc-lit" x1=".1" y1="0" x2=".7" y2="1">
          <stop stop-color="#E8FAFE"/><stop offset="1" stop-color="#9BDCEA"/>
        </linearGradient>
        <linearGradient id="sc-mid" x1=".1" y1="0" x2=".6" y2="1">
          <stop stop-color="#71C3D4"/><stop offset="1" stop-color="#2E7F8E"/>
        </linearGradient>
        <linearGradient id="sc-dark" x1=".2" y1="0" x2=".6" y2="1">
          <stop stop-color="#1E5F6B"/><stop offset="1" stop-color="#0C333B"/>
        </linearGradient>
        <linearGradient id="sc-rock" x1=".2" y1="0" x2=".7" y2="1">
          <stop stop-color="#15464F"/><stop offset="1" stop-color="#0A2A31"/>
        </linearGradient>
        <linearGradient id="sc-portal" x1=".5" y1="1" x2=".5" y2="0">
          <stop stop-color="#FFFFFF" stop-opacity=".95"/><stop offset=".4" stop-color="#B6F2FF" stop-opacity=".8"/><stop offset="1" stop-color="#81EDFF" stop-opacity=".18"/>
        </linearGradient>
        <linearGradient id="sc-beam" x1="1" y1="0" x2="0" y2="0">
          <stop stop-color="#81EDFF" stop-opacity=".38"/><stop offset="1" stop-color="#81EDFF" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="sc-spark" x1="0" y1="0" x2="1" y2="0">
          <stop stop-color="#81EDFF" stop-opacity="0"/><stop offset="1" stop-color="#FFFFFF" stop-opacity=".9"/>
        </linearGradient>
      </defs>

      <rect class="sc-sky" width="1600" height="900" fill="url(#sc-sky)"/>
      <circle class="sc-dawn" cx="1470" cy="235" r="250" fill="url(#sc-halo)"/>

      <path class="sc-aurora sc-aurora--a" d="M-120 250C320 96 900 262 1760 70" stroke="url(#sc-aurora)" stroke-width="120" stroke-linecap="round"/>
      <path class="sc-aurora sc-aurora--b" d="M-120 150C380 44 1000 190 1760-10" stroke="url(#sc-aurora)" stroke-width="70" stroke-linecap="round"/>

      <g class="sc-stars">
        <circle cx="146" cy="196" r="3"/><circle cx="262" cy="98" r="2.2"/><circle cx="344" cy="286" r="2.6"/>
        <circle cx="430" cy="212" r="2"/><circle cx="520" cy="120" r="2.8"/><circle cx="610" cy="268" r="2.2"/>
        <circle cx="726" cy="164" r="2.4"/><circle cx="812" cy="96" r="2"/><circle cx="900" cy="240" r="2.6"/>
        <circle cx="1004" cy="150" r="2.2"/><circle cx="1096" cy="292" r="2"/><circle cx="1190" cy="112" r="2.8"/>
        <circle cx="1246" cy="196" r="2.2"/><circle cx="1330" cy="70" r="2.4"/><circle cx="1420" cy="128" r="2"/>
        <circle cx="1520" cy="238" r="2.6"/><circle cx="190" cy="330" r="2"/><circle cx="660" cy="60" r="2.4"/>
      </g>

      <path class="sc-ridge sc-ridge--far" d="M-40 566 80 472l110 62 110-78 130 82 115-56 145 66 140-82 150 76 130-66 140 72 140-86 140 70 130-60v104H-40Z" fill="url(#sc-ridge-far)"/>
      <path class="sc-ridge sc-ridge--mid" d="M-40 584 120 512l150 56 160-62 170 66 180-56 180 62 190-66 190 62 180-52 160 46v76H-40Z" fill="url(#sc-ridge-mid)"/>

      <!-- The summit, and the flag that is the point of the whole climb. -->
      <g class="sc-peak">
        <path class="sc-peak__spur" d="M1000 676 1246 414 1436 676Z" fill="url(#sc-dark)"/>
        <path class="sc-peak__spur-face" d="M1246 414 1436 676h-118Z" fill="url(#sc-rock)"/>
        <path class="sc-peak__lit" d="M1470 245 1424 676H1074Z" fill="url(#sc-mid)"/>
        <path class="sc-peak__face" d="M1470 245 1868 676h-444Z" fill="url(#sc-dark)"/>
        <!-- A narrow band of dawn along the summit ridge, so the mass still
             reads as rock turning toward the light. -->
        <path class="sc-peak__crest" d="M1470 245 1424 676 1344 676 1448 344Z" fill="url(#sc-lit)"/>
        <path class="sc-peak__snow" d="M1470 245 1552 336l-52 20-40-46-36 26-30-20Z" fill="url(#sc-lit)"/>
        <path class="sc-peak__edge" d="M1470 245 1424 676M1470 245 1074 676M1470 245 1868 676M1246 414 1000 676M1246 414 1436 676"/>
      </g>

      <path class="sc-water" d="M120 556h1360v260H120Z" fill="url(#sc-water)"/>
      <g class="sc-sheen">
        <path d="M170 590h420" stroke="url(#sc-sheen)" stroke-width="2"/>
        <path d="M980 604h430" stroke="url(#sc-sheen)" stroke-width="2"/>
        <path d="M240 640h300" stroke="url(#sc-sheen)" stroke-width="2"/>
        <path d="M1010 652h340" stroke="url(#sc-sheen)" stroke-width="2"/>
        <path d="M640 676h250" stroke="url(#sc-sheen)" stroke-width="2"/>
      </g>

      <!-- The lighthouse: one fixed point, sweeping the dark. -->
      <g class="sc-lh">
        <g class="sc-lh__beam">
          <path d="M880 372 320 250l-14 214 574-56Z" fill="url(#sc-beam)"/>
        </g>

        <path class="sc-lh__isle" d="M676 700 770 592l52 34 44-64h44l48 60 84-34 108 112Z" fill="url(#sc-rock)"/>
        <path class="sc-lh__isle-lit" d="M770 592 822 626 786 700h-74ZM1042 588 1150 700h-82Z" fill="url(#sc-dark)"/>
        <path class="sc-lh__isle-edge" d="M676 700 770 592l52 34 44-64M910 562l48 60 84-34 108 112"/>

        <path class="sc-lh__tower" d="M860 560 872 400h32l12 160Z" fill="url(#sc-lit)"/>
        <path class="sc-lh__tower-shade" d="M900 560 890 400h14l12 160Z" fill="url(#sc-mid)"/>
        <path class="sc-lh__band" d="M864 520h48M867 480h42M869 444h38"/>
        <path class="sc-lh__door" d="M881 560v-30h14v30Z"/>
        <path class="sc-lh__base" d="M852 566h72l-6-14h-60Z" fill="url(#sc-mid)"/>

        <path class="sc-lh__gallery" d="M858 400 862 388h52l4 12Z" fill="url(#sc-lit)"/>
        <path class="sc-lh__rail" d="M862 388v-16M872 388v-16M882 388v-16M892 388v-16M902 388v-16M912 388v-16"/>
        <path class="sc-lh__rail-top" d="M860 372h56"/>
        <path class="sc-lh__lantern" d="M868 372 870 344h36l2 28Z"/>
        <path class="sc-lh__roof" d="M864 344 888 320l24 24Z" fill="url(#sc-lit)"/>
        <path class="sc-lh__finial" d="M888 320v-14"/>
        <circle class="sc-lh__glow" cx="888" cy="358" r="46" fill="url(#sc-halo)"/>
        <circle class="sc-lh__lamp" cx="888" cy="358" r="11"/>
      </g>

      <!-- The gate: the way through, already lit. -->
      <g class="sc-gate">
        <path class="sc-gate__step" d="M132 736h216l-16-22H148Z" fill="url(#sc-dark)"/>
        <path class="sc-gate__step" d="M148 714h184l-14-20H162Z" fill="url(#sc-mid)"/>
        <path class="sc-gate__step" d="M162 694h156l-12-18H174Z" fill="url(#sc-lit)"/>

        <path class="sc-gate__portal" d="M186 676V566c0-46 22-82 54-104 32 22 54 58 54 104v110Z" fill="url(#sc-portal)"/>

        <path class="sc-gate__frame" fill-rule="evenodd" d="M152 676V556c0-58 28-104 88-140 60 36 88 82 88 140v120h-34V566c0-46-22-82-54-104-32 22-54 58-54 104v110Z" fill="url(#sc-mid)"/>
        <path class="sc-gate__facet-lit" d="M152 676V556c0-40 14-74 44-104l14 14c-24 26-36 56-36 90v120Z" fill="url(#sc-lit)"/>
        <path class="sc-gate__facet-dark" d="M328 676V556c0-40-14-74-44-104l-14 14c24 26 36 56 36 90v120Z" fill="url(#sc-dark)"/>
        <path class="sc-gate__cap" d="M196 452 240 416l44 36-44 26Z" fill="url(#sc-lit)"/>
        <path class="sc-gate__key" d="M240 408 258 442 240 464 222 442Z"/>
        <path class="sc-gate__band" d="M152 578h34M294 578h34M152 630h34M294 630h34"/>

        <g class="sc-gate__shards">
          <rect x="112" y="562" width="20" height="20" rx="3"/>
          <rect x="122" y="620" width="16" height="16" rx="3"/>
          <rect x="342" y="564" width="18" height="18" rx="3"/>
          <rect x="334" y="622" width="14" height="14" rx="3"/>
        </g>

        <path class="sc-gate__rock" d="M96 736 128 704l30 32Z" fill="url(#sc-rock)"/>
        <path class="sc-gate__rock" d="M330 736 358 706l32 30Z" fill="url(#sc-rock)"/>
      </g>

      <path class="sc-fore" d="M-40 760 180 700l200 46 240-40 260 54 300-58 260 62 220-40v216H-40Z" fill="url(#sc-rock)"/>

      <!-- The route. One line, gate to flag. -->
      <path class="sc-path__glow" d="M240 690C350 730 480 720 600 665 690 624 780 620 880 600 1060 564 1200 510 1300 440 1370 392 1430 330 1470 245"/>
      <path class="sc-path" pathLength="1" d="M240 690C350 730 480 720 600 665 690 624 780 620 880 600 1060 564 1200 510 1300 440 1370 392 1430 330 1470 245"/>

      <g class="sc-nodes">
        <circle cx="240" cy="690" r="15"/><circle cx="600" cy="665" r="13"/><circle cx="880" cy="600" r="15"/>
        <circle cx="1300" cy="440" r="13"/><circle cx="1470" cy="245" r="15"/>
      </g>

      <g class="sc-spark">
        <path class="sc-spark__tail" d="M-70 0H0" stroke="url(#sc-spark)" stroke-width="6" stroke-linecap="round"/>
        <circle class="sc-spark__glow" r="26" fill="url(#sc-halo)"/>
        <circle class="sc-spark__core" r="7"/>
      </g>

      <g class="sc-flag">
        <path class="sc-flag__pole" d="M1470 250V128"/>
        <g class="sc-flag__wave">
          <path class="sc-flag__cloth" d="M1476 134c30-16 56 12 84-4v66c-28 16-54-12-84 4Z"/>
          <text class="sc-flag__mark" x="1508" y="188">AI</text>
        </g>
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
