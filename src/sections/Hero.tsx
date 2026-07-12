import { useRef } from "react";
import Button from "@/components/common/Button/Button";
import AnimatedBadge from "@/components/common/Badge/AnimatedBadge";
import Container from "@/components/common/Container/Container";
import { heroData } from "@/data/heroData";
import useFadeUp from "@/hooks/animations/useFadeUp";
import { useContactModal } from "@/lib/ContactModalContext";

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const { open } = useContactModal();

  useFadeUp(titleRef);

  useFadeUp(descRef, {
    delay: 0.2,
  });

  return (
    <section
      id="hero"
      className="
    relative
   overflow-hidden
    bg-gradient-to-t from-[#7c73ee] via-[#d1c5f8] to-[#cbb9ff]
    min-h-[calc(100dvh-64px)]
    md:min-h-[calc(100dvh-80px)]
    pt-10
    md:pt-16
    lg:pt-20
  "
    >
      <Container className="relative z-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <AnimatedBadge>{heroData.badge}</AnimatedBadge>

          <h1
            ref={titleRef}
            className="
          mt-6
          max-w-5xl
          text-4xl
          font-bold
          leading-[1.05]
          tracking-tight
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          xl:text-8xl
        "
          >
            {heroData.title}
          </h1>

          <p
            ref={descRef}
            className="
          mt-6
          max-w-xl
          text-base
          leading-7
          text-white/90
          sm:max-w-2xl
          sm:text-lg
          lg:text-xl
        "
          >
            {heroData.description}
          </p>

          <div
            className="
          mt-8
          flex
          w-full
          max-w-sm
          flex-col
          gap-3
          sm:mt-10
          sm:flex-row
          sm:justify-center
          sm:max-w-none
        "
          >
            <Button
              type="button"
              onClick={open}
              className="
            w-full
            rounded-xl
            bg-[#eeeef3]
            px-6
            text-[#3a2fda]
            shadow-sm
            sm:w-auto
          "
            >
              {heroData.primaryButton.label}
            </Button>

            <Button
              type="button"
              onClick={open}
              className="
            w-full
            bg-[#3a2fda]
            text-[#eeeef3]
            sm:w-auto
          "
            >
              {heroData.secondaryButton.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
