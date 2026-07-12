import { useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";
import { navigation } from "@/data/navigationData";
import Button from "@/components/common/Button/Button";
import { useContactModal } from "@/lib/ContactModalContext";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const { open } = useContactModal();

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className={`
        absolute
        overflow-y-auto
        overscroll-contain
        transition-all
        duration-300
        block min-[1140px]:hidden
        left-0
        right-0
        top-full
        z-50

        ${isOpen ? "max-h-[calc(100dvh-4.5rem)] opacity-100" : "max-h-0 opacity-0"}
      `}
    >
      <div className="m-3 rounded-2xl border border-white bg-white p-5 shadow-lg sm:m-6 sm:p-6">
        <nav className="flex flex-col gap-1">
          {navigation.map((item) => (
            <a
              key={item.title}
              href={item.href}
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
              className="
                rounded-lg
                px-2
                py-3
                text-base
                font-medium
                text-[#2B285A]
                transition-colors
                hover:bg-black/5
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#3A2FDA]
                sm:text-lg
              "
            >
              {item.title}
            </a>
          ))}

          <Button
            type="button"
            tabIndex={isOpen ? 0 : -1}
            onClick={() => {
              setIsOpen(false);
              open();
            }}
            className="mt-3 w-full"
          >
            Request a Demo
          </Button>
        </nav>
      </div>
    </div>
  );
}
