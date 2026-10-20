export const WEBINAR_TIMEZONE = 'Asia/Kuala_Lumpur';
export const WEBINAR_TITLE = 'Future-Proof Friday Weekly Briefing';
export const WEBINAR_MEETING_URL = 'https://meet.google.com/zek-romn-csi';

export function buildWebinarCalendarUrl(now = new Date()) {
  // Kuala Lumpur is UTC+8 year-round: Friday 11:00–12:00 is 03:00–04:00 UTC.
  const start = new Date(now);
  start.setUTCHours(3, 0, 0, 0);
  start.setUTCDate(start.getUTCDate() + (5 - start.getUTCDay() + 7) % 7);
  if (start <= now) start.setUTCDate(start.getUTCDate() + 7);
  const end = new Date(start.getTime() + 60 * 60 * 1000);
  const stamp = date => date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
  const url = new URL('https://calendar.google.com/calendar/render');
  url.search = new URLSearchParams({
    action:'TEMPLATE',
    text:WEBINAR_TITLE,
    dates:`${stamp(start)}/${stamp(end)}`,
    ctz:WEBINAR_TIMEZONE,
    recur:'RRULE:FREQ=WEEKLY;BYDAY=FR',
    location:WEBINAR_MEETING_URL,
    details:`Every Friday, 11:00 AM–12:00 PM Kuala Lumpur time (UTC+8).\nJoin with Google Meet: ${WEBINAR_MEETING_URL}\nhttps://www.leadapreneur.com/future-proof-friday/`
  }).toString();
  return url.toString();
}
