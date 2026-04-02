"use client";
import { Header } from "@/components/layout/Header";
import dynamic from "next/dynamic";

// Lazy load the heavy 3D scene directly aligned with the requirement
const Materials3DScene = dynamic(() => import("@/components/materials/Materials3DScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[var(--color-parchment)] absolute top-0 left-0 z-0">
      <div className="w-16 h-[1px] bg-[var(--color-charcoal)]/20 overflow-hidden mb-4">
        <div className="w-full h-full bg-[var(--color-charcoal)] origin-left animate-pulse" />
      </div>
      <span className="font-sans text-[9px] tracking-[0.2em] font-light uppercase text-[var(--color-charcoal)]">
        Loading Material...
      </span>
    </div>
  )
});

export default function MaterialsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[var(--color-parchment)] relative overflow-hidden">
      <Header />
      
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen pointer-events-none px-6 text-center select-none">
        <h1 className="font-serif text-5xl md:text-7xl text-[var(--color-charcoal)] tracking-wide">
          Tactile Depth
        </h1>
        <p className="font-sans text-[10px] md:text-xs tracking-[0.25em] font-light uppercase mt-6 text-[var(--color-charcoal)]/70">
          Interact to explore the burnish
        </p>
      </div>

      {/* 3D Canvas Background */}
      <Materials3DScene />
      
    </main>
  );
}
