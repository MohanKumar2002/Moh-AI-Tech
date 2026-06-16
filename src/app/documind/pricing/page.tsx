'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export default function DocuMindPricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="bg-[#FDFBFE] min-h-screen py-24 px-6 lg:px-12 font-sans relative">
      {/* Background Soft Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[48px] md:text-[64px] font-semibold tracking-tight text-gray-900 mb-6"
            style={{ fontFamily: 'var(--syne), serif' }}
          >
            Simple pricing. <span className="text-[#7C3AED]">Pay only when you <br className="hidden md:block"/> need more.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[17px] text-gray-500"
          >
            Start free. Upgrade in one click when you outgrow the free tier.
          </motion.p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-full border border-gray-200 p-1.5 flex items-center shadow-sm relative">
            <button 
              onClick={() => setIsYearly(false)}
              className={`relative z-10 px-6 py-2 rounded-full text-[14px] font-medium transition-colors ${!isYearly ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`relative z-10 px-6 py-2 rounded-full text-[14px] font-medium transition-colors flex items-center gap-2 ${isYearly ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Yearly 
              <span className={`text-[11px] px-2 py-0.5 rounded-full ${isYearly ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-700'}`}>save ~17%</span>
            </button>
            {/* Sliding Pill */}
            <div 
              className={`absolute top-1.5 bottom-1.5 rounded-full transition-all duration-300 ease-in-out shadow-sm ${isYearly ? 'bg-[#7C3AED]' : 'bg-white border border-gray-100'}`}
              style={{ 
                left: isYearly ? '104px' : '6px', 
                width: isYearly ? '154px' : '96px' 
              }}
            />
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-[900px] mx-auto items-stretch">
          
          {/* Free Tier */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-[32px] p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col"
          >
            <h3 className="text-[24px] font-semibold text-gray-900 mb-2">Free</h3>
            <p className="text-[14px] text-gray-500 mb-8">For trying things out.</p>
            
            <div className="mb-10 flex items-end gap-2">
              <span className="text-[48px] font-semibold leading-none text-gray-900">₹0</span>
              <span className="text-[15px] text-gray-500 pb-2">/ forever</span>
            </div>

            <Link href="/documind/signup" className="block w-full py-3.5 rounded-xl border border-gray-200 text-center font-semibold text-[15px] text-gray-900 hover:bg-gray-50 transition-colors mb-10">
              Start free
            </Link>
            
            <ul className="space-y-4 flex-1">
              <li className="flex items-center gap-3 text-[14px] text-gray-600">
                <Check className="w-5 h-5 text-[#7C3AED] shrink-0" />
                <span>3 documents / month</span>
              </li>
              <li className="flex items-center gap-3 text-[14px] text-gray-600">
                <Check className="w-5 h-5 text-[#7C3AED] shrink-0" />
                <span>20 chat messages / month</span>
              </li>
              <li className="flex items-center gap-3 text-[14px] text-gray-600">
                <Check className="w-5 h-5 text-[#7C3AED] shrink-0" />
                <span>All AI features (chat, summarise, MCQs)</span>
              </li>
              <li className="flex items-center gap-3 text-[14px] text-gray-600">
                <Check className="w-5 h-5 text-[#7C3AED] shrink-0" />
                <span>Multilingual answers</span>
              </li>
              <li className="flex items-center gap-3 text-[14px] text-gray-400">
                <X className="w-4 h-4 shrink-0 opacity-50 ml-0.5" />
                <span className="ml-0.5">Priority support</span>
              </li>
              <li className="flex items-center gap-3 text-[14px] text-gray-400">
                <X className="w-4 h-4 shrink-0 opacity-50 ml-0.5" />
                <span className="ml-0.5">Higher monthly limits</span>
              </li>
            </ul>
          </motion.div>

          {/* Pro Tier */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#8B5CF6] rounded-[32px] p-10 shadow-[0_20px_40px_rgba(139,92,246,0.25)] flex flex-col relative"
          >
            <div className="absolute top-8 right-8 px-3 py-1 rounded-full bg-white/20 text-white text-[12px] font-semibold tracking-wide">
              Most popular
            </div>
            
            <h3 className="text-[24px] font-semibold text-white mb-2">Pro</h3>
            <p className="text-[14px] text-white/80 mb-8">For daily users and small teams.</p>
            
            <div className="mb-10 min-h-[72px]">
              <div className="flex items-end gap-2">
                <span className="text-[48px] font-semibold leading-none text-white">
                  {isYearly ? '₹833' : '₹999'}
                </span>
                <span className="text-[15px] text-white/80 pb-2">/ month{isYearly ? ', billed yearly' : ''}</span>
              </div>
              {isYearly && <div className="text-[13px] text-white/70 mt-2">₹9,999 per year — save ₹1,989</div>}
            </div>

            <button className="w-full py-3.5 rounded-xl bg-white text-[#7C3AED] font-semibold text-[15px] hover:bg-gray-50 transition-colors mb-10 shadow-sm">
              Upgrade to Pro
            </button>
            
            <ul className="space-y-4 flex-1">
              <li className="flex items-center gap-3 text-[14px] text-white">
                <Check className="w-5 h-5 shrink-0" />
                <span>100 documents / month</span>
              </li>
              <li className="flex items-center gap-3 text-[14px] text-white">
                <Check className="w-5 h-5 shrink-0" />
                <span>1000 chat messages / month</span>
              </li>
              <li className="flex items-center gap-3 text-[14px] text-white">
                <Check className="w-5 h-5 shrink-0" />
                <span>All AI features</span>
              </li>
              <li className="flex items-center gap-3 text-[14px] text-white">
                <Check className="w-5 h-5 shrink-0" />
                <span>Multilingual answers</span>
              </li>
              <li className="flex items-center gap-3 text-[14px] text-white">
                <Check className="w-5 h-5 shrink-0" />
                <span>Priority support</span>
              </li>
              <li className="flex items-center gap-3 text-[14px] text-white">
                <Check className="w-5 h-5 shrink-0" />
                <span>Cancel anytime</span>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Enterprise Notice */}
        <div className="mt-20 text-center p-8 bg-white border border-gray-100 rounded-2xl max-w-4xl mx-auto shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">Need more than Pro?</h4>
          <p className="text-[14px] text-gray-500">We're building enterprise plans for teams &gt; 25 users. <a href="#contact" className="text-[#7C3AED] hover:underline">Reach out and we'll set you up.</a></p>
        </div>

      </div>
    </div>
  );
}
