import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OfferGrid from "@/components/OfferGrid";
import BrandMarquee from "@/components/BrandMarquee";
import RegionalMap from "@/components/RegionalMap";
import TechnicalSpecs from "@/components/TechnicalSpecs";
import MachineGallery from "@/components/MachineGallery";
import ValueProps from "@/components/ValueProps";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IND EXP | WEKA MODERN",
  description: "GCC's leading provider of automated shot blasting, CNC machining, and industrial brush solutions. Engineering mastery since 1996.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f171c] selection:bg-safety-orange selection:text-white relative">
      {/* Global Aesthetics */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] grayscale bg-[url('https://www.transparenttextures.com/patterns/simple-dashed.png')]" />
      
      <Header />
      
      <div className="relative">
        <Hero />
        
        {/* Transitional Bridge: Hero -> About */}
        <div className="absolute -bottom-1 left-0 w-full h-64 bg-gradient-to-t from-[#0f171c] to-transparent z-20 pointer-events-none" />
      </div>

      <div className="relative z-10 bg-[#0f171c]">
        <About />
        
        <div className="relative bg-[#0f171c]">
          <TechnicalSpecs />
          <MachineGallery />
          <BrandMarquee />
          <OfferGrid />
          <ValueProps />
          <RegionalMap />
          <Footer />
        </div>
      </div>

      {/* Global Background Glow Pattern */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50 overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-industrial-blue/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-10%] w-[900px] h-[900px] bg-safety-orange/5 blur-[200px] rounded-full" />
      </div>
    </main>
  );
}
