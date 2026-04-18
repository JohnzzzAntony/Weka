"use client";

import { motion } from "framer-motion";

const brands = [
  "Boucherie",
  "Wöhler",
  "Donaldson",
  "Guhring",
  "Gietart",
  "Boucherie",
  "Wöhler",
  "Donaldson",
  "Guhring",
  "Gietart",
];

export default function BrandMarquee() {
  return (
    <div className="py-20 bg-[#0f171c] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/30 text-center block">
          Authorized Industrial Partners
        </span>
      </div>
      
      <div className="flex relative items-center">
        <motion.div
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-10 md:gap-20 items-center whitespace-nowrap"
        >
          {brands.map((brand, i) => (
            <div
              key={i}
              className="text-2xl sm:text-4xl md:text-6xl font-black text-white/10 hover:text-safety-orange/50 transition-colors cursor-default tracking-tighter"
            >
              {brand.toUpperCase()}
            </div>
          ))}
          {/* Repeat for seamless loop */}
          {brands.map((brand, i) => (
            <div
              key={`repeat-${i}`}
              className="text-2xl sm:text-4xl md:text-6xl font-black text-white/10 hover:text-safety-orange/50 transition-colors cursor-default tracking-tighter"
            >
              {brand.toUpperCase()}
            </div>
          ))}
        </motion.div>
        
        {/* Gradient overlays for smooth fade edges */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0f171c] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0f171c] to-transparent z-10" />
      </div>
    </div>
  );
}
