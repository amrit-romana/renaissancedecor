import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#000000] text-[var(--color-parchment)] py-24 px-8 md:px-16 w-full flex flex-col mt-auto z-10 relative">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 w-full mb-24 items-start">
        
        {/* Col 1: Logo */}
        <div className="flex flex-col lg:items-start items-center">
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <Image 
              src="/images/crest-white.png" 
              alt="Renaissance Decor Crest" 
              fill 
              className="object-contain"
            />
          </div>
        </div>

        {/* Col 2: Address & Contact */}
        <div className="flex flex-col gap-6 font-sans text-sm md:text-base leading-relaxed tracking-wide">
          <div className="flex flex-col gap-1">
            <p className="font-bold mb-2">Renaissance Decor</p>
            <p>Unit 5 / 314 Governor Road,</p>
            <p>Braeside 3195</p>
            <p className="text-[var(--color-parchment)]/70 text-xs mt-2 tracking-widest">ABN 70 890 172 250</p>
          </div>
          
          <div className="flex flex-col gap-1 mt-2">
            <p className="font-bold">Talk to Us</p>
            <a href="tel:0468326303" className="hover:opacity-60 transition-opacity">0468 326 303</a>
          </div>
        </div>

        {/* Col 3: Links */}
        <div className="flex flex-col gap-5 font-sans flex-shrink-0">
          <Link href="#" className="hover:opacity-60 transition-opacity text-xs md:text-sm uppercase tracking-widest font-bold">Terms & Conditions</Link>
          <Link href="#" className="hover:opacity-60 transition-opacity text-xs md:text-sm uppercase tracking-widest font-bold">Privacy Policy</Link>
          <a href="#" className="hover:opacity-60 transition-opacity text-xs md:text-sm uppercase tracking-widest font-bold">Instagram</a>
          <Link href="/enquire" className="hover:opacity-60 transition-opacity text-xs md:text-sm uppercase tracking-widest font-bold underline underline-offset-4">Enquire</Link>
        </div>

        {/* Col 4: Newsletter */}
        <div className="flex flex-col gap-4 font-sans flex-col w-full">
          <p className="text-xs md:text-sm font-bold uppercase tracking-widest">Subscribe for Announcements</p>
          <form className="w-full mt-3 border-b border-[var(--color-parchment)]/50 pb-3">
            <input 
              type="email" 
              placeholder="Type email and press enter" 
              className="w-full bg-transparent text-[var(--color-parchment)] placeholder:text-[var(--color-parchment)]/50 text-xs md:text-sm outline-none transition-colors"
            />
          </form>
          <p className="text-[10px] md:text-xs text-[var(--color-parchment)]/60 leading-relaxed max-w-[240px] mt-2">
            By joining the mailing list, I agree to the Privacy Policy.
          </p>
        </div>

        {/* Col 5: Badges */}
        <div className="flex flex-row flex-wrap lg:justify-end gap-6 items-center">
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <Image src="https://renaissancedecor.com.au/wp-content/uploads/2023/07/best-artisan-18.png" alt="Best Artisan" fill className="object-contain filter brightness-0 invert opacity-80" sizes="80px" />
          </div>
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <Image src="https://renaissancedecor.com.au/wp-content/uploads/2023/03/icon-AwardWinning.png" alt="Award Winning" fill className="object-contain filter brightness-0 invert opacity-80" sizes="80px" />
          </div>
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <Image src="https://renaissancedecor.com.au/wp-content/uploads/2023/03/icon-CertifiedTeam.png" alt="Certified Team" fill className="object-contain filter brightness-0 invert opacity-80" sizes="80px" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs font-sans tracking-widest text-[var(--color-parchment)]/60 pt-8 border-t border-[var(--color-parchment)]/20">
        <p>All content copyright © {new Date().getFullYear()} Renaissance Decor. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Site crafted by <span className="text-[var(--color-parchment)] font-bold opacity-100">Romanasio</span></p>
      </div>
    </footer>
  );
}
