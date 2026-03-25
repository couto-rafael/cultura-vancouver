import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Calendar, MapPin, Tag, Heart, Music, Utensils, X, ChevronDown } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { events } from '../data/events';

const cultures = ['All', 'Chinese', 'Filipino', 'Brazilian', 'First Nations', 'Latin American', 'Italian', 'Japanese', 'Korean', 'Indian', 'Middle Eastern', 'Vietnamese'];
const categories = ['All', 'Festival', 'Music', 'Food', 'Museum', 'Community', 'Theatre'];
const neighborhoods = ['All', 'Vancouver', 'Richmond', 'Burnaby', 'Surrey', 'North Vancouver'];
const priceTypes = ['All', 'Free', 'Donation', 'Paid'];

const getTagIcon = (tag: string) => {
  if (tag === 'Music') return <Music className="w-3 h-3" />;
  if (tag === 'Food') return <Utensils className="w-3 h-3" />;
  if (tag === 'Family Friendly') return <Heart className="w-3 h-3" />;
  return <Tag className="w-3 h-3" />;
};

export default function ExplorePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [selectedCulture, setSelectedCulture] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [familyFriendly, setFamilyFriendly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<'date' | 'rating' | 'name'>('date');

  const filtered = useMemo(() => {
    return events.filter(e => {
      const matchesQuery = !query || e.title.toLowerCase().includes(query.toLowerCase()) || e.culture.toLowerCase().includes(query.toLowerCase()) || e.venueName.toLowerCase().includes(query.toLowerCase());
      const matchesCulture = selectedCulture === 'All' || e.culture === selectedCulture;
      const matchesCategory = selectedCategory === 'All' || e.category === selectedCategory;
      const matchesNeighborhood = selectedNeighborhood === 'All' || e.neighborhood === selectedNeighborhood;
      const matchesPrice = selectedPrice === 'All' || e.priceType === selectedPrice;
      const matchesFamily = !familyFriendly || e.familyFriendly;
      return matchesQuery && matchesCulture && matchesCategory && matchesNeighborhood && matchesPrice && matchesFamily;
    }).sort((a, b) => {
      if (sortBy === 'date') return new Date(a.date).getTime() - new Date(b.date).getTime();
      if (sortBy === 'rating') return b.socialProof.rating - a.socialProof.rating;
      return a.title.localeCompare(b.title);
    });
  }, [query, selectedCulture, selectedCategory, selectedNeighborhood, selectedPrice, familyFriendly, sortBy]);

  const activeFilterCount = [
    selectedCulture !== 'All',
    selectedCategory !== 'All',
    selectedNeighborhood !== 'All',
    selectedPrice !== 'All',
    familyFriendly,
  ].filter(Boolean).length;

  const clearFilters = () => {
    setSelectedCulture('All');
    setSelectedCategory('All');
    setSelectedNeighborhood('All');
    setSelectedPrice('All');
    setFamilyFriendly(false);
    setQuery('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-[#1e293b] to-[#334155] py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Explore Cultural Events</h1>
          <p className="text-lg text-gray-300 mb-8">Discover hundreds of events celebrating Vancouver's diverse communities</p>
          <div className="flex gap-3 flex-col sm:flex-row max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search events, cultures, venues..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-lg"
              />
              {query && (
                <button onClick={() => setQuery('')} className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600">
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold transition shadow-lg ${
                showFilters || activeFilterCount > 0
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-[#1e293b] hover:bg-gray-50'
              }`}
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filters {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {[
                { label: 'Culture', value: selectedCulture, options: cultures, set: setSelectedCulture },
                { label: 'Category', value: selectedCategory, options: categories, set: setSelectedCategory },
                { label: 'Neighborhood', value: selectedNeighborhood, options: neighborhoods, set: setSelectedNeighborhood },
                { label: 'Price', value: selectedPrice, options: priceTypes, set: setSelectedPrice },
              ].map(filter => (
                <div key={filter.label}>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">{filter.label}</label>
                  <div className="relative">
                    <select
                      value={filter.value}
                      onChange={e => filter.set(e.target.value)}
                      className="w-full px-3 py-2 pr-8 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-sm appearance-none bg-white"
                    >
                      {filter.options.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                    <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={familyFriendly}
                  onChange={e => setFamilyFriendly(e.target.checked)}
                  className="w-4 h-4 text-green-500 rounded"
                />
                <span className="text-sm text-gray-700 flex items-center space-x-1">
                  <Heart className="w-4 h-4 text-pink-500" />
                  <span>Family Friendly only</span>
                </span>
              </label>
              {activeFilterCount > 0 && (
                <button onClick={clearFilters} className="text-sm text-red-500 hover:text-red-700 font-medium">
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Sort + Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            <span className="font-semibold text-[#1e293b]">{filtered.length}</span> events found
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as typeof sortBy)}
                className="pl-3 pr-8 py-1.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 appearance-none bg-white"
              >
                <option value="date">Date</option>
                <option value="rating">Top Rated</option>
                <option value="name">Name</option>
              </select>
              <ChevronDown className="absolute right-2 top-2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Culture Pills */}
        <div className="flex gap-2 flex-wrap mb-6">
          {cultures.slice(0, 8).map(c => (
            <button
              key={c}
              onClick={() => setSelectedCulture(c)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition border ${
                selectedCulture === c
                  ? 'bg-[#1e293b] text-white border-[#1e293b]'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-green-400 hover:text-green-600'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-[#1e293b] mb-2">No events found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your filters or search query</p>
            <button onClick={clearFilters} className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition">
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(event => (
              <div
                key={event.id}
                onClick={() => navigate(`/events/${event.id}`)}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-[#1e293b]">
                    {event.culture}
                  </div>
                  <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold ${
                    event.priceType === 'Free' ? 'bg-green-500 text-white' : 'bg-white/90 text-[#1e293b]'
                  }`}>
                    {event.priceRange}
                  </div>
                  {event.familyFriendly && (
                    <div className="absolute bottom-3 right-3 bg-pink-500 text-white px-2 py-0.5 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Heart className="w-3 h-3" />
                      <span>Family</span>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-[#1e293b] leading-tight group-hover:text-green-600 transition line-clamp-2 flex-1 pr-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-amber-400 flex-shrink-0">
                      <span className="text-sm font-bold text-gray-600">{event.socialProof.rating}</span>
                      <span className="text-yellow-400">★</span>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">{event.shortDescription}</p>

                  <div className="space-y-1.5 mb-3">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-3.5 h-3.5 mr-2 text-green-500" />
                      <span>{new Date(event.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="w-3.5 h-3.5 mr-2 text-green-500" />
                      <span className="truncate">{event.venueName}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {event.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="inline-flex items-center space-x-1 px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
                        {getTagIcon(tag)}
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
