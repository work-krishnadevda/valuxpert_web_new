import type { PropsWithChildren } from 'react';

interface ContainerProps {
  className?: string;
}

export function Container({ children, className = '' }: PropsWithChildren<ContainerProps>) {
  return <div className={`mx-auto w-full max-w-content px-6 md:px-10 ${className}`}>{children}</div>;
}
