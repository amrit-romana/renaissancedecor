"use server";
import { promises as fs } from "fs";
import path from "path";

export interface ProjectData {
  id: string;
  title: string;
  image: string;
  aspect?: string; // used for grid layout sizing
  showOnHome: boolean;
  galleryImages?: string[]; // new optional array of images for the project detail page
  description?: string; // new optional text description for the detail page
}

const dataFilePath = path.join(process.cwd(), "src", "data", "projects.json");

export async function getProjects(): Promise<ProjectData[]> {
  try {
    const fileContents = await fs.readFile(dataFilePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    return [];
  }
}

export async function saveProject(project: Partial<ProjectData>): Promise<{ success: boolean; error?: string }> {
  try {
    const data = await fs.readFile(dataFilePath, "utf8");
    let projects: ProjectData[] = JSON.parse(data);

    if (project.id) {
      // Update existing
      projects = projects.map((p) => (p.id === project.id ? { ...p, ...project } : p));
    } else {
      // Add new
      const newProject: ProjectData = {
        id: Date.now().toString(),
        title: project.title || "Untitled",
        image: project.image || "",
        aspect: project.aspect || "aspect-[3/4]",
        showOnHome: project.showOnHome || false,
        galleryImages: project.galleryImages || [],
        description: project.description || "",
      };
      projects.push(newProject);
    }
    await fs.writeFile(dataFilePath, JSON.stringify(projects, null, 2), "utf8");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to save project" };
  }
}

export async function saveProjects(projects: ProjectData[]): Promise<void> {
  await fs.writeFile(dataFilePath, JSON.stringify(projects, null, 2), "utf8");
}
