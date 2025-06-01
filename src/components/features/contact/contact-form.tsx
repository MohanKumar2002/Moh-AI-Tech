
'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { submitContactForm, type ContactFormState } from '@/actions/contact';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import { useLanguage } from '@/contexts/language-context';

function SubmitButton() {
  const { pending } = useFormStatus();
  const { t } = useLanguage();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? t({ en: 'Sending...', ta: 'அனுப்புகிறது...' }) : t({ en: 'Send Message', ta: 'செய்தியை அனுப்பு' })}
    </Button>
  );
}

interface ContactFormProps {
  initialSubject?: string;
}

export default function ContactForm({ initialSubject }: ContactFormProps) {
  const { t } = useLanguage();
  const initialState: ContactFormState = { message: '', success: false };
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? t({ en: 'Success!', ta: 'வெற்றி!' }) : t({ en: 'Error', ta: 'பிழை' }),
        description: state.message, // Assuming server messages are not translated for now
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast, t]);

  return (
    <Card className="w-full max-w-lg mx-auto shadow-xl">
      <CardHeader className="text-center">
        <div className="inline-block p-3 bg-primary/10 rounded-full mb-3 mx-auto w-fit">
           <Mail className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="font-headline text-2xl">{t({ en: "Get in Touch", ta: "தொடர்பில் இருங்கள்" })}</CardTitle>
        <CardDescription>
          {t({ 
            en: "We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.", 
            ta: "உங்களிடமிருந்து கேட்க நாங்கள் விரும்புகிறோம். கீழே உள்ள படிவத்தை நிரப்பவும், நாங்கள் விரைவில் உங்களைத் தொடர்புகொள்வோம்." 
          })}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-6">
          <div>
            <Label htmlFor="name">{t({ en: "Full Name", ta: "முழு பெயர்" })}</Label>
            <Input id="name" name="name" type="text" placeholder={t({ en: "John Doe", ta: "ஜான் டோ" })} required />
            {state.issues && state.issues.find(issue => issue.toLowerCase().includes('name')) && (
              <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.toLowerCase().includes('name'))}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">{t({ en: "Email Address", ta: "மின்னஞ்சல் முகவரி" })}</Label>
            <Input id="email" name="email" type="email" placeholder={t({ en: "john.doe@example.com", ta: "john.doe@example.com" })} required />
             {state.issues && state.issues.find(issue => issue.toLowerCase().includes('email')) && (
              <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.toLowerCase().includes('email'))}</p>
            )}
          </div>
          <div>
            <Label htmlFor="subject">{t({ en: "Subject", ta: "பொருள்" })}</Label>
            <Input id="subject" name="subject" type="text" placeholder={t({ en: "Inquiry about AI services", ta: "AI சேவைகள் பற்றிய விசாரணை" })} defaultValue={initialSubject} required />
             {state.issues && state.issues.find(issue => issue.toLowerCase().includes('subject')) && (
              <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.toLowerCase().includes('subject'))}</p>
            )}
          </div>
          <div>
            <Label htmlFor="message">{t({ en: "Message", ta: "செய்தி" })}</Label>
            <Textarea id="message" name="message" placeholder={t({ en: "Your message here...", ta: "உங்கள் செய்தி இங்கே..." })} rows={5} required />
             {state.issues && state.issues.find(issue => issue.toLowerCase().includes('message')) && (
              <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.toLowerCase().includes('message'))}</p>
            )}
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
