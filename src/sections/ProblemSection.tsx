import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { problemCards } from '@/data/content';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function ProblemSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('[data-card]', {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
      });
      gsap.from('[data-banner]', {
        opacity: 0,
        y: 16,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: '[data-banner]', start: 'top 90%' },
      });
    }, rootRef);
    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section ref={rootRef} className="section-pad bg-surface-light1">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Why Valuation Companies Choose ValuXpert"
          title="Operational leakage is costing you time, money, and client trust."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problemCards.map((card) => (
            <div key={card.title} data-card className="card-light flex flex-col gap-4 p-7">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-cell bg-signal-negative/10 text-signal-negative">
                !
              </span>
              <h3 className="text-h3 text-ink-light">{card.title}</h3>
              <p className="text-body text-ink-muted">{card.description}</p>
            </div>
          ))}
        </div>
        <div data-banner className="rounded-card bg-surface-dark1 px-8 py-6 text-center">
          <p className="text-h3 !text-lg text-white">
            Operational leakage costs valuation companies time, money, and client trust every single day.
          </p>
        </div>
      </Container>
    </section>
  );
}
