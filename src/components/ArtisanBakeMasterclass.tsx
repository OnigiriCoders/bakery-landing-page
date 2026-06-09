import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Check, Shield, Award, Lock, Star, ArrowRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const ROYAL_BLUE = '#1B2A8B';

const TESTIMONIALS = [
  { id: 1, quote: "This masterclass completely transformed how I think about bread. Chef Elena's sourdough module alone was worth every penny.", author: "M.T.", role: "Home Baker", location: "London" },
  { id: 2, quote: "I went from nervous beginner to running my own pop-up bakery in six months. The curriculum is genuinely world-class.", author: "R.K.", role: "Culinary Graduate", location: "New York" },
  { id: 3, quote: "The fermentation session changed everything. I finally understand the science behind the craft.", author: "S.B.", role: "Pastry Chef", location: "Paris" },
];

const CURRICULUM = [
  { title: 'DAY 01 — FOUNDATIONS OF BREAD', items: [{ module: 'Sourdough Starter Science', instructor: 'Chef Elena Russo', time: '9:00-10:30 AM' }, { module: 'Flour Selection and Hydration', instructor: 'Chef Marcus Webb', time: '11:00-12:30 PM' }, { module: 'Fermentation Fundamentals', instructor: 'Chef Elena Russo', time: '2:00-3:30 PM' }, { module: 'Shaping and Scoring', instructor: 'Chef James Allard', time: '4:00-5:00 PM' }] },
  { title: 'DAY 02 — ADVANCED TECHNIQUES', items: [{ module: 'Enriched Doughs and Brioche', instructor: 'Chef Marcus Webb', time: '9:00-10:30 AM' }, { module: 'Laminated Pastry Foundations', instructor: 'Chef James Allard', time: '11:00-12:30 PM' }, { module: 'Oven Dynamics and Steam', instructor: 'Chef Elena Russo', time: '2:00-3:30 PM' }, { module: 'Crust Colour and Texture', instructor: 'Chef Marcus Webb', time: '4:00-5:00 PM' }] },
  { title: 'DAY 03 — MASTERY AND REFINEMENT', items: [{ module: 'Regional Bread Traditions', instructor: 'Chef James Allard', time: '9:00-10:30 AM' }, { module: 'Menu Development', instructor: 'Chef Elena Russo', time: '11:00-12:30 PM' }, { module: 'Live Critique and Feedback', instructor: 'All Instructors', time: '2:00-4:00 PM' }, { module: 'Final Showcase and Certification', instructor: 'All Instructors', time: '4:00-5:30 PM' }] },
];

const SectionEyebrow = ({ children, className, light = false }: { children: React.ReactNode; className?: string; light?: boolean }) => (
  <span className={cn("block uppercase tracking-[0.4em] text-[11px] font-bold mb-6", light ? "text-white/60" : "text-[#1B2A8B]", className)}>{children}</span>
);

const SectionHeadline = ({ children, className, light = false }: { children: React.ReactNode; className?: string; light?: boolean }) => (
  <h2 className={cn("font-black uppercase leading-[0.9] tracking-tight mb-8", light ? "text-white" : "text-[#1B2A8B]", className)}>{children}</h2>
);

const PrimaryButton = ({ children, className, variant = 'primary' }: { children: React.ReactNode; className?: string; variant?: 'primary' | 'white' }) => (
  <button className={cn("inline-flex items-center justify-center px-10 py-5 font-black uppercase tracking-widest text-[14px] transition-all active:scale-95 cursor-pointer", variant === 'primary' ? "bg-[#1B2A8B] text-white hover:bg-[#1B2A8B]/90" : "bg-white text-[#1B2A8B] hover:bg-white/90", className)}>{children}</button>
);

