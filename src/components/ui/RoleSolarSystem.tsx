import { useMemo } from "react";
import type { SystemRole } from "@/data/content";

export function RoleSolarSystem({
  roles,
  activeRoleId,
  onSelect,
}: {
  roles: SystemRole[];
  activeRoleId: string;
  onSelect: (id: string) => void;
}) {
  const orbits = useMemo(
    () =>
      roles.map((role, i) => ({
        role,
        radius: 78 + i * 30,
        duration: 22 + i * 6,
        angle: (360 / roles.length) * i,
        reverse: i % 2 === 1,
      })),
    [roles],
  );

  return (
    <div className="relative mx-auto flex h-[420px] w-full max-w-[560px] items-center justify-center sm:h-[520px]">
      {orbits.map(({ role, radius }) => (
        <span
          key={`ring-${role.id}`}
          aria-hidden
          className="pointer-events-none absolute rounded-full border border-white/[0.08]"
          style={{ width: radius * 2, height: radius * 2 }}
        />
      ))}

      <div className="relative z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-center shadow-glow sm:h-24 sm:w-24">
        <span className="text-[9px] font-semibold uppercase tracking-wide text-white/90">
          ValuXpert
        </span>
        <span className="text-[9px] font-semibold uppercase tracking-wide text-white/70">
          Core
        </span>
      </div>

      {orbits.map(({ role, radius, duration, angle, reverse }) => {
        const isActive = role.id === activeRoleId;
        return (
          <div
            key={role.id}
            className="pointer-events-none absolute inset-0"
            style={{
              animation: `${reverse ? "orbit-spin-reverse" : "orbit-spin"} ${duration}s linear infinite`,
              animationDelay: `-${(angle / 360) * duration}s`,
            }}
          >
            <div
              className="pointer-events-auto absolute left-1/2 top-1/2"
              style={{
                transform: `translate(-50%, -50%) translate(${radius}px, 0)`,
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  animation: `${reverse ? "orbit-spin" : "orbit-spin-reverse"} ${duration}s linear infinite`,
                  animationDelay: `-${(angle / 360) * duration}s`,
                }}
              >
                <button
                  type="button"
                  onClick={() => onSelect(role.id)}
                  title={role.name}
                  className={`group flex flex-col items-center gap-1.5 rounded-full p-1 transition-transform duration-300 hover:scale-110 ${
                    isActive ? "scale-110" : ""
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border text-[10px] font-bold shadow-nav transition-colors duration-300 sm:h-11 sm:w-11 ${
                      isActive
                        ? "border-accent-action bg-accent-action text-surface-dark1"
                        : role.isAdmin
                          ? "border-brand-400/60 bg-surface-dark2 text-brand-400"
                          : "border-white/15 bg-surface-dark2 text-ink-dark/70 group-hover:border-brand-400/60 group-hover:text-brand-400"
                    }`}
                  >
                    {role.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <span
                    className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide transition-colors duration-300 ${
                      isActive
                        ? "bg-accent-action/20 text-accent-action"
                        : "text-ink-dark/40 group-hover:text-ink-dark/70"
                    }`}
                  >
                    {role.name}
                  </span>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
