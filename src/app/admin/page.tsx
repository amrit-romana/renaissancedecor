import { getDbData } from "@/actions/admin";

export default async function AdminDashboard() {
  const db = await getDbData();
  
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-serif text-4xl mb-2">Dashboard Overview</h1>
        <p className="text-[var(--color-parchment)]/60 text-sm">Welcome to your administrative portal.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="p-6 bg-[#111111] rounded-lg border border-[var(--color-parchment)]/10">
          <p className="text-xs uppercase tracking-widest text-[var(--color-parchment)]/50 mb-2">Navbar Links</p>
          <p className="text-3xl font-serif">{db.navLinks.length}</p>
        </div>
        <div className="p-6 bg-[#111111] rounded-lg border border-[var(--color-parchment)]/10">
          <p className="text-xs uppercase tracking-widest text-[var(--color-parchment)]/50 mb-2">Carousel Slides</p>
          <p className="text-3xl font-serif">{db.carouselItems.length}</p>
        </div>
        <div className="p-6 bg-[#111111] rounded-lg border border-[var(--color-parchment)]/10">
          <p className="text-xs uppercase tracking-widest text-[var(--color-parchment)]/50 mb-2">Testimonials</p>
          <p className="text-3xl font-serif">{db.testimonials.length}</p>
        </div>
      </div>
    </div>
  );
}
