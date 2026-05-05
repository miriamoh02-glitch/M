"use client";

import { useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import type { HeroSlide } from "@/lib/content";

const INTERVAL_MS = 3000;

type HeroSliderProps = {
  slides: HeroSlide[];
  className?: string;
  /** Full-bleed underlay for viewport-height heroes */
  variant?: "card" | "fullscreen";
};

export function HeroSlider({
  slides,
  className = "",
  variant = "card",
}: HeroSliderProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  const count = slides.length;
  const wrap = useCallback(
    (n: number) => ((n % count) + count) % count,
    [count],
  );

  useEffect(() => {
    if (reduceMotion || count <= 1) return undefined;
    const timer = window.setInterval(() => {
      setIndex((i) => wrap(i + 1));
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [count, reduceMotion, wrap]);

  if (count === 0) return null;

  const fullscreen = variant === "fullscreen";

  const frameClass = fullscreen
    ? "relative min-h-svh w-full overflow-hidden bg-ink"
    : "relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-ink/10 bg-ink/[0.04] shadow-[0px_40px_110px_-52px_rgba(26,26,26,0.52)] sm:aspect-[10/11] lg:aspect-[4/5] lg:min-h-[min(640px,74vh)] lg:max-h-[760px]";

  const imageSizes = fullscreen ? "100vw" : "(min-width:1024px) 42vw, 100vw";

  const chromaRail = fullscreen
    ? "from-black/82 via-black/42 to-transparent"
    : "from-canvas/92 via-canvas/35 to-transparent";

  const chromaRailPad = fullscreen ? "pb-14 pt-28" : "pb-4 pt-24 sm:pb-5 sm:pt-28";

  return (
    <div className={className}>
      <div className={frameClass}>
        {slides.map((slide, i) => {
          const active = i === index;
          return (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              loading={i === 0 ? undefined : "lazy"}
              sizes={imageSizes}
              className={`absolute inset-0 object-cover transition-opacity duration-[1100ms] ease-out motion-reduce:transition-none ${
                active ? "z-[2] opacity-100" : "z-[1] opacity-0"
              }`}
              aria-hidden={!active}
            />
          );
        })}

        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 z-[3] bg-gradient-to-t ${chromaRail} ${chromaRailPad}`}
        />
      </div>
    </div>
  );
}
