"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2500&auto=format&fit=crop",
];

export function Hero() {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Autoplay Carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  const prevImage = () => setIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-[#000000] group">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image 
              src={HERO_IMAGES[index]} 
              alt="Renaissance Decor Plaster Surface" 
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#000000]/30" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Overlay Content */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 flex flex-col justify-end px-6 py-12 md:px-12 md:py-16 text-[var(--color-parchment)] z-10 pointer-events-none"
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }}
          className="font-serif text-4xl md:text-5xl lg:text-[64px] leading-[1.15] w-full max-w-4xl"
          style={{ letterSpacing: '0.04em' }}
        >
          Twenty Years.<br/>Every surface applied by hand.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
          className="font-sans text-[10px] md:text-xs tracking-[0.2em] font-light uppercase mt-6 md:mt-8"
        >
          Venetian Plaster · Micro Cement · Clay · Metal
        </motion.p>
      </motion.div>

      {/* Carousel Controls */}
      <div className="absolute inset-x-0 bottom-1/2 md:bottom-12 md:top-auto px-4 md:px-12 flex justify-between md:justify-end items-center gap-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
        <button 
          onClick={prevImage}
          className="p-3 rounded-full bg-[var(--color-parchment)]/10 text-[var(--color-parchment)] hover:bg-[var(--color-parchment)]/30 backdrop-blur-md transition-all active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
        </button>
        <button 
          onClick={nextImage}
          className="p-3 rounded-full bg-[var(--color-parchment)]/10 text-[var(--color-parchment)] hover:bg-[var(--color-parchment)]/30 backdrop-blur-md transition-all active:scale-95"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6 stroke-[1.5]" />
        </button>
      </div>
    </section>
  );
}
