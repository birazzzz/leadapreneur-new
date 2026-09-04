import test from 'node:test';
import assert from 'node:assert/strict';

import { events } from '../data/content.mjs';
import { getEventState, partitionEvents } from '../lib/events.mjs';

const event = events[0];

test('event state is timezone-safe before, during and after the published window', () => {
  assert.equal(getEventState(event, new Date('2026-06-21T23:59:59+08:00')), 'scheduled');
  assert.equal(getEventState(event, new Date('2026-07-02T12:00:00+08:00')), 'live');
  assert.equal(getEventState(event, new Date('2026-07-03T17:00:01+08:00')), 'past');
});

test('past events are not returned as upcoming', () => {
  const partition = partitionEvents(events, new Date('2026-09-04T12:00:00+08:00'));
  assert.equal(partition.upcoming.length, 0);
  assert.deepEqual(partition.past.map((item) => item.slug), [event.slug]);
});
