import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-parchment)] py-20 px-6 md:px-12 w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-0 mt-auto z-10 relative">
      <div className="flex flex-col gap-6 w-full max-w-md">
        <h4 className="font-serif text-lg tracking-[0.2em] uppercase">Join our mailing list</h4>
        <form className="flex border-b border-[var(--color-parchment)]/30 pb-3 mt-2">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="bg-transparent border-none outline-none text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase w-full placeholder:text-[var(--color-parchment)]/40 focus:placeholder:opacity-0 transition-opacity"
          />
          <button type="button" className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-[0.2em] hover:text-[var(--color-parchment)]/60 transition-colors ml-4">
            Subscribe
          </button>
        </form>
      </div>

      <div className="flex flex-col md:items-end gap-8 md:gap-4 w-full md:w-auto">
        <div className="flex gap-8 font-sans text-xs font-bold uppercase tracking-[0.2em]">
          <a href="#" className="hover:opacity-60 transition-opacity">Instagram</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Pinterest</a>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 font-sans text-[9px] uppercase tracking-[0.15em] text-[var(--color-parchment)]/50 mt-4 md:mt-0">
          <Link href="#" className="hover:text-[var(--color-parchment)] transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-[var(--color-parchment)] transition-colors">Terms & Conditions</Link>
        </div>
        <div className="font-sans text-[9px] uppercase tracking-[0.15em] text-[var(--color-parchment)]/30 mt-2">
          © {new Date().getFullYear()} Renaissance Decor
        </div>
      </div>
    </footer>
  );
}
