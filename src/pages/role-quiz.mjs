import { roleCards } from '../components.mjs';
import { arrow } from '../templates.mjs';

export function roleQuizPage() {
  return `
    <section class="quiz-page-hero">
      <div class="shell quiz-page-grid">
        <div class="quiz-page-copy">
          <p class="kicker">Leadapreneur · 2-minute quiz</p>
          <h1>What kind of leadapreneur are you?</h1>
          <p>Three situations. Three AI roles. One result.</p>
          <ul class="privacy-list" aria-label="Quiz privacy promises">
            <li>No account</li><li>No personal details</li><li>No email</li>
          </ul>
          <button class="button button--cyan" type="button" data-quiz-start>Start the quiz ${arrow}</button>
          <p class="small muted">Results are instant. Your answers stay in this browser.</p>
        </div>
        <div class="quiz-card-stack" aria-label="Three possible role cards">
          ${[
            ['/images/role-explorer.jpeg', 'AI Explorer'],
            ['/images/role-innovator.jpeg', 'AI Innovator'],
            ['/images/role-vanguard.jpeg', 'AI Vanguard'],
          ]
            .map(([image, alt], index) => `<figure style="--stack:${index}"><img src="${image}" alt="${alt} role artwork" width="1024" height="1365"><span aria-hidden="true">?</span></figure>`)
            .join('')}
        </div>
      </div>
    </section>

    <section class="quiz-experience" aria-labelledby="quiz-experience-title">
      <div class="shell quiz-shell" data-quiz-root>
        <div class="quiz-shell__intro" data-quiz-intro>
          <p class="kicker">Ready when you are</p>
          <h2 id="quiz-experience-title">Answer honestly. There is no “best” role.</h2>
          <p>Each role matters at a different moment: discovery, building or leading change. Choose the answer that sounds most like you now.</p>
          <button class="button button--teal" type="button" data-quiz-start>Begin question one ${arrow}</button>
        </div>
        <div class="quiz-app" data-quiz-app hidden aria-live="polite"></div>
        <noscript><p class="notice">JavaScript is required to calculate a private quiz result. No data is submitted or stored remotely.</p></noscript>
      </div>
    </section>

    <section class="section role-guide" aria-labelledby="role-guide-title">
      <div class="shell">
        <div class="section-heading"><p class="kicker">The field</p><h2 id="role-guide-title">Three ways to move AI forward.</h2><p>The cards introduce the archetypes. Your result is calculated only after you answer all three questions.</p></div>
        <div class="role-guide-grid">${roleCards({ interactive: false })}</div>
      </div>
    </section>`;
}
