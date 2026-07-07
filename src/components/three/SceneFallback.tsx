interface SceneFallbackProps {
  label: string;
  className?: string;
}

/**
 * Rendered instead of a WebGL canvas when the visitor has reduced-motion set,
 * is on a detected low-power device, or while the real scene lazy-loads.
 * Mirrors the final composition closely enough that there's no layout jump.
 */
export function SceneFallback({ label, className = '' }: SceneFallbackProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-card border border-white/10 bg-gradient-to-br from-surface-dark2 via-surface-dark1 to-brand-600/40 ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="flex flex-col items-center gap-3 p-10 text-center">
        <div className="h-12 w-12 animate-pulse rounded-full bg-brand-400/30" />
        <p className="text-nav text-ink-dark/60">{label}</p>
      </div>
    </div>
  );
}
