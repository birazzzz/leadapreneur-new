import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = 'https://www.leadapreneur.com';

const educationalVideos = [
  ['5kG4ufdW45U', 'Transcribe Audio & Video in Seconds with Turboscribe | Hanaa Hacks AI'],
  ['H-Ut9Sna0H8', 'Make Stunning Presentations in Minutes with Gamma AI (No Design Skills Needed!) | Hanaa Hacks AI'],
  ['IhbsS8PQ20M', 'The future of HR isn\u2019t about policies. It\u2019s about people + AI.'],
  ['kiMd7CcuNJo', 'What Smart Leaders Do When the Old Rules Stop Working'],
].map(([youtubeId, title]) => ({ youtubeId, title, category: 'Educational video' }));

const inspiringPodcasts = [
  ['Q444bn3L8Nk', 'He Almost Gave Up in Japan.. Then Found His Purpose | Rizal Azis on Mindset, Legacy & Leadership'],
  ['Z-1cp_m2rNM', 'From $50/Month to HR Powerhouse: Lessons from Standard Chartered\u2019s Former HR Head'],
  ['RQcsEHalWyQ', 'How She Transformed HR Across 50+ Countries | Leadership & Agility Masterclass'],
  ['9lNDdqytqo4', 'When They Finally Spoke\u2026 He Did What No One Else Would | Toh\u2019s Stand for Trust & Humanity'],
  ['CzFGrleLQBQ', 'She gave up a monthly salary of RM70k! Here\u2019s why | Noor Amy Ismail\u2019s Daring Leap to Greatness'],
  ['FbMhVLkVY5g', 'Daring to Be Great: AI, Talent & The Future of Work (ft. Leadapreneur Team)'],
].map(([youtubeId, title]) => ({ youtubeId, title, category: 'Inspiring podcast' }));

function decodeEntities(value) {
  const named = { amp: '&', apos: "'", gt: '>', lt: '<', nbsp: ' ', quot: '"', rsquo: '\u2019', ldquo: '\u201c', rdquo: '\u201d' };
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
  return decodeEntities(value.replace(/<!--[\s\S]*?-->/g, '').replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
}

function attribute(attributes, name) {
  const match = attributes.match(new RegExp(`\\b${name}="([^"]*)"`, 'i'));
  return match?.[1] ?? '';
}

function sanitizeArticleHtml(value) {
  const allowed = new Set(['p', 'a', 'strong', 'em', 'b', 'i', 'ul', 'ol', 'li', 'blockquote', 'br', 'img', 'h2', 'h3', 'h4', 'h5', 'h6']);
  return value
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<\/?([a-z][a-z\d]*)([^>]*)>/gi, (full, rawTag, attributes) => {
      const closing = full.startsWith('</');
      const originalTag = rawTag.toLowerCase();
      if (!allowed.has(originalTag)) return '';
      const tag = originalTag === 'h5' || originalTag === 'h6' ? 'h2' : originalTag;
      if (closing) return ['br', 'img'].includes(tag) ? '' : `</${tag}>`;
      if (tag === 'a') {
        const href = attribute(attributes, 'href');
        if (!href) return '<span>';
        const external = /^https?:/i.test(href);
        return `<a href="${href}"${external ? ' target="_blank" rel="noreferrer"' : ''}>`;
      }
      if (tag === 'img') {
        const src = decodeEntities(attribute(attributes, 'src'));
        const alt = decodeEntities(attribute(attributes, 'alt'));
        return src ? `<img src="${src}" alt="${alt}" loading="lazy">` : '';
      }
      return `<${tag}>`;
    })
    .replace(/<p>\s*<\/p>/g, '')
    .trim();
}

