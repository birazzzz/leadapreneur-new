import { NextResponse, type NextRequest } from 'next/server';

/**
 * Keeps the editor behind a sign-in and opens it on the working branch.
 *
 * The session signature is checked by the API routes; here it is enough to
 * know some sign-in exists, because every read and write still needs a valid
 * GitHub token that only those routes hand out.
 */
const DEFAULT_BRANCH = process.env.CMS_DEFAULT_BRANCH || 'feature/keystatic-cms';
const SIGN_IN_COOKIES = ['lp-cms-session', 'keystatic-gh-access-token', 'keystatic-gh-refresh-token'];

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Local file editing during development needs no sign-in.
  const localMode =
    process.env.NEXT_PUBLIC_KEYSTATIC_STORAGE === 'local' ||
    (!process.env.NEXT_PUBLIC_KEYSTATIC_STORAGE && process.env.NODE_ENV === 'development');
  if (localMode) return NextResponse.next();

  const signedIn = SIGN_IN_COOKIES.some((name) => request.cookies.has(name));
  if (!signedIn && pathname !== '/keystatic/setup') {
    const login = new URL('/login', request.url);
    login.searchParams.set('from', `${pathname}${search}`);
    return NextResponse.redirect(login);
  }

  if (pathname === '/keystatic' || pathname === '/keystatic/') {
    return NextResponse.redirect(new URL(`/keystatic/branch/${encodeURIComponent(DEFAULT_BRANCH)}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/keystatic', '/keystatic/:path*'],
};
