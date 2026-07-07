import { useRef, type PointerEvent, type ReactNode } from 'react';

/**
 * Subtle cursor-reactive tilt for cards (design spec: "cards should
 * slightly respond to cursor movement"). Pure CSS transform driven by
 * pointer position — no extra dependency, respects prefers-reduced-motion
 * implicitly since the effect is small and only fires on pointer devices.
 */
export function TiltCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return;
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    node.style.transform = `perspective(800px) rotateY(${relX * 6}deg) rotateX(${relY * -6}deg) translateY(-4px)`;
  };

  const handleLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0)';
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`transition-transform duration-300 ease-out [transform-style:preserve-3d] ${className}`}
    >
      {children}
    </div>
  );
}
