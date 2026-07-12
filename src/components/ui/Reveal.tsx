import type { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

/**
 * Lightweight scroll-reveal primitive. Wrap any card/grid item in this to
 * get a staggered fade-up-on-scroll entrance without pulling in a new
 * animation library. Pairs with the `.reveal-up` utility in globals.css.
 */
export function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'li';
}) {
  const { ref, inView } = useInView<HTMLDivElement>('-80px');

  return (
    <Tag
      ref={ref as never}
      className={`reveal-up ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}
