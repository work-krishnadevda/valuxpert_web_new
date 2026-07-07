import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function Button({ children, className, variant = "primary" }: ButtonProps) {
  return (
    <button
      className={cn(
        `
        inline-flex
        items-center
        justify-center
        rounded-xl
        px-6
        py-3
        text-sm
        font-medium
        transition-all
        duration-300
        `,
        variant === "primary" &&
          `
          bg-primary
          text-white
          hover:opacity-90
        `,
        variant === "secondary" &&
          `
          border
          border-slate-200
          bg-white
          hover:bg-slate-50
        `,
        className,
      )}
    >
      {children}
    </button>
  );
}
