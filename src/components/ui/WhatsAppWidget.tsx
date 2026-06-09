import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
  const phoneNumber = '+15551234567';
  const message = encodeURIComponent('Hello! I\'d like to book a dental appointment.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center animate-pulse shadow-green-500/30"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={24} fill="white" />
    </a>
  );
}
