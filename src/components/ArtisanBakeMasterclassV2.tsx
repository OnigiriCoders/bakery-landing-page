import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Check, Shield, Lock, Star, ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [{ label: 'Curriculum', href: '#curriculum' }, { label: 'Instructor', href: '#instructor' }, { label: 'Reviews', href: '#reviews' }, { label: 'Enroll', href: '#enroll' }];
const HEADER_STATS = [{ value: '2,400+', label: 'Students' }, { value: '4.9★', label: 'Rating' }, { value: '97%', label: 'Complete' }];
const TESTIMONIALS = [
  { id: 1, quote: "This masterclass completely transformed how I think about bread. Chef Elena's sourdough module alone was worth every penny.", author: 'M.T.', role: 'Home Baker', location: 'London' },
  { id: 2, quote: 'I went from nervous beginner to running my own pop-up bakery in six months. The curriculum is genuinely world-class.', author: 'R.K.', role: 'Culinary Graduate', location: 'New York' },
  { id: 3, quote: 'The fermentation session changed everything. I finally understand the science behind the craft.', author: 'S.B.', role: 'Pastry Chef', location: 'Paris' },
];
const INCLUSIONS = ['3-Day Intensive Curriculum (12 modules)', 'Access to 3 World-Class Instructors', 'Lifetime access to recorded sessions', 'Downloadable recipe and technique PDFs', 'Private student community access', 'Live Q&A session recordings', 'Official Certification of Mastery', '30-Day money-back guarantee'];
const PUBLICATIONS = ['THE NEW YORK TIMES', 'BON APPETIT', 'FOOD AND WINE', 'THE GUARDIAN', 'SAVEUR', 'EATER'];
const SectionEyebrow = ({ children, className, light = false }: { children: React.ReactNode; className?: string; light?: boolean }) => (
  <span className={cn('block uppercase tracking-[0.4em] text-[11px] font-bold mb-6', light ? 'text-white/60' : 'text-[#1B2A8B]', className)}>{children}</span>
);
const SectionHeadline = ({ children, className, light = false }: { children: React.ReactNode; className?: string; light?: boolean }) => (
  <h2 className={cn('font-black uppercase leading-[0.9] tracking-tight mb-8', light ? 'text-white' : 'text-[#1B2A8B]', className)}>{children}</h2>
);

const TopNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return (
    <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300', scrolled ? 'bg-white/97 backdrop-blur-sm border-b border-[#E8E8E8] shadow-sm' : 'bg-white border-b border-[#E8E8E8]')}>
      <div className="hidden md:flex items-center justify-center bg-[#1B2A8B] py-2 px-6 gap-10">
        {HEADER_STATS.map(stat => <div key={stat.label} className="flex items-center gap-2">
            <span className="text-white font-black text-[13px] tracking-tight">{stat.value}</span>
            <span className="text-white/50 text-[11px] uppercase tracking-widest">{stat.label}</span>
          </div>)}
        <span className="text-white/30 text-[10px] mx-2">|</span>
        <span className="text-white/70 text-[11px] uppercase tracking-widest"><span className="text-yellow-300 font-black">⚠ </span>Only 14 seats remaining in the July cohort</span>
      </div>
      <nav className="flex items-center justify-between px-6 md:px-10 h-[64px]">
        <a href="#" className="flex flex-col leading-none">
          <span className="text-[#1B2A8B] font-black uppercase text-[18px] tracking-tighter leading-none">ARTISAN BAKE</span>
          <div className="h-[2px] w-[44px] bg-[#1B2A8B] mt-[3px]" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => <a key={link.href} href={link.href} className="text-[#4A4A4A] hover:text-[#1B2A8B] font-black uppercase text-[11px] tracking-[0.2em] transition-colors">{link.label}</a>)}
        </div>
        <div className="flex items-center gap-6">
          <a href="#enroll" className="hidden md:inline-flex items-center justify-center bg-[#1B2A8B] text-white px-6 py-3 font-black uppercase tracking-widest text-[11px] transition-all hover:bg-[#1B2A8B]/90 active:scale-95">ENROLL — $497</a>
          <button className="md:hidden text-[#1B2A8B] p-1" onClick={() => setMobileOpen(v => !v)} aria-label="Toggle menu">{mobileOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </nav>
      {mobileOpen && <div className="md:hidden bg-white border-t border-[#E8E8E8] px-6 py-6 flex flex-col gap-6">
          {NAV_LINKS.map(link => <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-[#4A4A4A] hover:text-[#1B2A8B] font-black uppercase text-[13px] tracking-widest transition-colors">{link.label}</a>)}
          <a href="#enroll" onClick={() => setMobileOpen(false)} className="inline-flex items-center justify-center bg-[#1B2A8B] text-white py-4 font-black uppercase tracking-widest text-[13px]">ENROLL NOW — $497</a>
        </div>}
    </header>
  );
};

const Hero = () => (
  <section id="hero" className="relative flex flex-col md:flex-row min-h-screen overflow-hidden border-b border-[#E8E8E8] pt-[64px] md:pt-[96px]">
    <div className="w-full md:w-[55%] bg-white flex flex-col justify-center px-6 md:px-[100px] py-20">
      <SectionEyebrow>THE ART OF BREAD</SectionEyebrow>
      <h1 className="text-[#1B2A8B] font-black uppercase text-[58px] md:text-[88px] leading-[0.85] tracking-tight mb-8 max-w-[700px]">Master the Craft of <br /> Artisan Baking</h1>
      <p className="text-[#4A4A4A] text-[17px] leading-relaxed max-w-[480px] mb-12">Experience a world-class culinary journey from foundational science to the final perfect crust.</p>
      <div className="flex flex-wrap gap-6 mb-12">
        <div className="flex items-center gap-2">
          <div className="flex gap-[2px]">{[0,1,2,3,4].map(i => <Star key={i} size={13} fill="#F5A623" color="#F5A623" />)}</div>
          <span className="text-[#4A4A4A] text-[13px] font-bold">4.9 from 1,200+ reviews</span>
        </div>
        <div className="w-px h-4 bg-[#E0E0E0] self-center" />
        <span className="text-[#4A4A4A] text-[13px]"><span className="font-black text-[#1B2A8B]">2,400+</span> students enrolled</span>
      </div>
      <div><a href="#enroll" className="inline-flex items-center justify-center bg-[#1B2A8B] text-white px-10 py-5 font-black uppercase tracking-widest text-[14px] transition-all hover:bg-[#1B2A8B]/90 active:scale-95">ENROLL NOW</a></div>
    </div>
    <div className="w-full md:w-[45%] h-[400px] md:h-auto overflow-hidden">
      <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1200" alt="Artisan Bread Close-up" className="w-full h-full object-cover grayscale brightness-90" />
    </div>
  </section>
);

const MarqueeTicker = () => {
  const phrases = ['ARTISAN BREAD TECHNIQUES', 'WORLD-CLASS INSTRUCTORS', 'LIMITED COHORT SEATS', 'HANDS-ON TRAINING', 'CERTIFICATION INCLUDED', 'SOURDOUGH MASTERY', 'ENROLL NOW'];
  return (
    <div className="w-full h-[80px] bg-[#1B2A8B] flex items-center overflow-hidden border-y border-white/10">
      <motion.div className="flex whitespace-nowrap gap-12" animate={{ x: [0, -1000] }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}>
        {[0,1,2,3].map(i => <div key={i} className="flex items-center gap-12">{phrases.map((phrase, idx) => <div key={idx} className="flex items-center gap-12"><span className="text-white font-black uppercase text-[16px] tracking-widest">{phrase}</span><span className="text-white text-[10px]">◆</span></div>)}</div>)}
      </motion.div>
    </div>
  );
};

const EnrollSection = () => (
  <section id="enroll" className="w-full bg-white">
    <div className="border-b border-[#E8E8E8] px-6 md:px-[100px] py-20">
      <div className="max-w-[1240px] mx-auto">
        <SectionEyebrow>ENROLL TODAY</SectionEyebrow>
        <SectionHeadline className="text-[52px] md:text-[80px] mb-4">ONE INVESTMENT.<br />LIFETIME MASTERY.</SectionHeadline>
        <p className="text-[#4A4A4A] text-[17px] max-w-[560px]">Applications are reviewed on a rolling basis. Due to the hands-on nature of the training, each cohort is strictly limited to 50 seats.</p>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row min-h-[900px]">
      <div className="w-full lg:w-[45%] bg-[#1B2A8B] px-8 md:px-16 py-16 flex flex-col justify-between">
        <div>
          <span className="block uppercase tracking-[0.4em] text-[11px] font-bold mb-6 text-white/60">MASTERCLASS FULL ACCESS</span>
          <div className="flex items-start text-white mb-2">
            <span className="text-[32px] font-black leading-none mt-3 mr-1">$</span>
            <span className="text-[100px] md:text-[120px] font-black leading-none tracking-tighter">497</span>
          </div>
          <p className="text-white/60 text-[14px] mb-12">One-time payment. No subscription required.</p>
          <div className="border-t border-white/10 pt-10">
            <h4 className="text-white/50 font-black text-[11px] uppercase tracking-widest mb-8">WHAT IS INCLUDED</h4>
            <ul className="space-y-4">
              {INCLUSIONS.map(item => <li key={item} className="flex items-start gap-4">
                  <div className="mt-[3px] w-5 h-5 flex-shrink-0 bg-white/10 flex items-center justify-center rounded-full"><Check size={11} className="text-white" strokeWidth={3} /></div>
                  <span className="text-white/80 text-[15px]">{item}</span>
                </li>)}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-10 border-t border-white/10 flex flex-wrap gap-6">
          <div className="flex items-center gap-2"><Shield size={16} className="text-white/40" /><span className="text-white/50 text-[11px] uppercase tracking-widest">30-Day Guarantee</span></div>
          <div className="flex items-center gap-2"><Lock size={16} className="text-white/40" /><span className="text-white/50 text-[11px] uppercase tracking-widest">Secure Checkout</span></div>
        </div>
      </div>
      <div className="w-full lg:w-[55%] bg-white px-8 md:px-16 py-16 border-l border-[#E8E8E8]">
        <span className="block uppercase tracking-[0.4em] text-[11px] font-bold mb-8 text-[#1B2A8B]">JOIN THE COHORT</span>
        <form className="space-y-10" onSubmit={e => e.preventDefault()}>
          {[{ id: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' }, { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' }].map(f => (
            <div key={f.id} className="group">
              <label className="block text-[#4A4A4A] font-black text-[11px] uppercase tracking-[0.3em] mb-3 transition-colors group-focus-within:text-[#1B2A8B]">{f.label}</label>
              <input type={f.type} placeholder={f.placeholder} className="w-full bg-transparent border-b border-[#D0D0D0] py-3 focus:outline-none focus:border-[#1B2A8B] text-[17px] transition-all placeholder:text-[#D0D0D0]" />
            </div>
          ))}
          <div className="group">
            <label className="block text-[#4A4A4A] font-black text-[11px] uppercase tracking-[0.3em] mb-3">Experience Level</label>
            <div className="relative">
              <select className="w-full bg-transparent border-b border-[#D0D0D0] py-3 focus:outline-none focus:border-[#1B2A8B] text-[17px] appearance-none transition-all cursor-pointer">
                <option value="">Select your level</option>
                {['Beginner', 'Home Baker', 'Culinary Student', 'Professional Baker'].map(o => <option key={o}>{o}</option>)}
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-[#AAAAAA] pointer-events-none" size={18} />
            </div>
          </div>
          <div className="group">
            <label className="block text-[#4A4A4A] font-black text-[11px] uppercase tracking-[0.3em] mb-3">Additional Notes</label>
            <textarea rows={4} placeholder="Tell us about your baking goals" className="w-full bg-transparent border-b border-[#D0D0D0] py-3 focus:outline-none focus:border-[#1B2A8B] text-[17px] transition-all resize-none placeholder:text-[#D0D0D0]" />
          </div>
          <div className="pt-6 space-y-6">
            <button type="submit" className="w-full bg-[#1B2A8B] text-white py-5 px-10 font-black uppercase tracking-[0.2em] text-[15px] transition-all hover:bg-[#1B2A8B]/90 active:scale-[0.99] cursor-pointer">ENROLL NOW — $497</button>
            <p className="text-center text-[#AAAAAA] text-[11px] leading-relaxed max-w-[420px] mx-auto">By submitting, you agree to our Terms of Service and Privacy Policy. We will contact you within 48 hours regarding your application status.</p>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export const ArtisanBakeMasterclassV2 = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="w-full bg-white text-[#4A4A4A] selection:bg-[#1B2A8B] selection:text-white font-sans overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-[#1B2A8B] origin-left z-[200]" style={{ scaleX: useSpring(scrollYProgress, { stiffness: 100, damping: 30 }) }} />
      <TopNav />
      <Hero />
      <MarqueeTicker />
      <section className="w-full py-14 bg-white flex flex-col items-center justify-center border-b border-[#E8E8E8]">
        <SectionEyebrow className="mb-8 text-center !tracking-[0.6em] !text-[#AAAAAA]">AS FEATURED IN</SectionEyebrow>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 px-6">
          {PUBLICATIONS.map(pub => <span key={pub} className="text-[#CCCCCC] hover:text-[#333] transition-colors font-black uppercase text-[16px] md:text-[20px] tracking-tight cursor-default">{pub}</span>)}
        </div>
      </section>
      <section id="reviews" className="w-full bg-[#F7F7F9] py-28 px-6">
        <div className="max-w-[1240px] mx-auto text-center mb-16">
          <SectionEyebrow>TESTIMONIALS</SectionEyebrow>
          <SectionHeadline className="text-[48px] md:text-[60px]">WHAT OUR STUDENTS SAY</SectionHeadline>
        </div>
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(t => <div key={t.id} className="bg-white border border-[#E8E8E8] p-10 flex flex-col justify-between hover:shadow-xl transition-all duration-500">
              <div>
                <div className="flex gap-1 mb-7">{[0,1,2,3,4].map(i => <Star key={i} size={16} fill="#F5A623" color="#F5A623" />)}</div>
                <p className="text-[#4A4A4A] text-[17px] leading-relaxed italic mb-10">"{t.quote}"</p>
              </div>
              <div className="pt-7 border-t border-[#E8E8E8] flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#1B2A8B] flex items-center justify-center text-white font-black text-[13px] shrink-0">{t.author}</div>
                <div className="flex flex-col">
                  <span className="text-[#1B2A8B] font-black text-[13px] uppercase tracking-wider">{t.role}</span>
                  <span className="text-[#AAAAAA] text-[11px] uppercase tracking-widest">{t.location}</span>
                </div>
              </div>
            </div>)}
        </div>
      </section>
      <EnrollSection />
      <footer className="w-full bg-[#1B2A8B] py-16 px-6 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-white font-black uppercase text-[22px] tracking-tighter leading-none">ARTISAN BAKE</span>
            <span className="text-white/40 text-[10px] uppercase tracking-[0.5em] mt-2">EST. 2024</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Contact Us'].map(l => <a key={l} href="#" className="text-white/60 hover:text-white font-black uppercase text-[10px] tracking-widest transition-colors">{l}</a>)}
          </div>
          <div className="text-white/40 text-[10px] uppercase tracking-widest">© 2024 Artisan Bake Masterclass. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
};
