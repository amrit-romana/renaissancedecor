"use client";

import { useEffect, useState, useTransition } from "react";
import { getDbData, addTestimonial, updateTestimonial, deleteTestimonial } from "@/actions/admin";

type Testimonial = { id: string; quote: string; name: string; title: string };

export default function AdminTestimonialsPage() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editData, setEditData] = useState({ quote: "", name: "", title: "" });
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    getDbData().then(db => { setItems(db.testimonials); setLoading(false); });
  }, []);

  const handleEdit = (t: Testimonial) => {
    setEditingId(t.id);
    setEditData({ quote: t.quote, name: t.name, title: t.title });
  };

  const handleSaveEdit = () => {
    if (!editingId) return;
    startTransition(async () => {
      await updateTestimonial(editingId, editData.quote, editData.name, editData.title);
      setItems(prev => prev.map(t => t.id === editingId ? { ...t, ...editData } : t));
      setEditingId(null);
    });
  };

  const handleDelete = (id: string) => {
    startTransition(async () => {
      await deleteTestimonial(id);
      setItems(prev => prev.filter(t => t.id !== id));
    });
  };

  if (loading) return (
    <div className="flex items-center justify-center h-64">
      <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin"/>
    </div>
  );

  return (
    <div className="flex flex-col gap-6 pb-12">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Testimonials</h1>
        <p className="text-gray-500 text-sm mt-1">Manage client quotes displayed on the homepage testimonials section.</p>
      </div>

      {/* Testimonials List */}
      <div className="flex flex-col gap-3">
        {items.map((t, idx) => (
          <div key={t.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            {editingId === t.id ? (
              <div className="p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Quote</label>
                  <textarea
                    value={editData.quote}
                    onChange={e => setEditData(d => ({...d, quote: e.target.value}))}
                    rows={3}
                    className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                  />
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Author Name</label>
                    <input value={editData.name} onChange={e => setEditData(d => ({...d, name: e.target.value}))} className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" />
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Title / Position</label>
                    <input value={editData.title} onChange={e => setEditData(d => ({...d, title: e.target.value}))} className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" />
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <button onClick={handleSaveEdit} disabled={isPending} className="px-5 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition disabled:opacity-50">Save Changes</button>
                  <button onClick={() => setEditingId(null)} className="px-4 py-2 text-gray-500 hover:text-gray-700 text-sm font-medium transition">Cancel</button>
                </div>
              </div>
            ) : (
              <div className="p-6 flex items-start gap-5">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold text-sm flex-shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-800 text-sm italic leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="font-bold text-xs text-gray-900 uppercase tracking-wide">{t.name}</span>
                    {t.title && <span className="text-gray-400 text-xs">— {t.title}</span>}
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button onClick={() => handleEdit(t)} className="px-3 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg transition">Edit</button>
                  <button onClick={() => handleDelete(t.id)} disabled={isPending} className="px-3 py-1.5 text-xs font-semibold text-red-500 hover:bg-red-50 rounded-lg transition border border-red-100 disabled:opacity-50">Delete</button>
                </div>
              </div>
            )}
          </div>
        ))}

        {items.length === 0 && (
          <div className="bg-white border border-gray-100 rounded-xl p-12 text-center text-gray-400 text-sm">
            No testimonials yet. Add your first one below.
          </div>
        )}
      </div>

      {/* Add Form */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h2 className="font-semibold text-gray-900 text-sm mb-5 flex items-center gap-2">
          <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </span>
          Add New Testimonial
        </h2>
        <form action={async (formData: FormData) => {
          await addTestimonial(formData);
          const db = await getDbData();
          setItems(db.testimonials);
        }} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Quote *</label>
            <textarea name="quote" rows={3} required placeholder="The craftsmanship of Renaissance Decor transformed our space..." className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none" />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-1.5 flex-1">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Author Name *</label>
              <input name="name" required placeholder="Isabella Montgomery" className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" />
            </div>
            <div className="flex flex-col gap-1.5 flex-1">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Title / Position</label>
              <input name="title" placeholder="Principal Architect, MH Studio" className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" />
            </div>
          </div>
          <div className="flex justify-end pt-1">
            <button type="submit" className="px-6 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Add Testimonial
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
