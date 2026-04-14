"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="bg-[#000000] text-[var(--color-parchment)] py-24 px-8 md:px-16 w-full flex flex-col mt-auto z-10 relative">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 w-full mb-24 items-center">
        
        {/* Col 1: Logo */}
        <div className="flex flex-col lg:items-start items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image 
              src="/images/preloader-logo-new.png" 
              alt="Renaissance Decor Logo" 
              fill 
              className="object-contain"
            />
          </div>
        </div>

        {/* Col 2: Address & Contact */}
        <div className="flex flex-col gap-8 font-sans w-full">
          
          <div className="flex flex-col gap-1">
            <p className="font-bold text-[10px] md:text-xs tracking-widest uppercase text-[var(--color-parchment)]/70 mb-1">Showroom / Warehouse</p>
            <p className="text-sm md:text-base leading-relaxed">
              Unit 5 / 314 Governor Road,<br />
              Braeside 3195
            </p>
            <p className="text-xs md:text-sm text-[var(--color-parchment)]/80 mt-1 italic">
              Visits by appointment only
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-bold text-[10px] md:text-xs tracking-widest uppercase text-[var(--color-parchment)]/70 mb-1">Talk to Us</p>
            <a href="tel:0468326303" className="text-sm md:text-base hover:opacity-60 transition-opacity">0468 326 303</a>
            <p className="text-xs md:text-sm text-[var(--color-parchment)]/80 mt-1">
              9:00am — 5:00pm, Mon – Fri
            </p>
          </div>

          <div className="mt-2">
            <p className="text-[10px] md:text-xs tracking-[0.15em] text-[var(--color-parchment)]/40 uppercase">
              Renaissance Decor | ABN 70 890 172 250
            </p>
          </div>
        </div>

        {/* Col 3: Links */}
        <div className="flex flex-col gap-8 font-sans w-full">
          
          <div className="flex flex-col gap-1">
            <p className="font-bold text-[10px] md:text-xs tracking-widest uppercase text-[var(--color-parchment)]/70 mb-1">Legal</p>
            <div className="flex flex-col gap-2 mt-1">
              <Link href="#" className="text-sm md:text-base hover:opacity-60 transition-opacity">Terms & Conditions</Link>
              <Link href="#" className="text-sm md:text-base hover:opacity-60 transition-opacity">Privacy Policy</Link>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-bold text-[10px] md:text-xs tracking-widest uppercase text-[var(--color-parchment)]/70 mb-1">Connect</p>
            <div className="flex flex-col gap-2 mt-1">
              <Link href="/enquire" className="text-sm md:text-base hover:opacity-60 transition-opacity">Make an Enquiry</Link>
            </div>
          </div>

        </div>

        {/* Col 4: Reach Out & Socials */}
        <div className="flex flex-col gap-6 font-sans w-full">
          <div className="flex flex-col gap-1 border-b border-[var(--color-parchment)]/30 pb-3">
            <p className="font-bold text-[10px] md:text-xs tracking-widest uppercase text-[var(--color-parchment)]/70">Director – Adam McCann</p>
            <a href="mailto:info@renaissancedecor.com.au" className="text-sm md:text-base hover:opacity-60 transition-opacity mt-1">info@renaissancedecor.com.au</a>
          </div>
          
          <div className="flex flex-col gap-1 border-b border-[var(--color-parchment)]/30 pb-3">
            <p className="font-bold text-[10px] md:text-xs tracking-widest uppercase text-[var(--color-parchment)]/70">Marketing – Toni McCann</p>
            <a href="mailto:office@renaissancedecor.com.au" className="text-sm md:text-base hover:opacity-60 transition-opacity mt-1">office@renaissancedecor.com.au</a>
          </div>

          <div className="flex flex-col gap-3 mt-2">
            <p className="font-bold text-[10px] md:text-xs tracking-widest uppercase text-[var(--color-parchment)]/70">Follow Us</p>
            <div className="flex flex-row gap-4 mt-2">
              <a href="#" className="hover:opacity-60 transition-opacity" title="Instagram">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="hover:opacity-60 transition-opacity" title="Facebook">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z"/></svg>
              </a>
              <a href="#" className="hover:opacity-60 transition-opacity" title="Pinterest">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z"/></svg>
              </a>
              <a href="#" className="hover:opacity-60 transition-opacity" title="TikTok">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.25-.27 2.45-.8 3.57-.96 2-2.87 3.52-5.07 3.9-2.22.38-4.56.09-6.48-1.12-1.93-1.2-3.32-3.15-3.68-5.39-.32-1.92.05-3.9 1.09-5.54 1.03-1.63 2.75-2.82 4.67-3.18 1.03-.19 2.09-.16 3.1.08v4.11c-.55-.17-1.14-.14-1.66.04-.54.19-1.01.54-1.35.97-.33.43-.53.95-.56 1.49-.03.53.11 1.07.38 1.52.28.46.72.82 1.23 1.01.52.2 1.08.24 1.62.13.52-.1 1.01-.36 1.39-.75.39-.38.67-.86.8-1.39.11-.47.16-.96.16-1.45V.02h.6z"/></svg>
              </a>
              <a href="#" className="hover:opacity-60 transition-opacity" title="LinkedIn">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
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
