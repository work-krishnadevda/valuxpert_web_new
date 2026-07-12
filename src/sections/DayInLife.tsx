import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { DayInLifeVisual } from "@/components/visuals/DayInLifeVisual";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const beats = [
  {
    threshold: 0,
    title: "A cluttered morning",
    copy: "Paper stacks, spreadsheets, and WhatsApp threads run the day.",
  },
  {
    threshold: 0.3,
    title: "The old workflow dissolves",
    copy: "Excel grids and chat threads lift off the desk and break into data.",
  },
  {
    threshold: 0.55,
    title: "The dashboard assembles",
    copy: "Case data streams into a single, structured operational view.",
  },
  {
    threshold: 0.75,
    title: "A brighter, organized office",
    copy: "Live dashboards, Geo Location Validation, and role-based queues replace the chaos.",
  },
  {
    threshold: 0.92,
    title: "One command center",
    copy: "Every case, every role, every report — visible in real time.",
  },
];

export function DayInLife() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [beatIndex, setBeatIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=2600",
      pin: true,
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
      className="relative h-screen overflow-hidden bg-surface-dark1"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <DayInLifeVisual activeIndex={beatIndex} beatCount={beats.length} />
      </div>

      <Container className="relative z-10 flex h-full flex-col justify-between py-16">
        <div className="max-w-lg">
          <span className="eyebrow-dark">
            A Day in the Life · Cinematic Sequence
          </span>
        </div>

        <div className="max-w-xl">
          <p className="mb-2 text-eyebrow uppercase text-brand-400">
            {String(beatIndex + 1).padStart(2, "0")} /{" "}
            {String(beats.length).padStart(2, "0")}
          </p>
          <h3 className="text-h2 !text-3xl text-white">
            {beats[beatIndex].title}
          </h3>
          <p className="mt-3 text-body text-ink-dark/70">
            {beats[beatIndex].copy}
          </p>
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
