import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from './useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

interface UseCountUpOptions {
  end: number;
  suffix?: string;
  decimals?: number;
}

/**
 * Animates a number from 0 to `end` once its element scrolls into view.
 * This is the one "big number" animation the spec allows to feel celebratory —
 * it represents real proof (metrics band), not decoration.
 */
export function useCountUp<T extends HTMLElement>({ end, suffix = '', decimals = 0 }: UseCountUpOptions) {
  const ref = useRef<T | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (reducedMotion) {
      node.textContent = `${end.toFixed(decimals)}${suffix}`;
      return;
    }

    const counter = { value: 0 };
    const tween = gsap.to(counter, {
      value: end,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: node,
        start: 'top 85%',
        once: true,
      },
      onUpdate: () => {
        node.textContent = `${counter.value.toFixed(decimals)}${suffix}`;
      },
    });

    return () => {
      tween.kill();
    };
  }, [end, suffix, decimals, reducedMotion]);

  return ref;
}
