"use client";

import { Header } from "@/components/layout/Header";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const contactData = {
  address: {
    line1: "Unit 5 / 314 Governor Road,",
    line2: "Braeside 3195",
    note: "Showroom/Warehouse — Visits by appointment only"
  },
  hours: "9:00am — 5:00pm, Mon – Fri",
  abn: "ABN 70 890 172 250",
  telephone: "0468 326 303",
  email: "info@renaissancedecor.com.au",
  marketing: "office@renaissancedecor.com.au",
  instagram: "@renaissancedecor"
};

export default function EnquirePage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#f0ede9] flex flex-col">
        <Header theme="dark" />
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="font-futura text-lg uppercase tracking-[0.4em] text-black mb-4">Enquiry Received</h1>
          <p className="font-futura text-base text-black/60 max-w-sm mb-8 leading-relaxed font-light">
            Thank you for your enquiry. We will review your project details and get back to you shortly.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="font-futura text-[11px] uppercase tracking-[0.3em] border-b border-black pb-1 hover:opacity-50 transition-opacity"
          >
            Send Another
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f0ede9] flex flex-col selection:bg-black/10">
      <Header theme="dark" />

      {/* Main Container */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* LEFT COLUMN: Content + Form */}
          <section className="flex flex-col">
            
            {/* Info Header: 2-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              
              {/* Column 1: Core Info */}
              <div className="flex flex-col gap-10">
                <div>
                  <h1 className="font-futura text-[15px] font-bold uppercase tracking-[0.4em] text-black mb-6">Enquire</h1>
                  <div className="flex flex-col font-futura text-base leading-relaxed text-black/80 font-light">
                    <p>{contactData.address.line1}</p>
                    <p>{contactData.address.line2}</p>
                  </div>
                </div>

                <div>
                  <h2 className="font-futura text-[11px] uppercase tracking-[0.25em] text-black/40 mb-3">Office Hours</h2>
                  <p className="font-futura text-base text-black/80 font-light">{contactData.hours}</p>
                </div>

                <div>
                  <h2 className="font-futura text-[11px] uppercase tracking-[0.25em] text-black/40 mb-3">Registered Office</h2>
                  <p className="font-futura text-base text-black/80 font-light">{contactData.abn}</p>
                </div>
              </div>

              {/* Column 2: Contact Links */}
              <div className="flex flex-col gap-10 lg:pt-[4.2rem]">
                <div>
                  <h2 className="font-futura text-[11px] uppercase tracking-[0.25em] text-black/40 mb-3">Telephone</h2>
                  <a href={`tel:${contactData.telephone.replace(/\s/g, "")}`} className="font-futura text-base text-black/80 font-light hover:text-black transition-colors">{contactData.telephone}</a>
                </div>

                <div>
                  <h2 className="font-futura text-[11px] uppercase tracking-[0.25em] text-black/40 mb-3">Email</h2>
                  <div className="flex flex-col gap-2">
                    <a href={`mailto:${contactData.email}`} className="font-futura text-base text-black/80 font-light hover:text-black transition-colors">{contactData.email}</a>
                    <a href={`mailto:${contactData.marketing}`} className="font-futura text-[14px] text-black/50 font-light hover:text-black transition-colors underline decoration-black/10 underline-offset-4 decoration-1 lowercase italic">Press: {contactData.marketing}</a>
                  </div>
                </div>

                <div>
                  <h2 className="font-futura text-[11px] uppercase tracking-[0.25em] text-black/40 mb-3">Instagram</h2>
                  <a href="https://instagram.com/renaissancedecor" target="_blank" rel="noopener noreferrer" className="font-futura text-base text-black/80 font-light hover:text-black transition-colors underline decoration-black/10 underline-offset-4 decoration-1">{contactData.instagram}</a>
                </div>
              </div>
            </div>

            {/* THE FORM */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-14 w-full">
              
              {/* NAME ROW */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                <div className="flex flex-col gap-3">
                  <label className="font-futura text-xs uppercase tracking-[0.2em] text-black/80 font-bold">First name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    required 
                    className="bg-transparent border-b border-black/50 focus:border-black outline-none py-3 font-futura text-lg text-black transition-colors placeholder:text-black/10"
                    placeholder="First name"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-futura text-xs uppercase tracking-[0.2em] text-black/80 font-bold">Last name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    required 
                    className="bg-transparent border-b border-black/50 focus:border-black outline-none py-3 font-futura text-lg text-black transition-colors placeholder:text-black/10"
                    placeholder="Last name"
                  />
                </div>
              </div>

              {/* EMAIL / PHONE ROW */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                <div className="flex flex-col gap-3">
                  <label className="font-futura text-xs uppercase tracking-[0.2em] text-black/80 font-bold">Your email address <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    required 
                    className="bg-transparent border-b border-black/50 focus:border-black outline-none py-3 font-futura text-lg text-black transition-colors placeholder:text-black/10"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-futura text-xs uppercase tracking-[0.2em] text-black/80 font-bold">Telephone</label>
                  <input 
                    type="tel" 
                    className="bg-transparent border-b border-black/50 focus:border-black outline-none py-3 font-futura text-lg text-black transition-colors placeholder:text-black/10"
                    placeholder="Optional"
                  />
                </div>
              </div>

              {/* ADDRESS ROW */}
              <div className="flex flex-col gap-3 w-full">
                <label className="font-futura text-xs uppercase tracking-[0.2em] text-black/80 font-bold">Project address</label>
                <input 
                  type="text" 
                  className="bg-transparent border-b border-black/50 focus:border-black outline-none py-3 font-futura text-lg text-black transition-colors placeholder:text-black/10"
                  placeholder="Suburb or full address"
                />
              </div>

              {/* WALL DIMENSIONS ROW */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                <div className="flex flex-col gap-3">
                  <label className="font-futura text-xs uppercase tracking-[0.2em] text-black/80 font-bold">Wall length <span className="text-black/30 md:ml-2 lowercase tracking-normal font-light italic">optional</span></label>
                  <input 
                    type="text" 
                    className="bg-transparent border-b border-black/50 focus:border-black outline-none py-3 font-futura text-lg text-black transition-colors placeholder:text-black/10"
                    placeholder="e.g. 4.5m"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-futura text-xs uppercase tracking-[0.2em] text-black/80 font-bold">Wall height <span className="text-black/30 md:ml-2 lowercase tracking-normal font-light italic">optional</span></label>
                  <input 
                    type="text" 
                    className="bg-transparent border-b border-black/50 focus:border-black outline-none py-3 font-futura text-lg text-black transition-colors placeholder:text-black/10"
                    placeholder="e.g. 2.7m"
                  />
                </div>
              </div>

              {/* INSPIRATIONAL IMAGE */}
              <div className="flex flex-col gap-3 w-full">
                <label className="font-futura text-xs uppercase tracking-[0.2em] text-black/80 font-bold">Inspirational image <span className="text-black/30 md:ml-2 lowercase tracking-normal font-light italic">optional</span></label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-transparent border-b border-black/50 border-dashed hover:border-black transition-colors cursor-pointer py-5 flex items-center justify-between"
                >
                  <span className="font-futura text-base text-black/40">
                    {fileName || "Attach a photo or rendering"}
                  </span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                </div>
                <input 
                  ref={fileInputRef}
                  type="file" 
                  className="hidden" 
                  onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                />
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col gap-3 w-full">
                <label className="font-futura text-xs uppercase tracking-[0.2em] text-black/80 font-bold">Your message <span className="text-red-500">*</span></label>
                <textarea 
                  required 
                  rows={4}
                  className="bg-transparent border-b border-black/50 focus:border-black outline-none py-3 font-futura text-lg text-black transition-colors placeholder:text-black/10 resize-none"
                  placeholder="Details about your surfaces, preferred finish, and timeline..."
                />
              </div>

              {/* SEND BUTTON */}
              <button 
                type="submit" 
                disabled={submitting}
                className="w-full md:w-fit mt-8 bg-[#2b1f1f] text-white font-futura text-[11px] uppercase tracking-[0.4em] px-20 py-7 hover:bg-black transition-colors disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Send Enquiry"}
              </button>
            </form>

          </section>

          {/* RIGHT COLUMN: RECTANGULAR MAP CONTAINER */}
          <aside className="flex flex-col gap-10">
            <div className="relative w-full aspect-[4/5] bg-[#e5e1dc] overflow-hidden rounded-sm shadow-sm">
              {/* Subtle grid pattern overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              
              {/* Map background placeholder */}
              <div className="absolute inset-0 flex items-center justify-center grayscale opacity-80 mix-blend-multiply">
                <div className="w-full h-full bg-[#dad6d0]" />
              </div>

              {/* Map Controls */}
              <div className="absolute top-8 right-8 flex flex-col gap-2">
                <div className="w-10 h-10 bg-white/90 backdrop-blur-sm border border-black/5 flex items-center justify-center text-sm font-light text-black/60 cursor-pointer hover:bg-white transition-colors">+</div>
                <div className="w-10 h-10 bg-white/90 backdrop-blur-sm border border-black/5 flex items-center justify-center text-sm font-light text-black/60 cursor-pointer hover:bg-white transition-colors">-</div>
              </div>

              {/* Logo / Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5">
                <div className="w-2.5 h-2.5 rounded-full bg-black shadow-[0_0_0_10px_rgba(0,0,0,0.05)]" />
                <div className="bg-black text-[#f0ede9] px-6 py-3 font-futura text-[10px] uppercase tracking-[0.2em] shadow-2xl whitespace-nowrap">
                  Renaissance Decor
                </div>
              </div>
            </div>

            {/* Extra Info under map if needed, or just whitespace */}
            <div className="flex flex-col gap-4 font-futura text-sm text-black/40 italic font-light leading-relaxed">
              <p>Visiting our Braeside showroom is by appointment only to ensure we can provide you with dedicated time and specialized samples for your project.</p>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
