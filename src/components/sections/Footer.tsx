import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative py-16 md:py-20 px-6 bg-axion-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="text-white font-semibold text-lg tracking-tight">
              Axion<span className="text-orange-500">.</span> Dental
            </a>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed max-w-xs">
              Where precision meets compassion. Advanced dental care 
              crafted for smiles that last a lifetime.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {['Services', 'About', 'Reviews', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-500 text-sm hover:text-orange-500 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-500 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-500 text-sm">hello@axiondental.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-500 text-sm">123 Harley Street<br />London, W1G 9QH</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Clinic Hours</h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-3">
                <Clock size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-500 text-sm">
                  <p>Mon–Fri: 8:00 AM – 6:00 PM</p>
                  <p>Sat: 9:00 AM – 3:00 PM</p>
                  <p className="text-gray-600">Sun: Closed</p>
                </div>
              </li>
            </ul>

            {/* Book CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full bg-orange-500 text-white text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-orange-600"
            >
              Book Appointment
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Axion Dental Clinic. All rights reserved.
          </p>
          
          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-500 text-xs hover:text-white transition-colors"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}