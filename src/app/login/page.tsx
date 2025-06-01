
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
import { LogIn } from 'lucide-react';
import { usersStore } from '@/lib/data-store'; 
import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import { useLanguage } from '@/contexts/language-context';


function SubmitButton() {
  const { pending } = useFormStatus();
  const { t } = useLanguage();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? t({ en: 'Logging in...', ta: 'உள்நுழைகிறது...' }) : t({ en: 'Login', ta: 'உள்நுழை' })}
    </Button>
  );
}

export default function LoginPage() {
  const { login: contextLogin, user } = useAuth();
  const router = useRouter();
  const { t } = useLanguage();
  const initialState: AuthFormState = { message: '', success: false };
  const [state, formAction] = useActionState(
    async (prevState: AuthFormState, formData: FormData) => {
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;
      const result = await contextLogin(email, password); 
      
      if (result.success) {
        const targetUser = Array.from(usersStore.values()).find(u => u.email === email);
        return { ...result, message: 'Login successful!', redirectTo: targetUser?.role === 'admin' ? '/admin/dashboard' : '/' };
      }
      return result;
    }, 
    initialState
  );
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if(user) { 
        router.push(user.role === 'admin' ? '/admin/dashboard' : '/');
    }
  }, [user, router]);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? t({ en: 'Success!', ta: 'வெற்றி!' }) : t({ en: 'Error', ta: 'பிழை' }),
        description: state.message, // Server messages might not be translated yet
        variant: state.success ? 'default' : 'destructive',
      });
    }
  }, [state, toast, t]);

  return (
    <div className="flex items-center justify-center py-12">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-3 mx-auto w-fit">
             <LogIn className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="font-headline text-2xl">{t({ en: "Login to Your Account", ta: "உங்கள் கணக்கில் உள்நுழையவும்" })}</CardTitle>
          <CardDescription>{t({ en: "Enter your credentials to access Moh-AI Tech.", ta: "Moh-AI Tech-ஐ அணுக உங்கள் சான்றுகளை உள்ளிடவும்." })}</CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} action={formAction} className="space-y-6">
            <div>
              <Label htmlFor="email">{t({ en: "Email Address", ta: "மின்னஞ்சல் முகவரி" })}</Label>
              <Input id="email" name="email" type="email" placeholder={t({ en: "you@example.com", ta: "you@example.com" })} required />
            </div>
            <div>
              <Label htmlFor="password">{t({ en: "Password", ta: "கடவுச்சொல்" })}</Label>
              <Input id="password" name="password" type="password" placeholder="••••••••" required />
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
            {t({ en: "Don't have an account?", ta: "கணக்கு இல்லையா?" })}{' '}
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/register">{t({ en: "Register here", ta: "இங்கே பதிவு செய்யவும்" })}</Link>
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
