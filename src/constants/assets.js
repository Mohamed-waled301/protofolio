import { publicUrl } from '../utils/publicUrl.js';

/**
 * Profile photo: `public/images/mohamed-waled.png`.
 * Use `publicUrl` so deploy works with Vite `base` (GitHub Pages: `/protofolio/images/...`, Vercel root: `/images/...`).
 */
export const PROFILE_IMAGE_SRC = publicUrl('images/mohamed-waled.png');
export const PROFILE_FALLBACK_SRC = publicUrl('images/profile-fallback.svg');
