"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#letters", label: "Letters" },
  { href: "#closing", label: "Gratitude" },
];

export function SiteHeader() {
  const [onLightChrome, setOnLightChrome] = useState(false);

  useEffect(() => {
    const update = () => {
      const y = typeof window.scrollY === "number" ? window.scrollY : 0;
      const viewport = typeof window.visualViewport?.height === "number"
        ? window.visualViewport.height
        : window.innerHeight || 760;
      setOnLightChrome(y > viewport * 0.76);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    const vv = typeof window.visualViewport !== "undefined" ? window.visualViewport : null;
    if (vv) {
      vv.addEventListener("resize", update, { passive: true });
      vv.addEventListener("scroll", update, { passive: true });
    }
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      if (vv) {
        vv.removeEventListener("resize", update);
        vv.removeEventListener("scroll", update);
      }
    };
  }, []);

  const chrome = onLightChrome
    ? "border border-ink/[0.1] bg-canvas/92 text-ink/[0.7] shadow-none backdrop-blur-md"
    : "border border-white/[0.16] bg-black/54 text-canvas/[0.9] backdrop-blur-md shadow-[0_18px_50px_-30px_rgba(0,0,0,0.55)]";

  const link = onLightChrome
    ? "hover:bg-blush/60 hover:text-ink"
    : "hover:bg-white/[0.1] hover:text-canvas";

  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-[60] flex justify-center px-5 pt-6 sm:justify-end sm:px-10">
      <nav
        aria-label="On this page"
        className={`pointer-events-auto flex items-center gap-1 rounded-full px-2 py-1.5 ${chrome}`}
      >
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded-full px-3 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.2em] transition-colors ${link}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
