import { Calendar, MapPin, Tag, Heart, Music, Utensils } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { events as eventsList } from '../data/events';

const getTagIcon = (tag: string) => {
  if (tag === 'Music') return <Music className="w-3 h-3" />;
  if (tag === 'Food') return <Utensils className="w-3 h-3" />;
  if (tag === 'Family Friendly') return <Heart className="w-3 h-3" />;
  return <Tag className="w-3 h-3" />;
};

export default function FeaturedEvents() {
  const navigate = useNavigate();
  const events = eventsList.slice(0, 6);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1e293b] mb-4">Featured Events</h2>
          <p className="text-xl text-gray-600">Upcoming cultural celebrations you don't want to miss</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              onClick={() => navigate(`/events/${event.id}`)}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-semibold text-[#1e293b]">
                  {event.culture}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1e293b] mb-3">{event.title}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.venueName}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-green-600">{event.priceRange}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {event.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center space-x-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {getTagIcon(tag)}
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold text-lg transition">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
}
