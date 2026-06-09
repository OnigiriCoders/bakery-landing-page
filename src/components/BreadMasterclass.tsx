import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Wheat, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const BLUE = '#1B3499';

interface CurriculumRow { time: string; module: string; hydration: string; temp: string; }
interface CurriculumDay { number: string; title: string; description: string; rows: CurriculumRow[]; }

const NAV_LINKS = [{ label: 'CURRICULUM', href: '#curriculum' }, { label: 'INSTRUCTORS', href: '#instructors' }, { label: 'APPLY', href: '#apply' }];

const CURRICULUM_DATA: CurriculumDay[] = [
  { number: '01', title: 'DAY 01 — FOUNDATIONS', description: 'Mastering the elementary physics of water, flour, and salt. Understanding the microbiology of a wild yeast starter from the cellular level up.', rows: [{ time: '9:00 AM', module: 'Sourdough Starter Science', hydration: '68%', temp: '24°C' }, { time: '11:00 AM', module: 'Flour Selection & Hydration', hydration: '72%', temp: '22°C' }, { time: '2:00 PM', module: 'Fermentation Fundamentals', hydration: '75%', temp: '26°C' }, { time: '4:00 PM', module: 'Shaping & Scoring', hydration: '78%', temp: '25°C' }] },
  { number: '02', title: 'DAY 02 — ADVANCED TECHNIQUE', description: 'Pushing the limits of hydration. We explore enriched doughs, lamination, and the violent thermal dynamics of the wood-fired hearth.', rows: [{ time: '9:00 AM', module: 'Enriched Doughs & Brioche', hydration: '65%', temp: '28°C' }, { time: '11:00 AM', module: 'Laminated Pastry', hydration: '60%', temp: '18°C' }, { time: '2:00 PM', module: 'Oven Dynamics & Steam', hydration: '80%', temp: '240°C' }, { time: '4:00 PM', module: 'Crust Colour & Texture', hydration: '76%', temp: '230°C' }] },
  { number: '03', title: 'DAY 03 — MASTERY', description: 'Synthesizing knowledge into professional-grade menu development. Final critiques and the chemistry of complex flavour profiles.', rows: [{ time: '9:00 AM', module: 'Regional Bread Traditions', hydration: '74%', temp: '25°C' }, { time: '11:00 AM', module: 'Menu Development', hydration: '70%', temp: '23°C' }, { time: '2:00 PM', module: 'Live Critique & Feedback', hydration: '78%', temp: '25°C' }, { time: '4:00 PM', module: 'Final Showcase', hydration: '76%', temp: '235°C' }] },
];

