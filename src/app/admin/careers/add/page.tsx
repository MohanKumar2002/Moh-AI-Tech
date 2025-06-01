
'use client';

import CareerForm from '@/components/admin/career-form';
import { createCareerOpening } from '@/actions/career';
import PageHeader from '@/components/shared/page-header';
import { useLanguage } from '@/contexts/language-context';

export default function AddCareerPage() {
  const { t } = useLanguage();
  return (
    <div>
      <PageHeader 
        title={t({ en: "Add New Career Opening", ta: "புதிய வேலை வாய்ப்பைச் சேர்" })} 
        className="text-left mb-8" 
      />
      <CareerForm 
        action={createCareerOpening} 
        formTitle={t({ en: "Create New Opening", ta: "புதிய வாய்ப்பை உருவாக்கு" })}
        submitButtonText={t({ en: "Create Opening", ta: "வாய்ப்பை உருவாக்கு" })}
      />
    </div>
  );
}
