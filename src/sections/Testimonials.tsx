import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/content";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="section-pad bg-surface-light1">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          align="center"
          eyebrow="Trusted by Leading Bank Vendors"
          title="See how ValuXpert is transforming operations for empanelled valuation partners."
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.company}
              className={`relative flex flex-col gap-6 overflow-hidden rounded-card p-8 md:p-9 ${
                i % 2 === 0
                  ? "bg-surface-dark1 text-white lg:mt-0"
                  : "bg-brand-500 text-white lg:mt-8"
              }`}
            >
              <Quote className="absolute right-6 top-6 opacity-15" size={44} />
              <p className="text-eyebrow uppercase text-white/60">
                {t.company}
              </p>
              <p className="text-h3 !text-xl font-medium leading-snug">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-auto flex items-center gap-3 border-t border-white/15 pt-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-nav font-semibold">{t.name}</p>
                  <p className="text-xs text-white/70">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
