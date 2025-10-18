"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Send } from "lucide-react";
import { toPng } from "html-to-image";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { memeImages } from "../../images";

type MemeState = {
  id?: string;
  text: string;
  imageId: string;
};

export function MemeWorkspace() {
  const previewRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");
  const [activeMeme, setActiveMeme] = useState<MemeState | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const currentImage = useMemo(() => {
    if (!activeMeme) return memeImages[0];
    return memeImages.find((item) => item.id === activeMeme.imageId) ?? memeImages[0];
  }, [activeMeme]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const image = memeImages[Math.floor(Math.random() * memeImages.length)] ?? memeImages[0];

    const meme: MemeState = {
      text: trimmed,
      imageId: image.id,
    };

    setActiveMeme(meme);
    setInput("");
    setIsEditing(false);
  }

  function cycleImage() {
    if (!activeMeme) return;
    const currentIndex = memeImages.findIndex((item) => item.id === activeMeme.imageId);
    const nextIndex = (currentIndex + 1) % memeImages.length;
    setActiveMeme({ ...activeMeme, imageId: memeImages[nextIndex].id });
  }

  function handleEditToggle() {
    if (!activeMeme) return;
    setIsEditing((prev) => !prev);
  }

  function handleTextUpdate(text: string) {
    if (!activeMeme) return;
    setActiveMeme({ ...activeMeme, text });
  }

  async function handleDownload() {
    if (!activeMeme || !previewRef.current) return;
    try {
      setIsDownloading(true);
      const dataUrl = await toPng(previewRef.current, {
        cacheBust: true,
        quality: 0.95,
        skipFonts: false,
      });
      const link = document.createElement("a");
      const safeText = activeMeme.text.slice(0, 24).replace(/[^a-z0-9]+/gi, "-");
      link.download = `ironic-meme-${safeText || "caption"}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error(err);
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <section className="flex w-full flex-col items-center gap-10 lg:gap-12">
      <div className="flex w-full max-w-3xl flex-col items-center gap-6">
        <div className="w-full rounded-sm border border-black bg-white px-6 py-8">
          <div className="flex flex-col gap-6">
            <div className="flex w-full justify-start">
              <div ref={previewRef} className="w-full">
                {activeMeme ? (
                  <figure className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-3xl border border-black">
                    <Image
                      src={currentImage.src}
                      alt={currentImage.label}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 420px"
                      priority
                    />
                    <figcaption className="absolute inset-0 flex items-center justify-center p-6 text-center text-3xl font-bold uppercase tracking-tight text-white font-meme [text-shadow:_2px_2px_0_#000] [--stroke:1px_black] [text-stroke:var(--stroke)] [-webkit-text-stroke:var(--stroke)]">
                      {activeMeme.text}
                    </figcaption>
                  </figure>
                ) : (
                  <div className="mx-auto flex h-64 w-full max-w-[420px] items-center justify-center rounded-3xl border border-dashed border-black text-xs uppercase tracking-wide text-muted shadow-[8px_8px_0_0_#000]">
                    Your meme will appear here!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-5xl">
          <div className="w-full rounded-full border border-black bg-white px-4 pr-2 py-1 overflow-hidden">
            <div className="flex items-center gap-2">
              <input
                id="meme-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Say something!"
                className="flex-1 bg-transparent text-sm text-black h-10 px-2 outline-none border-0 focus:ring-0"
              />
              <button
                type="submit"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white hover:bg-black/80 transition"
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex w-full max-w-3xl flex-col items-center gap-5">
        <div className="flex w-full flex-wrap justify-center gap-3">
          <Button type="button" variant="outline" onClick={cycleImage} disabled={!activeMeme}>
            Change Image
          </Button>
          <Button type="button" variant="ghost" onClick={handleEditToggle} disabled={!activeMeme}>
            {isEditing ? "Stop Editing" : "Edit Text"}
          </Button>
          <Button
            type="button"
            onClick={handleDownload}
            disabled={!activeMeme || isDownloading}
          >
            {isDownloading ? "Preparing..." : "Download"}
          </Button>
        </div>

        {isEditing && activeMeme ? (
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[420px] flex flex-col">
              <label className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                Edit caption
              </label>
              <Textarea
                value={activeMeme.text}
                onChange={(event) => handleTextUpdate(event.target.value)}
                className="rounded-xl border border-black bg-white p-3 text-sm text-black resize-none"
                rows={3}
              />
            </div>
          </div>
        ) : null}

      </div>
    </section>
  );
}
