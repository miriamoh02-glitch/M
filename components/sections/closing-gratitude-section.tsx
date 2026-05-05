"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { closing } from "@/lib/content";

const easeOut = [0.18, 1, 0.35, 1] as const;

export function ClosingGratitudeSection() {
  const reduce = useReducedMotion();
  const backdrop = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: backdrop,
    offset: ["start end", "end start"],
  });
  const wash = useTransform(scrollYProgress, [0.05, 0.38], [0.14, reduce ? 0.14 : 0.54]);

  return (
    <section
      ref={backdrop}
      id="closing"
      aria-labelledby="closing-heading"
      className="relative isolate overflow-hidden px-5 py-28 sm:px-10 sm:py-36"
    >
      <motion.div
        aria-hidden
        style={{ opacity: wash }}
        className="absolute inset-0 -z-10 bg-blush/45"
      />

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16] mix-blend-multiply bg-[linear-gradient(-120deg,transparent,rgba(26,26,26,0.05),transparent)] bg-[length:620px_620px]" />

      <motion.div
        style={{ opacity: wash }}
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_-10%,rgba(198,167,105,0.22),transparent_62%)]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-start lg:gap-20 xl:gap-28">
        <div className="lg:sticky lg:top-28">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.5em] text-ink/40">
            With quiet reverence
          </p>
          <h2
            id="closing-heading"
            className="mt-7 max-w-[18ch] font-serif text-[clamp(2.05rem,3.6vw,2.95rem)] leading-[1.12] tracking-[-0.02em]"
          >
            {closing.heading}
          </h2>
        </div>

        <div className="space-y-7 text-[1.05rem] leading-[1.9] text-ink/[0.73] sm:translate-y-3">
          {closing.paragraphs.map((para, idx) => (
            <motion.p
              key={`closing-${idx}`}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{
                duration: reduce ? 0 : 0.92,
                ease: easeOut,
                delay: reduce ? 0 : 0.06 + idx * 0.1,
              }}
              className={idx === 2 ? "text-[1.08rem] text-ink/[0.8]" : ""}
            >
              {para}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
