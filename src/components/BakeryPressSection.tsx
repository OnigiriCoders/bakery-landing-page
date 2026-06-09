import React from 'react';
import { motion } from 'framer-motion';

const LOGO_DATA = [
  { name: 'THE NEW YORK TIMES', id: 'nyt' },
  { name: 'BON APPETIT', id: 'ba' },
  { name: 'FOOD AND WINE', id: 'fw' },
  { name: 'THE GUARDIAN', id: 'tg' },
  { name: 'SAVEUR', id: 'sav' },
  { name: 'EATER', id: 'eat' },
];

export const BakeryPressSection: React.FC = () => {
  return (
    <section className="w-full bg-white flex flex-col items-center justify-center py-16 px-4 select-none">
      <div className="w-full max-w-5xl h-px bg-[#E8E8E8] mb-12" />
      <div className="text-center mb-10">
        <span className="text-[#888888] text-[11px] font-bold uppercase tracking-[0.25em]" style={{ fontFamily: 'Inter, sans-serif' }}>As Featured In</span>
      </div>
      <div className="w-full max-w-6xl flex flex-col items-center">
        <div className="w-full h-px bg-[#E8E8E8]" />
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 py-10 px-4">
          {LOGO_DATA.map(logo => (
            <motion.div key={logo.id} whileHover={{ color: '#333333' }} className="text-[#AAAAAA] transition-colors duration-300 cursor-default">
              <span className="text-[20px] md:text-[22px] font-bold uppercase whitespace-nowrap" style={{ fontFamily: 'Roboto, sans-serif', letterSpacing: '-0.02em' }}>{logo.name}</span>
            </motion.div>
          ))}
        </div>
        <div className="w-full h-px bg-[#E8E8E8]" />
      </div>
      <div className="h-8" />
    </section>
  );
};
