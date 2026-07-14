'use client';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Calendar as CalendarIcon, Clock, User, Mail, MessageSquare, CheckCircle2, ChevronRight, ArrowLeft, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeSlots = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4);
    }, 2000);
  };

  const variants = {
    initial: { opacity: 0, x: 20 },
    enter: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
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
              <span className="grad-text">Book Discovery</span> Call
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '4px' }}>
              {step === 1 ? 'Step 1 of 3: Choose a Date' : step === 2 ? 'Step 2 of 3: Pick a Time' : step === 3 ? 'Step 3 of 3: Final Details' : 'All set!'}
            </p>
          </div>
        </div>
        
        {/* Step Indicators */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ 
              width: '8px', 
              height: '8px', 
              borderRadius: '50%', 
              background: step >= i ? 'var(--accent)' : 'var(--border)',
              boxShadow: step === i ? '0 0 12px var(--accent)' : 'none',
              transition: 'all 0.3s'
            }}></div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, position: 'relative', zIndex: 1, padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <AnimatePresence mode="wait">
          
          {/* STEP 1: Date */}
          {step === 1 && (
            <motion.div key="step1" variants={variants} initial="initial" animate="enter" exit="exit" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <div className="creative-calendar" style={{ 
                background: 'rgba(255,255,255,0.02)', 
                border: '1px solid rgba(255,255,255,0.05)', 
                borderRadius: '20px', 
                padding: '24px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
              }}>

                <DayPicker 
                  mode="single" 
                  selected={selectedDate} 
                  onSelect={(date) => {
                    if (date) {
                      setSelectedDate(date);
                      setTimeout(() => setStep(2), 300);
                    }
                  }} 
                  disabled={[{ before: new Date() }, { dayOfWeek: [0, 6] }]} 
                  showOutsideDays
                />
              </div>
            </motion.div>
          )}

          {/* STEP 2: Time */}
          {step === 2 && (
            <motion.div key="step2" variants={variants} initial="initial" animate="enter" exit="exit" style={{ width: '100%', maxWidth: '340px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '24px', color: 'var(--accent)', fontWeight: '600', fontSize: '15px' }}>
                <CalendarIcon size={18} /> {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                {timeSlots.map((time) => (
                  <button 
                    key={time}
                    onClick={() => {
                      setSelectedTime(time);
                      setTimeout(() => setStep(3), 200);
                    }}
                    style={{ 
                      padding: '16px 24px', 
                      borderRadius: '16px', 
                      border: '1px solid rgba(255,255,255,0.08)', 
                      background: 'rgba(255,255,255,0.02)', 
                      color: 'var(--text)', 
                      fontWeight: '600',
                      fontSize: '16px',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backdropFilter: 'blur(10px)'
                    }}
                    className="hover:border-[var(--accent)] hover:bg-[rgba(99,102,241,0.05)] hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(99,102,241,0.15)] group"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <Clock size={18} className="text-gray-400 group-hover:text-[var(--accent)] transition-colors" /> 
                      {time}
                    </div>
                    <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all -translate-x-2 group-hover:translate-x-0" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 3: Details */}
          {step === 3 && (
            <motion.div key="step3" variants={variants} initial="initial" animate="enter" exit="exit" style={{ width: '100%', maxWidth: '380px' }}>
              
              <div style={{ padding: '16px', background: 'linear-gradient(90deg, rgba(99,102,241,0.1), rgba(168,85,247,0.1))', borderRadius: '16px', border: '1px solid rgba(168,85,247,0.2)', fontSize: '14px', color: 'var(--text)', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: '500' }}>
                <Clock size={16} color="var(--accent)" />
                {selectedDate?.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} at {selectedTime}
              </div>

              <form onSubmit={handleBook} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="input-group" style={{ position: 'relative' }}>
                  <User size={18} color="var(--muted)" style={{ position: 'absolute', left: '16px', top: '16px' }} />
                  <input required type="text" placeholder="Your Full Name" style={{ 
                    width: '100%', padding: '16px 16px 16px 46px', borderRadius: '14px', 
                    border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', 
                    color: 'var(--text)', fontSize: '15px', outline: 'none', transition: 'all 0.2s' 
                  }} className="focus:border-[var(--accent)] focus:bg-[rgba(99,102,241,0.05)] focus:shadow-[0_0_0_4px_rgba(99,102,241,0.1)]" />
                </div>
                
                <div className="input-group" style={{ position: 'relative' }}>
                  <Mail size={18} color="var(--muted)" style={{ position: 'absolute', left: '16px', top: '16px' }} />
                  <input required type="email" placeholder="Work Email Address" style={{ 
                    width: '100%', padding: '16px 16px 16px 46px', borderRadius: '14px', 
                    border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', 
                    color: 'var(--text)', fontSize: '15px', outline: 'none', transition: 'all 0.2s' 
                  }} className="focus:border-[var(--accent)] focus:bg-[rgba(99,102,241,0.05)] focus:shadow-[0_0_0_4px_rgba(99,102,241,0.1)]" />
                </div>

                <div className="input-group" style={{ position: 'relative' }}>
                  <MessageSquare size={18} color="var(--muted)" style={{ position: 'absolute', left: '16px', top: '16px' }} />
                  <textarea rows={3} placeholder="Tell us about your project goals..." style={{ 
                    width: '100%', padding: '16px 16px 16px 46px', borderRadius: '14px', 
                    border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', 
                    color: 'var(--text)', fontSize: '15px', outline: 'none', resize: 'none', transition: 'all 0.2s' 
                  }} className="focus:border-[var(--accent)] focus:bg-[rgba(99,102,241,0.05)] focus:shadow-[0_0_0_4px_rgba(99,102,241,0.1)]"></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} style={{ 
                  width: '100%', padding: '16px', borderRadius: '14px', border: 'none',
                  background: 'linear-gradient(135deg, var(--accent), #a855f7)', color: 'white',
                  fontSize: '16px', fontWeight: '700', cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  boxShadow: '0 10px 25px rgba(99,102,241,0.4)', transition: 'all 0.2s',
                  opacity: isSubmitting ? 0.8 : 1
                }} className="hover:shadow-[0_15px_35px_rgba(99,102,241,0.6)] hover:scale-[1.02]">
                  {isSubmitting ? 'Processing...' : 'Confirm Discovery Call'} <Sparkles size={18} />
                </button>
              </form>
            </motion.div>
          )}

          {/* STEP 4: Success */}
          {step === 4 && (
            <motion.div key="step4" variants={variants} initial="initial" animate="enter" exit="exit" style={{ textAlign: 'center', width: '100%', maxWidth: '400px' }}>
              <div style={{ position: 'relative', width: '80px', height: '80px', margin: '0 auto 32px' }}>
                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'rgba(34, 197, 94, 0.2)', animation: 'pulse 2s infinite' }}></div>
                <div style={{ position: 'absolute', inset: '10px', borderRadius: '50%', background: 'linear-gradient(135deg, #22c55e, #16a34a)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: '0 10px 25px rgba(34,197,94,0.4)' }}>
                  <CheckCircle2 size={36} />
                </div>
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text)', marginBottom: '16px' }}>Meeting Confirmed!</h3>
              <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: '1.6', marginBottom: '32px' }}>
                We're excited to speak with you on <strong>{selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</strong> at <strong>{selectedTime}</strong>. 
                <br /><br />
                A calendar invitation with the Google Meet link has been sent to your inbox.
              </p>
              <button 
                onClick={() => { setStep(1); setSelectedDate(undefined); setSelectedTime(''); }} 
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text)', padding: '12px 24px', borderRadius: '30px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s' }}
                className="hover:bg-[rgba(255,255,255,0.1)]"
              >
                Book another call
              </button>
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
        .creative-calendar .rdp-caption_label {
          font-size: 18px;
          font-weight: 700;
        }
        .creative-calendar .rdp-head_cell {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--muted);
        }
        .creative-calendar .rdp-day {
          border-radius: 12px;
          font-size: 15px;
          font-weight: 500;
          transition: all 0.2s;
        }
        .creative-calendar .rdp-day:hover:not(.rdp-day_disabled) {
          background: rgba(99, 102, 241, 0.15);
          color: var(--accent);
        }
        .creative-calendar .rdp-day_selected, 
        .creative-calendar .rdp-day_selected:focus-visible, 
        .creative-calendar .rdp-day_selected:hover {
          background: linear-gradient(135deg, var(--accent), #a855f7) !important;
          color: white !important;
          font-weight: 700;
          box-shadow: 0 8px 16px rgba(99, 102, 241, 0.3);
          transform: scale(1.05);
        }
        .creative-calendar .rdp-day_today {
          font-weight: bold;
          color: var(--accent);
        }
        .creative-calendar .rdp-button:focus-visible:not([disabled]) {
          background-color: transparent;
          border: 2px solid var(--accent);
        }
      `}</style>
    </div>
  );
}
