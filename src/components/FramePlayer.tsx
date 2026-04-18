"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion } from "framer-motion";

interface FramePlayerProps {
  framePath: string;
  frameCount: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  brightness?: number;
}

export default function FramePlayer({ 
  framePath, 
  frameCount, 
  containerRef,
  brightness = 0.4 
}: FramePlayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Raw scroll progress for instantaneous response
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const promises = [];

      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const frameNum = i.toString().padStart(3, "0");
        img.src = `${framePath}/ezgif-frame-${frameNum}.jpg`;
        
        promises.push(new Promise((resolve) => { 
          img.onload = resolve;
          img.onerror = resolve; // Continue even if one fails
        }));
        loadedImages.push(img);
      }

      await Promise.all(promises);
      setImages(loadedImages);
      setIsLoaded(true);
    };

    preloadImages();
  }, [framePath, frameCount]);

  const renderFrame = (progress: number) => {
    if (!canvasRef.current || images.length === 0) return;
    const ctx = canvasRef.current.getContext("2d", { alpha: false, desynchronized: true });
    if (!ctx) return;

    const index = Math.min(Math.max(Math.floor(progress * (frameCount - 1)), 0), frameCount - 1);
    const img = images[index];
    if (!img || !img.complete) return;

    const canvas = canvasRef.current;
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Resize only when needed
    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width - img.width * scale) / 2;
    const y = (canvas.height - img.height * scale) / 2;
    
    ctx.imageSmoothingEnabled = false; // Sharper industrial look
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  // Trigger render on every motion value update (0 latency)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isLoaded) {
      renderFrame(latest);
    }
  });

  // Initial render once loaded
  useEffect(() => {
    if (isLoaded) {
      renderFrame(scrollYProgress.get());
    }
  }, [isLoaded]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => renderFrame(scrollYProgress.get());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, isLoaded]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      {!isLoaded && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#0f171c]">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-1 bg-safety-orange mb-4 shadow-[0_0_20px_rgba(243,156,18,0.5)]" 
          />
          <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em]">Initializing Systems</span>
        </div>
      )}
      
      <canvas
        ref={canvasRef}
        style={{ 
          filter: `brightness(${brightness}) grayscale(0.2) contrast(1.1)`,
          willChange: "transform"
        }}
        className="w-full h-full"
      />

      {/* Creative Overlays: Digital Grid & HUD Scanlines */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Technical Border Frame */}
      <div className="absolute inset-4 border border-white/5 pointer-events-none z-20">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-safety-orange/40" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-safety-orange/40" />
      </div>
    </div>
  );
}


