"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { ChildTribute } from "@/lib/content";

type ImageLightboxProps = {
  child: ChildTribute;
  onRequestClose: () => void;
};

export function ImageLightbox({ child, onRequestClose }: ImageLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return undefined;

    el.showModal();
    requestAnimationFrame(() => el.querySelector("button")?.focus());

    return () => {
      el.close();
    };
  }, [child.id]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onRequestClose}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          dialogRef.current?.close();
        }
      }}
      aria-labelledby={`lightbox-title-${child.id}`}
      aria-modal="true"
      className="w-[min(1200px,calc(100vw-48px))] max-w-none border-0 bg-transparent p-0 text-inherit backdrop:bg-[rgba(26,26,26,0.68)] backdrop:backdrop-blur-[2px] open:pointer-events-auto"
    >
      <div className="relative rounded-sm border border-ink/10 bg-canvas p-6 shadow-[0_48px_100px_-40px_rgba(26,26,26,0.55)] md:p-11">
        <button
          type="button"
          className="absolute right-5 top-5 z-10 rounded-full border border-ink/10 bg-canvas px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-ink/70 transition-colors hover:bg-blush/50"
          onClick={() => dialogRef.current?.close()}
        >
          Close
        </button>
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] md:items-start md:gap-14 lg:gap-16">
          <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-sm sm:aspect-[10/11]">
            <Image
              src={child.imageSrc}
              alt={child.imageAlt}
              fill
              sizes="(min-width:900px) 520px, 88vw"
              className="object-cover"
              loading="lazy"
            />
          </figure>
          <div className="pt-2 md:pt-10">
            <h2
              id={`lightbox-title-${child.id}`}
              className="font-serif text-[clamp(1.85rem,2.85vw,2.55rem)] leading-[1.12] tracking-[-0.02em] text-ink"
            >
              {child.name}
              <span className="mt-4 block font-sans text-[0.7rem] font-medium uppercase tracking-[0.42em] text-ink/45">
                {child.role}
              </span>
            </h2>
            <div className="mt-9 space-y-5 text-[1.03rem] leading-[1.75] text-ink/74">
              {child.message.map((para, idx) => (
                <p key={`${child.id}-lightbox-${idx}`}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
