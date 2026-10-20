import { randomUUID } from 'node:crypto';
import { get, list, put } from '@vercel/blob';

export const REGISTRATION_PREFIX = 'webinar/future-proof-fridays/';
export const CSV_HEADER = 'registered_at,name,email,consent_version,source\r\n';

// Quote every cell and neutralize spreadsheet formulas in user-supplied values.
export function csvCell(value) {
  let text = String(value ?? '');
  if (/^[\s]*[=+\-@]/.test(text) || /^[\t\r\n]/.test(text)) text = "'" + text;
  return '"' + text.replaceAll('"', '""') + '"';
}

export function registrationCsv(record) {
  return [record.registeredAt, record.name, record.email, 'webinar-registration-v1', '/future-proof-friday/']
    .map(csvCell).join(',') + '\r\n';
}

export async function saveWebinarRegistration(record) {
  if (!process.env.BLOB_READ_WRITE_TOKEN && !(process.env.BLOB_STORE_ID && process.env.VERCEL_OIDC_TOKEN)) {
    throw new Error('Registration storage is not configured');
  }
  const id = randomUUID();
  // Independent immutable files avoid lost rows from concurrent serverless requests.
  await put(`${REGISTRATION_PREFIX}${id}.csv`, registrationCsv(record), {
    access:'private', addRandomSuffix:false, allowOverwrite:false,
    contentType:'text/csv; charset=utf-8', abortSignal:AbortSignal.timeout(15000)
  });
  return id;
}

export async function exportWebinarRegistrations({listBlobs = list, getBlob = get} = {}) {
  let cursor;
  let csv = '\uFEFF' + CSV_HEADER;
  do {
    const batch = await listBlobs({prefix:REGISTRATION_PREFIX,limit:1000,cursor});
    for (const blob of batch.blobs) {
      if (!blob.pathname.endsWith('.csv')) continue;
      const result = await getBlob(blob.pathname, {access:'private',useCache:false});
      if (!result || result.statusCode !== 200) throw new Error('A registration record could not be read; export was not written.');
      csv += await new Response(result.stream).text();
    }
    cursor = batch.hasMore ? batch.cursor : undefined;
  } while (cursor);
  return csv;
}
