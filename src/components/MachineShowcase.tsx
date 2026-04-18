"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import FramePlayer from "./FramePlayer";

export default function MachineShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30,
    restDelta: 0.0001
  });

  // Balanced transitions for a 500vh scroll
  const opacity_1 = useTransform(smoothScroll, [0, 0.05, 0.25, 0.3], [0, 1, 1, 0]);
  const opacity_2 = useTransform(smoothScroll, [0.35, 0.4, 0.65, 0.7], [0, 1, 1, 0]);
  const opacity_3 = useTransform(smoothScroll, [0.75, 0.8, 0.95, 1], [0, 1, 1, 1]); // Persist at end

  return (
    <section 
      ref={containerRef} 
      className="relative h-[600vh] w-full bg-[#0a0f12] overflow-hidden"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <FramePlayer 
          framePath="/frames/brush" 
          frameCount={240} 
          containerRef={containerRef} 
          brightness={0.6}
        />

        {/* Technical Grid Overlay to fill space */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f171c] via-transparent to-[#0f171c]" />
        
        {/* Stage 1: Brush Mastery */}
        <motion.div 
          style={{ opacity: opacity_1, y: useTransform(smoothScroll, [0, 0.3], [50, -50]) }}
          className="absolute inset-0 z-10 max-w-7xl mx-auto px-6 flex items-center"
        >
          <div className="max-w-2xl space-y-6 md:space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-safety-orange" />
              <span className="text-safety-orange font-black text-[10px] tracking-[0.5em] uppercase">SYSTEM_DEPLOYMENT: 01</span>
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.9]">
              AUTOMATED <br />
              <span className="text-gradient">BRUSH MASTERY.</span>
            </h2>
            <p className="text-white/40 text-sm sm:text-lg md:text-xl leading-relaxed font-medium max-w-md">
              Revolutionizing industrial tufting with high-inertia fiber placement. 
              Our modules achieve sub-millimeter trim accuracy.
            </p>
          </div>
        </motion.div>

        {/* Stage 2: Integration & Control */}
        <motion.div 
          style={{ opacity: opacity_2, y: useTransform(smoothScroll, [0.35, 0.7], [50, -50]) }}
          className="absolute inset-0 z-10 max-w-7xl mx-auto px-6 flex items-center justify-end"
        >
          <div className="max-w-2xl space-y-6 md:space-y-8 text-right flex flex-col items-end">
             <div className="flex items-center gap-3">
              <span className="text-safety-orange font-black text-[10px] tracking-[0.5em] uppercase">INTEGRATION_LEVEL: ALPHA</span>
              <div className="w-8 h-[1px] bg-safety-orange" />
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.9]">
              SYNC-SYSTEM <br />
              <span className="text-gradient">INTEGRATION.</span>
            </h2>
            <p className="text-white/40 text-sm sm:text-lg md:text-xl leading-relaxed font-medium max-w-md">
              Every IND EXP. machine is built on a unified digital spine for 24/7 reliability 
              in harsh industrial environments.
            </p>
          </div>
        </motion.div>

        {/* Stage 3: Operational Excellence */}
        <motion.div 
          style={{ opacity: opacity_3, y: useTransform(smoothScroll, [0.75, 1], [50, 0]) }}
          className="absolute inset-x-0 bottom-24 z-20 max-w-7xl mx-auto px-6 flex flex-col items-center text-center"
        >
          <div className="space-y-8 glass-panel p-12 border border-white/5 backdrop-blur-xl">
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              READY FOR <span className="text-safety-orange">INDUSTRY 4.0.</span>
            </h3>
            <p className="text-white/30 text-xs md:text-sm uppercase tracking-[0.6em] font-bold">
              Full Lifecycle Maintenance | Remote Diagnostics | Global Support
            </p>
            <div className="flex justify-center gap-12 mt-8">
              <div className="text-left">
                <div className="text-safety-orange font-black text-2xl">99.9%</div>
                <div className="text-white/20 text-[8px] font-black uppercase">Uptime Guarantee</div>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="text-left">
                <div className="text-safety-orange font-black text-2xl">0.05s</div>
                <div className="text-white/20 text-[8px] font-black uppercase">Response Latency</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dynamic HUD decoration */}
        <motion.div 
          style={{ opacity: useTransform(smoothScroll, [0.1, 0.9], [0, 0.2]) }}
          className="absolute inset-x-12 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none"
        >
          <div className="text-[8px] md:text-[10px] text-white space-y-2 font-mono opacity-50">
            <div>[ ROTATION_V: 12,000 RPM ]</div>
            <div>[ HEAT_SIG: OPTIMAL ]</div>
            <div>[ TORQUE: 18.4 NM ]</div>
          </div>
          <div className="text-[8px] md:text-[10px] text-white space-y-2 font-mono text-right opacity-50">
            <div>[ FIBER_DENSITY: ALPHA ]</div>
            <div>[ STREAM_HEALTH: 100% ]</div>
            <div>[ ACTIVE_COOLING: YES ]</div>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent -translate-x-1/2" />
    </section>
  );
}
