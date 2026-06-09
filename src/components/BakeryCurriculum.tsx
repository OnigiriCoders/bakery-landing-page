import * as React from 'react';
import { motion } from 'framer-motion';

interface Module { id: string; title: string; instructor: string; time: string; }
interface Day { id: string; header: string; modules: Module[]; }

const CURRICULUM_DATA: Day[] = [
  { id: 'day-01', header: 'DAY 01 — FOUNDATIONS OF BREAD', modules: [{ id: 'm1', title: 'Sourdough Starter Science', instructor: 'Chef Elena Russo', time: '9:00 – 10:30 AM' }, { id: 'm2', title: 'Flour Selection & Hydration', instructor: 'Chef Marcus Webb', time: '11:00 – 12:30 PM' }, { id: 'm3', title: 'Fermentation Fundamentals', instructor: 'Chef Elena Russo', time: '2:00 – 3:30 PM' }, { id: 'm4', title: 'Shaping & Scoring', instructor: 'Chef James Allard', time: '4:00 – 5:00 PM' }] },
  { id: 'day-02', header: 'DAY 02 — ADVANCED TECHNIQUES', modules: [{ id: 'm5', title: 'Enriched Doughs & Brioche', instructor: 'Chef Marcus Webb', time: '9:00 – 10:30 AM' }, { id: 'm6', title: 'Laminated Pastry Foundations', instructor: 'Chef James Allard', time: '11:00 – 12:30 PM' }, { id: 'm7', title: 'Oven Dynamics & Steam', instructor: 'Chef Elena Russo', time: '2:00 – 3:30 PM' }, { id: 'm8', title: 'Crust Colour & Texture', instructor: 'Chef Marcus Webb', time: '4:00 – 5:00 PM' }] },
  { id: 'day-03', header: 'DAY 03 — MASTERY & REFINEMENT', modules: [{ id: 'm9', title: 'Regional Bread Traditions', instructor: 'Chef James Allard', time: '9:00 – 10:30 AM' }, { id: 'm10', title: 'Menu Development', instructor: 'Chef Elena Russo', time: '11:00 – 12:30 PM' }, { id: 'm11', title: 'Live Critique & Feedback', instructor: 'All Instructors', time: '2:00 – 4:00 PM' }, { id: 'm12', title: 'Final Showcase & Certification', instructor: 'All Instructors', time: '4:00 – 5:30 PM' }] },
];

export const BakeryCurriculum = () => {
  return (
    <main className="min-h-screen bg-white text-[#4A4A4A] font-sans antialiased overflow-x-hidden selection:bg-[#1B2A8B] selection:text-white">
      <div className="max-w-[1440px] mx-auto px-12 md:px-[120px] py-16 lg:py-24">
        <header className="mb-16 lg:mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <span className="block text-[#1B2A8B] text-[13px] font-bold tracking-[0.2em] uppercase mb-4">The Curriculum</span>
            <h1 className="text-[#1B2A8B] text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase mb-6">What you <br />will learn</h1>
            <p className="text-[#4A4A4A] text-lg font-normal max-w-2xl border-l-2 border-[#1B2A8B] pl-6 py-1">A comprehensive three-day intensive designed to elevate your craft from foundational chemistry to professional-grade artisan production.</p>
          </motion.div>
        </header>

        <section className="overflow-x-auto">
          <div className="min-w-[800px] w-full">
            <div className="grid grid-cols-[100px_1fr_1fr_180px] border-b border-[#E0E0E0] pb-4 px-4">
              <div className="text-[#4A4A4A] text-[12px] font-bold tracking-widest uppercase">Day</div>
              <div className="text-[#4A4A4A] text-[12px] font-bold tracking-widest uppercase">Module</div>
              <div className="text-[#4A4A4A] text-[12px] font-bold tracking-widest uppercase">Instructor</div>
              <div className="text-[#4A4A4A] text-[12px] font-bold tracking-widest uppercase text-right">Time</div>
            </div>
            <div className="flex flex-col">
              {CURRICULUM_DATA.map((day, dayIndex) => (
                <div key={day.id}>
                  <div className="bg-[#F0F2FA] px-4 py-3 flex items-center">
                    <h2 className="text-[#1B2A8B] text-lg font-black tracking-tight uppercase">{day.header}</h2>
                  </div>
                  {day.modules.map((module, moduleIndex) => (
                    <motion.div key={module.id} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: moduleIndex * 0.05 + dayIndex * 0.1 }} className="grid grid-cols-[100px_1fr_1fr_180px] py-4 px-4 border-b border-[#E0E0E0] hover:bg-[#F0F2FA]/50 transition-colors group cursor-default">
                      <div className="flex items-center text-[15px] text-[#4A4A4A] font-medium opacity-50 group-hover:opacity-100 transition-opacity">{String(dayIndex + 1).padStart(2, '0')}</div>
                      <div className="flex items-center text-[16px] text-[#4A4A4A] font-medium pr-8">{module.title}</div>
                      <div className="flex items-center text-[15px] text-[#4A4A4A] italic">{module.instructor}</div>
                      <div className="flex items-center justify-end text-[15px] text-[#4A4A4A] font-medium font-mono tracking-tight">{module.time}</div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t border-[#E0E0E0] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-[13px] text-[#4A4A4A] uppercase tracking-wider font-medium">© 2024 Bakery Masterclass Series — London Edition</p>
          <div className="flex gap-8">
            <span className="text-[13px] text-[#1B2A8B] font-bold uppercase cursor-pointer hover:underline underline-offset-4">Download PDF</span>
            <span className="text-[13px] text-[#1B2A8B] font-bold uppercase cursor-pointer hover:underline underline-offset-4">Full Syllabus</span>
          </div>
        </footer>
      </div>
    </main>
  );
};
