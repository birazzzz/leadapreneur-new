import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { blogs, events, loadContent } from '../lib/cms.mjs';
import { getEventState, getEventStatusLabel, partitionEvents } from '../lib/events.mjs';
import { zonedWallTimeToIso } from '../lib/time.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

function fixture(files) {
  const directory = mkdtempSync(join(tmpdir(), 'leadapreneur-cms-'));
  for (const [path, contents] of Object.entries(files)) {
    mkdirSync(dirname(join(directory, path)), { recursive: true });
    writeFileSync(join(directory, path), contents);
  }
  return directory;
}

const post = (status, extra = '') => `---
title: A ${status} post
status: ${status}
publishDate: 2026-09-01
description: Short description.
author: ${extra.includes('author:') ? '' : 'jane-doe'}
bannerImage: /uploads/blogs/missing/bannerImage.webp
${extra}
seo:
  description: Meta description.
---

Opening paragraph.

![Team at work](/uploads/blogs/example/photo.webp "Day one of the workshop")

## A heading
`;

test('venue wall time becomes an ISO timestamp with the right offset', () => {
  assert.equal(zonedWallTimeToIso('2026-06-22T09:00', 'Asia/Kuala_Lumpur'), '2026-06-22T09:00:00+08:00');
  assert.equal(zonedWallTimeToIso('2026-07-01T09:00', 'Europe/London'), '2026-07-01T09:00:00+01:00');
  assert.equal(zonedWallTimeToIso('2026-01-15T09:00', 'Europe/London'), '2026-01-15T09:00:00+00:00');
});

test('drafts never leave the content layer and incomplete optional data does not crash', async () => {
  const directory = fixture({
    'content/authors/jane-doe.yaml': 'name: Jane Doe\njobTitle: Coach\n',
    'content/blogs/draft-post.mdoc': post('draft'),
    'content/blogs/published-post.mdoc': post('published'),
    'content/events/online-session.yaml': [
      'title: Online session',
      'series: Open Day',
      'dates:',
      "  start: '2030-01-10T10:00'",
      "  end: '2030-01-10T12:00'",
      '  timezone: UTC',
      'location:',
      '  city: Online',
      '  venue: Zoom',
      'shortDescription: A short session.',
      'hero:',
      '  headline: Join us.',
      'seo:',
      '  description: Online session.',
    ].join('\n'),
  });
  try {
    const content = await loadContent(directory);
    assert.deepEqual(content.blogs.map((item) => item.slug), ['published-post']);
    const [published] = content.blogs;
    assert.equal(published.author.name, 'Jane Doe');
    assert.equal(published.thumbnail, null, 'a missing banner file is skipped, not fatal');
    assert.equal(published.category, 'Leadership article');
    assert.match(published.contentHtml, /<figure><img src="\/uploads\/blogs\/example\/photo.webp" alt="Team at work"[^>]*><figcaption>Day one of the workshop<\/figcaption><\/figure>/);
    assert.doesNotMatch(published.contentHtml, /<p><figure>/);

    const [event] = content.events;
    assert.equal(event.route.items.length, 0);
    assert.equal(event.included.items.length, 0);
    assert.equal(event.featureImage, null);
    assert.equal(event.startAt, '2030-01-10T10:00:00+00:00');
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});

test('events move between upcoming, current and past from their real dates', () => {
  const event = { startAt: '2030-01-10T10:00:00+08:00', endAt: '2030-01-12T17:00:00+08:00', status: 'registration-open' };
  assert.equal(getEventStatusLabel(event, new Date('2030-01-01T00:00:00+08:00')), 'Registration open');
  assert.equal(getEventState(event, new Date('2030-01-11T12:00:00+08:00')), 'live');
  assert.deepEqual(partitionEvents([event], new Date('2030-01-11T12:00:00+08:00')).upcoming, [event], 'a running event stays in the upcoming list');
  assert.equal(getEventStatusLabel(event, new Date('2030-01-13T00:00:00+08:00')), 'Past event');
});

// The 17 articles crawled from the Framer site. Posts the team adds later are not held to these checks.
const migratedSlugs = [
  'ai-in-the-workplace-leadapreneur-gamified-programs',
  'bringing-meaning-to-cambodia-one-lifepath-at-a-time',
  'embracing-change-navigating-the-emotional-journey-of-innovation-in-the-age-of-purpose',
  'from-resistance-to-renewal-wendy’s-leadership-journey-through-the-toshiba-teka-greatness-games',
  'how-to-build-great-leaders-why-future-proofing-talent-starts-with-who-your-people-become-not-what-they-learn',
  'making-change-viable-the-leadapreneur-way-sarah-margaret-peter-victorian',
  'navigating-the-impact-of-ai-on-jobs-and-leadership-models-a-systemic-approach-to-embracing-change',
  'the-challenge-of-innovation',
  'the-cost-of-complacency-in-the-age-of-ai-and-why-future-proofing-your-talent-matters-more-than-ever',
  'the-difference-between-a-complainer-and-a-leadapreneur-is-about-three-hours-on-a-tuesday-night',
  'the-great-acceleration-a-strategic-briefing-for-ceos-in-the-age-of-ai',
  'the-real-story-in-the-2028-intelligence-crisis-report-leadership-ai-impowerment-futureproof',
  'this-leadapreneur-chooses-to-get-chummy-with-change-ivan-lee-cheng-tat',
  'this-warrior-finds-his-reward-through-leadapreneur-danny-chia-kai-yan',
  'what-we-witnessed-at-leadapreneur-open-day-2025-a-real-look-at-future-proofing-your-talent-in-the-age-of-ai',
  'wu-wei-ing-her-way-through-the-leadapreneurship-journey-sakinah-ghazali',
  'you-won-t-hear-from-me-for-a-while.-here-s-why',
];

test('every migrated article is published with a local banner and no Framer-hosted images', () => {
  for (const slug of migratedSlugs) {
    const blog = blogs.find((item) => item.slug === slug);
    assert.ok(blog, `${slug} is published`);
    assert.ok(blog.thumbnail && existsSync(join(root, 'public', blog.thumbnail)), blog.slug);
    assert.ok(blog.author, `${blog.slug} has an author`);
    assert.ok(blog.seo.description.length > 50, `${blog.slug} kept its live meta description`);
    const html = readFileSync(join(dist, 'blog', blog.slug, 'index.html'), 'utf8');
    assert.doesNotMatch(html, /framerusercontent\.com/, blog.slug);
    for (const [, src] of blog.contentHtml.matchAll(/<img src="([^"]+)"/g)) {
      assert.ok(existsSync(join(root, 'public', decodeURI(src))), `${blog.slug}: ${src}`);
    }
  }
});

