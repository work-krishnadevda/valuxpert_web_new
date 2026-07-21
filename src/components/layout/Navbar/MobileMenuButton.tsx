import { Menu, X } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

interface MobileMenuButtonProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  tabIndex?: number;
  controlsId?: string;
}

export default function MobileMenuButton({
  isOpen,
  setIsOpen,
  tabIndex,
  controlsId = "mobile-menu",
}: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      tabIndex={tabIndex}
      aria-expanded={isOpen}
      aria-controls={controlsId}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="
        flex
        h-11
        w-11
        shrink-0
        items-center
        justify-center
        rounded-xl
        transition-colors
        hover:bg-black/5
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-[#3A2FDA]
      "
    >
      {isOpen ? <X size={22} /> : <Menu size={22} />}
    </button>
  );
}
