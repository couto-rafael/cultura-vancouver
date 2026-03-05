import Hero from '../components/Hero';
import FeaturedEvents from '../components/FeaturedEvents';
import WeeklyRecommendations from '../components/WeeklyRecommendations';
import DiscoverByCulture from '../components/DiscoverByCulture';
import MapSection from '../components/MapSection';
import CommunitySection from '../components/CommunitySection';
import Newsletter from '../components/Newsletter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedEvents />
      <WeeklyRecommendations />
      <DiscoverByCulture />
      <MapSection />
      <CommunitySection />
      <Newsletter />
    </>
  );
}
