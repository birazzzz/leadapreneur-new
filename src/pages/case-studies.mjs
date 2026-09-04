import { caseStudies } from '../../data/content.mjs';
import { finalCta } from '../components.mjs';
import { breadcrumb, link, pageHeroArt, sectionHeading } from '../templates.mjs';

const expandedStories = {
  dbs: {
    challenge: 'Build innovation capability across markets while giving high-potential people meaningful work that could prove their readiness.',
    intervention: 'Five seasons of Warriors of WOW placed 368 employees into structured innovation challenges across Singapore, Indonesia, Taiwan, India, Hong Kong and China.',
    outcome: '180 deployed projects, SGD 79,039,421 in innovation valuation, a 2,665% average ROI and a 46% average promotion rate after the programme.',
  },
  uob: {
    challenge: 'Create a culture where employees could identify business challenges, design strong solutions and confidently win support.',
    intervention: 'A second 12-week Innovation Accelerator brought 29 leadapreneurs together across retail banking, treasury, compliance, sales and HR.',
    outcome: 'RM 8,280,374 in total innovation value and 307% growth from cycle one.',
  },
  ocbc: {
    challenge: 'Help employees from different functions build, test and validate MVPs around real banking problems.',
    intervention: 'The 16-week OCBC Rebel Accelerator guided 27 employees through Challenge 2: DEPLOY.',
    outcome: 'RM 5,170,591 in total innovation value, including a process compressed from three weeks to two days.',
  },
};

export function caseStudiesPage() {
  return `
    <section class="page-hero page-hero--cases">
      ${pageHeroArt('cases')}
      <div class="shell">
        ${breadcrumb([{ name: 'Home', path: '/' }, { name: 'Case studies', path: '/case-studies/' }])}
        <div class="page-hero__grid"><div><p class="kicker">Client results</p><h1>What daring to be great looks like.</h1></div><p class="page-hero__lede">Successive seasons, deployed projects and business value—not a wall of logos or a list of attendance figures.</p></div>
      </div>
    </section>
    <section class="section case-library" aria-labelledby="case-library-title">
      <div class="shell">
        ${sectionHeading('Selected evidence', '<span id="case-library-title">The story behind the number.</span>', 'Each case moves from organisational challenge to intervention and outcome.')}
        <div class="case-list">
          ${caseStudies.map((study, index) => {
            const story = expandedStories[study.id];
            return `<article class="case-story reveal">
              <div class="case-story__index">${String(index + 1).padStart(2, '0')}</div>
              <div class="case-story__head"><p>${study.eyebrow}</p><h2>${study.name}</h2><strong>${study.title}</strong></div>
              <dl class="case-story__metrics">${study.metrics.map((metric) => `<div><dt>${metric}</dt></div>`).join('')}</dl>
              <div class="case-story__narrative"><div><span>Challenge</span><p>${story.challenge}</p></div><div><span>Intervention</span><p>${story.intervention}</p></div><div><span>Outcome</span><p>${story.outcome}</p></div></div>
            </article>`;
          }).join('')}
        </div>
      </div>
    </section>
    <section class="section quote-section">
      <div class="shell quote-section__inner"><blockquote>“With this forum, they are being recognised for building innovation that matters. Many of these processes can be replicated and scaled. Let us build a better world together.”</blockquote><p><b>Dato Ong Eng Bin</b><span>CEO · OCBC</span></p>${link('/contact/', 'Build your first season', 'button button--teal')}</div>
    </section>
    ${finalCta()}`;
}
