import { getDbData, addTestimonial, deleteTestimonial } from "@/actions/admin";

export default async function AdminTestimonialsPage() {
  const db = await getDbData();

  return (
    <div className="flex flex-col gap-12">
      <div>
        <h1 className="font-serif text-3xl mb-2">Testimonials</h1>
        <p className="text-[var(--color-parchment)]/60 text-sm">Manage the client quotes appearing in the testimonials section.</p>
      </div>

      <div className="bg-[#111111] border border-[var(--color-parchment)]/10 rounded-lg p-6">
        <h2 className="text-sm uppercase tracking-widest mb-6">Add New Testimonial</h2>
        <form action={addTestimonial} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-wider text-[var(--color-parchment)]/50">Quote Text</label>
            <textarea name="quote" rows={3} required placeholder="The mastery of Renaissance Decor elevated our space..." className="bg-[#000000] border border-[var(--color-parchment)]/20 rounded p-2 text-sm outline-none w-full resize-none" />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-xs uppercase tracking-wider text-[var(--color-parchment)]/50">Author Name</label>
              <input name="name" required placeholder="Isabella Montgomery" className="bg-[#000000] border border-[var(--color-parchment)]/20 rounded p-2 text-sm outline-none w-full" />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-xs uppercase tracking-wider text-[var(--color-parchment)]/50">Position / Title</label>
              <input name="title" placeholder="Principal Architect" className="bg-[#000000] border border-[var(--color-parchment)]/20 rounded p-2 text-sm outline-none w-full" />
            </div>
          </div>
          <div className="mt-2 text-right">
            <button type="submit" className="bg-[var(--color-parchment)] text-black px-6 py-2 rounded text-sm font-bold uppercase tracking-wider hover:bg-opacity-80">
              Add Testimonial
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-sm uppercase tracking-widest text-[var(--color-parchment)]/70">Current Testimonials</h2>
        <div className="flex flex-col gap-4">
          {db.testimonials.map((t: any) => (
            <div key={t.id} className="bg-[#111111] rounded-lg border border-[var(--color-parchment)]/10 p-6 flex justify-between gap-6 items-center">
              <div className="flex flex-col gap-2 flex-1">
                <p className="font-serif text-lg italic text-[var(--color-parchment)]">"{t.quote}"</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-bold text-xs uppercase tracking-widest">{t.name}</span>
                  {t.title && <span className="opacity-50 text-xs">— {t.title}</span>}
                </div>
              </div>
              <form action={async () => {
                "use server";
                await deleteTestimonial(t.id);
              }}>
                <button type="submit" className="text-red-400 hover:text-red-300 text-xs uppercase tracking-widest font-bold bg-red-400/10 px-4 py-2 rounded border border-red-400/20">Remove</button>
              </form>
            </div>
          ))}
          {db.testimonials.length === 0 && (
             <div className="p-8 text-center opacity-50 text-sm italic">No testimonials added yet.</div>
          )}
        </div>
      </div>

    </div>
  );
}
