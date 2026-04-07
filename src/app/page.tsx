import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { ProjectStack } from "@/components/home/ProjectStack";
import { FinishesSection } from "@/components/home/FinishesSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { EnquirySection } from "@/components/home/EnquirySection";
import { getProjects } from "@/actions/projects";
import { getFinishes } from "@/actions/finishes";

export default async function Home() {
  const projects = await getProjects();
  const finishes = await getFinishes();

  return (
    <main className="flex flex-col min-h-screen bg-[var(--color-parchment)]">
      <Header />
      <Hero />
      <section className="py-24 md:py-36 px-6 md:px-12 w-full flex justify-center">
        <h2 className="font-serif text-xl md:text-xl lg:text-xl max-w-4xl text-[var(--color-charcoal)] leading-[1.4] text-center">
          We work with architects and builders who refuse to compromise on finish. Every surface is an opportunity to do something lasting.
        </h2>
      </section>
      <ProjectStack projects={projects} />
      <FinishesSection finishes={finishes} />
      <TestimonialSection />
      <EnquirySection />
    </main>
  );
}
