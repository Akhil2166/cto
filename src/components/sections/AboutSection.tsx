import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 bg-axion-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 block">
          About Our Practice
        </span>

        {/* Layout: Stacked on mobile, grid on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight tracking-[-0.03em] text-white">
              Precision meets
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                compassionate care.
              </span>
            </h2>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg">
              At Axion Dental Clinic, we believe every patient deserves a smile 
              that reflects their best self. Our team of specialists combines 
              decades of expertise with cutting-edge technology — from AI-assisted 
              diagnostics to 3D-guided implant surgery — to deliver results that 
              are as precise as they are beautiful.
            </p>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg">
              From routine hygiene to full-mouth reconstruction, every procedure 
              is performed in our state-of-the-art facility designed for your 
              comfort and safety. Your smile is our masterpiece.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div>
                <span className="text-2xl md:text-3xl font-bold text-white">15+</span>
                <p className="text-xs text-gray-500 mt-1">Years of excellence</p>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-bold text-white">10K+</span>
                <p className="text-xs text-gray-500 mt-1">Smiles transformed</p>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-bold text-white">4.9</span>
                <p className="text-xs text-gray-500 mt-1">Patient rating</p>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-bold text-white">50+</span>
                <p className="text-xs text-gray-500 mt-1">Expert specialists</p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 self-start mt-4 px-6 py-3 rounded-full bg-orange-500 text-white font-medium transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-orange-600 hover:gap-4"
            >
              Meet our team
              <ArrowRight size={18} className="transition-transform duration-500 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right: Clinic Images */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="space-y-3 md:space-y-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-axion-gray">
                <div className="w-full h-full bg-gradient-to-br from-blue-900/40 to-teal-900/40 flex items-center justify-center">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1.5">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-axion-gray">
                <div className="w-full h-full bg-gradient-to-br from-teal-900/40 to-cyan-900/40 flex items-center justify-center">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="space-y-3 md:space-y-4 pt-8 md:pt-12">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-axion-gray">
                <div className="w-full h-full bg-gradient-to-br from-purple-900/40 to-pink-900/40 flex items-center justify-center">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1.5">
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                  </svg>
                </div>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-axion-gray">
                <div className="w-full h-full bg-gradient-to-br from-amber-900/40 to-orange-900/40 flex items-center justify-center">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1.5">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
