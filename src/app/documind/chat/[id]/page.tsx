'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Send, FileText, ChevronLeft, AlertTriangle, Sparkles, Languages } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DocuMindChat() {
  const params = useParams();
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I have analyzed "Q3_Financial_Report_2024.pdf". What would you like to know about it?' }
  ]);
  const [input, setInput] = useState('');
  const [chatsUsed, setChatsUsed] = useState(4); // Out of 5
  
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    if (chatsUsed >= 5) return; // Prevent sending if limit reached
    
    setMessages([...messages, { role: 'user', content: input }]);
    setInput('');
    setChatsUsed(prev => prev + 1);
    
    // Fake typing simulation
    setTimeout(() => {
      if (chatsUsed + 1 >= 5) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: 'You have reached your free tier limit of 5 chats per month. Please upgrade to DocuMind Pro to continue chatting with this document.' 
        }]);
      } else {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: 'Based on page 12 of the report, the Q3 revenue grew by 14% year-over-year.' 
        }]);
      }
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-[#050505]">
      {/* Top Bar */}
      <div className="h-14 border-b border-white/10 flex items-center justify-between px-4 bg-[#0A0A0A]">
        <div className="flex items-center gap-4">
          <Link href="/documind/dashboard" className="p-2 hover:bg-white/10 rounded-md transition-colors text-gray-400 hover:text-white">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-purple-400" />
            <span className="font-medium text-sm">Q3_Financial_Report_2024.pdf</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-medium">
            <span className="text-gray-400">Language:</span>
            <span className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded text-white"><Languages className="w-3 h-3" /> Auto</span>
          </div>
          {chatsUsed >= 4 && (
            <div className={`text-xs px-2 py-1 rounded ${chatsUsed >= 5 ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
              {chatsUsed}/5 Free Chats Used
            </div>
          )}
        </div>
      </div>

      {/* Main Split View */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left: Document Viewer (Mock) */}
        <div className="hidden lg:flex flex-col w-1/2 border-r border-white/10 bg-[#111] p-4">
          <div className="w-full h-full bg-white rounded-lg shadow-inner overflow-hidden relative border border-gray-200">
            {/* Fake PDF Header */}
            <div className="h-10 bg-gray-100 border-b border-gray-300 flex items-center px-4 justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="text-xs text-black/50 font-medium font-mono">Page 1 of 24</div>
            </div>
            {/* Fake PDF Content */}
            <div className="p-12">
              <div className="h-8 w-3/4 bg-gray-300 rounded mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
              </div>
              <div className="mt-12 h-48 w-full bg-blue-100/50 border border-blue-200 rounded flex items-center justify-center text-blue-400 text-sm font-mono">
                [ Chart Placeholder ]
              </div>
              <div className="space-y-4 mt-12">
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-4/5 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: AI Chat Interface */}
        <div className="flex-1 flex flex-col relative bg-[#0A0A0A]">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            {messages.map((msg, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={idx} 
                className={`flex gap-4 max-w-3xl mx-auto ${msg.role === 'assistant' ? '' : 'flex-row-reverse'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'assistant' ? 'bg-gradient-to-tr from-purple-600 to-blue-500' : 'bg-[#222]'}`}>
                  {msg.role === 'assistant' ? <Sparkles className="w-4 h-4 text-white" /> : <div className="text-xs text-gray-400">U</div>}
                </div>
                <div className={`px-4 py-3 rounded-2xl max-w-[85%] text-[15px] leading-relaxed ${
                  msg.role === 'assistant' 
                    ? msg.content.includes('limit of 5 chats') 
                      ? 'bg-red-500/10 border border-red-500/30 text-red-200'
                      : 'bg-[#1A1A1A] border border-white/10 text-gray-200'
                    : 'bg-purple-600/20 border border-purple-500/30 text-purple-100'
                }`}>
                  {msg.content}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Upgrade Banner (If Limit Reached) */}
          {chatsUsed >= 5 && (
            <div className="absolute bottom-[90px] left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-gradient-to-r from-red-900/90 to-[#111] border border-red-500/30 p-4 rounded-xl shadow-2xl backdrop-blur-md flex flex-col items-center text-center z-20">
              <AlertTriangle className="w-6 h-6 text-red-400 mb-2" />
              <h4 className="font-bold text-white mb-1">Free Limit Reached</h4>
              <p className="text-sm text-red-200/80 mb-3">You've used all 5 free chats for this month.</p>
              <Link href="/documind/pricing" className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full w-full hover:bg-gray-200">
                Upgrade to Pro
              </Link>
            </div>
          )}

          {/* Input Box */}
          <div className="p-4 sm:p-6 bg-gradient-to-t from-[#0A0A0A] to-transparent">
            <div className="max-w-3xl mx-auto relative">
              <form onSubmit={handleSend} className="relative flex items-center">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={chatsUsed >= 5}
                  placeholder={chatsUsed >= 5 ? "Limit reached. Upgrade to chat." : "Ask anything about the document..."}
                  className="w-full bg-[#1A1A1A] border border-white/10 rounded-2xl pl-4 pr-12 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 disabled:opacity-50 transition-colors shadow-inner"
                />
                <button 
                  type="submit" 
                  disabled={!input.trim() || chatsUsed >= 5}
                  className="absolute right-2 p-2.5 bg-white text-black rounded-xl hover:bg-gray-200 disabled:opacity-50 disabled:bg-[#333] disabled:text-gray-500 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <div className="text-center mt-2 text-xs text-gray-600">
                AI can make mistakes. Always verify important information.
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
