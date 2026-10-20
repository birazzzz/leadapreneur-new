export const WEBINAR_TIMEZONE = 'Asia/Kuala_Lumpur';
export const WEBINAR_TITLE = 'Future-Proof Friday Weekly Briefing';
export const WEBINAR_MEETING_URL = 'https://meet.google.com/zek-romn-csi';
export const WEBINAR_DESCRIPTION = [
  'Join us for a weekly briefing on AI, The Great Acceleration into the Singularity, and how you can secure your career in the Age of Super Intelligence.',
  'Test your knowledge in our fun quiz, get the insights you need to beat AI anxiety, and become part of the future-proofing community!',
  'Every Friday, 11:00–12:00 Malaysia Time (MYT, UTC+8).',
  `Join with Google Meet: ${WEBINAR_MEETING_URL}`,
  'https://www.leadapreneur.com/future-proof-friday/'
].join('\n\n');

export function nextWebinarSession(now = new Date()) {
  // Kuala Lumpur is UTC+8 year-round: Friday 11:00–12:00 is 03:00–04:00 UTC.
  const start = new Date(now);
  start.setUTCHours(3, 0, 0, 0);
  start.setUTCDate(start.getUTCDate() + (5 - start.getUTCDay() + 7) % 7);
  if (start <= now) start.setUTCDate(start.getUTCDate() + 7);
  const end = new Date(start.getTime() + 60 * 60 * 1000);
  return {start,end};
}

const stamp = date => date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');

export function buildWebinarCalendarUrl(now = new Date()) {
  const {start,end} = nextWebinarSession(now);
  const url = new URL('https://calendar.google.com/calendar/render');
  url.search = new URLSearchParams({
    action:'TEMPLATE',
    text:WEBINAR_TITLE,
    dates:`${stamp(start)}/${stamp(end)}`,
    ctz:WEBINAR_TIMEZONE,
    recur:'RRULE:FREQ=WEEKLY;BYDAY=FR',
    location:WEBINAR_MEETING_URL,
    details:WEBINAR_DESCRIPTION
  }).toString();
  return url.toString();
}

const icalText = value => value.replace(/\\/g,'\\\\').replace(/\r?\n/g,'\\n').replace(/;/g,'\\;').replace(/,/g,'\\,');
function foldLine(line) {
  const encoder=new TextEncoder();
  const folded=[];
  let current='',bytes=0;
  for(const character of line) {
    const size=encoder.encode(character).length;
    if(bytes+size>75) {folded.push(current);current=' ';bytes=1;}
    current+=character;bytes+=size;
  }
  folded.push(current);
  return folded.join('\r\n');
}

export function buildWebinarIcs(now = new Date()) {
  const {start,end}=nextWebinarSession(now);
  return [
    'BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Leadapreneur//Future-Proof Fridays//EN',
    'CALSCALE:GREGORIAN','METHOD:PUBLISH','BEGIN:VEVENT',
    'UID:future-proof-friday-weekly@leadapreneur.com',
    `DTSTAMP:${stamp(now)}`,`DTSTART:${stamp(start)}`,`DTEND:${stamp(end)}`,
    'RRULE:FREQ=WEEKLY;BYDAY=FR',`SUMMARY:${icalText(WEBINAR_TITLE)}`,
    `DESCRIPTION:${icalText(WEBINAR_DESCRIPTION)}`,`LOCATION:${icalText(WEBINAR_MEETING_URL)}`,
    `URL:${WEBINAR_MEETING_URL}`,'STATUS:CONFIRMED','TRANSP:OPAQUE',
    'END:VEVENT','END:VCALENDAR'
  ].map(foldLine).join('\r\n')+'\r\n';
}
