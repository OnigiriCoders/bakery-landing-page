import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Shield, Award, Lock, Star, ChevronDown, Wheat } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Constants & Types ---

interface ComponentItem {
  id: number;
  name: string;
}
const COMPONENTS: ComponentItem[] = [{
  id: 0,
  name: 'Bakery Masterclass Hero'
}, {
  id: 1,
  name: 'Bakery Masterclass Ticker'
}, {
  id: 2,
  name: 'Bakery Masterclass Landing Page'
}, {
  id: 3,
  name: 'Bakery Masterclass Awareness'
}, {
  id: 4,
  name: 'Bakery Masterclass Testimonials'
}, {
  id: 5,
  name: 'Bakery Landing (Variant 1)'
}, {
  id: 6,
  name: 'Bakery Landing (Variant 2)'
}, {
  id: 7,
  name: 'Bread Masterclass Homepage'
}, {
  id: 8,
  name: 'Bakery Masterclass Trust'
}, {
  id: 9,
  name: 'Bakery Masterclass Curriculum'
}, {
  id: 10,
  name: 'Bakery Masterclass Pricing'
}, {
  id: 11,
  name: 'Bakery Masterclass Instructor'
}, {
  id: 12,
  name: 'Bakery Masterclass Featured On'
}, {
  id: 13,
  name: 'Bakery Masterclass Form'
}];
const TESTIMONIALS = [{
  id: 1,
  author: 'M.T.',
  role: 'Home Baker',
  location: 'London',
  quote: "This masterclass completely transformed how I think about bread. Chef Elena's sourdough module alone was worth every penny."
}, {
  id: 2,
  author: 'R.K.',
  role: 'Culinary Graduate',
  location: 'New York',
  quote: "I went from nervous beginner to running my own pop-up bakery in six months. The curriculum is genuinely world-class."
}, {
  id: 3,
  author: 'S.B.',
  role: 'Pastry Chef',
  location: 'Paris',
  quote: "The fermentation session changed everything. I finally understand the science behind the craft."
}];
const CURRICULUM_DATA = [{
  title: 'DAY 01 — FOUNDATIONS OF BREAD',
  items: [{
    module: 'Sourdough Starter Science',
    instructor: 'Chef Elena Russo',
    time: '9:00-10:30 AM'
  }, {
    module: 'Flour Selection and Hydration',
    instructor: 'Chef Marcus Webb',
    time: '11:00-12:30 PM'
  }, {
    module: 'Fermentation Fundamentals',
    instructor: 'Chef Elena Russo',
    time: '2:00-3:30 PM'
  }, {
    module: 'Shaping and Scoring',
    instructor: 'Chef James Allard',
    time: '4:00-5:00 PM'
  }]
}, {
  title: 'DAY 02 — ADVANCED TECHNIQUES',
  items: [{
    module: 'Enriched Doughs and Brioche',
    instructor: 'Chef Marcus Webb',
    time: '9:00-10:30 AM'
  }, {
    module: 'Laminated Pastry Foundations',
    instructor: 'Chef James Allard',
    time: '11:00-12:30 PM'
  }, {
    module: 'Oven Dynamics and Steam',
    instructor: 'Chef Elena Russo',
    time: '2:00-3:30 PM'
  }, {
    module: 'Crust Colour and Texture',
    instructor: 'Chef Marcus Webb',
    time: '4:00-5:00 PM'
  }]
}, {
  title: 'DAY 03 — MASTERY AND REFINEMENT',
  items: [{
    module: 'Regional Bread Traditions',
    instructor: 'Chef James Allard',
    time: '9:00-10:30 AM'
  }, {
    module: 'Menu Development',
    instructor: 'Chef Elena Russo',
    time: '11:00-12:30 PM'
  }, {
    module: 'Live Critique and Feedback',
    instructor: 'All Instructors',
    time: '2:00-4:00 PM'
  }, {
    module: 'Final Showcase and Certification',
    instructor: 'All Instructors',
    time: '4:00-5:30 PM'
  }]
}];

// --- Shared Elements ---

