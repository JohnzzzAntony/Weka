"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import FramePlayer from "./FramePlayer";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 300, 
    damping: 30,
    restDelta: 0.0001
  });

  const scale = useTransform(smoothProgress, [0, 0.4], [1.05, 1]);
  const opacity = useTransform(smoothProgress, [0.8, 1], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[300vh] w-full bg-[#0a0f12]"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            opacity,
            scale,
            willChange: "transform, opacity",
          }}
          className="relative overflow-hidden bg-black"
        >
          <div className="absolute inset-0 z-0">
            <FramePlayer 
              framePath="/frames/set1" 
              frameCount={240} 
              containerRef={containerRef}
              brightness={0.8}
            />
          </div>
          
          {/* Advanced Atmospheric Engine */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-tr from-safety-orange/5 via-transparent to-white/5 opacity-50" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/40 to-transparent" />
            
            {/* Dynamic Light Streaks */}
            <motion.div 
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-safety-orange/20 to-transparent blur-sm"
            />
          </div>

          {/* Premium Industrial Title */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-1/2 -translate-y-1/2 left-6 md:left-24 pointer-events-none z-20"
          >
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 md:w-10 h-[2px] bg-safety-orange" />
                <span className="text-safety-orange font-black text-[9px] md:text-[10px] tracking-[0.6em] uppercase">Status: Operational</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] whitespace-nowrap">
                PRECISION <br /> <span className="text-gradient">ENGINEERING.</span>
              </h1>
              <div className="mt-4 md:mt-6 p-4 md:p-6 glass-panel border border-white/5 backdrop-blur-sm max-w-[280px] md:max-w-sm">
                <p className="text-white/40 text-[9px] md:text-[11px] uppercase tracking-[0.3em] font-medium leading-relaxed">
                  Next-generation industrial automation for critical infrastructure modules.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Technical HUD Overlay (Active on scroll) */}
          <motion.div 
            style={{ 
              opacity: useTransform(smoothProgress, [0.05, 0.15, 0.85, 0.95], [0, 1, 1, 0]),
              translateY: useTransform(smoothProgress, [0, 1], [0, -50])
            }}
            className="absolute top-1/2 right-6 md:right-24 -translate-y-1/2 hidden md:flex flex-col gap-6 md:gap-8 pointer-events-none z-20"
          >
            {[
              { label: "RPM", val: "14,200" },
              { label: "FRIC", val: "0.002" },
              { label: "TEMP", val: "42°C" }
            ].map((stat) => (
              <div key={stat.label} className="text-right">
                <div className="text-white/20 text-[8px] md:text-[9px] font-black tracking-widest uppercase">{stat.label}</div>
                <div className="text-white text-xl md:text-2xl font-black tabular-nums">{stat.val}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
