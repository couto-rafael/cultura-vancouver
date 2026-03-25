import { Globe, ArrowRight, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const cultures = [
  {
    id: 'chinese',
    name: 'Chinese',
    emoji: '🏮',
    tagline: 'Lunar New Year, Dim Sum & Dragon Dances',
    description: 'One of Vancouver\'s largest communities, bringing vibrant traditions from Cantonese and Mandarin cultures, celebrated through food markets, lion dances, lantern festivals, and Chinatown events.',
    eventTypes: ['Lunar New Year Parade', 'Mid-Autumn Festival', 'Dragon Boat Racing', 'Dim Sum Festivals'],
    community: '~400,000',
    color: 'from-red-500 to-rose-600',
    bgLight: 'bg-red-50',
    textAccent: 'text-red-600',
    borderAccent: 'border-red-200',
    eventCount: 24,
  },
  {
    id: 'south-asian',
    name: 'South Asian',
    emoji: '🪔',
    tagline: 'Vaisakhi, Diwali & Bollywood Nights',
    description: 'Surrey and Vancouver\'s South Asian communities celebrate with the world\'s second-largest Vaisakhi parade, Diwali festivals of light, classical dance performances, and authentic culinary events.',
    eventTypes: ['Vaisakhi Parade', 'Diwali Festival', 'Bhangra Competitions', 'Classical Dance Concerts'],
    community: '~250,000',
    color: 'from-orange-500 to-amber-500',
    bgLight: 'bg-orange-50',
    textAccent: 'text-orange-600',
    borderAccent: 'border-orange-200',
    eventCount: 18,
  },
  {
    id: 'latin-american',
    name: 'Latin American',
    emoji: '💃',
    tagline: 'Salsa, Street Food & Soccer Culture',
    description: 'A passionate community celebrating life through music, food, and dance. From Colombian festivals to Mexican cultural weeks, Latin Vancouver brings colour and rhythm to every event.',
    eventTypes: ['Latin Music Festivals', 'Cinco de Mayo', 'Salsa Dance Nights', 'Pan-Latin Food Markets'],
    community: '~80,000',
    color: 'from-yellow-500 to-orange-500',
    bgLight: 'bg-yellow-50',
    textAccent: 'text-yellow-600',
    borderAccent: 'border-yellow-200',
    eventCount: 15,
  },
  {
    id: 'filipino',
    name: 'Filipino',
    emoji: '🌺',
    tagline: 'Fiestas, Lechon & Bayanihan Spirit',
    description: 'The Philippines\' vibrant fiesta culture comes alive in Vancouver, with colourful cultural festivals, traditional folk dances like Tinikling, delicious cuisine, and strong community spirit.',
    eventTypes: ['Filipino Cultural Festival', 'Fiesta sa Vancouver', 'Traditional Dance Shows', 'Filipino Food Fairs'],
    community: '~120,000',
    color: 'from-blue-500 to-sky-500',
    bgLight: 'bg-blue-50',
    textAccent: 'text-blue-600',
    borderAccent: 'border-blue-200',
    eventCount: 12,
  },
  {
    id: 'first-nations',
    name: 'First Nations',
    emoji: '🦅',
    tagline: 'Powwows, Storytelling & Land Connection',
    description: 'The original peoples of this land — Musqueam, Squamish, and Tsleil-Waututh — share their living culture through ceremonial events, storytelling nights, art exhibitions, and traditional knowledge gatherings.',
    eventTypes: ['Powwow Gatherings', 'Storytelling Nights', 'Traditional Art Shows', 'Cultural Walks'],
    community: 'Coast Salish Territory',
    color: 'from-emerald-600 to-teal-600',
    bgLight: 'bg-emerald-50',
    textAccent: 'text-emerald-700',
    borderAccent: 'border-emerald-200',
    eventCount: 20,
  },
  {
    id: 'japanese',
    name: 'Japanese',
    emoji: '🌸',
    tagline: 'Cherry Blossoms, Taiko & Tea Ceremonies',
    description: 'One of Vancouver\'s longest-standing communities, Japanese culture is celebrated through cherry blossom festivals, Nikkei Heritage Day, precision taiko drumming, and elegant cultural exhibitions.',
    eventTypes: ['Cherry Blossom Festival', 'Nikkei Heritage Day', 'Taiko Drumming', 'Traditional Tea Ceremony'],
    community: '~40,000',
    color: 'from-pink-500 to-rose-400',
    bgLight: 'bg-pink-50',
    textAccent: 'text-pink-600',
    borderAccent: 'border-pink-200',
    eventCount: 14,
  },
  {
    id: 'korean',
    name: 'Korean',
    emoji: '🎎',
    tagline: 'K-Pop, Night Markets & Hanbok Fashion',
    description: 'Vancouver\'s Korean community blends traditional and contemporary culture, from traditional Hanbok fashion shows and folk performances to K-Pop showcases and authentic Korean street food nights.',
    eventTypes: ['K-Pop Showcases', 'Korean Night Market', 'Hanbok Fashion Show', 'Korean Film Festival'],
    community: '~45,000',
    color: 'from-violet-500 to-purple-600',
    bgLight: 'bg-violet-50',
    textAccent: 'text-violet-600',
    borderAccent: 'border-violet-200',
    eventCount: 11,
  },
  {
    id: 'italian',
    name: 'Italian',
    emoji: '🍕',
    tagline: 'Commercial Drive, Gelato & La Dolce Vita',
    description: 'Little Italy on Commercial Drive is the heart of Vancouver\'s Italian community, hosting street festivals, wine tastings, authentic food markets, and cultural events celebrating Italian heritage.',
    eventTypes: ['Italian Street Fair', 'Wine & Cheese Events', 'Italian Film Festival', 'Pasta Competitions'],
    community: '~30,000',
    color: 'from-green-600 to-emerald-500',
    bgLight: 'bg-green-50',
    textAccent: 'text-green-700',
    borderAccent: 'border-green-200',
    eventCount: 16,
  },
  {
    id: 'middle-eastern',
    name: 'Middle Eastern',
    emoji: '🕌',
    tagline: 'Eid Celebrations, Mezze & Belly Dance',
    description: 'A diverse tapestry of Arab, Persian, Turkish and other Middle Eastern cultures sharing rich traditions through Eid festivities, Arabic calligraphy workshops, culinary experiences, and musical performances.',
    eventTypes: ['Eid Al-Fitr Festival', 'Persian New Year (Nowruz)', 'Arabic Cultural Days', 'Middle Eastern Food Fair'],
    community: '~50,000',
    color: 'from-amber-600 to-yellow-500',
    bgLight: 'bg-amber-50',
    textAccent: 'text-amber-700',
    borderAccent: 'border-amber-200',
    eventCount: 13,
  },
  {
    id: 'african',
    name: 'African',
    emoji: '🥁',
    tagline: 'Afrobeats, Ubuntu & Vibrant Festivals',
    description: 'Representing over 50 nations, Vancouver\'s African diaspora celebrates through energetic music festivals, traditional dance, storytelling, art exhibitions, and food events showcasing the continent\'s diversity.',
    eventTypes: ['African Heritage Month Events', 'Afrobeats Nights', 'African Art Exhibitions', 'Pan-African Food Festival'],
    community: '~35,000',
    color: 'from-red-600 to-orange-500',
    bgLight: 'bg-red-50',
    textAccent: 'text-red-700',
    borderAccent: 'border-red-200',
    eventCount: 10,
  },
  {
    id: 'vietnamese',
    name: 'Vietnamese',
    emoji: '🍜',
    tagline: 'Tết, Pho & Lantern Festivals',
    description: 'The Vietnamese community brings warmth and festivity through Tết celebrations, lantern-lit mid-autumn festivals, traditional Áo dài fashion shows, and Vancouver\'s best phở and bánh mì experiences.',
    eventTypes: ['Tết (Lunar New Year)', 'Mid-Autumn Lantern Festival', 'Vietnamese Food Festival', 'Cultural Dance Shows'],
    community: '~55,000',
    color: 'from-yellow-600 to-red-500',
    bgLight: 'bg-yellow-50',
    textAccent: 'text-yellow-700',
    borderAccent: 'border-yellow-200',
    eventCount: 9,
  },
  {
    id: 'caribbean',
    name: 'Caribbean',
    emoji: '🏝️',
    tagline: 'Carnival, Reggae & Island Cuisine',
    description: 'Caribbean culture explodes with colour during Vancouver\'s Carib Fest, bringing mas costumes, steel pan music, reggae beats, jerk chicken, and the irresistible energy of island celebrations.',
    eventTypes: ['Carib Fest', 'Caribbean Food Nights', 'Reggae in the Park', 'Steel Pan Concerts'],
    community: '~20,000',
    color: 'from-cyan-500 to-teal-500',
    bgLight: 'bg-cyan-50',
    textAccent: 'text-cyan-700',
    borderAccent: 'border-cyan-200',
    eventCount: 8,
  },
];

export default function CulturesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1e293b] to-[#334155] py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="text-9xl absolute top-4 left-8 select-none">🌍</div>
          <div className="text-8xl absolute bottom-4 right-12 select-none">🌏</div>
          <div className="text-7xl absolute top-8 right-48 select-none">🌎</div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Globe className="w-8 h-8 text-green-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Cultures of Vancouver</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Metro Vancouver is home to over 200 ethnic origins and 150+ languages. Explore the cultural communities that make this city extraordinary.
          </p>
          <div className="flex items-center justify-center space-x-6 text-white/80 text-sm">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              <span>200+ ethnicities</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              <span>150+ languages spoken</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              <span>48% foreign-born residents</span>
            </div>
          </div>
        </div>
      </div>

      {/* Culture Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cultures.map(culture => (
            <div
              key={culture.id}
              onClick={() => navigate(`/explore?culture=${encodeURIComponent(culture.name)}`)}
              className={`group bg-white rounded-2xl border-2 ${culture.borderAccent} shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden`}
            >
              <div className={`bg-gradient-to-br ${culture.color} p-6 flex items-center space-x-4`}>
                <div className="text-5xl">{culture.emoji}</div>
                <div>
                  <h3 className="text-xl font-bold text-white">{culture.name}</h3>
                  <p className="text-white/80 text-sm">{culture.tagline}</p>
                </div>
              </div>

              <div className="p-5">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{culture.description}</p>

                <div className={`${culture.bgLight} rounded-xl p-4 mb-4`}>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Popular Event Types</p>
                  <div className="space-y-1">
                    {culture.eventTypes.slice(0, 3).map(type => (
                      <div key={type} className="flex items-center space-x-2">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${culture.color} flex-shrink-0`} />
                        <span className="text-sm text-gray-700">{type}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Users className="w-3.5 h-3.5" />
                      <span>{culture.community}</span>
                    </div>
                    <span className={`font-semibold ${culture.textAccent}`}>{culture.eventCount} events</span>
                  </div>
                  <div className={`flex items-center space-x-1 ${culture.textAccent} text-sm font-semibold group-hover:translate-x-1 transition-transform`}>
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#1e293b] to-[#334155] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Culture Listed?</h2>
          <p className="text-gray-300 mb-8">Cultura Vancouver is community-powered. Submit your cultural event and help others discover your heritage.</p>
          <button
            onClick={() => navigate('/create-event')}
            className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold transition flex items-center space-x-2 mx-auto"
          >
            <span>Submit a Cultural Event</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
