"use client";

import { motion, useReducedMotion } from "framer-motion";

import { finale } from "@/lib/content";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function FinaleSection() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="finale-heading"
      className="relative overflow-hidden pb-44 pt-20 sm:pb-52 sm:pt-28"
    >
      <div className="absolute inset-x-0 top-0 mx-auto flex max-w-[min(1220px,94vw)] items-center gap-10 px-5 sm:px-10">
        <span aria-hidden className="h-[1px] flex-1 origin-left bg-gradient-to-r from-transparent via-ink/[0.12] to-ink/[0.12]" />
        <motion.span
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: reduce ? 0 : 1.8, ease: easeOut }}
          aria-hidden
          className="h-[1px] w-44 origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
        />
        <span aria-hidden className="h-[1px] flex-1 origin-right bg-gradient-to-l from-transparent via-ink/[0.12] to-ink/[0.12]" />
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-12% 0px" }}
        transition={{ duration: reduce ? 0 : 1.15, ease: easeOut, delay: reduce ? 0 : 0.12 }}
        className="relative z-[2] mx-auto mt-28 max-w-4xl px-6 text-center sm:mt-36 sm:px-10"
      >
        <h2 id="finale-heading" className="sr-only">
          Closing dedication
        </h2>

        <p className="font-serif text-[clamp(1.9rem,4.2vw,3.05rem)] font-medium leading-[1.06] tracking-[-0.02em] text-ink drop-shadow-[0_18px_40px_-25px_rgba(26,26,26,0.45)]">
          {finale.line}
        </p>

        <div className="mt-14 border border-ink/[0.08] bg-canvas/80 px-[clamp(1.25rem,3vw,2.25rem)] py-9 shadow-[0px_62px_120px_-82px_rgba(26,26,26,0.55)] backdrop-blur-sm">
          <p className="text-[clamp(0.94rem,2.4vw,1.125rem)] font-medium uppercase tracking-[clamp(0.36em,1.85vw,0.78em)] text-ink/[0.45]">
            {finale.signoff}
          </p>
        </div>
      </motion.div>

      <motion.div
        aria-hidden
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: reduce ? 0.14 : 0.22 }}
        viewport={{ once: true }}
        transition={{ duration: reduce ? 0 : 1.6 }}
        className="pointer-events-none absolute -bottom-[18%] left-[-10%] h-[clamp(460px,60vw,640px)] w-[clamp(460px,60vw,640px)] rounded-full bg-blush/[0.32] blur-[120px]"
      />
      <motion.div
        aria-hidden
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: reduce ? 0.1 : 0.16 }}
        viewport={{ once: true }}
        transition={{ duration: reduce ? 0 : 1.6, delay: reduce ? 0 : 0.15 }}
        className="pointer-events-none absolute bottom-[-26%] right-[-14%] h-[clamp(360px,45vw,520px)] w-[clamp(360px,45vw,520px)] rounded-full bg-gold/[0.16] blur-[110px]"
      />
    </section>
  );
}
