import { useState, useMemo } from 'react';
import { getProjectCoverUrlCandidates } from '../utils/projectImage.js';
import { publicUrl } from '../utils/publicUrl.js';

const PLACEHOLDER_SVG = publicUrl('images/placeholder-project.svg');
const FALLBACK_PNG = publicUrl('images/fallback.png');

/** Never fails to load — avoids infinite onError if hosted assets are missing. */
const TERMINAL_POSTER =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450"><rect fill="%23e2e8f0" width="800" height="450"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2394a3b8" font-family="system-ui,sans-serif" font-size="16">Project preview</text></svg>'
  );

/**
 * Tries title/legacy basenames (BASE_URL-safe), then shared fallback.png, placeholder SVG, data-URI last resort.
 */
export default function ProjectCoverImage({ project, alt, className = '' }) {
  const urls = useMemo(() => {
    const candidates = getProjectCoverUrlCandidates(project);
    return [...candidates, FALLBACK_PNG, PLACEHOLDER_SVG, TERMINAL_POSTER];
  }, [project]);

  const [index, setIndex] = useState(0);
  const src = urls[Math.min(index, urls.length - 1)];

  const handleError = () => {
    setIndex((prev) => (prev >= urls.length - 1 ? prev : prev + 1));
  };

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`project-card-img ${className}`.trim()}
      onError={handleError}
    />
  );
}
