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
    return { navLinks: [], carouselItems: [], testimonials: [], footerSettings: {}, siteSettings: {} };
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

export async function updateNavLink(id: string, name: string, href: string) {
  const db = await getDbData();
  db.navLinks = db.navLinks.map((l: any) => l.id === id ? { ...l, name, href } : l);
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

export async function updateCarouselItem(id: string, imageSrc: string, title: string, subtitle: string) {
  const db = await getDbData();
  db.carouselItems = db.carouselItems.map((c: any) => c.id === id ? { ...c, imageSrc, title, subtitle } : c);
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

export async function updateTestimonial(id: string, quote: string, name: string, title: string) {
  const db = await getDbData();
  db.testimonials = db.testimonials.map((t: any) => t.id === id ? { ...t, quote, name, title } : t);
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

// -- FOOTER SETTINGS --
export async function saveFooterSettings(formData: FormData) {
  const db = await getDbData();
  db.footerSettings = {
    address: formData.get("address") as string,
    addressNote: formData.get("addressNote") as string,
    phone: formData.get("phone") as string,
    openingHours: formData.get("openingHours") as string,
    abn: formData.get("abn") as string,
    director: {
      name: formData.get("director_name") as string,
      email: formData.get("director_email") as string,
    },
    marketing: {
      name: formData.get("marketing_name") as string,
      email: formData.get("marketing_email") as string,
    },
    socials: {
      instagram: formData.get("instagram") as string,
      facebook: formData.get("facebook") as string,
      pinterest: formData.get("pinterest") as string,
      tiktok: formData.get("tiktok") as string,
      linkedin: formData.get("linkedin") as string,
    },
    copyrightName: formData.get("copyrightName") as string,
  };
  await saveDbData(db);
  revalidatePath("/");
  revalidatePath("/admin/footer");
}

// -- SITE SETTINGS --
export async function saveSiteSettings(formData: FormData) {
  const db = await getDbData();
  db.siteSettings = {
    siteTitle: formData.get("siteTitle") as string,
    metaDescription: formData.get("metaDescription") as string,
  };
  await saveDbData(db);
  revalidatePath("/");
  revalidatePath("/admin/settings");
}
