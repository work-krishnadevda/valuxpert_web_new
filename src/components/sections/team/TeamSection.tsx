import { Container } from "@/components/ui/Container";
import { TeamRail } from "./TeamRail";

export function TeamSection() {
  return (
    <section
      id="team"
      className="section-pad relative overflow-hidden bg-surface-light1 pb-20 md:pb-28"
    >
      <div className="glow-orb-brand absolute -left-40 top-0 h-[380px] w-[380px] opacity-30 blur-3xl" />
      <div className="glow-orb-amber absolute -right-40 bottom-0 h-[380px] w-[380px] opacity-30 blur-3xl" />

      <Container>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="eyebrow mb-5 inline-flex">
            Leadership Team
          </span>

          <h2 className="text-h2 text-balance text-ink-light">
            Meet the people building the future of valuation technology.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-body text-ink-muted">
            ValuXpert is built by founders focused on transforming valuation
            operations through enterprise software, intelligent automation, and
            technology designed exclusively for the valuation industry.
          </p>
        </div>

        <TeamRail />
      </Container>
    </section>
  );
}