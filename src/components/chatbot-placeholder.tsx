'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, MessageCircle } from 'lucide-react';
import { chatbotFaqs } from '../lib/chatbot-faq';

export default function ChatbotPlaceholder() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hello! I'm the Moh-AI Assistant. How can we accelerate your business today?"
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const formatText = (text: string) => {
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/\n/g, '<br/>');
    return formatted;
  };

  const getBotResponse = (query: string) => {
    const lowerQuery = query.toLowerCase();
    for (const faq of chatbotFaqs) {
      if (faq.keywords.some(kw => lowerQuery.includes(kw))) {
        return faq.answer;
      }
    }
    return "Thanks for reaching out! To discuss your specific needs in detail, please use the 'Contact on WhatsApp' button below or email info@mohaitech.in.";
  };

  const handleSend = (e?: React.FormEvent, customText?: string) => {
    e?.preventDefault();
    const textToSend = customText || input;
    if (!textToSend.trim()) return;
    
    setMessages(prev => [...prev, { type: 'user', text: textToSend }]);
    if (!customText) setInput('');
    
    setTimeout(() => {
      const response = getBotResponse(textToSend);
      setMessages(prev => [...prev, { type: 'bot', text: response }]);
    }, 600);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919566852700?text=Hi,%20I%20am%20interested%20in%20a%20custom%20AI%20project.', '_blank');
  };

  const quickActions = [
    { label: "Our Services", query: "services" },
    { label: "Past Projects", query: "projects" },
    { label: "Pricing Options", query: "pricing" }
  ];

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 right-8 rounded-full w-14 h-14 shadow-[0_8px_30px_rgba(44,31,168,0.3)] z-50 bg-gradient-to-tr from-[#2C1FA8] to-[#00C8E0] text-white border-none flex items-center justify-center cursor-pointer"
            onClick={toggleChat}
            aria-label="Open Chatbot"
          >
            <Bot className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-8 right-8 w-[350px] h-[520px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] flex flex-col z-50 rounded-2xl bg-white/90 backdrop-blur-xl border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#2C1FA8] to-[#00C8E0] p-4 text-white flex justify-between items-center shadow-md">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 opacity-90" />
                <span className="font-semibold text-sm tracking-wide">Moh-AI Assistant</span>
              </div>
              <button 
                onClick={toggleChat}
                className="text-white/80 hover:text-white transition-colors bg-white/10 rounded-full p-1"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-3 bg-gray-50/50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[85%] p-3 rounded-2xl text-[13px] leading-relaxed ${
                      msg.type === 'user' 
                        ? 'bg-[#2C1FA8] text-white rounded-tr-sm shadow-md' 
                        : 'bg-white text-gray-800 rounded-tl-sm shadow-sm border border-gray-200'
                    }`}
                    dangerouslySetInnerHTML={{ __html: formatText(msg.text) }}
                  />
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions & WhatsApp */}
            <div className="px-3 pb-2 pt-1 bg-white border-t border-gray-100 flex flex-col gap-2">
              <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar" style={{ scrollbarWidth: 'none' }}>
                {quickActions.map((action, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(undefined, action.query)}
                    className="whitespace-nowrap px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-[12px] font-medium rounded-full transition-colors border border-gray-200"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
              
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-2 bg-[#25D366] hover:bg-[#128C7E] text-white text-[13px] font-semibold rounded-lg transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Contact on WhatsApp
              </button>
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-100">
              <form onSubmit={handleSend} className="flex items-center gap-2 bg-gray-50 rounded-full border border-gray-200 px-1 py-1">
                <input 
                  type="text" 
                  placeholder="Type a message..." 
                  className="flex-grow bg-transparent border-none outline-none text-[13px] px-3 text-gray-700 placeholder:text-gray-400"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button 
                  type="submit"
                  disabled={!input.trim()}
                  className="bg-[#2C1FA8] text-white p-2 rounded-full hover:bg-[#1f1580] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
