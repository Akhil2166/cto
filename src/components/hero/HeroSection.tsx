import { Swirl, ChromaFlow, FlutedGlass, FilmGrain, Group } from 'shaders/react';
import { ArrowRight } from 'lucide-react';
import Navigation from '../navigation/Navigation';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-axion-black">
      {/* Shader Overlay Background */}
      <div className="shader-overlay">
        <div className="absolute inset-0">
          <Group>
            {/* Base swirl effect */}
            <div className="absolute inset-0">
              <Swirl
                angle={0.5}
                frequency={2.0}
                softness={0.6}
                opacity={0.4}
              />
            </div>

            {/* Chroma flow for color variation */}
            <div className="absolute inset-0">
              <ChromaFlow
                opacity={0.3}
                blendMode="screen"
              />
            </div>

            {/* Fluted glass texture overlay */}
            <div className="absolute inset-0">
              <FlutedGlass
                refraction={1.5}
                aberration={0.02}
                waveAmplitude={0.05}
                waveFrequency={1.0}
                highlight={0.3}
                highlightSoftness={0.7}
                opacity={0.25}
                blendMode="overlay"
              />
            </div>

            {/* Subtle film grain for texture */}
            <div className="absolute inset-0">
              <FilmGrain
                strength={0.08}
                opacity={0.15}
                blendMode="multiply"
              />
            </div>
          </Group>
        </div>
      </div>

      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-black/10 to-black/60" />

      {/* Navigation */}
      <Navigation />

      {/* Hero Content at bottom */}
      <div className="relative z-10 flex flex-col justify-end min-h-screen px-6 pb-24 md:pb-32 max-w-7xl mx-auto">
        {/* Main Headline */}
        <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[0.85] tracking-[-0.04em] text-white max-w-5xl">
          We craft digital
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
            experiences
          </span>
          <br />
          that dominate.
        </h1>

        {/* Subheadline + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-8 md:mt-12">
          <p className="text-gray-400 text-[clamp(0.875rem,2vw,1.125rem)] max-w-md leading-relaxed">
            Strategy-led creative that combines bold design with cutting-edge technology to position your brand at the forefront of your industry.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Start a project CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-axion-black font-medium transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-orange-500 hover:text-white hover:gap-4"
            >
              Start a project
              <ArrowRight size={18} className="transition-transform duration-500 group-hover:translate-x-1" />
            </a>

            {/* Certified Partner Badge */}
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
              </svg>
              <span>Certified Partner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}