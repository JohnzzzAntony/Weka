"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import CollectionsHero from "@/components/CollectionsHero";

const categories = [
  {
    title: "Surface Preparation",
    desc: "Advanced shot blasting and abrasive solutions.",
    image: "/engineering_facility_1776527680071.png",
  },
  {
    title: "CNC Machining",
    desc: "Precision turning and milling centers.",
    image: "/cnc_machine_hero_1776527664550.png",
  },
  {
    title: "Tooling Systems",
    desc: "Cutting edge performance for heavy industry.",
    image: "/cnc_tools_detail_1776527698663.png",
  },
  {
    title: "Automation Units",
    desc: "Seamless robotic integration for high-speed tufting.",
    image: "/used_cnc_refurbished_1776527716037.png",
  }
];

export default function Collections() {
  return (
    <main className="min-h-screen bg-[#0f171c]">
      <Header />
      
      <CollectionsHero />

      {/* Grid Section */}
      <section className="py-24 px-6 relative z-10 -mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden glass-panel border border-white/5"
            >
              <img 
                src={cat.image} 
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f171c] via-[#0f171c]/20 to-transparent" />
              
              <div className="absolute bottom-10 left-10 p-2">
                <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">{cat.title}</h3>
                <p className="text-white/40 text-sm max-w-[280px] font-medium leading-relaxed">
                  {cat.desc}
                </p>
                <button className="mt-6 flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-widest group/btn">
                  View Specifications 
                  <div className="w-8 h-[1px] bg-safety-orange transition-all group-hover/btn:w-12" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