const Hero = () => (
  <section className="relative flex flex-col md:flex-row h-screen min-h-[800px] overflow-hidden border-b border-[#E8E8E8]">
    <div className="w-full md:w-[55%] bg-white flex flex-col justify-center px-6 md:px-[100px] py-20">
      <SectionEyebrow>THE ART OF BREAD</SectionEyebrow>
      <h1 className="text-[#1B2A8B] font-black uppercase text-[64px] md:text-[96px] leading-[0.85] tracking-tight mb-8 max-w-[700px]">Master the Craft of <br /> Artisan Baking</h1>
      <p className="text-[#4A4A4A] text-[17px] leading-relaxed max-w-[500px] mb-12">Experience a world-class culinary journey from foundational science to the final perfect crust.</p>
      <div><PrimaryButton>ENROLL NOW</PrimaryButton></div>
    </div>
    <div className="w-full md:w-[45%] h-[400px] md:h-full relative overflow-hidden">
      <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1200" alt="Artisan Bread Close-up" className="w-full h-full object-cover grayscale brightness-90" />
    </div>
  </section>
);

const MarqueeTicker = () => {
  const phrases = ['ARTISAN BREAD TECHNIQUES', 'WORLD-CLASS INSTRUCTORS', 'LIMITED COHORT SEATS', 'HANDS-ON TRAINING', 'CERTIFICATION INCLUDED', 'SOURDOUGH MASTERY', 'ENROLL NOW'];
  return (
    <div className="w-full h-[90px] bg-[#1B2A8B] flex items-center overflow-hidden border-y border-white/10">
      <motion.div className="flex whitespace-nowrap gap-12" animate={{ x: [0, -1000] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12">
            {phrases.map((phrase, idx) => (
              <div key={idx} className="flex items-center gap-12">
                <span className="text-white font-black uppercase text-[18px] tracking-widest">{phrase}</span>
                <span className="text-white text-[10px]">◆</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const FeaturedIn = () => {
  const publications = ['THE NEW YORK TIMES', 'BON APPETIT', 'FOOD AND WINE', 'THE GUARDIAN', 'SAVEUR', 'EATER'];
  return (
    <section className="w-full py-16 md:h-[280px] bg-white flex flex-col items-center justify-center border-b border-[#E8E8E8]">
      <SectionEyebrow className="mb-10 text-center !tracking-[0.6em]">AS FEATURED IN</SectionEyebrow>
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 px-6">
        {publications.map(pub => <span key={pub} className="text-[#AAAAAA] hover:text-[#333] transition-colors font-black uppercase text-[18px] md:text-[22px] tracking-tight cursor-default">{pub}</span>)}
      </div>
    </section>
  );
};

const AwarenessStatement = () => (
  <section className="w-full min-h-[90vh] bg-[#1B2A8B] flex flex-col items-center justify-center text-center px-6 py-24">
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>
      <h2 className="text-white font-black uppercase text-[60px] md:text-[110px] leading-[0.9] tracking-tight max-w-[1000px] mb-12">MOST PEOPLE <br /> BAKE BREAD. <br /> FEW TRULY <br /> UNDERSTAND IT.</h2>
      <div className="space-y-2 max-w-[600px] mx-auto">
        <p className="text-white/80 text-[18px] md:text-[20px] leading-relaxed">Our masterclass teaches you the science, craft, and intuition</p>
        <p className="text-white/80 text-[18px] md:text-[20px] leading-relaxed">behind every perfect loaf.</p>
      </div>
    </motion.div>
  </section>
);

const CurriculumSection = () => (
  <section className="w-full bg-white py-24 px-6 md:px-[100px]">
    <div className="max-w-[1240px] mx-auto">
      <div className="mb-16">
        <SectionEyebrow>THE CURRICULUM</SectionEyebrow>
        <SectionHeadline className="text-[64px] md:text-[84px] mb-4">WHAT YOU WILL LEARN</SectionHeadline>
        <p className="text-[#4A4A4A] text-[18px]">An intensive roadmap to professional-grade baking.</p>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-[#1B2A8B] text-left">
              <th className="pb-4 pt-2 uppercase text-[12px] font-black text-[#4A4A4A] tracking-widest w-[100px]">Day</th>
              <th className="pb-4 pt-2 uppercase text-[12px] font-black text-[#4A4A4A] tracking-widest">Module</th>
              <th className="pb-4 pt-2 uppercase text-[12px] font-black text-[#4A4A4A] tracking-widest">Instructor</th>
              <th className="pb-4 pt-2 uppercase text-[12px] font-black text-[#4A4A4A] tracking-widest text-right">Time</th>
            </tr>
          </thead>
          <tbody>
            {CURRICULUM.map((day, dayIdx) => (
              <React.Fragment key={day.title}>
                <tr className="bg-[#F0F2FA]">
                  <td colSpan={4} className="py-4 px-4"><span className="text-[#1B2A8B] font-black uppercase text-[18px] tracking-tight">{day.title}</span></td>
                </tr>
                {day.items.map((item, itemIdx) => (
                  <tr key={`${dayIdx}-${itemIdx}`} className="border-b border-[#E0E0E0] group hover:bg-[#F9F9F9] transition-colors">
                    <td className="py-6 px-4 text-[#AAAAAA] font-medium">#{itemIdx + 1}</td>
                    <td className="py-6 px-4"><span className="text-[#1B2A8B] font-bold text-[18px] block mb-1">{item.module}</span></td>
                    <td className="py-6 px-4 hidden md:table-cell"><span className="text-[#4A4A4A] text-[16px]">{item.instructor}</span></td>
                    <td className="py-6 px-4 text-right"><span className="text-[#4A4A4A] text-[15px] font-mono whitespace-nowrap">{item.time}</span></td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="w-full bg-white py-32 px-6">
    <div className="max-w-[1240px] mx-auto text-center mb-20">
      <SectionEyebrow>TESTIMONIALS</SectionEyebrow>
      <SectionHeadline className="text-[52px] md:text-[64px]">WHAT OUR STUDENTS SAY</SectionHeadline>
    </div>
    <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {TESTIMONIALS.map(t => (
        <div key={t.id} className="bg-white border border-[#E8E8E8] p-10 flex flex-col justify-between hover:shadow-xl transition-all duration-500">
          <div>
            <div className="flex gap-1 mb-8">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#F5A623" color="#F5A623" />)}</div>
            <p className="text-[#4A4A4A] text-[18px] leading-relaxed italic mb-10">"{t.quote}"</p>
          </div>
          <div className="pt-8 border-t border-[#E8E8E8] flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#1B2A8B] flex items-center justify-center text-white font-black text-[14px]">{t.author}</div>
            <div className="flex flex-col">
              <span className="text-[#1B2A8B] font-black text-[14px] uppercase tracking-wider">{t.role}</span>
              <span className="text-[#AAAAAA] text-[12px] uppercase tracking-widest">{t.location}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const InstructorSection = () => (
  <section className="relative flex flex-col md:flex-row min-h-screen overflow-hidden">
    <div className="w-full md:w-[45%] h-[500px] md:h-auto relative overflow-hidden">
      <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=1200" alt="Chef Elena Russo" className="w-full h-full object-cover grayscale" />
    </div>
    <div className="w-full md:w-[55%] bg-white flex flex-col justify-center px-6 md:px-20 py-24">
      <SectionEyebrow>LEAD INSTRUCTOR</SectionEyebrow>
      <SectionHeadline className="text-[56px] md:text-[80px]">CHEF ELENA RUSSO</SectionHeadline>
      <div className="space-y-10 mb-16 max-w-[600px]">
        <p className="text-[#4A4A4A] text-[17px] leading-relaxed pl-8 border-l-4 border-[#1B2A8B]">Trained at the prestigious Ferrandi Paris and having led artisanal programs across Europe, Elena Russo brings nearly two decades of deep-rooted expertise to the kitchen.</p>
        <p className="text-[#4A4A4A] text-[17px] leading-relaxed pl-8 border-l-4 border-[#1B2A8B]">Her philosophy centers on the marriage of ancient techniques and modern science—understanding the microscopic dance of yeast as clearly as the rhythmic motion of kneading.</p>
      </div>
      <div className="flex flex-wrap gap-4">
        {[{ v: '18+', l: 'Years Experience' }, { v: '12-YEAR', l: 'Starter Age' }, { v: 'MASTER', l: 'Boulanger Level' }].map(({ v, l }) => (
          <div key={l} className="flex-1 min-w-[140px] border-2 border-[#1B2A8B] p-6 text-center">
            <span className="block text-[#1B2A8B] font-black text-[32px] leading-none mb-2">{v}</span>
            <span className="block text-[#1B2A8B] font-bold text-[11px] uppercase tracking-widest">{l}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TrustSection = () => {
  const stats = [{ value: '2,400+', label: 'STUDENTS ENROLLED', desc: 'Across 40+ countries' }, { value: '97%', label: 'COMPLETION RATE', desc: 'Industry-leading retention' }, { value: '18+', label: 'YEARS EXPERTISE', desc: 'Combined instructor experience' }, { value: '4.9', label: 'AVERAGE RATING', desc: 'From 1,200+ reviews' }];
  return (
    <section className="w-full bg-[#F7F7F9] py-32 px-6">
      <div className="max-w-[1240px] mx-auto">
        <SectionEyebrow className="text-center mb-16">WHY STUDENTS TRUST US</SectionEyebrow>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12">
          {stats.map((stat, idx) => (
            <div key={stat.label} className={cn("px-8 text-center", idx !== stats.length - 1 ? "md:border-r border-[#E0E0E0]" : "")}>
              <span className="block text-[#1B2A8B] font-black text-[48px] md:text-[64px] leading-tight mb-2 tracking-tight">{stat.value}</span>
              <span className="block text-[#4A4A4A] font-black text-[12px] uppercase tracking-widest mb-1">{stat.label}</span>
              <span className="block text-[#AAAAAA] text-[13px]">{stat.desc}</span>
            </div>
          ))}
        </div>
        <div className="mt-24 flex flex-col md:flex-row items-center justify-center gap-12 border-t border-[#E0E0E0] pt-16">
          {[{ Icon: Shield, label: '30-Day Money-Back Guarantee' }, { Icon: Award, label: 'Certified Curriculum' }, { Icon: Lock, label: 'Secure Checkout Process' }].map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white flex items-center justify-center border border-[#E0E0E0] group-hover:border-[#1B2A8B] transition-colors"><Icon className="text-[#1B2A8B]" size={20} /></div>
              <span className="text-[#4A4A4A] font-bold text-[13px] uppercase tracking-wider">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const inclusions = ["3-Day Intensive Curriculum (12 modules)", "Access to 3 World-Class Instructors", "Lifetime access to recorded sessions", "Downloadable recipe and technique PDFs", "Private student community access", "Live Q&A session recordings", "Official Certification of Mastery", "30-Day money-back guarantee"];
  return (
    <section className="w-full bg-white py-32 px-6">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center">
        <div className="text-center mb-16">
          <SectionEyebrow>INVESTMENT</SectionEyebrow>
          <SectionHeadline className="text-[48px] md:text-[64px]">ONE INVESTMENT. <br /> LIFETIME MASTERY.</SectionHeadline>
        </div>
        <div className="w-full max-w-[600px] bg-white border-[3px] border-[#1B2A8B] p-8 md:p-16 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1B2A8B] text-white px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em]">MOST POPULAR</div>
          <div className="text-center mb-12">
            <SectionEyebrow className="mb-4 text-center">MASTERCLASS FULL ACCESS</SectionEyebrow>
            <div className="flex items-center justify-center text-[#1B2A8B]">
              <span className="text-[48px] font-black align-top leading-none mr-2 mt-2">$</span>
              <span className="text-[120px] font-black leading-none tracking-tighter">497</span>
            </div>
            <p className="text-[#4A4A4A] text-[14px] mt-4">One-time payment. No subscription required.</p>
          </div>
          <div className="border-t border-[#E8E8E8] pt-10 mb-12">
            <h4 className="text-[#4A4A4A] font-black text-[12px] uppercase tracking-widest mb-8">WHAT IS INCLUDED</h4>
            <ul className="space-y-4">
              {inclusions.map(item => (
                <li key={item} className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 flex-shrink-0 bg-[#1B2A8B]/10 flex items-center justify-center rounded-full"><Check size={12} className="text-[#1B2A8B]" strokeWidth={4} /></div>
                  <span className="text-[#4A4A4A] text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <button className="w-full bg-[#1B2A8B] text-white py-6 px-10 font-black uppercase tracking-[0.2em] text-[16px] transition-all hover:bg-[#1B2A8B]/90 active:scale-[0.98]">ENROLL NOW — $497</button>
            <div className="flex items-center justify-center gap-2 text-[#AAAAAA] text-[11px] uppercase tracking-widest">
              <span>Secure checkout</span><span>•</span><span>Instant access</span><span>•</span><span className="text-[#1B2A8B] font-bold">Limited seats remaining</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ApplicationForm = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', experience: '', notes: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  return (
    <section className="w-full bg-white py-32 px-6">
      <div className="max-w-[700px] mx-auto">
        <SectionEyebrow>JOIN THE COHORT</SectionEyebrow>
        <SectionHeadline className="text-[52px] md:text-[72px] mb-8">APPLY FOR THE <br /> MASTERCLASS</SectionHeadline>
        <p className="text-[#4A4A4A] text-[18px] mb-16 leading-relaxed">Applications are reviewed on a rolling basis. Due to the hands-on nature of the training, each cohort is strictly limited to 50 seats.</p>
        <form className="space-y-12" onSubmit={e => { e.preventDefault(); alert('Application submitted!'); }}>
          {[{ id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' }, { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' }].map(field => (
            <div key={field.id} className="group">
              <label className="block text-[#4A4A4A] font-black text-[11px] uppercase tracking-[0.3em] mb-4">{field.label}</label>
              <input type={field.type} name={field.id} placeholder={field.placeholder} value={formData[field.id as keyof typeof formData]} onChange={handleChange} className="w-full bg-transparent border-b border-[#D0D0D0] py-4 focus:outline-none focus:border-[#1B2A8B] text-[18px] transition-all placeholder:text-[#D0D0D0]" />
            </div>
          ))}
          <div className="group">
            <label className="block text-[#4A4A4A] font-black text-[11px] uppercase tracking-[0.3em] mb-4">Experience Level</label>
            <div className="relative">
              <select name="experience" value={formData.experience} onChange={handleChange} className="w-full bg-transparent border-b border-[#D0D0D0] py-4 focus:outline-none focus:border-[#1B2A8B] text-[18px] appearance-none transition-all cursor-pointer">
                <option value="">Select your level</option>
                {['Beginner', 'Home Baker', 'Culinary Student', 'Professional Baker'].map(o => <option key={o} value={o}>{o}</option>)}
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-[#AAAAAA] pointer-events-none" size={20} />
            </div>
          </div>
          <div className="group">
            <label className="block text-[#4A4A4A] font-black text-[11px] uppercase tracking-[0.3em] mb-4">Additional Notes</label>
            <textarea name="notes" rows={5} placeholder="Tell us about your baking goals" value={formData.notes} onChange={handleChange} className="w-full bg-transparent border-b border-[#D0D0D0] py-4 focus:outline-none focus:border-[#1B2A8B] text-[18px] transition-all resize-none placeholder:text-[#D0D0D0]" />
          </div>
          <div className="pt-8 space-y-8">
            <PrimaryButton className="w-full py-6">SUBMIT APPLICATION</PrimaryButton>
            <p className="text-center text-[#AAAAAA] text-[12px] leading-relaxed max-w-[450px] mx-auto">By submitting, you agree to our Terms of Service and Privacy Policy. We will contact you within 48 hours.</p>
          </div>
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="w-full bg-[#1B2A8B] py-20 px-6 border-t border-white/10">
    <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
      <div className="flex flex-col items-center md:items-start">
        <span className="text-white font-black uppercase text-[24px] tracking-tighter leading-none">ARTISAN BAKE</span>
        <span className="text-white/40 text-[11px] uppercase tracking-[0.5em] mt-2">EST. 2024</span>
      </div>
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
        {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Contact Us'].map(link => <a key={link} href="#" className="text-white/60 hover:text-white font-black uppercase text-[11px] tracking-widest transition-colors">{link}</a>)}
      </div>
      <div className="text-white/40 text-[11px] uppercase tracking-widest">© 2024 Artisan Bake Masterclass. All Rights Reserved.</div>
    </div>
  </footer>
);

export const ArtisanBakeMasterclass = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="w-full bg-white text-[#4A4A4A] selection:bg-[#1B2A8B] selection:text-white font-sans overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-[#1B2A8B] origin-left z-[100]" style={{ scaleX: useSpring(scrollYProgress, { stiffness: 100, damping: 30 }) }} />
      <Hero />
      <MarqueeTicker />
      <FeaturedIn />
      <AwarenessStatement />
      <CurriculumSection />
      <TestimonialsSection />
      <InstructorSection />
      <TrustSection />
      <PricingSection />
      <ApplicationForm />
      <Footer />
    </div>
  );
};
