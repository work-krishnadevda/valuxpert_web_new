import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { ChaosToControlVisual } from "@/components/visuals/ChaosToControlVisual";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const beats = [
  {
    threshold: 0,
    title: "Chaos before ValuXpert",
    copy: "Scattered tools, messy spreadsheets, and manual field work run the day.",
  },
  {
    threshold: 0.2,
    title: "The ValuXpert core appears",
    copy: "A glowing ValuXpert core emerges and starts pulling everything into one place.",
  },
  {
    threshold: 0.42,
    title: "Everything connects",
    copy: "Data, workflows, teams, and processes get organized inside the ValuXpert ecosystem.",
  },
  {
    threshold: 0.65,
    title: "Transformation",
    copy: "Light trails link every module — valuation, compliance, HRMS, analytics — to one core.",
  },
  {
    threshold: 0.88,
    title: "Complete control",
    copy: "Everything is now connected, streamlined, and actionable in a single command center.",
  },
];

export function ChaosToControl() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [beatIndex, setBeatIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=3000",
      pin: true,
      anticipatePin: 1,
      scrub: 0.6,
      onUpdate: (self) => {
        const index = [...beats]
          .reverse()
          .findIndex((b) => self.progress >= b.threshold);
        const resolved = index === -1 ? 0 : beats.length - 1 - index;
        setBeatIndex(resolved);
      },
    });

    return () => trigger.kill();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="chaos-to-control"
      className="relative h-screen overflow-hidden bg-surface-dark1"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <ChaosToControlVisual activeIndex={beatIndex} beatCount={beats.length} />
      </div>

      <Container className="relative z-10 flex h-full flex-col justify-between py-16">
        <div className="max-w-lg">
          <span className="eyebrow-dark">From Chaos to Complete Control</span>
        </div>

        <div className="max-w-xl">
          <p className="mb-2 text-eyebrow uppercase text-brand-400">
            {String(beatIndex + 1).padStart(2, "0")} /{" "}
            {String(beats.length).padStart(2, "0")}
          </p>
          <h3 className="text-h2 !text-3xl text-white">{beats[beatIndex].title}</h3>
          <p className="mt-3 text-body text-ink-dark/70">{beats[beatIndex].copy}</p>
          <div className="mt-6 h-1 w-64 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full bg-brand-400 transition-[width] duration-300 ease-out"
              style={{ width: `${((beatIndex + 1) / beats.length) * 100}%` }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
