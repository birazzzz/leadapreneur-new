# Leadapreneur Certificate Studio

Private, local-only first version of the certificate creator. Open `index.html` in a browser, enter the certificate details, review the A4 landscape preview, and choose **Print / save PDF**. In the print dialog, select **Save as PDF** and disable browser headers and footers if they are enabled. The certificate uses Leadapreneur's Manrope font, logo, cream paper and deep teal palette.

The tool does not send names or certificate details to a server. It creates an ID for recordkeeping, but **does not issue a verifiable online credential or maintain an issuance register**. Its source stays in `internal/certificates/`; the production build does not copy it into `dist/`, link to it, or list it in `sitemap.xml` or `llms.txt`. The `noindex` meta tag is only a secondary precaution, not access control.

Before launching at `leadapreneur.com/certificates/`, add a Cloudflare Access policy for the approved staff email addresses and verify unauthenticated requests are blocked. Then add server-side issuance storage and an ID uniqueness check if public verification or re-download is required. Keep any public verification route separate from the private creator.
