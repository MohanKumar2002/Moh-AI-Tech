
'use client';

import CareerForm from '@/components/admin/career-form';
import { updateCareerOpening } from '@/actions/career';
import { careerOpeningsData } from '@/lib/data-store';
import type { CareerOpening } from '@/types';
import PageHeader from '@/components/shared/page-header';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';


async function getCareerOpeningSsr(id: string): Promise<CareerOpening | null> {
  return careerOpeningsData.get(id) || null;
}

export default function EditCareerPage() {
  const { t } = useLanguage();
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : '';
  
  const [opening, setOpening] = useState<CareerOpening | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getCareerOpeningSsr(id).then(data => {
        setOpening(data);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div>{t({ en: "Loading...", ta: "ஏற்றுகிறது..." })}</div>;
  }

  if (!opening) {
    return (
      <div>
        <PageHeader 
            title={t({ en: "Error: Career Opening Not Found", ta: "பிழை: வேலை வாய்ப்பு காணப்படவில்லை" })} 
            className="text-left mb-8" 
        />
        <p>{t({ en: "The career opening you are trying to edit does not exist.", ta: "நீங்கள் திருத்த முயற்சிக்கும் வேலை வாய்ப்பு இல்லை." })}</p>
         <Button asChild variant="link" className="mt-4 pl-0">
            <Link href="/admin/careers"><ArrowLeft className="mr-2 h-4 w-4"/>{t({ en: "Back to Career Management", ta: "வேலைவாய்ப்பு நிர்வாகத்திற்குத் திரும்பு" })}</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <PageHeader 
        title={t({ en: "Edit Career Opening", ta: "வேலை வாய்ப்பைத் திருத்து" })} 
        className="text-left mb-8" 
      />
      <CareerForm 
        action={updateCareerOpening} 
        initialData={opening}
        formTitle={t({ en: "Update Opening Details", ta: "வாய்ப்பு விவரங்களைப் புதுப்பிக்கவும்" })}
        submitButtonText={t({ en: "Save Changes", ta: "மாற்றங்களைச் சேமி" })}
      />
    </div>
  );
}
