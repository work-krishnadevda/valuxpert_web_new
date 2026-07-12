import { useEffect, useState } from 'react';

export function useIsDesktopViewport(): boolean {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const query = window.matchMedia('(min-width: 768px)');
    setIsDesktop(query.matches);
    const handler = (event: MediaQueryListEvent) => setIsDesktop(event.matches);
    query.addEventListener('change', handler);
    return () => query.removeEventListener('change', handler);
  }, []);

  return isDesktop;
}
