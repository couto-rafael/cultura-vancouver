import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1e293b] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Cultura Vancouver</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-green-400 transition">Home</a>
            <a href="#explore" className="hover:text-green-400 transition">Explore Events</a>
            <a href="#neighborhoods" className="hover:text-green-400 transition">Neighborhoods</a>
            <a href="#cultures" className="hover:text-green-400 transition">Cultures</a>
            <a href="#about" className="hover:text-green-400 transition">About</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search events..."
                className="pl-10 pr-4 py-2 rounded-full bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 w-64"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-white/60" />
            </div>
            <button className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-full font-medium transition">
              Sign In
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1e293b] border-t border-white/10">
          <div className="px-4 py-4 space-y-4">
            <a href="#home" className="block hover:text-green-400 transition">Home</a>
            <a href="#explore" className="block hover:text-green-400 transition">Explore Events</a>
            <a href="#neighborhoods" className="block hover:text-green-400 transition">Neighborhoods</a>
            <a href="#cultures" className="block hover:text-green-400 transition">Cultures</a>
            <a href="#about" className="block hover:text-green-400 transition">About</a>
            <button className="w-full px-6 py-2 bg-green-500 hover:bg-green-600 rounded-full font-medium transition">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
