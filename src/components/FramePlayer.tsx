"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth the scroll progress with an Apple-style spring (high damping, moderate stiffness)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 40,
    restDelta: 0.0001
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [1, frameCount]);

  useEffect(() => {
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const promises = [];

      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const frameNum = i.toString().padStart(3, "0");
        img.src = `${framePath}/ezgif-frame-${frameNum}.jpg`;
        
        promises.push(new Promise((resolve) => { img.onload = resolve; }));
        loadedImages.push(img);
      }

      await Promise.all(promises);
      setImages(loadedImages);
      setIsLoaded(true);
    };

    preloadImages();
  }, [framePath, frameCount]);

  useEffect(() => {
    const render = () => {
      if (!canvasRef.current || images.length === 0) return;
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;

      const index = Math.min(Math.max(Math.floor(frameIndex.get()), 1), frameCount);
      const img = images[index - 1] || images[0];

      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    const unsubscribe = frameIndex.on("change", render);
    render();

    window.addEventListener("resize", render);
    return () => {
      unsubscribe();
      window.removeEventListener("resize", render);
    };
  }, [images, frameIndex, frameCount]);

  return (
    <div className="absolute inset-0 w-full h-full">
      {!isLoaded && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#0f171c]">
          <div className="w-12 h-12 border-2 border-safety-orange border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <canvas
        ref={canvasRef}
        style={{ filter: `brightness(${brightness})` }}
        className="w-full h-full object-cover"
      />
    </div>
  );
}


