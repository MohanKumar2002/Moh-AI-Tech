'use client';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Calendar as CalendarIcon, Clock, User, Mail, MessageSquare, CheckCircle2, ChevronRight, ArrowLeft, Sparkles, Building, Globe, Briefcase, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', company: '', email: '', country: '', service: '', message: '' });
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const timeSlots = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'];

  const variants = {
    initial: { opacity: 0, x: 20 },
    enter: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  };

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
      setStep(isScheduling ? 5 : 4); // 4 = Message Success, 5 = Booking Success
    } catch (err) {
      setErrorMsg('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      position: 'relative',
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '24px',
      overflow: 'hidden',
      minHeight: '640px',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 30px 60px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.1)',
      backdropFilter: 'blur(24px)'
    }}>
      
      {/* Dynamic Background Glows */}
      <div style={{ position: 'absolute', top: '-20%', left: '-20%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: '-20%', right: '-20%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0 }}></div>

      {/* Progress Header */}
      <div style={{ position: 'relative', zIndex: 1, padding: '32px 32px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {step > 1 && step < 4 && (
            <button 
              onClick={() => setStep(step - 1)} 
              style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
              className="hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-x-1"
            >
              <ArrowLeft size={18} />
            </button>
          )}
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', letterSpacing: '-0.5px' }}>
              <span className="grad-text">Get in Touch</span>
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '4px' }}>
              {step === 1 ? 'Step 1: Your Details' : step === 2 ? 'Step 2: Choose a Date' : step === 3 ? 'Step 3: Pick a Time' : 'All set!'}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, position: 'relative', zIndex: 1, padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <AnimatePresence mode="wait">
          
          {/* STEP 1: Details */}
          {step === 1 && (
            <motion.div key="step1" variants={variants} initial="initial" animate="enter" exit="exit" style={{ width: '100%', maxWidth: '450px' }}>
              
              {errorMsg && (
                <div style={{ color: '#ef4444', marginBottom: '16px', fontSize: '14px', background: 'rgba(239, 68, 68, 0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                  {errorMsg}
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div className="input-group" style={{ position: 'relative', flex: 1 }}>
                    <User size={18} color="var(--muted)" style={{ position: 'absolute', left: '16px', top: '16px' }} />
                    <input name="name" value={formData.name} onChange={handleInputChange} required type="text" placeholder="Full Name *" style={{ 
                      width: '100%', padding: '16px 16px 16px 46px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', color: 'var(--text)', fontSize: '15px', outline: 'none', transition: 'all 0.2s' 
                    }} className="focus:border-[var(--accent)] focus:bg-[rgba(99,102,241,0.05)]" />
                  </div>
                  <div className="input-group" style={{ position: 'relative', flex: 1 }}>
                    <Building size={18} color="var(--muted)" style={{ position: 'absolute', left: '16px', top: '16px' }} />
                    <input name="company" value={formData.company} onChange={handleInputChange} type="text" placeholder="Company" style={{ 
                      width: '100%', padding: '16px 16px 16px 46px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', color: 'var(--text)', fontSize: '15px', outline: 'none', transition: 'all 0.2s' 
                    }} className="focus:border-[var(--accent)] focus:bg-[rgba(99,102,241,0.05)]" />
                  </div>
                </div>

                <div className="input-group" style={{ position: 'relative' }}>
                  <Mail size={18} color="var(--muted)" style={{ position: 'absolute', left: '16px', top: '16px' }} />
                  <input name="email" value={formData.email} onChange={handleInputChange} required type="email" placeholder="Email Address *" style={{ 
                    width: '100%', padding: '16px 16px 16px 46px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', color: 'var(--text)', fontSize: '15px', outline: 'none', transition: 'all 0.2s' 
                  }} className="focus:border-[var(--accent)] focus:bg-[rgba(99,102,241,0.05)]" />
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div className="input-group" style={{ position: 'relative', flex: 1 }}>
                    <Globe size={18} color="var(--muted)" style={{ position: 'absolute', left: '16px', top: '16px' }} />
                    <select name="country" value={formData.country} onChange={handleInputChange} style={{ 
                      width: '100%', padding: '16px 16px 16px 46px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', color: 'var(--text)', fontSize: '15px', outline: 'none', transition: 'all 0.2s', appearance: 'none'
                    }} className="focus:border-[var(--accent)] focus:bg-[rgba(99,102,241,0.05)]">
                      <option value="" style={{color:'black'}}>Country</option>
                      <option style={{color:'black'}}>India</option>
                      <option style={{color:'black'}}>United States</option>
                      <option style={{color:'black'}}>United Kingdom</option>
                      <option style={{color:'black'}}>UAE</option>
                      <option style={{color:'black'}}>Other</option>
                    </select>
                  </div>
                  <div className="input-group" style={{ position: 'relative', flex: 1 }}>
                    <Briefcase size={18} color="var(--muted)" style={{ position: 'absolute', left: '16px', top: '16px' }} />
                    <select name="service" value={formData.service} onChange={handleInputChange} style={{ 
                      width: '100%', padding: '16px 16px 16px 46px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', color: 'var(--text)', fontSize: '15px', outline: 'none', transition: 'all 0.2s', appearance: 'none'
                    }} className="focus:border-[var(--accent)] focus:bg-[rgba(99,102,241,0.05)]">
                      <option value="" style={{color:'black'}}>Service Type</option>
                      <option style={{color:'black'}}>AI Agents</option>
                      <option style={{color:'black'}}>Machine Learning</option>
                      <option style={{color:'black'}}>Consulting</option>
                      <option style={{color:'black'}}>Other</option>
                    </select>
                  </div>
                </div>

                <div className="input-group" style={{ position: 'relative' }}>
                  <MessageSquare size={18} color="var(--muted)" style={{ position: 'absolute', left: '16px', top: '16px' }} />
                  <textarea name="message" value={formData.message} onChange={handleInputChange} rows={3} placeholder="Tell us about your project..." style={{ 
                    width: '100%', padding: '16px 16px 16px 46px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', color: 'var(--text)', fontSize: '15px', outline: 'none', resize: 'none', transition: 'all 0.2s' 
                  }} className="focus:border-[var(--accent)] focus:bg-[rgba(99,102,241,0.05)]"></textarea>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                  <button onClick={(e) => { e.preventDefault(); if(validateStep1()) submitForm(false); }} disabled={isSubmitting} style={{ 
                    flex: 1, padding: '16px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.03)', color: 'var(--text)',
                    fontSize: '15px', fontWeight: '600', cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'all 0.2s'
                  }} className="hover:bg-[rgba(255,255,255,0.08)]">
                    {isSubmitting ? '...' : 'Send Message'} <Send size={16} />
                  </button>
                  
                  <button onClick={(e) => { e.preventDefault(); if(validateStep1()) setStep(2); }} disabled={isSubmitting} style={{ 
                    flex: 1.5, padding: '16px', borderRadius: '14px', border: 'none',
                    background: 'linear-gradient(135deg, var(--accent), #a855f7)', color: 'white',
                    fontSize: '15px', fontWeight: '700', cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    boxShadow: '0 10px 25px rgba(99,102,241,0.4)', transition: 'all 0.2s'
                  }} className="hover:shadow-[0_15px_35px_rgba(99,102,241,0.6)] hover:scale-[1.02]">
                    Next: Schedule Call <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Date */}
          {step === 2 && (
            <motion.div key="step2" variants={variants} initial="initial" animate="enter" exit="exit" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <div className="creative-calendar" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px', padding: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
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
              </div>
            </motion.div>
          )}

          {/* STEP 3: Time */}
          {step === 3 && (
            <motion.div key="step3" variants={variants} initial="initial" animate="enter" exit="exit" style={{ width: '100%', maxWidth: '340px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '24px', color: 'var(--accent)', fontWeight: '600', fontSize: '15px' }}>
                <CalendarIcon size={18} /> {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px', marginBottom: '24px' }}>
                {timeSlots.map((time) => (
                  <button 
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    style={{ 
                      padding: '16px 24px', borderRadius: '16px', 
                      border: selectedTime === time ? '1px solid var(--accent)' : '1px solid rgba(255,255,255,0.08)', 
                      background: selectedTime === time ? 'rgba(99,102,241,0.1)' : 'rgba(255,255,255,0.02)', 
                      color: 'var(--text)', fontWeight: '600', fontSize: '16px', cursor: 'pointer', transition: 'all 0.2s',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                    }}
                    className="hover:border-[var(--accent)]"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <Clock size={18} className={selectedTime === time ? 'text-[var(--accent)]' : 'text-gray-400'} /> {time}
                    </div>
                    {selectedTime === time && <CheckCircle2 size={18} color="var(--accent)" />}
                  </button>
                ))}
              </div>
              <button 
                onClick={() => submitForm(true)} 
                disabled={!selectedTime || isSubmitting}
                style={{ 
                  width: '100%', padding: '16px', borderRadius: '14px', border: 'none',
                  background: 'linear-gradient(135deg, var(--accent), #a855f7)', color: 'white',
                  fontSize: '16px', fontWeight: '700', cursor: (!selectedTime || isSubmitting) ? 'not-allowed' : 'pointer',
                  opacity: (!selectedTime || isSubmitting) ? 0.6 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  boxShadow: '0 10px 25px rgba(99,102,241,0.4)', transition: 'all 0.2s'
                }} className="hover:shadow-[0_15px_35px_rgba(99,102,241,0.6)] hover:scale-[1.02]">
                {isSubmitting ? 'Confirming...' : 'Confirm Booking'} <Sparkles size={18} />
              </button>
            </motion.div>
          )}

          {/* STEP 4: Success Message Only */}
          {step === 4 && (
            <motion.div key="step4" variants={variants} initial="initial" animate="enter" exit="exit" style={{ textAlign: 'center', width: '100%', maxWidth: '400px' }}>
              <div style={{ position: 'relative', width: '80px', height: '80px', margin: '0 auto 32px' }}>
                <div style={{ position: 'absolute', inset: '10px', borderRadius: '50%', background: 'linear-gradient(135deg, #22c55e, #16a34a)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: '0 10px 25px rgba(34,197,94,0.4)' }}>
                  <CheckCircle2 size={36} />
                </div>
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text)', marginBottom: '16px' }}>Message Sent!</h3>
              <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: '1.6', marginBottom: '32px' }}>
                Thanks for reaching out, {formData.name.split(' ')[0]}! We've received your message and will reply within 24 hours.
              </p>
              <button onClick={() => { setStep(1); setFormData({name:'',company:'',email:'',country:'',service:'',message:''}); }} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text)', padding: '12px 24px', borderRadius: '30px', fontWeight: '600', cursor: 'pointer' }}>Send another</button>
            </motion.div>
          )}

          {/* STEP 5: Success Booking */}
          {step === 5 && (
            <motion.div key="step5" variants={variants} initial="initial" animate="enter" exit="exit" style={{ textAlign: 'center', width: '100%', maxWidth: '400px' }}>
              <div style={{ position: 'relative', width: '80px', height: '80px', margin: '0 auto 32px' }}>
                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'rgba(34, 197, 94, 0.2)', animation: 'pulse 2s infinite' }}></div>
                <div style={{ position: 'absolute', inset: '10px', borderRadius: '50%', background: 'linear-gradient(135deg, #22c55e, #16a34a)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: '0 10px 25px rgba(34,197,94,0.4)' }}>
                  <CheckCircle2 size={36} />
                </div>
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text)', marginBottom: '16px' }}>Meeting Confirmed!</h3>
              <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: '1.6', marginBottom: '32px' }}>
                We're excited to speak with you, {formData.name.split(' ')[0]}!<br/>
                Your call is scheduled for <strong>{selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</strong> at <strong>{selectedTime}</strong>. 
                <br /><br />
                A calendar invitation with the Google Meet link has been sent to <strong>{formData.email}</strong>.
              </p>
              <button onClick={() => { setStep(1); setFormData({name:'',company:'',email:'',country:'',service:'',message:''}); setSelectedDate(undefined); setSelectedTime(''); }} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text)', padding: '12px 24px', borderRadius: '30px', fontWeight: '600', cursor: 'pointer' }}>Done</button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .creative-calendar .rdp {
          --rdp-cell-size: 44px;
          --rdp-accent-color: var(--accent);
          margin: 0;
          color: var(--text);
          font-family: inherit;
        }
        .creative-calendar .rdp-caption_label { font-size: 18px; font-weight: 700; }
        .creative-calendar .rdp-head_cell { font-size: 12px; font-weight: 600; text-transform: uppercase; color: var(--muted); }
        .creative-calendar .rdp-day { border-radius: 12px; font-size: 15px; font-weight: 500; transition: all 0.2s; }
        .creative-calendar .rdp-day:hover:not(.rdp-day_disabled) { background: rgba(99, 102, 241, 0.15); color: var(--accent); }
        .creative-calendar .rdp-day_selected, .creative-calendar .rdp-day_selected:focus-visible, .creative-calendar .rdp-day_selected:hover { background: linear-gradient(135deg, var(--accent), #a855f7) !important; color: white !important; font-weight: 700; box-shadow: 0 8px 16px rgba(99, 102, 241, 0.3); transform: scale(1.05); }
        .creative-calendar .rdp-day_today { font-weight: bold; color: var(--accent); }
      `}</style>
    </div>
  );
}
