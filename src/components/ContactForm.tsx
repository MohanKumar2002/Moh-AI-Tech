'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  company: z.string().optional(),
  email: z.string().email('Valid email is required'),
  country: z.string().optional(),
  service: z.string().optional(),
  infrastructure: z.string().optional(),
  message: z.string().min(10, 'Please provide more details about your project'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setErrorMsg('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 6000);
    } catch (err) {
      setErrorMsg('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-card">
      <div className="form-title">Send us a message</div>
      
      {isSuccess && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="form-success" 
          style={{ display: 'block', marginBottom: '20px' }}
        >
          ✓ Message sent! We'll reply within 24 hours to schedule a call.
        </motion.div>
      )}

      {errorMsg && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          style={{ color: '#ef4444', marginBottom: '20px', fontSize: '14px', background: '#fee2e2', padding: '12px', borderRadius: '8px' }}
        >
          {errorMsg}
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="f2col">
          <div className="frow">
            <label>Your name *</label>
            <input 
              type="text" 
              placeholder="Your name" 
              {...register('name')} 
              style={{ borderColor: errors.name ? '#ef4444' : undefined }}
            />
            {errors.name && <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.name.message}</span>}
          </div>
          <div className="frow">
            <label>Company</label>
            <input type="text" placeholder="Company name (optional)" {...register('company')} />
          </div>
        </div>
        
        <div className="f2col">
          <div className="frow">
            <label>Email *</label>
            <input 
              type="email" 
              placeholder="your@email.com" 
              {...register('email')} 
              style={{ borderColor: errors.email ? '#ef4444' : undefined }}
            />
            {errors.email && <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.email.message}</span>}
          </div>
          <div className="frow">
            <label>Country</label>
            <select {...register('country')}>
              <option value="">Select country</option>
              <option>India</option>
              <option>UAE</option>
              <option>Saudi Arabia</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Germany</option>
              <option>Singapore</option>
              <option>Australia</option>
              <option>Canada</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        
        <div className="frow">
          <label>What are you looking to build?</label>
          <select {...register('service')}>
            <option value="">Select a service</option>
            <option>Autonomous AI Agents / Workflows</option>
            <option>Custom LLM / Computer Vision Architecture</option>
            <option>AI Feasibility Audit & Solution Design</option>
            <option>Full-Stack Web Application (React/FastAPI)</option>
            <option>Not sure — need advice</option>
          </select>
        </div>

        <div className="frow">
          <label>Current Infrastructure / Data Source (Optional)</label>
          <select {...register('infrastructure')}>
            <option value="">Select infrastructure</option>
            <option>Cloud (AWS/Azure/GCP)</option>
            <option>On-Premise Servers</option>
            <option>Hybrid / Legacy Databases</option>
            <option>None / Starting from scratch</option>
          </select>
        </div>

        
        <div className="frow">
          <label>Tell us about your project *</label>
          <textarea 
            placeholder="What problem are you trying to solve? What data do you have? What outcome are you aiming for?"
            {...register('message')}
            style={{ borderColor: errors.message ? '#ef4444' : undefined }}
          ></textarea>
          {errors.message && <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.message.message}</span>}
        </div>
        
        <button 
          type="submit" 
          className="btn-primary" 
          style={{ width: '100%', justifyContent: 'center', opacity: isSubmitting ? 0.7 : 1 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message →'}
        </button>
      </form>
    </div>
  );
}
