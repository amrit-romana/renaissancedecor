"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Preloader() {
  const [stage, setStage] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 2200); // BG starts to fade at 2.2s
    const t2 = setTimeout(() => setStage(2), 2800); // Logo fades and unmounts
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <AnimatePresence>
      {stage < 2 && (
        <motion.div
          key="preloader-container"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center pointer-events-none"
        >
          {/* Background Layer (Fades at stage 1) using precisely #000000 as requested */}
          <motion.div 
            className="absolute inset-0 bg-[#000000]"
            initial={{ opacity: 1 }}
            animate={{ opacity: stage === 1 ? 0 : 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          
          {/* Content Layer (Exits at stage 2) - Fades in slowly like HFL */}
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center justify-center gap-8 md:gap-12"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-36 h-36 md:w-56 md:h-56 mb-4 md:mb-6"
            >
              <Image
                src="/images/crest-white.png"
                alt="Renaissance Decor Emblem"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.0, delay: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="font-sans text-xs md:text-sm lg:text-base text-[var(--color-parchment)] tracking-[0.4em] md:tracking-[0.5em] uppercase font-bold text-center"
              >
                RENAISSANCE DECOR
              </motion.h1>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
