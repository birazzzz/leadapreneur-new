/**
 * Event state is derived from the real start and end instants, so nobody has
 * to revisit an event to mark it as past. An editor's status override only
 * changes the wording while the event is still ahead.
 */
export function getEventState(event, now = new Date()) {
  const start = new Date(event.startAt);
  const end = new Date(event.endAt || event.startAt);
  if (now > end) return event.status === 'cancelled' ? 'cancelled' : 'past';
  if (event.status === 'cancelled' || event.status === 'postponed') return event.status;
  if (now >= start) return 'live';
  return event.status === 'sold-out' ? 'sold-out' : 'scheduled';
}

const stateLabels = {
  past: 'Past event',
  live: 'Happening now',
  cancelled: 'Cancelled',
  postponed: 'Postponed',
  'sold-out': 'Sold out',
};

const scheduledLabels = {
  'coming-soon': 'Coming soon',
  'registration-open': 'Registration open',
  'registration-closed': 'Registration closed',
};

export function getEventStatusLabel(event, now = new Date()) {
  const state = getEventState(event, now);
  if (state === 'scheduled') return scheduledLabels[event.status] ?? 'Upcoming event';
  return stateLabels[state];
}

/** Upcoming and current events, soonest first; finished events, most recently finished first. */
export function partitionEvents(events, now = new Date()) {
  const ended = (event) => now > new Date(event.endAt || event.startAt);
  const upcoming = events.filter((event) => !ended(event)).sort((a, b) => new Date(a.startAt) - new Date(b.startAt));
  const past = events
    .filter(ended)
    .sort((a, b) => new Date(b.endAt || b.startAt) - new Date(a.endAt || a.startAt));
  return { upcoming, past };
}
