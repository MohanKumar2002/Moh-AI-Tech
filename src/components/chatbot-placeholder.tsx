'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Bot, X } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { useLanguage } from '@/contexts/language-context';

const faqs = [
  {
    question: {
      en: "What is Moh-AI Tech?",
      ta: "மோ-ஏஐ டெக் என்றால் என்ன?"
    },
    answer: {
      en: "Moh-AI Tech is an AI solutions company building innovative tools like resume builders, chatbots, summarizers, and more.",
      ta: "மோ-ஏஐ டெக் என்பது ரெஸ்யூம் பில்டர், சாட்பாட், சுருக்கி போன்ற புதுமையான கருவிகளை உருவாக்கும் AI தீர்வு நிறுவனம்."
    }
  },
  {
    question: {
      en: "What products do you offer?",
      ta: "நீங்கள் எந்த தயாரிப்புகளை வழங்குகிறீர்கள்?"
    },
    answer: {
      en: "We offer AI Resume Builder, Smart Chatbot, Video Generator, OCR Engine, and Text Summarizer with bilingual support.",
      ta: "AI ரெஸ்யூம் பில்டர், ஸ்மார்ட் சாட்பாட், வீடியோ ஜெனரேட்டர், OCR இயந்திரம், உரை சுருக்கி போன்றவற்றை வழங்குகிறோம்."
    }
  },
  {
    question: {
      en: "How can I schedule a demo?",
      ta: "டெமோவை எப்படி திட்டமிடலாம்?"
    },
    answer: {
      en: "You can go to any product page and click 'Schedule a Demo' to request a meeting with our team.",
      ta: "ஏதேனும் தயாரிப்பு பக்கத்திற்குச் சென்று 'டெமோவை திட்டமிடு' என்பதைக் கிளிக் செய்து ஒரு சந்திப்பை கோரலாம்."
    }
  },
  {
    question: {
      en: "How can I contact your team?",
      ta: "உங்கள் குழுவை எப்படி தொடர்புகொள்வது?"
    },
    answer: {
      en: "Use the Contact page to send us a message or schedule a call. We’ll get back to you shortly.",
      ta: "தொடர்பு பக்கத்தைப் பயன்படுத்தி எங்களுக்கு செய்தி அனுப்பலாம் அல்லது ஒரு அழைப்பை திட்டமிடலாம். விரைவில் பதிலளிக்கிறோம்."
    }
  }
];

export default function ChatbotPlaceholder() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: t({
        en: "Hello! I'm Moh-AI, your virtual assistant. How can I help you today?",
        ta: "வணக்கம்! நான் மோ-ஏஐ, உங்கள் மெய்நிகர் உதவியாளர். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?"
      })
    }
  ]);

  const handleSelect = (faq: typeof faqs[0]) => {
    setMessages((prev) => [
      ...prev,
      { type: 'user', text: faq.question[language] },
      { type: 'bot', text: faq.answer[language] }
    ]);
  };

  const toggleChat = () => setIsOpen(!isOpen);

  if (!isOpen) {
    return (
      <Button
        className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-lg z-50"
        onClick={toggleChat}
        aria-label={t({ en: "Open Chatbot", ta: "சாட்பாட்டைத் திற" })}
      >
        <Bot className="h-8 w-8" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-80 h-[32rem] shadow-xl flex flex-col z-50 rounded-lg">
      <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-primary" />
          <CardTitle className="text-lg font-headline">
            {t({ en: "Moh-AI Assistant", ta: "மோ-ஏஐ உதவியாளர்" })}
          </CardTitle>
        </div>
        <Button variant="ghost" size="icon" onClick={toggleChat}>
          <X className="h-5 w-5" />
        </Button>
      </CardHeader>

      <ScrollArea className="flex-grow p-4 bg-muted/30">
        <div className="space-y-3">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[75%] p-2 rounded-lg text-sm ${msg.type === 'user' ? 'bg-primary text-white' : 'bg-secondary'}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <CardFooter className="p-3 border-t flex flex-col gap-2">
        {faqs.map((faq, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            onClick={() => handleSelect(faq)}
            className="w-full text-left"
          >
            {faq.question[language]}
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
}

