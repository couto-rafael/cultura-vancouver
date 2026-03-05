import { Search, Calendar, MapPin, Globe, Heart } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [familyFriendly, setFamilyFriendly] = useState(false);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1e293b] mb-6 leading-tight">
            Discover Vancouver's Cultural Events in One Place
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Find festivals, food markets, music performances and cultural celebrations happening across Vancouver.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Location</option>
                <option>Vancouver</option>
                <option>Richmond</option>
                <option>Burnaby</option>
                <option>Surrey</option>
                <option>North Vancouver</option>
              </select>
            </div>

            <div className="relative">
              <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Date</option>
                <option>Today</option>
                <option>This Week</option>
                <option>This Weekend</option>
                <option>This Month</option>
              </select>
            </div>

            <div className="relative">
              <Globe className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Culture</option>
                <option>Chinese</option>
                <option>Filipino</option>
                <option>Indian</option>
                <option>Latin American</option>
                <option>First Nations</option>
                <option>European</option>
              </select>
            </div>

            <div className="flex items-center justify-center">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={familyFriendly}
                  onChange={(e) => setFamilyFriendly(e.target.checked)}
                  className="w-5 h-5 text-green-500 rounded focus:ring-2 focus:ring-green-500"
                />
                <span className="flex items-center text-gray-700">
                  <Heart className="w-5 h-5 mr-1" />
                  Family Friendly
                </span>
              </label>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 px-8 rounded-lg font-semibold text-lg transition flex items-center justify-center space-x-2">
              <Search className="w-5 h-5" />
              <span>Explore Events</span>
            </button>
            <button className="sm:w-auto bg-[#1e293b] hover:bg-[#334155] text-white py-4 px-8 rounded-lg font-semibold text-lg transition">
              See This Week
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
