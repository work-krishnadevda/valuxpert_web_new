import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { securityFeatures } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

export function Security() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !rootRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-security-card]");

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-security-grid]",
            start: "top 80%",
          },
        },
      );
    }, rootRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section ref={rootRef} className="bg-surface-light1 py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div>
            <span className="eyebrow w-fit">Enterprise Security</span>
            <h2 className="mt-4 text-h2 text-balance text-ink-light">
              Your Data. Isolated. Encrypted. Always Protected.
            </h2>

            <p className="mt-4 max-w-3xl text-body text-ink-muted">
              ValuXpert is hosted on secure AWS cloud infrastructure with
              enterprise-grade encryption. Every valuation company operates in
              its own isolated environment, ensuring your reports, client
              records, and documents are encrypted at every stage and never
              accessible to any other organization on the platform.
            </p>
          </div>

          {/* Security Panel */}
          <div
            className="
              relative
              overflow-hidden
              rounded-card
              bg-surface-dark1
              p-6
              md:p-10
            "
          >
            <div className="glow-orb-brand right-0 top-0 h-[320px] w-[420px]" />

            <div className="relative">
              <div
                data-security-grid
                className="
                  grid
                  grid-cols-1
                  gap-4
                  md:grid-cols-2
                "
              >
                {securityFeatures.map((feature) => (
                  <div
                    key={feature.id}
                    data-security-card
                    className="
                      rounded-cell
                      border
                      border-white/10
                      bg-white/[0.08]
                      p-5
                      transition-all
                      duration-300
                      hover:-translate-y-1
                    "
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-eyebrow text-brand-400">
                        {feature.id}
                      </span>

                      <span
                        className="
                          rounded-full
                          bg-white/10
                          px-2
                          py-0.5
                          text-[10px]
                          uppercase
                          text-white/60
                        "
                      >
                        {feature.scopeTag}
                      </span>
                    </div>

                    <h3 className="mt-4 text-h3 !text-lg text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm text-white/70">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Trust Message */}
              <div
                className="
                  mt-8
                  rounded-cell
                  border
                  border-brand-400/20
                  bg-brand-500/10
                  p-5
                "
              >
                <p className="text-sm leading-6 text-white/80">
                  <span className="font-semibold text-brand-400">
                    Privacy First:
                  </span>{" "}
                  Your organization's valuation data remains isolated from other
                  ValuXpert customers and is accessible only to your authorized
                  team members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
