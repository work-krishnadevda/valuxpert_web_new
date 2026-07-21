import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
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
        min-h-[44px]
        text-sm
        font-medium
        transition-all
        duration-300
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-current
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
      {...props}
    >
      {children}
    </button>
  );
}
