"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import MachineShowcase from "@/components/MachineShowcase";

const categories = [
  {
    title: "Surface Preparation",
    desc: "Advanced shot blasting and abrasive solutions.",
    image: "/engineering_facility_1776527680071.png",
  },
  {
    title: "CNC Machining",
    desc: "Precision turning and milling centers.",
    image: "/cnc_machine_hero_1776527664550.png",
  },
  {
    title: "Tooling Systems",
    desc: "Cutting edge performance for heavy industry.",
    image: "/cnc_tools_detail_1776527698663.png",
  },
  {
    title: "Automation Units",
    desc: "Seamless robotic integration for high-speed tufting.",
    image: "/used_cnc_refurbished_1776527716037.png",
  }
];

export default function Collections() {
  return (
    <main className="min-h-screen bg-[#0f171c]">
      <Header />
      
      {/* Dynamic Animated Hero */}
      <div className="relative">
        <MachineShowcase />
        {/* Transitional Bridge to Grid */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0f171c] via-[#0f171c]/80 to-transparent z-30 pointer-events-none" />
        
        {/* Cinematic Scroll Prompt */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-4 pointer-events-none"
        >
          <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.8em]">Scroll for Detail</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-safety-orange to-transparent" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-40 -mt-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-safety-orange font-black text-xs tracking-[0.5em] uppercase mb-4 block"
        >
          Product Portfolios
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-black text-white tracking-tighter"
        >
          Industrial <br /> <span className="text-gradient">Collections.</span>
        </motion.h1>
      </div>

      {/* Grid Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden glass-panel border border-white/5"
            >
              <img 
                src={cat.image} 
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f171c] via-[#0f171c]/20 to-transparent" />
              
              <div className="absolute bottom-10 left-10 p-2">
                <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">{cat.title}</h3>
                <p className="text-white/40 text-sm max-w-[280px] font-medium leading-relaxed">
                  {cat.desc}
                </p>
                <button className="mt-6 flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-widest group/btn">
                  View Specifications 
                  <div className="w-8 h-[1px] bg-safety-orange transition-all group-hover/btn:w-12" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
