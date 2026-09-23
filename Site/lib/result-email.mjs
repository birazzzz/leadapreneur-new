// Branded "your result" email for the Future-Proofing Assessment.
// Shared by the Vercel function (api/send-result.js) and the manual test
// sender (scripts/test-result-email.mjs) so both render the same email.

const SITE_URL = 'https://www.leadapreneur.com';

export function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

/**
 * @param {{ name?: string | null, role?: string | null, description?: string | null }} input
 * @returns {{ subject: string, html: string, text: string }}
 */
export function buildResultEmail({ name, role, description } = {}) {
  const displayName = (name ?? '').trim() || 'there';
  const hasRole = Boolean(role && role.trim());
  const headline = hasRole
    ? `Your Future-Proofing Potential: ${role.trim()}`
    : 'Your Future-Proofing pattern is still taking shape';
  const bodyCopy = hasRole
    ? (description ?? '').trim()
    : 'The answers did not converge strongly enough to name a single role potential — that is a more honest result than forcing a label. Your full pattern is on the result page.';

  const subject = hasRole
    ? `${displayName}, your Future-Proofing result: ${role.trim()}`
    : `${displayName}, your Future-Proofing Assessment result`;

  const safeName = escapeHtml(displayName);
  const safeHeadline = escapeHtml(headline);
  const safeBody = escapeHtml(bodyCopy);

  const html = `<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<title>${escapeHtml(subject)}</title>
<!--[if mso]><style>table{border-collapse:collapse}</style><![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#f7f3ec;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${safeHeadline} — a copy of your Leadapreneur Future-Proofing Assessment result.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f3ec;">
<tr><td align="center" style="padding:32px 16px;">
  <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;">

    <tr><td style="background:linear-gradient(135deg,#082f35 0%,#0b535b 60%,#0a363c 100%);border-radius:24px 24px 0 0;padding:28px 40px;">
      <span style="font-family:Verdana,Arial,sans-serif;font-size:18px;letter-spacing:4px;color:#f7f3ec;text-transform:uppercase;">Leadapreneur</span><span style="color:#1fcad4;font-size:18px;">.</span>
    </td></tr>

    <tr><td style="background-color:#ffffff;padding:40px 40px 8px 40px;">
      <p style="margin:0 0 12px 0;font-family:Verdana,Arial,sans-serif;font-size:11px;letter-spacing:3px;color:#0e7c86;text-transform:uppercase;">Your result is ready</p>
      <h1 style="margin:0 0 16px 0;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.25;color:#152a2e;">Hi ${safeName} — ${safeHeadline}.</h1>
      <p style="margin:0 0 24px 0;font-family:Verdana,Arial,sans-serif;font-size:15px;line-height:1.7;color:#45565a;">${safeBody}</p>
    </td></tr>

    <tr><td align="center" style="background-color:#ffffff;padding:8px 40px 32px 40px;">
      <table role="presentation" cellpadding="0" cellspacing="0"><tr>
        <td align="center" style="border-radius:999px;background:linear-gradient(135deg,#12b5cb,#0e7c86);">
          <a href="${SITE_URL}/ai-x-talent-accelerator/" style="display:inline-block;padding:14px 34px;font-family:Verdana,Arial,sans-serif;font-size:15px;font-weight:bold;color:#062a30;text-decoration:none;border-radius:999px;">See how leadapreneurs build on this →</a>
        </td>
      </tr></table>
    </td></tr>

    <tr><td style="background-color:#ffffff;border-top:1px solid #ece4d6;border-radius:0 0 24px 24px;padding:24px 40px 32px 40px;">
      <p style="margin:0 0 6px 0;font-family:Verdana,Arial,sans-serif;font-size:13px;line-height:1.6;color:#45565a;">Potential is the starting point, not the proof. The AI&nbsp;×&nbsp;Talent Accelerator is where this pattern becomes real, deployed work.</p>
      <p style="margin:0;font-family:Verdana,Arial,sans-serif;font-size:13px;line-height:1.6;color:#8a8378;">Keep this email — it is your copy of the result.</p>
    </td></tr>

    <tr><td style="padding:28px 40px 8px 40px;">
      <p style="margin:0 0 6px 0;font-family:Verdana,Arial,sans-serif;font-size:12px;line-height:1.6;color:#8a8378;">Leadapreneur Sdn. Bhd. · Level 7, Tower 7, Avenue 7, Bangsar South, Kuala Lumpur</p>
      <p style="margin:0;font-family:Verdana,Arial,sans-serif;font-size:12px;line-height:1.6;color:#8a8378;">You received this because you asked for a copy of your result at <a href="${SITE_URL}/future-proof-assessment/" style="color:#0e7c86;text-decoration:underline;">leadapreneur.com</a>. No mailing list — this is a one-off.</p>
    </td></tr>

  </table>
</td></tr>
</table>
</body>
</html>`;

  const text = [
    `Hi ${displayName},`,
    '',
    `${headline}.`,
    '',
    bodyCopy,
    '',
    `See how leadapreneurs build on this: ${SITE_URL}/ai-x-talent-accelerator/`,
    '',
    '— Leadapreneur Sdn. Bhd., Level 7, Tower 7, Avenue 7, Bangsar South, Kuala Lumpur',
    'You received this because you asked for a copy of your Future-Proofing Assessment result. This is a one-off email, not a mailing list.',
  ].join('\n');

  return { subject, html, text };
}
