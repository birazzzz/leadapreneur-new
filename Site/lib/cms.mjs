import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import Markdoc from '@markdoc/markdoc';
import { createReader } from '@keystatic/core/reader';

import keystaticConfig from '../keystatic.config.ts';
import { zonedWallTimeToIso } from './time.mjs';

/**
 * Build-time content layer.
 *
 * Reads the Keystatic files in content/ from disk (never from GitHub at
 * request time) and shapes them for the existing templates. Drafts are
 * dropped here, so nothing downstream can publish one by accident.
 */
const repoRoot = fileURLToPath(new URL('..', import.meta.url));

function warn(message) {
  console.warn(`[cms] ${message}`);
}

/** Returns the public path when the uploaded file exists, otherwise null. */
function asset(root, publicPath, context) {
  if (!publicPath) return null;
  // The editor may save non-ASCII file paths percent-encoded; normalise to the path on disk.
  let decoded = publicPath;
  try {
    decoded = decodeURI(publicPath);
  } catch {}
  if (existsSync(join(root, 'public', decoded))) return decoded;
  warn(`${context}: image ${publicPath} is missing and was skipped.`);
  return null;
}

function isExternal(href = '') {
  return /^https?:\/\//i.test(href) && !/^https?:\/\/(www\.)?leadapreneur\.com(\/|$)/i.test(href);
}

const markdocConfig = {
  nodes: {
    // The article template supplies the <article> element.
    document: {
      transform(node, config) {
        return node.transformChildren(config);
      },
    },
    paragraph: {
      transform(node, config) {
        const children = node.transformChildren(config);
        // An image on its own line is a figure, not an image inside a paragraph.
        if (children.length === 1 && Markdoc.Tag.isTag(children[0]) && children[0].name === 'figure') return children[0];
        return new Markdoc.Tag('p', {}, children);
      },
    },
    image: {
      attributes: { src: { type: String }, alt: { type: String }, title: { type: String } },
      transform(node) {
        const { src, alt = '', title } = node.attributes;
        const img = new Markdoc.Tag('img', { src, alt, loading: 'lazy', decoding: 'async' });
        return new Markdoc.Tag('figure', {}, title ? [img, new Markdoc.Tag('figcaption', {}, [title])] : [img]);
      },
    },
    link: {
      attributes: { href: { type: String }, title: { type: String } },
      transform(node, config) {
        const { href, title } = node.attributes;
        const attributes = { href, ...(title ? { title } : {}), ...(isExternal(href) ? { target: '_blank', rel: 'noreferrer' } : {}) };
        return new Markdoc.Tag('a', attributes, node.transformChildren(config));
      },
    },
  },
};

function renderMarkdoc(node) {
  return Markdoc.renderers.html(Markdoc.transform(node, markdocConfig));
}

function wordCount(html) {
  return html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
}

async function loadAuthors(reader, root) {
  const entries = await reader.collections.authors.all();
  return new Map(
    entries.map(({ slug, entry }) => [
      slug,
      {
        slug,
        name: entry.name,
        jobTitle: entry.jobTitle,
        image: asset(root, entry.profileImage, `Author ${slug}`),
        bio: entry.bio || '',
        isOrganisation: entry.isOrganisation,
      },
    ]),
  );
}

async function loadBlogs(reader, root, authors) {
  const entries = await reader.collections.blogs.all();
  const blogs = [];
  for (const { slug, entry } of entries) {
    if (entry.status !== 'published') continue;
    if (slug.includes('/')) {
      warn(`Blog "${slug}" has an invalid slug and was skipped.`);
      continue;
    }
    const author = authors.get(entry.author) ?? null;
    if (!author) warn(`Blog "${slug}" points to missing author "${entry.author}".`);
    const banner = asset(root, entry.bannerImage, `Blog ${slug}`);
    const { node } = await entry.content();
    const contentHtml = renderMarkdoc(node);
    blogs.push({
      slug,
      path: `/blog/${slug}/`,
      title: entry.title,
      category: entry.category || 'Leadership article',
      date: entry.publishDate,
      updatedDate: entry.updatedDate || null,
      excerpt: entry.description,
      thumbnail: banner,
      bannerAlt: entry.bannerAlt || '',
      author,
      readingTime: Math.max(2, Math.ceil(wordCount(contentHtml) / 220)),
      contentHtml,
      seo: {
        title: entry.seo.title || entry.title,
        description: entry.seo.description || entry.description,
        image: asset(root, entry.seo.ogImage, `Blog ${slug} social image`) ?? banner,
        canonicalUrl: entry.seo.canonicalUrl || null,
        noindex: entry.seo.noindex,
      },
    });
  }
  return blogs.sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}

const overrideToStatus = {
  auto: null,
  'coming-soon': 'coming-soon',
  'registration-open': 'registration-open',
  'registration-closed': 'registration-closed',
  'sold-out': 'sold-out',
  postponed: 'postponed',
  cancelled: 'cancelled',
};

async function loadEvents(reader, root) {
  const entries = await reader.collections.events.all();
  const events = [];
  for (const { slug, entry } of entries) {
    const { start, end, timezone, cardDate } = entry.dates;
    if (!start || !end) {
      warn(`Event "${slug}" has no start or end date and was skipped.`);
      continue;
    }
    const feature = asset(root, entry.featureImage, `Event ${slug}`);
    events.push({
      slug,
      path: `/events/${slug}/`,
      title: entry.title,
      summary: entry.shortDescription,
      type: entry.series,
      season: entry.season,
      eventCode: entry.eventCode,
      seasonCode: entry.seasonCode,
      format: entry.format,
      startAt: zonedWallTimeToIso(start, timezone),
      endAt: zonedWallTimeToIso(end, timezone),
      timezone,
      cardDate: cardDate || start.slice(0, 10),
      city: entry.location.city,
      venue: entry.location.venue,
      address: entry.location.address,
      country: entry.location.country,
      status: overrideToStatus[entry.statusOverride] ?? null,
      cardCtaLabel: entry.cardCtaLabel,
      hero: entry.hero,
      facts: entry.facts.filter((fact) => fact.label && fact.value),
      quest: entry.quest,
      registration: entry.registration,
      route: { ...entry.route, items: entry.route.items.filter((item) => item.title) },
      included: { ...entry.included, items: entry.included.items.filter(Boolean) },
      featureImage: feature,
      featureImageAlt: entry.featureImageAlt,
      seo: {
        title: entry.seo.title || entry.title,
        description: entry.seo.description || entry.shortDescription,
        image: asset(root, entry.seo.ogImage, `Event ${slug} social image`) ?? feature,
        canonicalUrl: entry.seo.canonicalUrl || null,
        noindex: entry.seo.noindex,
      },
    });
  }
  return events;
}

export async function loadContent(root = repoRoot) {
  const reader = createReader(root, keystaticConfig);
  const authors = await loadAuthors(reader, root);
  return { authors, blogs: await loadBlogs(reader, root, authors), events: await loadEvents(reader, root) };
}

export const { authors, blogs, events } = await loadContent();
