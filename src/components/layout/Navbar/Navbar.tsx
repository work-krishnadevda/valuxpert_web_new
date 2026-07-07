import { useEffect, useState } from "react";

import Container from "@/components/common/Container/Container";
import Logo from "@/components/common/Logo/Logo";

import NavLinks from "./NavLinks";
import NavActions from "./NavActions";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");

      if (hero) {
        const heroBottom = hero.offsetTop + hero.offsetHeight - 80;
        setShow(window.scrollY <= heroBottom);
      } else {
        setShow(window.scrollY <= window.innerHeight - 80);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky
        top-0
        z-50
        w-full
        bg-[#cbb9ff]
        backdrop-blur-xl
        transition-all
        duration-300
        ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }
      `}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <div className="hidden min-[1071px]:flex items-center gap-10">
            <NavLinks />
            <NavActions />
          </div>

          <div className="block min-[1071px]:hidden">
            <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </Container>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
