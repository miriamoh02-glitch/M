import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";

import "./globals.css";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SiteHeader } from "@/components/site-header";
import { SkipLink } from "@/components/skip-link";
import { site } from "@/lib/content";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const canonicalBase =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(canonicalBase),
  title: {
    default: site.title,
    template: `%s · ${site.title}`,
  },
  description: site.description,
  robots: {
    index: false,
    follow: false,
  },
  authors: [{ name: "Family tribute" }],
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  icons: [
    {
      rel: "icon",
      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' fill='none' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='30' stroke='%231a1a1a' stroke-opacity='0.08'/%3E%3Cpath d='M31.5 19c-.5-.3-.5-.3-1-.1l-.3.9c-.1.3-.1.5 0 .7l13.9 34.9c0 .4.4.8.8.8h1.9c.3 0 .6-.1.8-.3.2-.2.4-.6.3-.9L33.9 17.9c-.1-.2-.5-.9-1-.9h-1c-.6 0-1 .3-1.4.9-.3.5-.3 1.1 0 1.2Z' fill='%231a1a1a' opacity='0.92'/%3E%3C/svg%3E",
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#f8f5f2",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: site.title,
  description: site.description,
  inLanguage: "en-GB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${playfair.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="grain bg-canvas text-ink relative min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SkipLink />
        <SiteHeader />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
