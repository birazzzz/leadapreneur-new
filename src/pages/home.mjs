import {
  acceleratorSteps,
  caseStudies,
  events,
  futureProofingPillars,
  projects,
  site,
  stats,
} from '../../data/content.mjs';
import {
  emptyEvents,
  featuredInsights,
  finalCta,
  logoStrip,
  projectCard,
  roleCards,
} from '../components.mjs';
import { arrow, link, sectionHeading } from '../templates.mjs';

export function homePage() {
  return `
    <section class="hero home-hero" aria-labelledby="home-title">
      <div class="hero-grid shell">
        <div class="hero-copy">
          <p class="kicker reveal">Lead in the age of AI</p>
          <h1 id="home-title" class="display reveal"><span>Future-proof</span><br>your people.</h1>
          <p class="hero-subhead reveal">Build the people who will build what’s next.</p>
          <p class="hero-lede reveal">Leadapreneur turns managers into AI-powered innovators who build real solutions and create measurable business impact.</p>
          <div class="button-row reveal">
            ${link('/contact/', 'Future-proof your people', 'button button--teal solution-trigger')}
            ${link('/role-quiz/', 'Find your AI role', 'button button--ghost')}
          </div>
          <div class="hero-proof reveal" aria-label="Leadapreneur impact at a glance">
            <span><b>20 years</b> building innovators</span>
            <span><b>USD 120M+</b> business impact</span>
          </div>
        </div>
        <div class="hero-composition reveal" data-hero-depth>
          <figure class="hero-image">
            <img src="/images/quiz-banner.jpeg" alt="Three AI role archetypes exploring, building and leading" width="1600" height="900" fetchpriority="high">
          </figure>
          <div class="hero-chip hero-chip--one"><span>01</span><b>Discover</b><small>See the opening.</small></div>
          <div class="hero-chip hero-chip--two"><span>02</span><b>Build</b><small>Make it real.</small></div>
          <div class="hero-chip hero-chip--three"><span>03</span><b>Lead</b><small>Move the system.</small></div>
          <div class="hero-sketch" aria-hidden="true">
            <svg viewBox="0 0 320 250" role="presentation">
              <path class="hero-sketch__echo" d="M20 218c48-5 37-61 88-56 47 5 38-57 90-54 45 3 46-47 94-76"/>
              <path class="hero-sketch__route" d="M17 207c48-5 37-61 88-56 47 5 38-57 90-54 45 3 46-47 94-76"/>
              <path class="hero-sketch__route hero-sketch__arrow" d="m257 18 38-4-7 38"/>
              <path class="hero-sketch__spark" d="m62 116 8-17 8 17 17 8-17 8-8 17-8-17-17-8Z"/>
              <circle class="hero-sketch__dot hero-sketch__dot--one" cx="105" cy="151" r="8"/>
              <circle class="hero-sketch__dot hero-sketch__dot--two" cx="196" cy="97" r="12"/>
              <circle class="hero-sketch__dot hero-sketch__dot--three" cx="248" cy="54" r="6"/>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <section class="section role-section" id="roles" aria-labelledby="roles-title">
      <div class="shell">
        <div class="role-intro">
          ${sectionHeading('Who can I become?', '<span id="roles-title">Which role will you play in the age of AI?</span>', 'We all lead differently. Discover the role that matches how you think, build and create change.')}
          <div class="role-intro__action">
            ${link('/role-quiz/', 'Take the 2-minute role quiz', 'button button--cyan')}
            <p><span aria-hidden="true">✓</span> No sign-up. No email. Just your result.</p>
          </div>
        </div>
        <div class="role-deck" data-role-carousel>
          ${roleCards()}
        </div>
        <div class="carousel-controls" data-carousel-controls>
          <button type="button" data-carousel-prev aria-label="Previous role">←</button>
          <p aria-live="polite"><span data-carousel-position>1</span> / 3</p>
          <button type="button" data-carousel-next aria-label="Next role">→</button>
        </div>
      </div>
    </section>

    <section class="trust-section" aria-labelledby="trust-title">
      <div class="shell">
        <p class="trust-title" id="trust-title">Trusted by forward-thinking organisations across Asia</p>
        ${logoStrip()}
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

    <section class="section journey-section" aria-labelledby="journey-title">
      <div class="shell">
        <div class="journey-head">
          ${sectionHeading('AI × Talent Accelerator', '<span id="journey-title">From manager to leadapreneur.</span>', 'A working journey from capability to execution, value and the next level of leadership.')}
          ${link('/ai-x-talent-accelerator/', 'Explore the complete accelerator', 'text-link')}
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

    <section class="section projects-section" aria-labelledby="projects-title">
      <div class="shell">
        <div class="projects-head">
          ${sectionHeading('Built in the real world', '<span id="projects-title">Real projects. Real impact.</span>', 'Leadapreneurs work on live business problems. Every figure below comes from a current Leadapreneur project record.')}
          ${link('/projects/', 'Explore all projects', 'button button--outline')}
        </div>
        <div class="project-rail">
          ${projects.slice(0, 3).map(projectCard).join('')}
        </div>
      </div>
    </section>

    <section class="games-section" id="greatness-games" aria-labelledby="games-title">
      <div class="shell games-layout">
        <div class="games-copy">
          <p class="kicker kicker--light">Enter game mode</p>
          <h2 id="games-title">AI adoption shouldn’t feel like another training programme.</h2>
          <p class="games-punch">Make it a game worth winning.</p>
          <p>The Greatness Games bring the performance energy of professional sport to AI adoption. People step forward, experiment, build real projects and return stronger next season.</p>
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
    </section>

    <section class="impact-section" aria-labelledby="impact-title">
      <div class="shell">
        <div class="impact-intro"><p class="kicker">The record</p><h2 id="impact-title">Impact at the scale of a system.</h2></div>
        <dl class="impact-grid">
          ${stats.map(([value, label]) => `<div class="reveal"><dt>${label}</dt><dd>${value}</dd></div>`).join('')}
        </dl>
      </div>
    </section>

    <section class="section events-home" aria-labelledby="events-title">
      <div class="shell">
        <div class="events-head">
          ${sectionHeading('What’s next', '<span id="events-title">For people who refuse to stand still.</span>', 'Public events appear here as soon as dates are confirmed. No expired event is presented as upcoming.')}
          ${link('/events/', 'View all events', 'text-link')}
        </div>
        ${emptyEvents()}
      </div>
    </section>

    <section class="section stories-section" aria-labelledby="stories-title">
      <div class="shell stories-layout">
        <div class="stories-proof">
          <p class="kicker">Client story</p>
          <p class="stories-logo">${caseStudies[0].name}</p>
          <h2 id="stories-title">${caseStudies[0].title}</h2>
          <p>${caseStudies[0].story}</p>
          <ul>${caseStudies[0].metrics.map((metric) => `<li>${metric}</li>`).join('')}</ul>
          ${link('/case-studies/', 'Read the evidence', 'text-link')}
        </div>
        <figure class="testimonial-stage reveal">
          <blockquote>“With the world changing so fast, the imperative is to future-proof the business. But before you do that, you must future-proof your people. This programme does exactly that.”</blockquote>
          <figcaption><b>Nisha Padbidri</b><span>APAC Head, Human Resources · Citi</span></figcaption>
          <span class="quote-mark" aria-hidden="true">“</span>
        </figure>
      </div>
    </section>

    <section class="section path-section" aria-labelledby="path-title">
      <div class="shell">
        ${sectionHeading('Two paths. One future.', '<span id="path-title">Start with the question that matters now.</span>', 'The role quiz shows how you contribute. The organisation assessment shows how ready your system is.')}
        <div class="path-grid">
          <article class="path-card path-card--personal reveal">
            <p>For you</p><span aria-hidden="true">✦</span><h3>Find your role.</h3><p>Three honest questions. One clear archetype. No personal details.</p>
            ${link('/role-quiz/', 'Take the role quiz', 'button button--cyan')}
          </article>
          <article class="path-card path-card--organisation reveal">
            <p>For your organisation</p><span aria-hidden="true">◎</span><h3>Measure future readiness.</h3><p>See where capability is strong and where the organisation needs to move next.</p>
            ${link('/future-proof-assessment/', 'Explore the assessment', 'button button--outline button--light')}
          </article>
        </div>
      </div>
    </section>

    <section class="section insights-section" aria-labelledby="insights-title">
      <div class="shell">
        <div class="insights-head">
          ${sectionHeading('Ideas for the intelligence age', '<span id="insights-title">Read what changes the work.</span>', 'Field notes on AI, leadership, innovation and building people who can move.')}
          ${link('/insights/', 'Explore all insights', 'text-link')}
        </div>
        ${featuredInsights()}
      </div>
    </section>

    ${finalCta()}`;
}
