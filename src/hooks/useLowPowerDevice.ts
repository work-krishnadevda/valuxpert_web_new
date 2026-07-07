import { useEffect, useState } from 'react';

/**
 * Cheap heuristic used to decide whether a visitor gets the full WebGL scene
 * or the static rendered fallback: coarse pointer (touch-first device),
 * low logical core count, or reduced-data preference are strong enough
 * signals to skip a WebGL canvas without needing a live FPS probe.
 */
export function useLowPowerDevice(): boolean {
  const [lowPower, setLowPower] = useState(false);

  useEffect(() => {
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const fewCores =
      typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 4;
    const saveData =
      'connection' in navigator &&
      // @ts-expect-error — experimental Network Information API, guarded at runtime
      Boolean(navigator.connection?.saveData);

    setLowPower(Boolean((coarsePointer && fewCores) || saveData));
  }, []);

  return lowPower;
}
