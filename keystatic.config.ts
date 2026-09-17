import { collection, config, fields } from '@keystatic/core';
import { createElement } from 'react';

/**
 * Keystatic schema for the Leadapreneur CMS.
 *
 * This file is the single source of truth for the content model. It is used by
 * the admin app (admin/) to render the editor and by the static site build
 * (lib/cms.mjs) to read and validate the files in content/.
 *
 * Slugs are file names. Once a post or event is published, its slug is its
 * public URL, so the editor is warned before changing one.
 */

const repo = process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO || 'birazzzz/leadapreneur-new';
const [owner, name] = repo.split('/');

// Local mode while developing, GitHub mode everywhere else. Set
// NEXT_PUBLIC_KEYSTATIC_STORAGE=github locally to create the GitHub App. The
// static site build only reads files from disk, so this never affects it.
const storageMode =
  process.env.NEXT_PUBLIC_KEYSTATIC_STORAGE || (process.env.NODE_ENV === 'development' ? 'local' : 'github');
const storage =
  storageMode === 'local' ? ({ kind: 'local' } as const) : ({ kind: 'github', repo: { owner, name } } as const);

const slugHelp =
  'This becomes the web address. Changing it after publishing breaks existing links and search rankings.';

const seoTitleHelp = 'Shown in Google and browser tabs. Aim for 50–60 characters. Leave empty to use the title.';
const metaDescriptionHelp = 'Shown under the title in Google. Aim for 140–160 characters.';

const imageHelp = 'Use a compressed WebP, AVIF, PNG or JPEG, ideally under 500 KB and no wider than 2000 px.';

function seoFields({ imageDirectory, imagePublicPath, imageFallback }: { imageDirectory: string; imagePublicPath: string; imageFallback: string }) {
  return fields.object(
    {
      title: fields.text({ label: 'SEO title', description: seoTitleHelp, validation: { length: { max: 70 } } }),
      description: fields.text({
        label: 'Meta description',
        description: metaDescriptionHelp,
        multiline: true,
        validation: { length: { min: 1, max: 200 } },
      }),
      ogImage: fields.image({
        label: 'Social sharing image (optional)',
        description: `Used when the page is shared on LinkedIn, WhatsApp and similar. Leave empty to use the ${imageFallback}. ${imageHelp}`,
        directory: imageDirectory,
        publicPath: imagePublicPath,
      }),
      canonicalUrl: fields.url({
        label: 'Canonical URL override (advanced)',
        description: 'Only fill this if the same article officially lives on another website. Leave empty in almost every case.',
      }),
      noindex: fields.checkbox({
        label: 'Hide from search engines (advanced)',
        description: 'Keeps the page live but asks Google not to list it. It is also left out of the sitemap.',
        defaultValue: false,
      }),
    },
    { label: 'SEO' },
  );
}

