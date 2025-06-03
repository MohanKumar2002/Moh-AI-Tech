
'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import type { Product } from '@/types';
import type { ProductFormState } from '@/actions/product';
import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { LUCIDE_ICON_MAP } from '@/lib/icon-map'; // For icon select

interface ProductFormProps {
  action: (prevState: ProductFormState, data: FormData) => Promise<ProductFormState>;
  initialData?: Product | null;
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

export default function ProductForm({ action, initialData, formTitle, submitButtonText }: ProductFormProps) {
  const { t } = useLanguage();
  const initialState: ProductFormState = { message: '', success: false };
  const [state, formAction] = useActionState(action, initialState);
  const { toast } = useToast();
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const availableIcons = Object.keys(LUCIDE_ICON_MAP);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? t({ en: 'Success!', ta: 'வெற்றி!' }) : t({ en: 'Error', ta: 'பிழை' }),
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        router.push('/admin/products');
      }
    }
  }, [state, toast, router, t]);

  const getPrice = (type: 'monthly' | 'yearly'): number | undefined => {
    return initialData?.subscriptionOptions?.find(opt => opt.type === type)?.price;
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-6 max-w-2xl">
      <h2 className="text-2xl font-headline font-semibold">{formTitle}</h2>
      {initialData?.id && <input type="hidden" name="originalId" defaultValue={initialData.id} />}
      
      <div>
        <Label htmlFor="id">{t({ en: "Product ID (Unique, lowercase, hyphens)", ta: "தயாரிப்பு ஐடி (தனிப்பட்ட, சிறிய எழுத்து, ஹைபன்கள்)" })}</Label>
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

      <div>
        <Label htmlFor="description_en">{t({ en: "Description (English)", ta: "விளக்கம் (ஆங்கிலம்)" })}</Label>
        <Textarea id="description_en" name="description_en" rows={3} defaultValue={initialData?.description.en || ''} required />
        {state.issues?.find(issue => issue.startsWith('description_en:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('description_en:'))?.split(': ')[1]}</p>}
      </div>
      <div>
        <Label htmlFor="description_ta">{t({ en: "Description (Tamil)", ta: "விளக்கம் (தமிழ்)" })}</Label>
        <Textarea id="description_ta" name="description_ta" rows={3} defaultValue={initialData?.description.ta || ''} required />
        {state.issues?.find(issue => issue.startsWith('description_ta:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('description_ta:'))?.split(': ')[1]}</p>}
      </div>

      <div>
        <Label htmlFor="keyFeatures_en">{t({ en: "Key Features (English, one per line)", ta: "முக்கிய அம்சங்கள் (ஆங்கிலம், ஒரு வரிக்கு ஒன்று)" })}</Label>
        <Textarea id="keyFeatures_en" name="keyFeatures_en" rows={4} defaultValue={initialData?.keyFeatures.en.join('\n') || ''} required />
        {state.issues?.find(issue => issue.startsWith('keyFeatures_en:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('keyFeatures_en:'))?.split(': ')[1]}</p>}
      </div>
      <div>
        <Label htmlFor="keyFeatures_ta">{t({ en: "Key Features (Tamil, one per line)", ta: "முக்கிய அம்சங்கள் (தமிழ், ஒரு வரிக்கு ஒன்று)" })}</Label>
        <Textarea id="keyFeatures_ta" name="keyFeatures_ta" rows={4} defaultValue={initialData?.keyFeatures.ta.join('\n') || ''} required />
        {state.issues?.find(issue => issue.startsWith('keyFeatures_ta:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('keyFeatures_ta:'))?.split(': ')[1]}</p>}
      </div>
      
      <div>
        <Label htmlFor="iconName">{t({ en: "Icon Name (Lucide Icon, optional)", ta: "ஐகான் பெயர் (லூசைட் ஐகான், விருப்பத்தேர்வு)" })}</Label>
        <select 
            id="iconName" 
            name="iconName" 
            defaultValue={initialData?.iconName || ''}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
            <option value="">{t({ en: "No Icon", ta: "ஐகான் இல்லை" })}</option>
            {availableIcons.map(icon => <option key={icon} value={icon}>{icon}</option>)}
        </select>
        <p className="text-xs text-muted-foreground mt-1">
          {t({ en: "E.g., 'FileSignature', 'MessageCircle'. See Lucide React documentation for names.", ta: "உதாரணம்: 'FileSignature', 'MessageCircle'. பெயர்களுக்கு லூசைட் ரியாக்ட் ஆவணங்களைப் பார்க்கவும்."})}
        </p>
        {state.issues?.find(issue => issue.startsWith('iconName:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('iconName:'))?.split(': ')[1]}</p>}
      </div>

      <div>
        <Label htmlFor="imageUrl">{t({ en: "Image URL (Optional)", ta: "பட URL (விருப்பத்தேர்வு)" })}</Label>
        <Input id="imageUrl" name="imageUrl" type="url" defaultValue={initialData?.imageUrl || ''} placeholder="https://example.com/image.png" />
        {state.issues?.find(issue => issue.startsWith('imageUrl:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('imageUrl:'))?.split(': ')[1]}</p>}
      </div>
      <div>
        <Label htmlFor="dataAiHint">{t({ en: "AI Hint for Image (Optional)", ta: "படத்திற்கான AI குறிப்பு (விருப்பத்தேர்வு)" })}</Label>
        <Input id="dataAiHint" name="dataAiHint" defaultValue={initialData?.dataAiHint || ''} placeholder={t({ en: "e.g., 'technology product'", ta: "உதாரணம்: 'technology product'"})} />
      </div>

      <fieldset className="border p-4 rounded-md space-y-4">
        <legend className="text-sm font-medium px-1">{t({en: "Subscription Options (Optional)", ta: "சந்தா விருப்பங்கள் (விருப்பத்தேர்வு)"})}</legend>
        <div>
          <Label htmlFor="monthlyPrice">{t({ en: "Monthly Price (USD)", ta: "மாதாந்திர விலை (USD)" })}</Label>
          <Input id="monthlyPrice" name="monthlyPrice" type="number" step="0.01" defaultValue={getPrice('monthly') || ''} placeholder="e.g., 9.99" />
          {state.issues?.find(issue => issue.startsWith('monthlyPrice:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('monthlyPrice:'))?.split(': ')[1]}</p>}
        </div>
        <div>
          <Label htmlFor="yearlyPrice">{t({ en: "Yearly Price (USD)", ta: "வருடாந்திர விலை (USD)" })}</Label>
          <Input id="yearlyPrice" name="yearlyPrice" type="number" step="0.01" defaultValue={getPrice('yearly') || ''} placeholder="e.g., 99.99" />
          {state.issues?.find(issue => issue.startsWith('yearlyPrice:')) && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.startsWith('yearlyPrice:'))?.split(': ')[1]}</p>}
        </div>
      </fieldset>
      
      <SubmitButton text={submitButtonText} />
      {!state.success && state.message && !state.issues && (
         <p className="text-sm text-destructive mt-2">{state.message}</p>
      )}
    </form>
  );
}

