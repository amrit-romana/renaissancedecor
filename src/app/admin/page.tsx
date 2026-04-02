"use client";

import { useEffect, useState } from "react";
import { getProjects, saveProjects, ProjectData } from "@/actions/projects";
import { getFinishes, saveFinishes, FinishData } from "@/actions/finishes";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"projects" | "finishes">("projects");
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [finishes, setFinishes] = useState<FinishData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getProjects(), getFinishes()]).then(([pData, fData]) => {
      setProjects(pData);
      setFinishes(fData);
      setLoading(false);
    });
  }, []);

  // --- Project Handlers ---
  const handleSaveProjects = async (updated: ProjectData[]) => {
    await saveProjects(updated);
    setProjects(updated);
  };
  const toggleProjectHome = (id: string) => handleSaveProjects(projects.map(p => p.id === id ? { ...p, showOnHome: !p.showOnHome } : p));
  const addProject = () => handleSaveProjects([...projects, { id: Date.now().toString(), title: "New Project", image: "", aspect: "3/4", showOnHome: false }]);
  const removeProject = (id: string) => handleSaveProjects(projects.filter(p => p.id !== id));
  const updateProject = (id: string, field: keyof ProjectData, value: string) => setProjects(projects.map(p => p.id === id ? { ...p, [field]: value } : p));

  // --- Finishes Handlers ---
  const handleSaveFinishes = async (updated: FinishData[]) => {
    await saveFinishes(updated);
    setFinishes(updated);
  };
  const toggleFinishHome = (id: string) => handleSaveFinishes(finishes.map(f => f.id === id ? { ...f, showOnHome: !f.showOnHome } : f));
  const addFinish = () => handleSaveFinishes([...finishes, { id: Date.now().toString(), name: "New Finish", image: "", showOnHome: false }]);
  const removeFinish = (id: string) => handleSaveFinishes(finishes.filter(f => f.id !== id));
  const updateFinish = (id: string, field: keyof FinishData, value: string) => setFinishes(finishes.map(f => f.id === id ? { ...f, [field]: value } : f));

  if (loading) return <div className="p-10 font-sans text-xs uppercase text-center mt-20">Loading Database...</div>;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 p-6 flex flex-col gap-6 flex-shrink-0">
        <h2 className="font-serif text-2xl mb-8 mt-4">Admin</h2>
        <nav className="flex flex-col gap-2">
          <button 
            onClick={() => setActiveTab("projects")}
            className={`text-left px-4 py-3 rounded-md text-xs tracking-widest uppercase font-bold transition-colors ${activeTab === "projects" ? "bg-black text-white" : "hover:bg-gray-100"}`}
          >
            Portfolio Projects
          </button>
          <button 
            onClick={() => setActiveTab("finishes")}
            className={`text-left px-4 py-3 rounded-md text-xs tracking-widest uppercase font-bold transition-colors ${activeTab === "finishes" ? "bg-black text-white" : "hover:bg-gray-100"}`}
          >
            Surface Finishes
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-10 pb-4 border-b">
            <h1 className="font-serif text-3xl">{activeTab === "projects" ? "Manage Projects" : "Manage Finishes"}</h1>
            <button 
              onClick={activeTab === "projects" ? addProject : addFinish}
              className="px-4 py-2 bg-black text-white text-xs uppercase tracking-wider rounded-md hover:bg-black/80"
            >
              + Add {activeTab === "projects" ? "Project" : "Finish"}
            </button>
          </div>

          <div className="space-y-6">
            {activeTab === "projects" && projects.map((project) => (
              <div key={project.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-32 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                  <img src={project.image || "https://via.placeholder.com/300"} alt="Preview" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 space-y-4">
                  <input type="text" value={project.title} placeholder="Project Title" onChange={(e) => updateProject(project.id, "title", e.target.value)} onBlur={() => handleSaveProjects(projects)} className="w-full border-b border-gray-300 py-1 focus:outline-none focus:border-black font-bold" />
                  <input type="text" value={project.image} placeholder="Cover Image URL" onChange={(e) => updateProject(project.id, "image", e.target.value)} onBlur={() => handleSaveProjects(projects)} className="w-full border-b border-gray-300 py-1 focus:outline-none focus:border-black text-xs" />
                  
                  <textarea 
                    value={project.description || ""} 
                    placeholder="Project Description (appears on detail page)" 
                    onChange={(e) => updateProject(project.id, "description", e.target.value)} 
                    onBlur={() => handleSaveProjects(projects)} 
                    className="w-full border-b border-gray-300 py-1 focus:outline-none focus:border-black text-xs" 
                    rows={2}
                  />
                  
                  <textarea 
                    defaultValue={project.galleryImages?.join(",\n") || ""} 
                    placeholder="Gallery Image URLs (comma separated)" 
                    onBlur={(e) => {
                      const arr = e.target.value.split(",").map(s => s.trim()).filter(Boolean);
                      const newProjects = projects.map(p => p.id === project.id ? { ...p, galleryImages: arr } : p);
                      setProjects(newProjects);
                      handleSaveProjects(newProjects);
                    }} 
                    className="w-full border-b border-gray-300 py-1 focus:outline-none focus:border-black text-xs font-mono" 
                    rows={3}
                  />

                  <div className="flex gap-4 items-center pt-2">
                    <select value={project.aspect} onChange={(e) => { updateProject(project.id, "aspect", e.target.value); handleSaveProjects(projects.map(p => p.id === project.id ? { ...p, aspect: e.target.value } : p)); }} className="border border-gray-300 p-1 text-xs">
                      <option value="16/9">Landscape (16:9)</option>
                      <option value="1/1">Square (1:1)</option>
                      <option value="3/4">Portrait (3:4)</option>
                      <option value="4/5">Portrait (4:5)</option>
                    </select>
                    <label className="flex items-center gap-2 cursor-pointer ml-auto">
                      <input type="checkbox" checked={project.showOnHome} onChange={() => toggleProjectHome(project.id)} className="w-4 h-4 cursor-pointer" />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Show Homepage</span>
                    </label>
                    <button onClick={() => removeProject(project.id)} className="text-[10px] text-red-500 uppercase tracking-widest ml-4">Delete</button>
                  </div>
                </div>
              </div>
            ))}

            {activeTab === "finishes" && finishes.map((finish) => (
              <div key={finish.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-32 h-32 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                  <img src={finish.image || "https://via.placeholder.com/300"} alt="Preview" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 space-y-4">
                  <input type="text" value={finish.name} placeholder="Finish Name" onChange={(e) => updateFinish(finish.id, "name", e.target.value)} onBlur={() => handleSaveFinishes(finishes)} className="w-full border-b border-gray-300 py-1 focus:outline-none focus:border-black font-bold" />
                  <input type="text" value={finish.image} placeholder="Image URL" onChange={(e) => updateFinish(finish.id, "image", e.target.value)} onBlur={() => handleSaveFinishes(finishes)} className="w-full border-b border-gray-300 py-1 focus:outline-none focus:border-black text-xs" />
                  <div className="flex gap-4 items-center pt-2">
                    <label className="flex items-center gap-2 cursor-pointer ml-auto">
                      <input type="checkbox" checked={finish.showOnHome} onChange={() => toggleFinishHome(finish.id)} className="w-4 h-4 cursor-pointer" />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Show Homepage (Max 4)</span>
                    </label>
                    <button onClick={() => removeFinish(finish.id)} className="text-[10px] text-red-500 uppercase tracking-widest ml-4">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
