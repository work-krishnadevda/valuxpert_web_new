import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";

export default function useBadgeAnimation(ref: RefObject<HTMLElement>) {
  useLayoutEffect(() => {
    if (!ref.current) return;

    const slider = ref.current.querySelector(".badge-slider");

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1.2,
    });

    tl.to(slider, {
      y: "-24px",
      duration: 0.55,
      ease: "power3.inOut",
    })
      .to({}, { duration: 1.2 })
      .to(slider, {
        y: "0px",
        duration: 0.55,
        ease: "power3.inOut",
      })
      .to({}, { duration: 1.2 });

    return () => {
      tl.kill();
    };
  }, [ref]);
}
