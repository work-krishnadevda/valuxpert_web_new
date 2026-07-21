import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { systemRoles, pipelineNodes } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { RoleSolarSystem } from "@/components/ui/RoleSolarSystem";
import { ShieldCheck } from "lucide-react";
import { useActiveDesk } from "@/lib/ActiveDeskContext";

const roleToNodeId: Record<string, string> = {
  admin: "admin-controls",
  coo: "intake-ingestion",
  "field-engineer": "gps-survey",
  "draft-manager": "calculations-draft",
  "report-checker": "checker-qa-audit",
  lcto: "lcto-verification",
  "approval-authority": "hsm-sign",
  "bank-partner": "bank-submission",
  "hr-accountant": "claims-muster",
};

export function RoleInfrastructure() {
  const [activeRoleId, setActiveRoleId] = useState("lcto");
  const [liveFlow, setLiveFlow] = useState(true);
  const { requestDesk } = useActiveDesk();

  const handleRoleSelect = (id: string) => {
    setActiveRoleId(id);
    requestDesk(id);
    document.getElementById("active-desk")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const activeNodeId = roleToNodeId[activeRoleId];

  const nodes = useMemo(
    () =>
      pipelineNodes.map((node) => ({
        ...node,
        status:
          node.id === activeNodeId
            ? ("active" as const)
            : node.status === "active"
              ? ("passed" as const)
              : node.status,
      })),
    [activeNodeId],
  );

  return (
    <section id="pipeline" className="section-pad bg-surface-light1">
      <Container className="flex flex-col gap-4">
        <span className="eyebrow w-fit">Real Operations Emulator</span>
        <h2 className="text-h2 text-balance text-ink-light">
          Precision Role-Based Infrastructure
        </h2>
        <p className="max-w-2xl text-body text-ink-muted">
          ValuXpert enforces distinct, cryptographic authorization boundaries
          conforming to standard operating procedures. Select a role to test its
          real workspace duties.
        </p>
      </Container>

      <Container className="mt-10">
        <div className="overflow-hidden rounded-t-card rounded-b-none border border-ink-light/10 bg-white">
          {systemRoles.map((role) => {
            const isActive = role.id === activeRoleId;
            return (
              <button
                key={role.id}
                type="button"
                onClick={() => handleRoleSelect(role.id)}
                className={`flex w-full flex-col gap-3 border-t border-ink-light/10 px-6 py-5 text-left transition-colors duration-300 first:border-t-0 sm:flex-row sm:items-center sm:justify-between ${
                  isActive ? "bg-brand-500/[0.06]" : "hover:bg-ink-light/[0.02]"
                }`}
              >
                <div className="flex items-start gap-3 sm:items-center">
                  <span
                    className={`h-2.5 w-2.5 shrink-0 rounded-full ${isActive ? "bg-accent-action" : "bg-brand-500/40"}`}
                  />
                  <div>
                    <p
                      className={`text-nav font-semibold ${role.isAdmin ? "text-accent-actionDark" : "text-ink-light"}`}
                    >
                      {role.name}
                    </p>
                    <p className="mt-0.5 max-w-xl text-sm text-ink-muted">
                      {role.description}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-3 pl-6 sm:pl-0">
                  <span className="rounded-full bg-surface-light2 px-3 py-1 text-[11px] uppercase tracking-wide text-ink-muted">
                    {role.scopeTag}
                  </span>
                  <span
                    className={`rounded-control px-4 py-2 text-xs font-semibold ${
                      isActive
                        ? "bg-brand-500 text-white"
                        : "border border-ink-light/15 text-ink-light"
                    }`}
                  >
                    {isActive ? "Active Workspace" : "Click to Test"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="relative overflow-hidden rounded-t-none rounded-b-card bg-surface-dark1 p-6 md:p-8">
          <div className="glow-orb-brand left-0 top-0 h-[260px] w-[380px] -translate-x-1/3 -translate-y-1/3" />
          <p className="text-nav font-semibold text-white">Role System</p>
          <p className="max-w-md text-xs text-ink-dark/60">
            Every role orbits the same operational core. Click a planet to
            switch the active workspace below.
          </p>
          <div className="relative mt-8 mb-8">
            {/* Mobile Marquee */}
            <div className="overflow-hidden md:hidden">
              <div className="flex w-max animate-[marquee_20s_linear_infinite] gap-3">
                {[...systemRoles, ...systemRoles].map((role, index) => {
                  const isActive = role.id === activeRoleId;

                  return (
                    <button
                      key={`${role.id}-${index}`}
                      onClick={() => handleRoleSelect(role.id)}
                      className={`min-w-[180px] rounded-xl border px-4 py-3 text-left transition-all ${
                        isActive
                          ? "border-brand-400 bg-brand-500/10"
                          : "border-white/10 bg-surface-dark2"
                      }`}
                    >
                      <p className="text-sm font-semibold text-white">
                        {role.name}
                      </p>

                      <p className="mt-1 text-xs text-ink-dark/60">
                        {role.scopeTag}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="hidden md:flex justify-center mb-8 mt-16">
              <RoleSolarSystem
                roles={systemRoles}
                activeRoleId={activeRoleId}
                onSelect={handleRoleSelect}
              />
            </div>
          </div>

          <div className="relative mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-brand-400" />
              <div>
                <p className="text-nav font-semibold text-white">
                  Interactive Operational Pipeline Map
                </p>
                <p className="text-xs text-ink-dark/60">
                  Standard Operating Procedure (SOP) path
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setLiveFlow((v) => !v)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                liveFlow
                  ? "bg-brand-500/20 text-brand-400"
                  : "bg-white/10 text-ink-dark/50"
              }`}
            >
              {liveFlow ? "● Live Flow Highlighting" : "Flow Highlighting Off"}
            </button>
          </div>

          <p className="mb-6 max-w-2xl text-sm text-ink-dark/60">
            The flowchart represents the sequential compliance pipeline of
            ValuXpert. Data flows in a single secure trajectory from
            configuration to banking credit dispatch.
          </p>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-9">
            {nodes.map((node) => (
              <div
                key={`${activeRoleId}-${node.id}`}
                className={`reveal-fade is-visible flex flex-col gap-3 rounded-cell border p-4 transition-all duration-500 ${
                  node.status === "active"
                    ? "border-brand-400 bg-brand-500/10 shadow-glow"
                    : node.status === "passed"
                      ? "border-white/10 bg-surface-dark2"
                      : "border-white/5 bg-surface-dark2/60 opacity-70"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-ink-dark/50">
                    {node.code}
                  </span>
                  {node.status === "active" ? (
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-400" />
                  ) : null}
                </div>
                <Icon
                  name={node.icon}
                  className={
                    node.status === "active"
                      ? "text-brand-400"
                      : "text-ink-dark/60"
                  }
                />
                <p className="text-xs font-semibold leading-tight text-white">
                  {node.title}
                </p>
                <span
                  className={`text-[10px] font-semibold uppercase ${
                    node.status === "active"
                      ? "text-brand-400"
                      : node.status === "passed"
                        ? "text-ink-dark/50"
                        : "text-ink-dark/30"
                  }`}
                >
                  {node.status === "active"
                    ? "Active Work"
                    : node.status === "passed"
                      ? "Passed ✓"
                      : "Queued"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
