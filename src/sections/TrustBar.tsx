import { Container } from "@/components/ui/Container";
import { trustLogos } from "@/data/content";

export function TrustBar() {
  return (
    <section className="border-y border-ink-light/10 bg-surface-light1 py-6 md:py-10">
      <Container>
        <p className="mx-auto mb-4 md:mb-8 max-w-xs text-center text-[10px] uppercase leading-relaxed text-ink-muted sm:max-w-none sm:text-eyebrow sm:leading-normal">
  Trusted by empanelled valuation partners across India
</p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-4 lg:gap-x-16 xl:gap-x-20">
  {trustLogos.map((company) => (
    <div
      key={company.name}
      className="flex h-12 items-center justify-center transition-all duration-300 hover:opacity-80"
    >
      <img
        src={company.logo}
        alt={company.name}
        className="max-h-10 md:max-h-16 w-auto object-contain transition-all duration-300 hover:grayscale"
        loading="lazy"
      />
    </div>
  ))}
</div>
      </Container>
    </section>
  );
}