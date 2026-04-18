import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MachineShowcase from "@/components/MachineShowcase";
import OfferGrid from "@/components/OfferGrid";
import BrandMarquee from "@/components/BrandMarquee";
import RegionalMap from "@/components/RegionalMap";
import TechnicalSpecs from "@/components/TechnicalSpecs";
import MachineGallery from "@/components/MachineGallery";
import ValueProps from "@/components/ValueProps";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f171c] selection:bg-safety-orange selection:text-white">
      <Header />
      
      <div className="relative">
        <Hero />
        
        {/* Transitional Shadow to bridge Hero and About */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f171c] to-transparent z-20 pointer-events-none" />
      </div>

      <div className="relative z-10">
        <About />
        <MachineShowcase />
        <TechnicalSpecs />
        <MachineGallery />
        <BrandMarquee />
        <OfferGrid />
        <ValueProps />
        <RegionalMap />
        <Footer />
      </div>

      {/* Global Background Glow Pattern */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50 overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-industrial-blue/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-safety-orange/5 blur-[200px] rounded-full" />
      </div>
    </main>
  );
}
