import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildResultEmail } from '../lib/result-email.mjs';

// Sends a real sample result email through Resend for visual testing.
// Usage:
//   node scripts/test-result-email.mjs someone@example.com
// Reads RESEND_API_KEY (and optionally ASSESSMENT_EMAIL_FROM) from the
// environment or from .env.local in this directory's parent.

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const envFile = join(root, '.env.local');
if (existsSync(envFile)) {
  for (const line of readFileSync(envFile, 'utf8').split('\n')) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (match && !process.env[match[1]]) process.env[match[1]] = match[2];
  }
}

const to = process.argv[2];
const apiKey = process.env.RESEND_API_KEY;
if (!to || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
  console.error('Usage: node scripts/test-result-email.mjs someone@example.com');
  process.exit(1);
}
if (!apiKey) {
  console.error('RESEND_API_KEY is not set (environment or .env.local).');
  process.exit(1);
}

const from = process.env.ASSESSMENT_EMAIL_FROM || 'Leadapreneur <onboarding@resend.dev>';
const sample = buildResultEmail({
  name: 'Biraj',
  role: 'Pathfinder',
  description:
    'You read situations before you move — mapping who is affected, what could break, and where the real opportunity sits. That makes you the person teams trust to find the route before anyone commits resources.',
});

const response = await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({ from, to: [to], subject: sample.subject, html: sample.html, text: sample.text }),
});

if (!response.ok) {
  console.error('Resend error:', response.status, await response.text());
  process.exit(1);
}
console.log(`Sent sample result email from ${from} to ${to}:`, await response.json());
