import { defineCloudflareConfig } from '@opennextjs/cloudflare';

// No incremental cache: every editor page is dynamic and signed-in only.
export default defineCloudflareConfig();
