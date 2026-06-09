import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 bg-axion-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 block">
          About
        </span>

        {/* Layout: Stacked on mobile, grid on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight tracking-[-0.03em] text-white">
              We don't just design.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                We engineer impact.
              </span>
            </h2>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg">
              Axion Studio is a high-end design agency built for brands ready to 
              dominate their category. We combine strategy-led creative with 
              cutting-edge technology — WebGL, interactive 3D, custom shaders — 
              to build digital experiences that don't just look stunning, but 
              drive measurable results.
            </p>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg">
              From growing startups to established enterprises, we partner with 
              ambitious teams to elevate their online presence and turn visitors 
              into loyal customers.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div>
                <span className="text-2xl md:text-3xl font-bold text-white">50+</span>
                <p className="text-xs text-gray-500 mt-1">Projects delivered</p>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-bold text-white">98%</span>
                <p className="text-xs text-gray-500 mt-1">Client satisfaction</p>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-bold text-white">6+</span>
                <p className="text-xs text-gray-500 mt-1">Years in business</p>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-bold text-white">12+</span>
                <p className="text-xs text-gray-500 mt-1">Industry awards</p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 self-start mt-4 px-6 py-3 rounded-full bg-orange-500 text-white font-medium transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-orange-600 hover:gap-4"
            >
              Learn more about us
              <ArrowRight size={18} className="transition-transform duration-500 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right: Images */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="space-y-3 md:space-y-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-axion-gray">
                <img
                  src="/assets/about-1.jpg"
                  alt="Studio workspace"
                  className="w-full h-full object-cover opacity-80"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)';
                  }}
                />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-axion-gray">
                <img
                  src="/assets/about-2.jpg"
                  alt="Team collaboration"
                  className="w-full h-full object-cover opacity-80"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.background = 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)';
                  }}
                />
              </div>
            </div>
            <div className="space-y-3 md:space-y-4 pt-8 md:pt-12">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-axion-gray">
                <img
                  src="/assets/about-3.jpg"
                  alt="Design process"
                  className="w-full h-full object-cover opacity-80"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.background = 'linear-gradient(135deg, #111111 0%, #333333 100%)';
                  }}
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-axion-gray">
                <img
                  src="/assets/about-4.jpg"
                  alt="Creative session"
                  className="w-full h-full object-cover opacity-80"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.background = 'linear-gradient(135deg, #222222 0%, #111111 100%)';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
