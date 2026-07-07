import { Menu, X } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

interface MobileMenuButtonProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenuButton({
  isOpen,
  setIsOpen,
}: MobileMenuButtonProps) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
      "
    >
      {isOpen ? <X size={22} /> : <Menu size={22} />}
    </button>
  );
}
