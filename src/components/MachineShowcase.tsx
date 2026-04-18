"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import FramePlayer from "./FramePlayer";

export default function MachineShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, { 
    stiffness: 40, 
    damping: 60,
    restDelta: 0.0001
  });

  const opacity_1 = useTransform(smoothScroll, [0, 0.1, 0.35, 0.4], [0, 1, 1, 0]);
  const opacity_2 = useTransform(smoothScroll, [0.45, 0.5, 0.75, 0.8], [0, 1, 1, 0]);
  const opacity_3 = useTransform(smoothScroll, [0.85, 0.9, 0.95, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[500vh] w-full bg-[#0f171c] overflow-hidden"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <FramePlayer 
          framePath="/frames/brush" 
          frameCount={240} 
          containerRef={containerRef} 
          brightness={0.4}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0f171c] via-transparent to-[#0f171c]/50" />
        
        {/* Stage 1: Brush Mastery */}
        <motion.div 
          style={{ opacity: opacity_1, y: useTransform(smoothScroll, [0, 0.4], [50, -50]) }}
          className="absolute inset-0 z-10 max-w-7xl mx-auto px-6 flex items-center"
        >
          <div className="max-w-2xl space-y-6 md:space-y-8">
            <span className="text-safety-orange font-black text-[8px] md:text-xs tracking-[0.5em] uppercase px-3 py-1.5 md:px-4 md:py-2 border border-safety-orange/20 rounded-full inline-block backdrop-blur-md">
              Process Phase 01
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
              Automated <br />
              <span className="text-gradient">Brush Mastery.</span>
            </h2>
            <p className="text-white/40 text-sm sm:text-lg md:text-xl leading-relaxed font-medium">
              Revolutionizing industrial tufting with high-inertia fiber placement. 
              Our modules achieve sub-millimeter trim accuracy.
            </p>
          </div>
        </motion.div>

        {/* Stage 2: Integration & Control */}
        <motion.div 
          style={{ opacity: opacity_2, y: useTransform(smoothScroll, [0.45, 0.8], [50, -50]) }}
          className="absolute inset-0 z-10 max-w-7xl mx-auto px-6 flex items-center justify-end"
        >
          <div className="max-w-2xl space-y-6 md:space-y-8 text-right flex flex-col items-end">
            <span className="text-safety-orange font-black text-[8px] md:text-xs tracking-[0.5em] uppercase px-3 py-1.5 md:px-4 md:py-2 border border-safety-orange/20 rounded-full inline-block backdrop-blur-md">
              Process Phase 02
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
              Sync-System <br />
              <span className="text-gradient">Integration.</span>
            </h2>
            <p className="text-white/40 text-sm sm:text-lg md:text-xl leading-relaxed font-medium max-w-[280px] sm:max-w-lg">
              Every IND EXP. machine is built on a unified digital spine for 24/7 reliability 
              in harsh industrial environments.
            </p>
          </div>
        </motion.div>

        {/* Stage 3: Operational Excellence */}
        <motion.div 
          style={{ opacity: opacity_3, y: useTransform(smoothScroll, [0.85, 1], [50, -50]) }}
          className="absolute inset-x-0 bottom-20 z-20 max-w-7xl mx-auto px-6 flex flex-col items-center text-center"
        >
          <div className="space-y-6">
            <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter">
              Ready for <span className="text-safety-orange">Industry 4.0.</span>
            </h3>
            <p className="text-white/30 text-xs md:text-sm uppercase tracking-[0.4em] font-bold">
              Full Lifecycle Maintenance | Remote Diagnostics | Global Support
            </p>
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
