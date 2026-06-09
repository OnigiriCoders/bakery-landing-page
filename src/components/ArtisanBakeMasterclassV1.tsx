import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CurriculumItem { module: string; instructor: string; time: string; tag: string; }
interface CurriculumDay { title: string; dayLabel: string; items: CurriculumItem[]; }

const CURRICULUM: CurriculumDay[] = [
  { title: 'Foundations of Bread', dayLabel: 'DAY 01', items: [{ module: 'Sourdough Starter Science', instructor: 'Chef Elena Russo', time: '9:00–10:30 AM', tag: 'Science' }, { module: 'Flour Selection and Hydration', instructor: 'Chef Marcus Webb', time: '11:00–12:30 PM', tag: 'Technique' }, { module: 'Fermentation Fundamentals', instructor: 'Chef Elena Russo', time: '2:00–3:30 PM', tag: 'Science' }, { module: 'Shaping and Scoring', instructor: 'Chef James Allard', time: '4:00–5:00 PM', tag: 'Craft' }] },
  { title: 'Advanced Techniques', dayLabel: 'DAY 02', items: [{ module: 'Enriched Doughs and Brioche', instructor: 'Chef Marcus Webb', time: '9:00–10:30 AM', tag: 'Technique' }, { module: 'Laminated Pastry Foundations', instructor: 'Chef James Allard', time: '11:00–12:30 PM', tag: 'Craft' }, { module: 'Oven Dynamics and Steam', instructor: 'Chef Elena Russo', time: '2:00–3:30 PM', tag: 'Science' }, { module: 'Crust Colour and Texture', instructor: 'Chef Marcus Webb', time: '4:00–5:00 PM', tag: 'Craft' }] },
  { title: 'Mastery and Refinement', dayLabel: 'DAY 03', items: [{ module: 'Regional Bread Traditions', instructor: 'Chef James Allard', time: '9:00–10:30 AM', tag: 'Culture' }, { module: 'Menu Development', instructor: 'Chef Elena Russo', time: '11:00–12:30 PM', tag: 'Business' }, { module: 'Live Critique and Feedback', instructor: 'All Instructors', time: '2:00–4:00 PM', tag: 'Workshop' }, { module: 'Final Showcase and Certification', instructor: 'All Instructors', time: '4:00–5:30 PM', tag: 'Milestone' }] },
];

const TAG_COLORS: Record<string, string> = {
  Science: 'bg-[#EEF1FB] text-[#1B2A8B]',
  Technique: 'bg-[#FDF3E3] text-[#8B5E1B]',
  Craft: 'bg-[#F0F9F2] text-[#1B6B2A]',
  Culture: 'bg-[#F9EEF8] text-[#7B1B8B]',
  Business: 'bg-[#FEF4F4] text-[#8B1B1B]',
  Workshop: 'bg-[#EEF9FB] text-[#1B708B]',
  Milestone: 'bg-[#1B2A8B] text-white',
};

const SectionEyebrow = ({ children, className, light = false }: { children: React.ReactNode; className?: string; light?: boolean }) => (
  <span className={cn('block uppercase tracking-[0.4em] text-[11px] font-bold mb-6', light ? 'text-white/60' : 'text-[#1B2A8B]', className)}>{children}</span>
);

const SectionHeadline = ({ children, className, light = false }: { children: React.ReactNode; className?: string; light?: boolean }) => (
  <h2 className={cn('font-black uppercase leading-[0.9] tracking-tight mb-8', light ? 'text-white' : 'text-[#1B2A8B]', className)}>{children}</h2>
);

