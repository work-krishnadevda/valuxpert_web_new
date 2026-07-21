import logo from "@/assets/logos/logo.webp";

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
    <a href="#hero" aria-label="ValuXpert — go to homepage">
      <img
        src={logo}
        alt={alt}
        width={161}
        height={40}
        fetchPriority="high"
        decoding="async"
        className={className}
        style={{ height, width: "auto", display: "block" }}
      />
    </a>
  );
}
