export function getEventState(event, now = new Date()) {
  if (event.status === 'cancelled' || event.status === 'postponed') return event.status;
  const start = new Date(event.startAt);
  const end = new Date(event.endAt || event.startAt);
  if (now < start) return event.status === 'sold-out' ? 'sold-out' : 'scheduled';
  if (now <= end) return 'live';
  return 'past';
}

export function partitionEvents(events, now = new Date()) {
  const upcoming = events
    .filter((event) => ['scheduled', 'sold-out', 'postponed'].includes(getEventState(event, now)))
    .sort((a, b) => new Date(a.startAt) - new Date(b.startAt));
  const past = events
    .filter((event) => getEventState(event, now) === 'past')
    .sort((a, b) => new Date(b.startAt) - new Date(a.startAt));
  return { upcoming, past };
}
