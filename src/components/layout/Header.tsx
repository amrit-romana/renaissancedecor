"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Who We Are", href: "/about" },
  { name: "Finishes", href: "/materials" },
  { name: "Projects", href: "/projects" },
  { name: "Shop", href: "/shop" },
  { name: "Enquire", href: "/enquire" },
];

export function Header({ theme = "light" }: { theme?: "light" | "dark" }) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Update background color based on position
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide/show navbar on scroll direction
    if (latest > 100 && latest > previous && !menuOpen) {
      setIsHidden(true); // scrolling down
    } else if (latest < previous || latest < 50) {
      setIsHidden(false); // scrolling up
    }
  });

  const textColorClass = isScrolled
    ? "text-[var(--color-charcoal)]"
    : theme === "dark" ? "text-[var(--color-charcoal)]" : "text-[var(--color-parchment)]";

  return (
    <>
      <motion.header
        animate={{ y: isHidden ? "-100%" : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-40 px-6 py-5 md:px-12 flex justify-between items-center transition-colors duration-700 pointer-events-none ${
          isScrolled ? "bg-[var(--color-parchment)] shadow-sm py-4" : "bg-transparent"
        }`}
      >
        <div className={`pointer-events-auto transition-colors duration-700 ${textColorClass} flex-shrink-0`}>
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 md:w-16 md:h-16">
              <Image
                src="/images/crest-white.png"
                alt="RD Crest Light"
                fill
                className={`object-contain transition-opacity duration-700 ${textColorClass === "text-[var(--color-parchment)]" ? "opacity-100" : "opacity-0"}`}
                priority
              />
              <Image
                src="/images/crest-dark.png"
                alt="RD Crest Dark"
                fill
                className={`object-contain transition-opacity duration-700 ${textColorClass === "text-[var(--color-charcoal)]" ? "opacity-100" : "opacity-0"}`}
                priority
              />
            </div>
          </Link>
        </div>

        <nav className={`hidden md:flex flex-row gap-6 lg:gap-8 pointer-events-auto items-center transition-colors duration-700 ${textColorClass}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-sans font-bold text-xs md:text-sm uppercase tracking-[0.15em] hover:underline underline-offset-[6px] decoration-[1px] transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className={`md:hidden pointer-events-auto font-bold text-[10px] uppercase tracking-widest font-sans transition-colors duration-700 ${textColorClass}`}
        >
          Menu
        </button>
      </motion.header>

      {/* Fullscreen Mobile Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#2B0607] flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-8 right-6 md:top-12 md:right-12 font-sans font-bold text-[10px] uppercase tracking-widest text-[var(--color-parchment)] opacity-50 hover:opacity-100 transition-opacity p-2"
            >
              Close
            </button>

            <nav className="flex flex-col gap-8 items-center mt-12">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-3xl md:text-5xl tracking-[0.2em] uppercase text-[var(--color-parchment)] hover:opacity-50 transition-opacity block py-2"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute bottom-12 font-serif text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[var(--color-parchment)]"
            >
              Renaissance Decor
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
