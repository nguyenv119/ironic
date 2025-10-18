import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import { join } from "path";

export type MemeRecord = {
  id: string;
  userId: string;
  imageId: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};

const storagePath = join(process.cwd(), "data", "memes.json");

async function readMemes(): Promise<MemeRecord[]> {
  try {
    const raw = await fs.readFile(storagePath, "utf-8");
    return JSON.parse(raw) as MemeRecord[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      await fs.mkdir(join(process.cwd(), "data"), { recursive: true });
      await fs.writeFile(storagePath, "[]", "utf-8");
      return [];
    }
    throw error;
  }
}

async function writeMemes(memes: MemeRecord[]) {
  await fs.writeFile(storagePath, JSON.stringify(memes, null, 2), "utf-8");
}

export async function listMemes(userId: string): Promise<MemeRecord[]> {
  const memes = await readMemes();
  return memes.filter((meme) => meme.userId === userId);
}

export async function getMeme(userId: string, id: string): Promise<MemeRecord | undefined> {
  const memes = await readMemes();
  return memes.find((meme) => meme.userId === userId && meme.id === id);
}

export async function createMeme(
  userId: string,
  meme: Pick<MemeRecord, "imageId" | "text">
): Promise<MemeRecord> {
  const memes = await readMemes();
  const now = new Date().toISOString();
  const record: MemeRecord = {
    id: randomUUID(),
    userId,
    imageId: meme.imageId,
    text: meme.text,
    createdAt: now,
    updatedAt: now,
  };
  await writeMemes([...memes, record]);
  return record;
}

export async function updateMeme(
  userId: string,
  id: string,
  updates: Partial<Pick<MemeRecord, "imageId" | "text">>
): Promise<MemeRecord> {
  const memes = await readMemes();
  const index = memes.findIndex((meme) => meme.userId === userId && meme.id === id);
  if (index === -1) {
    throw new Error("Meme not found");
  }
  const now = new Date().toISOString();
  const updated: MemeRecord = {
    ...memes[index],
    ...updates,
    updatedAt: now,
  };
  const next = [...memes];
  next[index] = updated;
  await writeMemes(next);
  return updated;
}

export async function deleteMeme(userId: string, id: string): Promise<void> {
  const memes = await readMemes();
  const next = memes.filter((meme) => !(meme.userId === userId && meme.id === id));
  await writeMemes(next);
}
