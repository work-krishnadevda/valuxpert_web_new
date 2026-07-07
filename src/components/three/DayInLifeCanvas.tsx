import { lazy, Suspense, type MutableRefObject } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useLowPowerDevice } from '@/hooks/useLowPowerDevice';
import { SceneFallback } from './SceneFallback';

const DayInLifeScene = lazy(() => import('./DayInLifeScene'));

interface DayInLifeCanvasProps {
  progressRef: MutableRefObject<number>;
}

export function DayInLifeCanvas({ progressRef }: DayInLifeCanvasProps) {
  const reducedMotion = useReducedMotion();
  const lowPower = useLowPowerDevice();

  if (reducedMotion || lowPower) {
    return <SceneFallback label="Office transformation illustration" className="h-full" />;
  }

  return (
    <Suspense fallback={<SceneFallback label="Loading scene" className="h-full" />}>
      <DayInLifeScene progressRef={progressRef} />
    </Suspense>
  );
}
