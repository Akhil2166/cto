import { useEffect, useState } from 'react';
import HeroSection from './components/hero/HeroSection';
import AboutSection from './components/sections/AboutSection';
import CaseStudiesSection from './components/sections/CaseStudiesSection';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-axion-black transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section with Shader Background & Navigation */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Case Studies Section */}
      <CaseStudiesSection />
    </div>
  );
}

export default App;