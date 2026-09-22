import { cpSync, existsSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Vendors the built Future-Proofing Assessment app (React/Vite, base /assessment/)
// from its own repository into public/assessment/ so the site build ships it at
// leadapreneur.com/assessment/. The assessment source stays in the sibling repo;
// only built output is copied here. Build it first:
//   cd ../LP-future-proofing-assessment && npm run build
//
// Images are optimised in place after copying — the app references every asset
// by exact .png filename (some built dynamically), so files are never renamed,
// only recompressed. Source art ships at 3840x2160; nothing on the web needs
// more than 1920 wide, and palette PNG keeps the alpha channels the layered
// parallax scenes rely on.

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = process.env.ASSESSMENT_DIST
  ?? join(root, '..', 'LP-future-proofing-assessment', 'dist');
const target = join(root, 'public', 'assessment');

const MAX_WIDTH = 1920;

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

function* walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

const { default: sharp } = await import('sharp');

let before = 0;
let after = 0;
for (const file of walk(target)) {
  if (!file.endsWith('.png')) continue;
  const original = statSync(file).size;
  const buffer = await sharp(file)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .png({ palette: true, quality: 85, dither: 0.8, compressionLevel: 9 })
    .toBuffer();
  if (buffer.length < original) {
    writeFileSync(file, buffer);
    before += original;
    after += buffer.length;
  } else {
    before += original;
    after += original;
  }
}

const mb = (bytes) => `${(bytes / 1048576).toFixed(1)} MB`;
console.log(`Synced assessment app: ${source} -> ${target}`);
console.log(`Images optimised: ${mb(before)} -> ${mb(after)} (filenames unchanged)`);

