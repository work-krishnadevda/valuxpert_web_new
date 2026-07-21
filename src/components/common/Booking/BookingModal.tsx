import { useEffect, useRef } from "react";
import gsap from "gsap";
import { X } from "lucide-react";

import BookingTabs from "./BookingTabs";
import { useBookingModal } from "@/lib/BookingModalContext";

export default function BookingModal() {
  const { isOpen, close } = useBookingModal();

  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.25,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      modalRef.current,
      {
        opacity: 0,
        y: 40,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power3.out",
      }
    );

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      window.scrollTo(0, scrollY);
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-md p-4 lg:p-8"
      onMouseDown={(e) => {
        if (e.target === overlayRef.current) {
          close();
        }
      }}
    >
      <div className="flex h-full items-center justify-center">
        <div
          ref={modalRef}
          className="relative flex h-full max-h-[95vh] w-full max-w-6xl flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_40px_120px_rgba(15,23,42,.22)]"
        >
          <button
            onClick={close}
            aria-label="Close booking modal"
            className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105"
          >
            <X size={20} />
          </button>

          <div
            ref={scrollRef}
            data-lenis-prevent
            className="premium-scroll flex-1 overflow-y-auto p-6 sm:p-8 lg:p-10"
          >
            <div className="mb-8">
              <span className="inline-flex rounded-full bg-[#F3F0FF] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#635BFF]">
                Schedule Meeting
              </span>

              <h2 className="mt-5 text-3xl font-bold text-[#2B285A]">
                Book a Live Demo
              </h2>

              <p className="mt-3 max-w-2xl text-gray-600">
                Choose the meeting type that best suits your requirements and
                schedule a convenient time with our team.
              </p>
            </div>

            <BookingTabs />
          </div>
        </div>
      </div>
    </div>
  );
} 