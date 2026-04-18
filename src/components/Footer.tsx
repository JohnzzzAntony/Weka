"use client";

import { Send, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative pt-32 pb-16 px-6 bg-[#0f171c] overflow-hidden border-t border-white/5">
      {/* Background industrial pattern */}
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-industrial-blue/10 blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-10 md:p-12 rounded-[40px] relative"
          >
            <div className="absolute top-8 right-8 text-safety-orange opacity-20">
              <Mail size={80} strokeWidth={1} />
            </div>
            
            <h2 className="text-4xl font-black text-white mb-4 tracking-tighter">
              Ready for <br /> <span className="text-gradient">Precision?</span>
            </h2>
            <p className="text-white/40 mb-10 max-w-sm">
              Request a technical consultation or a formal quote for your industrial tooling project.
            </p>

            <form className="space-y-4" onClick={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Full Name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-safety-orange/50 transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-safety-orange/50 transition-colors"
                />
              </div>
              <input 
                type="text" 
                placeholder="Company Name"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-safety-orange/50 transition-colors"
              />
              <textarea 
                rows={4}
                placeholder="Industrial Requirements / Message"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-safety-orange/50 transition-colors resize-none"
              />
              <button className="w-full group bg-safety-orange hover:bg-orange-500 text-white font-black py-5 rounded-2xl text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3">
                Submit Request <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Info Side */}
          <div className="flex flex-col justify-between py-10">
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Solutions</h4>
                <ul className="space-y-4 text-white/40 text-sm font-medium">
                  <li><a href="#solutions" className="hover:text-safety-orange transition-colors">Shot Blasting</a></li>
                  <li><a href="#showcase" className="hover:text-safety-orange transition-colors">Brush Automation</a></li>
                  <li><a href="#solutions" className="hover:text-safety-orange transition-colors">Segments</a></li>
                  <li><a href="#solutions" className="hover:text-safety-orange transition-colors">Spares</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
                <ul className="space-y-4 text-white/40 text-sm font-medium">
                  <li><a href="#" className="hover:text-safety-orange transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-safety-orange transition-colors">Support Case</a></li>
                  <li><a href="#" className="hover:text-safety-orange transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-safety-orange transition-colors">Careers</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-20 space-y-6">
              <div className="flex items-start gap-4 text-white/60">
                <MapPin size={24} className="text-safety-orange shrink-0" />
                <span className="text-sm">
                  IND EXP. Engineering & Tools <br />
                  Industrial City, Abu Dhabi, United Arab Emirates
                </span>
              </div>
              <div className="flex items-center gap-4 text-white/60">
                <Phone size={24} className="text-safety-orange shrink-0" />
                <span className="text-sm font-bold text-white">+971 (0) 2 123 4567</span>
              </div>
            </div>
            
            <div className="mt-20 flex items-center gap-2 grayscale brightness-200 opacity-20">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm rotate-45">
                <span className="text-black font-black -rotate-45 text-sm">I</span>
              </div>
              <span className="text-lg font-bold tracking-tighter text-white">
                IND <span className="font-normal text-white/60 tracking-normal">EXP.</span>
              </span>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">
            &copy; 2026 IND EXP. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
