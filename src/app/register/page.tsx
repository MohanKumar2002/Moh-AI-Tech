
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { type AuthFormState } from '@/actions/auth';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/auth-context';
import { UserPlus } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import { useLanguage } from '@/contexts/language-context';

function SubmitButton() {
  const { pending } = useFormStatus();
  const { t } = useLanguage();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? t({ en: 'Registering...', ta: 'பதிவு செய்கிறது...' }) : t({ en: 'Create Account', ta: 'கணக்கை உருவாக்கு' })}
    </Button>
  );
}

export default function RegisterPage() {
  const { register: contextRegister, user } = useAuth();
  const router = useRouter();
  const { t } = useLanguage();
  const initialState: AuthFormState = { message: '', success: false };
   const [state, formAction] = useActionState(
    async (prevState: AuthFormState, formData: FormData) => {
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;
      const result = await contextRegister(name, email, password); 
      
      if (result.success) {
        return { ...result, message: 'Registration successful! You can now log in.', redirectTo: '/login' };
      }
      return result;
    }, 
    initialState
  );
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if(user) { 
        router.push('/');
    }
  }, [user, router]);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? t({ en: 'Success!', ta: 'வெற்றி!' }) : t({ en: 'Error', ta: 'பிழை' }),
        description: state.message, // Server messages may not be translated yet
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success && state.redirectTo) {
        router.push(state.redirectTo);
      }
    }
  }, [state, toast, router, t]);

  return (
    <div className="flex items-center justify-center py-12">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
           <div className="inline-block p-3 bg-primary/10 rounded-full mb-3 mx-auto w-fit">
             <UserPlus className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="font-headline text-2xl">{t({ en: "Create an Account", ta: "ஒரு கணக்கை உருவாக்கவும்" })}</CardTitle>
          <CardDescription>{t({ en: "Join Moh-AI Tech to access our suite of AI tools.", ta: "எங்கள் AI கருவிகளின் தொகுப்பை அணுக Moh-AI Tech இல் சேரவும்." })}</CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} action={formAction} className="space-y-6">
            <div>
              <Label htmlFor="name">{t({ en: "Full Name", ta: "முழு பெயர்" })}</Label>
              <Input id="name" name="name" type="text" placeholder={t({ en: "John Doe", ta: "ஜான் டோ" })} required />
            </div>
            <div>
              <Label htmlFor="email">{t({ en: "Email Address", ta: "மின்னஞ்சல் முகவரி" })}</Label>
              <Input id="email" name="email" type="email" placeholder={t({ en: "you@example.com", ta: "you@example.com" })} required />
            </div>
            <div>
              <Label htmlFor="password">{t({ en: "Password", ta: "கடவுச்சொல்" })}</Label>
              <Input id="password" name="password" type="password" placeholder={`${t({ en: "(min. 6 characters)", ta: "(குறைந்தது 6 எழுத்துக்கள்)" })}`} required />
            </div>
             {state.issues && state.issues.map((issue, index) => (
              <p key={index} className="text-sm text-destructive mt-1">{issue}</p>
            ))}
            {!state.success && state.message && !state.issues && (
                 <p className="text-sm text-destructive mt-1">{state.message}</p>
            )}
            <SubmitButton />
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-2">
          <p className="text-sm text-muted-foreground">
            {t({ en: "Already have an account?", ta: "ஏற்கனவே கணக்கு உள்ளதா?" })}{' '}
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/login">{t({ en: "Login here", ta: "இங்கே உள்நுழையவும்" })}</Link>
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
