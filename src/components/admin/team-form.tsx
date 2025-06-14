
'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import type { TeamMember } from '@/types';
import type { TeamMemberFormState } from '@/actions/team';
import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import { useLanguage } from '@/contexts/language-context';

interface TeamMemberFormProps {
  action: (prevState: TeamMemberFormState, data: FormData) => Promise<TeamMemberFormState>;
  initialData?: TeamMember | null;
  formTitle: string;
  submitButtonText: string;
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

export default function TeamMemberForm({ action, initialData, formTitle, submitButtonText }: TeamMemberFormProps) {
  const { t } = useLanguage();
  const initialState: TeamMemberFormState = { message: '', success: false };
  const [state, formAction] = useActionState(action, initialState);
  const { toast } = useToast();
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? t({ en: 'Success!', ta: 'வெற்றி!' }) : t({ en: 'Error', ta: 'பிழை' }),
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        router.push('/admin/team');
      }
    }
  }, [state, toast, router, t]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6 max-w-2xl">
      <h2 className="text-2xl font-headline font-semibold">{formTitle}</h2>
      {initialData?.id && <input type="hidden" name="originalId" defaultValue={initialData.id} />}
      
      <div>
        <Label htmlFor="id">{t({ en: "Member ID (Unique, lowercase, hyphens)", ta: "உறுப்பினர் ஐடி (தனிப்பட்ட, சிறிய எழுத்து, ஹைபன்கள்)" })}</Label>
        <Input id="id" name="id" defaultValue={initialData?.id || ''} required />
        {state.issues?.find(issue => issue.startsWith('id:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('id:'))?.split(': ')[1]}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name_en">{t({ en: "Name (English)", ta: "பெயர் (ஆங்கிலம்)" })}</Label>
          <Input id="name_en" name="name_en" defaultValue={initialData?.name.en || ''} required />
          {state.issues?.find(issue => issue.startsWith('name_en:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('name_en:'))?.split(': ')[1]}</p>}
        </div>
        <div>
          <Label htmlFor="name_ta">{t({ en: "Name (Tamil)", ta: "பெயர் (தமிழ்)" })}</Label>
          <Input id="name_ta" name="name_ta" defaultValue={initialData?.name.ta || ''} required />
           {state.issues?.find(issue => issue.startsWith('name_ta:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('name_ta:'))?.split(': ')[1]}</p>}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="role_en">{t({ en: "Role (English)", ta: "பங்கு (ஆங்கிலம்)" })}</Label>
          <Input id="role_en" name="role_en" defaultValue={initialData?.role.en || ''} required />
          {state.issues?.find(issue => issue.startsWith('role_en:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('role_en:'))?.split(': ')[1]}</p>}
        </div>
        <div>
          <Label htmlFor="role_ta">{t({ en: "Role (Tamil)", ta: "பங்கு (தமிழ்)" })}</Label>
          <Input id="role_ta" name="role_ta" defaultValue={initialData?.role.ta || ''} required />
          {state.issues?.find(issue => issue.startsWith('role_ta:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('role_ta:'))?.split(': ')[1]}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="bio_en">{t({ en: "Bio (English)", ta: "சுயவிவரம் (ஆங்கிலம்)" })}</Label>
        <Textarea id="bio_en" name="bio_en" rows={3} defaultValue={initialData?.bio.en || ''} required />
        {state.issues?.find(issue => issue.startsWith('bio_en:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('bio_en:'))?.split(': ')[1]}</p>}
      </div>
      <div>
        <Label htmlFor="bio_ta">{t({ en: "Bio (Tamil)", ta: "சுயவிவரம் (தமிழ்)" })}</Label>
        <Textarea id="bio_ta" name="bio_ta" rows={3} defaultValue={initialData?.bio.ta || ''} required />
        {state.issues?.find(issue => issue.startsWith('bio_ta:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('bio_ta:'))?.split(': ')[1]}</p>}
      </div>
      
      <div>
        <Label htmlFor="imageUrl">{t({ en: "Image URL", ta: "பட URL" })}</Label>
        <Input id="imageUrl" name="imageUrl" type="url" defaultValue={initialData?.imageUrl || ''} placeholder="public/images/filename.jpg or public/images/filename.png" required/>
        {state.issues?.find(issue => issue.startsWith('imageUrl:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('imageUrl:'))?.split(': ')[1]}</p>}
      </div>
      <div>
        <Label htmlFor="dataAiHint">{t({ en: "AI Hint for Image (Optional, if using placeholder URLs)", ta: "படத்திற்கான AI குறிப்பு (விருப்பத்தேர்வு, ஒதுக்கிட URLகளைப் பயன்படுத்தினால்)" })}</Label>
        <Input id="dataAiHint" name="dataAiHint" defaultValue={initialData?.dataAiHint || ''} placeholder={t({ en: "e.g., 'professional portrait'", ta: "உதாரணம்: 'professional portrait'"})} />
      </div>
      
      <SubmitButton text={submitButtonText} />
      {!state.success && state.message && !state.issues && (
         <p className="text-sm text-destructive mt-2">{state.message}</p>
      )}
    </form>
  );
}
