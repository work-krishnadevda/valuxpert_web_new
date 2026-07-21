import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { beforeAfterTabs } from "@/data/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Lock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AUTOPLAY_INTERVAL = 55000;

export function BeforeAfterSimulator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const beforeRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLDivElement>(null);
  const browserRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const active = beforeAfterTabs[activeIndex];

  const handleSelect = useCallback(
    (index: number) => {
      if (index === activeIndex) return;

      if (reducedMotion) {
        setActiveIndex(index);
        return;
      }

      const tl = gsap.timeline();
      if (beforeRef.current) {
        tl.to(beforeRef.current.children, {
          opacity: 0,
          y: -8,
          filter: "blur(4px)",
          duration: 0.25,
          stagger: 0.03,
          ease: "power2.in",
        });
      }
      tl.add(() => setActiveIndex(index));
      if (afterRef.current) {
        tl.fromTo(
          afterRef.current.children,
          { opacity: 0, x: -16 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "power3.out",
          },
        );
      }
      if (beforeRef.current) {
        tl.fromTo(
          beforeRef.current.children,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, stagger: 0.04, ease: "power2.out" },
          "<",
        );
      }
    },
    [activeIndex, reducedMotion],
  );

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => {
      handleSelect((activeIndex + 1) % beforeAfterTabs.length);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(id);
  }, [activeIndex, reducedMotion, handleSelect]);

  useEffect(() => {
    if (reducedMotion) return;
    const browserEl = browserRef.current;
    const sectionEl = sectionRef.current;
    if (!browserEl || !sectionEl) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionEl,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        })
        .fromTo(
          browserEl,
          { y: 40, scale: 0.97 },
          { y: 0, scale: 1, ease: "power1.out", duration: 0.4 },
        )
        .to(browserEl, { y: 0, scale: 1, duration: 0.3 })
        .to(browserEl, {
          y: -24,
          scale: 0.985,
          ease: "power1.in",
          duration: 0.3,
        });
    }, sectionRef);
    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="before-after"
      ref={sectionRef}
      className="section-pad bg-surface-dark1"
    >
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <span className="eyebrow-dark w-fit">
            A Day in the Life · SLA Audit Breakdown
          </span>
          <h2 className="text-h2 text-balance text-white">
            Same firm.{" "}
            <span className="text-brand-400">Two different days.</span>
          </h2>
          <p className="max-w-2xl text-body text-ink-dark/70">
            Valuation operations have been slow and manual for years. Select a
            role below to see exactly how upgrading to ValuXpert transforms a
            day in the life of every professional on your team.
          </p>
        </div>

        <div ref={browserRef} className="[transform-style:preserve-3d]">
          <div className="overflow-hidden rounded-card border border-white/10 bg-surface-dark2 shadow-light">
            <div className="flex items-center gap-4 border-b border-white/10 bg-[#242424] px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#EE6A5F]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F5BD4F]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#61C454]" />
              </div>
              <div className="flex flex-1 items-center gap-2 rounded-control bg-white/[0.06] px-3 py-1.5 text-xs text-ink-dark/50">
                <Lock size={11} />
                app.valuxpert.com/workspace
              </div>
            </div>

            <div
              className="flex flex-wrap gap-1 border-b border-white/10 bg-surface-dark2 px-3 pt-2"
              role="tablist"
              aria-label="Roles"
            >
              {beforeAfterTabs.map((tab, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleSelect(index)}
                    className={`relative overflow-hidden rounded-t-control px-4 py-2.5 text-nav transition-colors duration-300 ${
                      isActive
                        ? "bg-surface-dark1 text-white"
                        : "text-ink-dark/50 hover:text-ink-dark/80"
                    }`}
                  >
                    {tab.role}
                    {isActive && !reducedMotion ? (
                      <span
                        key={activeIndex}
                        className="absolute bottom-0 left-0 h-0.5 bg-brand-400"
                        style={{
                          animation: `autoplay-progress ${AUTOPLAY_INTERVAL}ms linear forwards`,
                        }}
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>

            <div className="bg-surface-dark1 p-6 md:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-eyebrow uppercase text-brand-400">
                    {active.sectionTag}
                  </span>
                  <h3 className="text-h3 !text-2xl text-white">
                    {active.headline}
                  </h3>
                  <p className="max-w-xl text-body text-ink-dark/70">
                    {active.description}
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-10">
                <Timeline
                  refProp={beforeRef}
                  label="BEFORE VALUXPERT"
                  statusTag={active.beforeStatus}
                  milestones={active.before}
                  tone="negative"
                />
                <Timeline
                  refProp={afterRef}
                  label="AFTER WITH VALUXPERT"
                  statusTag={active.afterStatus}
                  milestones={active.after}
                  tone="positive"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Timeline({
  refProp,
  label,
  statusTag,
  milestones,
  tone,
}: {
  refProp: RefObject<HTMLDivElement>;
  label: string;
  statusTag: string;
  milestones: { time: string; label: string }[];
  tone: "negative" | "positive";
}) {
  const dotColor = tone === "negative" ? "bg-signal-negative" : "bg-brand-400";
  const lineColor =
    tone === "negative" ? "bg-signal-negative/30" : "bg-brand-400/30";
  const textColor =
    tone === "negative" ? "text-signal-negative" : "text-brand-400";
  const strike =
    tone === "negative" ? "line-through decoration-signal-negative/70" : "";

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${dotColor}`} />
          <span className={`text-eyebrow uppercase ${textColor}`}>{label}</span>
          <span
            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${tone === "negative" ? "bg-signal-negative/10 text-signal-negative" : "bg-brand-400/10 text-brand-400"}`}
          >
            {statusTag}
          </span>
        </div>
      </div>
      <div className="relative">
        {/* Connecting line: vertical on mobile, horizontal from sm and up */}
        <div
          className={`absolute left-2 top-0 bottom-0 w-px sm:left-0 sm:right-0 sm:top-2 sm:bottom-auto sm:h-px sm:w-auto ${lineColor}`}
        />
        <div
          ref={refProp}
          className="flex flex-col gap-6 sm:grid sm:grid-cols-3 sm:gap-6 md:grid-cols-5"
        >
          {milestones.map((m) => (
            <div
              key={`${label}-${m.time}-${m.label}`}
              className="relative flex flex-col items-start gap-2 pl-8 sm:pl-0 sm:pt-6"
            >
              <span
                className={`absolute left-2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-surface-dark1 sm:left-0 sm:translate-x-0 ${dotColor}`}
              />
              <span className={`text-[11px] font-semibold ${textColor}`}>
                {m.time}
              </span>
              <span className={`text-sm text-white ${strike}`}>{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
