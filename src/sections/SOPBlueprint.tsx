import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { sopStages, sopNarrative, comparisonRows } from "@/data/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Check, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function SOPBlueprint() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-stage]", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-stage-grid]", start: "top 80%" },
      });
      gsap.from("[data-row]", {
        opacity: 0,
        y: 10,
        duration: 0.4,
        stagger: 0.04,
        ease: "power2.out",
        scrollTrigger: { trigger: "[data-table]", start: "top 85%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section ref={rootRef} className="bg-surface-light1 py-16 md:py-24">
      <Container className="flex flex-col gap-16">
        <div>
          <span className="eyebrow w-fit">
            Real-World Ground Operations Map
          </span>
          <h2 className="mt-4 text-h2 text-balance text-ink-light">
            Operational Pipeline Blueprint (SOP)
          </h2>
          <p className="mt-3 max-w-2xl text-body text-ink-muted">
            See exactly how your ground workflow translates directly into
            ValuXpert&apos;s digital compliance routing steps.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-card bg-surface-dark1 p-6 md:p-10">
          <div className="glow-orb-brand right-0 top-0 h-[300px] w-[420px] translate-x-1/4 -translate-y-1/3" />
          <div className="relative mb-8 rounded-cell border border-white/10 bg-white/5 p-5">
            <p className="text-eyebrow uppercase text-brand-400">
              Ground narrative captured
            </p>
            <p className="mt-2 text-body italic text-ink-dark/80">
              {sopNarrative}
            </p>
          </div>

          <div
            data-stage-grid
            className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
          >
            {sopStages.map((stage) => (
              <div
                key={stage.id}
                data-stage
                className="group flex flex-col gap-3 rounded-cell border border-white/10 bg-surface-dark2 p-5 transition-transform duration-300 [transform-style:preserve-3d] hover:-translate-y-1 hover:[transform:rotateX(4deg)_rotateY(-4deg)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-eyebrow text-brand-400">
                    {stage.id}
                  </span>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase text-ink-dark/60">
                    {stage.role}
                  </span>
                </div>
                <h4 className="text-h3 !text-base text-white">{stage.title}</h4>
                <p className="text-sm text-ink-dark/70">{stage.description}</p>
                <p className="mt-auto font-mono text-xs text-brand-400/80">
                  {stage.quote}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="eyebrow w-fit">Summary Ledger</span>
          <h3 className="mt-4 text-h3 !text-2xl text-ink-light">
            Before vs After Comparison Table
          </h3>
          <div className="mt-6 flex flex-col gap-4 md:hidden">
            {comparisonRows.map((row) => (
              <div
                key={row.area}
                className="rounded-card border border-ink-light/10 bg-surface-light2 p-5"
              >
                <div className="mb-4">
                  <h4 className="font-semibold text-ink-light">{row.area}</h4>

                  <p className="mt-1 text-xs uppercase tracking-wide text-ink-muted">
                    {row.tag}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                    <div className="mb-2 flex items-center gap-2 font-medium text-signal-negative">
                      <X size={16} />
                      Before ValuXpert
                    </div>

                    <p className="text-sm text-ink-muted">{row.before}</p>
                  </div>

                  <div className="rounded-xl border border-brand-500/20 bg-brand-500/5 p-4">
                    <div className="mb-2 flex items-center gap-2 font-medium text-brand-600">
                      <Check size={16} />
                      After ValuXpert
                    </div>

                    <p className="text-sm text-ink-light">{row.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            data-table
            className="mt-6 hidden overflow-hidden rounded-card border border-ink-light/10 md:block"
          >
            <table className="min-w-full border-collapse text-left">
              <thead>
                <tr className="bg-surface-light2 text-eyebrow uppercase text-ink-muted">
                  <th className="px-4 py-3 lg:px-6 lg:py-4">
                    Area of Inspection
                  </th>
                  <th className="px-4 py-3 lg:px-6 lg:py-4 text-signal-negative">
                    Before ValuXpert
                  </th>
                  <th className="px-4 py-3 lg:px-6 lg:py-4 text-brand-600">
                    After ValuXpert
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    data-row
                    key={row.area}
                    className="animate-gentle-float border-t border-ink-light/10"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  >
                    <td className="px-4 py-3 lg:px-6 lg:py-4">
                      <p className="text-nav font-semibold text-ink-light">
                        {row.area}
                      </p>
                      <span className="text-[11px] uppercase text-ink-muted">
                        {row.tag}
                      </span>
                    </td>
                    <td className="px-4 py-3 lg:px-6 lg:py-4 text-xs sm:text-sm text-ink-muted">
                      <span className="mr-2 inline-flex text-signal-negative">
                        <X size={16} />
                      </span>
                      {row.before}
                    </td>
                    <td className="px-4 py-3 lg:px-6 lg:py-4 text-xs sm:text-sm font-medium text-brand-600">
                      <span className="mr-2 inline-flex text-brand-500">
                        <Check size={16} />
                      </span>
                      {row.after}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}
