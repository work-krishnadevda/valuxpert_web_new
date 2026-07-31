import { TeamCard } from "./TeamCard";
import { teamMembers } from "@/data/team";

export function TeamRail() {
  return (
    <div className="w-full">
      <div
        className="
          flex
          gap-6
          overflow-x-auto
          pb-2

          snap-x
          snap-mandatory
          scroll-smooth

          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden

          md:justify-center
          md:overflow-visible
        "
      >
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="
              snap-center
              shrink-0

              w-[320px]
              sm:w-[340px]
              md:w-[360px]
              lg:w-[380px]

              transition-transform
              duration-300
            "
          >
            <TeamCard member={member} />
          </div>
        ))}
      </div>

      {/* Mobile Hint */}
      <p className="mt-5 text-center text-xs uppercase tracking-[0.18em] text-ink-muted md:hidden">
        Swipe to explore
      </p>
    </div>
  );
}