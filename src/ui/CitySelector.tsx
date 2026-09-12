import { MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";
import { CITIES } from "../constants/cities";

type City = (typeof CITIES)[number];

function CitySelector() {
  const [selectedCity, setSelectedCity] = useState<City>(CITIES[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* The button that opens the city selection */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm text-gray-700"
      >
        <MapPin size={18} />

        <span>{selectedCity}</span>

        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* The list of cities */}
      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-3 w-40 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
          {CITIES.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => {
                setSelectedCity(city);
                setIsOpen(false);
              }}
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