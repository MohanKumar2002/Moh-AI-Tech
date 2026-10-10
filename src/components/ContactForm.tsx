'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  company: z.string().min(2, 'Company name is required'),
  email: z.string().email('Valid email is required'),
  country: z.string().optional(),
  companySize: z.string().min(1, 'Please select your company size'),
  solutionType: z.string().min(1, 'Please select what type of solution you are interested in'),
  industry: z.string().optional(),
  challenge: z.string().optional(),
  pilot: z.string().optional(),
  projectType: z.string().optional(),
  details: z.string().min(10, 'Please provide some details (at least 10 characters)'),
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
    watch,
    setValue,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      country: 'India',
      companySize: '',
      solutionType: '',
      industry: '',
      challenge: '',
      pilot: '',
      projectType: '',
      details: ''
    }
  });

  const selectedSolutionType = watch('solutionType');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const pathParam = params.get('path');
      if (pathParam === 'industrial') {
        setValue('solutionType', 'Industrial AI');
      } else if (pathParam === 'solutions') {
        setValue('solutionType', 'AI Product Engineering');
      }
    }
  }, [setValue]);

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setErrorMsg('');
    try {
      // Build a comprehensive message layout consolidating the dynamic path properties
      let operationalDetails = `Company Size: ${data.companySize}\nSolution Type Selected: ${data.solutionType}\n`;
      
      if (data.solutionType === 'Industrial AI') {
        operationalDetails += `Industry: ${data.industry || 'Not Selected'}\n`;
        operationalDetails += `Primary Operational Challenge: ${data.challenge || 'Not Selected'}\n`;
        operationalDetails += `Interested in Industrial AI Pilot?: ${data.pilot || 'Not Selected'}\n`;
      } else if (data.solutionType === 'AI Product Engineering' || data.solutionType === 'AI Automation') {
        operationalDetails += `Project Type: ${data.projectType || 'Not Selected'}\n`;
      }
      
      operationalDetails += `\nAdditional Details:\n${data.details}`;

      const payload = {
        name: data.name,
        company: data.company,
        email: data.email,
        country: data.country,
        service: data.solutionType, 
        message: operationalDetails, 
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      setIsSuccess(true);
      reset({
        country: 'India',
        companySize: '',
        solutionType: '',
        industry: '',
        challenge: '',
        pilot: '',
        projectType: '',
        details: ''
      });
      setTimeout(() => setIsSuccess(false), 6000);
    } catch (err) {
      setErrorMsg('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-card" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px', boxShadow: 'var(--shadow)' }}>
      <div className="form-title" style={{ fontFamily: 'var(--syne)', fontSize: '20px', fontWeight: '700', color: 'var(--text)', marginBottom: '24px' }}>
        Request AI Assessment
      </div>
      
      {isSuccess && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="form-success" 
          style={{ display: 'block', marginBottom: '20px', background: '#d1e7dd', color: '#0f5132', padding: '16px', borderRadius: '8px', fontSize: '14px', border: '1px solid #badbcc' }}
        >
          ✓ Request submitted! Mohan Kumar (Founder) will contact you directly within 24 hours.
        </motion.div>
      )}

      {errorMsg && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          style={{ color: '#ef4444', marginBottom: '20px', fontSize: '14px', background: '#fee2e2', padding: '12px', borderRadius: '8px', border: '1px solid #fca5a5' }}
        >
          {errorMsg}
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Name and Company */}
        <div className="f2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div className="frow" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>Your name *</label>
            <input 
              type="text" 
              placeholder="Your name" 
              {...register('name')} 
              style={{ borderColor: errors.name ? '#ef4444' : undefined, padding: '10px', borderRadius: '8px', border: '1px solid var(--border2)', background: 'var(--bg)', color: 'var(--text)' }}
            />
            {errors.name && <span style={{ color: '#ef4444', fontSize: '12px' }}>{errors.name.message}</span>}
          </div>
          <div className="frow" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>Company name *</label>
            <input 
              type="text" 
              placeholder="Company name" 
              {...register('company')} 
              style={{ borderColor: errors.company ? '#ef4444' : undefined, padding: '10px', borderRadius: '8px', border: '1px solid var(--border2)', background: 'var(--bg)', color: 'var(--text)' }}
            />
            {errors.company && <span style={{ color: '#ef4444', fontSize: '12px' }}>{errors.company.message}</span>}
          </div>
        </div>
        
        {/* Email and Country */}
        <div className="f2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div className="frow" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>Email *</label>
            <input 
              type="email" 
              placeholder="your@email.com" 
              {...register('email')} 
              style={{ borderColor: errors.email ? '#ef4444' : undefined, padding: '10px', borderRadius: '8px', border: '1px solid var(--border2)', background: 'var(--bg)', color: 'var(--text)' }}
            />
            {errors.email && <span style={{ color: '#ef4444', fontSize: '12px' }}>{errors.email.message}</span>}
          </div>
          <div className="frow" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>Country</label>
            <input 
              type="text" 
              placeholder="India, United States, etc." 
              {...register('country')} 
              style={{ padding: '10px', borderRadius: '8px', border: '1px solid var(--border2)', background: 'var(--bg)', color: 'var(--text)' }}
            />
          </div>
        </div>

        {/* Company Size and Solution Type */}
        <div className="f2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div className="frow" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>Company Size *</label>
            <select 
              {...register('companySize')}
              style={{ borderColor: errors.companySize ? '#ef4444' : undefined, padding: '10px', borderRadius: '8px', border: '1px solid var(--border2)', background: 'var(--bg)', color: 'var(--text)' }}
            >
              <option value="">Select company size</option>
              <option value="Startup">Startup</option>
              <option value="Small Business">Small Business</option>
              <option value="Medium Business">Medium Business</option>
              <option value="Enterprise">Enterprise</option>
            </select>
            {errors.companySize && <span style={{ color: '#ef4444', fontSize: '12px' }}>{errors.companySize.message}</span>}
          </div>

          <div className="frow" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>Interested in *</label>
            <select 
              {...register('solutionType')}
              style={{ borderColor: errors.solutionType ? '#ef4444' : undefined, padding: '10px', borderRadius: '8px', border: '1px solid var(--border2)', background: 'var(--bg)', color: 'var(--text)' }}
            >
              <option value="">What type of solution?</option>
              <option value="Industrial AI">Industrial AI</option>
              <option value="AI Product Engineering">AI Product Engineering</option>
              <option value="AI Automation">AI Automation</option>
              <option value="Research Collaboration">Research Collaboration</option>
              <option value="Other">Other</option>
            </select>
            {errors.solutionType && <span style={{ color: '#ef4444', fontSize: '12px' }}>{errors.solutionType.message}</span>}
          </div>
        </div>

        {/* Dynamic Panel A: Industrial AI */}
        {selectedSolutionType === 'Industrial AI' && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: 'var(--bg2)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border)' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="frow" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>Industry *</label>
                <select 
                  {...register('industry')}
                  style={{ padding: '10px', borderRadius: '8px', border: '1px solid var(--border2)', background: 'var(--bg)', color: 'var(--text)' }}
                >
                  <option value="">Select industry sector</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Automotive">Automotive</option>
                  <option value="CNC">CNC</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Textile">Textile</option>
                  <option value="Other">Other Manufacturing</option>
                </select>
              </div>

              <div className="frow" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>Primary Challenge *</label>
                <select 
                  {...register('challenge')}
                  style={{ padding: '10px', borderRadius: '8px', border: '1px solid var(--border2)', background: 'var(--bg)', color: 'var(--text)' }}
                >
                  <option value="">Select operation bottleneck</option>
                  <option value="Quality inspection">Quality inspection</option>
                  <option value="Machine downtime">Machine downtime</option>
                  <option value="Data analysis">Data analysis</option>
                  <option value="Automation">Automation</option>
                </select>
              </div>
            </div>

            <div className="frow" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>Interested in Industrial AI Pilot? *</label>
              <select 
                {...register('pilot')}
                style={{ padding: '10px', borderRadius: '8px', border: '1px solid var(--border2)', background: 'var(--bg)', color: 'var(--text)' }}
              >
                <option value="">Select Pilot Program preference</option>
                <option value="Yes">Yes, interested in pilot program</option>
                <option value="No">No, need custom full deployment discussion</option>
              </select>
            </div>
          </motion.div>
        )}

        {/* Dynamic Panel B: AI Product Engineering or AI Automation */}
        {(selectedSolutionType === 'AI Product Engineering' || selectedSolutionType === 'AI Automation') && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: 'var(--bg2)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border)' }}
          >
            <div className="frow" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>Project Type *</label>
              <select 
                {...register('projectType')}
                style={{ padding: '10px', borderRadius: '8px', border: '1px solid var(--border2)', background: 'var(--bg)', color: 'var(--text)' }}
              >
                <option value="">Select project type</option>
                <option value="AI Agent">AI Agent</option>
                <option value="Chatbot">Chatbot</option>
                <option value="RAG">RAG (Knowledge database)</option>
                <option value="Computer Vision">Computer Vision</option>
                <option value="ML Model">ML Model</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </motion.div>
        )}

        {/* Additional Details */}
        <div className="frow" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>Details of Your Operations / Challenge *</label>
          <textarea 
            placeholder="Please detail your machinery types, sensor log sets, operational parameters, or custom product requirements."
            {...register('details')}
            style={{ borderColor: errors.details ? '#ef4444' : undefined, padding: '10px', borderRadius: '8px', border: '1px solid var(--border2)', background: 'var(--bg)', color: 'var(--text)', minHeight: '100px', resize: 'vertical' }}
          ></textarea>
          {errors.details && <span style={{ color: '#ef4444', fontSize: '12px' }}>{errors.details.message}</span>}
        </div>

        <button 
          type="submit" 
          className="btn-primary" 
          style={{ width: '100%', justifyContent: 'center', opacity: isSubmitting ? 0.7 : 1, padding: '12px', borderRadius: '8px', border: 'none', background: 'var(--grad)', color: '#fff', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center' }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending Request...' : 'Request AI Assessment →'}
        </button>
      </form>
    </div>
  );
}
