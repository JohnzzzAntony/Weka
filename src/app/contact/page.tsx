"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0f171c]">
      <Header />
      
      <section className="pt-32 md:pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
          
          {/* Header & Contact Info */}
          <div className="flex-1 space-y-10 md:space-y-12">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-safety-orange font-black text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4 md:mb-6 block"
              >
                Connect With Experts
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-5xl md:text-8xl font-black text-white tracking-tighter"
              >
                Talk <br /> <span className="text-gradient">Expansion.</span>
              </motion.h1>
            </div>

            <div className="space-y-6 md:space-y-8">
              {[
                { label: "Inquiry Line", val: "+971 4 123 4567", icon: <Phone size={22} className="text-safety-orange" /> },
                { label: "Direct Support", val: "eng@indexp.com", icon: <Mail size={22} className="text-safety-orange" /> },
                { label: "Regional HQ", val: "Sharjah, UAE | Ind. Area 13", icon: <MapPin size={22} className="text-safety-orange" /> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-5 md:gap-6 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 flex items-center justify-center rounded-xl md:rounded-2xl border border-white/10 group-hover:border-safety-orange/50 transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white/40 text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-white text-lg md:text-xl font-bold">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel p-6 md:p-12 border border-white/10 relative overflow-hidden rounded-3xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-safety-orange/5 blur-[100px] pointer-events-none" />
              
              <form className="space-y-6 md:space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 md:px-6 py-3 md:py-4 text-white outline-none focus:border-safety-orange/50 transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Industrial Unit</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 md:px-6 py-3 md:py-4 text-white outline-none focus:border-safety-orange/50 transition-colors" placeholder="e.g. CNC Turning" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 md:px-6 py-3 md:py-4 text-white outline-none focus:border-safety-orange/50 transition-colors" placeholder="john@enterprise.com" />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Inquiry Details</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 md:px-6 py-3 md:py-4 text-white outline-none focus:border-safety-orange/50 transition-colors resize-none" placeholder="Describe your technical requirements..." />
                </div>

                <button className="w-full bg-safety-orange py-5 md:py-6 rounded-2xl text-white font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-safety-orange/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-safety-orange/20 group text-xs">
                  Send Technical Inquiry
                  <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
