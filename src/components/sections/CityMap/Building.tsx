import { useEffect, useRef, useState } from "react";
import PopupCard from "./PopupCard";
import useFloating from "@/hooks/animations/useFloating";

interface CityBuilding {
  id: number;
  left: { mobile: string; desktop: string };
  top: { mobile: string; desktop: string };
  title: string;
  desc: string;
  status: string;
}

interface BuildingProps {
  building: CityBuilding;
  active: boolean;
}

export default function Building({ building, active }: BuildingProps) {
  const markerRef = useRef<HTMLDivElement>(null);

  useFloating(markerRef, {
    yDistance: 5,
    duration: 2.5,
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 select-none"
      style={{
        left: isMobile ? building.left.mobile : building.left.desktop,
        top: isMobile ? building.top.mobile : building.top.desktop,
      }}
    >
      {active && (
        <PopupCard
          title={building.title}
          desc={building.desc}
          status={building.status}
        />
      )}

      <div
        ref={markerRef}
        className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#c8ff73] border-4 md:border-[6px] border-[#dff8aa] shadow-lg cursor-pointer"
      />
    </div>
  );
}
