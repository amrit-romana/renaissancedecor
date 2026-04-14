import { getDbData, addNavLink, deleteNavLink } from "@/actions/admin";

export default async function AdminLinksPage() {
  const db = await getDbData();

  return (
    <div className="flex flex-col gap-12">
      <div>
        <h1 className="font-serif text-3xl mb-2">Navbar Links</h1>
        <p className="text-[var(--color-parchment)]/60 text-sm">Manage the links appearing in the top navigation bar.</p>
      </div>

      <div className="bg-[#111111] border border-[var(--color-parchment)]/10 rounded-lg p-6">
        <h2 className="text-sm uppercase tracking-widest mb-6">Add New Link</h2>
        <form action={addNavLink} className="flex gap-4 items-end">
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-xs uppercase tracking-wider text-[var(--color-parchment)]/50">Display Name</label>
            <input name="name" required placeholder="e.g. Services" className="bg-[#000000] border border-[var(--color-parchment)]/20 rounded p-2 text-sm outline-none w-full" />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-xs uppercase tracking-wider text-[var(--color-parchment)]/50">URL / Hash</label>
            <input name="href" required placeholder="e.g. /services" className="bg-[#000000] border border-[var(--color-parchment)]/20 rounded p-2 text-sm outline-none w-full" />
          </div>
          <button type="submit" className="bg-[var(--color-parchment)] text-black px-6 py-2 rounded text-sm font-bold uppercase tracking-wider hover:bg-opacity-80 h-[38px]">
            Add
          </button>
        </form>
      </div>

      <div className="bg-[#111111] border border-[var(--color-parchment)]/10 rounded-lg overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#1a1a1a] text-[var(--color-parchment)]/50 uppercase text-xs tracking-wider">
            <tr>
              <th className="p-4 font-normal">Name</th>
              <th className="p-4 font-normal">URL</th>
              <th className="p-4 font-normal text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-parchment)]/10">
            {db.navLinks.map((link: any) => (
              <tr key={link.id} className="hover:bg-[#151515]">
                <td className="p-4 font-bold">{link.name}</td>
                <td className="p-4 opacity-70">{link.href}</td>
                <td className="p-4 text-right">
                  <form action={async () => {
                    "use server";
                    await deleteNavLink(link.id);
                  }}>
                    <button type="submit" className="text-red-400 hover:text-red-300 text-xs uppercase tracking-widest">Delete</button>
                  </form>
                </td>
              </tr>
            ))}
            {db.navLinks.length === 0 && (
              <tr><td colSpan={3} className="p-8 text-center opacity-50 text-sm italic">No links added yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
