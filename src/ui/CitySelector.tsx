import { MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";
import { CITIES } from "../constants/cities";
import { loadPersisted, savePersisted, STORAGE_KEYS } from "../store/persist";

type City = (typeof CITIES)[number];

function isCity(value: unknown): value is City {
  return typeof value === "string" && CITIES.includes(value as City);
}

function CitySelector() {
  const [selectedCity, setSelectedCity] = useState<City>(() => {
    const stored = loadPersisted<unknown>(STORAGE_KEYS.city, CITIES[0]);
    return isCity(stored) ? stored : CITIES[0];
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectCity = (city: City) => {
    setSelectedCity(city);
    savePersisted(STORAGE_KEYS.city, city);
    setIsOpen(false);
  };

  return (
    <div className="relative shrink-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex max-w-28 cursor-pointer items-center gap-1.5 text-sm text-gray-700 sm:max-w-32 sm:gap-2"
      >
        <MapPin size={18} className="shrink-0" />
        <span className="truncate">{selectedCity}</span>
        <ChevronDown
          size={16}
          className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-3 w-40 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
          {CITIES.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => handleSelectCity(city)}
              className="w-full rounded-lg px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              {city}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CitySelector;