async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} while fetching ${url}`);
  return response.text();
}

function parseListing(html) {
  const cards = [];
  const cardPattern = /<a\b[^>]*href="\.\/blog\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
  for (const match of html.matchAll(cardPattern)) {
    const [, encodedSlug, cardHtml] = match;
    const titleMatch = cardHtml.match(/<h6\b[^>]*>([\s\S]*?)<\/h6>/i);
    const dateMatch = cardHtml.match(/<time\b[^>]*datetime="([^"]+)"[^>]*>/i);
    const imageMatch = cardHtml.match(/<img\b[^>]*src="([^"]+)"[^>]*>/i);
    if (!titleMatch || !dateMatch || !imageMatch) continue;
    cards.push({
      slug: decodeURIComponent(encodedSlug),
      title: textFromHtml(titleMatch[1]),
      date: dateMatch[1].slice(0, 10),
      sourceImage: decodeEntities(imageMatch[1]),
    });
  }
  return cards.filter((card, index, all) => all.findIndex((item) => item.slug === card.slug) === index);
}

function parseArticle(html, card) {
  const contentMatch = html.match(/<div\b[^>]*data-framer-name="Content"[^>]*data-framer-component-type="RichTextContainer"[^>]*>([\s\S]*?)<\/div>/i);
  if (!contentMatch) throw new Error(`Could not find article content for ${card.slug}`);
  let contentHtml = sanitizeArticleHtml(contentMatch[1]);
  const signatureMatch = contentHtml.match(/<h2>(?:(?!<\/h2>)[\s\S])*Written by\s+([^<]+)(?:(?!<\/h2>)[\s\S])*<\/h2>\s*$/i);
  const author = textFromHtml(signatureMatch?.[1] ?? '') || 'Leadapreneur';
  if (signatureMatch) contentHtml = contentHtml.slice(0, signatureMatch.index).trim();
  const firstParagraph = contentHtml.match(/<p>([\s\S]*?)<\/p>/i)?.[1] ?? '';
  const plainBody = textFromHtml(contentHtml);
  const excerptText = textFromHtml(firstParagraph) || plainBody;
  const excerpt = excerptText.length > 205 ? `${excerptText.slice(0, 202).replace(/\s+\S*$/, '').trimEnd()}\u2026` : excerptText;
  return {
    slug: card.slug,
    title: card.title,
    category: 'Leadership article',
    date: card.date,
    excerpt,
    thumbnail: `/images/insights/${card.slug}.webp`,
    sourceUrl: `${sourceRoot}/blog/${encodeURI(card.slug)}`,
    author,
    readingTime: Math.max(2, Math.ceil(plainBody.split(/\s+/).length / 220)),
    contentHtml,
  };
}

async function downloadThumbnail(card) {
  const imageUrl = new URL(card.sourceImage);
  imageUrl.searchParams.set('width', '960');
  imageUrl.searchParams.delete('height');
  const output = join(root, 'public', 'images', 'insights', `${card.slug}.webp`);
  const response = await fetch(imageUrl, { headers: { accept: 'image/webp,image/*' } });
  if (!response.ok) throw new Error(`${response.status} while fetching ${imageUrl}`);
  await writeFile(output, Buffer.from(await response.arrayBuffer()));
}

const listing = await fetchText(`${sourceRoot}/blog`);
const cards = parseListing(listing);
if (cards.length !== 17) throw new Error(`Expected 17 leadership articles, found ${cards.length}`);

await mkdir(join(root, 'public', 'images', 'insights'), { recursive: true });
const insights = [];
for (const [index, card] of cards.entries()) {
  const articleHtml = await fetchText(`${sourceRoot}/blog/${encodeURI(card.slug)}`);
  insights.push(parseArticle(articleHtml, card));
  await downloadThumbnail(card);
  console.log(`[${index + 1}/${cards.length}] ${card.title}`);
}

const output = `// Generated from ${sourceRoot}/blog by scripts/import-insights.mjs.\n// Re-run the importer to refresh the source library.\n\nexport const insights = ${JSON.stringify(insights, null, 2)};\n\nexport const educationalVideos = ${JSON.stringify(educationalVideos, null, 2)};\n\nexport const inspiringPodcasts = ${JSON.stringify(inspiringPodcasts, null, 2)};\n`;
await writeFile(join(root, 'data', 'insights.mjs'), output);
console.log(`Imported ${insights.length} articles, ${educationalVideos.length} videos and ${inspiringPodcasts.length} podcasts.`);
