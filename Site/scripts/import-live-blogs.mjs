/**
 * One-off migration: crawl the live Framer blog and write every article into
 * the Keystatic content folders.
 *
 *   node scripts/import-live-blogs.mjs            # add posts that are not in content/blogs yet
 *   node scripts/import-live-blogs.mjs --force    # overwrite existing posts (discards CMS edits)
 *
 * Every image (banner and inline) is downloaded into public/uploads/blogs/<slug>/
 * so nothing depends on framerusercontent.com after the move. Slugs, titles,
 * dates, live meta titles and descriptions, heading order, links and author
 * attribution are preserved. The script re-renders each converted file and
 * fails if any words from the live article went missing.
 */
import { existsSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import Markdoc from '@markdoc/markdoc';
import { dump } from 'js-yaml';
import TurndownService from 'turndown';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = 'https://www.leadapreneur.com';
const force = process.argv.includes('--force');

const authors = {
  'hanaa-maysoon': { name: 'Hanaa Maysoon', jobTitle: 'COO', image: 'public/images/team-hanaa.png' },
  'jan-bartscht': { name: 'Jan Henrik Bartscht', jobTitle: 'Founder & CEO', image: 'public/images/ceo-jan.jpg' },
  leadapreneur: { name: 'Leadapreneur', jobTitle: 'Editorial team', isOrganisation: true },
};

// Live links to Framer routes that have a different address on the new site.
const internalLinks = {
  '/greatness-games': '/ai-x-talent-accelerator/#greatness-games',
  '/blog': '/insights/',
};

function decodeEntities(value) {
  const named = { amp: '&', apos: "'", gt: '>', lt: '<', nbsp: ' ', quot: '"', rsquo: '’', lsquo: '‘', ldquo: '“', rdquo: '”', hellip: '…', mdash: '—', ndash: '–' };
  return value.replace(/&(#x?[\da-f]+|[a-z]+);/gi, (entity, code) => {
    if (code[0] === '#') {
      const radix = code[1]?.toLowerCase() === 'x' ? 16 : 10;
      const number = Number.parseInt(code.replace(/^#x?/i, ''), radix);
      return Number.isFinite(number) ? String.fromCodePoint(number) : entity;
    }
    return named[code.toLowerCase()] ?? entity;
  });
}

function textFromHtml(value) {
  const blockTag = /<\/?(?:p|h[1-6]|li|ul|ol|blockquote|br|div|img)\b[^>]*>/gi;
  return decodeEntities(value.replace(/<!--[\s\S]*?-->/g, '').replace(blockTag, ' ').replace(/<[^>]+>/g, ''))
    .replace(/\p{Cf}/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function words(value) {
  return textFromHtml(value).replace(/[^\p{L}\p{N}]+/gu, ' ').trim().split(' ').filter(Boolean);
}

async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} while fetching ${url}`);
  return response.text();
}

function parseListing(html) {
  const cards = [];
  for (const [, encodedSlug, cardHtml] of html.matchAll(/<a\b[^>]*href="\.\/blog\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)) {
    const title = cardHtml.match(/<h6\b[^>]*>([\s\S]*?)<\/h6>/i);
    const date = cardHtml.match(/<time\b[^>]*datetime="([^"]+)"[^>]*>/i);
    const image = cardHtml.match(/<img\b[^>]*src="([^"]+)"[^>]*>/i);
    if (!title || !date || !image) continue;
    const slug = decodeURIComponent(encodedSlug);
    if (cards.some((card) => card.slug === slug)) continue;
    cards.push({ slug, title: textFromHtml(title[1]), date: date[1].slice(0, 10), image: decodeEntities(image[1]) });
  }
  return cards;
}

/** The article body is Framer's RichTextContainer; match its closing tag by depth. */
function extractContent(html, slug) {
  const marker = html.search(/<div\b[^>]*data-framer-name="Content"[^>]*data-framer-component-type="RichTextContainer"/i);
  if (marker < 0) throw new Error(`Could not find article content for ${slug}`);
  const start = html.indexOf('>', marker) + 1;
  const pattern = /<(\/?)div\b[^>]*>/gi;
  pattern.lastIndex = start;
  let depth = 1;
  for (let match = pattern.exec(html); match; match = pattern.exec(html)) {
    depth += match[1] ? -1 : 1;
    if (depth === 0) return html.slice(start, match.index);
  }
  throw new Error(`Unbalanced article content for ${slug}`);
}

function metaContent(html, pattern) {
  const match = html.match(pattern);
  return match ? decodeEntities(match[1]).trim() : '';
}

function baseImageUrl(src) {
  const url = new URL(decodeEntities(src));
  url.search = '';
  return url;
}

async function downloadImage(src, directory, basename) {
  const url = baseImageUrl(src);
  url.searchParams.set('scale-down-to', '1600');
  const response = await fetch(url, { headers: { accept: 'image/webp,image/*;q=0.8' } });
  if (!response.ok) throw new Error(`${response.status} while fetching ${url}`);
  const type = response.headers.get('content-type') ?? '';
  const extension = { 'image/webp': 'webp', 'image/png': 'png', 'image/jpeg': 'jpg', 'image/avif': 'avif', 'image/gif': 'gif' }[type.split(';')[0]];
  if (!extension) throw new Error(`Unexpected image type "${type}" for ${url}`);
  const filename = `${basename}.${extension}`;
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, filename), Buffer.from(await response.arrayBuffer()));
  return filename;
}

function rewriteHref(href) {
  const decoded = decodeEntities(href);
  const url = new URL(decoded, sourceRoot);
  if (url.hostname !== 'www.leadapreneur.com' && url.hostname !== 'leadapreneur.com') return decoded;
  const path = url.pathname.replace(/\/$/, '') || '/';
  if (internalLinks[path]) return internalLinks[path];
  if (path.startsWith('/blog/')) return `${path}/`;
  return decoded;
}

/** Remove Framer wrappers and layout-only line breaks so the result converts to clean Markdoc. */
function normaliseFramerHtml(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s(?:class|style|dir|data-[\w-]+|decoding|sizes|srcset|loading|width|height)="[^"]*"/gi, '')
    .replace(/<\/?code>/gi, '')
    .replace(/<(strong|em)>(\s|<br>|&nbsp;)*<\/\1>/gi, '$2')
    .replace(/<(h[1-6])>((?:(?!<\/\1>)[\s\S])*)<\/\1>/gi, (full, tag, inner) => {
      const level = { h2: 2, h3: 3, h4: 3 }[tag.toLowerCase()] ?? 2;
      const text = textFromHtml(inner.replace(/<br\s*\/?>/gi, ' '));
      return text ? `<h${level}>${text}</h${level}>` : '';
    })
    .replace(/(?:<br\s*\/?>\s*){2,}/gi, '</p><p>')
    .replace(/<p>(?:\s|&nbsp;|<br\s*\/?>)*<\/p>/gi, '')
    .replace(/<p>(?:\s|<br\s*\/?>)+/gi, '<p>')
    .replace(/(?:\s|<br\s*\/?>)+<\/p>/gi, '</p>')
    .replace(/<li>\s*<p>([\s\S]*?)<\/p>\s*<\/li>/gi, '<li>$1</li>')
    .replace(/<img\b[^>]*>/gi, (tag) => `<p>${tag}</p>`)
    .replace(/<p>(<p><img\b[^>]*><\/p>)<\/p>/gi, '$1')
    .replace(/&nbsp;/g, ' ');
}

function createTurndown() {
  const service = new TurndownService({
    headingStyle: 'atx',
    bulletListMarker: '-',
    emDelimiter: '_',
    strongDelimiter: '**',
    hr: '---',
    br: '\\',
  });
  service.addRule('links', {
    filter: (node) => node.nodeName === 'A',
    replacement: (content, node) => {
      const href = node.getAttribute('href');
      const text = content.trim();
      return href && text ? `[${text}](${rewriteHref(href)})` : text;
    },
  });
  // Tight lists, written the way the Keystatic editor saves them.
  service.addRule('listItem', {
    filter: 'li',
    replacement: (content, node) => {
      const parent = node.parentNode;
      const index = Array.prototype.indexOf.call(parent.children, node);
      const prefix = parent.nodeName === 'OL' ? `${Number(parent.getAttribute('start') || 1) + index}. ` : '- ';
      const body = content.trim().replace(/\n+/g, `\n${' '.repeat(prefix.length)}`);
      return `${prefix}${body}${node.nextSibling ? '\n' : ''}`;
    },
  });
  // Framer pads bold and italic runs with spaces; move them outside the markers.
  for (const [tag, marker] of [['STRONG', '**'], ['B', '**'], ['EM', '_'], ['I', '_']]) {
    service.addRule(`trim-${tag}`, {
      filter: tag.toLowerCase(),
      replacement: (content) => {
        const match = content.match(/^(\s*)([\s\S]*?)(\s*)$/);
        return match[2] ? `${match[1]}${marker}${match[2]}${marker}${match[3]}` : content;
      },
    });
  }
  return service;
}

/** YAML in the style the Keystatic editor writes, with empty values left out. */
function frontmatter(data) {
  const compact = (value) =>
    value && typeof value === 'object'
      ? Object.fromEntries(
          Object.entries(value)
            .filter(([, item]) => item !== undefined && item !== '' && item !== null)
            .map(([key, item]) => [key, compact(item)]),
        )
      : value;
  // Keystatic writes plain dates unquoted.
  return dump(compact(data)).replace(/^(\s*\w+): '(\d{4}-\d{2}-\d{2})'$/gm, '$1: $2');
}

async function writeAuthors() {
  for (const [slug, author] of Object.entries(authors)) {
    const file = join(root, 'content', 'authors', `${slug}.yaml`);
    if (existsSync(file) && !force) continue;
    let profileImage;
    if (author.image) {
      const extension = author.image.split('.').pop();
      const directory = join(root, 'public', 'uploads', 'authors', slug);
      await mkdir(directory, { recursive: true });
      const { copyFile } = await import('node:fs/promises');
      await copyFile(join(root, author.image), join(directory, `profileImage.${extension}`));
      profileImage = `/uploads/authors/${slug}/profileImage.${extension}`;
    }
    await mkdir(dirname(file), { recursive: true });
    await writeFile(
      file,
      frontmatter({ name: author.name, jobTitle: author.jobTitle, profileImage, isOrganisation: author.isOrganisation }),
    );
  }
}

/** Framer articles either end with "Written by <name> / <series>" or open with "By <name>, <role>". */
function takeAttribution(html) {
  let contentHtml = html;
  let author = 'leadapreneur';
  let category = '';
  const signature = contentHtml.match(/<h[1-6]>((?:(?!<\/h[1-6]>)[\s\S])*Written by(?:(?!<\/h[1-6]>)[\s\S])*)<\/h[1-6]>\s*$/i);
  if (signature) {
    const lines = signature[1].split(/<br\s*\/?>/i).map(textFromHtml).filter(Boolean);
    const name = lines.shift().replace(/^Written by\s+/i, '');
    author = Object.entries(authors).find(([, value]) => value.name.startsWith(name) || name.startsWith(value.name))?.[0] ?? author;
    category = lines.join(' ');
    contentHtml = contentHtml.slice(0, signature.index).trim();
  }
  const byline = contentHtml.match(/^\s*<p><em>By ([^,<]+)[^<]*<\/em><\/p>/i);
  if (byline) {
    const name = textFromHtml(byline[1]);
    const match = Object.entries(authors).find(([, value]) => value.name === name);
    if (match) {
      author = match[0];
      contentHtml = contentHtml.slice(byline[0].length);
    }
  }
  return { contentHtml, author, category };
}

const listing = await fetchText(`${sourceRoot}/blog`);
const cards = parseListing(listing);
if (!cards.length) throw new Error('No articles found on the live blog listing.');
console.log(`Found ${cards.length} live articles.`);

await writeAuthors();
const turndown = createTurndown();
let written = 0;

for (const [index, card] of cards.entries()) {
  const target = join(root, 'content', 'blogs', `${card.slug}.mdoc`);
  const label = `[${index + 1}/${cards.length}] ${card.slug}`;
  if (existsSync(target) && !force) {
    console.log(`${label}: already in content/blogs, skipped`);
    continue;
  }

  const html = await fetchText(`${sourceRoot}/blog/${encodeURIComponent(card.slug)}`);
  const liveTitle = metaContent(html, /<title>([^<]*)<\/title>/i).replace(/\s+-\s+Leadapreneur$/, '').replace(/\s+/g, ' ');
  const liveDescription = metaContent(html, /<meta name="description" content="([^"]*)"/i);
  const stripped = extractContent(html, card.slug)
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s(?:class|style|dir)="[^"]*"/gi, '');
  const { contentHtml: rawContent, author, category } = takeAttribution(stripped);

  const uploads = join(root, 'public', 'uploads', 'blogs', card.slug);
  const bannerFile = await downloadImage(card.image, uploads, 'bannerImage');

  let imageIndex = 0;
  let contentHtml = normaliseFramerHtml(rawContent);
  for (const [tag] of contentHtml.matchAll(/<img\b[^>]*>/gi)) {
    const src = tag.match(/\bsrc="([^"]+)"/i)?.[1];
    if (!src) {
      contentHtml = contentHtml.replace(tag, '');
      continue;
    }
    imageIndex += 1;
    const filename = await downloadImage(src, uploads, `image-${String(imageIndex).padStart(2, '0')}`);
    const alt = decodeEntities(tag.match(/\balt="([^"]*)"/i)?.[1] ?? '');
    // Keystatic percent-encodes non-ASCII characters in image paths when it saves.
    const localSrc = encodeURI(`/uploads/blogs/${card.slug}/${filename}`);
    contentHtml = contentHtml.replace(tag, `<img src="${localSrc}" alt="${alt.replaceAll('"', '&quot;')}">`);
  }

  const markdoc = turndown.turndown(contentHtml).replace(/\n{3,}/g, '\n\n').trim();

  // Round-trip check: every word in the live article must survive the conversion.
  const rendered = Markdoc.renderers.html(Markdoc.transform(Markdoc.parse(markdoc)));
  const errors = Markdoc.validate(Markdoc.parse(markdoc));
  if (errors.length) throw new Error(`${card.slug}: Markdoc validation failed ${JSON.stringify(errors)}`);
  const before = words(rawContent).join(' ');
  const after = words(rendered).join(' ');
  if (before !== after) {
    throw new Error(`${card.slug}: text changed during conversion.\nLIVE: ${before.slice(0, 400)}\nNEW:  ${after.slice(0, 400)}`);
  }

  const firstParagraph = textFromHtml(contentHtml.match(/<p>((?:(?!<\/p>)[\s\S])*[a-z][\s\S]*?)<\/p>/i)?.[1] ?? '');
  const description = firstParagraph.length > 205 ? `${firstParagraph.slice(0, 202).replace(/\s+\S*$/, '').trimEnd()}…` : firstParagraph;

  const data = {
    title: card.title,
    status: 'published',
    publishDate: card.date,
    description,
    author,
    category,
    bannerImage: `/uploads/blogs/${card.slug}/${bannerFile}`,
    bannerAlt: '',
    seo: {
      title: liveTitle && liveTitle !== card.title ? liveTitle : '',
      description: liveDescription,
      noindex: false,
    },
  };

  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, `---\n${frontmatter(data)}---\n${markdoc}\n`);
  written += 1;
  console.log(`${label}: ${before.split(' ').length} words, ${imageIndex} inline images, author ${author}${category ? `, ${category}` : ''}`);
}

console.log(`Wrote ${written} of ${cards.length} articles.`);
