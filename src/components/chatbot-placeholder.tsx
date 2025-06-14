'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Bot, X, Send } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { useLanguage } from '@/contexts/language-context';

interface Message {
  type: 'user' | 'bot';
  text: string;
}

export default function ChatbotPlaceholder() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      text: t({
        en: "Hello! I'm Moh-AI, your virtual assistant. How can I help you today?",
        ta: "வணக்கம்! நான் மோ-ஏஐ, உங்கள் மெய்நிகர் உதவியாளர். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
      }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const predefinedResponses: { [key: string]: { en: string; ta: string } } = {
    pricing: {
      en: 'Our pricing varies by product. You can view plans on each product page.',
      ta: 'விலை திட்டங்கள் தயாரிப்பு அடிப்படையில் மாறுகின்றன. ஒவ்வொரு தயாரிப்பு பக்கத்திலும் காணலாம்.',
    },
    demo: {
      en: 'You can request a demo by clicking the "Schedule a Meeting" button on any product page.',
      ta: 'எந்த தயாரிப்பு பக்கத்திலும் "மீட்டிங் ஒதுக்கவும்" பொத்தானைக் கிளிக் செய்து டெமோ கோரிக்கையிடலாம்.',
    },
    contact: {
      en: 'To contact us, please visit the contact page or email us directly.',
      ta: 'தொடர்பு கொள்ள, தயவுசெய்து எங்கள் தொடர்பு பக்கத்துக்குச் செல்லவும் அல்லது நேரடியாக மின்னஞ்சல் செய்யவும்.',
    },
    refund: {
      en: 'We offer a refund as per our policy within 7 days of purchase.',
      ta: 'எங்கள் கொள்கையின் படி, வாங்கிய 7 நாட்களுக்குள் பணத்தைத் திருப்பிச் செலுத்துகிறோம்.',
    },
    default: {
      en: "Thanks for your message! I'm here to assist with general queries. Please try asking about pricing, demo, or contact.",
      ta: "உங்கள் செய்திக்கு நன்றி! விலை, டெமோ, தொடர்பு போன்ற பொதுக் கேள்விகளுக்காக இங்கே உதவுகிறேன்.",
    },
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { type: 'user', text: inputValue };
    setMessages((prev) => [...prev, userMessage]);

    const userInput = inputValue.toLowerCase();
    setInputValue('');

    // Check for matching keywords
    let responseKey: keyof typeof predefinedResponses = 'default';
    if (userInput.includes('price') || userInput.includes('விலை')) responseKey = 'pricing';
    else if (userInput.includes('demo') || userInput.includes('டெமோ')) responseKey = 'demo';
    else if (userInput.includes('contact') || userInput.includes('தொடர்பு')) responseKey = 'contact';
    else if (userInput.includes('refund') || userInput.includes('பணத்தை')) responseKey = 'refund';

    const botResponse = {
      type: 'bot',
      text: predefinedResponses[responseKey][language],
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, botResponse]);
    }, 600);
  };

  if (!isOpen) {
    return (
      <Button
        className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-lg"
        onClick={toggleChat}
        aria-label={t({ en: 'Open Chatbot', ta: 'சாட்பாட்டைத் திற' })}
      >
        <Bot className="h-8 w-8" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-80 h-[28rem] shadow-xl flex flex-col z-50 rounded-lg">
      <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-primary" />
          <CardTitle className="text-lg font-headline">
            {t({ en: 'Moh-AI Assistant', ta: 'மோ-ஏஐ உதவியாளர்' })}
          </CardTitle>
        </div>
        <Button variant="ghost" size="icon" onClick={toggleChat} aria-label={t({ en: 'Close Chatbot', ta: 'சாட்பாட்டை மூடு' })}>
          <X className="h-5 w-5" />
        </Button>
      </CardHeader>
      <ScrollArea className="flex-grow p-4 bg-muted/30">
        <div className="space-y-3">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[75%] p-2 rounded-lg text-sm ${
                  msg.type === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <CardFooter className="p-2 border-t">
        <form onSubmit={handleSendMessage} className="flex w-full items-center gap-2">
          <Input
            type="text"
            placeholder={t({ en: 'Type a message...', ta: 'ஒரு செய்தியைத் தட்டச்சு செய்க...' })}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit" size="icon" aria-label={t({ en: 'Send Message', ta: 'செய்தியை அனுப்பு' })}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
