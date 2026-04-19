"use client";

import { motion } from "framer-motion";
import { Gauge, HeartHandshake, History, Microscope } from "lucide-react";

const values = [
  {
    title: "Engineering Precision",
    description: "Sub-micron accuracy for the most demanding aerospace and die-making applications.",
    icon: <Microscope className="w-10 h-10" />,
  },
  {
    title: "30 Years Reliability",
    description: "Three decades of field-proven stability and mechanical integrity in every solution.",
    icon: <History className="w-10 h-10" />,
  },
  {
    title: "Support Excellence",
    description: "Rapid-response service team and comprehensive lifecycle preventive maintenance.",
    icon: <HeartHandshake className="w-10 h-10" />,
  },
  {
    title: "High-Performance",
    description: "Integrated software and hardware optimized for maximum cycle-time efficiency.",
    icon: <Gauge className="w-10 h-10" />,
  },
];

export default function ValueProps() {
  return (
    <section className="py-32 px-6 bg-slate-gray/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 md:p-10 flex flex-col items-center text-center group hover:bg-white/5 active:scale-[0.98] transition-all"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 flex items-center justify-center text-safety-orange mb-6 md:mb-8 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 border border-white/5 group-hover:border-safety-orange/30">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-safety-orange transition-colors">
                {v.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
