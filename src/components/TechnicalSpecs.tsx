"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Timer, BarChart3 } from "lucide-react";

const specs = [
  {
    category: "Shot Blasting",
    features: [
      { name: "Turbine Logic", value: "Smart-Cycle Technology", icon: <Cpu size={16} /> },
      { name: "Abrasive Control", value: "Precision flow (±0.5%)", icon: <Zap size={16} /> },
      { name: "Energy Recovery", value: "92% Efficiency Rating", icon: <Timer size={16} /> },
    ]
  },
  {
    category: "Brush Automation",
    features: [
      { name: "Fiber Filling", value: "1,200 tufts/min", icon: <Cpu size={16} /> },
      { name: "Axis Mastery", value: "5-Axis CNC Integration", icon: <Zap size={16} /> },
      { name: "Finishing", value: "Integrated Trimming", icon: <BarChart3 size={16} /> },
    ]
  }
];

export default function TechnicalSpecs() {
  return (
    <section className="py-32 px-6 bg-[#0f171c]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {specs.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-safety-orange/5 blur-[60px] rounded-full group-hover:bg-safety-orange/10 transition-colors" />
              
              <h3 className="text-[10px] md:text-sm font-bold text-safety-orange uppercase tracking-[.4em] mb-6 md:mb-10">
                {group.category} Specs
              </h3>
              
              <div className="space-y-8">
                {group.features.map((feature) => (
                  <div key={feature.name} className="flex items-center justify-between group/item">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 group-hover/item:text-safety-orange transition-colors">
                        {feature.icon}
                      </div>
                      <span className="text-white/60 font-medium">{feature.name}</span>
                    </div>
                    <span className="text-white font-black tracking-tight">{feature.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                <div className="text-[10px] text-white/20 uppercase tracking-widest font-bold">Protocol v4.2</div>
                <div className="flex gap-1">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-1 h-1 bg-safety-orange rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
