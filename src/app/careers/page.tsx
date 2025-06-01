
'use client';

import PageHeader from '@/components/shared/page-header';
import CareerCard from '@/components/features/careers/career-card';
import { careerOpeningsData } from '@/lib/data-store';
import type { CareerOpening } from '@/types';
import { useLanguage } from '@/contexts/language-context';
import { useEffect, useState } from 'react';

async function getCareerOpeningsSsr(): Promise<CareerOpening[]> {
  return Array.from(careerOpeningsData.values()).sort((a,b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime());
}

export default function CareersPage() {
  const { t } = useLanguage();
  const [openings, setOpenings] = useState<CareerOpening[]>([]);

  useEffect(() => {
    async function fetchOpenings() {
      const fetchedOpenings = await getCareerOpeningsSsr();
      setOpenings(fetchedOpenings);
    }
    fetchOpenings();
  }, []);


  return (
    <div className="space-y-12">
      <PageHeader
        title={t({ en: "Join Our Team", ta: "எங்கள் அணியில் சேருங்கள்" })}
        description={t({ en: "Explore exciting career opportunities at Moh-AI Tech and help us shape the future of AI.", ta: "மோ-ஏஐ டெக்கில் அற்புதமான தொழில் வாய்ப்புகளை ஆராய்ந்து, AI இன் எதிர்காலத்தை வடிவமைக்க எங்களுக்கு உதவுங்கள்." })}
      />
      {openings.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-8">
          {openings.map(opening => (
            <CareerCard key={opening.id} opening={opening} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-2xl font-semibold text-muted-foreground mb-4">
            {t({ en: "No Openings Currently", ta: "தற்போது ఖాலி இடங்கள் இல்லை" })}
          </p>
          <p className="text-foreground">
            {t({ 
              en: "We are always on the lookout for talented individuals. Please check back later or send us your resume at careers@mohai.tech.", 
              ta: "திறமையான நபர்களை நாங்கள் எப்போதும் தேடுகிறோம். தயவுசெய்து பின்னர் சரிபார்க்கவும் அல்லது உங்கள் விண்ணப்பத்தை careers@mohai.tech இல் எங்களுக்கு அனுப்பவும்." 
            })}
          </p>
        </div>
      )}
    </div>
  );
}
