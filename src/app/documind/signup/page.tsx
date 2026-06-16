'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function DocuMindSignup() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-[#FDFBFE] p-6 relative overflow-hidden font-sans">
      
      {/* Background Soft Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[420px] bg-white rounded-[24px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative z-10"
      >
        <div className="mb-8">
          <h1 className="text-[32px] font-semibold text-gray-900 mb-2" style={{ fontFamily: 'var(--syne), serif' }}>
            Create your account
          </h1>
          <p className="text-[14px] text-gray-500">Free plan: 3 documents · 20 messages per month.</p>
        </div>

        {/* Google Auth */}
        <button className="w-full py-2.5 px-4 rounded-xl border border-gray-200 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors mb-6 shadow-sm">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span className="text-[14px] font-medium text-gray-700">Continue with Google</span>
        </button>

        {/* Divider */}
        <div className="relative flex items-center py-2 mb-6">
          <div className="flex-grow border-t border-gray-100"></div>
          <span className="flex-shrink-0 mx-4 text-gray-400 text-[11px] uppercase tracking-wider font-semibold">OR</span>
          <div className="flex-grow border-t border-gray-100"></div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Full name</label>
            <input 
              type="text" 
              placeholder="Asha Patel" 
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all placeholder:text-gray-400"
            />
          </div>
          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Email</label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all placeholder:text-gray-400"
            />
          </div>
          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all placeholder:text-gray-400 mb-2"
            />
            <p className="text-[12px] text-gray-500">Min 8 characters. We check against breached passwords.</p>
          </div>
          
          <button 
            type="button" 
            className="w-full py-2.5 rounded-xl bg-[#7C3AED] text-white font-semibold text-[15px] hover:bg-[#6D28D9] transition-colors mt-6 shadow-sm"
          >
            Create account
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-[14px] text-gray-500">
            Already have an account? <Link href="/documind/login" className="text-[#7C3AED] font-medium hover:underline">Sign in</Link>
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-8 z-10"
      >
        <Link href="/documind" className="flex items-center gap-2 text-[13px] font-medium text-gray-500 hover:text-gray-900 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to home
        </Link>
      </motion.div>

    </div>
  );
}
