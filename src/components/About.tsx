"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 bg-[#0f171c]">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-industrial-blue/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden glass-panel p-4">
            <Image
              src="/engineering_facility_1776527680071.png"
              alt="IND EXP. Engineering Facility"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          {/* Badge */}
          <div className="absolute -bottom-6 -right-6 glass-panel p-8 rounded-2xl border border-white/20">
            <div className="text-4xl font-black text-safety-orange">30+</div>
            <div className="text-xs font-bold text-white uppercase tracking-widest mt-1">Years of<br />Expertise</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-safety-orange font-bold text-sm tracking-[0.3em] uppercase mb-4 block">
            Our Legacy
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
            From Engineering Roots to <span className="text-gradient">Global Solutions.</span>
          </h2>
          
          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <p>
              Founded with a vision for precision, IND EXP. has spent three decades 
              mastering the intricacies of industrial engineering. Our transition to the UAE 
              marks a new chapter in our mission to provide the Middle East with 
              high-performance Shot Blasting and Brush Automation solutions.
            </p>
            <p>
              We specialize in sectors where surface integrity meets automated volume: 
              <span className="text-white font-bold"> Metal Finishing, Industrial Cleaning, and Aviation Maintenance.</span> 
              Our commitment goes beyond selling machines; we deliver productivity, 
              reliability, and engineering excellence that stands the test of time.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-1">1996</div>
              <div className="text-sm text-white/40 uppercase tracking-widest font-bold">Inception</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">UAE</div>
              <div className="text-sm text-white/40 uppercase tracking-widest font-bold">New HQ</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
