import { useState } from 'react';

/**
 * Renders an image with object-fit; swaps to fallback on error (no broken icons).
 */
export default function SafeImage({ src, alt, fallback, className = '', ...rest }) {
  const [failed, setFailed] = useState(false);
  const uri = failed || !src ? fallback : src;

  return (
    <img
      src={uri}
      alt={alt}
      loading={rest.loading ?? 'lazy'}
      decoding="async"
      className={className}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
