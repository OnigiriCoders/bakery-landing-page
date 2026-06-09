import * as React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatItem { value: string; label: string; descriptor: string; }
interface TrustBadgeItem { icon: React.ElementType; text: string; }

const STATS_DATA: StatItem[] = [
  { value: '2,400+', label: 'STUDENTS ENROLLED', descriptor: 'Across 40+ countries' },
  { value: '97%', label: 'COMPLETION RATE', descriptor: 'Industry-leading retention' },
  { value: '18+', label: 'YEARS EXPERTISE', descriptor: 'Combined instructor experience' },
  { value: '4.9', label: 'AVERAGE RATING', descriptor: 'From 1,200+ reviews' },
];

const BADGES_DATA: TrustBadgeItem[] = [
  { icon: Shield, text: '30-DAY MONEY-BACK GUARANTEE' },
  { icon: Award, text: 'CERTIFIED CURRICULUM' },
  { icon: Lock, text: 'SECURE CHECKOUT' },
];

export const BakeryTrustSection: React.FC = () => {
  return <section className="w-full bg-[#F7F7F9] py-24 md:py-32 flex flex-col items-center justify-center font-sans overflow-hidden">
      <div className="w-full max-w-[1200px] px-6 flex flex-col items-center">
        <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-[#1B2A8B] text-[12px] font-bold uppercase tracking-[0.25em] mb-16">
          WHY STUDENTS TRUST US
        </motion.span>

        <div className="w-full grid grid-cols-1 md:grid-cols-4 items-start">
          {STATS_DATA.map((stat, index) => <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className={cn("flex flex-col items-center text-center px-4 mb-12 md:mb-0", index < STATS_DATA.length - 1 ? "md:border-r border-[#DDDDDD]" : "")}>
              <span className="text-[64px] lg:text-[72px] font-black text-[#1B2A8B] leading-none mb-4 tracking-tighter">{stat.value}</span>
              <span className="text-[#333] text-[12px] font-bold uppercase tracking-[0.15em] mb-2">{stat.label}</span>
              <span className="text-[#888] text-[13px] font-medium">{stat.descriptor}</span>
            </motion.div>)}
        </div>

        <div className="mt-12 md:mt-20 w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {BADGES_DATA.map((badge, index) => <motion.div key={badge.text} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }} className="flex items-center gap-3">
              <badge.icon className="w-5 h-5 text-[#1B2A8B]" strokeWidth={2} />
              <span className="text-[#333] text-[13px] font-bold tracking-tight">{badge.text}</span>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
