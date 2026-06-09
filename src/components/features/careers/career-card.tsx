
'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { CareerOpening } from '@/types';
import { MapPin, Briefcase, Building, CalendarDays } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';

interface CareerCardProps {
  opening: CareerOpening;
}

export default function CareerCard({ opening }: CareerCardProps) {
  const { language, t } = useLanguage();
  
  // Assuming opening.type is one of 'Full-time', 'Part-time', 'Contract', 'Internship'
  // And these exact English strings are used as keys for translation
  const jobTypeTranslations: Record<string, Record<string, string>> = {
    'Full-time': { en: 'Full-time', ta: 'முழு நேரம்' },
    'Part-time': { en: 'Part-time', ta: 'பகுதி நேரம்' },
    'Contract': { en: 'Contract', ta: 'ஒப்பந்தம்' },
    'Internship': { en: 'Internship', ta: 'பயிற்சி' },
  };

  const translatedJobType = jobTypeTranslations[opening.type] 
    ? jobTypeTranslations[opening.type][language] || opening.type
    : opening.type;


  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="font-headline text-xl text-primary">{opening.title}</CardTitle>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mt-1">
          <span className="flex items-center"><MapPin className="h-3.5 w-3.5 mr-1" />{opening.location}</span>
          <span className="flex items-center"><Briefcase className="h-3.5 w-3.5 mr-1" />{translatedJobType}</span>
          <span className="flex items-center"><Building className="h-3.5 w-3.5 mr-1" />{opening.department}</span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-3">{opening.description}</CardDescription>
         <p className="text-xs text-muted-foreground mt-3 flex items-center">
            <CalendarDays className="h-3.5 w-3.5 mr-1" /> 
            {t({ en: "Posted", ta: "பதிவிடப்பட்டது" })}: {new Date(opening.postedDate).toLocaleDateString(language === 'ta' ? 'ta-IN' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" asChild>
          <Link href={`/contact?subject=Application for ${opening.title} (ID: ${opening.id})`}>
            {t({ en: "Apply Now / Learn More", ta: "இப்போதே விண்ணப்பிக்கவும் / மேலும் அறிக" })}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
