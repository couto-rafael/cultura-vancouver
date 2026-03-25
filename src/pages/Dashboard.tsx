import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Calendar,
  PlusCircle,
  Bookmark,
  Users,
  TrendingUp,
  Eye,
  Heart,
  Bell,
  Edit3,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { events } from "../data/events";

const mockMyEvents = [
  {
    id: "my-1",
    title: "Filipino Heritage Night 2026",
    status: "published",
    date: "2026-04-12",
    views: 342,
    saves: 47,
    category: "Festival",
    culture: "Filipino",
  },
  {
    id: "my-2",
    title: "Taste of Luzon Food Market",
    status: "pending",
    date: "2026-04-28",
    views: 0,
    saves: 0,
    category: "Food",
    culture: "Filipino",
  },
  {
    id: "my-3",
    title: "Kulintang Music Workshop",
    status: "draft",
    date: "2026-05-10",
    views: 0,
    saves: 0,
    category: "Music",
    culture: "Filipino",
  },
];

const mockSavedEvents = events.slice(0, 3);

const mockNotifications = [
  {
    id: 1,
    type: "success",
    message: 'Your event "Filipino Heritage Night 2026" was approved!',
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "info",
    message: "47 people saved your event this week.",
    time: "1 day ago",
  },
  {
    id: 3,
    type: "warning",
    message:
      '"Kulintang Music Workshop" has missing details. Complete your draft.',
    time: "3 days ago",
  },
];

const statusConfig = {
  published: {
    label: "Published",
    color: "bg-green-100 text-green-700",
    icon: CheckCircle,
  },
  pending: {
    label: "Pending Review",
    color: "bg-yellow-100 text-yellow-700",
    icon: Clock,
  },
  draft: { label: "Draft", color: "bg-gray-100 text-gray-600", icon: Edit3 },
};

export default function Dashboard() {
  const { user, setShowSignIn } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">🔒</div>
          <h2 className="text-2xl font-bold text-[#1e293b] mb-2">
            Sign in to access your dashboard
          </h2>
          <p className="text-gray-500 mb-6">
            Create and manage your cultural events
          </p>
          <button
            onClick={() => setShowSignIn(true)}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold transition"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1e293b] py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-14 h-14 rounded-full bg-green-400 ring-4 ring-green-400/30"
              />
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Welcome back, {user.name.split(" ")[0]}! 👋
                </h1>
                <p className="text-gray-300 text-sm">
                  {user.email} · Member since {user.joinedDate}
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate("/create-event")}
              className="hidden sm:flex items-center space-x-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold transition"
            >
              <PlusCircle className="w-5 h-5" />
              <span>New Event</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              label: "Events Created",
              value: "3",
              icon: Calendar,
              color: "bg-blue-50",
              iconColor: "text-blue-500",
            },
            {
              label: "Total Views",
              value: "342",
              icon: Eye,
              color: "bg-purple-50",
              iconColor: "text-purple-500",
            },
            {
              label: "Events Saved",
              value: "8",
              icon: Bookmark,
              color: "bg-pink-50",
              iconColor: "text-pink-500",
            },
            {
              label: "People Reached",
              value: "1.2K",
              icon: Users,
              color: "bg-green-50",
              iconColor: "text-green-500",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`${stat.color} rounded-2xl p-5 flex items-center space-x-3`}
            >
              <stat.icon
                className={`w-8 h-8 ${stat.iconColor} flex-shrink-0`}
              />
              <div>
                <div className="text-2xl font-bold text-[#1e293b]">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* My Events */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#1e293b]">My Events</h2>
              <button
                onClick={() => navigate("/create-event")}
                className="text-sm text-green-600 font-semibold hover:text-green-700 flex items-center space-x-1"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Add new</span>
              </button>
            </div>

            {mockMyEvents.map((event) => {
              const status =
                statusConfig[event.status as keyof typeof statusConfig];
              const StatusIcon = status.icon;
              return (
                <div
                  key={event.id}
                  className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 hover:shadow-md transition"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#1e293b] mb-1">
                        {event.title}
                      </h3>
                      <div className="flex items-center space-x-3 text-sm text-gray-500">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>
                            {new Date(
                              event.date + "T00:00:00",
                            ).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </span>
                        <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full">
                          {event.category}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`flex items-center space-x-1 text-xs font-medium px-2.5 py-1 rounded-full ${status.color}`}
                    >
                      <StatusIcon className="w-3.5 h-3.5" />
                      <span>{status.label}</span>
                    </span>
                  </div>

                  {event.status === "published" && (
                    <div className="flex items-center space-x-4 text-sm text-gray-500 pt-3 border-t border-gray-100">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4 text-blue-400" />
                        <span>{event.views} views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Bookmark className="w-4 h-4 text-pink-400" />
                        <span>{event.saves} saves</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span>+12% this week</span>
                      </div>
                    </div>
                  )}

                  {event.status === "draft" && (
                    <div className="pt-3 border-t border-gray-100">
                      <button
                        onClick={() => navigate("/create-event")}
                        className="text-sm text-orange-500 font-medium hover:text-orange-600 flex items-center space-x-1"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Complete your draft</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Notifications */}
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
              <div className="flex items-center space-x-2 mb-4">
                <Bell className="w-5 h-5 text-[#1e293b]" />
                <h3 className="font-bold text-[#1e293b]">Notifications</h3>
                <span className="ml-auto text-xs bg-red-500 text-white rounded-full px-2 py-0.5">
                  3
                </span>
              </div>
              <div className="space-y-3">
                {mockNotifications.map((notif) => (
                  <div key={notif.id} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5">
                      {notif.type === "success" && (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      )}
                      {notif.type === "info" && (
                        <TrendingUp className="w-4 h-4 text-blue-500" />
                      )}
                      {notif.type === "warning" && (
                        <AlertCircle className="w-4 h-4 text-orange-500" />
                      )}
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {notif.message}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Saved Events */}
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-5 h-5 text-[#1e293b]" />
                <h3 className="font-bold text-[#1e293b]">Saved Events</h3>
              </div>
              <div className="space-y-3">
                {mockSavedEvents.map((event) => (
                  <div
                    key={event.id}
                    onClick={() => navigate(`/events/${event.id}`)}
                    className="flex items-start space-x-3 cursor-pointer group"
                  >
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-700 group-hover:text-green-600 transition leading-tight line-clamp-2">
                        {event.title}
                      </p>
                      <div className="flex items-center space-x-1 text-xs text-gray-400 mt-0.5">
                        <Calendar className="w-3 h-3" />
                        <span>
                          {new Date(
                            event.date + "T00:00:00",
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate("/explore")}
                className="w-full mt-4 text-sm text-center text-green-600 font-medium hover:text-green-700"
              >
                Explore more events →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
