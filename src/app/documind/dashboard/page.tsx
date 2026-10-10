'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

/* ── Types ── */
interface Document {
  id: string;
  name: string;
  type: 'pdf' | 'doc' | 'txt';
  size: string;
  pages?: number;
  uploadedAt: string;
  icon: string;
}

interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
  time: string;
}

interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

/* ── Mock data ── */
const MOCK_DOCS: Document[] = [
  { id: '1', name: 'Machine_Learning_Fundamentals.pdf', type: 'pdf', size: '4.2 MB', pages: 186, uploadedAt: '2 min ago', icon: '📘' },
  { id: '2', name: 'Employee_Handbook_2025.pdf', type: 'pdf', size: '2.8 MB', pages: 94, uploadedAt: '1 hour ago', icon: '📄' },
  { id: '3', name: 'Q3_Financial_Report.pdf', type: 'pdf', size: '1.1 MB', pages: 32, uploadedAt: 'Yesterday', icon: '📊' },
];

const MOCK_QUIZ: QuizQuestion[] = [
  {
    question: 'What is the primary goal of gradient descent?',
    options: ['Maximize the loss function', 'Minimize the loss function', 'Increase the learning rate', 'Reduce the dataset size'],
    correct: 1,
    explanation: 'Gradient descent minimizes the loss function by iteratively moving in the direction of steepest descent (negative gradient).',
  },
  {
    question: 'What does the learning rate control in gradient descent?',
    options: ['The number of epochs', 'The size of each update step', 'The batch size', 'The number of hidden layers'],
    correct: 1,
    explanation: 'The learning rate determines how large each parameter update step is. Too large causes divergence; too small causes slow convergence.',
  },
  {
    question: 'Which type of gradient descent processes one sample at a time?',
    options: ['Batch gradient descent', 'Mini-batch gradient descent', 'Stochastic gradient descent', 'Full-batch gradient descent'],
    correct: 2,
    explanation: 'Stochastic gradient descent (SGD) updates parameters after computing the gradient for a single training example.',
  },
];

const AI_RESPONSES: Record<string, string> = {
  default: 'Based on the document content, I can help you understand that topic. The document discusses several key concepts related to your question. Would you like me to elaborate on any specific aspect?',
  summarize: 'Here\'s a comprehensive summary of the document:\n\n**Key Topics Covered:**\n- Core concepts and fundamentals\n- Practical applications and case studies\n- Implementation methodologies\n- Advanced topics and future directions\n\n**Main Takeaways:**\nThe document presents a structured approach to the subject matter, covering both theoretical foundations and practical implementation. Key insights include the importance of data quality, algorithm selection, and evaluation metrics.',
  quiz: 'I\'ve generated **3 practice questions** based on the document content. Navigate to the **Quiz** section to test your knowledge! The questions cover gradient descent, learning rates, and optimization algorithms.',
  topics: '**Main Topics in this Document:**\n\n1. **Introduction to Machine Learning** (Ch. 1-2)\n2. **Linear & Logistic Regression** (Ch. 3-4)\n3. **Neural Networks Fundamentals** (Ch. 5-7)\n4. **Optimization Algorithms** (Ch. 8-9)\n5. **Regularization Techniques** (Ch. 10)\n6. **Model Evaluation** (Ch. 11-12)',
  takeaways: '**Key Takeaways:**\n\n✓ Machine learning enables computers to learn from data without explicit programming\n✓ Feature engineering significantly impacts model performance\n✓ Cross-validation is essential for reliable model evaluation\n✓ Regularization prevents overfitting in complex models\n✓ Ensemble methods often outperform individual models',
  complex: '**Most Complex Concept: Backpropagation**\n\nBackpropagation is the algorithm used to calculate gradients in neural networks. It works by applying the chain rule of calculus to compute how each weight contributes to the overall error. The process flows backward through the network, layer by layer, adjusting weights to minimize the loss function. The mathematical foundation involves partial derivatives and the Jacobian matrix.',
};

type ViewType = 'upload' | 'chat' | 'summary' | 'quiz' | 'extract';
type SummaryLevel = 'quick' | 'detailed' | 'full';
type Language = 'en' | 'ta' | 'hi' | 'te' | 'de';

