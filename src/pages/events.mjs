import { events } from '../../data/content.mjs';
import { getEventState, partitionEvents } from '../../lib/events.mjs';
import { emptyEvents, eventTicket, finalCta } from '../components.mjs';
import { breadcrumb, breadcrumbSchema, link, pageHeroArt, sectionHeading } from '../templates.mjs';

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
        ${upcoming.length ? `<div class="event-list">${upcoming.map((event) => eventTicket(event, getEventState(event, now))).join('')}</div>` : emptyEvents()}
      </div>
    </section>
    <section class="section event-archive" aria-labelledby="archive-title">
      <div class="shell">
        ${sectionHeading('Past seasons', '<span id="archive-title">The work does not disappear when the room closes.</span>', 'Explore the design, rhythm and outcomes of previous public experiences.')}
        <div class="event-list">${past.map((event) => eventTicket(event, 'past')).join('')}</div>
      </div>
    </section>
    ${finalCta()}`;
}

export function eventDetailPage(event) {
  return `
    <section class="event-detail-hero">
      <div class="shell">
        ${breadcrumb([{ name: 'Home', path: '/' }, { name: 'Events', path: '/events/' }, { name: event.title, path: `/events/${event.slug}/` }])}
        <div class="event-detail-hero__grid"><div><p class="kicker kicker--light">Past event · Season 1</p><h1>Learn to lead<br>in the age of AI.</h1><p>${event.summary}</p></div><dl><div><dt>Kickoff</dt><dd>22 June 2026</dd></div><div><dt>Workshop</dt><dd>1–3 July 2026</dd></div><div><dt>Venue</dt><dd>${event.venue}</dd></div><div><dt>Seats</dt><dd>${event.capacity}</dd></div></dl></div>
      </div>
    </section>
    <section class="section event-recap" aria-labelledby="event-recap-title"><div class="shell event-recap__grid"><div><p class="kicker">The quest</p><h2 id="event-recap-title">Walk in with a problem. Walk out with a proposal.</h2><p>Across three weeks, participants moved from leadership context to problem discovery, solution design and a management-ready AI innovation proposal.</p></div><aside><p class="status-label">Registration closed</p><h3>This season has finished.</h3><p>Future dates will be published on the events page when confirmed.</p>${link('/events/', 'See all events', 'button button--outline')}</aside></div></section>
    <section class="section event-agenda" aria-labelledby="agenda-title"><div class="shell"><div class="section-heading"><p class="kicker">The route</p><h2 id="agenda-title">Three weeks. Five decisive moments.</h2></div><ol>${event.agenda.map(([date, title, copy], index) => `<li><span>${String(index + 1).padStart(2, '0')}</span><time>${date}</time><div><h3>${title}</h3><p>${copy}</p></div></li>`).join('')}</ol></div></section>
    <section class="section event-included"><div class="shell"><div class="section-heading"><p class="kicker">What was included</p><h2>Everything needed to move from idea to approval.</h2></div><div class="included-grid">${['Live kickoff with Jan Bartscht', '17-lesson Innovate or Die course', 'Three facilitated workshop days', 'COSMOS platform access', 'Innovation Coins and Hero Marketplace', 'Certificate and LinkedIn badge'].map((item, index) => `<div><span>${index + 1}</span><p>${item}</p></div>`).join('')}</div></div></section>
    ${finalCta()}`;
}

export function eventSchema(event) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.summary,
    startDate: event.startAt,
    endDate: event.endAt,
    eventStatus: 'https://schema.org/EventCompleted',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: event.venue,
      address: {
        '@type': 'PostalAddress',
        addressLocality: event.city,
        addressCountry: 'MY',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Leadapreneur',
      url: 'https://www.leadapreneur.com',
    },
  };
}
