import * as React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const EXPERIENCE_OPTIONS = ["Beginner", "Home Baker", "Culinary Student", "Professional Baker"];

interface FormState {
  fullName: string;
  email: string;
  experienceLevel: string;
  notes: string;
}

export const BakeryApplication: React.FC = () => {
  const [formData, setFormData] = React.useState<FormState>({ fullName: "", email: "", experienceLevel: "", notes: "" });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); alert("Application Submitted Successfully"); }, 1500);
  };

  return (
    <main className="min-h-screen bg-white text-foreground font-sans relative overflow-x-hidden selection:bg-[#1B2A8B] selection:text-white">
      <header className="absolute top-0 left-0 p-10 lg:p-20 pointer-events-none">
        <div className="flex flex-col gap-1">
          <span className="text-[#1B2A8B] text-[14px] font-black tracking-[0.2em] uppercase leading-none">Artisan Bake</span>
          <div className="w-20 h-[1px] bg-[#1B2A8B]" />
        </div>
      </header>

      <div className="max-w-[680px] mx-auto pt-20 pb-32 px-6 lg:px-0">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col pt-20">
          <span className="text-[#1B2A8B] text-[12px] font-bold tracking-[0.25em] uppercase mb-4">Join the Cohort</span>
          <h1 className="text-[#1B2A8B] text-[64px] md:text-[72px] font-black uppercase leading-[0.9] tracking-tight mb-6">Apply for the<br />Masterclass</h1>
          <p className="text-[#4A4A4A] text-[16px] font-medium leading-relaxed">Applications are reviewed on a rolling basis. Limited seats available.</p>
        </motion.div>

        <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} onSubmit={handleSubmit} className="mt-16 flex flex-col gap-8">
          <div className="flex flex-col group">
            <label htmlFor="fullName" className="text-[#4A4A4A] text-[12px] font-bold tracking-[0.2em] uppercase mb-[6px]">Full Name</label>
            <input type="text" id="fullName" name="fullName" required value={formData.fullName} onChange={handleInputChange} className="w-full bg-transparent border-b border-[#D0D0D0] py-3 text-[16px] text-[#4A4A4A] outline-none transition-colors duration-300 focus:border-[#1B2A8B] placeholder:text-[#D0D0D0]" placeholder="e.g. Julianne Smith" />
          </div>

          <div className="flex flex-col group">
            <label htmlFor="email" className="text-[#4A4A4A] text-[12px] font-bold tracking-[0.2em] uppercase mb-[6px]">Email Address</label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full bg-transparent border-b border-[#D0D0D0] py-3 text-[16px] text-[#4A4A4A] outline-none transition-colors duration-300 focus:border-[#1B2A8B] placeholder:text-[#D0D0D0]" placeholder="julianne@example.com" />
          </div>

          <div className="flex flex-col relative group">
            <label htmlFor="experienceLevel" className="text-[#4A4A4A] text-[12px] font-bold tracking-[0.2em] uppercase mb-[6px]">Experience Level</label>
            <div className="relative flex items-center">
              <select id="experienceLevel" name="experienceLevel" required value={formData.experienceLevel} onChange={handleInputChange} className="w-full bg-transparent border-b border-[#D0D0D0] py-3 text-[16px] text-[#4A4A4A] outline-none transition-colors duration-300 focus:border-[#1B2A8B] appearance-none cursor-pointer">
                <option value="" disabled>Select your level</option>
                {EXPERIENCE_OPTIONS.map(option => <option key={option} value={option}>{option}</option>)}
              </select>
              <div className="absolute right-0 pointer-events-none text-[#1B2A8B]"><ChevronDown size={20} strokeWidth={2.5} /></div>
            </div>
          </div>

          <div className="flex flex-col group">
            <label htmlFor="notes" className="text-[#4A4A4A] text-[12px] font-bold tracking-[0.2em] uppercase mb-[6px]">Additional Notes</label>
            <textarea id="notes" name="notes" rows={5} value={formData.notes} onChange={handleInputChange} className="w-full bg-transparent border-b border-[#D0D0D0] py-3 text-[16px] text-[#4A4A4A] outline-none transition-colors duration-300 focus:border-[#1B2A8B] resize-y min-h-[120px] placeholder:text-[#D0D0D0]" placeholder="Tell us about your culinary background..." />
          </div>

          <div className="mt-4 flex flex-col items-center gap-6">
            <button type="submit" disabled={isSubmitting} className={cn("w-full bg-[#1B2A8B] hover:bg-[#162270] text-white text-[14px] font-bold tracking-[0.2em] uppercase py-[18px] transition-all duration-300 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed rounded-[2px]")}>
              {isSubmitting ? "Processing..." : "Submit Application"}
            </button>
            <p className="text-[#999999] text-[12px] font-medium tracking-wide">By applying, you agree to our terms and privacy policy.</p>
          </div>
        </motion.form>
      </div>

      <div className="hidden xl:block absolute top-[20%] right-[5%] -rotate-90 origin-right">
        <span className="text-[12px] font-bold tracking-[0.4em] uppercase text-[#D0D0D0] select-none">Est. 2024 / Batch No. 04</span>
      </div>
    </main>
  );
};
