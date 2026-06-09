import { useState } from 'react';
import { Menu, X, Clock } from 'lucide-react';
import { NAV_LINKS } from '../shared/types';

export default function Navigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      {/* Desktop Pill Navbar */}
      <div className="liquid-glass-dark flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="/" className="text-white font-semibold text-lg tracking-tight">
          Axion<span className="text-orange-500">.</span> Dental
        </a>

        {/* Nav Links - Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: Status + CTA */}
        <div className="flex items-center gap-4">
          {/* Clinic Status */}
          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <Clock size={10} className="text-green-400" />
            <span>Clinic Open | Appointments Available</span>
          </div>

          {/* Book Appointment - Desktop */}
          <a
            href="#contact"
            className="group relative overflow-hidden hidden md:inline-flex items-center px-5 py-2 rounded-full bg-white text-axion-black text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-orange-500 hover:text-white"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-6">
              Book Appointment
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              Book Appointment
            </span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-white p-1"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-500 ${
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* Mobile Bottom Sheet */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-axion-dark border-t border-white/10 rounded-t-3xl transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          isMobileOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex flex-col p-8 gap-6">
          {/* Drag Handle */}
          <div className="w-10 h-1 rounded-full bg-white/20 mx-auto" />

          {/* Nav Links */}
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block text-lg text-gray-300 hover:text-white transition-colors py-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <a
            href="#contact"
            onClick={() => setIsMobileOpen(false)}
            className="w-full text-center px-5 py-3 rounded-full bg-white text-axion-black font-medium transition-all duration-500 hover:bg-orange-500 hover:text-white"
          >
            Book Appointment
          </a>

          {/* Clinic Status in Mobile */}
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <Clock size={10} className="text-green-400" />
            <span>Clinic Open | Appointments Available</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
