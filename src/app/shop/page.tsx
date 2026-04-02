import { Header } from "@/components/layout/Header";
import Image from "next/image";

// Using the exact product imagery extracted from renaissancedecor.com.au/products/
const productCategories = [
  {
    name: "Venetian Plasters",
    url: "https://lustrefx.com.au/product-category/surfaces/venetian-plaster/",
    image: "https://renaissancedecor.com.au/wp-content/uploads/2025/06/BeautifulBeast.jpg"
  },
  {
    name: "Metals",
    url: "https://lustrefx.com.au/product-category/surfaces/metals/",
    image: "https://renaissancedecor.com.au/wp-content/uploads/2025/06/Metalswholefamily.jpg"
  },
  {
    name: "Concretes",
    url: "https://lustrefx.com.au/product-category/surfaces/concretes/",
    image: "https://renaissancedecor.com.au/wp-content/uploads/2025/06/RustyChocolate.jpg"
  },
  {
    name: "Patinas",
    url: "https://lustrefx.com.au/product-category/surfaces/patinas/",
    image: "https://renaissancedecor.com.au/wp-content/uploads/2025/06/TheLover.jpg"
  },
  {
    name: "Primers & Topcoats",
    url: "https://lustrefx.com.au/product-category/primers-topcoats/",
    image: "https://renaissancedecor.com.au/wp-content/uploads/2025/06/TheUnicorn.jpg"
  },
  {
    name: "Tools",
    url: "https://lustrefx.com.au/product-category/tools/",
    image: "https://renaissancedecor.com.au/wp-content/uploads/2025/06/Mammoth-sponge-large-2.jpg"
  }
];

export default function ShopPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[var(--color-parchment)]">
      <Header theme="dark" />
      
      <section className="pt-48 pb-12 px-6 md:px-12 w-full flex flex-col items-center">
        <h1 className="font-futura font-light text-4xl md:text-5xl lg:text-6xl text-[var(--color-charcoal)] tracking-widest uppercase mb-6 md:mb-12">
          Products
        </h1>
        <p className="font-futura text-sm md:text-base text-[var(--color-charcoal)]/80 leading-relaxed font-light text-center max-w-2xl mb-12">
          Explore our curated range of premium decorative finishes and tools. Trusted by leading artisans and designers globally.
        </p>
      </section>

      {/* Standard Product Static E-Commerce Grid */}
      <section className="w-full max-w-[1200px] mx-auto px-6 md:px-12 pb-32">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {productCategories.map((category, idx) => (
            <a 
              key={idx} 
              href={category.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex flex-col gap-3 group"
            >
              <div 
                className="relative w-full aspect-square bg-[var(--color-stone)] overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover object-center transition-opacity duration-300 group-hover:opacity-75"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-futura font-bold text-[10px] md:text-[11px] text-[var(--color-charcoal)] uppercase tracking-widest md:tracking-[0.2em]">
                  {category.name}
                </span>
              </div>
            </a>
          ))}
        </div>
        
        <div className="flex justify-center mt-20">
          <a 
            href="https://lustrefx.com.au/products/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--color-charcoal)] border-b border-[var(--color-charcoal)] pb-1 hover:opacity-60 transition-opacity"
          >
            Browse All External Products
          </a>
        </div>
      </section>
    </main>
  );
}
