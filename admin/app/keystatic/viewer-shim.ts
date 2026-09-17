/**
 * Keystatic greets people with their GitHub name and photo. Everyone on the
 * team, whether signed in by email or GitHub, sees one friendly identity
 * instead. Only the display fields of the signed-in user are changed; commits
 * and permissions still come from the real GitHub token.
 */
const GITHUB_GRAPHQL = 'https://api.github.com/graphql';
const DISPLAY = { name: 'Leader', avatarUrl: '/brand/avatar.svg' };

declare global {
  interface Window {
    __leadapreneurViewerShim?: boolean;
  }
}

if (typeof window !== 'undefined' && !window.__leadapreneurViewerShim) {
  window.__leadapreneurViewerShim = true;
  const originalFetch = window.fetch.bind(window);

  window.fetch = async (input, init) => {
    const response = await originalFetch(input, init);
    const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
    if (!url.startsWith(GITHUB_GRAPHQL) || !response.ok) return response;

    try {
      const body = await response.clone().json();
      if (!body?.data?.viewer) return response;
      body.data.viewer = { ...body.data.viewer, ...DISPLAY };
      const headers = new Headers(response.headers);
      headers.delete('content-length');
      return new Response(JSON.stringify(body), { status: response.status, statusText: response.statusText, headers });
    } catch {
      return response;
    }
  };
}

export {};