const SectionEyebrow = ({
  children,
  className,
  light = false
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) => <span className={cn("block uppercase tracking-[0.4em] text-[11px] font-bold mb-6", light ? "text-white/60" : "text-[#1B2A8B]", className)}>
    {children}
  </span>;
const SectionHeadline = ({
  children,
  className,
  light = false
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) => <h2 className={cn("font-black uppercase leading-[0.9] tracking-tighter mb-8", light ? "text-white" : "text-[#1B2A8B]", className)}>
    {children}
  </h2>;
const PrimaryButton = ({
  children,
  className,
  variant = 'primary'
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'white';
}) => <button className={cn("inline-flex items-center justify-center px-10 py-5 font-black uppercase tracking-widest text-[14px] transition-all active:scale-95 cursor-pointer", variant === 'primary' ? "bg-[#1B2A8B] text-white hover:bg-[#1B2A8B]/90" : "bg-white text-[#1B2A8B] hover:bg-white/90", className)}>
    {children}
  </button>;

// --- 0. BakeryHero ---
const BakeryHero = ({
  variant = 'default'
}: {
  variant?: 'default' | 'cream' | 'dark';
}) => <section className={cn("relative flex flex-col md:flex-row min-h-[calc(100vh-56px)] overflow-hidden border-b border-[#E8E8E8]", variant === 'cream' ? "bg-[#F5F0E8]" : "bg-white", variant === 'dark' ? "bg-[#0F1A5C]" : "")}>
    <div className={cn("w-full md:w-[55%] flex flex-col justify-center px-6 md:px-[100px] py-20", variant === 'dark' ? "bg-[#0F1A5C]" : "bg-transparent")}>
      <SectionEyebrow light={variant === 'dark'}>THE ART OF BREAD</SectionEyebrow>
      <h1 className={cn("font-black uppercase text-[64px] md:text-[96px] leading-[0.85] tracking-tighter mb-8 max-w-[700px]", variant === 'dark' ? "text-white" : "text-[#1B2A8B]")}>
        Master the Craft of <br /> Artisan Baking
      </h1>
      <p className={cn("text-[17px] leading-relaxed max-w-[500px] mb-12", variant === 'dark' ? "text-white/70" : "text-[#4A4A4A]")}>
        Experience a world-class culinary journey from foundational science to the final perfect crust.
      </p>
      <div>
        <PrimaryButton variant={variant === 'dark' ? 'white' : 'primary'}>ENROLL NOW</PrimaryButton>
      </div>
    </div>
    <div className="w-full md:w-[45%] h-[400px] md:h-auto relative overflow-hidden">
      <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1200" alt="Artisan Bread" className="w-full h-full object-cover grayscale brightness-90" />
    </div>
    {(variant === 'cream' || variant === 'dark') && <div className="absolute top-8 right-8 bg-[#1B2A8B] text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest z-10">
        {variant === 'cream' ? 'Variant 1' : 'Variant 2'}
      </div>}
  </section>;

// --- 1. BakeryTicker ---
const BakeryTicker = () => {
  const phrases = ['ARTISAN BREAD TECHNIQUES', 'WORLD-CLASS INSTRUCTORS', 'LIMITED COHORT SEATS', 'HANDS-ON TRAINING', 'CERTIFICATION INCLUDED', 'SOURDOUGH MASTERY', 'ENROLL NOW'];
  return <div className="w-full h-[90px] bg-[#1B2A8B] flex items-center overflow-hidden border-y border-white/10">
      <motion.div className="flex whitespace-nowrap gap-12" animate={{
      x: [0, -2000]
    }} transition={{
      duration: 30,
      repeat: Infinity,
      ease: "linear"
    }}>
        {[...Array(8)].map((_, i) => <div key={i} className="flex items-center gap-12">
            {phrases.map((phrase, idx) => <div key={idx} className="flex items-center gap-12">
                <span className="text-white font-black uppercase text-[15px] tracking-widest">{phrase}</span>
                <span className="text-white text-[10px]">◆</span>
              </div>)}
          </div>)}
      </motion.div>
    </div>;
};

// --- 12. BakeryFeaturedOn ---
const BakeryFeaturedOn = () => {
  const pubs = ['THE NEW YORK TIMES', 'BON APPETIT', 'FOOD AND WINE', 'THE GUARDIAN', 'SAVEUR', 'EATER'];
  return <section className="w-full py-16 md:h-[280px] bg-white flex flex-col items-center justify-center border-b border-[#E8E8E8]">
      <SectionEyebrow className="mb-10 text-center !tracking-[0.6em] text-[#AAAAAA]">AS FEATURED IN</SectionEyebrow>
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 px-6">
        {pubs.map(pub => <span key={pub} className="text-[#AAAAAA] hover:text-[#333] transition-colors font-black uppercase text-[18px] md:text-[22px] tracking-tight cursor-default">
            {pub}
          </span>)}
      </div>
    </section>;
};

// --- 3. BakeryAwareness ---
const BakeryAwareness = () => <section className="w-full min-h-[90vh] bg-[#1B2A8B] flex flex-col items-center justify-center text-center px-6 py-24">
    <SectionHeadline light className="text-[60px] md:text-[110px] max-w-[1000px] mb-12">
      MOST PEOPLE <br /> BAKE BREAD. <br /> FEW TRULY <br /> UNDERSTAND IT.
    </SectionHeadline>
    <div className="space-y-2 max-w-[600px] mx-auto">
      <p className="text-white/80 text-[18px] md:text-[20px] leading-relaxed font-mono">
        Our masterclass teaches you the science, craft, and intuition
      </p>
      <p className="text-white/80 text-[18px] md:text-[20px] leading-relaxed font-mono">
        behind every perfect loaf.
      </p>
    </div>
  </section>;

// --- 9. BakeryCurriculum ---
const BakeryCurriculumNav = () => <section className="w-full bg-white py-24 px-6 md:px-[100px]">
    <div className="max-w-[1240px] mx-auto">
      <div className="mb-16">
        <SectionEyebrow>THE CURRICULUM</SectionEyebrow>
        <SectionHeadline className="text-[64px] md:text-[84px] mb-4">WHAT YOU WILL LEARN</SectionHeadline>
        <p className="text-[#4A4A4A] text-[18px]">An intensive roadmap to professional-grade baking.</p>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-[#1B2A8B] text-left">
              <th className="pb-4 pt-2 uppercase text-[12px] font-black text-[#4A4A4A] tracking-widest w-[100px]">Day</th>
              <th className="pb-4 pt-2 uppercase text-[12px] font-black text-[#4A4A4A] tracking-widest">Module</th>
              <th className="pb-4 pt-2 uppercase text-[12px] font-black text-[#4A4A4A] tracking-widest">Instructor</th>
              <th className="pb-4 pt-2 uppercase text-[12px] font-black text-[#4A4A4A] tracking-widest text-right">Time</th>
            </tr>
          </thead>
          <tbody>
            {CURRICULUM_DATA.map((day, dIdx) => <React.Fragment key={day.title}>
                <tr className="bg-[#F0F2FA]">
                  <td colSpan={4} className="py-4 px-4">
                    <span className="text-[#1B2A8B] font-black uppercase text-[18px] tracking-tight">{day.title}</span>
                  </td>
                </tr>
                {day.items.map((item, iIdx) => <tr key={`${dIdx}-${iIdx}`} className="border-b border-[#E0E0E0] hover:bg-[#F9F9F9] transition-colors">
                    <td className="py-6 px-4 text-[#AAAAAA] font-medium">#{iIdx + 1}</td>
                    <td className="py-6 px-4">
                      <span className="text-[#1B2A8B] font-bold text-[18px] block mb-1">{item.module}</span>
                    </td>
                    <td className="py-6 px-4 text-[#4A4A4A] text-[16px]">{item.instructor}</td>
                    <td className="py-6 px-4 text-right font-mono text-[15px] text-[#4A4A4A] whitespace-nowrap">{item.time}</td>
                  </tr>)}
              </React.Fragment>)}
          </tbody>
        </table>
      </div>
    </div>
  </section>;

// --- 4. BakeryTestimonialsNav ---
const BakeryTestimonialsNav = () => <section className="w-full bg-white py-32 px-6">
    <div className="max-w-[1240px] mx-auto text-center mb-20">
      <SectionEyebrow className="justify-center">TESTIMONIALS</SectionEyebrow>
      <SectionHeadline className="text-[52px] md:text-[64px]">WHAT OUR STUDENTS SAY</SectionHeadline>
    </div>
    <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {TESTIMONIALS.map(t => <div key={t.id} className="bg-white border border-[#E8E8E8] p-10 flex flex-col justify-between hover:shadow-xl transition-all duration-500">
          <div>
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#F5A623" color="#F5A623" />)}
            </div>
            <p className="text-[#4A4A4A] text-[18px] leading-relaxed italic mb-10">"{t.quote}"</p>
          </div>
          <div className="pt-8 border-t border-[#E8E8E8] flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#1B2A8B] flex items-center justify-center text-white font-black text-[14px]">
              {t.author}
            </div>
            <div className="flex flex-col">
              <span className="text-[#1B2A8B] font-black text-[14px] uppercase tracking-wider">{t.role}</span>
              <span className="text-[#AAAAAA] text-[12px] uppercase tracking-widest">{t.location}</span>
            </div>
          </div>
        </div>)}
    </div>
  </section>;

// --- 11. BakeryInstructorBio ---
const BakeryInstructorBio = () => <section className="relative flex flex-col md:flex-row min-h-screen overflow-hidden bg-white">
    <div className="w-full md:w-[45%] h-[500px] md:h-auto relative overflow-hidden">
      <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800" alt="Chef Elena Russo" className="w-full h-full object-cover grayscale" />
    </div>
    <div className="w-full md:w-[55%] flex flex-col justify-center px-6 md:px-20 py-24">
      <SectionEyebrow>LEAD INSTRUCTOR</SectionEyebrow>
      <SectionHeadline className="text-[56px] md:text-[80px]">CHEF ELENA RUSSO</SectionHeadline>
      <div className="space-y-10 mb-16 max-w-[600px]">
        {["Trained at the prestigious Ferrandi Paris and having led artisanal programs across Europe, Elena Russo brings nearly two decades of deep-rooted expertise to the kitchen.", "Her philosophy centers on the marriage of ancient techniques and modern science—understanding the microscopic dance of yeast as clearly as the rhythmic motion of kneading.", "Elena's teaching style is rigorous yet intuitive, designed to move students past following recipes into a state of true culinary fluency."].map((p, i) => <p key={i} className="text-[#4A4A4A] text-[17px] leading-relaxed pl-8 border-l-4 border-[#1B2A8B]">
            {p}
          </p>)}
      </div>
      <div className="flex flex-wrap gap-4">
        {[{
        v: '18+',
        l: 'YEARS EXPERIENCE'
      }, {
        v: '12-YR',
        l: 'STARTER AGE'
      }, {
        v: 'GRAND',
        l: 'MASTER LEVEL'
      }].map((s, i) => <div key={i} className="flex-1 min-w-[140px] border-2 border-[#1B2A8B] p-6 text-center">
            <span className="block text-[#1B2A8B] font-black text-[32px] leading-none mb-2">{s.v}</span>
            <span className="block text-[#1B2A8B] font-bold text-[11px] uppercase tracking-widest">{s.l}</span>
          </div>)}
      </div>
    </div>
  </section>;

// --- 8. BakeryTrustElements ---
const BakeryTrustElements = () => {
  const stats = [{
    v: '2,400+',
    l: 'STUDENTS ENROLLED'
  }, {
    v: '97%',
    l: 'COMPLETION RATE'
  }, {
    v: '18+',
    l: 'YEARS EXPERTISE'
  }, {
    v: '4.9★',
    l: 'AVERAGE RATING'
  }];
  return <section className="w-full bg-[#F7F7F9] py-32 px-6">
      <div className="max-w-[1240px] mx-auto">
        <SectionEyebrow className="text-center mb-16">WHY STUDENTS TRUST US</SectionEyebrow>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12">
          {stats.map((s, i) => <div key={i} className={cn("px-8 text-center", i !== stats.length - 1 ? "md:border-r border-[#E0E0E0]" : "")}>
              <span className="block text-[#1B2A8B] font-black text-[48px] md:text-[64px] leading-tight mb-2 tracking-tighter">{s.v}</span>
              <span className="block text-[#4A4A4A] font-black text-[12px] uppercase tracking-widest">{s.l}</span>
            </div>)}
        </div>
        <div className="mt-24 flex flex-col md:flex-row items-center justify-center gap-12 border-t border-[#E0E0E0] pt-16">
          {[{
          i: Shield,
          l: '30-Day Money-Back Guarantee'
        }, {
          i: Award,
          l: 'Certified Curriculum'
        }, {
          i: Lock,
          l: 'Secure Checkout Process'
        }].map((item, i) => <div key={i} className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white flex items-center justify-center border border-[#E0E0E0]">
                <item.i className="text-[#1B2A8B]" size={20} />
              </div>
              <span className="text-[#4A4A4A] font-bold text-[13px] uppercase tracking-wider">{item.l}</span>
            </div>)}
        </div>
      </div>
    </section>;
};

// --- 10. BakeryPricingCard ---
const BakeryPricingCard = () => <section className="w-full bg-white py-32 px-6">
    <div className="max-w-[1240px] mx-auto flex flex-col items-center">
      <div className="text-center mb-16">
        <SectionEyebrow>INVESTMENT</SectionEyebrow>
        <SectionHeadline className="text-[48px] md:text-[64px]">ONE INVESTMENT. <br /> LIFETIME MASTERY.</SectionHeadline>
      </div>
      <div className="w-full max-w-[560px] bg-white border-[3px] border-[#1B2A8B] p-8 md:p-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center text-[#1B2A8B]">
            <span className="text-[48px] font-black align-top leading-none mr-2 mt-2">$</span>
            <span className="text-[120px] font-black leading-none tracking-tighter">497</span>
          </div>
          <p className="text-[#4A4A4A] font-bold text-[12px] uppercase tracking-widest mt-4">ONE-TIME ACCESS FEE</p>
        </div>
        <div className="border-t border-[#E8E8E8] pt-10 mb-12">
          <ul className="space-y-4">
            {["3-Day Intensive Curriculum", "Access to World-Class Instructors", "Lifetime access to recordings", "Downloadable Technique PDFs", "Private Community Access", "Live Q&A Recordings", "Official Certification", "30-Day Money-back Guarantee"].map(item => <li key={item} className="flex items-start gap-4">
                <Check size={16} className="text-[#1B2A8B] mt-1" strokeWidth={4} />
                <span className="text-[#4A4A4A] text-[15px]">{item}</span>
              </li>)}
          </ul>
        </div>
        <PrimaryButton className="w-full py-6">ENROLL NOW — $497</PrimaryButton>
      </div>
    </div>
  </section>;

// --- 13. BakeryApplicationForm ---
const BakeryApplicationForm = () => <section className="w-full bg-white py-32 px-6">
    <div className="max-w-[680px] mx-auto">
      <div className="flex flex-col mb-20 items-start">
        <span className="text-[#1B2A8B] font-black uppercase text-[14px] tracking-tight">ARTISAN BAKE STUDIO</span>
        <div className="h-[1px] w-[80px] bg-[#1B2A8B] mt-1" />
      </div>
      <SectionEyebrow>JOIN THE COHORT</SectionEyebrow>
      <SectionHeadline className="text-[52px] md:text-[72px] mb-8">APPLY FOR THE <br /> MASTERCLASS</SectionHeadline>
      <form className="space-y-12">
        {['Full Name', 'Email Address'].map(l => <div key={l} className="group">
            <label className="block text-[#4A4A4A] font-black text-[11px] uppercase tracking-[0.3em] mb-4">{l}</label>
            <input type="text" className="w-full bg-transparent border-b border-[#D0D0D0] py-4 focus:outline-none focus:border-[#1B2A8B] text-[18px] transition-all" />
          </div>)}
        <div className="group">
          <label className="block text-[#4A4A4A] font-black text-[11px] uppercase tracking-[0.3em] mb-4">Experience Level</label>
          <select className="w-full bg-transparent border-b border-[#D0D0D0] py-4 focus:outline-none focus:border-[#1B2A8B] text-[18px] appearance-none cursor-pointer">
            <option>Beginner</option>
            <option>Home Baker</option>
            <option>Culinary Student</option>
            <option>Professional</option>
          </select>
        </div>
        <div className="group">
          <label className="block text-[#4A4A4A] font-black text-[11px] uppercase tracking-[0.3em] mb-4">Additional Notes</label>
          <textarea rows={5} className="w-full bg-transparent border-b border-[#D0D0D0] py-4 focus:outline-none focus:border-[#1B2A8B] text-[18px] resize-none" />
        </div>
        <PrimaryButton className="w-full py-6">SUBMIT APPLICATION</PrimaryButton>
      </form>
    </div>
  </section>;

// --- 7. BreadMasterclassHomepage ---
const BreadMasterclassHomepage = () => {
  const [navScrolled, setNavScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="relative min-h-screen bg-[#F5F0E8] font-sans selection:bg-[#1B3499] selection:text-white">
      {/* Local Nav */}
      <nav className={cn("fixed top-[56px] left-0 right-0 z-40 transition-all px-6 md:px-20 py-5 flex items-center justify-between border-b", navScrolled ? "bg-white/90 backdrop-blur-md border-[#E0D8CC]" : "bg-[#F5F0E8] border-transparent")}>
        <div className="font-black text-[#1B3499] text-[14px] uppercase tracking-tighter">THE BREAD MASTERCLASS</div>
        <div className="hidden md:flex gap-12">
          {['CURRICULUM', 'INSTRUCTORS', 'APPLY'].map(l => <span key={l} className="font-mono text-[11px] tracking-[0.2em] cursor-pointer hover:text-[#1B3499]">{l}</span>)}
        </div>
        <button className="bg-[#1B3499] text-white font-mono text-[11px] font-bold px-6 py-2">APPLY NOW</button>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex pt-[56px]">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:pl-[100px] z-10">
          <span className="font-mono text-[#1B3499] text-[12px] tracking-[0.3em] mb-6">ONCE-A-YEAR MASTERCLASS</span>
          <h1 className="font-black text-[#1B3499] text-[80px] md:text-[120px] leading-[0.85] uppercase tracking-tighter">
            THE<br />BREAD<br />MASTER-<br />CLASS
          </h1>
          <div className="mt-10">
            <button className="bg-[#1B3499] text-white font-mono text-[14px] font-bold px-10 py-4">APPLY FOR 2025 COHORT →</button>
          </div>
        </div>
        <div className="hidden md:flex w-1/2 relative items-center justify-center p-20 z-10">
          <div className="relative w-full h-full max-w-[500px]">
             <img src="https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&q=80&w=800" className="absolute top-0 left-0 w-[70%] border-[4px] border-white shadow-2xl grayscale -rotate-3" />
             <img src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=800" className="absolute bottom-0 right-0 w-[65%] border-[4px] border-white shadow-2xl grayscale rotate-2" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-center border border-[#1B3499] z-20">
                <Wheat className="text-[#1B3499]" size={40} />
             </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-[#1B3499] h-20 overflow-hidden z-20 flex items-center">
          <motion.div className="flex gap-8 whitespace-nowrap" animate={{
          x: [0, -1000]
        }} transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}>
            {[...Array(10)].map((_, i) => <span key={i} className="text-white font-mono text-[14px] flex items-center gap-8 uppercase">
                <span>12 SEATS</span> <span className="opacity-30">///</span> <span>HYDRATION MASTERY</span> <span className="opacity-30">///</span>
              </span>)}
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="h-[80vh] bg-[#1B3499] flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-white font-black text-[60px] md:text-[100px] leading-[0.9] uppercase tracking-tighter mb-10">
          MOST BAKERS NEVER<br />TRULY MASTER IT.
        </h2>
        <p className="font-mono text-white/80 text-[16px] max-w-2xl">
          Bread is not about recipes. It is about understanding the living science beneath your hands.
        </p>
      </section>

      {/* Instructor Bio */}
      <section className="min-h-screen flex flex-col md:flex-row bg-white">
        <div className="w-full md:w-[45%] h-[500px] md:h-auto bg-black">
          <img src="https://images.unsplash.com/photo-1583394238182-6f3ad43267b1?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale brightness-75 contrast-125" />
        </div>
        <div className="w-full md:w-[55%] flex flex-col justify-center px-6 md:px-20 py-20 bg-[#F5F0E8]">
           <span className="font-mono text-[#1B3499] text-[12px] tracking-[0.3em] mb-6 block uppercase">LEAD INSTRUCTOR // CHEF IN RESIDENCE</span>
           <h2 className="font-black text-[#1B3499] text-[60px] md:text-[84px] leading-[0.9] uppercase tracking-tighter mb-12">CHEF ELENA<br />RUSSO</h2>
           <div className="space-y-6 max-w-lg mb-16">
              {["Elena Russo has spent two decades refining the ancestral art of fermentation.", "Her philosophy centers on the living nature of bread.", "She offers a rigorous, scientific approach."].map((t, i) => <p key={i} className="text-[#2A2A2A] text-[16px] leading-relaxed border-l-[3px] border-[#1B3499] pl-4">{t}</p>)}
           </div>
        </div>
      </section>
    </div>;
};

// --- Landing Page Layout Wrapper ---
const BakeryLandingPage = ({
  bg = 'white',
  heroVariant = 'default'
}: {
  bg?: string;
  heroVariant?: 'default' | 'cream' | 'dark';
}) => <div className={cn("w-full overflow-hidden", bg === 'cream' ? 'bg-[#F5F0E8]' : 'bg-white')}>
    <BakeryHero variant={heroVariant} />
    <BakeryTicker />
    <BakeryFeaturedOn />
    <BakeryAwareness />
    <BakeryCurriculumNav />
    <BakeryTestimonialsNav />
    <BakeryInstructorBio />
    <BakeryTrustElements />
    <BakeryPricingCard />
    <BakeryApplicationForm />
    <footer className="w-full bg-[#1B2A8B] py-20 px-6 border-t border-white/10 text-center md:text-left">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <span className="text-white font-black text-[24px] uppercase tracking-tighter">ARTISAN BAKE STUDIO</span>
        <div className="flex gap-12 text-white/50 font-black uppercase text-[11px] tracking-widest">
          <span>Privacy</span><span>Terms</span><span>Contact</span>
        </div>
      </div>
    </footer>
  </div>;

// --- Main App Shell ---

export const ProjectBrowser = () => {
  const [selected, setSelected] = useState<number>(2);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const renderContent = () => {
    switch (selected) {
      case 0:
        return <BakeryHero />;
      case 1:
        return <BakeryTicker />;
      case 2:
        return <BakeryLandingPage />;
      case 3:
        return <BakeryAwareness />;
      case 4:
        return <BakeryTestimonialsNav />;
      case 5:
        return <BakeryLandingPage bg="cream" heroVariant="cream" />;
      case 6:
        return <BakeryLandingPage bg="white" heroVariant="dark" />;
      case 7:
        return <BreadMasterclassHomepage />;
      case 8:
        return <BakeryTrustElements />;
      case 9:
        return <BakeryCurriculumNav />;
      case 10:
        return <BakeryPricingCard />;
      case 11:
        return <BakeryInstructorBio />;
      case 12:
        return <BakeryFeaturedOn />;
      case 13:
        return <BakeryApplicationForm />;
      default:
        return <BakeryLandingPage />;
    }
  };
  return <div className="w-full bg-white font-sans antialiased selection:bg-[#1B2A8B] selection:text-white">
      {/* Main Navbar */}
      <header className="fixed top-0 left-0 right-0 h-[56px] bg-[#0F1A5C] flex items-center justify-between px-6 z-[9999] border-b border-white/10">
        <div className="text-white font-black uppercase text-[15px] tracking-[0.08em]">
          ARTISAN BAKE STUDIO
        </div>

        <div className="relative" ref={dropdownRef}>
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-3 bg-white/10 text-white font-mono text-[12px] uppercase tracking-wider px-4 py-2 rounded-[4px] hover:bg-white/20 transition-colors">
            <span className="truncate max-w-[240px]">
              {COMPONENTS.find(c => c.id === selected)?.name}
            </span>
            <ChevronDown size={14} className={cn("transition-transform duration-300", dropdownOpen && "rotate-180")} />
          </button>

          <AnimatePresence>
            {dropdownOpen && <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: 10
          }} className="absolute top-full right-0 mt-2 w-[360px] bg-white border border-[#E0E0E0] rounded-[4px] shadow-[0_8px_32px_rgba(0,0,0,0.18)] z-[10000] max-h-[480px] overflow-hidden flex flex-col">
                <div className="p-4 border-b border-[#F0F0F0] flex items-center justify-between bg-gray-50/50">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-500">Select Component</span>
                </div>
                <div className="overflow-y-auto custom-scrollbar">
                  {COMPONENTS.map(comp => <div key={comp.id} onClick={() => {
                setSelected(comp.id);
                setDropdownOpen(false);
                window.scrollTo(0, 0);
              }} className={cn("flex items-center gap-4 px-4 py-3 cursor-pointer transition-colors group", selected === comp.id ? "bg-[#1B2A8B] text-white" : "hover:bg-[#F7F7F7] text-[#222]")}>
                      <div className={cn("w-6 h-6 flex items-center justify-center rounded-[4px] font-mono text-[10px] font-bold", selected === comp.id ? "bg-white/20 text-white" : "bg-[#F0F0F0] text-[#888]")}>
                        {String(comp.id).padStart(2, '0')}
                      </div>
                      <span className="font-mono text-[13px] tracking-tight truncate">{comp.name}</span>
                    </div>)}
                </div>
              </motion.div>}
          </AnimatePresence>
        </div>
      </header>

      {/* Content Area */}
      <main className="pt-[56px] min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div key={selected} initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.2,
          ease: "easeInOut"
        }}>
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <style dangerouslySetInnerHTML={{
      __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #aaa;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `
    }} />
    </div>;
};
