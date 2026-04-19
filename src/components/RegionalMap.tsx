"use client";

import { motion } from "framer-motion";
import { Globe, MapPin } from "lucide-react";

const regions = [
  { name: "UAE", status: "HQ & Distribution", x: "70%", y: "50%" },
  { name: "KSA", status: "Sales & Support", x: "40%", y: "45%" },
  { name: "Oman", status: "Service Center", x: "80%", y: "70%" },
  { name: "Qatar", status: "Project Office", x: "60%", y: "45%" },
  { name: "Bahrain", status: "Regional Partner", x: "55%", y: "40%" },
];

export default function RegionalMap() {
  return (
    <section id="regional" className="py-32 px-6 bg-[#0f171c] relative overflow-hidden">
      {/* Background World Map Pattern (Stylized) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 500" className="fill-white">
          <circle cx="200" cy="150" r="2" />
          <circle cx="350" cy="200" r="2" />
          <circle cx="700" cy="250" r="2" />
          {/* Add more dots to simulate a grid-map if needed */}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
        <div className="flex-1">
          <span className="text-safety-orange font-bold text-sm tracking-[0.3em] uppercase mb-4 block">
            Regional Presence
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
            Bridging Excellence <br /> Across the <span className="text-gradient">GCC & MENA.</span>
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-xl">
            With our headquarters in the UAE, we provide rapid-response engineering support 
            and machinery distribution across all major industrial hubs in the Middle East.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {regions.map((region) => (
              <div key={region.name} className="glass-card p-6 flex flex-col gap-1 hover:border-safety-orange/50">
                <div className="flex items-center gap-2 text-white font-bold">
                  <MapPin size={16} className="text-safety-orange" />
                  {region.name}
                </div>
                <div className="text-white/40 text-xs font-medium uppercase tracking-widest pl-6">
                  {region.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full relative">
          <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden glass-panel border border-white/10 p-4 md:p-12 flex items-center justify-center">
            {/* Minimalist Tech Map Representation */}
            <div className="relative w-full h-full bg-industrial-blue/10 rounded-2xl flex items-center justify-center overflow-hidden">
              <Globe size={100} className="text-white/5 animate-pulse md:hidden" />
              <Globe size={160} className="text-white/5 animate-pulse hidden md:block" />
              
              {/* Dynamic Map Pins */}
              {regions.map((region, i) => (
                <motion.div
                  key={region.name}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  viewport={{ once: true }}
                  style={{ left: region.x, top: region.y }}
                  className="absolute"
                >
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-safety-orange/30 animate-ping rounded-full scale-110 md:scale-150" />
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-safety-orange rounded-full shadow-[0_0_15px_rgba(243,156,18,0.5)]" />
                  </div>
                </motion.div>
              ))}
              
              {/* Tech lines - Hidden on mobile for clarity */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 hidden md:block">
                <motion.path
                  id="line-path"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                  d="M700 250 L600 225 L400 225 L550 200"
                  fill="none"
                  stroke="#F39C12"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
            
            {/* Labels overlay */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8 flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-safety-orange rounded-full" />
              <span className="text-[8px] md:text-[10px] text-white/60 font-black uppercase tracking-widest leading-none">Network: Optimal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
