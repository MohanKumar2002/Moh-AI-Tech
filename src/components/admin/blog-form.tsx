
'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import type { BlogPostMapping } from '@/types';
import type { BlogFormState } from '@/actions/blog';
import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import { useLanguage } from '@/contexts/language-context';

interface BlogFormProps {
  action: (prevState: BlogFormState, data: FormData) => Promise<BlogFormState>;
  initialData?: BlogPostMapping | null;
  formTitle: string; // This will be passed translated
  submitButtonText: string; // This will be passed translated
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

export default function BlogForm({ action, initialData, formTitle, submitButtonText }: BlogFormProps) {
  const { t } = useLanguage();
  const initialState: BlogFormState = { message: '', success: false };
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
        router.push('/admin/blog');
      }
    }
  }, [state, toast, router, t]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6 max-w-2xl">
      <h2 className="text-2xl font-headline font-semibold">{formTitle}</h2>
      {initialData?.id && <input type="hidden" name="id" defaultValue={initialData.id} />}
      
      <div>
        <Label htmlFor="title">{t({ en: "Title", ta: "தலைப்பு" })}</Label>
        <Input id="title" name="title" defaultValue={initialData?.title || ''} required />
        {state.issues?.find(issue => issue.startsWith('title:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('title:'))?.split(': ')[1]}</p>}
      </div>

      <div>
        <Label htmlFor="slug">{t({ en: "Slug", ta: "ஸ்லக்" })}</Label>
        <Input id="slug" name="slug" defaultValue={initialData?.slug || ''} required />
        <p className="text-xs text-muted-foreground mt-1">
          {t({ en: "Lowercase alphanumeric characters and hyphens only (e.g., my-awesome-post).", ta: "சின்ன எழுத்துக்கள், எண்கள் மற்றும் ஹைபன்கள் மட்டும் (உதாரணமாக, my-awesome-post)." })}
        </p>
        {state.issues?.find(issue => issue.startsWith('slug:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('slug:'))?.split(': ')[1]}</p>}
      </div>

      <div>
        <Label htmlFor="author">{t({ en: "Author", ta: "ஆசிரியர்" })}</Label>
        <Input id="author" name="author" defaultValue={initialData?.author || ''} required />
        {state.issues?.find(issue => issue.startsWith('author:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('author:'))?.split(': ')[1]}</p>}
      </div>

      <div>
        <Label htmlFor="excerpt">{t({ en: "Excerpt", ta: "சுருக்கம்" })}</Label>
        <Textarea id="excerpt" name="excerpt" rows={3} defaultValue={initialData?.excerpt || ''} required />
        {state.issues?.find(issue => issue.startsWith('excerpt:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('excerpt:'))?.split(': ')[1]}</p>}
      </div>

      <div>
        <Label htmlFor="content">{t({ en: "Content (HTML)", ta: "உள்ளடக்கம் (HTML)" })}</Label>
        <Textarea id="content" name="content" rows={10} defaultValue={initialData?.content || ''} required />
        {state.issues?.find(issue => issue.startsWith('content:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('content:'))?.split(': ')[1]}</p>}
      </div>

      <div>
        <Label htmlFor="imageUrl">{t({ en: "Image URL (Optional)", ta: "பட URL (விருப்பத்தேர்வு)" })}</Label>
        <Input id="imageUrl" name="imageUrl" type="url" defaultValue={initialData?.imageUrl || ''} placeholder="https://example.com/image.png" />
        {state.issues?.find(issue => issue.startsWith('imageUrl:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('imageUrl:'))?.split(': ')[1]}</p>}
      </div>
      
      <div>
        <Label htmlFor="tags">{t({ en: "Tags (comma-separated, Optional)", ta: "குறிச்சொற்கள் (காற்புள்ளியால் பிரிக்கப்பட்டவை, விருப்பத்தேர்வு)" })}</Label>
        <Input id="tags" name="tags" defaultValue={initialData?.tags?.join(', ') || ''} placeholder={t({ en: "AI, Machine Learning, Tech", ta: "AI, இயந்திர கற்றல், தொழில்நுட்பம்" })} />
      </div>
      
      <SubmitButton text={submitButtonText} />
      {!state.success && state.message && !state.issues && (
         <p className="text-sm text-destructive mt-2">{state.message}</p>
      )}
    </form>
  );
}