test('article pages carry full social metadata and BlogPosting structured data', () => {
  const blog = blogs.find((item) => item.slug === 'you-won-t-hear-from-me-for-a-while.-here-s-why');
  const html = readFileSync(join(dist, 'blog', blog.slug, 'index.html'), 'utf8');
  assert.match(html, /<meta property="og:type" content="article">/);
  assert.match(html, /<meta property="og:image" content="https:\/\/www\.leadapreneur\.com\/uploads\/blogs\//);
  assert.match(html, /<meta property="article:published_time" content="2026-06-10">/);
  assert.match(html, /<meta name="twitter:card" content="summary_large_image">/);
  assert.match(html, /<p class="kicker">COO Notes<\/p>/);
  assert.match(html, /class="article-author"[\s\S]*Hanaa Maysoon[\s\S]*COO/);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
  const article = schemas.find((schema) => schema['@type'] === 'BlogPosting');
  assert.equal(article.author.name, 'Hanaa Maysoon');
  assert.equal(article.datePublished, '2026-06-10');
  assert.ok(article.image[0].startsWith('https://www.leadapreneur.com/uploads/blogs/'));
});

test('the Greatness Games event page is rendered from CMS fields', () => {
  assert.ok(events.some((event) => event.slug === 'greatness-games-kl-season-1'));
  const html = readFileSync(join(dist, 'events', 'greatness-games-kl-season-1', 'index.html'), 'utf8');
  assert.match(html, /Past event · Season 1/);
  assert.match(html, /<h1>Learn to lead<br>in the age of AI\.<\/h1>/);
  assert.match(html, /<dt>Seats<\/dt><dd>25<\/dd>/);
  assert.equal((html.match(/<li><span>0\d<\/span>/g) || []).length, 5);
  assert.equal((html.match(/class="included-grid"/g) || []).length, 1);
  assert.match(html, /What was included/);
  const schema = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]))
    .find((item) => item['@type'] === 'Event');
  assert.equal(schema.startDate, '2026-06-22T09:00:00+08:00');
  assert.equal(schema.eventStatus, 'https://schema.org/EventScheduled');
  assert.equal(schema.offers, undefined, 'no invented pricing');

  const listing = readFileSync(join(dist, 'events', 'index.html'), 'utf8');
  assert.match(listing, /<span>22<\/span><b>JUN<\/b><small>2026<\/small>/);
  assert.match(listing, /View event recap/);
});

test('the admin UI is not part of the public site', () => {
  assert.equal(existsSync(join(dist, 'keystatic')), false);
  for (const file of ['index.html', 'insights/index.html', 'events/index.html']) {
    assert.doesNotMatch(readFileSync(join(dist, file), 'utf8'), /keystatic/i, file);
  }
});
