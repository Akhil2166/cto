import { useEffect, useState } from 'react';
import HeroSection from './components/hero/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import ReviewsSection from './components/sections/ReviewsSection';
import Footer from './components/sections/Footer';
import ChatBot from './components/ui/ChatBot';
import WhatsAppWidget from './components/ui/WhatsAppWidget';

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

      {/* Services Section */}
      <ServicesSection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Footer */}
      <Footer />

      {/* Floating Widgets */}
      <ChatBot />
      <WhatsAppWidget />
    </div>
  );
}

export default App;