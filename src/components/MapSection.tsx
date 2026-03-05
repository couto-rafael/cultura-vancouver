import { MapPin } from 'lucide-react';
import { useState } from 'react';

interface Location {
  id: number;
  name: string;
  eventCount: number;
  x: string;
  y: string;
}

const locations: Location[] = [
  { id: 1, name: 'Vancouver', eventCount: 45, x: '48%', y: '45%' },
  { id: 2, name: 'Richmond', eventCount: 28, x: '45%', y: '58%' },
  { id: 3, name: 'Burnaby', eventCount: 32, x: '55%', y: '42%' },
  { id: 4, name: 'Surrey', eventCount: 24, x: '62%', y: '55%' },
  { id: 5, name: 'North Vancouver', eventCount: 18, x: '50%', y: '32%' }
];

export default function MapSection() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1e293b] mb-4">Events Across Metro Vancouver</h2>
          <p className="text-xl text-gray-600">Discover cultural events happening in your neighborhood</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="relative bg-gradient-to-br from-blue-100 to-green-100 rounded-xl h-96 md:h-[500px] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-lg font-medium">
              Metro Vancouver Map
            </div>

            {locations.map((location) => (
              <button
                key={location.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: location.x, top: location.y }}
                onMouseEnter={() => setSelectedLocation(location)}
                onMouseLeave={() => setSelectedLocation(null)}
              >
                <div className="relative">
                  <MapPin className="w-10 h-10 text-green-500 hover:text-green-600 transition-all duration-300 filter drop-shadow-lg group-hover:scale-125" />
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {location.eventCount}
                  </div>
                </div>

                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap transition-all duration-200 ${
                  selectedLocation?.id === location.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}>
                  <div className="text-sm font-semibold text-[#1e293b]">{location.name}</div>
                  <div className="text-xs text-gray-600">{location.eventCount} events</div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
            {locations.map((location) => (
              <div
                key={location.id}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-green-50 transition cursor-pointer"
              >
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="w-5 h-5 text-green-500 mr-1" />
                  <span className="font-semibold text-[#1e293b]">{location.name}</span>
                </div>
                <div className="text-sm text-gray-600">{location.eventCount} events</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
