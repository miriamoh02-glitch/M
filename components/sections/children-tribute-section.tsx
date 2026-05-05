"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

import { ImageLightbox } from "@/components/image-lightbox";
import { children } from "@/lib/content";
import type { ChildTribute } from "@/lib/content";

const easeOut = [0.22, 1, 0.38, 1] as const;

function MessageReveal({
  lines,
  baseDelay,
  reduceMotion,
}: {
  lines: string[];
  baseDelay: number;
  reduceMotion: boolean | null;
}) {
  return (
    <>
      {lines.map((line, i) => (
        <motion.p
          key={`${line.slice(0, 24)}-${i}`}
          className="leading-[1.85] text-ink/77"
          initial={
            reduceMotion ? false : { opacity: 0, y: 14, skewY: "-0.35deg" }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            skewY: reduceMotion ? "0deg" : "0deg",
          }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{
            duration: reduceMotion ? 0 : 0.92,
            ease: easeOut,
            delay:
              reduceMotion ? 0 : baseDelay + 0.12 + Math.sin(i * 0.8) * 0.06,
          }}
        >
          {line}
        </motion.p>
      ))}
    </>
  );
}

function CardRibbon({ child }: { child: ChildTribute }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 82%", "end 18%"],
  });
  const textLift = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [14, -18],
  );
  const imageLift = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [10, -32],
  );

  return (
    <article
      ref={ref}
      className="relative isolate grid gap-14 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:gap-16 lg:items-center"
      aria-labelledby={`letter-${child.id}`}
    >
      <motion.div style={{ y: imageLift }} className="relative">
        <button
          type="button"
          className="relative block w-full cursor-zoom-in rounded-sm text-left outline-none"
          aria-haspopup="dialog"
          aria-label={`Open enlarged portrait for ${child.name}`}
          data-portrait-trigger={child.id}
        >
          <figure className="relative aspect-[4/5] overflow-hidden rounded-sm bg-ink/[0.04]">
            <div className="float-drift h-full">
              <Image
                src={child.imageSrc}
                alt={child.imageAlt}
                fill
                sizes="(min-width:1024px) 540px, 92vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </figure>
        </button>
      </motion.div>

      <motion.div
        style={{ y: textLift }}
        className="relative -mt-14 rounded-sm bg-canvas/92 p-[clamp(1.45rem,2.5vw,2.25rem)] shadow-[28px_40px_80px_-50px_rgba(26,26,26,0.35)] backdrop-blur-[2px] sm:-mr-12 sm:border sm:border-gold/30 sm:p-11 lg:-ml-28 lg:-mt-0 lg:border lg:border-gold/30"
      >
        <p className="text-[0.66rem] font-semibold uppercase tracking-[0.5em] text-ink/40">
          {child.role}
        </p>
        <h3
          id={`letter-${child.id}`}
          className="mt-6 font-serif text-[clamp(1.95rem,2.8vw,2.65rem)] leading-[1.1] tracking-[-0.02em]"
        >
          {child.name}
        </h3>
        <div className="mt-8 space-y-5 text-[1.02rem]">
          <MessageReveal
            lines={child.message}
            baseDelay={0.05}
            reduceMotion={reduce}
          />
        </div>
      </motion.div>
    </article>
  );
}

function PortraitCardShell({
  child,
  overlap,
}: {
  child: ChildTribute;
  overlap: "left" | "right";
}) {
  const reduce = useReducedMotion();
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start 92%", "end 10%"],
  });
  const float = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : overlap === "left" ? [8, -14] : [10, -20],
  );

  const align =
    overlap === "left"
      ? "xl:-rotate-[0.85deg]"
      : "xl:rotate-[0.55deg] xl:translate-x-4";

  return (
    <article
      className={`relative isolate ${align}`}
      aria-labelledby={`letter-${child.id}`}
    >
      <motion.div style={{ y: float }}>
        <button
          type="button"
          className={`group relative mx-auto flex w-[min(100%,420px)] cursor-zoom-in flex-col overflow-visible rounded-[2px] bg-blush/55 text-left shadow-[0px_54px_80px_-38px_rgba(26,26,26,0.45)] outline-none xl:w-[min(100%,470px)] ${
            overlap === "left" ? "xl:ml-[6vw]" : "xl:mr-[4vw]"
          }`}
          aria-haspopup="dialog"
          aria-label={`Open enlarged portrait for ${child.name}`}
          data-portrait-trigger={child.id}
        >
          <div className="absolute -top-6 left-10 h-[1px] w-24 bg-ink/[0.12] transition-colors group-hover:bg-gold/60" />
          <figure ref={imgRef} className="relative aspect-[3/4]">
            <div className={`${overlap === "left" ? "float-drift" : "float-drift-delayed"} h-full translate-y-[6px]`}>
              <Image
                src={child.imageSrc}
                alt={child.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width:1024px) 420px, 88vw"
                loading="lazy"
              />
            </div>
          </figure>
          <div className="border-t border-ink/[0.08] px-10 pb-12 pt-9">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.48em] text-ink/40">
              {child.role}
            </p>
            <h3
              id={`letter-${child.id}`}
              className="mt-6 font-serif text-[clamp(1.85rem,2.85vw,2.45rem)] leading-[1.12] tracking-[-0.02em]"
            >
              {child.name}
            </h3>
            <div className="mt-8 space-y-5 text-[1.015rem]">
              <MessageReveal
                lines={child.message}
                baseDelay={0.22}
                reduceMotion={reduce}
              />
            </div>
          </div>
        </button>
      </motion.div>
    </article>
  );
}

