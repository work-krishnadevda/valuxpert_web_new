import { useEffect, type RefObject } from "react";
import gsap from "gsap";

interface UseFloatingOptions {
  yDistance?: number;
  duration?: number;
  delay?: number;
}

export default function useFloating(
  elementRef: RefObject<HTMLElement>,
  options: UseFloatingOptions = {},
) {
  const { yDistance = 12, duration = 2.5, delay = 0 } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animation = gsap.to(element, {
      y: `-=${yDistance}`,
      duration: duration,
      delay: delay,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => {
      animation.kill();
    };
  }, [elementRef, yDistance, duration, delay]);
}
