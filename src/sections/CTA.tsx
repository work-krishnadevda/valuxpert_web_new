import { Container } from '@/components/ui/Container';
import { useContactModal } from '@/lib/ContactModalContext';

export function CTA() {
  const { open } = useContactModal();
  return (
    <section className="bg-surface-light1 py-16 md:py-24">
      <Container>
        <div className="panel-framed-dark flex flex-col items-center gap-6 px-6 py-16 text-center md:px-10 md:py-24">
          <div className="glow-orb-brand left-1/2 top-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2" />
          <div className="glow-orb-amber right-0 top-0 h-[280px] w-[320px] translate-x-1/3 -translate-y-1/3" />
          <span className="eyebrow-dark relative w-fit">Get Started Today</span>
          <h2 className="relative text-h2 !text-3xl text-balance text-white md:!text-4xl">
            Ready to Eliminate Operational Leakage?
          </h2>
          <p className="relative max-w-xl text-body text-ink-dark/70">
            Join the leading valuation agencies that trust ValuXpert to power their professional ecosystem.
          </p>
          <div className="relative flex flex-wrap justify-center gap-4">
            <button type="button" onClick={open} className="btn-primary">
              Request a Demo
            </button>
            <button type="button" onClick={open} className="btn-ghost-dark">
              Contact Sales
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