function EditorialOverlap({ child }: { child: ChildTribute }) {
  const reduce = useReducedMotion();
  const stage = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stage,
    offset: ["start 88%", "end 20%"],
  });
  const textShift = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [24, -32],
  );
  const vignetteOpacity = useTransform(scrollYProgress, [0.2, 0.76], [0.72, 0.34]);

  return (
    <article
      aria-labelledby={`letter-${child.id}`}
      ref={stage}
      className="relative isolate overflow-hidden rounded-[1px]"
    >
      <div className="grid lg:grid-cols-[minmax(0,1.07fr)_minmax(0,0.93fr)]">
        <div className="relative min-h-[420px] lg:min-h-[560px]">
          <button
            type="button"
            className="absolute inset-0 cursor-zoom-in outline-none"
            aria-haspopup="dialog"
            aria-label={`Open enlarged portrait for ${child.name}`}
            data-portrait-trigger={child.id}
          >
            <span className="sr-only">View portrait full screen</span>
          </button>
          <div className="float-drift h-full">
            <Image
              src={child.imageSrc}
              alt={child.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width:1024px) 54vw, 95vw"
              loading="lazy"
            />
          </div>
          <motion.div
            aria-hidden
            style={{ opacity: vignetteOpacity }}
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas via-canvas/12 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-canvas/14 lg:to-canvas"
          />
        </div>

        <motion.div
          style={{ y: textShift }}
          className="relative z-[1] -mt-20 border border-ink/[0.08] bg-canvas/95 px-[clamp(1.5rem,3vw,2.75rem)] py-12 shadow-[0px_40px_90px_-48px_rgba(26,26,26,0.45)] sm:-mt-28 sm:px-12 lg:-ml-16 lg:-mt-0 lg:self-center"
        >
          <div className="flex items-center gap-4">
            <span className="h-[1px] w-12 bg-gold" />
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.48em] text-ink/45">
              {child.role}
            </p>
          </div>
          <h3
            id={`letter-${child.id}`}
            className="mt-7 max-w-[14ch] font-serif text-[clamp(2rem,3.1vw,2.75rem)] leading-[1.08] tracking-[-0.02em]"
          >
            {child.name}
          </h3>
          <div className="mt-9 space-y-5 text-[1.02rem]">
            <MessageReveal
              lines={child.message}
              baseDelay={0.16}
              reduceMotion={reduce}
            />
          </div>
        </motion.div>
      </div>
    </article>
  );
}

function MarginaliaCard({ child }: { child: ChildTribute }) {
  const reduce = useReducedMotion();
  const frame = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: frame,
    offset: ["start 90%", "end 16%"],
  });
  const pull = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [18, -24]);

  return (
    <article
      ref={frame}
      className="relative isolate max-w-5xl lg:ml-[4vw]"
      aria-labelledby={`letter-${child.id}`}
    >
      <div className="absolute -left-3 top-10 bottom-10 w-[3px] bg-gradient-to-b from-gold via-rose/80 to-transparent lg:-left-6" />
      <div className="grid gap-12 border border-ink/[0.08] bg-canvas/90 p-[clamp(1.5rem,3vw,2.6rem)] pl-10 shadow-[0px_40px_90px_-46px_rgba(26,26,26,0.35)] sm:pl-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 lg:pl-16">
        <motion.div style={{ y: pull }} className="relative">
          <button
            type="button"
            className="relative block w-full cursor-zoom-in rounded-sm text-left outline-none"
            aria-haspopup="dialog"
            aria-label={`Open enlarged portrait for ${child.name}`}
            data-portrait-trigger={child.id}
          >
            <figure className="relative aspect-[4/5] overflow-hidden rounded-sm bg-ink/[0.04]">
              <div className="float-drift h-full">
                <Image
                  src={child.imageSrc}
                  alt={child.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 420px, 90vw"
                  loading="lazy"
                />
              </div>
            </figure>
          </button>
        </motion.div>
        <div className="lg:pt-10">
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.48em] text-ink/40">
            {child.role}
          </p>
          <h3
            id={`letter-${child.id}`}
            className="mt-6 font-serif text-[clamp(2.05rem,3.2vw,2.65rem)] leading-[1.08] tracking-[-0.02em]"
          >
            {child.name}
          </h3>
          <div className="mt-9 space-y-5 text-[1.02rem]">
            <MessageReveal
              lines={child.message}
              baseDelay={0.28}
              reduceMotion={reduce}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export function ChildrenTributeSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeChild = children.find((c) => c.id === activeId);

  const [belinda, mog, ohenewaa, kojo] = children;

  return (
    <>
      <section
        id="letters"
        className="relative mx-auto max-w-[min(1240px,94vw)] space-y-28 px-5 pb-24 sm:space-y-32 sm:pb-36 sm:px-9 lg:space-y-[8.75rem]"
        aria-label="Letters from your children"
      >
        <div
          onClick={(evt) => {
            const clicked = evt.target as HTMLElement;
            const trigger = clicked.closest<HTMLElement>("[data-portrait-trigger]");
            if (!trigger) return;
            const targetId = trigger.dataset.portraitTrigger;
            const next = children.find((c) => c.id === targetId);
            if (next) setActiveId(next.id);
          }}
          role="presentation"
        >
          <div className="space-y-[4.75rem] sm:space-y-[5.75rem]">
            <CardRibbon child={belinda} />

            <div className="grid items-start gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] xl:gap-12">
              <PortraitCardShell child={mog} overlap="left" />
              <div className="lg:translate-y-[3.75rem]">
                <EditorialOverlap child={ohenewaa} />
              </div>
            </div>

            <MarginaliaCard child={kojo} />
          </div>
        </div>
      </section>

      {activeChild ? (
        <ImageLightbox
          key={activeChild.id}
          child={activeChild}
          onRequestClose={() => setActiveId(null)}
        />
      ) : null}
    </>
  );
}
