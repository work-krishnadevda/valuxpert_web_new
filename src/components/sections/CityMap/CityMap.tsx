import city from "@/assets/images/city.webp";
import Building from "./Building";
import { CITY_BUILDINGS } from "@/data/cityMapData";
import usePopupCycle from "@/hooks/animations/usePopupCycle";

export default function CityMap() {
  const activeId = usePopupCycle(CITY_BUILDINGS.length, 2500);

  return (
    <section className="bg-[#7c73ee]">
      <div
        className="
          overflow-x-auto
          overflow-y-hidden
          scrollbar-none
          touch-pan-x
        "
      >
        <div
          className="relative min-w-[900px] lg:min-w-full
          pt-21
    sm:pt-48
    md:pt-62
    lg:pt-58
    xl:pt-42
    2xl:pt-32
  "
        >
          <img
            src={city}
            alt="Illustrated city skyline representing ValuXpert's field coverage"
            width={1600}
            height={676}
            loading="lazy"
            decoding="async"
            className="block w-full h-auto select-none pointer-events-none"
          />

          {CITY_BUILDINGS.map((building, index) => (
            <Building
              key={building.id}
              building={building}
              active={index === activeId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
