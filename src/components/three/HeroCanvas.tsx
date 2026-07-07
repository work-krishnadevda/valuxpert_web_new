import { lazy, Suspense } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useLowPowerDevice } from '@/hooks/useLowPowerDevice';
import { useInView } from '@/hooks/useInView';
import { SceneFallback } from './SceneFallback';

const HeroScene = lazy(() => import('./HeroScene'));

export function HeroCanvas() {
  const reducedMotion = useReducedMotion();
  const lowPower = useLowPowerDevice();
  const { ref, inView } = useInView<HTMLDivElement>('400px');
  const useStaticFallback = reducedMotion || lowPower;

  return (
    <div ref={ref} className="relative h-[420px] w-full md:h-[480px]">
      {useStaticFallback || !inView ? (
        <SceneFallback label="ValuXpert live operations dashboard" className="h-full" />
      ) : (
        <Suspense fallback={<SceneFallback label="Loading dashboard" className="h-full" />}>
          <HeroScene />
        </Suspense>
      )}
    </div>
  );
}
