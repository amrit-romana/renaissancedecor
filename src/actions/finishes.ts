"use server";
import { promises as fs } from "fs";
import path from "path";

export interface FinishData {
  id: string;
  name: string;
  image: string;
  showOnHome: boolean;
}

const dataFilePath = path.join(process.cwd(), "src", "data", "finishes.json");

export async function getFinishes(): Promise<FinishData[]> {
  try {
    const fileContents = await fs.readFile(dataFilePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    return [];
  }
}

export async function saveFinishes(finishes: FinishData[]): Promise<void> {
  await fs.writeFile(dataFilePath, JSON.stringify(finishes, null, 2), "utf8");
}
