"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function CollectionsHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 40,
    restDelta: 0.001
  });

  const scale = useTransform(smoothScroll, [0, 1], [1, 1.2]);
  const opacity = useTransform(smoothScroll, [0, 0.5], [1, 0]);
  const textY = useTransform(smoothScroll, [0, 1], [0, -100]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[120vh] w-full bg-[#0a0f12] overflow-hidden"
    >
      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/cnc_machine_hero_1776527664550.png"
          alt="Industrial Collection Hero"
          fill
          className="object-cover brightness-50"
          priority
        />
        {/* Apple-style gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f171c]/20 to-[#0f171c]" />
      </motion.div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-[2px] bg-safety-orange" />
            <span className="text-safety-orange font-black text-xs tracking-[0.6em] uppercase">Product Portfolio 2024</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none">
            INDUSTRIAL <br /> 
            <span className="text-gradient">COLLECTIONS.</span>
          </h1>
          <p className="text-white/40 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
            Exploration of machinery modules designed for high-inertia production 
            and sub-millimeter precision.
          </p>
        </motion.div>
      </div>

      {/* Floating UI Elements (Apple Style) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-24 z-20 flex gap-12"
      >
        <div className="flex flex-col gap-1">
          <span className="text-white/20 text-[9px] font-black uppercase tracking-widest">Efficiency</span>
          <span className="text-white text-xl font-bold tracking-tight">98.4%</span>
        </div>
        <div className="w-[1px] h-10 bg-white/10" />
        <div className="flex flex-col gap-1">
          <span className="text-white/20 text-[9px] font-black uppercase tracking-widest">Precision</span>
          <span className="text-white text-xl font-bold tracking-tight">±0.001mm</span>
        </div>
      </motion.div>
    </section>
  );
}
