const certificatePath = /(?:^|\/)certificates(?:\/|$)/i;
function isCertificatePath(url) {
  let path = new URL(url).pathname;
  // Pages resolves encoded and repeated slashes before serving static files.
  // Apply the gate to every equivalent path, including double-encoded URLs.
  for (let pass = 0; pass < 5; pass++) {
    if (certificatePath.test(path.replaceAll('\\', '/'))) return true;
    try {
      const decoded = decodeURIComponent(path);
      if (decoded === path) break;
      path = decoded;
    } catch { break; }
  }
  return false;
}
const privateHeaders = {
  'Cache-Control': 'private, no-store',
  'Vary': 'Authorization',
  'X-Robots-Tag': 'noindex, nofollow, noarchive',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'no-referrer',
  'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; base-uri 'none'; object-src 'none'; frame-ancestors 'none'"
};
const reply = (status, message, extra = {}) => new Response(message, {
  status, headers: { ...privateHeaders, ...extra, 'Content-Type': 'text/plain; charset=utf-8' }
});

async function validPassword(header, hash) {
  if (!header?.startsWith('Basic ') || header.length > 500) return false;
  let credentials;
  try { credentials = atob(header.slice(6)); } catch { return false; }
  const separator = credentials.indexOf(':');
  if (separator < 0 || credentials.slice(0, separator) !== 'leadapreneur') return false;
  const password = credentials.slice(separator + 1);
  if (!password || password.length > 200) return false;
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(password));
  const actual = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
  let difference = 0;
  for (let index = 0; index < 64; index++) difference |= actual.charCodeAt(index) ^ hash.charCodeAt(index);
  return difference === 0;
}

export async function onRequest({ request, env, next }) {
  if (!isCertificatePath(request.url)) return next();
  const hash = env.CERTIFICATES_PASSWORD_SHA256;
  if (typeof hash !== 'string' || !/^[0-9a-f]{64}$/.test(hash)) {
    return reply(503, 'Certificate studio is temporarily unavailable.');
  }
  if (!(await validPassword(request.headers.get('Authorization'), hash))) {
    return reply(401, 'Leadapreneur staff sign-in required.', {
      'WWW-Authenticate': 'Basic realm="Leadapreneur Certificate Studio", charset="UTF-8"'
    });
  }
  const response = await next();
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(privateHeaders)) headers.set(key, value);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}
