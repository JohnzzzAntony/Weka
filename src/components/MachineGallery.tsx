"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Shot Blast Turbine",
    desc: "Single-core high-velocity propulsion unit.",
    image: "/cnc_tools_detail_1776527698663.png"
  },
  {
    title: "Synthetic Fiber",
    desc: "12mm high-tensile tufting filaments.",
    image: "/used_cnc_refurbished_1776527716037.png"
  },
  {
    title: "Control Console",
    desc: "Integrated HUD for machine management.",
    image: "/cnc_machine_hero_1776527664550.png"
  }
];

export default function MachineGallery() {
  return (
    <section className="py-32 px-6 bg-[#0f171c]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-20">
          <span className="text-safety-orange font-black text-xs tracking-[0.5em] uppercase mb-4">Precision Components</span>
          <h2 className="text-4xl font-black text-white tracking-tighter uppercase">Machine <span className="text-gradient">Gallery.</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden glass-panel border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] group-hover:shadow-safety-orange/20 transition-all duration-700">
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 bg-industrial-blue/20" />
                
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                
                {/* Photo Frame Styling */}
                <div className="absolute inset-0 border-[20px] border-black/20 pointer-events-none" />
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,1)] pointer-events-none" />
                
                <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-1">
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter">{item.title}</h3>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
