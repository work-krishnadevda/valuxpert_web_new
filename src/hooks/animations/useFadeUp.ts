import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";

interface UseFadeUpOptions {
  y?: number;
  duration?: number;
  delay?: number;
  ease?: string;
}

export default function useFadeUp(
  ref: RefObject<HTMLElement>,
  { y = 40, duration = 0.8, delay = 0, ease = "power3.out" }: UseFadeUpOptions = {},
) {
  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        opacity: 0,
        y,
        duration,
        delay,
        ease,
      });
    }, ref as RefObject<HTMLElement>);

    return () => ctx.revert();
  }, [ref, y, duration, delay, ease]);
}
