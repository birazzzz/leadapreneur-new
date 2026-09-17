import { site } from '../../data/content.mjs';
import { events } from '../../lib/cms.mjs';
import { getEventState, getEventStatusLabel, partitionEvents } from '../../lib/events.mjs';
import { emptyEvents, eventTicket, finalCta } from '../components.mjs';
import { breadcrumb, escapeHtml, link, pageHeroArt, sectionHeading } from '../templates.mjs';

export function eventsPage(now) {
  const { upcoming, past } = partitionEvents(events, now);
  return `
    <section class="page-hero page-hero--events">
      ${pageHeroArt('events')}
      <div class="shell">
        ${breadcrumb([{ name: 'Home', path: '/' }, { name: 'Events', path: '/events/' }])}
        <div class="page-hero__grid"><div><p class="kicker">Events</p><h1>Meet the people building what comes next.</h1></div><p class="page-hero__lede">Public quests, open days and working sessions for people who refuse to stand still.</p></div>
      </div>
    </section>
    <section class="section events-index" aria-labelledby="upcoming-events-title">
      <div class="shell">
        ${sectionHeading('Next up', '<span id="upcoming-events-title">Upcoming events.</span>', upcoming.length ? 'Reserve a place in the next public experience.' : 'Dates appear here only after they are confirmed.')}
        ${upcoming.length ? `<div class="event-list">${upcoming.map((event) => eventTicket(event, now)).join('')}</div>` : emptyEvents()}
      </div>
    </section>
    ${past.length ? `<section class="section event-archive" aria-labelledby="archive-title">
      <div class="shell">
        ${sectionHeading('Past seasons', '<span id="archive-title">The work does not disappear when the room closes.</span>', 'Explore the design, rhythm and outcomes of previous public experiences.')}
        <div class="event-list">${past.map((event) => eventTicket(event, now)).join('')}</div>
      </div>
    </section>` : ''}
    ${finalCta()}`;
}

function multiline(value) {
  return escapeHtml(value.trim()).replace(/\r?\n/g, '<br>');
}

export function eventDetailPage(event, now) {
  const past = getEventState(event, now) === 'past';
  const eyebrow = event.hero.eyebrow || [getEventStatusLabel(event, now), event.season].filter(Boolean).join(' · ');
  const description = event.hero.description || event.summary;
  const facts = event.facts.length
    ? `<dl>${event.facts.map((fact) => `<div><dt>${escapeHtml(fact.label)}</dt><dd>${escapeHtml(fact.value)}</dd></div>`).join('')}</dl>`
    : '';

  const { quest, registration, route, included } = event;
  const registrationPanel = registration.heading || registration.ctaLabel
    ? `<aside>${registration.state ? `<p class="status-label">${escapeHtml(registration.state)}</p>` : ''}${registration.heading ? `<h3>${escapeHtml(registration.heading)}</h3>` : ''}${registration.description ? `<p>${escapeHtml(registration.description)}</p>` : ''}${registration.ctaLabel && registration.ctaUrl ? link(escapeHtml(registration.ctaUrl), escapeHtml(registration.ctaLabel), 'button button--outline', /^https?:\/\//i.test(registration.ctaUrl)) : ''}</aside>`
    : '';
  const questSection = quest.heading || registrationPanel
    ? `<section class="section event-recap" aria-labelledby="event-recap-title"><div class="shell event-recap__grid"><div>${quest.eyebrow ? `<p class="kicker">${escapeHtml(quest.eyebrow)}</p>` : ''}<h2 id="event-recap-title">${escapeHtml(quest.heading || registration.heading || event.title)}</h2>${quest.description ? `<p>${escapeHtml(quest.description)}</p>` : ''}</div>${registrationPanel}</div></section>`
    : '';

  const routeSection = route.items.length
    ? `<section class="section event-agenda" aria-labelledby="agenda-title"><div class="shell"><div class="section-heading">${route.eyebrow ? `<p class="kicker">${escapeHtml(route.eyebrow)}</p>` : ''}<h2 id="agenda-title">${escapeHtml(route.heading || 'The route')}</h2></div><ol>${route.items
        .map((item, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span><time>${escapeHtml(item.date)}</time><div><h3>${escapeHtml(item.title)}</h3>${item.description ? `<p>${escapeHtml(item.description)}</p>` : ''}</div></li>`)
        .join('')}</ol></div></section>`
    : '';

  const includedEyebrow = included.eyebrow || (past ? 'What was included' : 'What’s included');
  const includedSection = included.items.length
    ? `<section class="section event-included"><div class="shell"><div class="section-heading"><p class="kicker">${escapeHtml(includedEyebrow)}</p>${included.heading ? `<h2>${escapeHtml(included.heading)}</h2>` : ''}</div><div class="included-grid">${included.items
        .map((item, index) => `<div><span>${index + 1}</span><p>${escapeHtml(item)}</p></div>`)
        .join('')}</div></div></section>`
    : '';

  return `
    <section class="event-detail-hero">
      <div class="shell">
        ${breadcrumb([{ name: 'Home', path: '/' }, { name: 'Events', path: '/events/' }, { name: event.title, path: event.path }])}
        <div class="event-detail-hero__grid"><div><p class="kicker kicker--light">${escapeHtml(eyebrow)}</p><h1>${multiline(event.hero.headline || event.title)}</h1><p>${escapeHtml(description)}</p></div>${facts}</div>
      </div>
    </section>
    ${questSection}
    ${routeSection}
    ${includedSection}
    ${finalCta()}`;
}

const attendanceModes = {
  'in-person': 'https://schema.org/OfflineEventAttendanceMode',
  online: 'https://schema.org/OnlineEventAttendanceMode',
  hybrid: 'https://schema.org/MixedEventAttendanceMode',
};

const schemaStatuses = {
  cancelled: 'https://schema.org/EventCancelled',
  postponed: 'https://schema.org/EventPostponed',
};

export function eventSchema(event) {
  const url = event.seo.canonicalUrl || `${site.url}${event.path}`;
  const place = {
    '@type': 'Place',
    name: event.venue,
    address: {
      '@type': 'PostalAddress',
      ...(event.address ? { streetAddress: event.address } : {}),
      addressLocality: event.city,
      ...(event.country ? { addressCountry: event.country } : {}),
    },
  };
  const virtual = { '@type': 'VirtualLocation', url };
  const location = { online: virtual, hybrid: [place, virtual] }[event.format] ?? place;
  const image = event.seo.image;
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.summary,
    startDate: event.startAt,
    endDate: event.endAt,
    eventStatus: schemaStatuses[event.status] ?? 'https://schema.org/EventScheduled',
    eventAttendanceMode: attendanceModes[event.format] ?? attendanceModes['in-person'],
    location,
    ...(image ? { image: [`${site.url}${encodeURI(image)}`] } : {}),
    url,
    organizer: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
    },
  };
}
