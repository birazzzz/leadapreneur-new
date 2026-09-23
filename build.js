#!/usr/bin/env node
/**
 * Assembles the static site.
 *
 * src/_layout.html  — the shell (head, header, footer) with {{TITLE}}, {{DESC}}, {{BODY}}
 * src/<page>.html   — just the <main> for that page, preceded by two HTML comments:
 *                       <!--title: ...-->
 *                       <!--desc:  ...-->
 *
 * Output is plain static HTML at the repo root, so there is nothing to run in
 * production — the build only exists so the header and footer live in one place.
 */
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'src');
const OUT = __dirname;

const layout = fs.readFileSync(path.join(SRC, '_layout.html'), 'utf8');

const pages = fs.readdirSync(SRC).filter(f => f.endsWith('.html') && !f.startsWith('_'));

let built = 0;
for (const file of pages) {
    const raw = fs.readFileSync(path.join(SRC, file), 'utf8');

    const title = (raw.match(/<!--\s*title:\s*([\s\S]*?)-->/) || [])[1];
    const desc = (raw.match(/<!--\s*desc:\s*([\s\S]*?)-->/) || [])[1];
    if (!title || !desc) {
        console.error(`✗ ${file} is missing a title or desc comment`);
        process.exitCode = 1;
        continue;
    }

    const body = raw.replace(/<!--\s*(?:title|desc):[\s\S]*?-->\s*/g, '').trim();

    const html = layout
        .replace('{{TITLE}}', title.trim())
        .replace('{{DESC}}', desc.trim())
        .replace('{{BODY}}', body);

    fs.writeFileSync(path.join(OUT, file), html);
    built++;
    console.log(`✓ ${file}`);
}

console.log(`\n${built} page${built === 1 ? '' : 's'} built.`);
