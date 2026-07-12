import type { ReactNode } from "react";
import { useIsDesktopViewport } from "@/hooks/useIsDesktopViewport";

interface FrameProps {
  children: ReactNode;
  className?: string;
}

export function MonitorFrame({ children, className = "" }: FrameProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative rounded-cell border border-white/10 bg-gradient-to-b from-surface-dark2 to-[#101010] p-3 shadow-light">
        <div className="pointer-events-none absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-brand-400/70 to-transparent" />
        <div className="overflow-hidden rounded-control border border-white/10 bg-surface-dark1">
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#181818] px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-[#EE6A5F]" />
            <span className="h-2 w-2 rounded-full bg-[#F5BD4F]" />
            <span className="h-2 w-2 rounded-full bg-[#61C454]" />
            <span className="ml-2 text-[10px] font-medium text-ink-dark/40">
              https://www.valuxpert.in/
            </span>
          </div>
          <div className="aspect-[16/10] w-full overflow-hidden">
            {children}
          </div>
        </div>
      </div>

      <div className="mx-auto h-4 w-16 bg-gradient-to-b from-[#141414] to-[#0a0a0a]" />
      <div className="mx-auto h-1.5 w-28 rounded-full bg-gradient-to-b from-[#1E1E1E] to-[#0a0a0a] shadow-light" />
    </div>
  );
}

export function PhoneFrame({ children, className = "" }: FrameProps) {
  return (
    <div className={`relative mx-auto w-[220px] ${className}`}>
      <div className="relative rounded-[2.25rem] border border-white/10 bg-gradient-to-b from-surface-dark2 to-[#101010] p-2 shadow-light">
        <div className="pointer-events-none absolute inset-x-10 -top-px h-px bg-gradient-to-r from-transparent via-brand-400/70 to-transparent" />
        <div className="relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-surface-dark1">
          <div className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-[#0a0a0a]" />
          <div className="aspect-[9/19.5] w-full overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ResponsiveDeviceFrame({
  renderContent,
}: {
  renderContent: (variant: "desktop" | "mobile") => ReactNode;
}) {
  const isDesktop = useIsDesktopViewport();

  return isDesktop ? (
    <MonitorFrame>{renderContent("desktop")}</MonitorFrame>
  ) : (
    <PhoneFrame>{renderContent("mobile")}</PhoneFrame>
  );
}
