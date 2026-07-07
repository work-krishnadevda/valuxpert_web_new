import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { lifecycleSteps } from '@/data/content';
import { FolderPlus, MapPin, PenLine, ClipboardCheck, Send, Check } from 'lucide-react';

const icons = [FolderPlus, MapPin, PenLine, ClipboardCheck, Send];

export function Lifecycle() {
  const [activeIndex, setActiveIndex] = useState(1);
  const active = lifecycleSteps[activeIndex];

  return (
    <section id="lifecycle" className="section-pad bg-surface-light1">
      <Container className="flex flex-col items-center gap-3 text-center">
        <span className="eyebrow">Optimized Valuation Lifecycle</span>
        <h2 className="text-h2 text-ink-light">A Modern, Traceable Timeline</h2>
        <p className="max-w-xl text-body text-ink-muted">
          Click on any stage below to see how information streams securely from channel to channel.
        </p>
      </Container>

      <Container className="mt-16">
        <div className="relative flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          {/* Connective timeline rail — a soft gradient line threading every
              node together, with a solid lavender segment showing progress
              up to the active stage. */}
          <div className="absolute left-8 right-8 top-8 hidden h-px bg-ink-light/10 sm:block" />
          <div
            className="absolute left-8 top-8 hidden h-px bg-brand-500 transition-all duration-500 ease-out sm:block"
            style={{
              width: `calc((100% - 4rem) * ${activeIndex / (lifecycleSteps.length - 1)})`,
            }}
          />

          {lifecycleSteps.map((step, index) => {
            const StepIcon = icons[index];
            const isActive = index === activeIndex;
            const isPast = index < activeIndex;
            return (
              <Reveal key={step.id} delay={index * 90} className="relative z-10 flex flex-1 flex-col items-center gap-3 text-center">
                <button onClick={() => setActiveIndex(index)} className="flex flex-col items-center gap-3">
                  <span
                    className={`flex h-16 w-16 items-center justify-center rounded-full border-2 shadow-light transition-all duration-300 ${
                      isActive
                        ? 'scale-110 border-brand-500 bg-brand-500 text-white'
                        : isPast
                          ? 'border-brand-500/40 bg-white text-brand-600'
                          : 'border-ink-light/15 bg-white text-ink-muted'
                    }`}
                  >
                    <StepIcon size={22} />
                  </span>
                  <div>
                    <p className={`text-nav font-semibold ${isActive ? 'text-brand-600' : 'text-ink-light'}`}>
                      {step.id}. {step.title}
                    </p>
                    <p className="mt-1 max-w-[9rem] text-xs text-ink-muted">{step.summary}</p>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>

        <div key={active.id} className="reveal-fade is-visible mt-12 overflow-hidden rounded-card border border-ink-light/10 bg-white p-6 shadow-light md:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-cell bg-brand-500 text-sm font-bold text-white">
              {active.id}
            </span>
            <div>
              <h3 className="text-h3 !text-lg text-ink-light">{active.title} Automated Gateway Details</h3>
              <p className="mt-2 text-body text-ink-muted">{active.detail}</p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {active.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1.5 text-xs font-medium text-brand-600">
                    <Check size={14} /> {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
