import { buildResultEmail } from '../../lib/result-email.mjs';

// POST /api/send-result — Cloudflare Pages Function that emails the
// Future-Proofing Assessment result through Resend. The static assessment app
// posts here; RESEND_API_KEY lives only in the Pages project's secrets.
// (api/send-result.js is the same endpoint for Vercel.)

const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (status, body) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export async function onRequestPost({ request, env }) {
  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) return json(503, { error: 'Email is not configured yet.' });

  // Resend's onboarding address works for testing before leadapreneur.com is
  // a verified sending domain; switch with ASSESSMENT_EMAIL_FROM afterwards.
  const from = env.ASSESSMENT_EMAIL_FROM || 'Leadapreneur <onboarding@resend.dev>';

  let body = {};
  try {
    body = await request.json();
  } catch {
    return json(400, { error: 'Invalid request body.' });
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return json(400, { error: 'A valid email address is required.' });
  }

  const name = typeof body.name === 'string' ? body.name.trim().slice(0, 80) : '';
  const role = typeof body.role === 'string' ? body.role.trim().slice(0, 80) : '';

  // Only the role name is taken from the request; all copy comes from lib/result-email.mjs.
  const { subject, html, text } = buildResultEmail({ name: name || null, role: role || null });

  try {
    const resendResponse = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to: [email], subject, html, text }),
    });
    if (!resendResponse.ok) {
      console.error('Resend rejected the send:', resendResponse.status, await resendResponse.text());
      return json(502, { error: 'The email could not be sent.' });
    }
    return json(200, { ok: true });
  } catch (error) {
    console.error('Resend send failed:', error);
    return json(502, { error: 'The email could not be sent.' });
  }
}

export function onRequest() {
  return json(405, { error: 'Method not allowed' });
}
