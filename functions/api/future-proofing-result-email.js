// POST /api/future-proofing-result-email: pass-through to the Future-Proofing
// Check's email service, which renders the personalised email and six-page PDF
// report. That service is a Node program (PDF rendering) hosted on Vercel from
// the assessment repository (Aeikz8/LP-future-proofing-assessment); this lets
// the app served at /assessment/ call it from our own domain unchanged.
//
// The upstream service only accepts requests from its configured public URL,
// so we check the browser request is same-origin here, then present the
// upstream's own origin. Override with FUTURE_PROOFING_EMAIL_UPSTREAM.

const DEFAULT_UPSTREAM = 'https://leadapreneur-future-proofing-check.vercel.app/api/future-proofing-result-email';
const MAX_BODY = 16 * 1024;

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) {
    return json(403, { sent: false, message: 'Send this request from the assessment page.' });
  }
  const body = await request.text();
  if (body.length > MAX_BODY) return json(413, { sent: false, message: 'The request is too large.' });

  const upstream = new URL(env.FUTURE_PROOFING_EMAIL_UPSTREAM || DEFAULT_UPSTREAM);
  try {
    const response = await fetch(upstream, {
      method: 'POST',
      headers: {
        'Content-Type': request.headers.get('content-type') || 'application/json',
        Origin: upstream.origin,
        // Lets the upstream's per-IP limit see the real visitor, not Cloudflare.
        'X-Forwarded-For': request.headers.get('cf-connecting-ip') || '',
      },
      body,
    });
    return new Response(await response.text(), {
      status: response.status,
      headers: { 'Content-Type': response.headers.get('content-type') || 'application/json', 'Cache-Control': 'no-store' },
    });
  } catch (error) {
    console.error('Future-Proofing email service unreachable:', error);
    return json(502, { sent: false, message: 'We couldn’t send your result right now. Please try again shortly.' });
  }
}

export function onRequest() {
  return json(405, { sent: false, message: 'Method not allowed' });
}
