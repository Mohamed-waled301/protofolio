import { useState, useMemo } from 'react';
import { getProjectCoverUrlCandidates } from '../utils/projectImage.js';
import { publicUrl } from '../utils/publicUrl.js';

const FINAL_FALLBACK = publicUrl('images/placeholder-project.svg');

/**
 * Tries project cover URLs in order; on error advances (no broken img icon).
 * Ends on placeholder, then optional /images/fallback.png per spec.
 */
export default function ProjectCoverImage({ project, alt, className = '' }) {
  const urls = useMemo(() => {
    const candidates = getProjectCoverUrlCandidates(project);
    return [...candidates, FINAL_FALLBACK, publicUrl('images/fallback.png')];
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
