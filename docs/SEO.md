# SEO and performance

Canonical site: `https://rachmad.id` (apex, no `www`). Read it from `NEXT_PUBLIC_SITE_URL`; default to the production URL.

## 1. Metadata

Use the Next.js metadata API (`generateMetadata`) on the locale layout and on each project page. Per page, per locale:

- `title`: home: "Rachmad | Senior Software Engineer" (ID: same pattern). Project pages: "{Project title} | Rachmad". Keep under about 60 characters.
- `description`: 120 to 160 characters, written for a person scanning search results. Home description comes from the intro. Project description comes from the project `summary`.
- `alternates.canonical`: the page's own absolute URL.
- `alternates.languages`: `en`, `id` and `x-default` (pointing to `/en`).
- `openGraph`: type `website` (home) or `article` (project pages if appropriate), `locale` (`en_US` or `id_ID`) with `alternateLocale`, `url`, `siteName`, title, description, image.
- `twitter`: `summary_large_image`.
- `robots`: index and follow in production only (see section 5).
- `metadataBase` set once in the root locale layout.

## 2. Open Graph image

Generate with `opengraph-image.tsx` per locale (and per project if time allows). Content: name, primary title, domain, on the `bg` color with the accent color for one small element. No gradients. Size 1200x630. Text must be legible when shrunk to a link preview. Fonts must be loaded explicitly inside the image route.

## 3. Structured data (JSON-LD)

Render as `<script type="application/ld+json">` in the home page. Escape `<` in the serialized JSON.

- `Person`: name, jobTitle, url, image, sameAs (LinkedIn, GitHub, Instagram), address (addressLocality Jakarta, addressCountry ID), knowsAbout (skills list), no `worksFor` (the site should not go stale when jobs change).
- `WebSite`: name, url, inLanguage.
- Project pages: `CreativeWork` or `SoftwareApplication` only where it is accurate; otherwise skip. Do not mark up the Maybank project with anything that suggests the bank published it.
- Do not add review, rating or `Organization` markup.
- Validate with Google's Rich Results Test and the Schema.org validator in Phase 6.

## 4. Sitemap and robots

- `app/sitemap.ts`: home and every project, in both locales, with `alternates.languages` entries. `lastModified` set at build time.
- `app/robots.ts`: allow all in production, disallow all outside production, and point to the sitemap.

## 5. Preview deployments

Vercel preview URLs must not be indexed. Set `X-Robots-Tag: noindex, nofollow` via headers when `process.env.VERCEL_ENV !== 'production'`, and use the same condition in `robots.ts` and metadata.

## 6. Content and markup

- One `h1` per page (the name on home, the project title on project pages). Section titles `h2`, card titles `h3`.
- Landmarks: `header` (nav), `main`, `footer`. Sections have `id`s matching the nav (`experience`, `projects`, `skills`, `contact`) and `aria-labelledby`.
- Real text for everything that matters. Timeline entries are list items; skills are text; project summaries are text. Nothing important lives only in an image or video.
- Internal links are normal anchors (`next/link`), including the language toggle and project cards.
- Descriptive `alt` text on screenshots (what the screen shows). Empty `alt` on decorative media.
- `<html lang>` matches the page locale.
- 404 page with a link home, returns a real 404 status.

## 7. Search Console and indexing

After launch: add the `rachmad.id` domain property in Google Search Console (DNS TXT verification), submit `https://rachmad.id/sitemap.xml`, request indexing for `/en` and `/id`. Optional: Bing Webmaster Tools.

## 8. Performance targets

Measured with Lighthouse on the production build, mobile preset:

| Metric | Target |
|---|---|
| Performance | 90+ (aim 95+) |
| Accessibility | 95+ |
| Best practices | 95+ |
| SEO | 95+ (aim 100) |
| LCP | under 2.0 s on throttled mobile |
| CLS | under 0.05 |
| INP | under 200 ms |
| Home first-load JS | about 150 KB gzipped or less (soft) |

How to hit them:

- Static generation for every page. No client-side data fetching.
- LCP is the headline text. Keep the avatar small and `priority`, everything else lazy.
- All images sized (`width`/`height` or sized parent) to avoid shift. Convert to WebP or AVIF. Respect Vercel Hobby image optimization limits: check the current quota in Vercel's docs; if the number of source images could exceed it, ship pre-optimized WebP files and set `unoptimized` on those images.
- Videos use `preload="none"` plus a poster and start on intersection.
- Self-host fonts through `next/font`, at most two families, `display: swap`.
- No third-party scripts.
- Animation uses `transform` and `opacity` only.

## 9. Check list before launch

- Both `/en` and `/id` return 200, have correct `lang`, canonical and `hreflang`.
- Sitemap lists every URL once per locale. Robots allow indexing in production.
- Link preview works on LinkedIn, WhatsApp and X (use their debuggers or send test messages).
- Lighthouse thresholds met on home and one project page, both locales.
- JSON-LD validates.
- `noindex` is present on preview deployments and absent on production.
