import { Container } from "@/components/ui/Container";
import { trustLogos } from "@/data/content";

export function TrustBar() {
  return (
    <section className="border-y border-ink-light/10 bg-surface-light1 py-10">
      <Container>
        <p className="mx-auto mb-6 max-w-xs text-center text-eyebrow uppercase leading-relaxed text-ink-muted sm:max-w-none sm:leading-normal">
          Trusted by empanelled valuation partners across India
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12 lg:gap-x-16 xl:gap-x-20">
          {trustLogos.map((name) => (
            <span
              key={name}
              className="text-base font-semibold text-ink-light/35 grayscale transition-all duration-300 hover:text-ink-light/70 hover:grayscale-0"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}