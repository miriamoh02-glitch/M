# For Mum, With Love

A single-page Next.js tribute that reads like a handwritten letter unfolding onscreen: warm parchment tones, serif headlines, restrained motion, and four distinct portraits of love from Belinda, M O G, Ohenewaa, and Kojo.

## Prerequisites

- Node.js 18.18 or newer (the template targets the current Next.js toolchain)

## Local development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in a browser.

## Production build

```bash
npm run build
npm start
```

## Environment

Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS URL when hosting (example: `https://your-domain.example`) so metadata, Open Graph, and JSON-LD resolve absolute links correctly.

## Imagery & privacy

Demonstration portraits are loaded from curated Unsplash sources with descriptive `alt` text. Replace URLs in `lib/content.ts` with your own JPEG or WebP assets inside `public/` if you prefer fully offline imagery.

The page ships with `robots: { index: false, follow: false }`, which discourages incidental indexing of a deeply personal tribute. Adjust this metadata if you deliberately want the page surfaced by search engines.

## Accessibility checklist

Landmarks (`main`, semantic sections), skip link, focus-visible treatments, captions for dialog lighting, prefers-reduced-motion handling for animation downshifts, and accessible dialog controls are included throughout the codebase.
