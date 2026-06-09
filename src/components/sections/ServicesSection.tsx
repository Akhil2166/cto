import { useState } from 'react';
import { ArrowRight, Sparkles, Microscope, ShieldCheck } from 'lucide-react';

interface ServiceCard {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const SERVICES: ServiceCard[] = [
  {
    id: 'svc-1',
    title: 'Cosmetic Dentistry',
    category: 'Smile Makeovers',
    description: 'Transform your smile with porcelain veneers, professional whitening, and advanced composite bonding tailored to your unique facial harmony.',
    icon: <Sparkles size={24} />,
    gradient: 'from-purple-900/40 via-pink-900/20 to-black',
  },
  {
    id: 'svc-2',
    title: 'Precision Implants',
    category: '3D Guided Surgery',
    description: 'State-of-the-art dental implants using AI-guided 3D navigation for unparalleled accuracy, faster healing, and natural-looking results.',
    icon: <Microscope size={24} />,
    gradient: 'from-orange-900/30 via-red-900/20 to-black',
  },
  {
    id: 'svc-3',
    title: 'Advanced Hygiene',
    category: 'Next-Gen Cleaning',
    description: 'Experience our comprehensive hygiene program featuring air polishing, laser therapy, and advanced diagnostics for optimal periodontal health.',
    icon: <ShieldCheck size={24} />,
    gradient: 'from-teal-900/30 via-cyan-900/20 to-black',
  },
];

export default function ServicesSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="services" className="relative py-24 md:py-32 px-6 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <span className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-6 block">
          Our Services
        </span>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight tracking-[-0.03em] text-axion-black max-w-xl">
            Exceptional care,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              exceptional smiles.
            </span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-md">
            From routine maintenance to complete smile transformations, every service is delivered with precision, comfort, and artistry.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-xl hover:-translate-y-1"
              onMouseEnter={() => setActiveCard(service.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Service Icon Area */}
              <div
                className="relative aspect-video overflow-hidden bg-gradient-to-br flex items-center justify-center"
                style={{ background: service.gradient }}
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/80 transition-transform duration-500 group-hover:scale-110 group-hover:bg-orange-500/20">
                  {service.icon}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 md:p-6">
                <span className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-medium">
                  {service.category}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-axion-black mt-2 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>

                {/* Book Now Button */}
                <div className="mt-4">
                  <a
                    href="#contact"
                    className="group/btn inline-flex items-center gap-2 text-xs font-medium text-gray-400 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:text-orange-500"
                  >
                    <span>Book now</span>
                    <ArrowRight size={14} className="transition-all duration-500 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <a
            href="#contact"
            className="group relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-full bg-axion-black text-white font-medium transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-orange-500 hover:gap-4"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-6">
              View all services
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              View all services
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}