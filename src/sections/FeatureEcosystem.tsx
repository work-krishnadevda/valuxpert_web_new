import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Icon } from '@/components/ui/Icon';
import { Reveal } from '@/components/ui/Reveal';
import { TiltCard } from '@/components/ui/TiltCard';
import { featureEcosystem } from '@/data/content';

export function FeatureEcosystem() {
  return (
    <section id="features" className="section-pad bg-surface-light1">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Feature Ecosystem" title="Every module your operation actually runs on." />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureEcosystem.map((feature, i) => (
            <Reveal key={feature.id} delay={i * 70}>
              <TiltCard className="group card-light flex h-full flex-col gap-4 p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-cell bg-brand-500/10 text-brand-600 transition-transform duration-300 group-hover:scale-110">
                  <Icon name={feature.icon} />
                </span>
                <h3 className="text-h3 text-ink-light">{feature.title}</h3>
                <p className="text-body text-ink-muted">{feature.description}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
