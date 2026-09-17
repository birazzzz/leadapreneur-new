'use client';

// Must load before Keystatic so its GitHub requests pass through the shim.
import '../viewer-shim';
import { makePage } from '@keystatic/next/ui/app';
import config from '../../../../keystatic.config';

export default makePage(config);
