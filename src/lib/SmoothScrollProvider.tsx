import { useEffect, type PropsWithChildren } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

/**
 * Single Lenis instance mounted at the app root, synced to GSAP's ticker so
 * ScrollTrigger and Lenis never fall out of step — the standard, documented
 * pairing for this stack (design spec §9).
 */
export function SmoothScrollProvider({ children }: PropsWithChildren) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, [reducedMotion]);

  return <>{children}</>;
}
