
'use client'; 

import PageHeader from '@/components/shared/page-header';
import ContactForm from '@/components/features/contact/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/contexts/language-context';

export default function ContactPage() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const productInquiry = searchParams.get('product');
  const subjectInquiry = searchParams.get('subject');
  
  let initialSubject = '';
  if (productInquiry) {
    // Keep product ID in English for consistency as it's an identifier
    initialSubject = `${t({ en: "Inquiry about product ID:", ta: "தயாரிப்பு ஐடி பற்றிய விசாரணை:" })} ${productInquiry}`;
  } else if (subjectInquiry) {
    initialSubject = subjectInquiry; // Assume subject might already be somewhat contextual or user-input
  }


  return (
    <div className="space-y-12">
      <PageHeader
        title={t({ en: "Contact Us", ta: "எங்களைத் தொடர்புகொள்ளவும்" })}
        description={t({ en: "Have questions or want to discuss a project? We're here to help.", ta: "கேள்விகள் உள்ளதா அல்லது ஒரு திட்டத்தைப் பற்றி விவாதிக்க விரும்புகிறீர்களா? நாங்கள் உதவ இங்கே இருக்கிறோம்." })}
      />
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <ContactForm initialSubject={initialSubject} />
        </div>
        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-xl flex items-center">
                <MapPin className="h-6 w-6 mr-3 text-primary" />
                {t({ en: "Our Office", ta: "எங்கள் அலுவலகம்" })}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>{t({ en: "Vasanthapuram", ta: "வசந்தபுரம்" })}</p>
              <p>{t({ en: "Namakkal, Tamil Nadu", ta: "நாமக்கல், தமிழ்நாடு" })}</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-xl flex items-center">
                <Mail className="h-6 w-6 mr-3 text-primary" />
                {t({ en: "Email Us", ta: "எங்களுக்கு மின்னஞ்சல் அனுப்புங்கள்" })}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>{t({ en: "General Inquiries:", ta: "பொது விசாரணைகள்:" })} <a href="mailto:info@mohai.tech" className="text-accent hover:underline">info@mohai.tech</a></p>
              <p>{t({ en: "Support:", ta: "ஆதரவு:" })} <a href="mailto:support@mohai.tech" className="text-accent hover:underline">support@mohai.tech</a></p>
              <p>{t({ en: "Careers:", ta: "வேலைவாய்ப்புகள்:" })} <a href="mailto:careers@mohai.tech" className="text-accent hover:underline">careers@mohai.tech</a></p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-xl flex items-center">
                <Phone className="h-6 w-6 mr-3 text-primary" />
                {t({ en: "Call Us", ta: "எங்களை அழைக்கவும்" })}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>{t({ en: "Main Office:", ta: "தலைமை அலுவலகம்:" })} +91 (956)-685-2700</p>
              <p>{t({ en: "Sales:", ta: "விற்பனை:" })} +91 (956)-685-2700</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
