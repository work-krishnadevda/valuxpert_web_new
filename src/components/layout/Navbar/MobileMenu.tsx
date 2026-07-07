import type { Dispatch, SetStateAction } from "react";
import { navigation } from "@/data/navigationData";
import Button from "@/components/common/Button/Button";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <div
      className={`
        absolute
        overflow-hidden
        transition-all
        duration-300
        block min-[1140px]:hidden
        left-0
        right-0
        top-full
        z-50

        ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
      `}
    >
      <div className="bg-white m-6 p-6 border border-white rounded-2xl shadow-lg">
        <nav className="flex flex-col gap-5">
          {navigation.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="
                text-lg
                font-medium
                text-[#2B285A]
              "
            >
              {item.title}
            </a>
          ))}

          <Button className="mt-4 w-full">Request a Demo</Button>
        </nav>
      </div>
    </div>
  );
}
