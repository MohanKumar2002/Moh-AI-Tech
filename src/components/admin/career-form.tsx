
'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import type { CareerOpening } from '@/types';
import type { CareerFormState } from '@/actions/career';
import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import { useLanguage } from '@/contexts/language-context';

interface CareerFormProps {
  action: (prevState: CareerFormState, data: FormData) => Promise<CareerFormState>;
  initialData?: CareerOpening | null;
  formTitle: string; // Passed translated
  submitButtonText: string; // Passed translated
}

function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();
  const { t } = useLanguage();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? t({ en: 'Saving...', ta: 'சேமிக்கிறது...' }) : text}
    </Button>
  );
}

export default function CareerForm({ action, initialData, formTitle, submitButtonText }: CareerFormProps) {
  const { t, language } = useLanguage();
  const initialState: CareerFormState = { message: '', success: false };
  const [state, formAction] = useActionState(action, initialState);
  const { toast } = useToast();
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? t({ en: 'Success!', ta: 'வெற்றி!' }) : t({ en: 'Error', ta: 'பிழை' }),
        description: state.message, // Server messages might not be translated
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        router.push('/admin/careers');
      }
    }
  }, [state, toast, router, t]);

  const jobTypes = [
    { value: 'Full-time', label: { en: 'Full-time', ta: 'முழு நேரம்' } },
    { value: 'Part-time', label: { en: 'Part-time', ta: 'பகுதி நேரம்' } },
    { value: 'Contract', label: { en: 'Contract', ta: 'ஒப்பந்தம்' } },
    { value: 'Internship', label: { en: 'Internship', ta: 'பயிற்சி' } },
  ];

  return (
    <form ref={formRef} action={formAction} className="space-y-6 max-w-2xl">
      <h2 className="text-2xl font-headline font-semibold">{formTitle}</h2>
      {initialData?.id && <input type="hidden" name="id" defaultValue={initialData.id} />}
      
      <div>
        <Label htmlFor="title">{t({ en: "Job Title", ta: "பணி தலைப்பு" })}</Label>
        <Input id="title" name="title" defaultValue={initialData?.title || ''} required />
        {state.issues?.find(issue => issue.startsWith('title:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('title:'))?.split(': ')[1]}</p>}
      </div>

      <div>
        <Label htmlFor="location">{t({ en: "Location", ta: "இடம்" })}</Label>
        <Input id="location" name="location" defaultValue={initialData?.location || ''} required />
        {state.issues?.find(issue => issue.startsWith('location:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('location:'))?.split(': ')[1]}</p>}
      </div>
      
      <div>
        <Label htmlFor="type">{t({ en: "Job Type", ta: "பணி வகை" })}</Label>
        <Select name="type" defaultValue={initialData?.type || 'Full-time'}>
          <SelectTrigger id="type">
            <SelectValue placeholder={t({ en: "Select job type", ta: "பணி வகையைத் தேர்ந்தெடுக்கவும்" })} />
          </SelectTrigger>
          <SelectContent>
            {jobTypes.map(jobType => (
              <SelectItem key={jobType.value} value={jobType.value}>
                {jobType.label[language]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
         {state.issues?.find(issue => issue.startsWith('type:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('type:'))?.split(': ')[1]}</p>}
      </div>

      <div>
        <Label htmlFor="department">{t({ en: "Department", ta: "துறை" })}</Label>
        <Input id="department" name="department" defaultValue={initialData?.department || ''} required />
        {state.issues?.find(issue => issue.startsWith('department:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('department:'))?.split(': ')[1]}</p>}
      </div>

      <div>
        <Label htmlFor="description">{t({ en: "Description", ta: "விளக்கம்" })}</Label>
        <Textarea id="description" name="description" rows={5} defaultValue={initialData?.description || ''} required />
        {state.issues?.find(issue => issue.startsWith('description:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('description:'))?.split(': ')[1]}</p>}
      </div>
      
      <div>
        <Label htmlFor="requirements">{t({ en: "Requirements (one per line)", ta: "தேவைகள் (ஒரு வரிக்கு ஒன்று)" })}</Label>
        <Textarea id="requirements" name="requirements" rows={5} defaultValue={initialData?.requirements?.join('\n') || ''} required />
        {state.issues?.find(issue => issue.startsWith('requirements:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('requirements:'))?.split(': ')[1]}</p>}
      </div>
      
      <SubmitButton text={submitButtonText} />
      {!state.success && state.message && !state.issues && (
         <p className="text-sm text-destructive mt-2">{state.message}</p>
      )}
    </form>
  );
}
