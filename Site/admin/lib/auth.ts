import { createHmac, scryptSync, timingSafeEqual } from 'node:crypto';

/**
 * Shared team sign-in for the CMS.
 *
 * Keystatic's GitHub mode talks to the GitHub API from the browser, so every
 * editor needs a GitHub token. People who sign in with email and password get
 * a short-lived cookie holding CMS_GITHUB_TOKEN, a fine-grained token for a
 * single account that can only write to the content repository. The session
 * itself lives in an httpOnly cookie signed with KEYSTATIC_SECRET.
 */
export const SESSION_COOKIE = 'lp-cms-session';
export const GITHUB_TOKEN_COOKIE = 'keystatic-gh-access-token';
export const SESSION_SECONDS = 60 * 60 * 12;
export const GITHUB_TOKEN_SECONDS = 60 * 60;

function secret() {
  const value = process.env.KEYSTATIC_SECRET;
  if (!value) throw new Error('KEYSTATIC_SECRET is not set');
  return value;
}

export function passwordLoginConfigured() {
  return Boolean(process.env.CMS_ADMIN_EMAIL && process.env.CMS_ADMIN_PASSWORD_HASH && process.env.CMS_GITHUB_TOKEN);
}

/** Hash format: scrypt:<salt base64url>:<hash base64url>. No "$", which .env files would expand. */
export function verifyPassword(password: string, stored: string) {
  const [scheme, salt, expected] = stored.split(':');
  if (scheme !== 'scrypt' || !salt || !expected) return false;
  const expectedBytes = Buffer.from(expected, 'base64url');
  const actual = scryptSync(password, Buffer.from(salt, 'base64url'), expectedBytes.length);
  return timingSafeEqual(actual, expectedBytes);
}

export function verifyCredentials(email: string, password: string) {
  const expectedEmail = (process.env.CMS_ADMIN_EMAIL ?? '').trim().toLowerCase();
  const emailMatches = timingSafeEqual(
    createHmac('sha256', 'email').update(email.trim().toLowerCase()).digest(),
    createHmac('sha256', 'email').update(expectedEmail).digest(),
  );
  // Always run the password check so a wrong email takes as long as a wrong password.
  const passwordMatches = verifyPassword(password, process.env.CMS_ADMIN_PASSWORD_HASH ?? '');
  return emailMatches && passwordMatches && expectedEmail.length > 0;
}

function sign(payload: string) {
  return createHmac('sha256', secret()).update(payload).digest('base64url');
}

export function createSession(email: string) {
  const payload = Buffer.from(JSON.stringify({ email, exp: Date.now() + SESSION_SECONDS * 1000 })).toString('base64url');
  return `${payload}.${sign(payload)}`;
}

export function readSession(value: string | undefined) {
  if (!value) return null;
  const [payload, signature] = value.split('.');
  if (!payload || !signature) return null;
  const expected = Buffer.from(sign(payload));
  const actual = Buffer.from(signature);
  if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as { email: string; exp: number };
    return data.exp > Date.now() ? data : null;
  } catch {
    return null;
  }
}

export function readCookie(header: string | null, name: string) {
  for (const part of (header ?? '').split(';')) {
    const [key, ...rest] = part.trim().split('=');
    if (key === name) return decodeURIComponent(rest.join('='));
  }
  return undefined;
}

const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';

export function sessionCookie(value: string) {
  return `${SESSION_COOKIE}=${value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_SECONDS}${secure}`;
}

/** Keystatic reads this cookie from JavaScript, so it cannot be httpOnly. It is short-lived and reissued while the session lasts. */
export function githubTokenCookie() {
  return `${GITHUB_TOKEN_COOKIE}=${encodeURIComponent(process.env.CMS_GITHUB_TOKEN ?? '')}; Path=/; SameSite=Lax; Max-Age=${GITHUB_TOKEN_SECONDS}${secure}`;
}

export function expiredCookie(name: string) {
  return `${name}=; Path=/; Max-Age=0; SameSite=Lax${secure}`;
}
