/**
 * Converts a wall-clock time at a venue ("2026-06-22T09:00" in
 * "Asia/Kuala_Lumpur") into an ISO timestamp with that zone's offset
 * ("2026-06-22T09:00:00+08:00"). Keystatic stores datetimes without a zone,
 * so the event's timezone field supplies it. Handles daylight-saving zones.
 */
function offsetMinutes(instant, timeZone) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', {
      timeZone,
      hourCycle: 'h23',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
      .formatToParts(instant)
      .map(({ type, value }) => [type, value]),
  );
  const asUtc = Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, parts.second);
  return Math.round((asUtc - instant.getTime()) / 60000);
}

export function zonedWallTimeToIso(wallTime, timeZone = 'UTC') {
  const match = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(wallTime);
  if (!match) throw new Error(`Invalid date and time "${wallTime}"`);
  const [, year, month, day, hour, minute] = match.map(Number);
  const wallAsUtc = Date.UTC(year, month - 1, day, hour, minute);
  let offset = offsetMinutes(new Date(wallAsUtc), timeZone);
  offset = offsetMinutes(new Date(wallAsUtc - offset * 60000), timeZone);
  const sign = offset >= 0 ? '+' : '-';
  const absolute = Math.abs(offset);
  const pad = (value) => String(value).padStart(2, '0');
  return `${wallTime.slice(0, 16)}:00${sign}${pad(Math.floor(absolute / 60))}:${pad(absolute % 60)}`;
}
