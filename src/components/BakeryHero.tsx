import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const BakeryHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen lg:h-screen flex flex-col lg:flex-row bg-white overflow-hidden selection:bg-[#1B2A8B] selection:text-white">
      <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 md:px-20 lg:pl-24 lg:pr-16 py-20 lg:py-0">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col items-start max-w-2xl">
          <span className="text-[13px] font-bold tracking-[0.25em] text-[#1B2A8B] uppercase mb-8">The Art of Bread</span>
          <h1 className="text-6xl md:text-8xl lg:text-[96px] font-black leading-[0.9] text-[#1B2A8B] uppercase tracking-tighter mb-8">Master the <br />Craft of <br />Artisan Baking</h1>
          <p className="text-lg md:text-[19px] leading-relaxed text-[#4A4A4A] font-medium mb-10 max-w-xl">Learn the techniques behind legendary bread from world-class bakers.</p>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="group relative inline-flex items-center justify-center bg-[#1B2A8B] text-white px-10 py-5 text-sm md:text-base font-bold uppercase tracking-widest rounded-[2px] overflow-hidden transition-all">
            <span className="relative z-10 flex items-center gap-3">Enroll Now<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" /></span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </motion.div>
      </div>

      <div className="w-full lg:w-[45%] h-[50vh] lg:h-full relative overflow-hidden">
        <motion.div initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="w-full h-full">
          <img src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2000&auto=format&fit=crop" alt="Rustic sourdough bread loaf" className="w-full h-full object-cover grayscale brightness-90 contrast-125" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent pointer-events-none" />
        </motion.div>
      </div>

      <div className="hidden lg:block absolute bottom-12 left-12 rotate-[-90deg] origin-left">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300">Est. MMXXIV — Excellence in Gastronomy</span>
      </div>
    </section>
  );
};
