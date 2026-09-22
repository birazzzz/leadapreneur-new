import { cpSync, existsSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Vendors the built Future-Proofing Assessment app (React/Vite, base /assessment/)
// from its own repository into public/assessment/ so the site build ships it at
// leadapreneur.com/assessment/. The assessment source stays in the sibling repo;
// only built output is copied here. Build it first:
//   cd ../LP-future-proofing-assessment && npm run build

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = process.env.ASSESSMENT_DIST
  ?? join(root, '..', 'LP-future-proofing-assessment', 'dist');
const target = join(root, 'public', 'assessment');

if (!existsSync(join(source, 'index.html'))) {
  console.error(`Assessment build not found at ${source}.`);
  console.error('Run "npm run build" in the assessment repository first, or set ASSESSMENT_DIST.');
  process.exit(1);
}

rmSync(target, { recursive: true, force: true });
cpSync(source, target, {
  recursive: true,
  // Unedited source originals are kept in the assessment repo and are never
  // referenced at runtime, so they are not shipped to production.
  filter: (path) => !path.includes('source-originals'),
});

console.log(`Synced assessment app: ${source} -> ${target}`);