const PrimaryButton = ({ children, className, variant = 'primary' }: { children: React.ReactNode; className?: string; variant?: 'primary' | 'white' }) => (
  <button className={cn('inline-flex items-center justify-center px-10 py-5 font-black uppercase tracking-widest text-[14px] transition-all active:scale-95 cursor-pointer', variant === 'primary' ? 'bg-[#1B2A8B] text-white hover:bg-[#1B2A8B]/90' : 'bg-white text-[#1B2A8B] hover:bg-white/90', className)}>{children}</button>
);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
      <motion.div className="w-full h-full" style={{ y: imgY }}>
        <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1800" alt="Artisan bread close-up" className="w-full h-full object-cover" style={{ filter: 'brightness(0.45) grayscale(0.3)' }} />
      </motion.div>
      <motion.div style={{ y: textY, opacity }} className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="block uppercase tracking-[0.6em] text-[11px] font-bold text-white/60 mb-8">THE ART OF BREAD</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.35 }} className="text-white font-black uppercase text-[64px] md:text-[110px] lg:text-[130px] leading-[0.85] tracking-tight max-w-[1100px]">Master the Craft of Artisan Baking</motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.6 }} className="text-white/70 text-[17px] md:text-[20px] leading-relaxed max-w-[520px] mt-10 mb-12">A world-class culinary journey from foundational science to the final perfect crust.</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
          <PrimaryButton variant="white" className="shadow-2xl">ENROLL NOW</PrimaryButton>
        </motion.div>
      </motion.div>
      <motion.div style={{ opacity }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.1 }} className="absolute bottom-12 left-8 md:left-14 flex flex-col gap-1">
        <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold">Cohort</span>
        <span className="text-white font-black text-[14px] uppercase tracking-widest">2025 — Spring</span>
      </motion.div>
      <motion.div style={{ opacity }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.1 }} className="absolute bottom-12 right-8 md:right-14 flex flex-col items-end gap-1">
        <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold">Seats</span>
        <span className="text-white font-black text-[14px] uppercase tracking-widest">50 Available</span>
      </motion.div>
    </section>
  );
};

const Curriculum = () => (
  <section className="w-full bg-white py-24 px-6 md:px-[80px]">
    <div className="max-w-[1240px] mx-auto">
      <div className="mb-16">
        <SectionEyebrow>THE CURRICULUM</SectionEyebrow>
        <SectionHeadline className="text-[64px] md:text-[84px] mb-4">WHAT YOU WILL LEARN</SectionHeadline>
        <p className="text-[#4A4A4A] text-[18px]">An intensive roadmap to professional-grade baking.</p>
      </div>
      {CURRICULUM.map((day, dayIdx) => (
        <div key={day.dayLabel} className="mb-20">
          <div className="flex items-baseline gap-6 mb-8 border-b border-[#E8E8E8] pb-5">
            <span className="text-[#1B2A8B] font-black uppercase text-[11px] tracking-[0.4em]">{day.dayLabel}</span>
            <span className="text-[#1B2A8B] font-black uppercase text-[28px] md:text-[36px] leading-none tracking-tight">{day.title}</span>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
            {day.items.map((item, itemIdx) => {
              const isHighlighted = dayIdx === 2 && itemIdx === 3;
              return (
                <motion.div key={`${dayIdx}-${itemIdx}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: itemIdx * 0.08 }} viewport={{ once: true, margin: '-60px' }} className={cn('break-inside-avoid border p-7 flex flex-col gap-4 cursor-default transition-all duration-300', isHighlighted ? 'bg-[#1B2A8B] border-[#1B2A8B]' : 'bg-white border-[#E8E8E8] hover:border-[#1B2A8B]')}>
                  <div className="flex items-center justify-between">
                    <span className={cn('inline-block text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1.5', isHighlighted ? 'bg-white/20 text-white' : TAG_COLORS[item.tag] ?? 'bg-gray-100 text-gray-600')}>{item.tag}</span>
                    <span className={cn('text-[11px] font-mono', isHighlighted ? 'text-white/50' : 'text-[#AAAAAA]')}>{String(itemIdx + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className={cn('font-black text-[17px] leading-tight tracking-tight', isHighlighted ? 'text-white' : 'text-[#1B2A8B]')}>{item.module}</h3>
                  <div className={cn('h-[1px] w-full', isHighlighted ? 'bg-white/20' : 'bg-[#EEEEEE]')} />
                  <div className="flex flex-col gap-1">
                    <span className={cn('text-[13px]', isHighlighted ? 'text-white/70' : 'text-[#4A4A4A]')}>{item.instructor}</span>
                    <span className={cn('text-[12px] font-mono', isHighlighted ? 'text-white/40' : 'text-[#AAAAAA]')}>{item.time}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const ArtisanBakeMasterclassV1 = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="w-full bg-white text-[#4A4A4A] selection:bg-[#1B2A8B] selection:text-white font-sans overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-[#1B2A8B] origin-left z-[100]" style={{ scaleX: useSpring(scrollYProgress, { stiffness: 100, damping: 30 }) }} />
      <Hero />
      <Curriculum />
    </div>
  );
};
