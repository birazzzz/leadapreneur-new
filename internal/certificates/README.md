# Leadapreneur Certificate Studio

The certificate creator is published at `/certificates/` for staff use. The Cloudflare Pages middleware in `functions/_middleware.js` requires HTTP Basic authentication for the page and every asset below that path. The username is `leadapreneur`; the password is checked against the `CERTIFICATES_PASSWORD_SHA256` Pages secret. If the secret is absent, the route fails closed. The route is omitted from the sitemap, navigation and `llms.txt`, and its responses carry `noindex` and `no-store` headers. The URL itself is not the security boundary; authentication is.

Enter the certificate details, review the A4 landscape preview, and choose **Print / save PDF**. In the print dialog, select **Save as PDF** and disable browser headers and footers if they are enabled. The certificate uses Leadapreneur's Manrope font, logo, cream paper and deep teal palette.

The tool does not send recipient names or certificate details to a server. It creates an ID for recordkeeping, but **does not issue a verifiable online credential or maintain an issuance register**. Store the exported PDFs in the approved staff location. The password can be rotated by replacing the Pages secret with a SHA-256 digest of a new strong password. For individual staff accounts and easy revocation, replace this shared-password gate with Cloudflare Access before expanding the team.
