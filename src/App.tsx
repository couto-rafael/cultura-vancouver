import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SignInModal from './components/SignInModal';
import HomePage from './pages/HomePage';
import EventDetail from './pages/EventDetail';
import ExplorePage from './pages/ExplorePage';
import NeighborhoodsPage from './pages/NeighborhoodsPage';
import CulturesPage from './pages/CulturesPage';
import AboutPage from './pages/AboutPage';
import Dashboard from './pages/Dashboard';
import CreateEvent from './pages/CreateEvent';

function AppContent() {
  const { showSignIn } = useAuth();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      {showSignIn && <SignInModal />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events/:eventId" element={<EventDetail />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/neighborhoods" element={<NeighborhoodsPage />} />
          <Route path="/cultures" element={<CulturesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-event" element={<CreateEvent />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
