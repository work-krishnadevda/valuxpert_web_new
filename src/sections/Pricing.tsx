import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { pricingTiers } from '@/data/content';
import { useContactModal } from '@/lib/ContactModalContext';
import { Check } from 'lucide-react';

export function Pricing() {
  const { open } = useContactModal();
  return (
    <section id="pricing" className="section-pad bg-surface-light1">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          align="center"
          eyebrow="Pricing"
          title="Scale Your Business, Not Your Costs"
          description="Simple, transparent pricing for teams of all sizes."
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col gap-6 rounded-card border p-8 ${
                tier.featured
                  ? 'border-brand-500 bg-white shadow-light lg:-translate-y-3'
                  : 'border-ink-light/10 bg-white'
              }`}
            >
              {tier.featured ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-3 py-1 text-[11px] font-semibold uppercase text-white">
                  Most Popular
                </span>
              ) : null}
              <div>
                <h3 className="text-h3 !text-xl text-ink-light">{tier.name}</h3>
                <p className="mt-1 text-sm text-ink-muted">{tier.tagline}</p>
              </div>
              <p className="text-h1 !text-4xl text-ink-light">{tier.price}</p>
              <ul className="flex flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-ink-light">
                    <Check size={16} className="text-brand-500" /> {feature}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={open}
                className={`mt-auto rounded-control py-3 text-nav font-semibold transition-colors ${
                  tier.featured
                    ? 'bg-brand-500 text-white hover:bg-brand-600'
                    : 'border border-ink-light/15 text-ink-light hover:bg-ink-light/5'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
