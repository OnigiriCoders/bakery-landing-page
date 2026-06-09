import * as React from 'react';

const TICKER_ITEMS = ['ARTISAN BREAD TECHNIQUES', 'WORLD-CLASS INSTRUCTORS', 'LIMITED COHORT SEATS', 'HANDS-ON TRAINING', 'CERTIFICATION INCLUDED', 'SOURDOUGH MASTERY', 'ENROLL NOW'];

export const BakeryMarqueeTicker: React.FC = () => {
  const repeatedItems = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];
  return <section className="relative w-full h-[80px] md:h-[100px] bg-[#1B2A8B] flex items-center overflow-hidden border-y border-white/10" aria-label="Bakery Masterclass Highlights">
      <style>{`
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; white-space: nowrap; animation: scroll 30s linear infinite; width: max-content; }
        .marquee-content { display: flex; align-items: center; }
      `}</style>
      <div className="animate-marquee">
        <div className="marquee-content">
          {repeatedItems.map((item, index) => <span key={`set1-${index}`} className="flex items-center">
              <span className="text-white font-bold uppercase tracking-[0.2em] text-[13px] md:text-[15px] whitespace-nowrap">{item}</span>
              <span className="mx-6 md:mx-10 text-white text-[10px] opacity-80" aria-hidden="true">◆</span>
            </span>)}
        </div>
        <div className="marquee-content">
          {repeatedItems.map((item, index) => <span key={`set2-${index}`} className="flex items-center">
              <span className="text-white font-bold uppercase tracking-[0.2em] text-[13px] md:text-[15px] whitespace-nowrap">{item}</span>
              <span className="mx-6 md:mx-10 text-white text-[10px] opacity-80" aria-hidden="true">◆</span>
            </span>)}
        </div>
      </div>
    </section>;
};
