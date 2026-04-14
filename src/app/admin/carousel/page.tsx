import { getDbData, addCarouselItem, deleteCarouselItem } from "@/actions/admin";

export default async function AdminCarouselPage() {
  const db = await getDbData();

  return (
    <div className="flex flex-col gap-12">
      <div>
        <h1 className="font-serif text-3xl mb-2">Hero Carousel</h1>
        <p className="text-[var(--color-parchment)]/60 text-sm">Manage the background images and text overlays for the homepage hero section.</p>
      </div>

      <div className="bg-[#111111] border border-[var(--color-parchment)]/10 rounded-lg p-6">
        <h2 className="text-sm uppercase tracking-widest mb-6">Add New Slide</h2>
        <form action={addCarouselItem} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-wider text-[var(--color-parchment)]/50">Image URL</label>
            <input name="imageSrc" required placeholder="https://images.unsplash.com/..." className="bg-[#000000] border border-[var(--color-parchment)]/20 rounded p-2 text-sm outline-none w-full" />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-xs uppercase tracking-wider text-[var(--color-parchment)]/50">Main Title (allows HTML like &lt;br/&gt;)</label>
              <input name="title" required placeholder="Bespoke Finishes.<br/>Tailored environments." className="bg-[#000000] border border-[var(--color-parchment)]/20 rounded p-2 text-sm outline-none w-full" />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-xs uppercase tracking-wider text-[var(--color-parchment)]/50">Subtitle</label>
              <input name="subtitle" required placeholder="Venetian Plaster · Micro Cement" className="bg-[#000000] border border-[var(--color-parchment)]/20 rounded p-2 text-sm outline-none w-full" />
            </div>
          </div>
          <div className="mt-2 text-right">
            <button type="submit" className="bg-[var(--color-parchment)] text-black px-6 py-2 rounded text-sm font-bold uppercase tracking-wider hover:bg-opacity-80">
              Add Slide
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-sm uppercase tracking-widest text-[var(--color-parchment)]/70">Current Slides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {db.carouselItems.map((item: any) => (
            <div key={item.id} className="bg-[#111111] rounded-lg border border-[var(--color-parchment)]/10 overflow-hidden flex flex-col">
              <img src={item.imageSrc} alt="" className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col flex-1 gap-2">
                <p className="font-serif text-lg leading-tight" dangerouslySetInnerHTML={{__html: item.title}}></p>
                <p className="text-xs uppercase tracking-widest opacity-50 mt-auto pt-4">{item.subtitle}</p>
                <form action={async () => {
                  "use server";
                  await deleteCarouselItem(item.id);
                }} className="mt-4 border-t border-[var(--color-parchment)]/10 pt-4 flex justify-end">
                  <button type="submit" className="text-red-400 hover:text-red-300 text-xs uppercase tracking-widest font-bold">Delete</button>
                </form>
              </div>
            </div>
          ))}
          {db.carouselItems.length === 0 && (
             <div className="p-8 text-center opacity-50 text-sm italic">No slides added yet.</div>
          )}
        </div>
      </div>

    </div>
  );
}
