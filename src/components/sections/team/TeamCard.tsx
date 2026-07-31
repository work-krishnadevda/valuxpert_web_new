import { memo } from "react";
import { Linkedin } from "lucide-react";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  linkedin: string;
  tags: string[];
}

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard = memo(function TeamCard({
  member,
}: TeamCardProps) {
  return (
    <article
      className="
        group
        relative
        overflow-visible
      "
    >
      <div className="relative overflow-visible">

        <div className="relative h-[460px] overflow-hidden rounded-[30px] shadow-xl">
          <img
            src={member.image}
            alt={member.name}
            className="
              h-full
              w-full
              object-cover
              object-top

              transition-transform
              duration-700
              ease-[cubic-bezier(.22,1,.36,1)]

              group-hover:scale-105
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        </div>

        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} LinkedIn`}
          className="
            absolute
            right-4
            top-4
            z-40

            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-full

            border
            border-white/20

            bg-white/20

            text-white

            backdrop-blur-xl

            transition-all
            duration-300

            hover:scale-110
            hover:bg-white
            hover:text-[#0A66C2]
          "
        >
          <Linkedin size={18} />
        </a>

        <div
          className="
            absolute

            left-4
            right-4
            bottom-4

            z-30

            overflow-hidden

            rounded-[24px]

            border
            border-white/20

            bg-white/15

            backdrop-blur-2xl

            shadow-xl

            max-h-[84px]

            transition-all
            duration-500
            ease-[cubic-bezier(.22,1,.36,1)]

            group-hover:max-h-[280px]
          "
        >
          <div className="p-5">
            <h3 className="text-xl font-semibold text-white">
              {member.name}
            </h3>

            <p className="mt-1 text-sm text-white/85">
              {member.role}
            </p>

            <div
              className="
                mt-5
                border-t
                border-white/20
                pt-5

                opacity-0
                translate-y-2

                transition-all
                duration-300
                delay-150

                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              <p className="text-[14px] leading-7 text-white/95">
                {member.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
});