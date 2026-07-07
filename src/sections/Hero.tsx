import { useRef } from "react";
import Button from "@/components/common/Button/Button";
import AnimatedBadge from "@/components/common/Badge/AnimatedBadge";
import Container from "@/components/common/Container/Container";
import { heroData } from "@/data/heroData";
import useFadeUp from "@/hooks/animations/useFadeUp";

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useFadeUp(titleRef);

  useFadeUp(descRef, {
    delay: 0.2,
  });

  return (
    <section  id="hero"
      className="
      relative
      overflow-hidden
      pt-10
      bg-gradient-to-t from-[#7c73ee] via-[#d1c5f8] to-[#cbb9ff]
    "
    >
      <Container>
        <div className="flex items-center flex-col">
          <AnimatedBadge>{heroData.badge}</AnimatedBadge>

          <h1
            ref={titleRef}
            className="
              mt-6
              text-4xl
              font-bold
              leading-tight
              lg:text-6xl
              flex text-center
              w-[90%]
              md:w-[60%]
            "
          >
            {heroData.title}
          </h1>

          <p
            ref={descRef}
            className="
              mt-6
              max-w-xl
              text-sm
              font-semibold
              text-slate-500
              w-[80%]
              flex text-center
            "
          >
            {heroData.description}
          </p>

          <div className="mt-8 flex gap-4">
            <Button
              className="
        rounded-xl
     text-[#3a2fda] bg-[#eeeef3]
        px-6
        shadow-sm
        "
            >
              {heroData.primaryButton.label}
            </Button>

            <Button className="bg-[#3a2fda] text-[#eeeef3]">
              {heroData.secondaryButton.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
