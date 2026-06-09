import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const AUTOMATED_REPLIES: Record<string, string> = {
  'hello': 'Welcome to Axion Dental Clinic! How can I help you today? 😊',
  'hi': 'Hello! Thanks for reaching out. Would you like to book an appointment or learn more about our services?',
  'appointment': 'I\'d be happy to help you schedule an appointment! Please call us at (555) 123-4567 or visit our Contact section to book online.',
  'hours': 'Our clinic hours are:\nMon-Fri: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 3:00 PM\nSunday: Closed',
  'price': 'We offer a range of payment options and accept most insurance plans. Please schedule a consultation for a personalized treatment plan.',
  'default': 'Thank you for your message. A member of our team will get back to you shortly. For immediate assistance, please call (555) 123-4567.',
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sent: boolean }[]>([
    { text: 'Welcome to Axion Dental! How can we help you?', sent: false },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { text: userMsg, sent: true }]);
    setInput('');

    // Mock response
    setTimeout(() => {
      const lower = userMsg.toLowerCase();
      let reply = AUTOMATED_REPLIES.default;
      for (const [key, value] of Object.entries(AUTOMATED_REPLIES)) {
        if (lower.includes(key)) {
          reply = value;
          break;
        }
      }
      setMessages(prev => [...prev, { text: reply, sent: false }]);
    }, 800);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 left-6 z-50 w-[350px] max-w-[calc(100vw-3rem)] rounded-2xl overflow-hidden bg-axion-dark border border-white/10 shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-orange-500">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle size={16} className="text-white" />
            </div>
            <div>
              <p className="text-white text-sm font-medium">Axion Dental</p>
              <p className="text-white/70 text-xs">Typically replies instantly</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-3 flex flex-col">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                msg.sent
                  ? 'bg-orange-500 text-white self-end rounded-br-md'
                  : 'bg-white/10 text-gray-200 self-start rounded-bl-md'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 p-3 border-t border-white/5">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1 bg-white/5 rounded-full px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:ring-1 focus:ring-orange-500/50"
          />
          <button
            onClick={handleSend}
            className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </>
  );
}