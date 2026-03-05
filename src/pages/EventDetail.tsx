import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, MapPin, Calendar, Clock, DollarSign, Globe, Heart, Share2, Bookmark, ExternalLink, Mail, MapPin as MapPinIcon, Zap, AlertCircle, Star, Users, Music } from 'lucide-react';
import { useState } from 'react';
import { getEventById, getEventsByNeighborhood, getEventsByCulture, Event } from '../data/events';

function EventCard({ event }: { event: Event }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/events/${event.id}`)}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-semibold text-[#1e293b]">
          {event.culture}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-[#1e293b] mb-2 line-clamp-2">{event.title}</h3>
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-green-600">{event.priceRange}</span>
        </div>
      </div>
    </div>
  );
}

export default function EventDetail() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'getting-there' | 'what-to-expect' | 'policies'>('getting-there');
  const [isSaved, setIsSaved] = useState(false);

  const event = getEventById(eventId || '');

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#1e293b] mb-4">Event Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The event you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center space-x-2 px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Explore Events</span>
          </button>
        </div>
      </div>
    );
  }

  const similarEventsByCulture = getEventsByCulture(event.culture, event.id);
  const similarEventsByNeighborhood = getEventsByNeighborhood(event.neighborhood, event.id);
  const similarEvents = [...similarEventsByCulture, ...similarEventsByNeighborhood].slice(0, 3);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold mb-6 transition"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Events</span>
        </button>

        <nav className="flex items-center space-x-2 text-gray-600 text-sm mb-8">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span>/</span>
          <span>Events</span>
          <span>/</span>
          <span className="text-[#1e293b] font-semibold">{event.title}</span>
        </nav>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h1 className="text-5xl font-bold text-[#1e293b] mb-4">{event.title}</h1>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                {event.culture}
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                {event.category}
              </span>
            </div>

            <div className="space-y-3 mb-8 text-lg">
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-green-600" />
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-green-600" />
                <span>{event.startTime} – {event.endTime}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-green-600" />
                <span>{event.venueName}, {event.neighborhood}</span>
              </div>
            </div>
          </div>

          <div>
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="sticky top-20 bg-white border-b border-gray-200 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-4 mb-8 shadow-sm">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="text-sm text-gray-600">Price</div>
              <div className="text-2xl font-bold text-[#1e293b]">{event.priceRange}</div>
            </div>
            <div className="flex gap-3 flex-wrap">
              {event.ticketUrl ? (
                <a
                  href={event.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition flex items-center space-x-2"
                >
                  <span>Get Tickets</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Save Event</span>
                </button>
              )}
              <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-[#1e293b] rounded-lg font-semibold transition flex items-center space-x-2">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
              <button
                onClick={() => setIsSaved(!isSaved)}
                className={`px-4 py-3 rounded-lg font-semibold transition ${
                  isSaved
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-start space-x-4">
            <Calendar className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <div className="text-sm text-gray-600">Date & Time</div>
              <div className="text-lg font-semibold text-[#1e293b]">{formatDate(event.date)}</div>
              <div className="text-gray-600">{event.startTime} – {event.endTime}</div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MapPin className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <div className="text-sm text-gray-600">Location</div>
              <div className="text-lg font-semibold text-[#1e293b]">{event.venueName}</div>
              <a href={`https://maps.google.com/?q=${encodeURIComponent(event.address)}`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 text-sm flex items-center space-x-1">
                <span>{event.address}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <DollarSign className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <div className="text-sm text-gray-600">Price</div>
              <div className="text-lg font-semibold text-[#1e293b]">{event.priceType}</div>
              <div className="text-gray-600">{event.priceRange}</div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Globe className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <div className="text-sm text-gray-600">Language</div>
              <div className="text-lg font-semibold text-[#1e293b]">{event.language}</div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Heart className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <div className="text-sm text-gray-600">Family Friendly</div>
              <div className="text-lg font-semibold text-[#1e293b]">{event.familyFriendly ? 'Yes' : 'No'}</div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Zap className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <div className="text-sm text-gray-600">Accessibility</div>
              <div className="text-sm text-[#1e293b]">
                {event.accessibility.wheelchairAccess && <div>Wheelchair Access</div>}
                {event.accessibility.quietSpace && <div>Quiet Space</div>}
                {event.accessibility.captions && <div>Captions</div>}
                {!event.accessibility.wheelchairAccess && !event.accessibility.quietSpace && !event.accessibility.captions && <div>Limited</div>}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-4">About This Event</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">{event.shortDescription}</p>
          <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line">{event.fullDescription}</p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-6">Event Details</h2>

          <div className="flex border-b border-gray-200 mb-6">
            {(['getting-there', 'what-to-expect', 'policies'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-semibold transition ${
                  activeTab === tab
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab === 'getting-there' && 'Getting There'}
                {tab === 'what-to-expect' && 'What to Expect'}
                {tab === 'policies' && 'Policies'}
              </button>
            ))}
          </div>

          {activeTab === 'getting-there' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#1e293b] mb-2">Transit Info</h3>
                    <p className="text-gray-700">{event.transitInfo}</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#1e293b] mb-2">Parking Info</h3>
                    <p className="text-gray-700">{event.parkingInfo}</p>
                  </div>
                </div>
              </div>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(event.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}

          {activeTab === 'what-to-expect' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#1e293b] mb-4">Event Highlights</h3>
                <div className="flex flex-wrap gap-3">
                  {event.tags.map((tag, idx) => (
                    <span key={idx} className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <h3 className="font-semibold text-[#1e293b] mb-2">Ratings</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(event.socialProof.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-[#1e293b]">{event.socialProof.rating.toFixed(1)}</span>
                  <span className="text-gray-600">({event.socialProof.reviewsCount} reviews)</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'policies' && (
            <div className="space-y-6">
              {event.safetyNotes && (
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
                  <div className="flex items-start space-x-4">
                    <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#1e293b] mb-2">Safety Notes</h3>
                      <p className="text-gray-700">{event.safetyNotes}</p>
                    </div>
                  </div>
                </div>
              )}
              <div className="bg-gray-100 p-6 rounded">
                <h3 className="font-semibold text-[#1e293b] mb-2">Refund Policy</h3>
                <p className="text-gray-700">Please refer to the ticket vendor's refund policy. Contact the organizer for event-specific policies.</p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-6">Organizer</h2>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-600">Organizer Name</div>
              <div className="text-xl font-semibold text-[#1e293b]">{event.organizerName}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-2">Contact</div>
              <a
                href={`mailto:${event.organizerContactEmail}`}
                className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold"
              >
                <Mail className="w-5 h-5" />
                <span>{event.organizerContactEmail}</span>
              </a>
            </div>
            {event.websiteUrl && (
              <div>
                <a
                  href={event.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
            <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-[#1e293b] rounded-lg font-semibold transition">
              Submit an Update
            </button>
          </div>
        </div>

        {similarEvents.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#1e293b] mb-8">Similar Events</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {similarEvents.map((e) => (
                <EventCard key={e.id} event={e} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
