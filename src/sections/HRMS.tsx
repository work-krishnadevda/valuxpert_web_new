import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Icon } from '@/components/ui/Icon';
import { Reveal } from '@/components/ui/Reveal';
import { TiltCard } from '@/components/ui/TiltCard';
import { hrmsCards, fieldToolFeatures } from '@/data/content';
import { Camera, Wifi, Zap, Signal, BatteryFull } from 'lucide-react';

const fieldIcons = [Wifi, Wifi, Zap];

export function HRMS() {
  return (
    <section id="hrms" className="section-pad bg-surface-light1">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Unified HR Operations"
          title="Valuation isn't just about property; it's about people."
          description="Manage your distributed workforce, geofence check-ins, and mileage payroll with precision."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hrmsCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 70}>
              <TiltCard className="card-light flex h-full flex-col gap-4 p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-cell bg-brand-500/10 text-brand-600">
                  <Icon name={card.icon} />
                </span>
                <h3 className="text-h3 text-ink-light">{card.title}</h3>
                <p className="text-body text-ink-muted">{card.description}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Realistic phone frame: notch, side buttons, status bar — the
              content behind it is unchanged, the phone is purely a visual
              frame around it (design spec: "Engineer for the Field"). */}
          <div className="mx-auto w-full max-w-[280px]">
            <div className="relative rounded-[3rem] border-[10px] border-surface-dark1 bg-surface-dark1 shadow-light">
              <span className="absolute -left-[13px] top-24 h-8 w-[3px] rounded-full bg-surface-dark2/80" />
              <span className="absolute -left-[13px] top-36 h-14 w-[3px] rounded-full bg-surface-dark2/80" />
              <span className="absolute -right-[13px] top-32 h-16 w-[3px] rounded-full bg-surface-dark2/80" />
              <div className="relative overflow-hidden rounded-[2.25rem] bg-surface-dark2">
                <div className="absolute left-1/2 top-0 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-surface-dark1" />
                <div className="flex items-center justify-between px-6 pb-1 pt-3 text-[10px] font-semibold text-white/80">
                  <span>9:41</span>
                  <span className="flex items-center gap-1">
                    <Signal size={11} /> <Wifi size={11} /> <BatteryFull size={13} />
                  </span>
                </div>
                <div className="p-4 pt-3">
                  <div className="mb-4 flex items-center justify-between text-white">
                    <span className="text-xs font-semibold text-accent-action">Case #9822</span>
                    <span className="h-2 w-2 rounded-full bg-brand-400" />
                  </div>
                  <div className="rounded-cell bg-white/5 p-3">
                    <p className="text-[10px] uppercase text-ink-dark/50">GPS Status Available</p>
                    <p className="mt-1 font-mono text-xs text-brand-400">Current location</p>
                    <p className="font-mono text-sm text-white">24.5204° N, 54.3712° E</p>
                  </div>
                  <div className="mt-4 flex h-40 flex-col items-center justify-center gap-3 rounded-cell border border-dashed border-white/15 text-center">
                    <Camera size={26} className="text-ink-dark/40" />
                    <p className="px-6 text-[11px] text-ink-dark/50">No site photographs synchronized yet</p>
                  </div>
                  <button className="mt-4 w-full rounded-control bg-accent-action py-2.5 text-xs font-semibold text-surface-dark1">
                    Upload Evidence
                  </button>
                </div>
                <div className="mx-auto mb-1.5 mt-2 h-1 w-24 rounded-full bg-white/30" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-h2 !text-3xl text-ink-light">Engineered for the Field</h3>
            <p className="max-w-md text-body text-ink-muted">
              Give your field engineers the tools they need to succeed, even in the most remote locations.
            </p>
            <div className="flex flex-col gap-4">
              {fieldToolFeatures.map((feature, i) => {
                const FieldIcon = fieldIcons[i];
                return (
                  <div key={feature.title} className="flex items-start gap-4 rounded-cell bg-surface-light2 p-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-cell bg-white text-brand-600">
                      <FieldIcon size={18} />
                    </span>
                    <div>
                      <p className="text-nav font-semibold text-ink-light">{feature.title}</p>
                      <p className="mt-1 text-sm text-ink-muted">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
