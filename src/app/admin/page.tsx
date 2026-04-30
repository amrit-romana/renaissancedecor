import { getDbData } from "@/actions/admin";
import { getProjects } from "@/actions/projects";
import { getFinishes } from "@/actions/finishes";
import Link from "next/link";

export default async function AdminDashboard() {
  const [db, projects, finishes] = await Promise.all([getDbData(), getProjects(), getFinishes()]);

  const stats = [
    { label: "Hero Slides", value: db.carouselItems.length, href: "/admin/carousel", color: "bg-violet-50 text-violet-600", icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
    )},
    { label: "Testimonials", value: db.testimonials.length, href: "/admin/testimonials", color: "bg-emerald-50 text-emerald-600", icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    )},
    { label: "Navbar Links", value: db.navLinks.length, href: "/admin/links", color: "bg-blue-50 text-blue-600", icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    )},
    { label: "Projects", value: projects.length, href: "/admin/portfolio", color: "bg-amber-50 text-amber-600", icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
    )},
    { label: "Finishes", value: finishes.length, href: "/admin/portfolio", color: "bg-rose-50 text-rose-600", icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
    )},
  ];

  const quickActions = [
    { label: "Edit Hero Slides", desc: "Add or remove homepage carousel images", href: "/admin/carousel" },
    { label: "Manage Testimonials", desc: "Update client quotes and names", href: "/admin/testimonials" },
    { label: "Edit Navbar Links", desc: "Change navigation menu items", href: "/admin/links" },
    { label: "Footer Settings", desc: "Update contact info and social links", href: "/admin/footer" },
    { label: "Portfolio", desc: "Manage projects and surface finishes", href: "/admin/portfolio" },
    { label: "Site Settings", desc: "Update page title and meta description", href: "/admin/settings" },
  ];

  // Content health checks
  const health = [
    { label: "Hero slides configured", ok: db.carouselItems.length > 0 },
    { label: "Testimonials present", ok: db.testimonials.length > 0 },
    { label: "Navbar links set", ok: db.navLinks.length > 0 },
    { label: "Projects added", ok: projects.length > 0 },
    { label: "Finishes added", ok: finishes.length > 0 },
    { label: "Footer phone set", ok: !!db.footerSettings?.phone },
    { label: "Social links configured", ok: !!(db.footerSettings?.socials?.instagram && db.footerSettings?.socials?.instagram !== "#") },
  ];

  const healthScore = Math.round((health.filter(h => h.ok).length / health.length) * 100);

  return (
    <div className="flex flex-col gap-8 pb-12">

      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-0.5">Welcome back — your site is live and running.</p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block"></span>
          Site Online
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <div className={`w-9 h-9 rounded-lg ${stat.color} flex items-center justify-center mb-3`}>
              {stat.icon}
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-xs text-gray-500 mt-0.5 group-hover:text-gray-700 transition">{stat.label}</p>
          </Link>
        ))}
      </div>

      {/* Charts + Health Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Audience Chart */}
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-xl p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Audience Overview</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">14,204 <span className="text-sm font-normal text-gray-400">visitors / mo</span></p>
            </div>
            <span className="flex items-center gap-1 text-emerald-600 text-xs font-semibold bg-emerald-50 px-2 py-1 rounded-full">
              ↑ 12% vs last month
            </span>
          </div>
          <svg viewBox="0 0 700 160" className="w-full h-32" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#111827" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#111827" stopOpacity="0"/>
              </linearGradient>
            </defs>
            {/* Grid lines */}
            {[40, 80, 120].map(y => (
              <line key={y} x1="0" y1={y} x2="700" y2={y} stroke="#f3f4f6" strokeWidth="1"/>
            ))}
            {/* Area */}
            <path d="M0,140 C50,120 80,100 140,110 C200,120 230,60 300,70 C370,80 400,30 470,40 C540,50 580,10 700,20 L700,160 L0,160 Z" fill="url(#grad)"/>
            {/* Line */}
            <path d="M0,140 C50,120 80,100 140,110 C200,120 230,60 300,70 C370,80 400,30 470,40 C540,50 580,10 700,20" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round"/>
            {/* Dots */}
            {[[0,140],[140,110],[300,70],[470,40],[700,20]].map(([x,y], i) => (
              <circle key={i} cx={x} cy={y} r="4" fill="white" stroke="#111827" strokeWidth="2"/>
            ))}
          </svg>
          <div className="flex justify-between text-[11px] text-gray-400 mt-2">
            {["Jan","Feb","Mar","Apr","May","Jun","Jul"].map(m => <span key={m}>{m}</span>)}
          </div>
        </div>

        {/* Content Health */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Content Health</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{healthScore}<span className="text-sm font-normal text-gray-400">%</span></p>
            </div>
            <div className="w-12 h-12 relative">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f3f4f6" strokeWidth="3"/>
                <circle cx="18" cy="18" r="15.9" fill="none" stroke={healthScore >= 80 ? "#10b981" : healthScore >= 50 ? "#f59e0b" : "#ef4444"} strokeWidth="3" strokeDasharray={`${healthScore} ${100 - healthScore}`} strokeDashoffset="25" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            {health.map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${item.ok ? "bg-emerald-100" : "bg-gray-100"}`}>
                  {item.ok ? (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  ) : (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="12"/><line x1="12" y1="16" x2="12" y2="19"/></svg>
                  )}
                </div>
                <span className={`text-xs ${item.ok ? "text-gray-700" : "text-gray-400"}`}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {quickActions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-gray-200 transition-all duration-200 group flex items-start justify-between"
            >
              <div>
                <p className="font-semibold text-gray-900 text-sm group-hover:text-gray-700">{action.label}</p>
                <p className="text-gray-400 text-xs mt-1">{action.desc}</p>
              </div>
              <svg className="text-gray-300 group-hover:text-gray-600 transition mt-0.5 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
