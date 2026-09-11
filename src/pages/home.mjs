import {
  acceleratorSteps,
  caseStudies,
  futureProofingPillars,
  projects,
  stats,
  videos,
} from '../../data/content.mjs';
import {
  finalCta,
  logoStrip,
  projectCard,
  roleCards,
} from '../components.mjs';
import { escapeHtml, link, sectionHeading } from '../templates.mjs';

export function homePage() {
  return `
    <section class="hero home-hero" aria-labelledby="home-title" data-hero-depth>
      <div class="hero-backdrop" aria-hidden="true">
        <picture>
          <source srcset="/images/hero-banner.webp" type="image/webp">
          <img src="/images/hero-banner.jpg" alt="" width="2000" height="1126" fetchpriority="high">
        </picture>
      </div>
      <div class="hero-grid shell">
        <div class="hero-copy">
          <p class="kicker reveal">Lead in the age of AI</p>
          <h1 id="home-title" class="display reveal"><span>Future-proof</span><br>your people.</h1>
          <p class="hero-subhead reveal">Build the people who will build what’s next.</p>
          <p class="hero-lede reveal">Leadapreneur turns managers into AI-powered innovators who build real solutions and create measurable business impact.</p>
          <div class="button-row reveal">
            ${link('/contact/', 'Future-proof your people', 'button button--teal solution-trigger')}
            ${link('/role-quiz/', 'Discover more about me', 'button button--ghost')}
          </div>
        </div>
      </div>
      <ol class="hero-chips shell reveal" aria-label="How the journey works">
        <li class="hero-chip"><span>01</span><b>Discover</b><small>See the opening.</small></li>
        <li class="hero-chip"><span>02</span><b>Build</b><small>Make it real.</small></li>
        <li class="hero-chip"><span>03</span><b>Lead</b><small>Move the system.</small></li>
      </ol>
    </section>

    <section class="trust-section" aria-labelledby="trust-title">
      <div class="shell">
        <p class="trust-title" id="trust-title">Trusted by forward-thinking organisations across Asia</p>
        ${logoStrip()}
      </div>
    </section>

    <section class="section role-section" id="roles" aria-labelledby="roles-title">
      <div class="shell">
        <div class="role-intro">
          ${sectionHeading('Who could you become?', '<span id="roles-title">There’s more to you than your job title.</span>', 'What could those strengths mean for your future?')}
          <div class="role-intro__action">
            ${link('/role-quiz/', 'Show me', 'button button--outline')}
            <p><span aria-hidden="true">✓</span> A few questions. No right or wrong answers.</p>
          </div>
        </div>
        <figure class="role-stage" aria-hidden="true">
          <picture>
            <source srcset="/images/roles-banner.webp" type="image/webp">
            <img src="/images/roles-banner.jpg" alt="" width="1536" height="1024" loading="lazy" decoding="async">
          </picture>
        </figure>
        <div class="role-deck" data-role-carousel>
          ${roleCards({ withArt: false })}
        </div>
        <div class="carousel-controls" data-carousel-controls>
          <button type="button" data-carousel-prev aria-label="Previous role">←</button>
          <p aria-live="polite"><span data-carousel-position>1</span> / 3</p>
          <button type="button" data-carousel-next aria-label="Next role">→</button>
        </div>
      </div>
    </section>

    <section class="section future-section" aria-labelledby="future-title">
      <div class="shell future-layout">
        <div class="future-sticky">
          <p class="kicker">What future-proofing means</p>
          <h2 id="future-title">It isn’t learning about the future. <em>It’s building for it.</em></h2>
          <p>Capability becomes credible when people can use emerging technology to solve a real problem and prove what changed.</p>
        </div>
        <ol class="future-list">
          ${futureProofingPillars
            .map(
              ([title, copy], index) => `<li class="reveal"><span>${String(index + 1).padStart(2, '0')}</span><div><h3>${title}</h3><p>${copy}</p></div></li>`,
            )
            .join('')}
        </ol>
      </div>
    </section>

    <section class="section projects-section" aria-labelledby="projects-title">
      <div class="section-backdrop" aria-hidden="true">
        <picture>
          <source srcset="/images/projects-banner.webp" type="image/webp">
          <img src="/images/projects-banner.jpg" alt="" width="1672" height="941" loading="lazy" decoding="async">
        </picture>
      </div>
      <div class="shell">
        <div class="projects-head">
          ${sectionHeading('Built in the real world', '<span id="projects-title">Real projects. Real impact.</span>', 'Every figure below comes from a live project record.')}
          ${link('/projects/', 'Explore all projects', 'button button--ghost')}
        </div>
        <div class="project-rail">
          ${projects.slice(0, 3).map(projectCard).join('')}
        </div>
      </div>
    </section>

    <section class="section journey-section" aria-labelledby="journey-title">
      <div class="shell">
        <div class="journey-head">
          ${sectionHeading('AI × Talent Accelerator', '<span id="journey-title">From manager to leadapreneur.</span>', 'Capability, execution, value, then the next level of leadership.')}
          ${link('/ai-x-talent-accelerator/', 'Explore', 'button button--outline')}
        </div>
        <ol class="journey-track">
          ${acceleratorSteps
            .map(
              (step) => `<li class="journey-step reveal"><span class="journey-step__number">${step.number}</span><p>${step.label}</p><h3>${step.title}</h3><p>${step.copy}</p></li>`,
            )
            .join('')}
        </ol>
      </div>
    </section>

    <section class="section videos-section" aria-labelledby="videos-title">
      <div class="shell">
        <div class="videos-head">
          ${sectionHeading('In the room', '<span id="videos-title">See the work come alive.</span>', 'Programme moments, celebrations and the people who lived them.')}
        </div>
        <div class="video-collage">
          ${videos
            .map(
              ({ id, title, start = 0, list = '' }, index) => `<a class="video-tile${index === 0 ? ' video-tile--feature' : ''}" href="https://www.youtube.com/watch?v=${id}${start ? `&t=${start}s` : ''}${list ? `&list=${list}` : ''}" target="_blank" rel="noopener" data-video-id="${id}" data-video-start="${start}" data-video-list="${list}" data-video-title="${escapeHtml(title)}" aria-label="Play: ${escapeHtml(title)}">
            <img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" width="480" height="360" loading="lazy" decoding="async">
            <span class="video-tile__play" aria-hidden="true"></span>
            <span class="video-tile__meta"><b>${escapeHtml(title)}</b></span>
          </a>`,
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="impact-section" aria-labelledby="impact-title">
      <div class="shell">
        <p class="kicker">The record</p>
        <h2 id="impact-title">Impact at the scale of a system.</h2>
        <dl class="impact-grid">
          ${stats.map(([value, label]) => `<div class="reveal"><dt>${label}</dt><dd>${value}</dd></div>`).join('')}
        </dl>
      </div>
    </section>

    <section class="section stories-section" aria-labelledby="stories-title">
      <div class="shell stories-layout">
        <div class="stories-proof">
          <p class="kicker">Client story</p>
          <figure class="stories-logo"><img src="${caseStudies[0].logo}" alt="${caseStudies[0].name}" loading="lazy"></figure>
          <h2 id="stories-title">${caseStudies[0].title}</h2>
          <p>${caseStudies[0].story}</p>
          <dl class="stories-metrics">
            ${caseStudies[0].metrics
              .map((metric) => {
                const [value, ...rest] = metric.split(' ');
                return `<div><dt>${value}</dt><dd>${rest.join(' ')}</dd></div>`;
              })
              .join('')}
          </dl>
          ${link('/case-studies/', 'Read the evidence', 'text-link')}
        </div>
        <figure class="testimonial-stage reveal">
          <blockquote>With the world changing so fast, the imperative is to future-proof the business. But before you do that, you must future-proof your people.</blockquote>
          <figcaption><b>Nisha Padbidri</b><span>APAC Head, Human Resources · Citi</span></figcaption>
        </figure>
      </div>
    </section>

    <section class="games-section" id="greatness-games" aria-labelledby="games-title">
      <div class="shell">
        <div class="games-layout">
          <div class="games-copy">
            <p class="kicker kicker--light">Enter game mode</p>
            <h2 id="games-title">AI adoption shouldn’t feel like another training programme.</h2>
            <p class="games-punch">Make it a game worth winning.</p>
            <p>The Greatness Games bring the performance energy of professional sport to AI adoption.</p>
            ${link('/ai-x-talent-accelerator/#greatness-games', 'How the Games work', 'button button--cyan')}
          </div>
          <div class="scoreboard reveal" aria-label="Four outcomes of the Greatness Games">
            <div class="scoreboard__top"><span>GREATNESS GAMES</span><span>LIVE SYSTEM</span></div>
            ${[
              ['01', 'Adoption', 'People choose to step forward.'],
              ['02', 'Engagement', 'Participants actively build and test.'],
              ['03', 'Outcomes', 'Projects deliver tangible business results.'],
              ['04', 'Sustainability', 'Innovators return to coach and lead.'],
            ]
              .map(([number, title, copy]) => `<div class="scoreboard__row"><span>${number}</span><b>${title}</b><p>${copy}</p><i aria-hidden="true"></i></div>`)
              .join('')}
          </div>
        </div>

        <div class="next-steps" aria-labelledby="next-steps-title">
          <h3 id="next-steps-title" class="next-steps__title">Three ways in.</h3>
          <ol class="next-steps__grid">
            ${[
              ['For you', 'Find your role.', 'Three honest questions. One clear archetype. No personal details.', '/role-quiz/', 'Take the role quiz'],
              ['For your organisation', 'Measure future readiness.', 'See where capability is strong and where the organisation needs to move next.', '/future-proof-assessment/', 'Explore the assessment'],
              ['Next season', 'Join us in the room.', 'The next public event is being prepared. Explore the latest season while it takes shape.', '/events/', 'See events and past seasons'],
            ]
              .map(
                ([label, title, copy, href, cta], index) => `<li class="next-step reveal" style="--delay:${index * 70}ms">
              <p class="next-step__label"><span aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>${label}</p>
              <h4>${title}</h4>
              <p>${copy}</p>
              ${link(href, cta, 'text-link text-link--light')}
            </li>`,
              )
              .join('')}
          </ol>
        </div>
      </div>
    </section>

    ${finalCta()}`;
}
