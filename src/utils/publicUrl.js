/**
 * Resolves `public/` assets for deployment. Pass paths like `images/foo.png` (no leading slash).
 * Produces `${BASE_URL}images/foo.png` — on GitHub project pages this is `/protofolio/images/...`, not site-root `/images/...`.
 */
export function publicUrl(path) {
  const base = import.meta.env.BASE_URL || '/';
  const normalized = (path.startsWith('/') ? path.slice(1) : path).replace(/^\/+/, '');
  if (!normalized) return base.endsWith('/') ? base.slice(0, -1) : base;
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return `${prefix}${normalized}`;
}
