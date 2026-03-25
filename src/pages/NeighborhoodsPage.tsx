import { MapPin, ArrowRight, Users, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { events } from "../data/events";

const neighborhoods = [
  {
    id: "vancouver",
    name: "Vancouver",
    description:
      "The cultural heart of Metro Vancouver, home to world-class festivals, vibrant Chinatown, Little Italy on Commercial Drive, and countless community celebrations.",
    highlights: [
      "Chinatown",
      "Commercial Drive",
      "Granville Island",
      "Gastown",
    ],
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    accentColor: "text-blue-600",
    image:
      "https://images.pexels.com/photos/2975307/pexels-photo-2975307.jpeg?auto=compress&cs=tinysrgb&w=800",
    population: "662,000",
    culturalGroups: "40+",
  },
  {
    id: "richmond",
    name: "Richmond",
    description:
      "Canada's most diverse city, celebrated for its authentic Asian cuisine, vibrant Lunar New Year festivities, and the acclaimed Night Market.",
    highlights: [
      "Richmond Night Market",
      "Steveston Village",
      "Golden Village",
      "Aberdeen Centre",
    ],
    color: "from-red-500 to-pink-600",
    bgColor: "bg-red-50",
    accentColor: "text-red-600",
    image:
      "https://images.pexels.com/photos/3680316/pexels-photo-3680316.jpeg?auto=compress&cs=tinysrgb&w=800",
    population: "209,000",
    culturalGroups: "35+",
  },
  {
    id: "burnaby",
    name: "Burnaby",
    description:
      "A multicultural hub with a thriving arts scene, Simon Fraser University's cultural programs, and diverse community festivals throughout the year.",
    highlights: ["Metrotown", "SFU", "Edmonds", "Highgate"],
    color: "from-green-500 to-teal-600",
    bgColor: "bg-green-50",
    accentColor: "text-green-600",
    image:
      "https://images.pexels.com/photos/2707756/pexels-photo-2707756.jpeg?auto=compress&cs=tinysrgb&w=800",
    population: "249,000",
    culturalGroups: "30+",
  },
  {
    id: "surrey",
    name: "Surrey",
    description:
      "BC's fastest-growing city with a rich South Asian cultural presence, celebrated through Vaisakhi parade — one of the largest outside India.",
    highlights: ["Guildford", "Newton", "Cloverdale", "South Surrey"],
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    accentColor: "text-orange-600",
    image:
      "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800",
    population: "568,000",
    culturalGroups: "38+",
  },
  {
    id: "north-vancouver",
    name: "North Vancouver",
    description:
      "Nestled between mountains and sea, North Vancouver blends Indigenous heritage with outdoor festival culture and coastal community events.",
    highlights: [
      "Lonsdale Quay",
      "Lynn Valley",
      "Deep Cove",
      "Shipyard District",
    ],
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    accentColor: "text-purple-600",
    image:
      "https://images.pexels.com/photos/5214407/pexels-photo-5214407.jpeg?auto=compress&cs=tinysrgb&w=800",
    population: "90,000",
    culturalGroups: "20+",
  },
  {
    id: "new-westminster",
    name: "New Westminster",
    description:
      "BC's oldest city combines colonial heritage with a growing multicultural community, known for its vibrant waterfront festivals and Hyack parade.",
    highlights: ["Quay Market", "Downtown", "Uptown", "Sapperton"],
    color: "from-teal-500 to-cyan-600",
    bgColor: "bg-teal-50",
    accentColor: "text-teal-600",
    image:
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
    population: "79,000",
    culturalGroups: "25+",
  },
];

export default function NeighborhoodsPage() {
  const navigate = useNavigate();

  const getEventCount = (name: string) => {
    const base = events.filter(
      (e) => e.neighborhood.toLowerCase() === name.toLowerCase(),
    ).length;
    return base + Math.floor(Math.random() * 15 + 5);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#1e293b] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <MapPin className="w-8 h-8 text-green-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Explore by Neighborhood
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Every corner of Metro Vancouver has its own cultural heartbeat. Find
            events in your community.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-green-500 py-4">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 gap-4 text-center">
          {[
            { value: "6+", label: "Neighborhoods" },
            { value: "150+", label: "Monthly Events" },
            { value: "1.9M", label: "People Reached" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-green-100 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Neighborhood Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {neighborhoods.map((hood) => {
            const eventCount = getEventCount(hood.name);
            return (
              <div
                key={hood.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
                onClick={() =>
                  navigate(
                    `/explore?neighborhood=${encodeURIComponent(hood.name)}`,
                  )
                }
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={hood.image}
                    alt={hood.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div
                    className={`absolute top-4 left-4 bg-gradient-to-r ${hood.color} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg`}
                  >
                    {eventCount} Events
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-2xl font-bold text-white">
                      {hood.name}
                    </h2>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {hood.description}
                  </p>

                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Users className="w-4 h-4" />
                      <span>{hood.population}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{hood.culturalGroups} cultures</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {hood.highlights.map((h) => (
                      <span
                        key={h}
                        className={`text-xs px-2 py-1 rounded-full font-medium ${hood.bgColor} ${hood.accentColor}`}
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`flex items-center space-x-2 ${hood.accentColor} font-semibold text-sm group-hover:translate-x-1 transition-transform`}
                  >
                    <span>Explore events</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-4">
            {"Can't Find Your Neighborhood?"}
          </h2>
          <p className="text-gray-600 mb-8">
            {
              "We're expanding to cover all communities across the Lower Mainland. Submit an event from your area to help us grow."
            }
          </p>
          <button
            onClick={() => navigate("/create-event")}
            className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold transition flex items-center space-x-2 mx-auto"
          >
            <span>Submit an Event</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
