"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Hardcoded for simplicity (or use process.env.ADMIN_PASSWORD).
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

export async function loginAction(prevState: any, formData: FormData) {
  const password = formData.get("password") as string;
  
  if (password === ADMIN_PASSWORD) {
    // Basic session cookie - in a real app, encrypt this or use iron-session / jwt.
    (await cookies()).set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });
    return redirect("/admin");
  }
  
  return { error: "Invalid password" };
}

export async function logoutAction() {
  (await cookies()).delete("admin_session");
  return redirect("/admin/login");
}
