import { getDbData, saveFooterSettings } from "@/actions/admin";

export default async function AdminFooterPage() {
  const db = await getDbData();
  const f = db.footerSettings || {};

  return (
    <div className="flex flex-col gap-6 pb-12">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Footer Settings</h1>
        <p className="text-gray-500 text-sm mt-1">All changes here update the website footer immediately after saving.</p>
      </div>

      <form action={saveFooterSettings} className="flex flex-col gap-6">

        {/* Contact & Address */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-semibold text-gray-900 text-sm mb-5 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Location & Contact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Address</label>
              <textarea name="address" rows={2} defaultValue={f.address || ""} className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none" placeholder="Unit 5 / 314 Governor Road,&#10;Braeside 3195" />
            </div>
            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Address Note (e.g. "Visits by appointment only")</label>
              <input name="addressNote" defaultValue={f.addressNote || ""} className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" placeholder="Showroom/Warehouse — Visits by appointment only" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone Number</label>
              <input name="phone" defaultValue={f.phone || ""} className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" placeholder="0468 326 303" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Opening Hours</label>
              <input name="openingHours" defaultValue={f.openingHours || ""} className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" placeholder="9:00am — 5:00pm, Mon – Fri" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">ABN</label>
              <input name="abn" defaultValue={f.abn || ""} className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" placeholder="ABN 70 890 172 250" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Copyright Name</label>
              <input name="copyrightName" defaultValue={f.copyrightName || ""} className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" placeholder="Renaissance Decor" />
            </div>
          </div>
        </div>

        {/* Team Contacts */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-semibold text-gray-900 text-sm mb-5 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            Team Contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Director</p>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Name / Role Label</label>
                <input name="director_name" defaultValue={f.director?.name || ""} className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" placeholder="Director – Adam McCann" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</label>
                <input name="director_email" type="email" defaultValue={f.director?.email || ""} className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" placeholder="info@renaissancedecor.com.au" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Marketing</p>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Name / Role Label</label>
                <input name="marketing_name" defaultValue={f.marketing?.name || ""} className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" placeholder="Marketing – Toni McCann" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</label>
                <input name="marketing_email" type="email" defaultValue={f.marketing?.email || ""} className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" placeholder="office@renaissancedecor.com.au" />
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-semibold text-gray-900 text-sm mb-5 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            Social Media Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "instagram", label: "Instagram", placeholder: "https://instagram.com/renaissancedecor" },
              { name: "facebook", label: "Facebook", placeholder: "https://facebook.com/renaissancedecor" },
              { name: "pinterest", label: "Pinterest", placeholder: "https://pinterest.com/renaissancedecor" },
              { name: "tiktok", label: "TikTok", placeholder: "https://tiktok.com/@renaissancedecor" },
              { name: "linkedin", label: "LinkedIn", placeholder: "https://linkedin.com/company/renaissancedecor" },
            ].map(social => (
              <div key={social.name} className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{social.label}</label>
                <input name={social.name} defaultValue={f.socials?.[social.name] || ""} type="url" className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" placeholder={social.placeholder} />
              </div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button type="submit" className="px-8 py-3 bg-gray-900 text-white font-semibold text-sm rounded-xl hover:bg-gray-700 transition flex items-center gap-2 shadow-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
            Save Footer Settings
          </button>
        </div>
      </form>
    </div>
  );
}
