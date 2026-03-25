import { Search, Menu, X, Globe, ChevronDown, LayoutDashboard, PlusCircle, LogOut } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, isAuthenticated, logout, setShowSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const userMenuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Explore Events', href: '/explore' },
    { label: 'Neighborhoods', href: '/neighborhoods' },
    { label: 'Cultures', href: '/cultures' },
    { label: 'About', href: '/about' },
  ];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/explore?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="bg-[#1e293b] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Cultura Vancouver</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  isActive(link.href)
                    ? 'bg-white/15 text-green-400'
                    : 'hover:bg-white/10 hover:text-green-300 text-white/90'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-3">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search events..."
                className="pl-9 pr-4 py-2 rounded-full bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-400 w-52 text-sm"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-white/50" />
            </form>

            {isAuthenticated && user ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <img src={user.avatar} alt={user.name} className="w-7 h-7 rounded-full bg-green-400" />
                  <span className="text-sm font-medium max-w-[100px] truncate">{user.name.split(' ')[0]}</span>
                  <ChevronDown className="w-4 h-4 text-white/60" />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-800 truncate">{user.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                    <div className="py-1">
                      <Link
                        to="/dashboard"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center space-x-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition"
                      >
                        <LayoutDashboard className="w-4 h-4 text-gray-400" />
                        <span>My Dashboard</span>
                      </Link>
                      <Link
                        to="/create-event"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center space-x-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition"
                      >
                        <PlusCircle className="w-4 h-4 text-gray-400" />
                        <span>Submit Event</span>
                      </Link>
                    </div>
                    <div className="border-t border-gray-100 py-1">
                      <button
                        onClick={() => { logout(); setUserMenuOpen(false); }}
                        className="flex items-center space-x-2 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 w-full transition"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setShowSignIn(true)}
                className="px-5 py-2 bg-green-500 hover:bg-green-600 rounded-full font-medium text-sm transition"
              >
                Sign In
              </button>
            )}
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1e293b] border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition ${
                  isActive(link.href) ? 'bg-white/15 text-green-400' : 'hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/10 space-y-2">
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/10 text-sm">
                    <LayoutDashboard className="w-4 h-4" /><span>Dashboard</span>
                  </Link>
                  <Link to="/create-event" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/10 text-sm">
                    <PlusCircle className="w-4 h-4" /><span>Submit Event</span>
                  </Link>
                  <button onClick={() => { logout(); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-red-400 hover:bg-white/10 text-sm">
                    Sign Out
                  </button>
                </>
              ) : (
                <button
                  onClick={() => { setShowSignIn(true); setMobileMenuOpen(false); }}
                  className="w-full py-2 bg-green-500 hover:bg-green-600 rounded-full font-medium text-sm transition"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
