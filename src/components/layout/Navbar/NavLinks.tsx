import { navigation } from "@/data/navigationData";
import { useContactModal } from "@/lib/ContactModalContext";

export default function NavLinks() {
  const { open } = useContactModal();

  return (
    <nav className="flex items-center gap-8">
      {navigation.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="
            text-[15px]
            font-medium
            text-[#2B285A]
            transition-colors
            hover:text-[#635BFF]
          "
        >
          {item.title}
        </a>
      ))}

      <button
        type="button"
        onClick={open}
        className="
          text-[15px]
          font-medium
          text-[#2B285A]
          transition-colors
          hover:text-[#635BFF]
        "
      >
        Contact
      </button>
    </nav>
  );
}