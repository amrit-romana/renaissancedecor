import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { existsSync } from "fs";

export const config = { api: { bodyParser: false } };

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("files") as File[];
    const folder = (formData.get("folder") as string) || "uploads";

    if (!files || files.length === 0) {
      return NextResponse.json({ error: "No files provided" }, { status: 400 });
    }

    // Create upload directory if it doesn't exist
    const uploadDir = path.join(process.cwd(), "public", "uploads", folder);
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    const uploadedPaths: string[] = [];

    for (const file of files) {
      if (!(file instanceof File)) continue;

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Sanitise filename
      const originalName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const timestamp = Date.now();
      const ext = path.extname(originalName);
      const baseName = path.basename(originalName, ext);
      const fileName = `${baseName}_${timestamp}${ext}`;

      const filePath = path.join(uploadDir, fileName);
      await writeFile(filePath, buffer);

      // Return public URL path
      uploadedPaths.push(`/uploads/${folder}/${fileName}`);
    }

    return NextResponse.json({ paths: uploadedPaths, count: uploadedPaths.length });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
