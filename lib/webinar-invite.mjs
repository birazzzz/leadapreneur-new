import {
  WEBINAR_DESCRIPTION,
  WEBINAR_MEETING_URL,
  WEBINAR_TITLE,
  buildWebinarCalendarUrl,
  nextWebinarSession,
} from './webinar-calendar.mjs';

// Calendar invitation (iTIP METHOD:REQUEST) for Future-Proof Friday, emailed
// through Resend right after someone registers. Unlike the Google Calendar
// link, an invitation shows Yes / Maybe / No in Gmail, Outlook and Apple Mail
// and is placed on the calendar straight away.

export const DEFAULT_WEBINAR_FROM = 'Leadapreneur <hello@leadapreneur.com>';
const PAGE_URL = 'https://www.leadapreneur.com/future-proof-friday/';
const RESEND_ENDPOINT = 'https://api.resend.com/emails';

const stamp = (date) => date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
const icalText = (value) =>
  String(value).replace(/\\/g, '\\\\').replace(/\r?\n/g, '\\n').replace(/;/g, '\\;').replace(/,/g, '\\,');
// CN is a quoted parameter: quotes and control characters are not allowed inside.
const icalName = (value) => `"${String(value).replace(/["\x00-\x1f\x7f]/g, '')}"`;
const escapeHtml = (value) =>
  String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

function foldLine(line) {
  const encoder = new TextEncoder();
  const folded = [];
  let current = '';
  let bytes = 0;
  for (const character of line) {
    const size = encoder.encode(character).length;
    if (bytes + size > 75) {
      folded.push(current);
      current = ' ';
      bytes = 1;
    }
    current += character;
    bytes += size;
  }
  folded.push(current);
  return folded.join('\r\n');
}

/** Stable per-attendee UID (FNV-1a of the email), so registering twice updates one event instead of adding two. */
function attendeeUid(email) {
  let hash = 0x811c9dc5;
  for (const character of email) {
    hash ^= character.codePointAt(0);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return `future-proof-friday-${hash.toString(16).padStart(8, '0')}@leadapreneur.com`;
}

/** "Name <a@b.com>" or "a@b.com" → { name, address } */
export function parseSender(value) {
  const match = String(value).match(/^\s*(.*?)\s*<([^>]+)>\s*$/);
  return match ? { name: match[1] || 'Leadapreneur', address: match[2] } : { name: 'Leadapreneur', address: String(value).trim() };
}

export function buildWebinarInviteIcs({ name, email, organizer, now = new Date() }) {
  const { start, end } = nextWebinarSession(now);
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Leadapreneur//Future-Proof Fridays//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:REQUEST',
    'BEGIN:VEVENT',
    `UID:${attendeeUid(email)}`,
    'SEQUENCE:0',
    `DTSTAMP:${stamp(now)}`,
    `DTSTART:${stamp(start)}`,
    `DTEND:${stamp(end)}`,
    'RRULE:FREQ=WEEKLY;BYDAY=FR',
    `SUMMARY:${icalText(WEBINAR_TITLE)}`,
    `DESCRIPTION:${icalText(WEBINAR_DESCRIPTION)}`,
    `LOCATION:${icalText(WEBINAR_MEETING_URL)}`,
    `URL:${WEBINAR_MEETING_URL}`,
    `ORGANIZER;CN=${icalName(organizer.name)}:mailto:${organizer.address}`,
    `ATTENDEE;CN=${icalName(name)};ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE:mailto:${email}`,
    'STATUS:CONFIRMED',
    'TRANSP:OPAQUE',
    'BEGIN:VALARM',
    'ACTION:DISPLAY',
    `DESCRIPTION:${icalText(WEBINAR_TITLE)}`,
    'TRIGGER:-PT15M',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ]
    .map(foldLine)
    .join('\r\n') + '\r\n';
}

