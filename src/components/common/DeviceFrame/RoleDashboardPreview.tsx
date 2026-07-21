import {
  BadgeCheck,
  Calculator,
  CheckSquare,
  Landmark,
  LayoutDashboard,
  MapPin,
  Scale,
  ShieldCheck,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import type { Desk } from "@/sections/ActiveDeskSandbox";

const ROLE_VISUALS: Record<string, { Icon: LucideIcon; accent: string }> = {
  admin: { Icon: ShieldCheck, accent: "#8B7CDA" },
  coo: { Icon: LayoutDashboard, accent: "#B7ABEA" },
  "field-engineer": { Icon: MapPin, accent: "#8B7CDA" },
  "draft-manager": { Icon: Calculator, accent: "#B7ABEA" },
  "report-checker": { Icon: CheckSquare, accent: "#8B7CDA" },
  lcto: { Icon: Scale, accent: "#B7ABEA" },
  "approval-authority": { Icon: BadgeCheck, accent: "#8B7CDA" },
  "bank-partner": { Icon: Landmark, accent: "#B7ABEA" },
  "hr-accountant": { Icon: Wallet, accent: "#8B7CDA" },
};

interface RoleDashboardPreviewProps {
  desk: Desk;
  stepIndex: number;
  variant: "desktop" | "mobile";
}

export function RoleDashboardPreview({
  desk,
  stepIndex,
  variant,
}: RoleDashboardPreviewProps) {
  const visual = ROLE_VISUALS[desk.id] ?? { Icon: ShieldCheck, accent: "#8B7CDA" };
  const { Icon, accent } = visual;
  const clampedIndex = Math.min(stepIndex, desk.steps.length - 1);
  const activeStep = desk.steps[clampedIndex];
  const compact = variant === "mobile";

  return (
    <div
      key={desk.id}
      className={`animate-screen-swap flex h-full w-full flex-col bg-gradient-to-br from-surface-dark1 via-surface-dark1 to-[#1a1730] ${
        compact ? "p-3" : "p-5"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="flex h-6 w-6 items-center justify-center rounded-control"
            style={{ backgroundColor: `${accent}26` }}
          >
            <Icon size={compact ? 12 : 14} style={{ color: accent }} />
          </span>
          {!compact && (
            <span className="text-xs font-semibold text-white/90">
              {desk.role}
            </span>
          )}
        </div>
        <span className="flex items-center gap-1 text-[9px] font-medium uppercase tracking-wide text-ink-dark/40">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#61C454]" />
          Live
        </span>
      </div>
      <div className={`mt-3 grid grid-cols-3 gap-1.5 ${compact ? "gap-1" : ""}`}>
        {["Active", "SLA", "Today"].map((label, i) => (
          <div
            key={label}
            className="rounded-control border border-white/10 bg-white/[0.04] px-2 py-1.5"
          >
            <p className="text-[8px] uppercase tracking-wide text-ink-dark/40">
              {label}
            </p>
            <p className="text-[11px] font-semibold text-white/85">
              {[clampedIndex + 1, "98%", desk.steps.length][i]}
            </p>
          </div>
        ))}
      </div>
      <div
        key={`${desk.id}-${clampedIndex}`}
        className="animate-screen-swap mt-3 flex-1 rounded-cell border p-3"
        style={{
          borderColor: `${accent}40`,
          background: `linear-gradient(135deg, ${accent}1f, transparent)`,
        }}
      >
        <p className="text-[8px] font-semibold uppercase tracking-wide" style={{ color: accent }}>
          Step {clampedIndex + 1} of {desk.steps.length}
        </p>
        <p className="mt-1 text-[11px] font-semibold leading-snug text-white">
          {activeStep?.label}
        </p>
        {!compact && (
          <p className="mt-1 text-[9px] leading-snug text-ink-dark/55">
            {activeStep?.detail}
          </p>
        )}

        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full transition-[width] duration-500 ease-out"
            style={{
              width: `${((clampedIndex + 1) / desk.steps.length) * 100}%`,
              backgroundColor: accent,
            }}
          />
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-1">
        {desk.steps.map((step, i) => {
          const done = i < clampedIndex;
          const current = i === clampedIndex;
          return (
            <div key={step.label} className="flex items-center gap-1.5">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  backgroundColor: done || current ? accent : "rgba(255,255,255,0.15)",
                }}
              />
              {!compact && (
                <span
                  className={`truncate text-[8px] ${
                    done || current ? "text-white/70" : "text-ink-dark/30"
                  }`}
                >
                  {step.label}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
