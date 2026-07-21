import { useRef } from "react";
import { ArrowRight, Play } from "lucide-react";

import Button from "@/components/common/Button/Button";
import AnimatedBadge from "@/components/common/Badge/AnimatedBadge";
import Container from "@/components/common/Container/Container";
import { heroData } from "@/data/heroData";
import useFadeUp from "@/hooks/animations/useFadeUp";
import { useBookingModal } from "@/lib/BookingModalContext";

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
const { open: openBooking } = useBookingModal();

  useFadeUp(titleRef);
  useFadeUp(descRef, { delay: 0.2 });

  return (
    <section
      id="hero"
      className="
      relative
      overflow-hidden
      bg-gradient-to-t
      from-[#7c73ee]
      via-[#d1c5f8]
      to-[#cbb9ff]
      min-h-[calc(100dvh-64px)]
      md:min-h-[calc(100dvh-80px)]
      pt-10
      md:pt-16
      lg:pt-20
      pb-4
    "
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-white/20 blur-[120px]" />

        <div className="absolute right-[-5%] top-40 h-96 w-96 rounded-full bg-[#8d84ff]/30 blur-[150px]" />

        <div className="absolute bottom-[-10%] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/15 blur-[170px]" />

        <div className="absolute left-[8%] top-40 h-3 w-3 animate-pulse rounded-full bg-white/70" />
        <div className="absolute right-[12%] top-56 h-2 w-2 animate-pulse rounded-full bg-white" />
        <div className="absolute bottom-44 left-[18%] h-2.5 w-2.5 animate-pulse rounded-full bg-white/70" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          <div className="relative animate-bounce">
            <AnimatedBadge>{heroData.badge}</AnimatedBadge>
          </div>

          <h1
            ref={titleRef}
            className="
mt-8
max-w-6xl
text-4xl
font-black
leading-[0.95]
tracking-[-0.05em]
text-transparent
bg-clip-text
bg-gradient-to-r
from-[#1d2436]
via-[#3d4566]
to-[#24283f]

sm:text-5xl
md:text-6xl
lg:text-7xl
xl:text-[6.2rem]
"
          >
            {heroData.title}
          </h1>

          <p
            ref={descRef}
            className="
            mt-8
            max-w-2xl
            text-base
            leading-8
            text-white/90
            sm:text-lg
            lg:text-[20px]
          "
          >
            {heroData.description}
          </p>

          <div
            className="
            mt-10
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:justify-center
          "
          >
            <Button
              type="button"
              onClick={openBooking}
              className="
              group
              h-14
              rounded-2xl
              bg-white
              px-8
              font-semibold
              text-[#4333ff]
              shadow-[0_18px_50px_rgba(80,60,255,.28)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_25px_60px_rgba(80,60,255,.38)]
            "
            >
              <span className="flex items-center gap-2">
                {heroData.primaryButton.label}

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Button>

            <a
  href="https://docs-whisperer-guide.lovable.app/"
  target="_ "
  className="group inline-flex h-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-8 font-medium text-white backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/20 hover:shadow-xl active:scale-95"
>
  <span className="flex items-center gap-2.5">
    <Play
      size={16}
      className="fill-current transition-transform duration-300 group-hover:scale-110"
    />
    {heroData.secondaryButton.label}
  </span>
</a>
          </div>

          <div
            className="
            mt-16
            rounded-3xl
            border
            border-white/20
            bg-white/10
            px-6
            py-5
            backdrop-blur-2xl
            shadow-[0_25px_60px_rgba(0,0,0,.08)]
          "
          >
            <div className="flex flex-col items-center gap-5 md:flex-row">
              <div className="flex -space-x-3">
                {["M", "R", "C", "B"].map((item) => (
                  <div
                    key={item}
                    className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-white
                    bg-gradient-to-br
                    from-white
                    to-[#ece8ff]
                    font-semibold
                    text-[#5b47ff]
                  "
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="text-center md:text-left">
                <div className="text-lg font-semibold text-white">
                  Trusted by valuation professionals
                </div>

                <div className="mt-1 text-sm text-white/75">
                  Faster reports • Smarter workflow • Better productivity
                </div>
              </div>

              <div className="hidden h-12 w-px bg-white/15 md:block" />

              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">10x</div>
                  <div className="text-xs uppercase tracking-wider text-white/65">
                    Faster
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-bold text-white">99%</div>
                  <div className="text-xs uppercase tracking-wider text-white/65">
                    Accuracy
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-xs uppercase tracking-wider text-white/65">
                    Cloud
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
