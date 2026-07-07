import { Container } from '@/components/ui/Container';
import { metrics } from '@/data/content';
import { useCountUp } from '@/hooks/useCountUp';

function NumericMetric({ metric }: { metric: (typeof metrics)[number] }) {
  const ref = useCountUp<HTMLParagraphElement>({ end: metric.value, suffix: metric.suffix });
  return (
    <p ref={ref} className="text-metric text-accent-action">
      0{metric.suffix}
    </p>
  );
}

function MetricItem({ metric }: { metric: (typeof metrics)[number] }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      {metric.display ? (
        <p className="text-metric text-accent-action">{metric.display}</p>
      ) : (
        <NumericMetric metric={metric} />
      )}
      <p className="text-nav font-semibold text-white">{metric.label}</p>
      <p className="max-w-[16rem] text-sm text-ink-dark/60">{metric.description}</p>
    </div>
  );
}

export function Metrics() {
  return (
    <section className="relative overflow-hidden bg-surface-dark1 py-16">
      <div className="glow-orb-brand left-1/2 top-1/2 h-[320px] w-[720px] -translate-x-1/2 -translate-y-1/2" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <MetricItem key={metric.label} metric={metric} />
          ))}
        </div>
      </Container>
    </section>
  );
}
