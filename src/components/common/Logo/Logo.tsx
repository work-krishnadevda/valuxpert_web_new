import logo from "@/assets/logos/logo.png";

interface LogoProps {
  height?: number;
  className?: string;
  alt?: string;
}

export default function Logo({
  height = 48,
  className = "",
  alt = "ValuXpert",
}: LogoProps) {
  return (
    <img
      src={logo}
      alt={alt}
      className={className}
      style={{ height, width: "auto", display: "block" }}
    />
  );
}
