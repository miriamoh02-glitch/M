"use client";

import { motion, useReducedMotion } from "framer-motion";
import { intro } from "@/lib/content";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function IntroSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="intro"
      className="relative mx-auto max-w-6xl px-5 pb-28 sm:px-10 lg:pb-36"
      aria-labelledby="intro-heading"
    >
      <div className="grid gap-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-24 lg:items-start">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: reduce ? 0 : 1.1, ease: easeOut }}
          className="relative"
        >
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.48em] text-gold">
            Dear Mum
          </p>
          <h2
            id="intro-heading"
            className="mt-5 max-w-[16ch] font-serif text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.12] tracking-[-0.02em] text-ink"
          >
            {intro.heading}
          </h2>
          <motion.div
            aria-hidden
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduce ? 0 : 1.4, ease: easeOut, delay: reduce ? 0 : 0.15 }}
            className="absolute -left-4 top-[4.75rem] hidden h-[clamp(240px,32vh,340px)] w-[2px] origin-top bg-gradient-to-b from-gold/90 via-blush to-transparent lg:block"
          />
        </motion.div>

        <div className="space-y-7 text-[1.05rem] leading-[1.85] text-ink/72 lg:translate-y-[0.85rem]">
          {intro.paragraphs.map((para, idx) => (
            <motion.p
              key={`intro-${idx}-${para.slice(0, 40)}`}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{
                duration: reduce ? 0 : 0.95,
                ease: easeOut,
                delay: reduce ? 0 : 0.18 + idx * 0.16,
              }}
            >
              {para}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
