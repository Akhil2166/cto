import { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  videoPlaceholder: string;
  gradient: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-1',
    title: 'NOVA — Rebrand & Digital Experience',
    category: 'Brand Identity / Web Dev',
    description: 'A complete digital transformation for a fintech startup, featuring interactive data visualizations and a custom shader-driven aesthetic.',
    videoPlaceholder: '#1a1a2e',
    gradient: 'from-purple-900/40 via-blue-900/20 to-black',
  },
  {
    id: 'cs-2',
    title: 'VELOS — E-Commerce Platform',
    category: 'UX Design / Development',
    description: 'High-conversion e-commerce experience with 3D product configurator and liquid-smooth animations that increased conversion by 34%.',
    videoPlaceholder: '#16213e',
    gradient: 'from-orange-900/30 via-red-900/20 to-black',
  },
  {
    id: 'cs-3',
    title: 'AETHER — Brand Launch',
    category: 'Creative Direction / Motion',
    description: 'A bold market entry campaign with immersive WebGL storytelling, earning Site of the Day recognition.',
    videoPlaceholder: '#0f3460',
    gradient: 'from-teal-900/30 via-cyan-900/20 to-black',
  },
];

export default function CaseStudiesSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="work" className="relative py-24 md:py-32 px-6 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <span className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-6 block">
          Case Studies
        </span>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight tracking-[-0.03em] text-axion-black max-w-xl">
            Work that speaks
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              for itself.
            </span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-md">
            Each project is a partnership. Here's a glimpse of what we've built together with our clients.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-xl hover:-translate-y-1"
              onMouseEnter={() => setActiveCard(study.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Video Placeholder */}
              <a
                href="#"
                className="block relative aspect-video overflow-hidden bg-gradient-to-br"
                style={{ background: study.gradient }}
                onClick={(e) => e.preventDefault()}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <Play size={20} className="text-white ml-0.5" fill="white" />
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-5 h-5 rounded-full border-2 border-white/30 bg-white/10"
                      />
                    ))}
                  </div>
                </div>
              </a>

              {/* Card Content */}
              <div className="p-5 md:p-6">
                <span className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-medium">
                  {study.category}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-axion-black mt-2 mb-2">
                  {study.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {study.description}
                </p>

                {/* Hover-expanding Button */}
                <div className="mt-4 overflow-hidden">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="group/btn inline-flex items-center gap-1 text-xs font-medium text-gray-400 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:text-orange-500"
                  >
                    <span>View case study</span>
                    <ExternalLink size={14} className="transition-all duration-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
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
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-axion-black text-white font-medium transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-orange-500 hover:gap-4"
          >
            View all projects
            <ExternalLink size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}