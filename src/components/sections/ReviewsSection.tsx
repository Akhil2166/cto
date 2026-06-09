import { Star, MapPin, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Sarah M.',
    text: 'Absolutely transformative experience. Dr. Alexandra and her team made me feel completely at ease. My smile has never looked better!',
    rating: 5,
    date: '2 weeks ago',
  },
  {
    name: 'James K.',
    text: 'The 3D-guided implant procedure was painless and remarkably fast. State-of-the-art facility with genuine care. Highly recommended.',
    rating: 5,
    date: '1 month ago',
  },
  {
    name: 'Elena R.',
    text: 'From the moment I walked in, I knew I was in good hands. The advanced hygiene treatment left my teeth feeling incredible.',
    rating: 5,
    date: '3 weeks ago',
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-24 md:py-32 px-6 bg-axion-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 block">
          Patient Stories
        </span>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight tracking-[-0.03em] text-white max-w-xl">
            Smiles that speak
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
              for themselves.
            </span>
          </h2>
          {/* Overall Rating */}
          <div className="flex items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <span className="text-white font-bold text-lg">4.9</span>
            <span className="text-gray-500 text-sm">(200+ reviews)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-6 bg-axion-gray border border-white/5 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:border-white/10 hover:-translate-y-1"
            >
              <Quote size={24} className="text-orange-500/30 mb-3" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={14} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <span className="text-white font-medium text-sm">{review.name}</span>
                <span className="text-gray-500 text-xs">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Map / Location */}
        <div className="mt-12 md:mt-16 rounded-2xl overflow-hidden bg-axion-gray border border-white/5">
          <div className="flex flex-col md:flex-row">
            {/* Map Placeholder */}
            <div className="flex-1 aspect-video md:aspect-auto md:min-h-[300px] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={40} className="text-orange-500 mx-auto mb-2" />
                <p className="text-gray-400 text-sm">123 Harley Street</p>
                <p className="text-gray-500 text-xs">London, W1G 9QH</p>
              </div>
            </div>
            {/* Location Info */}
            <div className="p-6 md:p-8 flex flex-col justify-center md:max-w-sm">
              <h3 className="text-white font-bold text-lg mb-2">Visit Our Clinic</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Conveniently located in the heart of London's medical district. 
                Free parking available for all patients.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>Mon–Fri: 8:00 AM – 6:00 PM</p>
                <p>Saturday: 9:00 AM – 3:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-orange-500 text-sm font-medium hover:text-orange-400 transition-colors"
              >
                <MapPin size={14} />
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}