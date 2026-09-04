import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { insights } from '../data/content.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

const htmlFiles = walk(dist).filter((file) => extname(file) === '.html');
const indexableFiles = htmlFiles.filter((file) => !readFileSync(file, 'utf8').includes('noindex,follow'));
const expectedIndexablePages = 11 + insights.length;

test('every indexable page has one h1, a canonical, description and parseable JSON-LD', () => {
  assert.equal(indexableFiles.length, expectedIndexablePages);
  for (const file of indexableFiles) {
    const html = readFileSync(file, 'utf8');
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, file);
    assert.match(html, /<link rel="canonical" href="https:\/\/www\.leadapreneur\.com\//, file);
    assert.match(html, /<meta name="description" content="[^\"]+">/, file);
    const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    assert.ok(scripts.length >= 1, file);
    scripts.forEach((match) => assert.doesNotThrow(() => JSON.parse(match[1]), file));
  }
});

test('generated pages contain no duplicate ids or unfinished copy', () => {
  for (const file of indexableFiles) {
    const html = readFileSync(file, 'utf8');
    const ids = [...html.matchAll(/\sid="([^\"]+)"/g)].map((match) => match[1]);
    assert.equal(ids.length, new Set(ids).size, `duplicate id in ${file}`);
    assert.doesNotMatch(html, /\b(?:lorem ipsum|todo|coming soon|not wired|placeholder)\b/i, file);
  }
});

test('homepage keeps the required story order', () => {
  const html = readFileSync(join(dist, 'index.html'), 'utf8');
  const markers = [
    'home-hero',
    'role-section',
    'trust-section',
    'future-section',
    'journey-section',
    'projects-section',
    'games-section',
    'impact-section',
    'events-home',
    'stories-section',
    'path-section',
    'insights-section',
    'final-cta',
    'site-footer',
  ];
  const positions = markers.map((marker) => html.indexOf(marker));
  assert.ok(positions.every((position) => position >= 0));
  assert.deepEqual([...positions].sort((a, b) => a - b), positions);
});

test('role quiz contains no personal-data gate', () => {
  const html = readFileSync(join(dist, 'role-quiz', 'index.html'), 'utf8');
  assert.doesNotMatch(html, /type="(?:email|file|tel)"|first name|last name|phone number|company field/i);
  assert.match(html, /No personal details/);
  assert.match(html, /data-quiz-app/);
});

test('internal page links and local assets resolve in the production output', () => {
  for (const file of indexableFiles) {
    const html = readFileSync(file, 'utf8');
    const urls = [...html.matchAll(/(?:href|src)="(\/(?!\/)[^\"?#]*)(?:[?#][^\"]*)?"/g)].map((match) => match[1]);
    for (const url of urls) {
      if (url === '/') {
        assert.ok(existsSync(join(dist, 'index.html')), `${file}: ${url}`);
        continue;
      }
      const path = normalize(join(dist, decodeURIComponent(url.replace(/^\//, ''))));
      const resolved = extname(path) ? path : join(path, 'index.html');
      assert.ok(resolved.startsWith(dist) && existsSync(resolved), `${file}: ${url}`);
    }
  }
});

test('sitemap lists indexable routes and excludes redirects', () => {
  const sitemap = readFileSync(join(dist, 'sitemap.xml'), 'utf8');
  assert.equal((sitemap.match(/<url>/g) || []).length, expectedIndexablePages);
  assert.match(sitemap, /\/role-quiz\//);
  assert.match(sitemap, /\/events\/greatness-games-kl-season-1\//);
  assert.doesNotMatch(sitemap, /<loc>[^<]+\/blog\/<\/loc>/);
});
