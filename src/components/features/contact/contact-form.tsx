'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { submitContactForm, type ContactFormState } from '@/actions/contact';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full mt-4" style={{backgroundColor: 'var(--accent)', color: '#fff', padding: '12px', height: 'auto', fontSize: '16px', borderRadius: '8px'}}>
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

interface ContactFormProps {
  initialSubject?: string;
}

export default function ContactForm({ initialSubject }: ContactFormProps) {
  const initialState: ContactFormState = { message: '', success: false };
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Success!' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <div className="w-full">
      <form ref={formRef} action={formAction} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="name" style={{color: 'var(--muted)', fontSize: '14px', fontWeight: '500'}}>Full Name</Label>
            <Input id="name" name="name" type="text" placeholder="John Doe" required style={{background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)', borderRadius: '8px', padding: '12px'}} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" style={{color: 'var(--muted)', fontSize: '14px', fontWeight: '500'}}>Email Address</Label>
            <Input id="email" name="email" type="email" placeholder="john@company.com" required style={{background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)', borderRadius: '8px', padding: '12px'}} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="service" style={{color: 'var(--muted)', fontSize: '14px', fontWeight: '500'}}>Service of Interest</Label>
            <select id="service" name="service" required style={{width: '100%', background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)', borderRadius: '8px', padding: '10px 12px', fontSize: '14px', outline: 'none'}}>
              <option value="">Select a service...</option>
              <option value="AI Chatbot Development">AI Chatbot Development</option>
              <option value="AI Agent Development">AI Agent Development</option>
              <option value="Custom AI Application">Custom AI Application</option>
              <option value="Web App Development">Web App Development</option>
              <option value="Business Process Automation">Business Process Automation</option>
              <option value="Data Dashboards">Data Dashboards</option>
              <option value="Other">Other Integration</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="budget" style={{color: 'var(--muted)', fontSize: '14px', fontWeight: '500'}}>Estimated Budget Range</Label>
            <select id="budget" name="budget" required style={{width: '100%', background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)', borderRadius: '8px', padding: '10px 12px', fontSize: '14px', outline: 'none'}}>
              <option value="">Select a range...</option>
              <option value="< $5,000">Less than $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000 - $25,000">$10,000 - $25,000</option>
              <option value="$25,000+">$25,000+</option>
              <option value="Not Sure">Not sure yet</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" style={{color: 'var(--muted)', fontSize: '14px', fontWeight: '500'}}>Project Details</Label>
          <Textarea id="message" name="message" placeholder="Briefly describe your project requirements or business problem..." rows={4} required style={{background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)', borderRadius: '8px', padding: '12px'}} />
          {state.issues && state.issues.find(issue => issue.toLowerCase().includes('message')) && (
            <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.toLowerCase().includes('message'))}</p>
          )}
        </div>
        <SubmitButton />
      </form>
    </div>
  );
}