export const BreadMasterclass = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-[#1B3499] selection:text-white font-sans" style={{ backgroundColor: '#F5F0E8' }}>
      <style>{`
        .bm-dot-grid { background-image: radial-gradient(circle, #1B3499 1px, transparent 1px); background-size: 28px 28px; }
        .bm-marquee { display: flex; white-space: nowrap; animation: bm-scroll 25s linear infinite; width: max-content; }
        @keyframes bm-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .bm-stamp-spin { animation: bm-spin 20s linear infinite; }
        @keyframes bm-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-20 py-5 flex items-center justify-between border-b" style={{ backgroundColor: '#F5F0E8', borderColor: '#E0D8CC' }}>
        <div className="font-black uppercase text-[18px] tracking-tighter" style={{ color: BLUE }}>THE BREAD MASTERCLASS</div>
        <div className="hidden md:flex items-center gap-16">
          {NAV_LINKS.map(link => <a key={link.label} href={link.href} className="font-mono text-[12px] tracking-[0.2em] transition-colors hover:opacity-70" style={{ color: BLUE }}>{link.label}</a>)}
        </div>
        <button className="font-black uppercase text-[12px] tracking-widest px-6 py-2.5 transition-colors text-white" style={{ backgroundColor: BLUE }} onClick={() => document.querySelector('#apply')?.scrollIntoView({ behavior: 'smooth' })}>
          APPLY FOR THE COHORT
        </button>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex pt-20">
        <div className="absolute inset-0 bm-dot-grid opacity-10 pointer-events-none" />
        <div className="w-1/2 flex flex-col justify-center pl-[60px] md:pl-[100px] z-10">
          <span className="font-mono text-[12px] tracking-[0.2em] mb-6 block" style={{ color: BLUE }}>ONCE-A-YEAR MASTERCLASS</span>
          <h1 className="font-black uppercase leading-[0.88] flex flex-col" style={{ color: BLUE, fontSize: 'clamp(60px, 9vw, 120px)' }}>
            <span>THE</span><span>BREAD</span><span>MASTER-</span><span>CLASS</span>
          </h1>
          <div className="mt-10">
            <button className="font-black uppercase text-[14px] tracking-widest px-8 py-3 transition-colors text-white" style={{ backgroundColor: BLUE }}>
              APPLY FOR 2025 COHORT →
            </button>
          </div>
        </div>

        <div className="w-1/2 relative flex items-center justify-center p-12 z-10">
          <div className="relative w-full h-full max-w-[500px] max-h-[600px]">
            <motion.div initial={{ rotate: -5, opacity: 0 }} animate={{ rotate: -3, opacity: 1 }} transition={{ delay: 0.2 }} className="absolute top-0 left-0 w-[70%] z-20 shadow-2xl border-[4px] border-white">
              <img src="https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&q=80&w=800" alt="Rustic sourdough close-up" className="w-full grayscale brightness-90" />
            </motion.div>
            <motion.div initial={{ rotate: 4, opacity: 0 }} animate={{ rotate: 2, opacity: 1 }} transition={{ delay: 0.4 }} className="absolute bottom-0 right-0 w-[65%] z-30 shadow-2xl border-[4px] border-white">
              <img src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=800" alt="Hands shaping dough" className="w-full grayscale contrast-125" />
            </motion.div>
            <motion.div initial={{ rotate: -2, opacity: 0 }} animate={{ rotate: -1.5, opacity: 1 }} transition={{ delay: 0.6 }} className="absolute top-1/4 right-0 w-[55%] z-10 shadow-2xl border-[4px] border-white">
              <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800" alt="Scored bread loaf" className="w-full grayscale" />
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 rotate-[15deg]">
              <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="w-full h-full bm-stamp-spin" viewBox="0 0 100 100">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text style={{ fontSize: '9px', fontFamily: 'monospace', fill: BLUE, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    <textPath xlinkHref="#circlePath">EST. 2018 · THE BREAD MASTERCLASS · ARTISAN · EST. 2018 ·</textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Wheat className="w-8 h-8" style={{ color: BLUE }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ticker bar */}
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden z-20 flex items-center" style={{ backgroundColor: BLUE }}>
          <div className="bm-marquee flex items-center gap-8">
            {[0, 1, 2, 3].map(i => <span key={i} className="font-mono text-white text-[14px] flex items-center gap-8">
                <span>12 SEATS</span><span className="opacity-60">///</span><span>HYDRATION MASTERY</span><span className="opacity-60">///</span><span>PRECISION FERMENTATION</span><span className="opacity-60">///</span><span>ONCE A YEAR</span><span className="opacity-60">///</span>
              </span>)}
            {[0, 1, 2, 3].map(i => <span key={`d-${i}`} className="font-mono text-white text-[14px] flex items-center gap-8">
                <span>12 SEATS</span><span className="opacity-60">///</span><span>HYDRATION MASTERY</span><span className="opacity-60">///</span><span>PRECISION FERMENTATION</span><span className="opacity-60">///</span><span>ONCE A YEAR</span><span className="opacity-60">///</span>
              </span>)}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden" style={{ backgroundColor: BLUE }}>
        <h2 className="font-black uppercase text-white leading-[0.9] flex flex-col mb-10" style={{ fontSize: 'clamp(48px, 8vw, 108px)' }}>
          <span>MOST BAKERS NEVER</span><span>TRULY MASTER IT.</span>
        </h2>
        <div className="space-y-2">
          <p className="font-mono text-white text-[16px] opacity-80 max-w-2xl">Bread is not about recipes. It is about understanding the living science beneath your hands.</p>
          <p className="font-mono text-white text-[16px] opacity-80 max-w-2xl">We teach what culinary schools overlook.</p>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="relative py-32 px-8 md:px-20">
        <div className="absolute inset-0 bm-dot-grid opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="font-black uppercase leading-[0.9] mb-2" style={{ color: BLUE, fontSize: 'clamp(48px, 6vw, 84px)' }}>TECHNICAL CURRICULUM</h2>
            <span className="font-mono block mb-6 tracking-[0.3em] text-[12px]" style={{ color: BLUE }}>/// 3-DAY IMMERSIVE BLUEPRINT</span>
            <p className="text-[#2A2A2A] text-[16px] max-w-[520px] leading-relaxed">A comprehensive deep-dive into the thermodynamics and biology of bread. We bypass superficial techniques to focus on the fundamental chemistry that dictates every loaf.</p>
          </div>
          <div className="space-y-32">
            {CURRICULUM_DATA.map(day => <div key={day.number} className="relative">
                <div className="absolute top-0 right-0 font-black text-white/30 pointer-events-none select-none -z-10 leading-none" style={{ fontSize: '280px' }}>{day.number}</div>
                <div className="max-w-4xl">
                  <h3 className="font-black uppercase mb-4" style={{ color: BLUE, fontSize: '40px' }}>{day.title}</h3>
                  <p className="text-[#2A2A2A] text-[15px] max-w-[600px] mb-12 opacity-80">{day.description}</p>
                  <div className="w-full overflow-hidden border" style={{ borderColor: '#E0D8CC' }}>
                    <div className="grid grid-cols-4 py-3 px-6 border-b" style={{ backgroundColor: '#F5F0E8', borderColor: '#E0D8CC' }}>
                      {['TIME', 'MODULE', 'HYDRATION %', 'TEMP'].map(h => <span key={h} className="font-mono font-bold text-[11px] tracking-wider" style={{ color: BLUE, textAlign: h === 'TIME' || h === 'MODULE' ? 'left' : 'center' }}>{h}</span>)}
                    </div>
                    <div className="divide-y" style={{ borderColor: '#E0D8CC' }}>
                      {day.rows.map((row, idx) => <div key={idx} className="grid grid-cols-4 px-6 py-4 items-center transition-colors" style={{ backgroundColor: idx % 2 === 0 ? 'white' : '#EDE8DC' }}>
                          <div className="text-[14px] text-[#2A2A2A] font-medium">{row.time}</div>
                          <div className="text-[14px] text-[#2A2A2A]">{row.module}</div>
                          <div className="flex justify-center"><span className="text-white text-[12px] font-mono font-bold px-3 py-1 min-w-[50px] text-center" style={{ backgroundColor: BLUE }}>{row.hydration}</span></div>
                          <div className="flex justify-center"><span className="text-white text-[12px] font-mono font-bold px-3 py-1 min-w-[55px] text-center" style={{ backgroundColor: BLUE }}>{row.temp}</span></div>
                        </div>)}
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section id="instructors" className="relative min-h-screen flex">
        <div className="w-[45%] h-full min-h-screen bg-black">
          <img src="https://images.unsplash.com/photo-1583394238182-6f3ad43267b1?auto=format&fit=crop&q=80&w=1200" alt="Chef Elena Russo" className="w-full h-full object-cover grayscale brightness-75 contrast-125" />
        </div>
        <div className="w-[55%] flex flex-col justify-center pl-12 md:pl-20 pr-16 md:pr-32 relative" style={{ backgroundColor: '#F5F0E8' }}>
          <div className="absolute inset-0 bm-dot-grid opacity-10 pointer-events-none" />
          <div className="relative z-10">
            <span className="font-mono text-[12px] tracking-[0.2em] mb-6 block" style={{ color: BLUE }}>LEAD INSTRUCTOR // CHEF IN RESIDENCE</span>
            <h2 className="font-black uppercase leading-[0.9] mb-12" style={{ color: BLUE, fontSize: 'clamp(48px, 6vw, 84px)' }}>CHEF ELENA<br />RUSSO</h2>
            <div className="space-y-6 max-w-lg mb-16">
              {["Elena Russo has spent two decades refining the ancestral art of fermentation in the foothills of Tuscany and the modern laboratories of Paris.", "Her philosophy centers on the living nature of bread—that every loaf is a negotiation between the baker, the environment, and the microbiome.", "In this masterclass, Elena moves beyond standard teaching to offer a rigorous, scientific approach to dough development and oven dynamics."].map((text, i) => <p key={i} className="text-[#2A2A2A] text-[16px] leading-relaxed pl-4 border-l-[3px]" style={{ borderColor: BLUE }}>{text}</p>)}
            </div>
            <div className="flex gap-4">
              {[{ val: '18+', label: 'YEARS ACTIVE' }, { val: '12-YR', label: 'STARTER AGE' }, { val: 'GRAND', label: 'MASTER LEVEL' }].map((stat, i) => <div key={i} className="bg-white border-[1.5px] px-6 py-6 min-w-[140px]" style={{ borderColor: BLUE }}>
                  <div className="font-black text-[40px] leading-none mb-2" style={{ color: BLUE }}>{stat.val}</div>
                  <span className="font-mono text-[11px] text-[#2A2A2A] opacity-70 tracking-tighter">{stat.label}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Application */}
      <section id="apply" className="relative py-32" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="absolute inset-0 bm-dot-grid opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-[700px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black uppercase leading-[0.9] mb-4" style={{ color: BLUE, fontSize: 'clamp(40px, 5vw, 72px)' }}>THE CRUCIBLE COHORT<br />APPLICATION</h2>
            <span className="font-mono text-[12px]" style={{ color: BLUE }}>| STRICT VALIDATION REQUIRED | // 12 SEATS REMAINING |</span>
          </div>
          <form className="space-y-8" onSubmit={e => e.preventDefault()}>
            {[{ label: 'FULL NAME', type: 'text', placeholder: 'Johnathan Arbuthnot' }, { label: 'EMAIL ADDRESS', type: 'email', placeholder: 'johnathan@bakery.com' }].map(f => <div key={f.label} className="space-y-2">
                <span className="font-mono text-[11px] text-[#555]">{f.label}</span>
                <input type={f.type} className="w-full bg-white border px-4 py-3 text-[15px] focus:outline-none transition-colors" style={{ borderColor: '#C8C0B0' }} placeholder={f.placeholder} />
              </div>)}
            <div className="space-y-2">
              <span className="font-mono text-[11px] text-[#555]">CURRENT HYDRATION COMFORT LEVEL</span>
              <select className="w-full bg-white border px-4 py-3 text-[15px] focus:outline-none transition-colors appearance-none" style={{ borderColor: '#C8C0B0' }}>
                <option>Below 70% — Beginner</option><option>70–75% — Intermediate</option><option>75–80% — Advanced</option><option>Above 80% — Expert</option>
              </select>
            </div>
            <div className="space-y-2">
              <span className="font-mono text-[11px] text-[#555]">BAKING EXPERIENCE / PORTFOLIO LINK</span>
              <textarea rows={6} className="w-full bg-white border px-4 py-3 text-[15px] focus:outline-none transition-colors resize-none" style={{ borderColor: '#C8C0B0' }} placeholder="Describe your baking background or paste a portfolio link..." />
            </div>
            <div className="pt-4">
              <button type="submit" className="w-full py-5 text-[16px] font-black uppercase tracking-widest text-white transition-colors" style={{ backgroundColor: BLUE }}>SUBMIT APPLICATION →</button>
              <div className="mt-6 text-center"><span className="font-mono text-[11px] text-gray-500 opacity-60">// Applications reviewed on a rolling basis. Limited seats. //</span></div>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 md:px-20 flex flex-col md:flex-row justify-between items-center text-white border-t border-white/10" style={{ backgroundColor: BLUE }}>
        <div className="font-black uppercase text-[15px] mb-4 md:mb-0">THE BREAD MASTERCLASS © 2025</div>
        <div className="flex gap-12">
          {['INSTAGRAM', 'TWITTER', 'JOURNAL'].map(social => <a key={social} href="#" className="font-mono text-[11px] tracking-widest hover:opacity-70 transition-opacity">{social}</a>)}
        </div>
        <div className="font-mono text-[11px] opacity-40 mt-4 md:mt-0">ALL RIGHTS RESERVED</div>
      </footer>
    </div>
  );
};
