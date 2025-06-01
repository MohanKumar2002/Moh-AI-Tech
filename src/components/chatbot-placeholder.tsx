
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Bot, X, Send } from 'lucide-react'; // Removed MessageSquare as it's not used here
import { ScrollArea } from './ui/scroll-area';
import { useLanguage } from '@/contexts/language-context';

export default function ChatbotPlaceholder() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ type: 'user' | 'bot'; text: string }[]>([
    { type: 'bot', text: t({ en: "Hello! I'm Moh-AI, your virtual assistant. How can I help you today?", ta: "வணக்கம்! நான் மோ-ஏஐ, உங்கள் மெய்நிகர் உதவியாளர். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?"}) }
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    
    const newUserMessage = { type: 'user' as 'user', text: inputValue };
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = { type: 'bot' as 'bot', text: t({ en: "Thanks for your message! I'm currently a placeholder, but a real AI will respond soon.", ta: "உங்கள் செய்திக்கு நன்றி! நான் தற்போது ஒரு ஒதுக்கிடமாக இருக்கிறேன், ஆனால் ஒரு உண்மையான AI விரைவில் பதிலளிக்கும்."}) };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  if (!isOpen) {
    return (
      <Button
        className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-lg"
        onClick={toggleChat}
        aria-label={t({ en: "Open Chatbot", ta: "சாட்பாட்டைத் திற"})}
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
          <CardTitle className="text-lg font-headline">{t({ en: "Moh-AI Assistant", ta: "மோ-ஏஐ உதவியாளர்"})}</CardTitle>
        </div>
        <Button variant="ghost" size="icon" onClick={toggleChat} aria-label={t({ en: "Close Chatbot", ta: "சாட்பாட்டை மூடு"})}>
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
            placeholder={t({ en: "Type a message...", ta: "ஒரு செய்தியைத் தட்டச்சு செய்க..."})}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit" size="icon" aria-label={t({ en: "Send Message", ta: "செய்தியை அனுப்பு"})}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
