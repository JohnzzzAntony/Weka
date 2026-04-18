"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen bg-[#0f171c]">
      <Header />
      
      {/* Cinematic Hero */}
      <section className="pt-48 pb-32 px-6 relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-safety-orange mb-12 rotate-45 flex items-center justify-center shadow-[0_0_50px_rgba(243,156,18,0.3)]"
          >
            <span className="text-white font-black text-4xl -rotate-45">I</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none mb-10"
          >
            Engineering <br /> <span className="text-gradient">Legacy.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl text-white/50 text-xl font-medium leading-relaxed"
          >
            IND EXP. (Independent Experts) represents the pinnacle of industrial automation 
            in the GCC. From our roots in specialized machinery to our current status as 
            regional leaders in CNC and Surface Preparation, we bridge the gap between 
            European engineering and Middle Eastern infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { label: "Precision", val: "0.001mm", desc: "Our standard for all automated tooling solutions." },
            { label: "Coverage", val: "+12 Countries", desc: "Deployment across the MENA region and beyond." },
            { label: "Uptime", val: "24/7/365", desc: "Critical support systems for heavy industrial units." }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-10 border border-white/5 flex flex-col items-center text-center"
            >
              <div className="text-4xl font-black text-white mb-2">{stat.val}</div>
              <div className="text-safety-orange text-xs font-black uppercase tracking-[0.3em] mb-4">{stat.label}</div>
              <p className="text-white/30 text-sm font-medium">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              Technical <span className="text-safety-orange">Mastery</span> 
              <br /> Without Compromise.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Based in the UAE, IND EXP. leverages decades of collective experience to provide 
              comprehensive lifecycle management for high-end CNC machines, shot blast units, 
              and specialized robotic brush modules. 
            </p>
            <div className="w-20 h-1 bg-safety-orange/50" />
          </div>
          <div className="flex-1 w-full aspect-square rounded-[4rem] overflow-hidden glass-panel p-4">
            <img 
              src="/engineering_facility_1776527680071.png" 
              alt="Engineering Facility"
              className="w-full h-full object-cover rounded-[3.5rem] opacity-70 grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
