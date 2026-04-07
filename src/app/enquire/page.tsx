import { Header } from "@/components/layout/Header";

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[var(--color-parchment)]">
      <Header theme="dark" />
      
      <section className="pt-48 pb-32 px-6 md:px-12 w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
         {/* LEFT COLUMN: INFO */}
         <div className="flex flex-col gap-12 lg:sticky lg:top-48 self-start">
           <h1 className="font-futura font-light text-4xl md:text-5xl lg:text-6xl text-[#2B0607] tracking-widest uppercase">
             Enquire
           </h1>
           <div className="font-futura text-sm md:text-base text-[#2B0607]/80 leading-relaxed font-light max-w-sm">
             To discuss an upcoming project, please submit an enquiry with your architectural details or reach out to our studio directly. We operate primarily in Australia, whilst also accepting select international commissions.
           </div>

           <div className="flex flex-col gap-8 mt-4 font-futura text-sm tracking-widest uppercase text-[#2B0607]">
             <div>
               <p className="font-bold mb-2">Studio</p>
               <a href="mailto:studio@renaissancedecor.com.au" className="hover:opacity-60 transition-opacity lowercase tracking-normal text-base">studio@renaissancedecor.com.au</a>
             </div>
             <div>
               <p className="font-bold mb-2">Follow</p>
               <a href="#" className="hover:opacity-60 transition-opacity">Instagram</a>
             </div>
           </div>
         </div>

         {/* RIGHT COLUMN: FORM */}
         <div className="w-full">
           <form className="flex flex-col gap-10 w-full max-w-xl">
             <div className="flex flex-col md:flex-row gap-10">
               <div className="flex flex-col w-full border-b border-[#2B0607]/30 pb-2 focus-within:border-[#2B0607] transition-colors">
                 <label className="font-futura text-[9px] uppercase tracking-[0.2em] text-[#2B0607]/60 mb-2">Name *</label>
                 <input type="text" className="bg-transparent outline-none font-serif text-lg text-[#2B0607] placeholder:text-[#2B0607]/20" placeholder="Your full name" required />
               </div>
               <div className="flex flex-col w-full border-b border-[#2B0607]/30 pb-2 focus-within:border-[#2B0607] transition-colors">
                 <label className="font-futura text-[9px] uppercase tracking-[0.2em] text-[#2B0607]/60 mb-2">Email *</label>
                 <input type="email" className="bg-transparent outline-none font-serif text-lg text-[#2B0607] placeholder:text-[#2B0607]/20" placeholder="Your email address" required />
               </div>
             </div>
             
             <div className="flex flex-col md:flex-row gap-10">
               <div className="flex flex-col w-full border-b border-[#2B0607]/30 pb-2 focus-within:border-[#2B0607] transition-colors">
                 <label className="font-futura text-[9px] uppercase tracking-[0.2em] text-[#2B0607]/60 mb-2">Phone</label>
                 <input type="tel" className="bg-transparent outline-none font-serif text-lg text-[#2B0607] placeholder:text-[#2B0607]/20" placeholder="Optional" />
               </div>
               <div className="flex flex-col w-full border-b border-[#2B0607]/30 pb-2 focus-within:border-[#2B0607] transition-colors">
                 <label className="font-futura text-[9px] uppercase tracking-[0.2em] text-[#2B0607]/60 mb-2">Location</label>
                 <input type="text" className="bg-transparent outline-none font-serif text-lg text-[#2B0607] placeholder:text-[#2B0607]/20" placeholder="Project suburb or city" required />
               </div>
             </div>

             <div className="flex flex-col w-full border-b border-[#2B0607]/30 pb-2 mt-4 focus-within:border-[#2B0607] transition-colors">
               <label className="font-futura text-[9px] uppercase tracking-[0.2em] text-[#2B0607]/60 mb-2">Project Classification *</label>
               <select className="bg-transparent outline-none font-serif text-lg text-[#2B0607] appearance-none" required>
                 <option value="">Select scope type...</option>
                 <option value="residential">Residential</option>
                 <option value="commercial">Commercial / Workspace</option>
                 <option value="retail">Retail / Hospitality</option>
                 <option value="other">Other</option>
               </select>
             </div>

             <div className="flex flex-col md:flex-row gap-10 mt-4">
               <div className="flex flex-col w-full border-b border-[#2B0607]/30 pb-2 focus-within:border-[#2B0607] transition-colors">
                 <label className="font-futura text-[9px] uppercase tracking-[0.2em] text-[#2B0607]/60 mb-2">Scope Size (SQM)</label>
                 <input type="number" className="bg-transparent outline-none font-serif text-lg text-[#2B0607] placeholder:text-[#2B0607]/20" placeholder="Approx. dimensions" />
               </div>
               <div className="flex flex-col w-full border-b border-[#2B0607]/30 pb-2 focus-within:border-[#2B0607] transition-colors">
                 <label className="font-futura text-[9px] uppercase tracking-[0.2em] text-[#2B0607]/60 mb-2">Preferred Finish</label>
                 <select className="bg-transparent outline-none font-serif text-lg text-[#2B0607] appearance-none">
                   <option value="unsure">Unsure / Need Guidance</option>
                   <option value="polished">Polished Plaster</option>
                   <option value="microcement">Microcement / Concrete</option>
                   <option value="tadelakt">Tadelakt</option>
                   <option value="textured">Textured / Raw</option>
                   <option value="metal">Metal Coating</option>
                 </select>
               </div>
             </div>

             <div className="flex flex-col w-full border-b border-[#2B0607]/30 pb-2 mt-4 focus-within:border-[#2B0607] transition-colors">
               <label className="font-futura text-[9px] uppercase tracking-[0.2em] text-[#2B0607]/60 mb-2">Project Details & Surfaces *</label>
               <textarea 
                 className="bg-transparent outline-none font-serif text-lg text-[#2B0607] placeholder:text-[#2B0607]/20 resize-none h-24" 
                 placeholder="Please describe the intended surfaces (e.g., wet area bathrooms, curved staircases, exterior facades) and ideal timeline..." 
                 required 
               ></textarea>
             </div>

             <button type="submit" className="self-start mt-8 font-futura text-[10px] uppercase tracking-[0.3em] text-[var(--color-parchment)] bg-[#2B0607] px-10 py-5 hover:bg-[#1a0404] transition-colors">
               Submit Enquiry
             </button>
           </form>
         </div>
      </section>
    </main>
  );
}
