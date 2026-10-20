import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { exportWebinarRegistrations } from '../lib/webinar-registrations.mjs';

const args = process.argv.slice(2);
const outIndex = args.indexOf('--out');
if (outIndex >= 0 && !args[outIndex + 1]) throw new Error('--out requires a CSV file path');
const output = resolve(outIndex >= 0 ? args[outIndex + 1] : `exports/future-proof-fridays-${new Date().toISOString().slice(0,10)}.csv`);
const publicRoot = resolve('public');
const distRoot = resolve('dist');
if (output.startsWith(publicRoot) || output.startsWith(distRoot)) throw new Error('Registration exports must remain outside public site directories.');
const csv = await exportWebinarRegistrations();
await mkdir(dirname(output), {recursive:true});
await writeFile(output, csv, {mode:0o600});
console.log(`Registration CSV saved: ${output}`);
