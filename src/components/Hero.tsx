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
    stiffness: 40, 
    damping: 60,
    restDelta: 0.001
  });

  const clipWidth = useTransform(smoothProgress, [0, 0.4], [60, 100]);
  const scale = useTransform(smoothProgress, [0, 0.4], [1.1, 1]);
  const opacity = useTransform(smoothProgress, [0.8, 1], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[300vh] w-full bg-[#0f171c]"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            opacity,
            scale,
            willChange: "transform",
          }}
          className="relative overflow-hidden bg-black"
        >
          <div className="absolute inset-0 z-0">
            <FramePlayer 
              framePath="/frames/set1" 
              frameCount={240} 
              containerRef={containerRef}
              brightness={0.7}
            />
          </div>
          
          {/* Dynamic Smoke Effects */}
          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            <motion.div 
              animate={{ 
                x: [-100, 100], 
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] blur-[120px]"
            />
            <motion.div 
              animate={{ 
                x: [100, -100], 
                opacity: [0.1, 0.3, 0.1],
                scale: [1.2, 1, 1.2]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-1/2 -right-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)] blur-[100px]"
            />
            
            {/* Atmospheric Fog */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-white/[0.02] to-black/40 mix-blend-overlay" />
          </div>

          {/* Top-Left Hero Title */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute top-10 left-6 md:top-20 md:left-20 pointer-events-none z-20"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-[0.1em] uppercase drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] border-l-4 border-safety-orange pl-4 md:pl-6 leading-tight">
              Engineering <br /> <span className="text-safety-orange">Excellence.</span>
            </h1>
            <p className="text-white/40 text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-bold mt-2 md:mt-4 ml-4 md:ml-6">
              Industrial Automation Units
            </p>
          </motion.div>

          {/* Cinematic Vignette */}
          <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,1)] pointer-events-none z-30" />
        </motion.div>

        {/* HUD Elements that fade in after frame expands */}
        <motion.div 
          style={{ opacity: useTransform(smoothProgress, [0.4, 0.6], [0, 1]) }}
          className="absolute bottom-12 left-12 flex flex-col gap-2 pointer-events-none"
        >
          <div className="flex items-center gap-2 text-safety-orange">
            <div className="w-2 h-2 bg-safety-orange animate-pulse rounded-full" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Shot Blast Sequence [01A]</span>
          </div>
          <div className="text-white/20 text-[10px] uppercase tracking-widest font-bold">
            X-AXIS: CALIBRATED | Y-AXIS: OPTIMAL
          </div>
        </motion.div>
      </div>
    </section>
  );
}
