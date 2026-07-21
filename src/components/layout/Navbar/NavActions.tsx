import Button from "@/components/common/Button/Button";
import { useBookingModal } from "@/lib/BookingModalContext";

export default function NavActions() {
  const { open } = useBookingModal();

  return (
    <div className="hidden lg:flex items-center gap-4">
      <Button
        type="button"
        onClick={open}
        className="
    rounded-xl
    bg-[#EEEFF5]
    px-6
    py-3
    text-[#3A2FDA]
    font-medium
    shadow-sm
    transition-all
    duration-300
    hover:bg-white
    hover:shadow-md
  "
      >
        Request a Demo
      </Button>
    </div>
  );
}
