import Link from "next/link";
import { logoutAction } from "@/actions/auth";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-[#050505] text-[var(--color-parchment)] font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-[#000000] border-r border-[var(--color-parchment)]/10 flex flex-col justify-between">
        <div className="p-8 flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <h2 className="font-serif text-xl tracking-wide">CMS Admin</h2>
            <p className="text-[10px] uppercase tracking-widest text-[var(--color-parchment)]/50">Renaissance Decor</p>
          </div>
          
          <nav className="flex flex-col gap-4">
            <Link href="/admin" className="text-sm uppercase tracking-wider font-bold opacity-70 hover:opacity-100 transition-opacity">Dashboard</Link>
            <Link href="/admin/links" className="text-sm uppercase tracking-wider font-bold opacity-70 hover:opacity-100 transition-opacity">Navbar Links</Link>
            <Link href="/admin/carousel" className="text-sm uppercase tracking-wider font-bold opacity-70 hover:opacity-100 transition-opacity">Hero Carousel</Link>
            <Link href="/admin/testimonials" className="text-sm uppercase tracking-wider font-bold opacity-70 hover:opacity-100 transition-opacity">Testimonials</Link>
            <Link href="/admin/portfolio" className="text-sm uppercase tracking-wider font-bold opacity-70 hover:opacity-100 transition-opacity">Portfolio Settings</Link>
            <Link href="/" target="_blank" className="text-sm uppercase tracking-wider font-bold opacity-70 hover:opacity-100 transition-opacity mt-4 text-[var(--color-parchment)]/50">View Live Site ↗</Link>
          </nav>
        </div>

        <form action={logoutAction} className="p-8">
          <button type="submit" className="text-xs uppercase tracking-widest text-red-400 hover:text-red-300 transition-colors font-bold">Logout</button>
        </form>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-12 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>

    </div>
  );
}
