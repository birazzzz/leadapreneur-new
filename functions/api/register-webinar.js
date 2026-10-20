import { saveWebinarRegistration } from '../../lib/webinar-registrations.mjs';

export const CALENDAR_URL = 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NmhpNjhvaG9jaGhqY2I5a2M0cW1jYjlrNm9ybTJiYjE2Z3E2NmJiNDZwZ2pjcGhrYzVoM2VjajY3MF8yMDI2MTAyM1QwMzAwMDBaIGJpcmFqQGxlYWRhcHJlbmV1ci5jb20&tmsrc=biraj%40leadapreneur.com&scp=ALL';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const json = (status, body, headers = {}) => new Response(JSON.stringify(body), {
  status, headers:{'Content-Type':'application/json','Cache-Control':'no-store','X-Content-Type-Options':'nosniff',...headers}
});

export function createWebinarHandler({save = saveWebinarRegistration, now = () => new Date()} = {}) {
  const attempts = new Map();
  return async function ({request, env}) {
    if (request.headers.get('origin') !== new URL(request.url).origin) return json(403,{error:'Please register using the webinar page.'});
    if (!request.headers.get('content-type')?.startsWith('application/json')) return json(415,{error:'A JSON request is required.'});
    let body;
    try {
      if (Number(request.headers.get('content-length')) > 4096) throw new Error();
      const text = await request.text();
      if (text.length > 4096) throw new Error();
      body = JSON.parse(text);
      if (!body || typeof body !== 'object' || Array.isArray(body)) throw new Error();
    } catch {return json(400,{error:'Please check your registration details.'});}
    const name = typeof body.name === 'string' ? body.name.trim().replace(/\s+/g, ' ') : '';
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    if (!name || name.length > 100 || /[\x00-\x1f\x7f]/.test(name) || !EMAIL_RE.test(email) || email.length > 254 || body.consent !== true || body.website) {
      return json(400,{error:'Please enter your name, a valid email, and agree to the registration notice.'});
    }
    const time = now().getTime();
    for (const [key, value] of attempts) if (time - value.start > 60000) attempts.delete(key);
    const rateKey = `${request.headers.get('cf-connecting-ip') || 'unknown'}:${email}`;
    const attempt = attempts.get(rateKey) || {start:time,count:0};
    if (attempt.count >= 10 || attempts.size >= 5000) return json(429,{error:'Too many attempts. Please wait a minute and try again.'},{'Retry-After':'60'});
    attempt.count += 1;
    attempts.set(rateKey,attempt);
    try {
      await save(env,{name,email,registeredAt:now().toISOString()});
      return json(201,{ok:true,calendarUrl:CALENDAR_URL});
    } catch {
      return json(503,{error:'We couldn’t save your registration. Please try again shortly.'});
    }
  };
}

export const onRequestPost = createWebinarHandler();
export function onRequest() {return json(405,{error:'Method not allowed'},{Allow:'POST'});}
