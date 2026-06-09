import * as React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Zap, Users } from 'lucide-react';

const INCLUSIONS = ["3-Day Intensive Curriculum (12 modules)", "Access to 3 World-Class Instructors", "Lifetime access to recorded sessions", "Downloadable recipe and technique PDFs", "Private student community access", "Live Q&A session recordings", "Official Certification of Mastery", "30-Day money-back guarantee"];

export const BakeryPricing: React.FC = () => {
  return <section className="w-full bg-white py-20 px-6 md:py-32 selection:bg-[#1B2A8B] selection:text-white">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        <div className="text-center mb-16 md:mb-20">
          <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="inline-block text-[12px] font-bold tracking-[0.25em] text-[#1B2A8B] uppercase mb-6">
            Invest in your craft
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="text-5xl md:text-[56px] font-black leading-[1.1] md:leading-[1] text-[#1B2A8B] uppercase tracking-tighter max-w-3xl mx-auto">
            One investment.<br />Lifetime mastery.
          </motion.h2>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="w-full max-w-[560px] bg-white border-2 border-[#1B2A8B] rounded-none md:rounded-[4px] p-8 md:p-12 relative">
          <div className="flex justify-between items-center mb-8">
            <span className="text-[12px] font-black tracking-[0.15em] text-[#1B2A8B] uppercase">Masterclass Full Access</span>
            <div className="bg-[#1B2A8B] text-white text-[10px] font-bold px-2 py-0.5 tracking-wider uppercase">Best Value</div>
          </div>

          <div className="mb-8">
            <div className="flex items-start">
              <span className="text-4xl font-black text-[#1B2A8B] mt-2 mr-1 leading-none tracking-tighter">$</span>
              <h3 className="text-7xl md:text-[96px] font-black leading-none text-[#1B2A8B] tracking-tighter">497</h3>
            </div>
            <p className="text-[13px] text-gray-500 mt-4 font-medium">One-time payment. No recurring subscription.</p>
          </div>

          <div className="h-[1px] w-full bg-gray-100 my-8" />

          <div className="mb-10">
            <h4 className="text-[11px] font-black text-gray-800 uppercase tracking-[0.1em] mb-6">What is included</h4>
            <ul className="space-y-4">
              {INCLUSIONS.map((item) => <li key={item} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1"><Check className="w-4 h-4 text-[#1B2A8B]" strokeWidth={3} /></div>
                  <span className="text-[15px] leading-[1.8] text-gray-600 font-medium">{item}</span>
                </li>)}
            </ul>
          </div>

          <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="w-full bg-[#1B2A8B] hover:bg-[#15206B] text-white text-sm font-black uppercase tracking-[0.15em] py-5 transition-colors duration-300 flex items-center justify-center gap-2">
            Enroll Now - $497
          </motion.button>

          <div className="mt-6 text-center">
            <p className="text-[12px] text-gray-400 font-medium tracking-tight">Secure checkout · Instant access · Limited seats remaining</p>
          </div>

          <div className="absolute -right-3 -top-3 hidden lg:flex flex-col gap-2">
            <div className="bg-white border border-gray-100 shadow-xl p-3 rounded-full"><ShieldCheck className="w-5 h-5 text-[#1B2A8B]" /></div>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl px-4">
          <div className="flex flex-col items-center text-center">
            <Zap className="w-6 h-6 text-[#1B2A8B] mb-4" />
            <h5 className="text-[13px] font-bold uppercase tracking-widest text-gray-900 mb-2">Immediate Access</h5>
            <p className="text-[12px] text-gray-500 leading-relaxed">Start learning the moment you complete your registration.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="w-6 h-6 text-[#1B2A8B] mb-4" />
            <h5 className="text-[13px] font-bold uppercase tracking-widest text-gray-900 mb-2">Join 1,200+ Students</h5>
            <p className="text-[12px] text-gray-500 leading-relaxed">Be part of an exclusive global community of dedicated artisans.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <ShieldCheck className="w-6 h-6 text-[#1B2A8B] mb-4" />
            <h5 className="text-[13px] font-bold uppercase tracking-widest text-gray-900 mb-2">Guarantee</h5>
            <p className="text-[12px] text-gray-500 leading-relaxed">Risk-free 30-day window to explore the entire curriculum.</p>
          </div>
        </div>
      </div>
    </section>;
};
