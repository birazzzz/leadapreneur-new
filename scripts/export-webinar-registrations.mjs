import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { registrationsToCsv } from '../lib/webinar-registrations.mjs';

const args = process.argv.slice(2);
const outIndex = args.indexOf('--out');
if (outIndex >= 0 && !args[outIndex + 1]) throw new Error('--out requires a CSV file path');
const output = resolve(outIndex >= 0 ? args[outIndex + 1] : `exports/future-proof-fridays-${new Date().toISOString().slice(0,10)}.csv`);
const publicRoot = resolve('public');
const distRoot = resolve('dist');
if (output.startsWith(publicRoot) || output.startsWith(distRoot)) throw new Error('Registration exports must remain outside public site directories.');
const query = 'SELECT registered_at, name, email, consent_version, source FROM webinar_registrations ORDER BY registered_at';
const {stdout} = await promisify(execFile)(process.execPath,[
  'node_modules/wrangler/bin/wrangler.js','d1','execute','leadapreneur-webinar-registrations','--remote','--command',query,'--json'
],{maxBuffer:64*1024*1024});
const result=JSON.parse(stdout);
if (!Array.isArray(result) || !result[0]?.success) throw new Error('Registration export failed; no CSV was written.');
const csv = registrationsToCsv(result[0].results);
await mkdir(dirname(output), {recursive:true});
await writeFile(output, csv, {mode:0o600});
console.log(`Registration CSV saved: ${output}`);