export default config({
  storage,
  ui: {
    brand: {
      name: 'Leadapreneur',
      // The company mark, served by the admin app. Written without JSX so the site build can load this file.
      mark: ({ colorScheme }) =>
        createElement('img', {
          src: colorScheme === 'dark' ? '/brand/mark-dark.svg' : '/brand/mark-light.svg',
          alt: '',
          width: 26,
          height: 26,
        }),
    },
    navigation: {
      Content: ['blogs', 'events'],
      People: ['authors'],
    },
  },
  collections: {
    authors: collection({
      label: 'Authors',
      slugField: 'name',
      path: 'content/authors/*',
      format: 'yaml',
      columns: ['jobTitle'],
      schema: {
        name: fields.slug({
          name: { label: 'Name', validation: { isRequired: true } },
          slug: {
            label: 'Author ID',
            description: 'Internal reference used by blog posts. Keep it the same even if the name or job title changes.',
          },
        }),
        jobTitle: fields.text({ label: 'Job title', validation: { isRequired: true } }),
        profileImage: fields.image({
          label: 'Profile image',
          description: `A square portrait works best. ${imageHelp}`,
          directory: 'public/uploads/authors',
          publicPath: '/uploads/authors/',
        }),
        bio: fields.text({ label: 'Short bio (optional)', multiline: true }),
        isOrganisation: fields.checkbox({
          label: 'This is the company, not a person',
          description: 'Tick for the general “Leadapreneur” byline used on posts without a named writer.',
          defaultValue: false,
        }),
      },
    }),

    blogs: collection({
      label: 'Blogs',
      slugField: 'title',
      path: 'content/blogs/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      columns: ['status', 'publishDate'],
      schema: {
        title: fields.slug({
          name: { label: 'Blog title', validation: { isRequired: true } },
          slug: { label: 'Slug (web address)', description: slugHelp },
        }),
        status: fields.select({
          label: 'Status',
          description: 'Drafts are saved but never appear on the website.',
          options: [
            { label: 'Draft', value: 'draft' },
            { label: 'Published', value: 'published' },
          ],
          defaultValue: 'draft',
        }),
        publishDate: fields.date({ label: 'Publish date', validation: { isRequired: true }, defaultValue: { kind: 'today' } }),
        updatedDate: fields.date({ label: 'Last updated date (optional)', description: 'Set this when you make a meaningful change to a published post.' }),
        description: fields.text({
          label: 'Short description',
          description: 'One or two sentences shown on blog cards and under the article title.',
          multiline: true,
          validation: { length: { min: 1, max: 320 } },
        }),
        author: fields.relationship({
          label: 'Author',
          description: 'Name, job title and photo come from the author profile.',
          collection: 'authors',
          validation: { isRequired: true },
        }),
        category: fields.text({
          label: 'Category / series (optional)',
          description: 'For example COO Notes, News or Insights. Leave empty to show “Leadership article”.',
        }),
        bannerImage: fields.image({
          label: 'Banner image',
          description: `Shown at the top of the article and on blog cards. A 16:9 image around 1600 px wide works best. ${imageHelp}`,
          directory: 'public/uploads/blogs',
          publicPath: '/uploads/blogs/',
          validation: { isRequired: true },
        }),
        bannerAlt: fields.text({
          label: 'Banner image description (alt text)',
          description: 'Describe the image for people using screen readers. Leave empty only if the image is purely decorative.',
        }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            heading: [2, 3],
            bold: true,
            italic: true,
            strikethrough: false,
            code: false,
            codeBlock: false,
            table: false,
            link: true,
            blockquote: true,
            orderedList: true,
            unorderedList: true,
            divider: true,
            image: {
              directory: 'public/uploads/blogs',
              publicPath: '/uploads/blogs/',
              schema: {
                alt: fields.text({ label: 'Image description (alt text)' }),
                title: fields.text({ label: 'Caption (optional)' }),
              },
            },
          },
        }),
        seo: seoFields({
          imageDirectory: 'public/uploads/blogs',
          imagePublicPath: '/uploads/blogs/',
          imageFallback: 'banner image',
        }),
      },
    }),

    events: collection({
      label: 'Events',
      slugField: 'title',
      path: 'content/events/*',
      format: 'yaml',
      columns: ['series', 'season'],
      schema: {
        title: fields.slug({
          name: {
            label: 'Event title',
            description: 'Shown on event cards, in the breadcrumb and as the browser tab title.',
            validation: { isRequired: true },
          },
          slug: { label: 'Slug (web address)', description: slugHelp },
        }),
        series: fields.text({
          label: 'Programme / series',
          description: 'For example Greatness Games. Shown above the title on the event card.',
          validation: { isRequired: true },
        }),
        season: fields.text({ label: 'Season label', description: 'For example Season 1.' }),
        eventCode: fields.text({
          label: 'Ticket code (optional)',
          description: 'Short code printed on the right edge of the event card, for example GGKL. Leave empty to hide it.',
          validation: { length: { max: 6 } },
        }),
        seasonCode: fields.text({
          label: 'Ticket season code (optional)',
          description: 'Printed under the ticket code, for example S01.',
          validation: { length: { max: 4 } },
        }),
        dates: fields.object(
          {
            start: fields.datetime({
              label: 'Starts',
              description: 'Enter the local time at the venue.',
              validation: { isRequired: true },
            }),
            end: fields.datetime({
              label: 'Ends',
              description: 'Enter the local time at the venue. The event becomes a past event automatically after this.',
              validation: { isRequired: true },
            }),
            timezone: fields.select({
              label: 'Timezone',
              options: [
                { label: 'Kuala Lumpur / Singapore (UTC+8)', value: 'Asia/Kuala_Lumpur' },
                { label: 'Jakarta / Phnom Penh / Bangkok (UTC+7)', value: 'Asia/Jakarta' },
                { label: 'Hong Kong / Manila (UTC+8)', value: 'Asia/Hong_Kong' },
                { label: 'London (UTC+0 / +1)', value: 'Europe/London' },
                { label: 'Online (UTC)', value: 'UTC' },
              ],
              defaultValue: 'Asia/Kuala_Lumpur',
            }),
            cardDate: fields.date({
              label: 'Date shown on the event card (optional)',
              description: 'Leave empty to use the start date.',
            }),
          },
          { label: 'Event dates' },
        ),
        format: fields.select({
          label: 'Format',
          options: [
            { label: 'In person', value: 'in-person' },
            { label: 'Online', value: 'online' },
            { label: 'Hybrid', value: 'hybrid' },
          ],
          defaultValue: 'in-person',
        }),
        location: fields.object(
          {
            city: fields.text({ label: 'City', validation: { isRequired: true } }),
            venue: fields.text({ label: 'Venue', validation: { isRequired: true } }),
            address: fields.text({ label: 'Street address (optional)', multiline: true }),
            country: fields.text({ label: 'Country (optional)', description: 'For example Malaysia.' }),
          },
          { label: 'Location' },
        ),
        shortDescription: fields.text({
          label: 'Short description',
          description: 'One or two sentences for the event card.',
          multiline: true,
          validation: { length: { min: 1, max: 320 } },
        }),
        statusOverride: fields.select({
          label: 'Status label override (optional)',
          description:
            'Upcoming, happening now and past are worked out from the dates automatically. Only pick something here for a special case.',
          options: [
            { label: 'Automatic from dates', value: 'auto' },
            { label: 'Coming soon', value: 'coming-soon' },
            { label: 'Registration open', value: 'registration-open' },
            { label: 'Registration closed', value: 'registration-closed' },
            { label: 'Sold out', value: 'sold-out' },
            { label: 'Postponed', value: 'postponed' },
            { label: 'Cancelled', value: 'cancelled' },
          ],
          defaultValue: 'auto',
        }),
        cardCtaLabel: fields.text({
          label: 'Event card link text (optional)',
          description: 'Leave empty for “View event” before the event and “View event recap” after it.',
        }),
        hero: fields.object(
          {
            eyebrow: fields.text({
              label: 'Eyebrow (optional)',
              description: 'Small label above the headline. Leave empty to show the status and season, for example “Past event · Season 1”.',
            }),
            headline: fields.text({
              label: 'Headline',
              description: 'Press Enter to force a line break.',
              multiline: true,
              validation: { isRequired: true },
            }),
            description: fields.text({
              label: 'Description',
              description: 'Leave empty to reuse the short description.',
              multiline: true,
            }),
          },
          { label: 'Hero' },
        ),
        facts: fields.array(
          fields.object({
            label: fields.text({ label: 'Label', description: 'For example Kickoff, Venue or Seats.', validation: { isRequired: true } }),
            value: fields.text({ label: 'Value', validation: { isRequired: true } }),
          }),
          {
            label: 'Event facts',
            description: 'Key facts shown beside the headline.',
            itemLabel: (props) => `${props.fields.label.value || 'Fact'}: ${props.fields.value.value}`,
          },
        ),
        quest: fields.object(
          {
            eyebrow: fields.text({ label: 'Section eyebrow', defaultValue: 'The quest' }),
            heading: fields.text({ label: 'Section heading' }),
            description: fields.text({ label: 'Section description', multiline: true }),
          },
          { label: 'Quest section', description: 'Leave the heading empty to hide this section.' },
        ),
        registration: fields.object(
          {
            state: fields.text({
              label: 'Registration state',
              description: 'Small label, for example Registration open or Registration closed.',
            }),
            heading: fields.text({ label: 'Panel heading', description: 'For example Reserve your place.' }),
            description: fields.text({ label: 'Panel description', multiline: true }),
            ctaLabel: fields.text({ label: 'Button text', description: 'For example Register now or See all events.' }),
            ctaUrl: fields.text({
              label: 'Button link',
              description: 'A full registration link (https://…) or a page on this site such as /events/.',
            }),
          },
          { label: 'Registration panel', description: 'Shown beside the quest section.' },
        ),
        route: fields.object(
          {
            eyebrow: fields.text({ label: 'Section eyebrow', defaultValue: 'The route' }),
            heading: fields.text({ label: 'Section heading' }),
            items: fields.array(
              fields.object({
                date: fields.text({ label: 'Date label', description: 'For example 22 June or 22–30 June.' }),
                title: fields.text({ label: 'Title', validation: { isRequired: true } }),
                description: fields.text({ label: 'Description', multiline: true }),
              }),
              {
                label: 'Route items',
                description: 'Numbers are added automatically in this order. Drag to reorder.',
                itemLabel: (props) => [props.fields.date.value, props.fields.title.value].filter(Boolean).join(' · ') || 'Route item',
              },
            ),
          },
          { label: 'Route / timeline', description: 'Leave the list empty to hide this section.' },
        ),
        included: fields.object(
          {
            eyebrow: fields.text({ label: 'Section eyebrow (optional)', description: 'Leave empty for “What’s included” or “What was included”.' }),
            heading: fields.text({ label: 'Section heading' }),
            items: fields.array(fields.text({ label: 'Item', validation: { isRequired: true } }), {
              label: 'Included items',
              itemLabel: (props) => props.value || 'Item',
            }),
          },
          { label: 'What’s included', description: 'Leave the list empty to hide this section.' },
        ),
        featureImage: fields.image({
          label: 'Feature image (optional)',
          description: `Used for search results and social sharing. ${imageHelp}`,
          directory: 'public/uploads/events',
          publicPath: '/uploads/events/',
        }),
        featureImageAlt: fields.text({ label: 'Feature image description (alt text)' }),
        seo: seoFields({
          imageDirectory: 'public/uploads/events',
          imagePublicPath: '/uploads/events/',
          imageFallback: 'feature image',
        }),
      },
    }),
  },
});
