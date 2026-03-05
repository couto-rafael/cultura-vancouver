import { Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { events as eventsList } from '../data/events';

export default function WeeklyRecommendations() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const recommendations = eventsList.slice(0, 5);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-[#1e293b] mb-2">This Week in Vancouver</h2>
            <p className="text-xl text-gray-600">Curated cultural experiences happening this week</p>
          </div>
          <div className="hidden md:flex space-x-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition"
            >
              <ChevronLeft className="w-6 h-6 text-[#1e293b]" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition"
            >
              <ChevronRight className="w-6 h-6 text-[#1e293b]" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              onClick={() => navigate(`/events/${rec.id}`)}
              className="flex-none w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer snap-start"
            >
              <div className="relative h-48">
                <img
                  src={rec.imageUrl}
                  alt={rec.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1e293b] mb-3">{rec.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{rec.shortDescription}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{rec.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{rec.venueName}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