const SUMMARY_CONTENT: Record<SummaryLevel, string> = {
  quick: 'This document covers the fundamentals of Machine Learning, including supervised and unsupervised learning algorithms, optimization techniques, and model evaluation strategies. Essential reading for ML practitioners.',
  detailed: '**Machine Learning Fundamentals — Detailed Summary**\n\n**Part 1: Foundations**\nThe document begins with a thorough introduction to statistical learning theory, establishing the mathematical basis for modern ML algorithms. Key concepts include hypothesis spaces, bias-variance tradeoff, and generalization bounds.\n\n**Part 2: Core Algorithms**\nCovers linear models (regression, classification), tree-based methods, kernel machines, and neural networks. Each algorithm is presented with intuitive explanations followed by formal mathematical treatment.\n\n**Part 3: Optimization**\nDeep dive into gradient-based optimization including SGD variants (Adam, RMSprop, Adagrad), second-order methods, and convergence guarantees.\n\n**Part 4: Evaluation & Deployment**\nModel selection, cross-validation strategies, A/B testing frameworks, and production deployment considerations.',
  full: '**Full Chapter-by-Chapter Breakdown**\n\n**Chapter 1: Introduction to Statistical Learning**\nFoundations of ML: definitions, types of learning, the role of data. Introduces the PAC learning framework and sample complexity.\n\n**Chapter 2: Linear Regression**\nLeast squares estimation, normal equations, probabilistic interpretation via MLE. Includes polynomial regression and regularization (Ridge, Lasso).\n\n**Chapter 3: Classification**\nLogistic regression, perceptron, linear discriminant analysis. Decision boundaries and probability calibration.\n\n**Chapter 4: Model Selection**\nValidation methods, cross-validation, information criteria (AIC, BIC), nested CV for hyperparameter tuning.\n\n**Chapter 5-7: Neural Networks**\nFeedforward networks, backpropagation derivation, activation functions, initialization strategies, batch normalization.\n\n**Chapter 8-9: Optimization**\nSGD, momentum, adaptive learning rates. Convergence analysis for convex and non-convex objectives.\n\n**Chapter 10: Regularization**\nL1/L2 penalties, dropout, data augmentation, early stopping. Theoretical analysis of implicit regularization.\n\n**Chapters 11-12: Advanced Topics**\nEnsemble methods (bagging, boosting), kernel methods, Gaussian processes, and an introduction to deep learning architectures.',
};

