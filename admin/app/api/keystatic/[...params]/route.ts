import path from 'node:path';
import { makeRouteHandler } from '@keystatic/next/route-handler';
import config from '../../../../../keystatic.config';

// Local mode (development only) must write to the repository root, not admin/.
export const { POST, GET } = makeRouteHandler({
  config,
  localBaseDirectory: path.join(process.cwd(), '..'),
});
