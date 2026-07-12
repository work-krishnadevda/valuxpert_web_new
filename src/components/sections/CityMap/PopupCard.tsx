import { CheckCircle2 } from "lucide-react";

interface PopupCardProps {
  title?: string;
  desc?: string;
  status?: string;
}

export default function PopupCard({ title, desc, status }: PopupCardProps) {
  return (
    <div
      className="
        absolute
        bottom-6
        left-1/2
        -translate-x-1/2

        w-52
        sm:w-60
        md:w-64

        rounded-xl
        md:rounded-2xl

        bg-[#2B2850]/95
        backdrop-blur-xl

        p-3
        sm:p-4
        md:p-5

        shadow-2xl
        z-20
      "
    >
      <h4
        className="
          mb-3
          text-sm
          sm:text-base
          md:text-lg
          font-bold
          text-white
        "
      >
        {title}
      </h4>

      <div
        className="
          flex
          items-start
          justify-between
          gap-2

          rounded-lg
          md:rounded-xl

          bg-white/5

          p-2
          sm:p-3
        "
      >
        <div className="flex items-start gap-2 flex-1">
          <CheckCircle2 className="mt-0.5 shrink-0 text-white" size={16} />

          <p
            className="
              text-[11px]
              sm:text-xs
              md:text-sm

              leading-relaxed
              text-white
            "
          >
            {desc}
          </p>
        </div>

        <span
          className="
            shrink-0

            rounded-md
            bg-lime-300

            px-2
            py-1

            text-[10px]
            sm:text-xs

            font-bold
            text-black
          "
        >
          {status}
        </span>
      </div>

      <div
        className="
          absolute
          left-1/2
          -bottom-2
          h-3
          w-3
          -translate-x-1/2
          rotate-45
          bg-[#2B2850]
        "
      />
    </div>
  );
}
