"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-slate-gray/30 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group relative z-[60]">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-safety-orange flex items-center justify-center rounded-sm rotate-45 group-hover:scale-110 transition-transform flex-shrink-0">
            <span className="text-white font-black -rotate-45 text-lg md:text-xl">I</span>
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tighter text-white whitespace-nowrap">
            IND <span className="text-safety-orange">EXP.</span>
          </span>
        </Link>

        {/* Desktop Nav - Explicitly hidden on small screens */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[10px] uppercase tracking-[0.3em] font-black text-white/70 hover:text-safety-orange transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact">
            <button className="bg-safety-orange px-6 py-2.5 rounded-full text-white font-black text-[10px] uppercase tracking-widest hover:bg-safety-orange/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-safety-orange/20">
              Contact
            </button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 relative z-[60]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[50] bg-[#0f171c]/98 backdrop-blur-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col h-full p-8 pt-32 relative">
              {/* Background Accent */}
              <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-safety-orange/5 blur-[120px] rounded-full pointer-events-none" />
              
              <div className="flex flex-col gap-6 md:gap-8 relative z-10">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1, duration: 0.5 }}
                  >
                    <Link
                      href={item.href}
                      className="text-5xl font-black text-white uppercase tracking-tighter hover:text-safety-orange transition-colors inline-block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8"
                >
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="bg-safety-orange w-full py-6 rounded-xl text-white font-black text-xl uppercase tracking-widest shadow-2xl shadow-safety-orange/20 active:scale-95 transition-transform">
                      Contact Now
                    </button>
                  </Link>
                </motion.div>
              </div>
              
              <div className="mt-auto border-t border-white/5 pt-12 relative z-10">
                <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] block mb-4">Weka Engineering & Tools</span>
                <p className="text-white/40 text-xs leading-relaxed max-w-xs uppercase tracking-widest font-bold">
                  High-Inertia Industrial Automation <br /> 
                  <span className="text-white/60">Ready for Global Distribution</span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
