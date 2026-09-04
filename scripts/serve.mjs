import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('..', import.meta.url)), 'dist');
const port = Number(process.env.PORT || 4173);
const types = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  let relative = decodeURIComponent(url.pathname).replace(/^\/+/, '');
  let candidate = normalize(join(root, relative));
  if (!candidate.startsWith(root)) {
    response.writeHead(400).end('Bad request');
    return;
  }
  if (existsSync(candidate) && statSync(candidate).isDirectory()) candidate = join(candidate, 'index.html');
  if (!existsSync(candidate) && !extname(candidate)) candidate = join(candidate, 'index.html');
  if (!existsSync(candidate)) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not found');
    return;
  }
  response.writeHead(200, {
    'Content-Type': types[extname(candidate).toLowerCase()] || 'application/octet-stream',
    'Cache-Control': extname(candidate) === '.html' ? 'no-cache' : 'public, max-age=3600',
  });
  if (request.method === 'HEAD') response.end();
  else createReadStream(candidate).pipe(response);
}).listen(port, '127.0.0.1', () => console.log(`Leadapreneur preview: http://127.0.0.1:${port}`));
