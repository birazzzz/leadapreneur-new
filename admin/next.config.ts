import path from 'node:path';
import type { NextConfig } from 'next';

// The CMS schema (../keystatic.config.ts) and content live at the repository
// root, one level above this app, so the bundler and file tracing must see it.
const repoRoot = path.join(__dirname, '..');

const nextConfig: NextConfig = {
  outputFileTracingRoot: repoRoot,
  turbopack: { root: repoRoot },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
