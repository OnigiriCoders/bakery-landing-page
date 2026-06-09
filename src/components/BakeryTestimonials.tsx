import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial { id: string; quote: string; author: string; initials: string; role: string; location: string; }

const TESTIMONIALS_DATA: Testimonial[] = [
  { id: '1', quote: "This masterclass completely transformed how I think about bread. Chef Elena's sourdough module alone was worth every penny.", author: 'M.T.', initials: 'MT', role: 'Home Baker', location: 'London' },
  { id: '2', quote: "I went from nervous beginner to running my own pop-up bakery in six months. The curriculum is genuinely world-class.", author: 'R.K.', initials: 'RK', role: 'Culinary Graduate', location: 'New York' },
  { id: '3', quote: "The fermentation session changed everything. I finally understand the science behind the craft.", author: 'S.B.', initials: 'SB', role: 'Pastry Chef', location: 'Paris' },
];

const StarRating = () => (
  <div className="flex gap-1 mb-6">
    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#F5A623" color="#F5A623" aria-hidden="true" />)}
  </div>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white border border-[#E8E8E8] rounded-[4px] p-8 flex flex-col h-full shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] transition-shadow duration-300">
    <div className="flex-grow">
      <StarRating />
      <blockquote><p className="text-[#333333] text-[17px] italic leading-[1.6] font-normal mb-8">"{testimonial.quote}"</p></blockquote>
    </div>
    <div className="mt-auto">
      <div className="h-[1px] w-full bg-[#E8E8E8] mb-6" />
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#1B2A8B] flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-sm tracking-wider uppercase">{testimonial.initials}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[#1B2A8B] font-bold text-base uppercase tracking-tight">{testimonial.author}</span>
          <span className="text-[#999999] text-[13px] font-medium">{testimonial.role}, {testimonial.location}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export const BakeryTestimonials = () => (
  <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-24">
    <div className="max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="block text-[#1B2A8B] font-bold text-sm tracking-[0.2em] uppercase mb-4">Alumni Success</motion.span>
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-[#1B2A8B] text-5xl md:text-[64px] font-[900] leading-none uppercase tracking-tighter">What Our <br className="md:hidden" /> Students Say</motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {TESTIMONIALS_DATA.map(t => <TestimonialCard key={t.id} testimonial={t} />)}
      </div>
      <div className="mt-20 flex justify-center opacity-10">
        <Quote size={64} color="#1B2A8B" fill="#1B2A8B" />
      </div>
    </div>
  </section>
);
