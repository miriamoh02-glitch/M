"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { HeroSlider } from "@/components/hero-slider";
import { hero, heroSlides } from "@/lib/content";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 48]);
  const contentFade = useTransform(scrollYProgress, [0, 0.75], [1, reduce ? 1 : 0.92]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-svh w-full overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0 min-h-svh">
        <HeroSlider
          slides={heroSlides}
          variant="fullscreen"
          className="h-full min-h-svh w-full"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-ink/[0.55] via-ink/[0.35] to-ink/[0.62]" />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_50%_38%,transparent_12%,rgba(26,26,26,0.38)_82%)] mix-blend-multiply opacity-95" />

      <motion.div
        style={{ opacity: contentFade }}
        className="relative z-[2] mx-auto flex w-full max-w-[min(940px,92vw)] flex-1 flex-col items-center justify-center px-6 pt-28 pb-[calc(2.75rem+env(safe-area-inset-bottom))] text-center sm:px-10 sm:pt-32 lg:px-14"
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduce ? 0 : 1.05,
            ease: easeOut,
            delay: reduce ? 0 : 0.08,
          }}
          className="max-w-xl text-[0.68rem] font-semibold uppercase tracking-[0.58em] text-canvas/[0.78]"
        >
          {hero.kicker}
        </motion.p>

        <motion.div style={{ y: headlineY }}>
          <motion.h1
            id="hero-heading"
            initial={reduce ? false : { opacity: 0, y: 40, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: reduce ? 0 : 1.35,
              ease: easeOut,
              delay: reduce ? 0 : 0.22,
            }}
            className="mt-8 font-serif text-[clamp(2.35rem,5.95vw,5rem)] font-medium leading-[1.04] tracking-[-0.03em] text-canvas drop-shadow-[0_2px_28px_rgba(0,0,0,0.35)] md:leading-[1.02]"
          >
            {hero.headline}
          </motion.h1>
        </motion.div>

        <motion.div
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: reduce ? 0 : 1.65,
            ease: easeOut,
            delay: reduce ? 0 : 0.55,
          }}
          className="mt-12 h-[1px] w-[min(320px,70vw)] origin-center bg-gradient-to-r from-transparent via-gold/[0.88] to-transparent"
        />
      </motion.div>
    </section>
  );
}
