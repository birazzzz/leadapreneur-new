import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Cache-busting tokens for the static assets.
 *
 * Vercel serves /assets/* with `max-age=31536000, immutable`, so a URL that
 * does not change is cached by returning visitors for a year. These tokens are
 * derived from the file contents, which means shipping a change is enough to
 * invalidate it — there is no version string to remember to bump.
 */
const root = fileURLToPath(new URL('..', import.meta.url));

function digest(...relativePaths) {
  const hash = createHash('sha1');
  for (const relativePath of relativePaths) hash.update(readFileSync(join(root, relativePath)));
  return hash.digest('hex').slice(0, 10);
}

export const assetVersion = {
  styles: digest('src/styles.css'),
  site: digest('src/site.js'),
  // quiz.js pulls in the engine, so a change to either has to bust the same URL.
  quiz: digest('src/quiz.js', 'lib/quiz-engine.mjs'),
};