export default function DocuMindApp() {
  const [view, setView] = useState<ViewType>('upload');
  const [activeDoc, setActiveDoc] = useState<Document | null>(null);
  const [docs, setDocs] = useState<Document[]>(MOCK_DOCS);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [summaryLevel, setSummaryLevel] = useState<SummaryLevel>('quick');
  const [language, setLanguage] = useState<Language>('en');
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizRevealed, setQuizRevealed] = useState<Record<number, boolean>>({});
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' | 'info' } | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const showToast = (msg: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  const selectDoc = (doc: Document) => {
    setActiveDoc(doc);
    setView('chat');
    if (messages.length === 0) {
      addAIMessage(`Hello! I've loaded **${doc.name}** (${doc.pages} pages). Ask me anything about it — I can summarize, explain concepts, generate quiz questions, or extract specific information.`);
    }
  };

  const addAIMessage = (content: string) => {
    const msg: Message = { id: Date.now().toString(), role: 'ai', content, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, msg]);
  };

  const sendMessage = () => {
    if (!inputVal.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: inputVal.trim(), time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, userMsg]);
    const q = inputVal.toLowerCase();
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let response = AI_RESPONSES.default;
      if (q.includes('summar')) response = AI_RESPONSES.summarize;
      else if (q.includes('quiz') || q.includes('question')) response = AI_RESPONSES.quiz;
      else if (q.includes('topic') || q.includes('chapter')) response = AI_RESPONSES.topics;
      else if (q.includes('takeaway') || q.includes('key point')) response = AI_RESPONSES.takeaways;
      else if (q.includes('complex') || q.includes('difficult')) response = AI_RESPONSES.complex;
      addAIMessage(response);
    }, 1200 + Math.random() * 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const processFile = (file: File) => {
    setUploading(true);
    setTimeout(() => {
      const ext = file.name.split('.').pop()?.toLowerCase() as 'pdf' | 'doc' | 'txt';
      const newDoc: Document = {
        id: Date.now().toString(),
        name: file.name,
        type: ['pdf', 'doc', 'docx'].includes(ext) ? 'pdf' : 'txt',
        size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
        pages: Math.floor(Math.random() * 200) + 10,
        uploadedAt: 'Just now',
        icon: ext === 'pdf' ? '📄' : ext === 'doc' || ext === 'docx' ? '📝' : '📃',
      };
      setDocs(prev => [newDoc, ...prev]);
      setUploading(false);
      showToast(`${file.name} uploaded successfully!`);
      selectDoc(newDoc);
    }, 2000);
  };

  const answerQuiz = (qi: number, oi: number) => {
    if (quizRevealed[qi]) return;
    setQuizAnswers(prev => ({ ...prev, [qi]: oi }));
    setQuizRevealed(prev => ({ ...prev, [qi]: true }));
  };

  const navItems = [
    { id: 'upload' as ViewType, icon: '📤', label: 'Upload document' },
    { id: 'chat' as ViewType, icon: '💬', label: 'Chat' },
    { id: 'summary' as ViewType, icon: '📝', label: 'Summarize' },
    { id: 'quiz' as ViewType, icon: '🎯', label: 'Quiz generator' },
    { id: 'extract' as ViewType, icon: '📊', label: 'Extract data' },
  ];

  const quizScore = Object.keys(quizRevealed).length > 0
    ? Object.entries(quizAnswers).filter(([qi, oi]) => MOCK_QUIZ[+qi].correct === oi).length
    : null;

  const renderMarkdown = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br/>');
  };

  return (
    <>
      <style>{`
        /* ── DocuMind App Shell ── */
        .dma-root {
          display: flex; height: 100vh; overflow: hidden;
          background: #0a0a0f; color: #f0f0ff;
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif;
        }

        /* Sidebar */
        .dma-sidebar {
          width: 260px; flex-shrink: 0;
          background: #111118; border-right: 1px solid #2a2a42;
          display: flex; flex-direction: column;
        }
        .dma-sidebar-header {
          padding: 16px; border-bottom: 1px solid #2a2a42;
          display: flex; align-items: center; justify-content: space-between;
        }
        .dma-sidebar-logo { display: flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 700; }
        .dma-logo-icon {
          width: 26px; height: 26px; border-radius: 6px;
          background: linear-gradient(135deg, #7c3aed, #00d4ff);
          display: flex; align-items: center; justify-content: center; font-size: 13px;
        }
        .dma-plan-badge {
          font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: 100px;
          background: rgba(124,58,237,0.2); color: #9d5cf6;
          border: 1px solid rgba(124,58,237,0.3);
        }
        .dma-sidebar-nav { flex: 1; padding: 12px 8px; overflow-y: auto; }
        .dma-nav-label {
          font-size: 10px; color: #606080; text-transform: uppercase;
          letter-spacing: 0.08em; padding: 8px 8px 4px;
        }
        .dma-nav-item {
          display: flex; align-items: center; gap: 10px;
          padding: 9px 10px; border-radius: 8px;
          font-size: 14px; color: #a0a0c0; cursor: pointer;
          transition: all 0.15s; margin-bottom: 2px; border: none;
          background: transparent; width: 100%; text-align: left;
        }
        .dma-nav-item:hover { background: #1a1a26; color: #f0f0ff; }
        .dma-nav-item.active { background: rgba(124,58,237,0.15); color: #9d5cf6; }
        .dma-nav-item-icon { font-size: 15px; flex-shrink: 0; }

        /* Doc list in sidebar */
        .dma-doc-list { padding: 8px; border-top: 1px solid #2a2a42; max-height: 220px; overflow-y: auto; }
        .dma-doc-item {
          display: flex; align-items: center; gap: 8px;
          padding: 8px; border-radius: 8px; cursor: pointer;
          transition: background 0.15s; margin-bottom: 2px;
          border: 1px solid transparent;
        }
        .dma-doc-item:hover { background: #1a1a26; }
        .dma-doc-item.active { background: rgba(0,212,255,0.08); border-color: rgba(0,212,255,0.15); }
        .dma-doc-icon {
          width: 28px; height: 28px; border-radius: 6px;
          background: rgba(239,68,68,0.15);
          display: flex; align-items: center; justify-content: center; font-size: 13px; flex-shrink: 0;
        }
        .dma-doc-name { font-size: 12px; color: #f0f0ff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .dma-doc-meta { font-size: 10px; color: #606080; }

        /* Usage bar */
        .dma-sidebar-footer { padding: 12px; border-top: 1px solid #2a2a42; }
        .dma-usage-label { display: flex; justify-content: space-between; font-size: 11px; color: #606080; margin-bottom: 4px; }
        .dma-usage-bar { height: 4px; background: #22223a; border-radius: 2px; overflow: hidden; margin-bottom: 8px; }
        .dma-usage-fill { height: 100%; background: linear-gradient(90deg, #7c3aed, #00d4ff); border-radius: 2px; }
        .dma-upgrade-btn {
          width: 100%; padding: 8px; border-radius: 8px;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          border: none; color: white; font-size: 13px; font-weight: 500;
          cursor: pointer; transition: opacity 0.2s;
        }
        .dma-upgrade-btn:hover { opacity: 0.9; }

        /* Main area */
        .dma-main { flex: 1; display: flex; flex-direction: column; min-width: 0; }
        .dma-main-header {
          padding: 0 24px; height: 56px; border-bottom: 1px solid #2a2a42;
          display: flex; align-items: center; justify-content: space-between;
          background: #0a0a0f; flex-shrink: 0;
        }
        .dma-main-title { font-size: 15px; font-weight: 600; }
        .dma-main-actions { display: flex; gap: 8px; align-items: center; }
        .dma-icon-btn {
          width: 34px; height: 34px; border-radius: 8px;
          background: #1a1a26; border: 1px solid #2a2a42;
          color: #a0a0c0; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; transition: all 0.15s;
        }
        .dma-icon-btn:hover { background: #22223a; color: #f0f0ff; }
        .dma-lang-select {
          background: #1a1a26; border: 1px solid #2a2a42; color: #f0f0ff;
          padding: 6px 10px; border-radius: 8px; font-size: 12px; cursor: pointer; outline: none;
        }

        /* Upload view */
        .dma-upload-view {
          flex: 1; display: flex; flex-direction: column;
          align-items: center; justify-content: center; padding: 2rem;
          overflow-y: auto;
        }
        .dma-upload-zone {
          width: 100%; max-width: 560px;
          border: 2px dashed #3a3a58; border-radius: 16px;
          padding: 3rem 2rem; text-align: center; cursor: pointer;
          transition: all 0.2s; position: relative;
          background: rgba(255,255,255,0.03);
        }
        .dma-upload-zone:hover, .dma-upload-zone.dragover {
          border-color: #7c3aed; background: rgba(124,58,237,0.05);
        }
        .dma-upload-zone h3 { font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem; }
        .dma-upload-zone p { font-size: 14px; color: #a0a0c0; margin-bottom: 1.5rem; }
        .dma-upload-types { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }
        .dma-type-badge {
          font-size: 11px; padding: 3px 10px; border-radius: 100px;
          background: #1a1a26; border: 1px solid #3a3a58; color: #a0a0c0;
        }

        /* Recent docs grid */
        .dma-recent { margin-top: 2rem; width: 100%; max-width: 560px; }
        .dma-recent h4 { font-size: 12px; color: #606080; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px; }
        .dma-recent-grid { display: flex; flex-direction: column; gap: 8px; }
        .dma-recent-item {
          display: flex; align-items: center; gap: 10px;
          padding: 12px; border-radius: 10px; cursor: pointer;
          background: rgba(255,255,255,0.03); border: 1px solid #2a2a42;
          transition: border-color 0.15s;
        }
        .dma-recent-item:hover { border-color: #9d5cf6; }
        .dma-recent-icon { font-size: 20px; }
        .dma-recent-name { font-size: 13px; color: #f0f0ff; font-weight: 500; }
        .dma-recent-meta { font-size: 11px; color: #606080; }
        .dma-recent-open {
          margin-left: auto; font-size: 12px; color: #9d5cf6;
          background: none; border: none; cursor: pointer;
        }

        /* Chat view */
        .dma-chat-view { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
        .dma-chat-doc-header {
          padding: 12px 24px; background: #111118; border-bottom: 1px solid #2a2a42;
          display: flex; align-items: center; gap: 12px; flex-shrink: 0;
        }
        .dma-chat-doc-icon {
          width: 36px; height: 36px; border-radius: 8px;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          display: flex; align-items: center; justify-content: center; font-size: 16px;
        }
        .dma-chat-doc-name { font-size: 14px; font-weight: 600; }
        .dma-chat-doc-meta { font-size: 12px; color: #606080; }
        .dma-chat-tools { margin-left: auto; display: flex; gap: 8px; }
        .dma-tool-btn {
          padding: 6px 14px; border-radius: 8px; font-size: 12px; font-weight: 500;
          cursor: pointer; border: 1px solid #3a3a58;
          background: transparent; color: #a0a0c0; transition: all 0.15s;
          display: flex; align-items: center; gap: 5px;
        }
        .dma-tool-btn:hover { background: #1a1a26; color: #f0f0ff; }

        /* Messages */
        .dma-chat-messages {
          flex: 1; overflow-y: auto; padding: 24px;
          display: flex; flex-direction: column; gap: 20px;
        }
        .dma-chat-messages::-webkit-scrollbar { width: 6px; }
        .dma-chat-messages::-webkit-scrollbar-thumb { background: #3a3a58; border-radius: 3px; }
        .dma-msg-wrap { display: flex; gap: 10px; max-width: 800px; }
        .dma-msg-wrap.user { align-self: flex-end; flex-direction: row-reverse; }
        .dma-msg-avatar {
          width: 32px; height: 32px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; font-weight: 600; flex-shrink: 0;
        }
        .dma-msg-avatar.ai { background: linear-gradient(135deg, #7c3aed, #00d4ff); color: white; }
        .dma-msg-avatar.user { background: #22223a; color: #a0a0c0; }
        .dma-msg-bubble-user {
          background: linear-gradient(135deg, #7c3aed, #4f46e5); color: white;
          padding: 12px 16px; border-radius: 16px 16px 4px 16px;
          font-size: 14px; line-height: 1.6; max-width: 600px;
        }
        .dma-msg-bubble-ai {
          background: #111118; border: 1px solid #2a2a42; color: #f0f0ff;
          padding: 14px 18px; border-radius: 4px 16px 16px 16px;
          font-size: 14px; line-height: 1.7; max-width: 600px;
        }
        .dma-msg-time { font-size: 11px; color: #606080; margin-top: 5px; padding: 0 4px; }
        .dma-typing {
          display: flex; gap: 4px; align-items: center;
          padding: 14px 18px; background: #111118; border: 1px solid #2a2a42;
          border-radius: 4px 16px 16px 16px; width: fit-content;
        }
        .dma-typing span {
          width: 7px; height: 7px; background: #606080; border-radius: 50%;
          animation: dma-bounce 1.2s infinite;
        }
        .dma-typing span:nth-child(2) { animation-delay: 0.15s; }
        .dma-typing span:nth-child(3) { animation-delay: 0.3s; }
        @keyframes dma-bounce { 0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)} }

        /* Empty state */
        .dma-empty { text-align: center; padding: 4rem 2rem; }
        .dma-empty-icon { font-size: 3rem; margin-bottom: 1rem; opacity: 0.5; }
        .dma-empty h3 { font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; color: #a0a0c0; }
        .dma-empty p { font-size: 14px; color: #606080; }

        /* Input area */
        .dma-chat-input-area {
          padding: 16px 24px; border-top: 1px solid #2a2a42;
          background: #0a0a0f; flex-shrink: 0;
        }
        .dma-suggestions { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px; }
        .dma-suggestion {
          padding: 6px 14px; border-radius: 100px;
          background: #1a1a26; border: 1px solid #3a3a58;
          font-size: 12px; color: #a0a0c0; cursor: pointer;
          transition: all 0.15s; white-space: nowrap;
        }
        .dma-suggestion:hover { background: #22223a; color: #f0f0ff; border-color: #7c3aed; }
        .dma-input-row { display: flex; gap: 10px; align-items: flex-end; }
        .dma-chat-input {
          flex: 1; background: #111118; border: 1px solid #2a2a42;
          border-radius: 12px; padding: 12px 16px; color: #f0f0ff;
          font-size: 14px; font-family: inherit; resize: none; outline: none;
          min-height: 48px; max-height: 160px; line-height: 1.5;
          transition: border-color 0.2s;
        }
        .dma-chat-input:focus { border-color: #7c3aed; }
        .dma-chat-input::placeholder { color: #606080; }
        .dma-send-btn {
          width: 44px; height: 44px; border-radius: 8px;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          border: none; color: white; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px; transition: all 0.2s; flex-shrink: 0;
        }
        .dma-send-btn:hover { transform: scale(1.05); }
        .dma-send-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

        /* Summary view */
        .dma-summary-view { flex: 1; overflow-y: auto; padding: 24px; }
        .dma-summary-levels { display: flex; gap: 8px; margin-bottom: 20px; }
        .dma-level-btn {
          padding: 7px 18px; border-radius: 100px; font-size: 13px; font-weight: 500;
          cursor: pointer; border: 1px solid #3a3a58; background: transparent; color: #a0a0c0;
          transition: all 0.15s;
        }
        .dma-level-btn.active { background: #7c3aed; border-color: #7c3aed; color: white; }
        .dma-summary-content {
          background: #111118; border: 1px solid #2a2a42; border-radius: 12px;
          padding: 24px; line-height: 1.8; color: #a0a0c0; font-size: 14px; min-height: 200px;
        }
        .dma-summary-actions { display: flex; gap: 10px; margin-top: 16px; }
        .dma-action-btn {
          padding: 9px 20px; border-radius: 8px; font-size: 14px; font-weight: 500;
          cursor: pointer; border: 1px solid #3a3a58; background: transparent; color: #a0a0c0;
          transition: all 0.2s; display: inline-flex; align-items: center; gap: 6px;
        }
        .dma-action-btn:hover { color: #f0f0ff; border-color: #606080; }
        .dma-action-btn.primary {
          background: linear-gradient(135deg, #7c3aed, #4f46e5); border: none; color: white;
          box-shadow: 0 4px 20px rgba(124,58,237,0.3);
        }

        /* Quiz view */
        .dma-quiz-view { flex: 1; overflow-y: auto; padding: 24px; }
        .dma-quiz-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; flex-wrap: wrap; gap: 12px; }
        .dma-quiz-config { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
        .dma-quiz-select {
          background: #111118; border: 1px solid #3a3a58; color: #f0f0ff;
          padding: 8px 12px; border-radius: 8px; font-size: 13px; cursor: pointer; outline: none;
        }
        .dma-quiz-score {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 20px;
        }
        .dma-quiz-score h3 { font-size: 1.4rem; font-weight: 700; margin-bottom: 4px; }
        .dma-quiz-score p { font-size: 14px; opacity: 0.8; }
        .dma-quiz-card {
          background: #111118; border: 1px solid #2a2a42;
          border-radius: 12px; padding: 20px; margin-bottom: 16px;
        }
        .dma-quiz-q-num {
          font-size: 11px; color: #00d4ff; text-transform: uppercase;
          letter-spacing: 0.08em; margin-bottom: 8px; font-weight: 600;
        }
        .dma-quiz-q { font-size: 15px; font-weight: 500; margin-bottom: 16px; line-height: 1.5; }
        .dma-quiz-options { display: flex; flex-direction: column; gap: 8px; }
        .dma-quiz-option {
          padding: 10px 16px; border-radius: 8px; border: 1px solid #3a3a58;
          cursor: pointer; font-size: 14px; color: #a0a0c0; transition: all 0.15s;
          display: flex; gap: 10px; align-items: center; background: transparent;
          text-align: left; width: 100%;
        }
        .dma-quiz-option:hover:not(.revealed) { background: #1a1a26; color: #f0f0ff; }
        .dma-quiz-option.correct { background: rgba(16,185,129,0.1); border-color: #10b981; color: #10b981; }
        .dma-quiz-option.wrong { background: rgba(239,68,68,0.1); border-color: #ef4444; color: #ef4444; }
        .dma-quiz-explanation {
          margin-top: 12px; padding: 10px 14px;
          background: rgba(0,212,255,0.05); border: 1px solid rgba(0,212,255,0.15);
          border-radius: 8px; font-size: 13px; color: #a0a0c0;
        }

        /* Extract view */
        .dma-extract-view { flex: 1; overflow-y: auto; padding: 24px; }
        .dma-extract-types { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 12px; margin-bottom: 24px; }
        .dma-extract-type {
          padding: 14px; border-radius: 12px; border: 1px solid #3a3a58;
          cursor: pointer; text-align: center; transition: all 0.15s; background: #111118;
        }
        .dma-extract-type:hover, .dma-extract-type.active { border-color: #7c3aed; background: rgba(124,58,237,0.08); }
        .dma-extract-type-icon { font-size: 1.5rem; margin-bottom: 6px; }
        .dma-extract-type-name { font-size: 12px; font-weight: 500; color: #a0a0c0; }
        .dma-extract-result { background: #111118; border: 1px solid #2a2a42; border-radius: 12px; padding: 20px; }
        .dma-extract-table { width: 100%; border-collapse: collapse; font-size: 13px; }
        .dma-extract-table th { background: #1a1a26; padding: 10px 14px; text-align: left; color: #a0a0c0; font-weight: 500; border-bottom: 1px solid #2a2a42; }
        .dma-extract-table td { padding: 10px 14px; border-bottom: 1px solid #2a2a42; color: #a0a0c0; }
        .dma-extract-table tr:last-child td { border: none; }

        /* Toast */
        .dma-toast {
          position: fixed; bottom: 2rem; right: 2rem; z-index: 300;
        }
        .dma-toast-item {
          background: #111118; border: 1px solid #3a3a58; border-radius: 12px;
          padding: 12px 18px; font-size: 14px; display: flex; align-items: center;
          gap: 10px; min-width: 260px; animation: dma-slideIn 0.3s ease;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4); color: #f0f0ff;
        }
        .dma-toast-item.success { border-color: rgba(16,185,129,0.4); }
        .dma-toast-item.error { border-color: rgba(239,68,68,0.4); }
        @keyframes dma-slideIn { from{transform:translateX(100px);opacity:0} to{transform:translateX(0);opacity:1} }

        /* Spinner */
        .dma-spinner {
          width: 32px; height: 32px; border: 3px solid #2a2a42;
          border-top-color: #7c3aed; border-radius: 50%;
          animation: dma-spin 0.8s linear infinite;
        }
        @keyframes dma-spin { to{transform:rotate(360deg)} }
      `}</style>

      <div className="dma-root">
        {/* ── SIDEBAR ── */}
        <aside className="dma-sidebar">
          <div className="dma-sidebar-header">
            <div className="dma-sidebar-logo">
              <div className="dma-logo-icon">🧠</div>
              DocuMind
            </div>
            <span className="dma-plan-badge">Free</span>
          </div>

          <div className="dma-sidebar-nav">
            <div className="dma-nav-label">Workspace</div>
            {navItems.map(item => (
              <button
                key={item.id}
                className={`dma-nav-item ${view === item.id ? 'active' : ''}`}
                onClick={() => setView(item.id)}
              >
                <span className="dma-nav-item-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}

            {docs.length > 0 && (
              <>
                <div className="dma-nav-label" style={{ marginTop: 12 }}>Documents</div>
                <div className="dma-doc-list">
                  {docs.map(doc => (
                    <div
                      key={doc.id}
                      className={`dma-doc-item ${activeDoc?.id === doc.id ? 'active' : ''}`}
                      onClick={() => selectDoc(doc)}
                    >
                      <div className="dma-doc-icon">{doc.icon}</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div className="dma-doc-name">{doc.name}</div>
                        <div className="dma-doc-meta">{doc.size} · {doc.pages}p</div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="dma-sidebar-footer">
            <div className="dma-usage-label">
              <span>Documents used</span>
              <span>{docs.length} / 3</span>
            </div>
            <div className="dma-usage-bar">
              <div className="dma-usage-fill" style={{ width: `${Math.min((docs.length / 3) * 100, 100)}%` }} />
            </div>
            <button className="dma-upgrade-btn">⚡ Upgrade plan</button>
          </div>
        </aside>

        {/* ── MAIN ── */}
        <main className="dma-main">
          <div className="dma-main-header">
            <span className="dma-main-title">
              {view === 'upload' && 'Upload a document'}
              {view === 'chat' && (activeDoc ? activeDoc.name : 'Chat')}
              {view === 'summary' && 'Summarize'}
              {view === 'quiz' && 'Quiz Generator'}
              {view === 'extract' && 'Extract Data'}
            </span>
            <div className="dma-main-actions">
              <select
                className="dma-lang-select"
                value={language}
                onChange={e => setLanguage(e.target.value as Language)}
              >
                <option value="en">🇬🇧 English</option>
                <option value="ta">🇮🇳 Tamil</option>
                <option value="hi">🇮🇳 Hindi</option>
                <option value="te">🇮🇳 Telugu</option>
                <option value="de">🇩🇪 German</option>
              </select>
              <button className="dma-icon-btn" title="Settings" onClick={() => showToast('Settings coming soon', 'info')}>⚙️</button>
              <Link href="/documind">
                <button className="dma-icon-btn" title="Back to landing">👤</button>
              </Link>
            </div>
          </div>

          {/* ── UPLOAD VIEW ── */}
          {view === 'upload' && (
            <div className="dma-upload-view">
              <div
                className={`dma-upload-zone ${dragOver ? 'dragover' : ''}`}
                onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={e => {
                  e.preventDefault(); setDragOver(false);
                  const file = e.dataTransfer.files[0];
                  if (file) processFile(file);
                }}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  style={{ display: 'none' }}
                  accept=".pdf,.doc,.docx,.txt,.md,.csv"
                  onChange={e => { const f = e.target.files?.[0]; if (f) processFile(f); }}
                />
                {uploading ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                    <div className="dma-spinner" />
                    <p>Processing your document...</p>
                  </div>
                ) : (
                  <>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📄</div>
                    <h3>Drop your document here</h3>
                    <p>or click to browse your files</p>
                    <div className="dma-upload-types">
                      {['PDF', 'Word', 'TXT', 'CSV', 'Markdown'].map(t => (
                        <span key={t} className="dma-type-badge">{t}</span>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {docs.length > 0 && (
                <div className="dma-recent">
                  <h4>Recent Documents</h4>
                  <div className="dma-recent-grid">
                    {docs.map(doc => (
                      <div key={doc.id} className="dma-recent-item" onClick={() => selectDoc(doc)}>
                        <div className="dma-recent-icon">{doc.icon}</div>
                        <div>
                          <div className="dma-recent-name">{doc.name}</div>
                          <div className="dma-recent-meta">{doc.size} · {doc.pages} pages · {doc.uploadedAt}</div>
                        </div>
                        <button className="dma-recent-open">Open →</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── CHAT VIEW ── */}
          {view === 'chat' && (
            <div className="dma-chat-view">
              {activeDoc && (
                <div className="dma-chat-doc-header">
                  <div className="dma-chat-doc-icon">{activeDoc.icon}</div>
                  <div>
                    <div className="dma-chat-doc-name">{activeDoc.name}</div>
                    <div className="dma-chat-doc-meta">{activeDoc.size} · {activeDoc.pages} pages</div>
                  </div>
                  <div className="dma-chat-tools">
                    <button className="dma-tool-btn" onClick={() => setView('summary')}>📝 Summarize</button>
                    <button className="dma-tool-btn" onClick={() => setView('quiz')}>🎯 Quiz</button>
                    <button className="dma-tool-btn" onClick={() => { setMessages([]); showToast('Chat cleared'); }}>🗑️ Clear</button>
                  </div>
                </div>
              )}
              <div className="dma-chat-messages">
                {messages.length === 0 && !activeDoc && (
                  <div className="dma-empty">
                    <div className="dma-empty-icon">💬</div>
                    <h3>Start a conversation</h3>
                    <p>Upload a document and ask anything about it</p>
                  </div>
                )}
                {messages.map(msg => (
                  <div key={msg.id} className={`dma-msg-wrap ${msg.role}`}>
                    <div className={`dma-msg-avatar ${msg.role}`}>
                      {msg.role === 'ai' ? '🧠' : '👤'}
                    </div>
                    <div>
                      {msg.role === 'user' ? (
                        <div className="dma-msg-bubble-user">{msg.content}</div>
                      ) : (
                        <div className="dma-msg-bubble-ai" dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content) }} />
                      )}
                      <div className="dma-msg-time">{msg.time}</div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="dma-msg-wrap">
                    <div className="dma-msg-avatar ai">🧠</div>
                    <div className="dma-typing">
                      <span /><span /><span />
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              <div className="dma-chat-input-area">
                <div className="dma-suggestions">
                  {['Summarize this document', 'What are the main topics?', 'Give me key takeaways', 'Explain the most complex part'].map(s => (
                    <button key={s} className="dma-suggestion" onClick={() => { setInputVal(s); }}>
                      {s}
                    </button>
                  ))}
                </div>
                <div className="dma-input-row">
                  <textarea
                    className="dma-chat-input"
                    placeholder={activeDoc ? 'Ask anything about your document...' : 'Upload a document first...'}
                    value={inputVal}
                    onChange={e => setInputVal(e.target.value)}
                    onKeyDown={handleKeyDown}
                    rows={1}
                    disabled={!activeDoc || isTyping}
                  />
                  <button
                    className="dma-send-btn"
                    onClick={sendMessage}
                    disabled={!inputVal.trim() || !activeDoc || isTyping}
                    title="Send"
                  >
                    ➤
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ── SUMMARY VIEW ── */}
          {view === 'summary' && (
            <div className="dma-summary-view">
              {activeDoc && (
                <div style={{ fontSize: 13, color: '#606080', marginBottom: 12 }}>
                  Summarizing: {activeDoc.name}
                </div>
              )}
              <div className="dma-summary-levels">
                {(['quick', 'detailed', 'full'] as SummaryLevel[]).map(level => (
                  <button
                    key={level}
                    className={`dma-level-btn ${summaryLevel === level ? 'active' : ''}`}
                    onClick={() => setSummaryLevel(level)}
                  >
                    {level === 'quick' ? 'Quick (2 lines)' : level === 'detailed' ? 'Detailed (1 page)' : 'Full breakdown'}
                  </button>
                ))}
              </div>
              <div className="dma-summary-content">
                {activeDoc ? (
                  <div dangerouslySetInnerHTML={{ __html: renderMarkdown(SUMMARY_CONTENT[summaryLevel]) }} />
                ) : (
                  <div className="dma-empty">
                    <div className="dma-empty-icon">📝</div>
                    <h3>No document selected</h3>
                    <p>Upload a document first, then generate a summary</p>
                  </div>
                )}
              </div>
              {activeDoc && (
                <div className="dma-summary-actions">
                  <button className="dma-action-btn" onClick={() => { navigator.clipboard?.writeText(SUMMARY_CONTENT[summaryLevel]); showToast('Summary copied!'); }}>
                    📋 Copy
                  </button>
                  <button className="dma-action-btn" onClick={() => showToast('Downloading summary...', 'info')}>
                    ⬇️ Download
                  </button>
                  <button className="dma-action-btn primary" onClick={() => setView('quiz')}>
                    🎯 Generate quiz from this
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ── QUIZ VIEW ── */}
          {view === 'quiz' && (
            <div className="dma-quiz-view">
              <div className="dma-quiz-header">
                <div style={{ fontSize: 13, color: '#606080' }}>
                  {activeDoc ? `Quiz for: ${activeDoc.name}` : 'Select a document to generate a quiz'}
                </div>
                <div className="dma-quiz-config">
                  <select className="dma-quiz-select" defaultValue="10 questions">
                    <option>5 questions</option>
                    <option>10 questions</option>
                    <option>15 questions</option>
                  </select>
                  <select className="dma-quiz-select" defaultValue="Multiple choice">
                    <option>Multiple choice</option>
                    <option>True / False</option>
                    <option>Mixed</option>
                  </select>
                  <button
                    className="dma-action-btn primary"
                    onClick={() => { setQuizAnswers({}); setQuizRevealed({}); showToast('Quiz generated!'); }}
                  >
                    Generate quiz
                  </button>
                </div>
              </div>

              {quizScore !== null && (
                <div className="dma-quiz-score">
                  <h3>Score: {quizScore} / {Object.keys(quizRevealed).length}</h3>
                  <p>{quizScore === MOCK_QUIZ.length ? '🎉 Perfect score!' : quizScore >= MOCK_QUIZ.length * 0.7 ? '👍 Great job!' : '📚 Keep studying!'}</p>
                </div>
              )}

              {activeDoc ? MOCK_QUIZ.map((q, qi) => (
                <div key={qi} className="dma-quiz-card">
                  <div className="dma-quiz-q-num">Question {qi + 1}</div>
                  <div className="dma-quiz-q">{q.question}</div>
                  <div className="dma-quiz-options">
                    {q.options.map((opt, oi) => {
                      let cls = 'dma-quiz-option';
                      if (quizRevealed[qi]) {
                        cls += ' revealed';
                        if (oi === q.correct) cls = 'dma-quiz-option correct';
                        else if (oi === quizAnswers[qi]) cls = 'dma-quiz-option wrong';
                      }
                      return (
                        <button key={oi} className={cls} onClick={() => answerQuiz(qi, oi)}>
                          <span style={{ fontWeight: 600, marginRight: 4 }}>{String.fromCharCode(65 + oi)}.</span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {quizRevealed[qi] && (
                    <div className="dma-quiz-explanation">
                      💡 {q.explanation}
                    </div>
                  )}
                </div>
              )) : (
                <div className="dma-empty">
                  <div className="dma-empty-icon">🎯</div>
                  <h3>No document selected</h3>
                  <p>Upload a document to generate quiz questions</p>
                </div>
              )}
            </div>
          )}

          {/* ── EXTRACT VIEW ── */}
          {view === 'extract' && (
            <div className="dma-extract-view">
              <div className="dma-extract-types">
                {[
                  { icon: '📊', name: 'Tables' },
                  { icon: '📅', name: 'Dates' },
                  { icon: '💰', name: 'Numbers' },
                  { icon: '👤', name: 'Names' },
                  { icon: '📍', name: 'Locations' },
                  { icon: '🔑', name: 'Keywords' },
                ].map(t => (
                  <div key={t.name} className="dma-extract-type">
                    <div className="dma-extract-type-icon">{t.icon}</div>
                    <div className="dma-extract-type-name">{t.name}</div>
                  </div>
                ))}
              </div>
              {activeDoc ? (
                <div className="dma-extract-result">
                  <h4 style={{ marginBottom: 16, fontSize: 14, fontWeight: 600 }}>Extracted Data</h4>
                  <table className="dma-extract-table">
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th>Value</th>
                        <th>Location</th>
                        <th>Confidence</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Date</td><td>January 15, 2025</td><td>Page 3</td><td style={{ color: '#10b981' }}>98%</td></tr>
                      <tr><td>Number</td><td>₹4,50,000</td><td>Page 7</td><td style={{ color: '#10b981' }}>96%</td></tr>
                      <tr><td>Person</td><td>Dr. Rajesh Kumar</td><td>Page 12</td><td style={{ color: '#10b981' }}>94%</td></tr>
                      <tr><td>Location</td><td>Chennai, Tamil Nadu</td><td>Page 15</td><td style={{ color: '#f59e0b' }}>87%</td></tr>
                      <tr><td>Organization</td><td>IIT Madras</td><td>Page 18</td><td style={{ color: '#10b981' }}>99%</td></tr>
                    </tbody>
                  </table>
                  <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
                    <button className="dma-action-btn" onClick={() => showToast('Exported to CSV!', 'success')}>📥 Export CSV</button>
                    <button className="dma-action-btn" onClick={() => showToast('Exported to Excel!', 'success')}>📊 Export Excel</button>
                  </div>
                </div>
              ) : (
                <div className="dma-empty">
                  <div className="dma-empty-icon">📊</div>
                  <h3>No document selected</h3>
                  <p>Upload a document to extract structured data</p>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* ── TOAST ── */}
      {toast && (
        <div className="dma-toast">
          <div className={`dma-toast-item ${toast.type}`}>
            {toast.type === 'success' ? '✅' : toast.type === 'error' ? '❌' : 'ℹ️'}
            {toast.msg}
          </div>
        </div>
      )}
    </>
  );
}
