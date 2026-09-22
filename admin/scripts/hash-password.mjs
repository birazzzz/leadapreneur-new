// Prints a CMS_ADMIN_PASSWORD_HASH value for the shared team login.
//   npm run hash-password --workspace admin -- "the password"
import { randomBytes, scryptSync } from 'node:crypto';

const password = process.argv[2];
if (!password) {
  console.error('Usage: npm run hash-password --workspace admin -- "the password"');
  process.exit(1);
}
const salt = randomBytes(16);
const hash = scryptSync(password, salt, 32);
console.log(`scrypt:${salt.toString('base64url')}:${hash.toString('base64url')}`);
