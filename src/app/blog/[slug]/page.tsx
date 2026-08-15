import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

// Mock database for now. In a real app, this would be fetched from MDX files or a CMS.
const POSTS: Record<string, any> = {
  'happy-independence-day-2026': {
    title: 'Happy 80th Independence Day: Innovate, Automate & Elevate for India 🇮🇳',
    date: 'Aug 15, 2026',
    category: 'Announcements',
    readTime: '3 min read',
    heroImage: null,
    content: `
      <div style="background: linear-gradient(135deg, rgba(255,153,51,0.12), rgba(255,255,255,0.05), rgba(19,136,8,0.12)); border: 1px solid rgba(255,153,51,0.35); border-radius: 16px; padding: 28px; margin-bottom: 36px; text-align: center; backdrop-filter: blur(10px);">
        <span style="font-size: 24px; display: inline-block; margin-bottom: 10px; font-family: 'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', sans-serif;">🇮🇳 &nbsp; 15TH AUGUST &nbsp; 🇮🇳</span>
        <h2 style="margin: 0 0 14px; color: #FF9933; font-weight: 800; font-family: 'Syne', sans-serif; letter-spacing: 1.5px; text-transform: uppercase;">INNOVATE • AUTOMATE • ELEVATE</h2>
        <p style="font-size: 19px; line-height: 1.6; margin: 0; color: var(--text); font-weight: 500;">
          &ldquo;Celebrating the freedom that inspires innovation, fuels creativity, and empowers us to build a smarter, stronger, and better India.&rdquo;
        </p>
      </div>

      <div style="width: 100%; border-radius: 16px; overflow: hidden; margin: 32px 0; border: 1px solid rgba(255, 153, 51, 0.3); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 153, 51, 0.15);">
        <img src="/images/independence-day-2026.png" alt="Happy 80th Independence Day Moh-AI Tech Poster" style="width: 100%; height: auto; display: block; object-fit: contain;" />
      </div>

      <h2 style="margin-top: 40px;">Proud to be Indian. Proud to Build for India.</h2>
      <p>On this <strong>80th Independence Day</strong>, the team at <strong>Moh-AI Tech (Mastering Outstanding Horizons)</strong> re-dedicates itself to advancing technology, sovereignty, and self-reliance in artificial intelligence and automation.</p>

      <p>From enterprise AI agents to industrial computer vision systems, we are committed to building world-class technology right here in Namakkal, Tamil Nadu, India — serving businesses across the nation and empowering local innovation worldwide.</p>

      <h2>Our Core Pillars of Innovation</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin: 28px 0;">
        <div style="background: var(--card-bg); border: 1px solid var(--border); border-radius: 12px; padding: 20px;">
          <div style="font-size: 28px; margin-bottom: 8px;">🧠</div>
          <strong style="color: #FF9933; font-size: 15px;">AI SOLUTIONS</strong>
          <p style="font-size: 14px; color: var(--text-muted); margin-top: 8px; line-height: 1.5;">Intelligent solutions for a smarter future.</p>
        </div>
        <div style="background: var(--card-bg); border: 1px solid var(--border); border-radius: 12px; padding: 20px;">
          <div style="font-size: 28px; margin-bottom: 8px;">⚙️</div>
          <strong style="color: #60a5fa; font-size: 15px;">AUTOMATION</strong>
          <p style="font-size: 14px; color: var(--text-muted); margin-top: 8px; line-height: 1.5;">Streamline processes and boost productivity.</p>
        </div>
        <div style="background: var(--card-bg); border: 1px solid var(--border); border-radius: 12px; padding: 20px;">
          <div style="font-size: 28px; margin-bottom: 8px;">💻</div>
          <strong style="color: #c084fc; font-size: 15px;">CUSTOM SOFTWARE</strong>
          <p style="font-size: 14px; color: var(--text-muted); margin-top: 8px; line-height: 1.5;">Built to solve your unique challenges.</p>
        </div>
        <div style="background: var(--card-bg); border: 1px solid var(--border); border-radius: 12px; padding: 20px;">
          <div style="font-size: 28px; margin-bottom: 8px;">☁️</div>
          <strong style="color: #4ade80; font-size: 15px;">SAAS PRODUCTS</strong>
          <p style="font-size: 14px; color: var(--text-muted); margin-top: 8px; line-height: 1.5;">Powerful products that drive real impact.</p>
        </div>
        <div style="background: var(--card-bg); border: 1px solid var(--border); border-radius: 12px; padding: 20px;">
          <div style="font-size: 28px; margin-bottom: 8px;">🤝</div>
          <strong style="color: #facc15; font-size: 15px;">TECH CONSULTING</strong>
          <p style="font-size: 14px; color: var(--text-muted); margin-top: 8px; line-height: 1.5;">Strategy. Innovation. Growth.</p>
        </div>
      </div>

      <blockquote style="border-left: 4px solid #FF9933; padding: 20px 24px; margin: 36px 0; background: var(--card-bg); border-radius: 0 12px 12px 0; font-size: 20px; font-weight: 600; line-height: 1.6;">
        &ldquo;Let's continue to innovate for a stronger, smarter &amp; self-reliant India. JAI HIND! <span style="font-family: 'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', sans-serif;">🇮🇳</span>&rdquo;
      </blockquote>
    `
  },
  'spinguard-v01-ai-vibration-monitoring': {
    title: 'SpinGuard V0.1: AI-Powered Vibration Monitoring for Industrial Spinning Machines',
    date: 'Aug 08, 2026',
    category: 'Industrial AI',
    readTime: '9 min read',
    heroImage: '/images/blog/spinguard-hero.webp',
    content: `
      <p>Modern spinning mills depend on rotating machinery running continuously and reliably. Bearings are among the most critical components — and abnormal vibration is often the first sign that something needs attention. The problem is that most maintenance teams have no way to detect this change before it becomes a breakdown.</p>
      <p><strong>MOH-AI SpinGuard V0.1</strong> is our first step toward changing that — an AI-assisted vibration analysis platform built to help maintenance teams detect abnormal bearing vibration, investigate fault patterns, and establish machine-specific baselines.</p>
      <p>Rather than claiming to predict exact failure times, SpinGuard focuses on a more honest and practical question:</p>
      <blockquote style="border-left: 3px solid var(--accent); padding: 16px 24px; margin: 32px 0; background: var(--card-bg); border-radius: 0 8px 8px 0; font-style: italic; font-size: 20px;">"Is this machine behaving differently from its normal operating condition?"</blockquote>

      <h2>From Laboratory Data to Industrial Validation</h2>
      <p>SpinGuard V0.1 was developed and evaluated using the <strong>HUST Bearing Dataset</strong> — a publicly available benchmark containing 99 recordings across multiple bearing types, loads, and fault conditions.</p>
      <img src="/images/blog/spinguard-testbench.webp" alt="Industrial spinning machine showing accelerometer and bearing housing placement" style="width:100%; border-radius: 10px; margin: 24px 0; border: 1px solid var(--border);" />
      <p style="text-align:center; font-size:13px; color: var(--text-muted); margin-top:-16px; margin-bottom:24px;">A typical setup: accelerometer mounted at the bearing housing to capture vibration signals.</p>
      <p>The laboratory pipeline processes high-frequency vibration signals through a structured sequence:</p>
      <div style="background: var(--card-bg); border: 1px solid var(--border); border-radius: 10px; padding: 24px; margin: 24px 0; font-family: 'Space Grotesk', monospace; font-size: 14px; line-height: 2; text-align: center;">
        Raw Vibration → Segmentation → Feature Extraction → Anomaly Detection → Fault Analysis → Maintenance Insight
      </div>
      <p>The system extracts both statistical and frequency-domain characteristics from each vibration segment:</p>
      <ul>
        <li><strong>RMS vibration, Kurtosis, Peak & Crest factor</strong> — statistical time-domain indicators</li>
        <li><strong>Spectral centroid, bandwidth & total energy</strong> — frequency composition of the signal</li>
        <li><strong>BPFI, BPFO, BSF, FTF</strong> — bearing defect frequency indicators tied to geometry</li>
      </ul>

      <h2>What the Model Validation Actually Showed</h2>
      <p>During development, we evaluated both binary anomaly detection and multi-class fault diagnosis. The results revealed an important engineering insight that shaped the entire product philosophy.</p>
      <img src="/images/blog/spinguard-defects.webp" alt="Vibration frequency analysis dashboard showing multi-axis data" style="width:100%; border-radius: 10px; margin: 24px 0; border: 1px solid var(--border);" />
      <p style="text-align:center; font-size:13px; color: var(--text-muted); margin-top:-16px; margin-bottom:24px;">Vibration analysis across multiple axes (X, Y, Z) showing FFT frequency data at ~1497 RPM.</p>
      <p><strong>Detecting "normal vs abnormal" vibration is substantially more transferable than identifying the exact fault type on an unseen bearing design.</strong></p>
      <p>Our cross-bearing validation showed:</p>
      <ul>
        <li>The simple RMS-based anomaly detector achieved a <strong>99.1% Macro F1</strong> across previously unseen bearing sizes in the HUST benchmark.</li>
        <li>The multi-class XGBoost fault classifier achieved approximately <strong>41% Macro F1</strong> when asked to identify specific fault types on completely unseen bearing models.</li>
      </ul>
      <p>Instead of hiding this limitation, we incorporated it into the product architecture. When SpinGuard encounters an unsupported bearing, it does not invent a fault classification. It reports:</p>
      <blockquote style="border-left: 3px solid #f59e0b; padding: 16px 24px; margin: 32px 0; background: var(--card-bg); border-radius: 0 8px 8px 0; font-style: italic;">"Abnormal vibration detected — specific fault not confirmed."</blockquote>
      <p>This makes SpinGuard far more suitable for responsible industrial deployment than black-box solutions that confidently report fake fault types.</p>

      <h2>Machine-Specific Baseline Calibration</h2>
      <p>Laboratory datasets are useful for developing algorithms, but real factories introduce additional variables: machine-to-machine differences, sensor mounting, speed variations, load changes, structural vibration, and ambient industrial noise.</p>
      <p>Therefore, SpinGuard V0.1 includes a <strong>Machine-Specific Baseline Calibration System</strong>. Instead of assuming every machine has the same vibration level, SpinGuard learns what <em>normal</em> looks like for each individual machine.</p>
      <div style="background: var(--card-bg); border: 1px solid var(--border); border-radius: 10px; padding: 24px; margin: 24px 0;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 16px; text-align: center;">
          <div><div style="font-size: 28px;">📦</div><strong>Collect</strong><p style="font-size:13px; color:var(--text-muted);">Normal recordings during stable operation</p></div>
          <div><div style="font-size: 28px;">📊</div><strong>Build</strong><p style="font-size:13px; color:var(--text-muted);">Calculate statistical distribution of normal</p></div>
          <div><div style="font-size: 28px;">⚙️</div><strong>Calibrate</strong><p style="font-size:13px; color:var(--text-muted);">Set thresholds from baseline deviation</p></div>
          <div><div style="font-size: 28px;">📡</div><strong>Monitor</strong><p style="font-size:13px; color:var(--text-muted);">Compare new readings to baseline</p></div>
          <div><div style="font-size: 28px;">🚨</div><strong>Detect</strong><p style="font-size:13px; color:var(--text-muted);">Flag significant deviations as elevated risk</p></div>
        </div>
      </div>

      <h2>Risk Levels: Plain Language for Maintenance Teams</h2>
      <p>SpinGuard classifies each measurement into one of three operational states using Z-score statistical comparison against the established baseline:</p>
      <div style="display: grid; gap: 16px; margin: 24px 0;">
        <div style="background: var(--card-bg); border: 1px solid #22c55e; border-radius: 8px; padding: 16px; display: flex; gap: 16px; align-items: center;"><span style="font-size: 24px;">🟢</span><div><strong>LOW</strong><p style="margin:0; color:var(--text-muted); font-size:14px;">No significant deviation detected from the calibrated baseline.</p></div></div>
        <div style="background: var(--card-bg); border: 1px solid #f97316; border-radius: 8px; padding: 16px; display: flex; gap: 16px; align-items: center;"><span style="font-size: 24px;">🟠</span><div><strong>ELEVATED</strong><p style="margin:0; color:var(--text-muted); font-size:14px;">One or more vibration indicators have significantly deviated from the baseline. Inspection recommended.</p></div></div>
        <div style="background: var(--card-bg); border: 1px solid var(--border); border-radius: 8px; padding: 16px; display: flex; gap: 16px; align-items: center;"><span style="font-size: 24px;">⚪</span><div><strong>UNKNOWN</strong><p style="margin:0; color:var(--text-muted); font-size:14px;">A reliable baseline has not yet been established. SpinGuard will not present false certainty.</p></div></div>
      </div>

      <h2>The SpinGuard Architecture</h2>
      <p>At the engineering level, SpinGuard combines a modular, production-ready stack:</p>
      <div style="background: var(--card-bg); border: 1px solid var(--border); border-radius: 10px; padding: 24px; margin: 24px 0; font-family: 'Space Grotesk', monospace; font-size: 14px; line-height: 2.2; text-align: center;">
        Signal Processing → Feature Extraction → Statistical Anomaly Detection → Machine-Specific Baseline → AI Fault Classification → Diagnostic Evidence → Maintenance Recommendation
      </div>
      <p>The system supports <strong>MAT, CSV, and Excel (.xlsx/.xls)</strong> data formats, making it compatible with most industrial data acquisition systems immediately. Users can configure the vibration column, sampling frequency, and RPM — and SpinGuard dynamically calculates shaft frequency to adapt to different machine operating speeds.</p>

      <h2>Designed With Scientific Honesty</h2>
      <p>One of the core principles behind SpinGuard is simple: <strong>if the model does not have enough evidence, it should say so.</strong></p>
      <p>SpinGuard V0.1 does <strong>not</strong> claim exact bearing remaining life, "failure in 24–72 hours," guaranteed downtime reduction, or universal diagnosis across every bearing. It separates anomaly detection from fault diagnosis and explicitly identifies unsupported conditions.</p>
      <p>The objective is to <strong>assist maintenance teams</strong>, not replace engineering judgment.</p>

      <h2>What Comes Next?</h2>
      <p>The next stage is no longer about benchmark scores. It is about <strong>real-world validation</strong> with real spinning machine data from industrial environments. The pilot process will answer the questions that laboratory datasets cannot: how stable is the baseline over time? How does machine load affect vibration? Which fault patterns can be reliably diagnosed across different machines?</p>
      <p>MOH-AI Tech is actively seeking <strong>textile mill and industrial equipment partners</strong> who want to participate in the SpinGuard industrial pilot program. If your facility has spinning machines and an interest in data-driven maintenance, we would love to talk.</p>
    `
  },
  'building-hr-agent-resume-screening': {
    title: 'How We Built an HR Agent that Screens 500 Resumes in 4 Minutes',
    date: 'Jul 15, 2026',
    category: 'Engineering',
    readTime: '6 min read',
    content: `
      <h2>The Problem with Modern Hiring</h2>
      <p>Most HR departments spend up to 30 hours a week just reading through unqualified resumes. Traditional ATS (Applicant Tracking Systems) rely on simple keyword matching, meaning highly qualified candidates are often rejected just because they didn't use the exact synonym the ATS was looking for.</p>
      <p>We wanted to build an AI agent that didn't just look for keywords, but actually understood the semantic meaning of a candidate's experience.</p>
      
      <h2>Our Architecture: RAG + TF-IDF</h2>
      <p>To achieve 98% accuracy and eliminate hallucination, we couldn't just throw resumes into a standard LLM. We needed a deterministic scoring pipeline.</p>
      <ul>
        <li><strong>OCR Pipeline:</strong> First, we built a robust OCR pipeline using AWS Textract to normalize messy PDFs into structured JSON.</li>
        <li><strong>TF-IDF Baseline:</strong> We use Term Frequency-Inverse Document Frequency (TF-IDF) as a fast, baseline filter to remove resumes that completely lack domain relevance.</li>
        <li><strong>Semantic Scoring:</strong> For the remaining resumes, we use OpenAI's embeddings to calculate semantic similarity against the Job Description.</li>
        <li><strong>LLM Summarization:</strong> Finally, an LLM generates a 3-bullet-point summary explaining exactly *why* a candidate is a good fit, saving the recruiter from reading the full document.</li>
      </ul>

      <h2>The Results</h2>
      <p>In our initial benchmarks, the pipeline processed a batch of 500 resumes in exactly 4 minutes. It successfully identified the top 10 candidates with a 98% alignment to human recruiter selections.</p>
      <p>This isn't just a time-saver; it's a competitive advantage for any company trying to hire top talent before their competitors do.</p>
    `
  },
  'why-msmes-need-custom-ai': {
    title: 'Why MSMEs Should Stop Buying SaaS and Start Owning AI',
    date: 'Jul 02, 2026',
    category: 'Strategy',
    readTime: '4 min read',
    content: `
      <h2>The SaaS Trap</h2>
      <p>For the last decade, the playbook for mid-market companies was to buy a SaaS product for every problem. Need CRM? Salesforce. Need HR? Workday. Need project management? Asana.</p>
      <p>But with the rise of AI, SaaS companies are charging massive premiums for "AI features" that are essentially just wrappers around OpenAI's API.</p>
      
      <h2>The Custom Data Advantage</h2>
      <p>Your company's most valuable asset is its historical data. If you upload all that data into a SaaS vendor's platform, you are training their AI, not yours.</p>
      <p>By building custom AI agents tailored to your specific workflows, you retain ownership of your data, avoid expensive per-seat licensing fees, and create a proprietary system that your competitors cannot easily copy.</p>
    `
  }
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = POSTS[params.slug];
  if (!post) return {};
  const cleanDescription = post.content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, 160) + '...';
  const ogImage = post.heroImage
    ? `https://moh-ai-tech.com${post.heroImage}`
    : 'https://moh-ai-tech.com/images/blog/spinguard-hero.webp';
  return {
    title: `${post.title} | Moh-AI Tech Blog`,
    description: cleanDescription,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      title: `${post.title} | Moh-AI Tech Blog`,
      description: cleanDescription,
      url: `https://moh-ai-tech.com/blog/${params.slug}`,
      siteName: 'Moh-AI Tech',
      type: 'article',
      locale: 'en_US',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Moh-AI Tech Blog`,
      description: cleanDescription,
      images: [ogImage],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <section style={{ padding: '120px 0 60px', background: 'var(--bg)' }}>
        <div className="inner" style={{ maxWidth: '800px' }}>
          <Link href="/blog" style={{ color: 'var(--accent)', textDecoration: 'none', display: 'inline-block', marginBottom: '32px', fontFamily: 'Space Grotesk' }}>
            ← Back to Blog
          </Link>
          
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px', fontSize: '14px', color: 'var(--text-muted)', fontFamily: 'Space Grotesk' }}>
            <span style={{ background: 'var(--border)', padding: '4px 12px', borderRadius: '4px', color: 'var(--text)' }}>
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          
          <h1 className="h1" style={{ marginBottom: '32px', fontSize: '40px', lineHeight: '1.2' }}>{post.title}</h1>
          
          {post.heroImage && (
            <div style={{ width: '100%', height: '400px', position: 'relative', borderRadius: '12px', overflow: 'hidden', marginBottom: '48px', border: '1px solid var(--border)' }}>
              <Image src={post.heroImage} alt={post.title} fill style={{ objectFit: 'cover' }} priority />
            </div>
          )}
          
          {/* Article Content */}
          <div 
            className="article-content"
            style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text)' }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* CTA Section at bottom of article */}
          <div style={{ marginTop: '80px', padding: '40px', background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '12px', textAlign: 'center' }}>
            <h3 className="h3" style={{ marginBottom: '16px' }}>Want to build something similar?</h3>
            <p className="p" style={{ marginBottom: '24px' }}>Let's discuss how we can engineer a custom AI solution for your business.</p>
            <Link href="/#contact" className="btn btn-primary" style={{ display: 'inline-block' }}>Book a Discovery Call</Link>
          </div>
        </div>
      </section>

      {/* Basic styles for the injected HTML content */}
      <style dangerouslySetInnerHTML={{__html: `
        .article-content h2 { font-size: 28px; font-weight: 700; margin: 48px 0 24px; font-family: 'Syne', sans-serif; }
        .article-content h3 { font-size: 22px; font-weight: 600; margin: 32px 0 16px; }
        .article-content p { margin-bottom: 24px; color: var(--text-muted); }
        .article-content ul { margin-bottom: 24px; padding-left: 24px; }
        .article-content li { margin-bottom: 12px; color: var(--text-muted); }
        .article-content strong { color: var(--text); }
        .article-content blockquote { font-size: 18px; }
        .article-content img { max-width: 100%; }
      `}} />
    </>
  );
}
