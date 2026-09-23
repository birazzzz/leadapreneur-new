import { buildResultEmail } from '../lib/result-email.mjs';

// POST /api/send-result — sends the Future-Proofing Assessment result email
// through Resend. The static assessment app posts here; RESEND_API_KEY only
// ever exists server-side (Vercel environment variables), never in the bundle.

const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return response.status(503).json({ error: 'Email is not configured yet.' });
  }

  // Resend's onboarding address works for testing before leadapreneur.com is
  // a verified sending domain; switch with ASSESSMENT_EMAIL_FROM afterwards.
  const from = process.env.ASSESSMENT_EMAIL_FROM || 'Leadapreneur <onboarding@resend.dev>';

  const body = request.body ?? {};
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return response.status(400).json({ error: 'A valid email address is required.' });
  }

  const name = typeof body.name === 'string' ? body.name.trim().slice(0, 80) : '';
  const role = typeof body.role === 'string' ? body.role.trim().slice(0, 80) : '';
  const description = typeof body.description === 'string' ? body.description.trim().slice(0, 600) : '';

  const { subject, html, text } = buildResultEmail({
    name: name || null,
    role: role || null,
    description: description || null,
  });

  try {
    const resendResponse = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from, to: [email], subject, html, text }),
    });
    if (!resendResponse.ok) {
      console.error('Resend rejected the send:', resendResponse.status, await resendResponse.text());
      return response.status(502).json({ error: 'The email could not be sent.' });
    }
    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error('Resend send failed:', error);
    return response.status(502).json({ error: 'The email could not be sent.' });
  }
}
