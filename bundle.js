#!/usr/bin/env node
/**
 * Bundles the whole static site into ONE self-contained HTML file.
 *
 * Everything is inlined — CSS, JS, and every image as a data URI — so the file
 * can be hosted anywhere (or opened from disk) with no server and no assets
 * folder. Internal links become hash routes and every page's <main> ships in
 * the document, with the router toggling which one is shown.
 *
 * Output: dist/leadapreneur-site.html
 */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const OUT_DIR = path.join(ROOT, 'dist');

// Route order drives the nav order in the bundle.
const PAGES = [
    ['index', 'Home'],
    ['ai-x-talent-accelerator', 'AI x Talent Accelerator'],
    ['case-studies', 'Case Studies'],
    ['projects', 'Projects'],
    ['insights', 'Insights'],
    ['about', 'About Us'],
    ['contact', 'Contact']
];

const MIME = {
    '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
    '.gif': 'image/gif', '.svg': 'image/svg+xml', '.webp': 'image/webp'
};

const dataUriCache = new Map();
function dataUri(rel) {
    if (dataUriCache.has(rel)) return dataUriCache.get(rel);
    const file = path.join(ROOT, rel);
    if (!fs.existsSync(file)) {
        console.warn(`  ! missing asset: ${rel}`);
        return rel;
    }
    const mime = MIME[path.extname(rel).toLowerCase()] || 'application/octet-stream';
    const uri = `data:${mime};base64,${fs.readFileSync(file).toString('base64')}`;
    dataUriCache.set(rel, uri);
    return uri;
}

/** Replace every images/... reference with its data URI. */
function inlineImages(html) {
    return html.replace(/(src|href)="(images\/[^"]+)"/g, (_, attr, rel) => `${attr}="${dataUri(rel)}"`);
}

/** about.html -> #/about ; index.html -> #/ */
function rewriteLinks(html) {
    return html.replace(/href="([a-z0-9-]+)\.html"/g, (_, name) =>
        `href="#/${name === 'index' ? '' : name}"`);
}

// ---------------------------------------------------------------- collect
const mains = [];
const meta = [];

for (const [slug, label] of PAGES) {
    const file = path.join(ROOT, `${slug}.html`);
    if (!fs.existsSync(file)) { console.warn(`  ! no ${slug}.html — skipped`); continue; }
    const html = fs.readFileSync(file, 'utf8');

    const title = (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || 'Leadapreneur';
    const start = html.indexOf('<main id="main">');
    const end = html.indexOf('</main>') + '</main>'.length;
    let main = html.slice(start, end);

    main = main.replace('<main id="main">', `<main class="page" data-route="${slug === 'index' ? '' : slug}"${mains.length ? ' hidden' : ''}>`);
    mains.push(inlineImages(rewriteLinks(main)));
    meta.push({ slug: slug === 'index' ? '' : slug, label, title: title.trim() });
}

// ------------------------------------------------------------- shell parts
const layout = fs.readFileSync(path.join(ROOT, 'src', '_layout.html'), 'utf8');
const header = inlineImages(rewriteLinks(layout.slice(layout.indexOf('<header'), layout.indexOf('</header>') + 9)));
const footer = inlineImages(rewriteLinks(layout.slice(layout.indexOf('<footer'), layout.indexOf('</footer>') + 9)));

const css = fs.readFileSync(path.join(ROOT, 'assets', 'site.css'), 'utf8');
const js = fs.readFileSync(path.join(ROOT, 'assets', 'site.js'), 'utf8');

// ------------------------------------------------------------------ router
const router = `
/* Hash router for the bundled build: every page is already in the document,
   so routing is just deciding which <main> is visible. */
(function () {
    var TITLES = ${JSON.stringify(Object.fromEntries(meta.map(m => [m.slug, m.title])))};
    var pages = [].slice.call(document.querySelectorAll('.page'));

    function route() {
        var want = (location.hash || '#/').replace(/^#\\/?/, '');
        var match = pages.filter(function (p) { return p.dataset.route === want; })[0] || pages[0];
        pages.forEach(function (p) { p.hidden = p !== match; });

        document.title = TITLES[match.dataset.route] || 'Leadapreneur';

        document.querySelectorAll('.nav a[href^="#/"]').forEach(function (a) {
            var slug = a.getAttribute('href').replace(/^#\\/?/, '');
            if (slug === match.dataset.route) a.setAttribute('aria-current', 'page');
            else a.removeAttribute('aria-current');
        });

        // Re-run the reveal observer over whatever just became visible.
        match.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
        window.scrollTo(0, 0);
    }

    addEventListener('hashchange', route);
    route();
})();
`;

// ------------------------------------------------------------------ output
const out = `<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="theme-color" content="#EDEAE7">
<title>Leadapreneur</title>
<meta name="description" content="${meta[0] ? 'Leadapreneur is the fastest way to future-proof your talent.' : ''}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
${css}
/* The bundled build stacks every page in one document. */
.page[hidden] { display: none !important; }
</style>
</head>

<body>
<a class="sr" href="#main">Skip to content</a>
${header}
${mains.join('\n')}
${footer}
<script>
${js}
${router}
</script>
</body>

</html>
`;

fs.mkdirSync(OUT_DIR, { recursive: true });
const outFile = path.join(OUT_DIR, 'leadapreneur-site.html');
fs.writeFileSync(outFile, out);

/* Artifact build: the host supplies <!doctype>, <html>, <head> and <body>, so
   this variant ships page content only. The webfont moves to an @import at the
   top of the stylesheet, since there is no <head> of our own to link from. */
const artifact = `<title>Leadapreneur</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
${css}
.page[hidden] { display: none !important; }
</style>

<a class="sr" href="#main">Skip to content</a>
${header}
${mains.join('\n')}
${footer}
<script>
${js}
${router}
</scr` + `ipt>
`;
fs.writeFileSync(path.join(OUT_DIR, 'leadapreneur-artifact.html'), artifact);
console.log(`artifact build -> dist/leadapreneur-artifact.html (${(Buffer.byteLength(artifact) / 1024 / 1024).toFixed(2)} MB)`);

console.log(`\n${meta.length} pages bundled -> dist/leadapreneur-site.html`);
console.log(`${dataUriCache.size} images inlined`);
console.log(`${(Buffer.byteLength(out) / 1024 / 1024).toFixed(2)} MB total`);
