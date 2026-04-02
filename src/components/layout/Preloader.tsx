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
          {/* Background Layer (Fades at stage 1) */}
          <motion.div 
            className="absolute inset-0 bg-[var(--color-charcoal)]"
            initial={{ opacity: 1 }}
            animate={{ opacity: stage === 1 ? 0 : 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          
          {/* Content Layer (Exits at stage 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
            className="relative z-10 w-64 h-24 md:w-96 md:h-32"
          >
            <Image
              src="/images/logo-light.png"
              alt="Renaissance Decor Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
