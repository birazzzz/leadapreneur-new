import path from 'node:path';
import { makeRouteHandler } from '@keystatic/next/route-handler';
import config from '../../../../../keystatic.config';
import {
  GITHUB_TOKEN_COOKIE,
  SESSION_COOKIE,
  expiredCookie,
  githubTokenCookie,
  passwordLoginConfigured,
  readCookie,
  readSession,
} from '../../../../lib/auth';

// Local mode (development only) must write to the repository root, not admin/.
const keystatic = makeRouteHandler({
  config,
  localBaseDirectory: path.join(process.cwd(), '..'),
});

function action(request: Request) {
  return new URL(request.url).pathname.replace(/^\/api\/keystatic\//, '');
}

function hasPasswordSession(request: Request) {
  return passwordLoginConfigured() && readSession(readCookie(request.headers.get('cookie'), SESSION_COOKIE)) !== null;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  switch (action(request)) {
    // Keystatic sends signed-out people here. Show the team sign-in page
    // unless they chose "Continue with GitHub" on it.
    case 'github/login': {
      if (url.searchParams.get('provider') === 'github') break;
      const from = url.searchParams.get('from');
      const location = from ? `/login?from=${encodeURIComponent(from)}` : '/login';
      return new Response(null, { status: 302, headers: { Location: location } });
    }
    case 'github/logout': {
      if (!readCookie(request.headers.get('cookie'), SESSION_COOKIE)) break;
      // The shared token must not be revoked, so skip Keystatic's GitHub logout.
      const headers = new Headers({ Location: '/login' });
      headers.append('Set-Cookie', expiredCookie(SESSION_COOKIE));
      headers.append('Set-Cookie', expiredCookie(GITHUB_TOKEN_COOKIE));
      headers.append('Set-Cookie', expiredCookie('keystatic-gh-refresh-token'));
      return new Response(null, { status: 302, headers });
    }
  }
  return keystatic.GET(request);
}

export async function POST(request: Request) {
  // Keystatic asks for a fresh token when its cookie expires.
  if (action(request) === 'github/refresh-token' && hasPasswordSession(request)) {
    return new Response(null, { status: 200, headers: { 'Set-Cookie': githubTokenCookie() } });
  }
  return keystatic.POST(request);
}
