import test from 'node:test';
import assert from 'node:assert/strict';

import { quizQuestions, roles } from '../data/content.mjs';
import { scoreQuiz, validateAnswers } from '../lib/quiz-engine.mjs';

test('quiz uses the three roles and three questions from the live source', () => {
  assert.deepEqual(roles.map((role) => role.name), ['AI Explorer', 'AI Innovator', 'AI Vanguard']);
  assert.equal(quizQuestions.length, 3);
  assert.ok(quizQuestions.every((question) => question.answers.length === 3));
});

test('each consistent answer path returns the intended role', () => {
  assert.equal(scoreQuiz({ q1: 'a', q2: 'a', q3: 'a' }).primary.id, 'explorer');
  assert.equal(scoreQuiz({ q1: 'b', q2: 'b', q3: 'b' }).primary.id, 'innovator');
  assert.equal(scoreQuiz({ q1: 'c', q2: 'c', q3: 'c' }).primary.id, 'vanguard');
});

test('two matching answers win and a three-way tie falls back to question one', () => {
  assert.equal(scoreQuiz({ q1: 'a', q2: 'b', q3: 'b' }).primary.id, 'innovator');
  assert.equal(scoreQuiz({ q1: 'c', q2: 'a', q3: 'b' }).primary.id, 'vanguard');
});

test('invalid or incomplete quiz state cannot produce a result', () => {
  assert.equal(validateAnswers({ q1: 'a', q2: 'b' }), false);
  assert.throws(() => scoreQuiz({ q1: 'a', q2: 'b' }), /valid answer/i);
  assert.throws(() => scoreQuiz({ q1: 'x', q2: 'b', q3: 'c' }), /valid answer/i);
});
