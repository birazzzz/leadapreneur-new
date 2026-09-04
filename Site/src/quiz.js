import { quizQuestions } from '../data/content.mjs';
import { scoreQuiz } from './quiz-engine.mjs';

const root = document.querySelector('[data-quiz-root]');
const app = root?.querySelector('[data-quiz-app]');
const intro = root?.querySelector('[data-quiz-intro]');
const startButtons = [...document.querySelectorAll('[data-quiz-start]')];
const arrow = '<svg class="icon-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M12 5l7 7-7 7"/></svg>';
const state = { step: 0, answers: {} };

function focusHeading() {
  requestAnimationFrame(() => {
    const heading = app?.querySelector('h2');
    if (heading) {
      heading.tabIndex = -1;
      heading.focus({ preventScroll: true });
    }
  });
}

function startQuiz() {
  if (!root || !app || !intro) return;
  intro.hidden = true;
  app.hidden = false;
  state.step = 0;
  state.answers = {};
  renderQuestion();
  root.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}

function renderQuestion() {
  const question = quizQuestions[state.step];
  const selected = state.answers[question.id];
  app.innerHTML = `
    <div class="quiz-progress-wrap">
      <div class="quiz-progress-copy"><span>Question ${state.step + 1} of ${quizQuestions.length}</span><span>${Math.round(((state.step + 1) / quizQuestions.length) * 100)}%</span></div>
      <progress max="${quizQuestions.length}" value="${state.step + 1}">${state.step + 1} of ${quizQuestions.length}</progress>
    </div>
    <form class="quiz-question" data-question-form>
      <fieldset>
        <legend><span class="kicker">Choose the honest answer</span><h2>${question.prompt}</h2></legend>
        <div class="quiz-options">
          ${question.answers
            .map(
              (answer, index) => `<label class="quiz-option">
                <input type="radio" name="${question.id}" value="${answer.id}" ${selected === answer.id ? 'checked' : ''}>
                <span class="quiz-option__key">${String.fromCharCode(65 + index)}</span>
                <span class="quiz-option__label">${answer.label}</span>
                <span class="quiz-option__check" aria-hidden="true">✓</span>
              </label>`,
            )
            .join('')}
      </fieldset>
      <div class="quiz-actions">
        <button class="button button--ghost" type="button" data-quiz-back>${state.step === 0 ? 'Exit' : 'Back'}</button>
        <button class="button button--teal" type="submit" ${selected ? '' : 'disabled'}>${state.step === quizQuestions.length - 1 ? 'See my result' : 'Continue'} ${arrow}</button>
      </div>
    </form>`;

  const form = app.querySelector('[data-question-form]');
  const submit = form.querySelector('[type="submit"]');
  form.addEventListener('change', (event) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    state.answers[question.id] = event.target.value;
    submit.disabled = false;
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!state.answers[question.id]) return;
    if (state.step < quizQuestions.length - 1) {
      state.step += 1;
      renderQuestion();
    } else renderResult();
  });
  app.querySelector('[data-quiz-back]').addEventListener('click', () => {
    if (state.step === 0) {
      app.hidden = true;
      intro.hidden = false;
      intro.querySelector('button')?.focus();
      return;
    }
    state.step -= 1;
    renderQuestion();
  });
  focusHeading();
}

function renderResult() {
  const result = scoreQuiz(state.answers);
  const { primary, secondary } = result;
  const resultUrl = `${location.origin}/role-quiz/?role=${primary.id}`;
  app.innerHTML = `
    <section class="quiz-result" style="--role:${primary.accent}">
      <div class="quiz-result__art"><p>Your primary role</p><div class="quiz-result__image"><img src="${primary.image}" alt="${primary.name} archetype artwork" width="1024" height="1365"></div><span>${primary.symbol}</span></div>
      <div class="quiz-result__copy">
        <p class="kicker">Your result</p><h2>${primary.name}</h2><p class="quiz-result__tagline">${primary.tagline}</p><p>${primary.description}</p>
        <div class="result-traits"><p>Signature strengths</p><ol>${primary.traits.map((trait, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span>${trait}</li>`).join('')}</ol></div>
        <div class="secondary-role"><span>Secondary role</span><b>${secondary.name}</b><p>${secondary.tagline}</p></div>
        <div class="result-context"><div><span>Your role in a team</span><p>${primary.teamContribution}</p></div><div><span>Your next challenge</span><p>${primary.developmentTip}</p></div></div>
        <div class="quiz-actions quiz-actions--result">
          <a class="button button--teal" href="/ai-x-talent-accelerator/">Explore the Accelerator ${arrow}</a>
          <button class="button button--outline" type="button" data-share-result>Share my result</button>
          <button class="text-button" type="button" data-retake>Retake quiz</button>
        </div>
        <p class="share-status small" data-share-status aria-live="polite"></p>
      </div>
    </section>`;

  app.querySelector('[data-retake]').addEventListener('click', startQuiz);
  app.querySelector('[data-share-result]').addEventListener('click', async () => {
    const status = app.querySelector('[data-share-status]');
    const shareData = {
      title: `I’m an ${primary.name}`,
      text: `${primary.tagline} Discover your Leadapreneur role.`,
      url: resultUrl,
    };
    try {
      if (navigator.share) await navigator.share(shareData);
      else {
        await navigator.clipboard.writeText(resultUrl);
        status.textContent = 'Result link copied.';
      }
    } catch (error) {
      if (error?.name !== 'AbortError') status.textContent = 'Sharing is not available in this browser.';
    }
  });
  focusHeading();
}

startButtons.forEach((button) => button.addEventListener('click', startQuiz));
