import { acceleratorSteps, site } from '../../data/content.mjs';
import { contactButtons, finalCta } from '../components.mjs';
import { breadcrumb, link, pageHeroArt, sectionHeading } from '../templates.mjs';

export function acceleratorPage() {
  return `
    <section class="page-hero page-hero--accelerator">
      ${pageHeroArt('accelerator')}
      <div class="shell">
        ${breadcrumb([{ name: 'Home', path: '/' }, { name: 'AI × Talent Accelerator', path: '/ai-x-talent-accelerator/' }])}
        <div class="page-hero__grid">
          <div><p class="kicker">AI × Talent Accelerator</p><h1>Turn AI learning into business value.</h1></div>
          <div><p class="page-hero__lede">Accelerate AI adoption by upgrading managers into leadapreneurs, mastering Stratecution and measuring the value of every project created.</p>${contactButtons()}</div>
        </div>
      </div>
    </section>

    <section class="section proposition-section">
      <div class="shell proposition-grid">
        <p class="kicker">The difference</p>
        <h2>Not a workshop.<br>Not a case study.<br><em>A working innovation system.</em></h2>
        <p>Every leadapreneur individually proposes, prototypes and deploys a real AI innovation. Managers validate the work inside COSMOS, so capability, progress and business value can be seen—not guessed.</p>
      </div>
    </section>

    <section class="section" aria-labelledby="accelerator-journey-title">
      <div class="shell">
        ${sectionHeading('The journey', '<span id="accelerator-journey-title">Five moves from manager to leadapreneur.</span>', 'One system connects capability, execution, project value and progression.')}
        <ol class="journey-track journey-track--page">
          ${acceleratorSteps.map((step) => `<li class="journey-step reveal"><span class="journey-step__number">${step.number}</span><p>${step.label}</p><h3>${step.title}</h3><p>${step.copy}</p></li>`).join('')}
        </ol>
      </div>
    </section>

    <section class="section method-section" id="stratecution" aria-labelledby="stratecution-title">
      <div class="shell method-grid">
        <div class="method-copy">
          <p class="kicker">The execution method</p>
          <h2 id="stratecution-title">Most organisations can strategise. Most can execute. Few can <em>stratecute.</em></h2>
          <p>Stratecution is Leadapreneur’s individual innovation methodology. Each challenge deepens capability and earns a growing level of organisational support.</p>
        </div>
        <ol class="challenge-list">
          <li><span>01</span><div><p>Propose</p><h3>AI × Design Thinking</h3><p>Frame a painful problem and shape a manager-ready strategy.</p></div></li>
          <li><span>02</span><div><p>Prototype</p><h3>AI × Lean Startup</h3><p>Build and test the smallest credible version of the solution.</p></div></li>
          <li><span>03</span><div><p>Deploy</p><h3>AI × Agile Execution</h3><p>Put the solution into real use and measure what changed.</p></div></li>
        </ol>
      </div>
    </section>

    <section class="section value-section" aria-labelledby="value-title">
      <div class="shell value-grid">
        <div>${sectionHeading('Innovation accounting', '<span id="value-title">Make value visible.</span>', 'Projects are organised around five kinds of business value and a seven-pillar delivery framework.')}</div>
        <div class="value-types" aria-label="Five types of value"><span>Grow revenue</span><span>Cut costs</span><span>Improve efficiency</span><span>Reduce risk</span><span>Increase satisfaction</span></div>
        <ol class="pillars-seven">
          ${['Problem', 'Proposition', 'Positioning', 'Politics', 'Planning', 'Performance', 'Potential'].map((item, index) => `<li><span>${index + 1}</span>${item}</li>`).join('')}
        </ol>
      </div>
    </section>

    <section class="games-section games-section--page" id="greatness-games" aria-labelledby="games-page-title">
      <div class="shell games-layout">
        <div class="games-copy"><p class="kicker kicker--light">The Greatness Games</p><h2 id="games-page-title">Turn AI adoption into serious fun.</h2><p>The Games replace mandatory-programme energy with an elite challenge. Employees step forward, experiment, build and earn recognition through delivered work.</p></div>
        <div class="game-loop"><p>Performance loop</p><ol><li><span>01</span>Adoption</li><li><span>02</span>Engagement</li><li><span>03</span>Outcomes</li><li><span>04</span>Sustainability</li></ol></div>
      </div>
    </section>

    <section class="section cosmos-section" aria-labelledby="cosmos-title">
      <div class="shell cosmos-grid">
        <div><p class="kicker">Digital command centre</p><h2 id="cosmos-title">COSMOS organises innovation the way CRM organises sales.</h2><p>It makes the innovation pipeline visible: who is building, which projects are moving and what value they create.</p>${link(site.cosmos, 'Open COSMOS', 'button button--outline', true)}</div>
        <ol><li><b>Gamification</b><span>Drive participation.</span></li><li><b>Execution</b><span>Guide Stratecution.</span></li><li><b>Measurement</b><span>Track outcomes.</span></li><li><b>Insights</b><span>Reveal future leaders.</span></li><li><b>Control</b><span>Manage innovation at scale.</span></li></ol>
      </div>
    </section>

    <section class="section fit-section" aria-labelledby="fit-title">
      <div class="shell">
        ${sectionHeading('Who it is for', '<span id="fit-title">Organisations ready to build—not just brief.</span>')}
        <div class="fit-grid"><article><span>01</span><h3>You need adoption</h3><p>AI tools exist, but people have not translated them into changed work.</p></article><article><span>02</span><h3>You need evidence</h3><p>You want real project value and objective capability data, not attendance records.</p></article><article><span>03</span><h3>You need scale</h3><p>You want innovation to become a repeatable organisational habit across seasons.</p></article></div>
      </div>
    </section>
    ${finalCta()}`;
}
