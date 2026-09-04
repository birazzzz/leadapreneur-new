import { quizQuestions, roles } from '../data/content.mjs';

export function validateAnswers(answers) {
  if (!answers || typeof answers !== 'object') return false;
  return quizQuestions.every((question) =>
    question.answers.some((answer) => answer.id === answers[question.id]),
  );
}

export function scoreQuiz(answers) {
  if (!validateAnswers(answers)) {
    throw new TypeError('A valid answer is required for every quiz question.');
  }

  const scores = Object.fromEntries(roles.map((role) => [role.id, 0]));
  const selectedRoles = [];

  for (const question of quizQuestions) {
    const selected = question.answers.find((answer) => answer.id === answers[question.id]);
    scores[selected.role] += 1;
    selectedRoles.push(selected.role);
  }

  const order = roles.map((role) => role.id);
  const primaryId = [...order].sort((a, b) => {
    const scoreDelta = scores[b] - scores[a];
    if (scoreDelta !== 0) return scoreDelta;
    if (a === selectedRoles[0]) return -1;
    if (b === selectedRoles[0]) return 1;
    return order.indexOf(a) - order.indexOf(b);
  })[0];

  const secondaryId = [...order]
    .filter((id) => id !== primaryId)
    .sort((a, b) => scores[b] - scores[a] || order.indexOf(a) - order.indexOf(b))[0];

  return {
    primary: roles.find((role) => role.id === primaryId),
    secondary: roles.find((role) => role.id === secondaryId),
    scores,
  };
}
