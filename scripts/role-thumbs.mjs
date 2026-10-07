import { mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

// Picker tiles show only the upper ~two-thirds of each role portrait at about
// 150px wide, so they get their own small crops instead of the full figure.
// Run after replacing any image in public/images/roles/.
const dir = fileURLToPath(new URL('../public/images/roles/', import.meta.url));
const out = join(dir, 'thumbs');
mkdirSync(out, { recursive: true });

for (const file of readdirSync(dir).filter((name) => name.endsWith('.webp'))) {
  const image = sharp(join(dir, file));
  const { width, height } = await image.metadata();
  const info = await image
    .extract({ left: 0, top: 0, width, height: Math.round(height * 0.66) })
    .resize({ width: 300 })
    .webp({ quality: 80, alphaQuality: 90 })
    .toFile(join(out, file));
  console.log(`${file}: ${info.width}x${info.height}, ${(info.size / 1024).toFixed(1)} KB`);
}
