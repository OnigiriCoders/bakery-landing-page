import * as React from 'react';
import { motion } from 'framer-motion';

export const BakeryStatementSection: React.FC = () => {
  const HEADLINE_LINES = ['MOST PEOPLE', 'BAKE BREAD.', 'FEW TRULY', 'UNDERSTAND IT.'];
  const BODY_LINES = ['Our masterclass teaches you the science, craft, and intuition', 'behind every perfect loaf.'];

  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden bg-[#1B2A8B] px-6 py-20 select-none" aria-labelledby="statement-headline">
      <div className="max-w-[1440px] w-full flex flex-col items-center justify-center text-center">
        <motion.h1 id="statement-headline" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col items-center font-black uppercase tracking-tighter text-white" style={{ lineHeight: '0.9', fontSize: 'clamp(64px, 12vw, 120px)' }}>
          {HEADLINE_LINES.map((line, index) => (
            <span key={`headline-${index}`} className="block overflow-hidden">
              <motion.span initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }} className="block">{line}</motion.span>
            </span>
          ))}
        </motion.h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }} className="mt-10 md:mt-14 space-y-1">
          {BODY_LINES.map((line, index) => (
            <p key={`body-${index}`} className="text-[#E0E0E0] font-normal leading-relaxed tracking-wide" style={{ fontSize: 'clamp(16px, 1.5vw, 18px)', opacity: 0.8 }}>{line}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
