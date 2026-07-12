import { useRef, type ReactNode } from "react";
import useBadgeAnimation from "@/hooks/animations/useBadgeAnimation";

interface BadgeProps {
  children?: ReactNode;
  className?: string;
}

export default function Badge({ children }: BadgeProps) {
  const badgeRef = useRef<HTMLDivElement>(null);

  useBadgeAnimation(badgeRef);

  return (
    <div
      ref={badgeRef}
      className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm overflow-hidden"
    >
      <div className="relative h-6 overflow-hidden">
        <div className="badge-text flex flex-col">
          <span>{children}</span>
          <span>{children}</span>
        </div>
      </div>
    </div>
  );
}
