"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import data from "@/data/duracare.json";
import Icon from "@/components/common/Icon";

const { icons } = data.gallery;
const { labels } = data;

type MediaItem = { src: string; alt: string; thumbnail?: string };

type MediaGalleryProps = {
  items: MediaItem[];
  type: "image" | "video";
};

export default function MediaGallery({ items, type }: MediaGalleryProps) {
  const [active, setActive] = useState<number | null>(null);
  const isVideo = type === "video";

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  const current = active === null ? null : items[active];

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <button
            key={`${item.src}-${i}`}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`${isVideo ? labels.playVideo : labels.viewImage}: ${item.alt}`}
            className="group relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-200 shadow-[0_10px_30px_-14px_rgba(11,42,111,0.35)] outline-none focus-visible:ring-4 focus-visible:ring-orange/60"
          >
            <Image
              src={item.thumbnail ?? item.src}
              alt={item.alt}
              fill
              sizes="(min-width:1024px) 420px, (min-width:640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {isVideo ? (
              <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/30">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-navy shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-orange group-hover:text-white">
                  <Icon name={icons.play} size={20} className="ml-1" />
                </span>
              </span>
            ) : (
              <span className="absolute inset-0 flex items-center justify-center bg-navy/0 opacity-0 transition-all duration-300 group-hover:bg-navy/45 group-hover:opacity-100">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-orange text-white">
                  <Icon name={icons.zoom} size={20} />
                </span>
              </span>
            )}
          </button>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020b1f]/90 p-4 backdrop-blur-sm sm:p-10"
        >
          <button
            type="button"
            onClick={close}
            aria-label={labels.close}
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-navy transition-colors hover:bg-orange hover:text-white sm:right-8 sm:top-8"
          >
            <Icon name={icons.close} size={20} />
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label={labels.previous}
                className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-orange sm:left-8"
              >
                <Icon name={icons.prev} size={18} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label={labels.next}
                className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-orange sm:right-8"
              >
                <Icon name={icons.next} size={18} />
              </button>
            </>
          )}

          <figure onClick={(e) => e.stopPropagation()} className="w-full max-w-5xl">
            {isVideo ? (
              <video
                key={active}
                src={current.src}
                poster={current.thumbnail}
                controls
                autoPlay
                playsInline
                className="max-h-[78vh] w-full rounded-2xl bg-black"
              />
            ) : (
              <div className="relative h-[70vh] w-full">
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="(min-width:1024px) 1024px, 100vw"
                  className="rounded-2xl object-contain"
                />
              </div>
            )}
            <figcaption className="mt-4 text-center text-sm text-white/80">
              {current.alt}
              <span className="ml-2 text-white/50">
                {active! + 1} / {items.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
