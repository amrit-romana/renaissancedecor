import Image from "next/image";
import Link from "next/link";
import { ProjectData } from "@/actions/projects";

export function ProjectStack({ projects }: { projects: ProjectData[] }) {
  const homeProjects = projects.filter(p => p.showOnHome);

  const beforeQuote = homeProjects.slice(0, 3);
  const afterQuote = homeProjects.slice(3);

  const renderProject = (project: ProjectData) => (
    <div key={project.id} className="relative w-full group cursor-pointer aspect-square bg-black overflow-hidden block">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-75"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none p-6">
        <h3 className="font-sans text-[10px] md:text-xs font-bold text-white text-center tracking-[0.2em] uppercase">
          {project.title}
        </h3>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-[var(--color-parchment)] pb-12 md:pb-16 flex flex-col items-center">
      <div className="w-full max-w-[1100px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-16">
        
        {beforeQuote.map(renderProject)}

        {/* Embedded Quote Block exactly positioned at grid cell 4 */}
        <div className="w-full h-full flex items-center justify-center p-8 md:p-16 aspect-square bg-[var(--color-parchment)]">
          <div className="max-w-xs flex flex-col gap-6">
            <span className="font-serif text-3xl text-[var(--color-charcoal)] leading-none">“</span>
            <p className="font-sans text-sm md:text-base text-[var(--color-charcoal)] leading-relaxed font-medium">
              Renaissance applies a keen eye for design to creating quietly joyful and glamorous yet welcoming interiors
            </p>
            <span className="font-sans text-[8px] uppercase tracking-[0.2em] text-[var(--color-charcoal)]/60 font-bold mt-2">
              House and Garden
            </span>
          </div>
        </div>

        {afterQuote.map(renderProject)}

      </div>

      <Link 
        href="/projects" 
        className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--color-charcoal)] border-b border-[var(--color-charcoal)] pb-1 hover:opacity-60 transition-opacity"
      >
        Explore our Projects
      </Link>
    </section>
  );
}
