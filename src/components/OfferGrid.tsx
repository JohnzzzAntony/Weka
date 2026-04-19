"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Settings, Wrench, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const offers = [
  {
    title: "Surface Preparation",
    description: "High-intensity shot blasting systems for automated metal descaling and cleaning.",
    icon: <Zap className="text-safety-orange" size={24} />,
    image: "/cnc_machine_hero_1776527664550.png",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Brush Automation",
    description: "High-speed tufting and fiber filling modules for industrial components.",
    icon: <Settings className="text-safety-orange" size={24} />,
    image: "/used_cnc_refurbished_1776527716037.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Global Support",
    description: "Multi-regional engineering teams for installation and maintenance.",
    icon: <ShieldCheck className="text-safety-orange" size={24} />,
    className: "md:col-span-1 md:row-span-2 bg-industrial-blue/20",
  },
  {
    title: "Technical Spares",
    description: "Precision-engineered fibers, wires, and shot blast turbine components.",
    icon: <Wrench className="text-safety-orange" size={24} />,
    image: "/cnc_tools_detail_1776527698663.png",
    className: "md:col-span-1 md:row-span-1",
  },
];

export default function OfferGrid() {
  return (
    <section id="solutions" className="py-32 px-6 bg-slate-gray/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-safety-orange font-bold text-sm tracking-[0.3em] uppercase mb-4 block">
            The Offering
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
            Precision Solutions <br /> For <span className="text-gradient">Industrial Mastery</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:auto-rows-[250px]">
          {offers.map((offer, idx) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group relative rounded-3xl overflow-hidden glass-card p-6 md:p-8 flex flex-col justify-end min-h-[300px] md:min-h-0",
                offer.className
              )}
            >
              {offer.image && (
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700 -z-10 brightness-50"
                />
              )}
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center mb-6">
                  {offer.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{offer.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-[200px]">
                  {offer.description}
                </p>
                
                <button className="mt-6 flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group/btn">
                  Learn More 
                  <span className="w-6 h-[1px] bg-safety-orange transition-all group-hover/btn:w-10"></span>
                </button>
              </div>

              {/* Decorative edge flash */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
