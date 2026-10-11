'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/layout/footer';
import { 
  Calculator, 
  Factory, 
  FileCheck, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Sparkles,
  Zap,
  HelpCircle,
  Coins
} from 'lucide-react';

export default function EnterpriseRoiCalculatorPage() {
  const [activeTab, setActiveTab] = useState<'industrial' | 'taxflow'>('industrial');

  // Industrial Calculator State
  const [partsPerHour, setPartsPerHour] = useState<number>(450);
  const [shiftsPerDay, setShiftsPerDay] = useState<number>(2);
  const [hoursPerShift, setHoursPerShift] = useState<number>(8);
  const [workingDays, setWorkingDays] = useState<number>(26);
  const [defectRate, setDefectRate] = useState<number>(3.2); // 3.2%
  const [scrapCostPerPart, setScrapCostPerPart] = useState<number>(450); // ₹450 per component
  const [inspectorsPerShift, setInspectorsPerShift] = useState<number>(2);

  // Industrial Computed Metrics
  const monthlyPartsProduced = partsPerHour * (shiftsPerDay * hoursPerShift) * workingDays;
  const monthlyDefectiveParts = Math.round(monthlyPartsProduced * (defectRate / 100));
  const currentMonthlyScrapLoss = monthlyDefectiveParts * scrapCostPerPart;
  const currentAnnualScrapLoss = currentMonthlyScrapLoss * 12;

  // VisionInspect cuts defect escape by 95% and prevents early-stage machining of flawed castings
  const monthlySavingsWithAI = Math.round(currentMonthlyScrapLoss * 0.88);
  const annualSavingsWithAI = monthlySavingsWithAI * 12;
  const annualInspectionHoursSaved = (shiftsPerDay * hoursPerShift * workingDays * 12) * inspectorsPerShift;
  const estimatedPaybackMonths = (650000 / (monthlySavingsWithAI || 1)).toFixed(1); // Assuming avg edge hardware & deployment bundle

  // TaxFlow Calculator State
  const [monthlyInvoices, setMonthlyInvoices] = useState<number>(650);
  const [monthlyItcClaimed, setMonthlyItcClaimed] = useState<number>(2500000); // ₹25 Lakhs
  const [accountsTeamSize, setAccountsTeamSize] = useState<number>(3);

  // TaxFlow Computed Metrics
  // Approx 4.5% of vendor ITC is at risk of Section 16(2)(aa) mismatch or delayed GSTR-1 filings
  const annualItcAtRisk = Math.round((monthlyItcClaimed * 12) * 0.045);
  const annualSavedItc = Math.round(annualItcAtRisk * 0.92);
  const manualReconciliationHoursPerMonth = monthlyInvoices * 0.15; // 9 minutes per invoice matching
  const annualHoursAutomated = Math.round(manualReconciliationHoursPerMonth * 12);
  const annualSalaryValueGained = Math.round((annualHoursAutomated / 160) * 35000);

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-28 pb-16 text-[var(--text)]">
      <div className="inner" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 5%' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', background: 'rgba(2, 132, 199, 0.08)', border: '1px solid rgba(2, 132, 199, 0.25)', color: '#0284c7', fontSize: '13px', fontWeight: '700', marginBottom: '16px' }}>
            <Calculator size={14} />
            MOH-AI TECH · FINANCIAL IMPACT MODELER
          </div>
          <h1 style={{ fontFamily: 'var(--syne)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '800', letterSpacing: '-0.02em', margin: '0 0 12px', color: 'var(--text)' }}>
            Enterprise ROI & Savings Calculator
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '15px', maxWidth: '680px', margin: '0 auto 24px', lineHeight: 1.6 }}>
            Model your plant’s defect scrap losses or corporate tax reconciliation hours to see quantifiable payback metrics before commissioning a pilot.
          </p>

          {/* Tab Selector */}
          <div style={{ display: 'inline-flex', background: 'var(--bg2)', padding: '4px', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <button
              onClick={() => setActiveTab('industrial')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 24px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '700',
                border: 'none',
                cursor: 'pointer',
                background: activeTab === 'industrial' ? 'var(--card)' : 'transparent',
                color: activeTab === 'industrial' ? 'var(--text)' : 'var(--muted)',
                boxShadow: activeTab === 'industrial' ? 'var(--shadow)' : 'none',
                transition: 'all 0.2s'
              }}
            >
              <Factory size={16} style={{ color: activeTab === 'industrial' ? 'var(--accent)' : 'inherit' }} />
              Industrial Vision Inspection ROI
            </button>

            <button
              onClick={() => setActiveTab('taxflow')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 24px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '700',
                border: 'none',
                cursor: 'pointer',
                background: activeTab === 'taxflow' ? 'var(--card)' : 'transparent',
                color: activeTab === 'taxflow' ? 'var(--text)' : 'var(--muted)',
                boxShadow: activeTab === 'taxflow' ? 'var(--shadow)' : 'none',
                transition: 'all 0.2s'
              }}
            >
              <FileCheck size={16} style={{ color: activeTab === 'taxflow' ? '#0284c7' : 'inherit' }} />
              TaxFlow CA & GST Reconciliation ROI
            </button>
          </div>
        </div>

        {/* ================= TAB 1: INDUSTRIAL VISION INSPECTION ================= */}
        {activeTab === 'industrial' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '32px', marginBottom: '48px', alignItems: 'start' }}>
            
            {/* Input Controls */}
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ fontFamily: 'var(--syne)', fontSize: '18px', fontWeight: '800', marginBottom: '20px', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap size={18} style={{ color: 'var(--accent)' }} /> Production Line Parameters
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                {/* Parts per Hour */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px', fontWeight: '700' }}>
                    <span>Production Speed (Parts/Hour):</span>
                    <span style={{ color: 'var(--accent)', fontWeight: '800' }}>{partsPerHour} parts/hr</span>
                  </div>
                  <input 
                    type="range" 
                    min={50} 
                    max={2500} 
                    step={25} 
                    value={partsPerHour} 
                    onChange={(e) => setPartsPerHour(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--accent)' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--muted)' }}>
                    <span>50/hr</span>
                    <span>2,500/hr</span>
                  </div>
                </div>

                {/* Shifts & Hours */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: '700', color: 'var(--muted)', display: 'block', marginBottom: '6px' }}>Shifts / Day</label>
                    <select 
                      value={shiftsPerDay} 
                      onChange={(e) => setShiftsPerDay(Number(e.target.value))}
                      style={{ width: '100%', padding: '10px', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', fontWeight: '600' }}
                    >
                      <option value={1}>1 Shift (8 hrs)</option>
                      <option value={2}>2 Shifts (16 hrs)</option>
                      <option value={3}>3 Shifts (24 hrs continuous)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: '700', color: 'var(--muted)', display: 'block', marginBottom: '6px' }}>Working Days / Month</label>
                    <select 
                      value={workingDays} 
                      onChange={(e) => setWorkingDays(Number(e.target.value))}
                      style={{ width: '100%', padding: '10px', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', fontWeight: '600' }}
                    >
                      <option value={24}>24 Days (6-day week)</option>
                      <option value={26}>26 Days (standard)</option>
                      <option value={30}>30 Days (continuous line)</option>
                    </select>
                  </div>
                </div>

                {/* Defect Escape Rate */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px', fontWeight: '700' }}>
                    <span>Current Defect / Scrap Rate (%):</span>
                    <span style={{ color: '#ef4444', fontWeight: '800' }}>{defectRate.toFixed(1)}%</span>
                  </div>
                  <input 
                    type="range" 
                    min={0.5} 
                    max={10.0} 
                    step={0.1} 
                    value={defectRate} 
                    onChange={(e) => setDefectRate(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#ef4444' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--muted)' }}>
                    <span>0.5% (High Precision)</span>
                    <span>10.0% (High Scrap)</span>
                  </div>
                </div>

                {/* Cost per Scrapped Component */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px', fontWeight: '700' }}>
                    <span>Scrap / Rework Cost per Part (₹):</span>
                    <span style={{ color: 'var(--text)', fontWeight: '800' }}>₹{scrapCostPerPart}</span>
                  </div>
                  <input 
                    type="range" 
                    min={50} 
                    max={5000} 
                    step={50} 
                    value={scrapCostPerPart} 
                    onChange={(e) => setScrapCostPerPart(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--accent)' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--muted)' }}>
                    <span>₹50 (Fastener / Small Part)</span>
                    <span>₹5,000 (Machined Casting)</span>
                  </div>
                </div>

                {/* Quality Inspectors */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px', fontWeight: '700' }}>
                    <span>Visual Inspectors per Shift:</span>
                    <span style={{ color: 'var(--text)', fontWeight: '800' }}>{inspectorsPerShift} People</span>
                  </div>
                  <input 
                    type="range" 
                    min={1} 
                    max={8} 
                    step={1} 
                    value={inspectorsPerShift} 
                    onChange={(e) => setInspectorsPerShift(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--accent)' }}
                  />
                </div>

              </div>
            </div>

            {/* Computed Output Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Highlight Card */}
              <div style={{ background: 'var(--card)', border: '2px solid var(--accent)', borderRadius: '16px', padding: '32px', boxShadow: 'var(--shadow)', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', fontSize: '11px', fontWeight: '800', padding: '4px 10px', borderRadius: '9999px', letterSpacing: '0.04em' }}>
                  ✓ ESTIMATED ANNUAL RECOVERY
                </span>
                
                <div style={{ fontSize: '13px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: '700', letterSpacing: '0.04em' }}>
                  Potential Annual Scrap Savings
                </div>
                
                <div style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', fontWeight: '900', color: 'var(--text)', margin: '8px 0 16px', lineHeight: 1.1 }}>
                  ₹{(annualSavingsWithAI / 100000).toFixed(2)} Lakhs
                  <span style={{ fontSize: '15px', color: 'var(--muted)', fontWeight: '500', marginLeft: '8px' }}>/ year</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: '700' }}>Monthly Scrap Saved</div>
                    <div style={{ fontSize: '18px', fontWeight: '800', color: '#10b981', marginTop: '4px' }}>
                      ₹{(monthlySavingsWithAI / 1000).toFixed(0)}k / mo
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: '700' }}>Estimated Payback Period</div>
                    <div style={{ fontSize: '18px', fontWeight: '800', color: 'var(--accent)', marginTop: '4px' }}>
                      {Number(estimatedPaybackMonths) < 1 ? '< 1 Month' : `${estimatedPaybackMonths} Months`}
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Metrics */}
              <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>Annual Labor Hours Reallocated</div>
                  <div style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', marginTop: '4px' }}>
                    {annualInspectionHoursSaved.toLocaleString()} Hours
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>Redirect staff to higher-yield assembly</div>
                </div>

                <div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>Inspection Speed Guarantee</div>
                  <div style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', marginTop: '4px' }}>
                    &lt; 50ms / part
                  </div>
                  <div style={{ fontSize: '11px', color: '#10b981', marginTop: '2px' }}>Line-speed optical reject trigger</div>
                </div>
              </div>

              {/* Action Banner */}
              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '8px', color: 'var(--text)' }}>
                  Ready to test VisionInspect on your sample components?
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.5 }}>
                  Ship 10 parts to our Namakkal lab for a free camera feasibility report and sub-millimeter optical proof.
                </p>
                <Link
                  href="/contact?service=visioninspect"
                  style={{ background: 'var(--accent)', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  Book Free Plant Feasibility Assessment <ArrowRight size={16} />
                </Link>
              </div>

            </div>

          </div>
        )}

        {/* ================= TAB 2: TAXFLOW CA & GST RECONCILIATION ================= */}
        {activeTab === 'taxflow' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '32px', marginBottom: '48px', alignItems: 'start' }}>
            
            {/* Input Controls */}
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ fontFamily: 'var(--syne)', fontSize: '18px', fontWeight: '800', marginBottom: '20px', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Coins size={18} style={{ color: '#0284c7' }} /> CA Practice & Tax Billing Scope
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                {/* Monthly Vendor Invoices */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px', fontWeight: '700' }}>
                    <span>Monthly Vendor Invoices Processed:</span>
                    <span style={{ color: '#0284c7', fontWeight: '800' }}>{monthlyInvoices} Invoices / mo</span>
                  </div>
                  <input 
                    type="range" 
                    min={100} 
                    max={5000} 
                    step={50} 
                    value={monthlyInvoices} 
                    onChange={(e) => setMonthlyInvoices(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#0284c7' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--muted)' }}>
                    <span>100 (Small Firm)</span>
                    <span>5,000 (Corporate Enterprise)</span>
                  </div>
                </div>

                {/* Monthly ITC Claimed */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px', fontWeight: '700' }}>
                    <span>Average Monthly Input Tax Credit (ITC Claimed):</span>
                    <span style={{ color: 'var(--text)', fontWeight: '800' }}>
                      ₹{(monthlyItcClaimed / 100000).toFixed(1)} Lakhs
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min={200000} 
                    max={20000000} 
                    step={200000} 
                    value={monthlyItcClaimed} 
                    onChange={(e) => setMonthlyItcClaimed(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#0284c7' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--muted)' }}>
                    <span>₹2 Lakhs</span>
                    <span>₹2 Crores</span>
                  </div>
                </div>

                {/* Team Members */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px', fontWeight: '700' }}>
                    <span>Accounts / CA Staff handling Reconciliation:</span>
                    <span style={{ color: 'var(--text)', fontWeight: '800' }}>{accountsTeamSize} Staff Members</span>
                  </div>
                  <input 
                    type="range" 
                    min={1} 
                    max={12} 
                    step={1} 
                    value={accountsTeamSize} 
                    onChange={(e) => setAccountsTeamSize(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#0284c7' }}
                  />
                </div>

                <div style={{ padding: '16px', background: 'var(--bg2)', borderRadius: '12px', border: '1px solid var(--border)', fontSize: '13px', color: 'var(--muted)', lineHeight: 1.5 }}>
                  💡 <strong>Did you know?</strong> Under GST Section 16(2)(aa), claiming ITC for invoices not reflected in GSTR-2B triggers 18% annual interest penalties plus Section 73 show-cause notices. TaxFlow eliminates this liability automatically.
                </div>

              </div>
            </div>

            {/* Computed Output Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Highlight Card */}
              <div style={{ background: 'var(--card)', border: '2px solid #0284c7', borderRadius: '16px', padding: '32px', boxShadow: 'var(--shadow)', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(2, 132, 199, 0.1)', color: '#0284c7', fontSize: '11px', fontWeight: '800', padding: '4px 10px', borderRadius: '9999px', letterSpacing: '0.04em' }}>
                  ✓ ANNUAL TAX RECOVERY
                </span>
                
                <div style={{ fontSize: '13px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: '700', letterSpacing: '0.04em' }}>
                  ITC Protected from Disallowance
                </div>
                
                <div style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', fontWeight: '900', color: 'var(--text)', margin: '8px 0 16px', lineHeight: 1.1 }}>
                  ₹{(annualSavedItc / 100000).toFixed(2)} Lakhs
                  <span style={{ fontSize: '15px', color: 'var(--muted)', fontWeight: '500', marginLeft: '8px' }}>/ year</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: '700' }}>Reconciliation Hours Saved</div>
                    <div style={{ fontSize: '18px', fontWeight: '800', color: '#10b981', marginTop: '4px' }}>
                      {annualHoursAutomated.toLocaleString()} hrs / yr
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: '700' }}>Team Bandwidth Equivalent</div>
                    <div style={{ fontSize: '18px', fontWeight: '800', color: '#0284c7', marginTop: '4px' }}>
                      ₹{(annualSalaryValueGained / 100000).toFixed(1)} Lakhs
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Benefits */}
              <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>Tally XML Voucher Export</div>
                  <div style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', marginTop: '4px' }}>
                    100% Instant
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>Zero manual typing errors</div>
                </div>

                <div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>Client Follow-up Speed</div>
                  <div style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', marginTop: '4px' }}>
                    1-Click WhatsApp
                  </div>
                  <div style={{ fontSize: '11px', color: '#10b981', marginTop: '2px' }}>Automated vendor reminder notices</div>
                </div>
              </div>

              {/* Action Banner */}
              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '8px', color: 'var(--text)' }}>
                  Experience TaxFlow Live On Screen
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.5 }}>
                  Watch our full 3-minute screencast video showing batch invoice OCR and GSTR-2B ITC matching in real time.
                </p>
                <Link
                  href="/taxflow"
                  style={{ background: '#0284c7', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  Watch 3-Min Live Video Demo <ArrowRight size={16} />
                </Link>
              </div>

            </div>

          </div>
        )}

      </div>
      <Footer />
    </main>
  );
}
