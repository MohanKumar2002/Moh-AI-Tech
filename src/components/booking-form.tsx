'use client';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Calendar as CalendarIcon, Clock, CheckCircle2, ChevronRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', company: '', email: '', country: '', service: '', infrastructure: '', message: '' });
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const timeSlots = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep1 = () => {
    if (!formData.name || !formData.email) {
      setErrorMsg('Name and email are required.');
      return false;
    }
    setErrorMsg('');
    return true;
  };

  const submitForm = async (isScheduling: boolean) => {
    setIsSubmitting(true);
    setErrorMsg('');
    try {
      const payload = {
        ...formData,
        scheduledDate: isScheduling && selectedDate ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : null,
        scheduledTime: isScheduling ? selectedTime : null,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Failed to send message');
      setStep(isScheduling ? 5 : 4);
    } catch (err) {
      setErrorMsg('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-card" style={{ minHeight: '580px', display: 'flex', flexDirection: 'column', marginTop: '-16px' }}>
      
      {step > 1 && step < 4 && (
        <button 
          onClick={() => setStep(step - 1)} 
          style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'transparent', border: '1px solid var(--border)', color: 'var(--text)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}
        >
          <ArrowLeft size={16} />
        </button>
      )}

      {step === 1 && <div className="form-title">Send us a message</div>}
      {step === 2 && <div className="form-title">Choose a Date</div>}
      {step === 3 && <div className="form-title">Pick a Time</div>}

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <AnimatePresence mode="wait">
          
          {/* STEP 1: Details (Original Clean Layout) */}
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              
              {errorMsg && (
                <div style={{ color: '#ef4444', marginBottom: '20px', fontSize: '14px', background: '#fee2e2', padding: '12px', borderRadius: '8px' }}>
                  {errorMsg}
                </div>
              )}

              <div className="f2col">
                <div className="frow">
                  <label>Your name *</label>
                  <input name="name" value={formData.name} onChange={handleInputChange} type="text" placeholder="Your name" />
                </div>
                <div className="frow">
                  <label>Company</label>
                  <input name="company" value={formData.company} onChange={handleInputChange} type="text" placeholder="Company name (optional)" />
                </div>
              </div>
              
              <div className="f2col">
                <div className="frow">
                  <label>Email *</label>
                  <input name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="your@email.com" />
                </div>
                <div className="frow">
                  <label>Country</label>
                  <select name="country" value={formData.country} onChange={handleInputChange}>
                    <option value="">Select country</option>
                    <option>India</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>UAE</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              
              <div className="frow">
                <label>What are you looking to build?</label>
                <select name="service" value={formData.service} onChange={handleInputChange}>
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
                <select name="infrastructure" value={formData.infrastructure} onChange={handleInputChange}>
                  <option value="">Select infrastructure</option>
                  <option>Cloud (AWS/Azure/GCP)</option>
                  <option>On-Premise Servers</option>
                  <option>Hybrid / Legacy Databases</option>
                  <option>None / Starting from scratch</option>
                </select>
              </div>
              
              <div className="frow">
                <label>Tell us about your project *</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} rows={3} placeholder="What problem are you trying to solve?"></textarea>
              </div>

              <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                <button onClick={(e) => { e.preventDefault(); if(validateStep1()) submitForm(false); }} disabled={isSubmitting} className="btn-primary" style={{ flex: 1, justifyContent: 'center', opacity: isSubmitting ? 0.7 : 1 }}>
                  {isSubmitting ? '...' : 'Send Message →'}
                </button>
                <button onClick={(e) => { e.preventDefault(); if(validateStep1()) setStep(2); }} disabled={isSubmitting} className="btn-ghost" style={{ flex: 1, justifyContent: 'center', border: '1px solid var(--accent)', color: 'var(--accent)' }}>
                  Schedule Call <CalendarIcon size={16} style={{ marginLeft: '6px' }} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Date */}
          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
              <DayPicker 
                mode="single" 
                selected={selectedDate} 
                onSelect={(date) => {
                  if (date) {
                    setSelectedDate(date);
                    setTimeout(() => setStep(3), 300);
                  }
                }} 
                disabled={[{ before: new Date() }, { dayOfWeek: [0, 6] }]} 
                showOutsideDays
              />
            </motion.div>
          )}

          {/* STEP 3: Time */}
          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ width: '100%', maxWidth: '340px', margin: '0 auto', paddingTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '24px', color: 'var(--text)', fontWeight: '600', fontSize: '15px' }}>
                <CalendarIcon size={18} color="var(--accent)" /> {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px', marginBottom: '24px' }}>
                {timeSlots.map((time) => (
                  <button 
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    style={{ 
                      padding: '16px 24px', borderRadius: '12px', 
                      border: selectedTime === time ? '2px solid var(--accent)' : '1px solid var(--border)', 
                      background: selectedTime === time ? 'rgba(99,102,241,0.05)' : 'transparent', 
                      color: 'var(--text)', fontWeight: '600', fontSize: '15px', cursor: 'pointer', transition: 'all 0.2s',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <Clock size={18} color={selectedTime === time ? 'var(--accent)' : 'var(--muted)'} /> {time}
                    </div>
                    {selectedTime === time && <CheckCircle2 size={18} color="var(--accent)" />}
                  </button>
                ))}
              </div>
              <button 
                onClick={() => submitForm(true)} 
                disabled={!selectedTime || isSubmitting}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', opacity: (!selectedTime || isSubmitting) ? 0.6 : 1 }}
              >
                {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
              </button>
            </motion.div>
          )}

          {/* STEP 4: Success Message */}
          {step === 4 && (
            <motion.div key="step4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ textAlign: 'center', paddingTop: '40px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: '#dcfce7', color: '#16a34a', marginBottom: '24px' }}>
                <CheckCircle2 size={32} />
              </div>
              <div className="form-title" style={{ fontSize: '28px', marginBottom: '16px' }}>Thank You!</div>
              <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: '1.6', marginBottom: '32px' }}>
                You have successfully sent your message, <strong>{formData.name.split(' ')[0]}</strong>.<br/><br/>
                Our team is reviewing your request and will connect with you very soon!
              </p>
              <button onClick={() => { setStep(1); setFormData({name:'',company:'',email:'',country:'',service:'',message:''}); }} className="btn-ghost" style={{ border: '1px solid var(--border)' }}>Send another</button>
            </motion.div>
          )}

          {/* STEP 5: Success Booking */}
          {step === 5 && (
            <motion.div key="step5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ textAlign: 'center', paddingTop: '40px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: '#dcfce7', color: '#16a34a', marginBottom: '24px' }}>
                <CheckCircle2 size={32} />
              </div>
              <div className="form-title" style={{ fontSize: '28px', marginBottom: '16px' }}>Successfully Booked!</div>
              <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: '1.6', marginBottom: '32px' }}>
                Thank you for choosing us, <strong>{formData.name.split(' ')[0]}</strong>!<br/><br/>
                Your call is scheduled for <strong>{selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</strong> at <strong>{selectedTime}</strong>. 
                <br /><br />
                A calendar invitation has been sent to <strong>{formData.email}</strong>.
              </p>
              <button onClick={() => { setStep(1); setFormData({name:'',company:'',email:'',country:'',service:'',message:''}); setSelectedDate(undefined); setSelectedTime(''); }} className="btn-ghost" style={{ border: '1px solid var(--border)' }}>Done</button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      <style jsx global>{`
        .rdp {
          --rdp-cell-size: 40px;
          --rdp-accent-color: var(--accent);
          margin: 0;
          color: var(--text);
          font-family: inherit;
        }
        .rdp-day_selected, .rdp-day_selected:focus-visible, .rdp-day_selected:hover { 
          background-color: var(--accent) !important;
          color: white !important; 
        }
      `}</style>
    </div>
  );
}
