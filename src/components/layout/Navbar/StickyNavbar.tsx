import { useEffect, useState } from "react";

import Container from "@/components/common/Container/Container";
import Logo from "@/components/common/Logo/Logo";

import NavLinks from "./NavLinks";
import NavActions from "./NavActions";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";

export default function StickyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");

      if (hero) {
        const heroBottom = hero.offsetTop + hero.offsetHeight - 80;
        setShow(window.scrollY > heroBottom);
      } else {
        setShow(window.scrollY > window.innerHeight - 80);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      aria-hidden={!show}
      className={`
        fixed
        inset-x-0
        top-2
        z-[60]
        px-4
        transition-all
        duration-300
        md:top-4
        ${
          show
            ? "translate-y-0 opacity-100"
            : "-translate-y-5 opacity-0 pointer-events-none"
        }
      `}
    >
      <Container>
        <div
          className="
            flex
            h-16
            items-center
            justify-between
            rounded-full
            border
            border-black/5
            bg-white
            px-4
            shadow-lg
            md:h-20
            md:px-8
          "
        >
          {/* Responsive Logo */}
          <Logo className="h-9 w-auto md:h-12" />

          {/* Desktop Navigation */}
          <div className="hidden min-[1140px]:flex items-center gap-10">
            <NavLinks />
            <NavActions />
          </div>

          <div className="min-[1140px]:hidden">
            <MobileMenuButton
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              tabIndex={show ? 0 : -1}
            />
          </div>
        </div>
      </Container>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
