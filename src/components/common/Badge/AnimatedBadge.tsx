import { useRef, type ReactNode } from "react";
import Badge from "./Badge";
import logo from "@/assets/logos/logo.webp";
import useBadgeAnimation from "@/hooks/animations/useBadgeAnimation";

interface AnimatedBadgeProps {
  children?: ReactNode;
}

export default function AnimatedBadge(_props: AnimatedBadgeProps) {
  const badgeRef = useRef<HTMLDivElement>(null);

  useBadgeAnimation(badgeRef);

  return (
    <Badge className="bg-[#bfbdce] px-9 py-6">
      <div className="flex items-center gap-2">
        <div ref={badgeRef} className="relative h-6 overflow-hidden w-[95px]">
          <div className="badge-slider flex flex-col">
            <div className="h-6 flex items-center justify-center">
              <span className="font-bold text-lg">ValuXpert</span>
            </div>

            <div className="h-6 flex items-center justify-center">
              <img src={logo} alt="" width={96} height={24} decoding="async" className="h-6 w-auto" />
            </div>
          </div>
        </div>

        <span className="font-medium">Platform</span>
      </div>
    </Badge>
  );
}
