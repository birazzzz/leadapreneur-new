import {
  createSession,
  githubTokenCookie,
  passwordLoginConfigured,
  sessionCookie,
  verifyCredentials,
} from '../../../../lib/auth';

// Best-effort brake on password guessing. Each serverless instance keeps its own count.
const attempts = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 8;

function tooManyAttempts(key: string) {
  const now = Date.now();
  const entry = attempts.get(key);
  if (!entry || entry.resetAt < now) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_ATTEMPTS;
}

export async function POST(request: Request) {
  if (!passwordLoginConfigured()) {
    return Response.json({ error: 'Email sign-in is not set up yet. Use GitHub instead.' }, { status: 503 });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';
  if (tooManyAttempts(ip)) {
    return Response.json({ error: 'Too many attempts. Try again in 15 minutes.' }, { status: 429 });
  }

  let email = '';
  let password = '';
  try {
    const body = (await request.json()) as { email?: unknown; password?: unknown };
    email = typeof body.email === 'string' ? body.email : '';
    password = typeof body.password === 'string' ? body.password : '';
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  if (!email || !password || !verifyCredentials(email, password)) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    return Response.json({ error: 'That email and password do not match.' }, { status: 401 });
  }

  attempts.delete(ip);
  const headers = new Headers({ 'Cache-Control': 'no-store' });
  headers.append('Set-Cookie', sessionCookie(createSession(email.trim().toLowerCase())));
  headers.append('Set-Cookie', githubTokenCookie());
  return Response.json({ ok: true }, { headers });
}
