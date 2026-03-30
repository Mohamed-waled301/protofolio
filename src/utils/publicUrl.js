/**
 * Public folder URL for GitHub Pages / local dev (`base` in vite.config → `import.meta.env.BASE_URL`).
 * Always use this (or `import.meta.env.BASE_URL`) instead of hardcoded `/images/...`.
 */
export function publicUrl(path) {
  const base = import.meta.env.BASE_URL || '/';
  const normalized = (path.startsWith('/') ? path.slice(1) : path).replace(/^\/+/, '');
  if (!normalized) return base.endsWith('/') ? base.slice(0, -1) : base;
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return `${prefix}${normalized}`;
}
