import { Swirl, ChromaFlow, FlutedGlass, FilmGrain, Group } from 'shaders/react';
import { ArrowRight, Star } from 'lucide-react';
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
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          {/* Main Headline + Content */}
          <div className="flex-1">
            <h1 className="text-[clamp(2rem,6vw,5.5rem)] font-bold leading-[0.9] tracking-[-0.04em] text-white max-w-3xl">
              Advanced Dental Care
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                Precision, Comfort,
              </span>
              <br />
              and Artistry.
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-6 md:mt-10">
              <p className="text-gray-400 text-[clamp(0.875rem,2vw,1.125rem)] max-w-md leading-relaxed">
                Where cutting-edge technology meets compassionate care. 
                Every smile is crafted with precision, comfort, and artistry 
                — because you deserve nothing less than extraordinary.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {/* Book Appointment CTA */}
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-axion-black font-medium transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-orange-500 hover:text-white hover:gap-4"
                >
                  Book Appointment
                  <ArrowRight size={18} className="transition-transform duration-500 group-hover:translate-x-1" />
                </a>

                {/* Top-Rated Clinic Badge */}
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <span>Top-Rated Clinic 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Portrait */}
          <div className="flex-shrink-0 lg:mb-0 mb-4">
            <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
              <img
                src="/assets/doctor.svg"
                alt="Dr. Alexandra — Lead Dentist"
                className="w-full h-full object-cover"
              />
              {/* Glowing ring effect */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
