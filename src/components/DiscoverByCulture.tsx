import { Globe } from 'lucide-react';

interface Culture {
  id: number;
  name: string;
  icon: string;
  eventCount: number;
}

const cultures: Culture[] = [
  {
    id: 1,
    name: 'Chinese',
    icon: '🏮',
    eventCount: 24
  },
  {
    id: 2,
    name: 'Indian',
    icon: '🪔',
    eventCount: 18
  },
  {
    id: 3,
    name: 'Latin American',
    icon: '💃',
    eventCount: 15
  },
  {
    id: 4,
    name: 'Filipino',
    icon: '🌺',
    eventCount: 12
  },
  {
    id: 5,
    name: 'First Nations',
    icon: '🦅',
    eventCount: 20
  },
  {
    id: 6,
    name: 'European',
    icon: '🏰',
    eventCount: 16
  },
  {
    id: 7,
    name: 'Japanese',
    icon: '🎋',
    eventCount: 14
  },
  {
    id: 8,
    name: 'Korean',
    icon: '🎎',
    eventCount: 11
  },
  {
    id: 9,
    name: 'Middle Eastern',
    icon: '🕌',
    eventCount: 13
  },
  {
    id: 10,
    name: 'African',
    icon: '🥁',
    eventCount: 10
  },
  {
    id: 11,
    name: 'Vietnamese',
    icon: '🏮',
    eventCount: 9
  },
  {
    id: 12,
    name: 'Caribbean',
    icon: '🏝️',
    eventCount: 8
  }
];

export default function DiscoverByCulture() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Globe className="w-10 h-10 text-green-500 mr-3" />
            <h2 className="text-4xl font-bold text-[#1e293b]">Discover by Culture</h2>
          </div>
          <p className="text-xl text-gray-600">Explore events from diverse cultural communities</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {cultures.map((culture) => (
            <button
              key={culture.id}
              className="group bg-gray-50 hover:bg-green-50 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="text-5xl mb-3">{culture.icon}</div>
              <h3 className="text-lg font-semibold text-[#1e293b] mb-1 group-hover:text-green-600 transition">
                {culture.name}
              </h3>
              <p className="text-sm text-gray-500">{culture.eventCount} events</p>
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#1e293b] hover:bg-[#334155] text-white rounded-lg font-semibold text-lg transition">
            Browse All Cultures
          </button>
        </div>
      </div>
    </section>
  );
}
