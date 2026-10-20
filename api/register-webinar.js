import { saveWebinarRegistration } from '../lib/webinar-registrations.mjs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const JOIN_DETAILS = Object.freeze({
  qrImage:'/future-proof-friday/assets/registration-qr.svg',
  joinUrl:'https://meet.google.com/zek-romn-csi'
});

export function createRegistrationHandler({save = saveWebinarRegistration, now = () => new Date()} = {}) {
  const attempts = new Map();
  return async function handler(request, response) {
    response.setHeader('Cache-Control', 'no-store');
    response.setHeader('X-Content-Type-Options', 'nosniff');
    if (request.method !== 'POST') {
      response.setHeader('Allow', 'POST');
      return response.status(405).json({error:'Method not allowed'});
    }
    const origin = request.headers.origin;
    const host = request.headers.host;
    try {
      if (!origin || !host || new URL(origin).host !== host) return response.status(403).json({error:'Please register using the webinar page.'});
    } catch {return response.status(403).json({error:'Please register using the webinar page.'});}
    if (!request.headers['content-type']?.startsWith('application/json')) return response.status(415).json({error:'A JSON request is required.'});
    const ip = String(request.headers['x-forwarded-for'] || 'unknown').split(',')[0].trim();
    const time = now().getTime();
    for (const [key, value] of attempts) if (time - value.start > 60000) attempts.delete(key);
    const attempt = attempts.get(ip) || {start:time,count:0};
    if (attempt.count >= 10 || attempts.size >= 5000) {
      response.setHeader('Retry-After', '60');
      return response.status(429).json({error:'Too many attempts. Please wait a minute and try again.'});
    }
    attempt.count += 1;
    attempts.set(ip, attempt);
    let body;
    try {
      if (Number(request.headers['content-length']) > 4096) throw new Error();
      body = typeof request.body === 'string' ? JSON.parse(request.body) : request.body;
      if (!body || typeof body !== 'object' || Array.isArray(body) || JSON.stringify(body).length > 4096) throw new Error();
    } catch {return response.status(400).json({error:'Please check your registration details.'});}
    const name = typeof body.name === 'string' ? body.name.trim().replace(/\s+/g, ' ') : '';
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    if (!name || name.length > 100 || /[\x00-\x1f\x7f]/.test(name) || !EMAIL_RE.test(email) || email.length > 254 || body.consent !== true || body.website) {
      return response.status(400).json({error:'Please enter your name, a valid email, and agree to the registration notice.'});
    }
    try {
      const registrationId = await save({name,email,registeredAt:now().toISOString()});
      return response.status(201).json({ok:true,registrationId,...JOIN_DETAILS});
    } catch {
      // Never log personal details or pretend a registration was saved.
      return response.status(503).json({error:'We couldn’t save your registration. Please try again shortly.'});
    }
  };
}

export default createRegistrationHandler();
