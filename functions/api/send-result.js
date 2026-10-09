import { buildResultEmail } from '../../lib/result-email.mjs';

// POST /api/send-result — Cloudflare Pages Function that emails the
// Future-Proofing Assessment result through Resend. The static assessment app
// posts here; RESEND_API_KEY lives only in the Pages project's secrets.
// (api/send-result.js is the same endpoint for Vercel.)

const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Base64 for Resend attachments, chunked so large files don't overflow the call stack.
function toBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.length; i += 0x8000) binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(binary);
}

// Embeds the email's images (logo + role portrait) as inline attachments so
// they show even in inboxes that block remote images. Returns null if any
// image can't be read, and the email then falls back to linked images.
async function inlineAttachments(images, request, env) {
  try {
    return await Promise.all(
      images.map(async (image) => {
        const url = new URL(image.path, request.url);
        const response = env.ASSETS ? await env.ASSETS.fetch(url) : await fetch(url);
        if (!response.ok) throw new Error(`${image.path}: ${response.status}`);
        return {
          filename: image.path.split('/').pop(),
          content: toBase64(await response.arrayBuffer()),
          content_type: image.type,
          content_id: image.cid,
        };
      }),
    );
  } catch (error) {
    console.error('Inline images unavailable, linking them instead:', error);
    return null;
  }
}

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

  const address = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  if (!EMAIL_RE.test(address) || address.length > 254) {
    return json(400, { error: 'A valid email address is required.' });
  }

  const name = typeof body.name === 'string' ? body.name.trim().slice(0, 80) : '';
  const role = typeof body.role === 'string' ? body.role.trim().slice(0, 80) : '';

  // Only the role name is taken from the request; all copy comes from lib/result-email.mjs.
  const input = { name: name || null, role: role || null };
  let email = buildResultEmail({ ...input, inlineImages: true });
  const attachments = await inlineAttachments(email.images, request, env);
  if (!attachments) email = buildResultEmail(input);

  try {
    const resendResponse = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [address],
        subject: email.subject,
        html: email.html,
        text: email.text,
        ...(attachments ? { attachments } : {}),
      }),
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
