import { Container } from "@/components/ui/Container";
import { trustLogos } from "@/data/content";

export function TrustBar() {
  return (
    <section className="border-y border-ink-light/10 bg-surface-light1 py-10">
      <Container>
        <p className="mb-6 text-center text-eyebrow uppercase text-ink-muted">
          Trusted by empanelled valuation partners across India
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-64 gap-y-4">
          {trustLogos.map((name) => (
            <span
              key={name}
              className="text-h3 !text-base font-semibold text-ink-light/35 grayscale transition-all duration-300 hover:text-ink-light/70 hover:grayscale-0"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
