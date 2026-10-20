import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { onRequest } from '../functions/_middleware.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const password = 'staff-test-password';
const hash = createHash('sha256').update(password).digest('hex');
const request = (path, auth) => new Request(`https://www.leadapreneur.com${path}`, {
  headers: auth ? { Authorization: `Basic ${Buffer.from(`leadapreneur:${auth}`).toString('base64')}` } : {}
});
const invoke = (path, auth, env = { CERTIFICATES_PASSWORD_SHA256: hash }) =>
  onRequest({ request: request(path, auth), env, next: async () => new Response('private certificate content') });

test('the certificate page and assets require staff authentication', async () => {
  for (const path of ['/certificates', '/certificates/', '/certificates/app.js', '/certificates/assets/logo-horizontal.png']) {
    const missing = await invoke(path);
    assert.equal(missing.status, 401, path);
    assert.match(missing.headers.get('www-authenticate'), /^Basic /);
    assert.equal(missing.headers.get('x-robots-tag'), 'noindex, nofollow, noarchive');
    assert.equal(missing.headers.get('cache-control'), 'private, no-store');
    assert.equal(await missing.text(), 'Leadapreneur staff sign-in required.');
    assert.equal((await invoke(path, 'wrong')).status, 401, path);
    const allowed = await invoke(path, password);
    assert.equal(allowed.status, 200, path);
    assert.equal(await allowed.text(), 'private certificate content');
    assert.equal(allowed.headers.get('cache-control'), 'private, no-store');
  }
});

test('certificate access fails closed when the password secret is missing', async () => {
  assert.equal((await invoke('/certificates/', password, {})).status, 503);
});

test('the certificate studio is built but remains absent from discovery files', () => {
  const dist = join(root, 'dist');
  assert.ok(existsSync(join(dist, 'certificates', 'index.html')));
  assert.ok(existsSync(join(dist, 'certificates', 'assets', 'logo-horizontal.png')));
  for (const file of ['sitemap.xml', 'llms.txt']) {
    assert.doesNotMatch(readFileSync(join(dist, file), 'utf8'), /\/certificates(?:\/|\b)/i, file);
  }
});
