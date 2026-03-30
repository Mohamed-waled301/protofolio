import { publicUrl } from './publicUrl.js';

/**
 * Build slug from project title for filenames in /public/images/projects/
 * Example: "Strict Page" → "strict-page"
 */
export function slugifyTitleForImage(title) {
  if (!title || typeof title !== 'string') return 'project';
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Title slug → PNG under `public/images/projects/` (GitHub Pages–safe via BASE_URL).
 * Same as: `${import.meta.env.BASE_URL}images/projects/${slug}.png` with normalized slashes.
 */
export function getImagePath(title) {
  const slug = slugifyTitleForImage(title) || 'project';
  return publicUrl(`images/projects/${slug}.png`);
}

const IMAGE_EXTENSIONS = ['png', 'jpg', 'jpeg', 'webp'];

/**
 * Ordered list of URLs to try: title slug first, then optional legacy `imageBasenames` (e.g. onsite-one.png after rename to "Strict Page").
 */
export function getProjectCoverUrlCandidates(project) {
  const slug = slugifyTitleForImage(project.title) || 'project';
  const custom = Array.isArray(project.imageBasenames) ? project.imageBasenames : [];
  const basenames = [...new Set([slug, ...custom])];

  const urls = [];
  for (const base of basenames) {
    if (!base) continue;
    for (const ext of IMAGE_EXTENSIONS) {
      urls.push(publicUrl(`images/projects/${base}.${ext}`));
    }
  }
  return urls;
}
