import { navigation } from "@/data/navigationData";

export default function NavLinks() {
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
    </nav>
  );
}
