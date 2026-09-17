import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { SESSION_COOKIE, passwordLoginConfigured, readSession } from '../../lib/auth';
import { LoginForm } from './login-form';
import './login.css';

export const metadata: Metadata = { title: 'Sign in | Leadapreneur CMS' };
export const dynamic = 'force-dynamic';

/** Only paths inside the editor are allowed as a return address. */
function editorPath(from: string | undefined) {
  if (!from) return '/keystatic';
  const path = from.startsWith('/') ? from : `/keystatic/${from}`;
  return /^\/keystatic(\/|$)/.test(path) && !path.startsWith('//') ? path : '/keystatic';
}

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ from?: string }> }) {
  const { from } = await searchParams;
  const returnTo = editorPath(from);
  const githubFrom = returnTo.replace(/^\/keystatic\/?/, '');
  const githubHref = `/api/keystatic/github/login?provider=github${githubFrom ? `&from=${encodeURIComponent(githubFrom)}` : ''}`;
  // Landing here with a valid email session means GitHub refused the shared token.
  const tokenRejected = passwordLoginConfigured() && readSession((await cookies()).get(SESSION_COOKIE)?.value) !== null;

  return (
    <main className="login">
      <section className="login__panel" aria-labelledby="login-title">
        <img className="login__logo" src="/brand/logo-horizontal.png" alt="Leadapreneur" width={197} height={34} />
        <p className="login__kicker">Content studio</p>
        <h1 id="login-title">Welcome back, leader.</h1>
        <p className="login__lede">Sign in to write insights, publish events and keep the website current.</p>

        {tokenRejected ? (
          <p className="login__error" role="alert">
            You are signed in, but GitHub rejected the CMS access token, so the editor could not open. Ask the site
            administrator to renew CMS_GITHUB_TOKEN in Vercel.
          </p>
        ) : null}

        {passwordLoginConfigured() ? (
          <LoginForm returnTo={returnTo} />
        ) : (
          <p className="login__notice">Email sign-in has not been set up yet. Use GitHub below.</p>
        )}

        <div className="login__divider"><span>or</span></div>
        <a className="login__github" href={githubHref}>
          <svg viewBox="0 0 16 16" aria-hidden="true" width="18" height="18">
            <path
              fill="currentColor"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
          Continue with GitHub
        </a>
      </section>
      <p className="login__footer">Dare to be great.</p>
    </main>
  );
}
