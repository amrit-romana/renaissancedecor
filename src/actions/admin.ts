"use server";
import { revalidatePath } from "next/cache";
import fs from "fs/promises";
import path from "path";

const dbPath = path.join(process.cwd(), "src/data/db.json");

export async function getDbData() {
  try {
    const data = await fs.readFile(dbPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Failed to read DB", error);
    return { navLinks: [], carouselItems: [], testimonials: [] };
  }
}

async function saveDbData(data: any) {
  try {
    await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Failed to write DB", error);
  }
}

// -- NAV LINKS --
export async function addNavLink(formData: FormData) {
  const name = formData.get("name") as string;
  const href = formData.get("href") as string;
  if (!name || !href) return;

  const db = await getDbData();
  db.navLinks.push({ id: Date.now().toString(), name, href });
  await saveDbData(db);
  revalidatePath("/");
  revalidatePath("/admin/links");
}

export async function deleteNavLink(id: string) {
  const db = await getDbData();
  db.navLinks = db.navLinks.filter((l: any) => l.id !== id);
  await saveDbData(db);
  revalidatePath("/");
  revalidatePath("/admin/links");
}

// -- CAROUSEL ITEMS --
export async function addCarouselItem(formData: FormData) {
  const imageSrc = formData.get("imageSrc") as string;
  const title = formData.get("title") as string;
  const subtitle = formData.get("subtitle") as string;
  if (!imageSrc) return;

  const db = await getDbData();
  db.carouselItems.push({ id: Date.now().toString(), imageSrc, title, subtitle });
  await saveDbData(db);
  revalidatePath("/");
  revalidatePath("/admin/carousel");
}

export async function deleteCarouselItem(id: string) {
  const db = await getDbData();
  db.carouselItems = db.carouselItems.filter((c: any) => c.id !== id);
  await saveDbData(db);
  revalidatePath("/");
  revalidatePath("/admin/carousel");
}

// -- TESTIMONIALS --
export async function addTestimonial(formData: FormData) {
  const quote = formData.get("quote") as string;
  const name = formData.get("name") as string;
  const title = formData.get("title") as string;
  if (!quote || !name) return;

  const db = await getDbData();
  db.testimonials.push({ id: Date.now().toString(), quote, name, title });
  await saveDbData(db);
  revalidatePath("/");
  revalidatePath("/admin/testimonials");
}

export async function deleteTestimonial(id: string) {
  const db = await getDbData();
  db.testimonials = db.testimonials.filter((t: any) => t.id !== id);
  await saveDbData(db);
  revalidatePath("/");
  revalidatePath("/admin/testimonials");
}