export function buildWebinarInviteEmail({ name, email, from = DEFAULT_WEBINAR_FROM, now = new Date() }) {
  const organizer = parseSender(from);
  const { start } = nextWebinarSession(now);
  const firstDate = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kuala_Lumpur',
  }).format(start);
  const firstName = name.split(' ')[0];
  // Same Google Calendar link as the page's button (opens the event to save).
  const calendarUrl = buildWebinarCalendarUrl(now);
  const subject = `Invitation: ${WEBINAR_TITLE}, every Friday 11:00 MYT`;
  const font = "font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;";
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(subject)}</title></head>
<body style="margin:0;padding:0;background:#f7f3ec;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f3ec;"><tr><td align="center" style="padding:24px 12px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;max-width:560px;">
<tr><td style="background:#016175;border-radius:18px 18px 0 0;padding:20px 32px;${font}font-size:15px;font-weight:700;letter-spacing:3px;color:#ffffff;">LEADAPRENEUR</td></tr>
<tr><td style="background:#ffffff;padding:28px 32px 8px;">
<p style="margin:0 0 8px;${font}font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#007387;">You’re registered</p>
<h1 style="margin:0 0 14px;${font}font-size:24px;line-height:1.25;color:#102521;">Hi ${escapeHtml(firstName)}, see you on Friday.</h1>
<p style="margin:0 0 16px;${font}font-size:15px;line-height:1.6;color:#45565a;">This email is a calendar invitation for the <b>${escapeHtml(WEBINAR_TITLE)}</b>. Choose <b>Yes</b> above to keep it in your calendar.</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3eee5;border-radius:12px;"><tr><td style="padding:16px 18px;${font}font-size:14px;line-height:1.7;color:#102521;">
<b>When:</b> Every Friday, 11:00–12:00 Malaysia Time (MYT, UTC+8)<br>
<b>First session:</b> ${escapeHtml(firstDate)}<br>
<b>Where:</b> <a href="${WEBINAR_MEETING_URL}" style="color:#007387;">Google Meet</a>
</td></tr></table>
</td></tr>
<tr><td align="center" style="background:#ffffff;padding:20px 32px 28px;">
<!-- Two inline-block buttons: side by side when there is room, stacked on narrow screens. -->
<table role="presentation" cellpadding="0" cellspacing="0" style="display:inline-block;margin:4px;vertical-align:middle;"><tr><td style="border-radius:999px;border:2px solid #007d91;background:#ffffff;"><a href="${escapeHtml(calendarUrl)}" style="display:inline-block;padding:11px 22px;${font}font-size:15px;font-weight:700;color:#007d91;text-decoration:none;">Add event to calendar</a></td></tr></table><table role="presentation" cellpadding="0" cellspacing="0" style="display:inline-block;margin:4px;vertical-align:middle;"><tr><td style="border-radius:999px;background:#007d91;"><a href="${WEBINAR_MEETING_URL}" style="display:inline-block;padding:13px 24px;${font}font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;">Join with Google Meet →</a></td></tr></table>
</td></tr>
<tr><td style="background:#f3eee5;border-radius:0 0 18px 18px;padding:16px 32px;${font}font-size:12px;line-height:1.6;color:#5e6965;">You received this because you registered at <a href="${PAGE_URL}" style="color:#007387;">leadapreneur.com/future-proof-friday</a>. Leadapreneur Sdn. Bhd. · Kuala Lumpur</td></tr>
</table></td></tr></table></body></html>`;
  const text = [
    `Hi ${firstName},`,
    '',
    `You're registered for the ${WEBINAR_TITLE}. This email is a calendar invitation: choose Yes to keep it in your calendar.`,
    '',
    'When: Every Friday, 11:00–12:00 Malaysia Time (MYT, UTC+8)',
    `First session: ${firstDate}`,
    `Add event to calendar: ${calendarUrl}`,
    `Join with Google Meet: ${WEBINAR_MEETING_URL}`,
    '',
    `You received this because you registered at ${PAGE_URL}`,
  ].join('\n');
  return { subject, html, text, ics: buildWebinarInviteIcs({ name, email, organizer, now }), organizer };
}

const toBase64 = (value) => {
  const bytes = new TextEncoder().encode(value);
  let binary = '';
  for (let i = 0; i < bytes.length; i += 0x8000) binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(binary);
};

/** Sends the invitation. Resolves to false (never throws) when email isn't configured or Resend refuses. */
export async function sendWebinarInvite(env, { name, email }, { now = new Date(), fetchImpl = fetch } = {}) {
  if (!env?.RESEND_API_KEY) return false;
  const from = env.WEBINAR_EMAIL_FROM || DEFAULT_WEBINAR_FROM;
  const invite = buildWebinarInviteEmail({ name, email, from, now });
  try {
    const response = await fetchImpl(RESEND_ENDPOINT, {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [email],
        reply_to: invite.organizer.address,
        subject: invite.subject,
        html: invite.html,
        text: invite.text,
        attachments: [{ filename: 'invite.ics', content: toBase64(invite.ics), content_type: 'text/calendar; method=REQUEST; charset=UTF-8' }],
      }),
    });
    if (!response.ok) {
      console.error('Resend refused the webinar invitation:', response.status, await response.text());
      return false;
    }
    return true;
  } catch (error) {
    console.error('Webinar invitation failed:', error);
    return false;
  }
}
