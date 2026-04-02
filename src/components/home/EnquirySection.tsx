import Link from "next/link";

export function EnquirySection() {
  return (
    <section className="w-full bg-[var(--color-parchment)] text-[var(--color-charcoal)] py-24 md:py-32 px-6 md:px-12 flex flex-col items-center justify-center relative border-t border-[var(--color-charcoal)]/10">
      <div className="max-w-2xl text-center flex flex-col items-center gap-8">
        <span className="font-sans text-[10px] uppercase tracking-[0.4em] font-bold opacity-60">
          Connect
        </span>
        <h2 className="font-serif text-3xl md:text-5xl leading-[1.3] text-[var(--color-charcoal)]">
          A luxury craft practice ready to elevate your space. Every surface applied by hand.
        </h2>
        
        <Link 
          href="/contact" 
          className="mt-8 font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] border border-[var(--color-charcoal)] px-12 py-4 hover:bg-[var(--color-charcoal)] hover:text-[var(--color-parchment)] transition-colors duration-500"
        >
          Enquire
        </Link>
      </div>
    </section>
  );
}
