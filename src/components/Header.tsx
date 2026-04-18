"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

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
        {/* Logo Placeholder */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-safety-orange flex items-center justify-center rounded-sm rotate-45">
            <span className="text-white font-black -rotate-45 text-xl">I</span>
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">
            IND <span className="text-safety-orange">EXP.</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Solutions", "Used CNC", "Service", "Regional"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium text-white/70 hover:text-safety-orange transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="bg-safety-orange px-6 py-2.5 rounded-full text-white font-semibold text-sm hover:bg-safety-orange/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-safety-orange/20">
            Contact IND EXP.
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 glass-panel bg-slate-gray/95 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden">
          {["Solutions", "Used CNC", "Service", "Regional"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-lg font-medium text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-safety-orange px-6 py-3 rounded-md text-white font-semibold text-lg">
            Contact IND EXP.
          </button>
        </div>
      )}
    </header>
  );
}
