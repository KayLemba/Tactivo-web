import React from 'react';

/**
 * Tactivo "t" mark, rendered as inline SVG (not a raster image).
 * Every fill references a CSS custom property, so the mark automatically
 * re-colors when `data-theme` flips between "dark" and "light" — no
 * separate light/dark asset, no white background plate needed.
 */
function LogoMark({ className = '' }) {
  return (
    <svg
      className={`logo-mark ${className}`}
      viewBox="0 0 44 52"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Tactivo Technologies"
    >
      {/* two offset facets echoing the faceted "broken tile" crown of the print logo */}
      <rect x="14" y="0" width="10" height="10" fill="var(--accent)" />
      <rect x="24" y="4" width="8" height="8" fill="var(--accent-dark)" />
      {/* stem of the t */}
      <rect x="15.5" y="4" width="7" height="26" fill="var(--accent)" />
      {/* crossbar */}
      <rect x="6" y="14" width="24" height="7" fill="var(--accent)" />
      {/* hooked base curve, in the primary text color so it reads against either theme */}
      <path
        d="M15.5 30 v4 a14 14 0 0 0 14 14 h4 v-8 h-4 a6 6 0 0 1 -6 -6 v-4 Z"
        fill="var(--text-primary)"
      />
    </svg>
  );
}

export default LogoMark;
