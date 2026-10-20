export const CSV_HEADER = 'registered_at,name,email,consent_version,source\r\n';
export function csvCell(value) {
  let text = String(value ?? '');
  if (/^[\s]*[=+\-@]/.test(text) || /^[\t\r\n]/.test(text)) text = "'" + text;
  return '"' + text.replaceAll('"', '""') + '"';
}
export function registrationCsv(record) {
  return [record.registered_at ?? record.registeredAt,record.name,record.email,record.consent_version ?? 'webinar-registration-v1',record.source ?? '/future-proof-friday/']
    .map(csvCell).join(',') + '\r\n';
}
export async function saveWebinarRegistration(env, record) {
  if (!env?.WEBINAR_DB) throw new Error('Registration storage is not configured');
  const result = await env.WEBINAR_DB.prepare(
    'INSERT INTO webinar_registrations (id, registered_at, name, email, consent_version, source) VALUES (?, ?, ?, ?, ?, ?)'
  ).bind(crypto.randomUUID(),record.registeredAt,record.name,record.email,'webinar-registration-v1','/future-proof-friday/').run();
  if (!result.success) throw new Error('Registration was not saved');
}
export function registrationsToCsv(records) {
  return '\uFEFF' + CSV_HEADER + records.map(registrationCsv).join('');
}
