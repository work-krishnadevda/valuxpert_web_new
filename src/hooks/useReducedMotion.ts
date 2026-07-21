import { useEffect, useState } from 'react';

/**
 * Respects the visitor's OS-level motion preference.
 * Every scroll-scrubbed and 3D auto-motion sequence in the app checks this
 * before animating, per the accessibility rule in the design specification.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(query.matches);

    const handler = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener('change', handler);
    return () => query.removeEventListener('change', handler);
  }, []);

  return reduced;
}
