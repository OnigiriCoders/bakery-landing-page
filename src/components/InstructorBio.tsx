import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const CredentialBadge: React.FC<{ number: string; label: string; className?: string }> = ({ number, label, className }) => (
  <div className={cn("flex flex-col items-center justify-center p-4 border-2 border-[#1B2A8B] bg-white w-[160px] h-[100px]", className)}>
    <span className="text-[#1B2A8B] text-3xl font-black uppercase leading-none tracking-tighter">{number}</span>
    <span className="text-[#1B2A8B] text-[11px] font-bold uppercase tracking-[0.15em] mt-2 text-center leading-tight">{label}</span>
  </div>
);

const BioParagraph: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <p className={cn("text-[#4A4A4A] text-[17px] leading-relaxed font-normal border-l-4 border-[#1B2A8B] pl-4 py-1", className)}>{children}</p>
);

export const InstructorBio: React.FC = () => {
  const badges = [{ number: '18+', label: 'Years Experience' }, { number: '12-YR', label: 'Starter Age' }, { number: 'GRAND', label: 'Master Level' }];
  const content = [
    { id: 'p1', text: 'Chef Elena Russo began her journey in the rustic kitchens of Tuscany, where she mastered the ancestral rhythms of wild yeast. After over a decade leading Michelin-starred bakery programs in Milan and London, she now dedicates her craft to preserving the science of heritage grains.' },
    { id: 'p2', text: 'Her philosophy is rooted in the "Patient Ferment"—the belief that time is the most critical ingredient in any loaf. By understanding the biological dance between temperature, humidity, and microbial life, she creates breads that are as nutritionally complex as they are beautiful.' },
    { id: 'p3', text: 'In this masterclass, Elena moves beyond recipes to teach intuition. Students learn to "read" dough through touch and scent, developing a professional-grade command of hydration and oven dynamics that translates to any kitchen environment.' },
  ];

  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col md:flex-row overflow-hidden selection:bg-[#1B2A8B] selection:text-white">
      <div className="w-full md:w-[45%] h-[60vh] md:h-screen sticky top-0 overflow-hidden">
        <motion.img initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} src="https://images.unsplash.com/photo-1583394238182-6f3ad43267b1?q=80&w=1200&auto=format&fit=crop" alt="Chef Elena Russo" className="w-full h-full object-cover grayscale brightness-[0.85] contrast-[1.1]" />
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
      </div>

      <div className="w-full md:w-[55%] min-h-screen flex items-center justify-start bg-white z-10">
        <div className="max-w-2xl px-8 py-16 md:py-24 lg:pl-20 lg:pr-12">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
            <span className="block text-[#1B2A8B] text-[12px] font-bold tracking-[0.3em] uppercase mb-6">Lead Instructor</span>
            <h1 className="text-[#1B2A8B] text-5xl md:text-[80px] font-black leading-[0.9] uppercase tracking-tighter mb-12">Chef <br />Elena Russo</h1>
            <div className="space-y-8 mb-12">
              {content.map((item, index) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}>
                  <BioParagraph>{item.text}</BioParagraph>
                </motion.div>
              ))}
            </div>
            <motion.div className="flex flex-wrap gap-4 pt-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
              {badges.map((badge, index) => <CredentialBadge key={index} number={badge.number} label={badge.label} />)}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
