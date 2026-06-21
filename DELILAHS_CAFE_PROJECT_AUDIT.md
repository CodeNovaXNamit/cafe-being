# Delilah's Cafe Website Project Audit

Audit basis: current working tree inspected on June 21, 2026. This audit reflects the uncommitted files and asset changes currently present, not only the last Git commit.

## 1. Project Summary

This is a four-page, statically rendered Next.js cafe website originally built for Cafe Beings. The current working tree has started a partial Delilah's Cafe conversion: the responsive hero videos and visible hero/header name are Delilah-specific, but the central configuration, metadata, footer, menu, gallery, location, copy, logo references, and most image references still belong to Cafe Beings.

The application compiles successfully, but it is not runtime-ready because seven unique legacy image/logo paths referenced by active pages are missing from `public`. Both Delilah hero videos work, while the old fallback image and old logo return HTTP 404.

## 2. Tech Stack

### 1. What framework is this project using?

Next.js `16.2.6` with the App Router, React `19.2.4`, and React DOM `19.2.4`. The routes are defined under `src/app/`. See `package.json`, `src/app/layout.tsx`, and `src/app/page.tsx`.

### 2. What package manager is being used?

npm. The repository contains `package-lock.json`, and the scripts in `package.json` are intended to be run with npm.

### 3. What is the main command to run the project locally?

`npm run dev`, which runs `next dev`. See `package.json`.

### 4. What is the main command to build the project for production?

`npm run build`, which runs `next build`. The production server command is `npm run start`. See `package.json`.

### 5. What is the main entry file of the project?

The root application shell is `src/app/layout.tsx`. The homepage entry is `src/app/page.tsx`. In the App Router, both are important entry points.

### 6. What are the main folders in the project and what does each folder do?

- `src/app/`: routes, root layout, global CSS, metadata, favicon, and page files.
- `src/components/`: reusable layout, homepage, menu, gallery, find-us, UI, and unused 3D components.
- `src/data/`: editable site, menu, and gallery data.
- `src/lib/`: shared utilities and mobile viewport detection.
- `public/`: static images, videos, and default SVG assets.
- `node_modules/`: installed dependencies.
- `.next/`: generated development/production build output.
- `.git/`: Git repository metadata.

Relevant paths: `src/app/`, `src/components/`, `src/data/`, `src/lib/`, `public/`, and `package.json`.

### 7. Is this project using TypeScript or JavaScript?

TypeScript. Application source files use `.ts` and `.tsx`, and strict TypeScript checking is enabled in `tsconfig.json`. `allowJs` is also enabled, but the inspected application code is TypeScript.

### 8. What styling system is being used?

Tailwind CSS `4.x` through `@tailwindcss/postcss`, plus global CSS variables and utility classes in `src/app/globals.css`. There are no CSS Modules, SCSS files, Bootstrap styles, or styled-components.

### 9. Is there any backend/API code in the project?

Missing. No `route.ts` API handlers, server actions, database code, authentication, CMS integration, or separate backend were found under `src/app/` or elsewhere. The site currently uses local static data from `src/data/`.

### 10. Is the project suitable for deployment on Vercel, Netlify, Hostinger, or another platform?

Vercel is the most direct fit because this is a standard Next.js App Router project. Netlify can support it through its current Next.js integration. Hostinger is suitable only on a plan that supports a Node.js Next.js server; a pure static-hosting deployment is not configured because `next.config.ts` does not set `output: "export"`.

The project should not be deployed in its current state because active image/logo requests return 404 and the business data is wrong. See `next.config.ts`, `src/data/site.ts`, and `public/assets/cafe-beings/`.

## 3. Current Brand Content

### 11. What cafe/brand name is currently used across the website?

Mixed branding:

- “Delilah's Cafe” appears in the active desktop/mobile hero and responsive navbar.
- “Cafe Beings” remains the configured brand and is still used by metadata, footer, gallery, menu, find-us page, structured data, alt text, and most homepage sections.

See `src/components/home/DesktopHero.tsx`, `src/components/home/MobileHero.tsx`, `src/components/layout/Navbar.tsx`, and `src/data/site.ts`.

### 12. In which files does the old cafe name appear?

The old brand appears in active application files including:

- `src/data/site.ts`
- `src/data/gallery.ts`
- `src/app/layout.tsx`
- `src/app/menu/page.tsx`
- `src/app/gallery/page.tsx`
- `src/app/find-us/page.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/Navbar.tsx` in logo alt text
- `src/components/home/DesktopHero.tsx` in fallback alt text
- `src/components/home/SeamlessMobileHeroVideo.tsx`
- `src/components/home/HomeStorySection.tsx`
- `src/components/home/HomeMottoSection.tsx`
- `src/components/home/HomeFinalCta.tsx`

It also appears in unused legacy components and documentation, including `src/components/layout/MobileNav.tsx`, `src/components/home/CafeStory.tsx`, `cafe_beings_codex_website_prompt.md`, `package.json`, and `CODEX_MEMORY.md`.

### 13. Are there any old phone numbers, emails, or addresses still present?

- Old address/location: yes. `locationLabel` is still `"Cafe Beings, Ambala"` in `src/data/site.ts`.
- Old Google Maps destination: yes. The Cafe Beings Maps link remains in `src/data/site.ts`.
- Old opening hours: yes. `"10:00 AM - 10:00 PM"` remains in `src/data/site.ts`, which conflicts with the supplied Delilah detail that it closes at 11 PM.
- Phone number: Missing. The config value is empty.
- Email: Missing.

### 14. Are there any old social media links still present?

No populated Instagram or other social link exists. The Instagram field is empty in `src/data/site.ts`. The old Cafe Beings Google Maps link is still present, but it is a location link rather than a social profile.

### 15. Are there any old menu items or old cafe-specific content still present?

Yes. The menu still contains generic Cafe Beings draft items such as Classic Cold Coffee, Paneer Grilled Sandwich, White Sauce Pasta, Aloo Tikki Burger, Masala Fries, and Veg Maggi. Pet-focused copy such as “Have a cup. Save a pup.” and “pet-loving soul” also remains throughout the homepage.

See `src/data/menu.ts`, `src/data/site.ts`, `src/components/home/HomeBentoGrid.tsx`, and `src/components/home/HomeMottoSection.tsx`.

### 16. Are there old images/videos that clearly belong to another cafe?

The old Cafe Beings photos, logo, and mobile videos are shown as deleted in Git status. Active code still references those deleted images. The new Delilah videos are present and visibly show Delilah's Cafe signage.

Legacy/deleted paths include:

- `public/assets/cafe-beings/Cafe-beings-logo.png`
- `public/assets/cafe-beings/Cafe-beings2.png`
- `public/assets/cafe-beings/cafe-being-main.jpeg`
- `public/assets/cafe-beings/cafe-being-counter.png`
- `public/assets/cafe-beings/cafe-hanging-decor.png`
- `public/assets/cafe-beings/cafe-window-night.png`
- `public/assets/cafe-beings/cafe-window-seating.png`
- `public/assets/cafe-beings/mobile-hero.mp4`
- `public/assets/cafe-beings/mobile-hero-optimized.mp4`

### 17. Are page titles and metadata still using the previous brand?

Yes. The root title, title template, description, Open Graph metadata, page-specific descriptions, and JSON-LD business data still describe Cafe Beings.

See `src/app/layout.tsx`, `src/app/menu/page.tsx`, `src/app/gallery/page.tsx`, and `src/app/find-us/page.tsx`.

### 18. Is the favicon/logo still from the old cafe?

- Favicon: not branded to either cafe. `src/app/favicon.ico` is the default Vercel triangle.
- Header/footer logo: the code still points to the old Cafe Beings logo path, which is currently missing and returns 404.
- Delilah logo/wordmark: Missing.

See `src/app/favicon.ico`, `src/components/layout/Navbar.tsx`, and `src/components/layout/Footer.tsx`.

### 19. Are alt texts still describing the old cafe or wrong content?

Yes. Multiple alt texts still say “Cafe Beings,” and gallery alt text describes legacy photos that are no longer present. Examples are in `src/components/home/DesktopHero.tsx`, `src/components/home/SeamlessMobileHeroVideo.tsx`, `src/components/home/HomeStorySection.tsx`, `src/components/layout/Navbar.tsx`, `src/components/layout/Footer.tsx`, and `src/data/gallery.ts`.

### 20. What files need content replacement to fully convert this into Delilah's Cafe?

At minimum:

- `src/data/site.ts`
- `src/data/menu.ts`
- `src/data/gallery.ts`
- `src/app/layout.tsx`
- `src/app/menu/page.tsx`
- `src/app/gallery/page.tsx`
- `src/app/find-us/page.tsx`
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/home/DesktopHero.tsx`
- `src/components/home/MobileHero.tsx`
- `src/components/home/SeamlessMobileHeroVideo.tsx`
- `src/components/home/HomeStorySection.tsx`
- `src/components/home/HomeBentoGrid.tsx`
- `src/components/home/HomeMenuPreview.tsx`
- `src/components/home/HomeGalleryPreview.tsx`
- `src/components/home/HomeMottoSection.tsx`
- `src/components/home/HomeFinalCta.tsx`
- `src/components/find-us/MapCard.tsx`
- `src/components/find-us/VisitInfo.tsx`
- `public/assets/cafe-beings/`
- `src/app/favicon.ico`

Unused legacy components and stale documentation should be reviewed after the active conversion is complete.

## 4. Pages & Routes

### 21. How many pages/routes currently exist in the project?

Four public routes:

1. `/`
2. `/menu`
3. `/gallery`
4. `/find-us`

Next.js also generates `/_not-found`. The successful production build lists all four public routes as static pages.

### 22. What is the homepage route and file path?

Route: `/`  
File: `src/app/page.tsx`

### 23. Is there an About page?

Missing. There is a homepage story section in `src/components/home/HomeStorySection.tsx`, but no `/about` route.

### 24. Is there a Menu page?

Yes. Route `/menu`, file `src/app/menu/page.tsx`.

### 25. Is there a Gallery page?

Yes. Route `/gallery`, file `src/app/gallery/page.tsx`.

### 26. Is there a Contact page?

There is no page named Contact. `/find-us` serves the practical contact/location role through `src/app/find-us/page.tsx`, `src/components/find-us/MapCard.tsx`, and `src/components/find-us/VisitInfo.tsx`.

### 27. Is there a Reservation or Booking page?

Missing. No reservation route, form, widget, or external booking link exists.

### 28. Is there a Blog/News page?

Missing.

### 29. Are there any broken or unused routes?

No broken navigation routes were found. `/about` correctly returns 404 because it does not exist. There are several unused components, but they do not expose routes:

- `src/components/home/CafeStory.tsx`
- `src/components/home/SpecialtyCards.tsx`
- `src/components/home/MenuPreview.tsx`
- `src/components/home/GalleryPreview.tsx`
- `src/components/home/VisitCTA.tsx`
- `src/components/layout/MobileNav.tsx`
- `src/components/3d/CafeScene.tsx` and its child components

### 30. Are navigation links correctly connected to existing pages/sections?

Yes. The active navbar and footer link to `/`, `/menu`, `/gallery`, and `/find-us`, all of which return HTTP 200. The Get Directions links are technically connected but point to the old Cafe Beings Maps URL.

See `src/components/layout/Navbar.tsx`, `src/components/layout/Footer.tsx`, and `src/data/site.ts`.

## 5. Homepage

### 31. What sections are currently present on the homepage?

In order:

1. Responsive hero
2. Story section
3. Bento-style mood/features grid
4. Menu category preview
5. Gallery preview
6. Pet-loving motto section
7. Final location/gallery CTA

See `src/app/page.tsx`.

### 32. What is the current hero section structure?

`src/components/home/Hero.tsx` uses `useIsMobile()` to choose between:

- `src/components/home/DesktopHero.tsx`: full-screen video/fallback image, Delilah title, “Caffè Italiano” subtitle, View Menu and Find Us buttons.
- `src/components/home/MobileHero.tsx`: full-screen portrait video, three visual overlays, Delilah title, “Caffè Italiano” subtitle, and a fixed green glass CTA panel.

### 33. What video/image is currently being used in the hero section?

- Desktop video: `/assets/cafe-beings/home/delilah.mp4`
- Mobile video: `/assets/cafe-beings/home/delilah-phone.mp4`
- Intended fallback/poster: `/assets/cafe-beings/cafe-being-main.jpeg`

The videos work. The fallback/poster image is missing.

### 34. Where is the homepage video stored?

- `public/assets/cafe-beings/home/delilah.mp4`
- `public/assets/cafe-beings/home/delilah-phone.mp4`

### 35. Is the hero video optimized for web use?

No.

- Desktop: 3840×2160, H.264, approximately 21.48 MB, approximately 21.15 Mbps video bitrate.
- Phone: 2160×3840, H.264, approximately 20.77 MB, approximately 20.45 Mbps video bitrate.
- Both are eight seconds long and include unnecessary 320 kbps AAC audio even though playback is muted.
- The mobile implementation creates two video elements with `preload="auto"` for crossfading, increasing memory/decode pressure.

See `src/components/home/DesktopHero.tsx` and `src/components/home/SeamlessMobileHeroVideo.tsx`.

### 36. Is there a fallback image for the hero video?

The code intends to use `/assets/cafe-beings/cafe-being-main.jpeg`, but the file is missing and returns HTTP 404. Therefore, the effective fallback is Missing.

### 37. Is the hero text suitable for Delilah's Cafe?

Partially. “Delilah's Cafe” is correct. “Caffè Italiano” communicates an Italian identity, but the supplied business type is “Continental restaurant / cafe,” not explicitly an Italian cafe.

Needs owner decision: confirm whether Delilah's should be positioned as Italian, Continental, or both. The supplied Hindi name `देलीलाह कैफे` is not currently shown.

### 38. What call-to-action buttons are currently present?

- Desktop: View Menu and Find Us.
- Mobile: View Menu and Get Directions.

See `src/components/home/DesktopHero.tsx` and `src/components/home/MobileHero.tsx`.

### 39. Are the homepage sections ordered well for a cafe website?

The general order is sound: atmosphere first, then story, features, menu, gallery, and visit CTA. For Delilah's, conversion would improve by adding rating/location/service proof near the hero and moving real popular dishes higher. The current pet-themed motto interrupts the Delilah brand narrative.

See `src/app/page.tsx` and `src/components/home/HomeMottoSection.tsx`.

### 40. Which homepage sections should be replaced, removed, or rewritten for Delilah's Cafe?

- Rewrite `HomeStorySection` with Delilah's real story and Anand Vihar location.
- Rewrite `HomeBentoGrid` around cozy corners, outdoor seating, Continental food, friends, drinks, and service options.
- Replace `HomeMenuPreview` generic categories/images with popular Delilah dishes.
- Replace `HomeGalleryPreview` legacy image paths with real Delilah photos.
- Remove or completely repurpose `HomeMottoSection`; the pet-saving concept belongs to Cafe Beings.
- Rewrite `HomeFinalCta` with Delilah's address, closing time, phone, and service CTAs.
- Confirm or replace “Caffè Italiano” in both hero files.

Relevant files are under `src/components/home/`.

## 6. Design Style

### 41. What is the current overall design style of the website?

Warm botanical cafe design with cream/brown/green colors, rounded cards, glassmorphism, bento layouts, soft shadows, editorial serif headings, motion, and image-first sections. See `src/app/globals.css` and `src/components/home/`.

### 42. Does the current style match Delilah's cozy, aesthetic, plant-filled, Pinterest-coded vibe?

Yes, as a visual foundation. The green/cream palette, large atmospheric media, warm gradients, plant language, rounded cards, and camera-roll/gallery emphasis align well. The content and missing imagery prevent the current implementation from delivering that vibe consistently.

### 43. What colors are currently being used?

Defined in `src/app/globals.css`:

- Cream: `#efe5d6`
- Warm cream: `#f7eedc`
- Coffee brown: `#4b3628`
- Espresso: `#221914`
- Leaf green: `#2f5d3a`
- Deep green: `#163b2a`
- Mustard: `#d6a842`
- Terracotta: `#b96d42`
- Soft black: `#12100e`
- Glass white: `rgba(255, 255, 255, 0.72)`

The active header and mobile CTA use translucent leaf green.

### 44. What fonts are currently being used?

- Headings: Playfair Display
- Body/UI: Manrope

They are loaded through `next/font/google` in `src/app/layout.tsx`.

### 45. Where are global styles defined?

`src/app/globals.css`, imported by `src/app/layout.tsx`.

### 46. Is the design more luxury, minimal, rustic, modern, Japanese, vintage, or something else?

It is best described as modern boho/Japandi-inspired botanical cafe design with warm editorial and glassmorphism details. It is not strongly Italian, vintage, or rustic.

### 47. Are cards, buttons, headings, and spacing consistent?

Mostly, but not completely.

- Shared UI exists in `src/components/ui/`.
- Container widths vary between 1120 px and 1180 px.
- There are duplicate old and new homepage component families with slightly different conventions.
- Border radii and card styles are broadly consistent but use many one-off values.
- Button styling is centralized in `src/components/ui/Button.tsx`, although some CTAs are hand-styled.

### 48. Does the design feel premium enough for a ₹400–1,200 cafe?

The visual foundation can support that price range, especially the typography, video hero, spacing, and restrained palette. The current site does not feel launch-quality because of broken images, placeholder prices, mixed branding, a default favicon, and generic menu/location content.

### 49. Does the current layout support warm lighting, plants, cozy corners, and outdoor seating visuals?

It supports warm lighting, plants, and cozy corners well through large image regions and gallery layouts. Outdoor seating is not represented in the current content model or copy. Real Delilah indoor and outdoor photos are needed.

### 50. What design changes are needed to make it feel like Delilah's Cafe?

- Replace all legacy/missing imagery with real Delilah visuals.
- Create a Delilah logo/wordmark, favicon, and Open Graph identity.
- Remove paw/pet-saving motifs unless Delilah genuinely has that policy.
- Decide whether the brand is Continental or Italian before adding cuisine cues.
- Add social proof: 4.2 rating, review count, price range, services, and neighborhood.
- Feature outdoor seating and dreamy/Pinterest-coded corners.
- Use dish-specific photography and real menu names.
- Standardize container widths, card tokens, and CTA styles after rebranding.

## 7. Assets

### 51. Where are all images stored?

Current static images are under `public/assets/cafe-beings/decor/`, plus default Next/Vercel SVG files directly under `public/`. The code expects additional cafe images under `public/assets/cafe-beings/`, but those files are currently missing.

### 52. Where are all videos stored?

`public/assets/cafe-beings/home/`

Current files:

- `delilah.mp4`
- `delilah-phone.mp4`

### 53. Which assets are currently used on the homepage?

Working assets:

- `public/assets/cafe-beings/home/delilah.mp4`
- `public/assets/cafe-beings/home/delilah-phone.mp4`

Referenced but missing homepage assets:

- `cafe-being-main.jpeg`
- `cafe-window-seating.png`
- `cafe-hanging-decor.png`
- `cafe-being-counter.png`
- `Cafe-beings2.png`
- `cafe-window-night.png`

See `src/components/home/`.

### 54. Which assets are currently unused?

Unused current files:

- `public/assets/cafe-beings/decor/floating-coffee.png`
- `public/assets/cafe-beings/decor/floating-leaf-1.png`
- `public/assets/cafe-beings/decor/floating-leaf-2.png`
- `public/assets/cafe-beings/decor/floating-shake.png`
- `public/file.svg`
- `public/globe.svg`
- `public/next.svg`
- `public/vercel.svg`
- `public/window.svg`

The favicon is used by Next.js convention, but it is generic.

### 55. Are image file names meaningful or messy?

Mixed. `delilah.mp4`, `delilah-phone.mp4`, and the decor names are understandable. The legacy naming is inconsistent and brand-specific, with inconsistent capitalization and vague names such as `Cafe-beings2.png`. The `cafe-beings` asset namespace should eventually become a Delilah-specific namespace.

### 56. Are videos too large for fast loading?

Yes. Each eight-second video is around 21 MB and 4K. This is excessive for a homepage background, especially on mobile. They should be resized, recompressed, stripped of audio, and tested against a clear performance budget.

### 57. Are images optimized in web-friendly formats like WebP/AVIF?

No source WebP or AVIF assets were found. The four current decor images are PNG files between approximately 1.34 MB and 2.25 MB each. Next Image can generate optimized derivatives for images it serves, but the active cafe source images are currently missing.

### 58. Are there any missing image imports or broken asset paths?

Yes. Seven unique active asset paths are missing:

- `/assets/cafe-beings/cafe-being-counter.png`
- `/assets/cafe-beings/cafe-being-main.jpeg`
- `/assets/cafe-beings/Cafe-beings2.png`
- `/assets/cafe-beings/Cafe-beings-logo.png`
- `/assets/cafe-beings/cafe-hanging-decor.png`
- `/assets/cafe-beings/cafe-window-night.png`
- `/assets/cafe-beings/cafe-window-seating.png`

Runtime checks confirmed 404 responses for the fallback image and logo. The build passes because Next.js does not validate all public-file paths during compilation.

### 59. Is there a gallery system or just manually placed images?

There is a data-driven gallery system. `src/data/gallery.ts` defines filters and image records. `src/components/gallery/GalleryGrid.tsx` provides filtering, a masonry-style column layout, hover captions, and a dialog lightbox. The gallery is nonfunctional visually until its missing images are replaced.

### 60. What new Delilah-specific assets are needed?

- Official Delilah logo and wordmark
- Branded favicon/app icons
- Open Graph/social sharing image
- Optimized desktop and phone hero posters
- Optimized hero videos
- Exterior/storefront photographs
- Interior warm-light and plant photographs
- Outdoor seating photographs
- Popular dish/drink photographs
- Gallery set with landscape and portrait crops
- Menu hero/collage
- Location/map thumbnail if desired
- Any review/UGC imagery with usage permission

## 8. Menu Content

### 61. Is there a menu section/page currently?

Yes. The full menu is at `/menu` in `src/app/menu/page.tsx`. The homepage includes a category preview in `src/components/home/HomeMenuPreview.tsx`.

### 62. How is the menu data stored?

As typed local TypeScript data in `src/data/menu.ts`.

### 63. Can menu items be easily edited?

Yes. Names, descriptions, prices, tags, and vegetarian flags can be edited centrally in `src/data/menu.ts`.

### 64. Are menu categories available?

Yes. Current categories are Coffee & Sips, Sandwiches, Pasta, and Burgers & Snacks.

### 65. Are prices shown?

Only placeholders are shown: `"Rs --"`. Verified Delilah prices are Missing.

### 66. Are food photos connected to menu items?

No. Individual menu items have no image field. The homepage preview uses alternating generic cafe interior images per category, and those images are currently missing.

See `src/data/menu.ts` and `src/components/home/HomeMenuPreview.tsx`.

### 67. Can Delilah's menu items be added cleanly?

Yes. The current data structure can accept the supplied popular items immediately. For a production menu, it would benefit from optional fields for image, dietary tags, spice level, availability, featured status, category order, and item slug.

### 68. Which current menu items should be replaced?

All 11 current draft items should be replaced or verified:

- Classic Cold Coffee
- Hot Coffee
- Shakes
- Veg Grilled Sandwich
- Paneer Grilled Sandwich
- Cheese Mushroom Sandwich
- White Sauce Pasta
- Red Sauce Pasta
- Aloo Tikki Burger
- Masala Fries
- Veg Maggi

See `src/data/menu.ts`.

### 69. Is there a featured dishes section?

Missing. `HomeMenuPreview` features categories, not actual dishes. No “popular dishes” block exists on the menu page.

### 70. What is the best place to showcase Truffle Fries, Hot Chocolate with Nutella, Mojito, Pizza, and Garlic Bread?

Use two locations:

1. Replace the homepage category-only preview with a “Delilah Favorites” dish card section in `src/components/home/HomeMenuPreview.tsx`.
2. Add a featured/popular strip above category filtering in `src/app/menu/page.tsx` or `src/components/menu/MenuBrowser.tsx`.

The full item definitions should remain centralized in `src/data/menu.ts`.

## 9. Contact, Location & Booking

### 71. Is there a contact section or contact page?

There is a Find Us page at `src/app/find-us/page.tsx`, with location and contact cards. There is no dedicated Contact page or contact form.

### 72. Where is the phone number shown?

The phone field is displayed in:

- `src/components/find-us/VisitInfo.tsx`
- `src/components/layout/Footer.tsx`

The configured value is empty in `src/data/site.ts`, so placeholder text is shown instead of `070090 90922`.

### 73. Where is the address shown?

The full address is Missing. Only the old label `"Cafe Beings, Ambala"` appears through `siteConfig.locationLabel` in:

- `src/components/find-us/MapCard.tsx`
- `src/components/layout/Footer.tsx`

### 74. Is there a Google Maps embed?

Missing. `src/components/find-us/MapCard.tsx` is a styled placeholder with an external button.

### 75. Is the map location currently correct or old?

Old and incorrect for Delilah's Cafe. `src/data/site.ts` points to the Cafe Beings Maps link and Ambala label.

### 76. Is there a WhatsApp button?

Missing.

### 77. Is there a call button for mobile users?

Missing. The project contains no `tel:` link.

### 78. Is there a reservation/table booking CTA?

Missing.

Needs owner decision: confirm whether Delilah accepts reservations and whether booking should use phone, WhatsApp, an external platform, or a website form.

### 79. Is there any Zomato or order-online link?

Missing. No Zomato, Swiggy, direct ordering, or delivery link exists.

### 80. What contact/location updates are required for Delilah's Cafe?

- Set name, full address, Local Shopping Complex context, phone, and verified hours in `src/data/site.ts`.
- Replace the old Maps URL with the exact Delilah pin.
- Add `tel:` and optional WhatsApp links.
- Add dine-in, kerbside pickup, and no-contact delivery service labels.
- Add reservation/order links if available.
- Update Find Us copy, footer, metadata, and structured data.
- Add coordinates or embed URL if an actual map embed is required.

## 10. Mobile Responsiveness

### 81. Is the website fully responsive?

The code is strongly responsive, but “fully responsive” is Unclear until visual testing is completed across real viewport sizes. Tailwind breakpoints are used throughout, and the homepage has separate hero layouts. Missing images currently prevent valid full-page visual QA.

### 82. Are there separate mobile and desktop layouts?

Yes for the hero. `src/components/home/Hero.tsx` selects `DesktopHero` or `MobileHero` using `src/lib/useIsMobile.ts`. Other sections generally use responsive Tailwind classes rather than separate components.

### 83. Does the homepage hero work well on mobile?

It is intentionally designed for mobile, but it has production issues:

- 4K portrait video is approximately 20.77 MB.
- Two video elements preload the same source.
- The fallback image is missing.
- The initial `Hero` render returns a desktop section hidden on mobile until client viewport detection runs, which can create a blank first render or layout shift.
- Small-screen overlap still needs device testing.

See `src/components/home/Hero.tsx` and `src/components/home/SeamlessMobileHeroVideo.tsx`.

### 84. Does the video crop properly on mobile?

The source is native 9:16 and uses `object-cover`, so the implementation is appropriate. Final crop quality is still Unclear until tested across short and tall phone screens.

### 85. Is the navigation menu mobile-friendly?

Yes in structure. `src/components/layout/Navbar.tsx` provides a compact fixed pill, accessible open/close labels, and a touch-friendly dropdown. `src/components/layout/MobileNav.tsx` is a second, unused mobile navigation implementation and should not be confused with the active navbar.

### 86. Are text sizes readable on small screens?

Generally yes, but the 5xl hero title and 34 px subtitle inside a 310 px container should be tested on narrow devices. Menu and navigation labels are readable. See `src/components/home/MobileHero.tsx` and `src/components/layout/Navbar.tsx`.

### 87. Are buttons easy to tap on mobile?

Mostly yes. Hero and navigation controls have appropriate padding and rounded hit areas. Category tabs are also reasonably sized. A real-device accessibility review is still recommended.

### 88. Are images/videos causing layout shift?

Most image containers have explicit dimensions, which helps stability. However:

- The JavaScript-based desktop/mobile hero switch can cause a major mobile layout shift after hydration.
- The missing fallback image can expose a dark/empty background while video loads.
- The large videos delay visual readiness.

### 89. Are there any horizontal scroll issues?

No definite unintended page-level overflow was found in code, and `overflow-x: clip` is set in `src/app/globals.css`. Several homepage sections intentionally use horizontal mobile carousels. Unclear until browser QA: global clipping can hide an underlying overflow bug instead of fixing it.

### 90. What mobile-specific improvements are needed?

- Replace JavaScript hero selection with a hydration-safe responsive approach.
- Compress the phone video and strip audio.
- Use one video element unless the crossfade is proven necessary.
- Add a working poster/fallback.
- Respect reduced-motion and data-saving preferences for autoplay media.
- Add a one-tap Call action and optional WhatsApp/order action.
- Test 320×568, 360×800, 390×844, and tablet widths.
- Verify dropdown focus behavior and Escape handling.
- Validate text contrast over all video frames.

## 11. SEO, Performance & Deployment

### 91. Does the website currently have SEO metadata?

Yes, but it is still Cafe Beings metadata. Root metadata and JSON-LD are in `src/app/layout.tsx`; route metadata is present in the menu, gallery, and find-us page files.

### 92. Where are title, description, and Open Graph tags defined?

- Root title, title template, description, Open Graph data: `src/app/layout.tsx`
- Menu metadata: `src/app/menu/page.tsx`
- Gallery metadata: `src/app/gallery/page.tsx`
- Find Us metadata: `src/app/find-us/page.tsx`

The Open Graph image path is currently broken.

### 93. Is there a sitemap or robots file?

- Sitemap: Missing.
- Robots file: Missing.

No `sitemap.ts`, `sitemap.xml`, `robots.ts`, or `robots.txt` was found.

### 94. Are images/videos lazy-loaded where needed?

Below-the-fold Next Image components use default lazy loading in most places. Hero/focal images are preloaded. The desktop video uses `preload="metadata"`, but the mobile component uses two `preload="auto"` videos, which is too aggressive. See `src/components/home/SeamlessMobileHeroVideo.tsx`.

### 95. Are there any heavy dependencies that are not needed?

Potentially:

- `three`
- `@react-three/fiber`
- `@react-three/drei`

Their only entry component, `src/components/3d/CafeScene.tsx`, is not imported by any active page. They are not part of the active rendered feature set, although they may be intentionally retained for future 3D work.

Needs owner decision: keep the planned 3D feature or remove these dependencies and unused components.

Lenis is active globally through `src/components/layout/SmoothScrollProvider.tsx`; it is optional rather than strictly necessary.

### 96. Is the site fast enough for a cafe website?

Not currently.

Positive factors:

- All routes are statically rendered.
- Source code is relatively small.
- Below-the-fold images use Next Image.

Blocking factors:

- Approximately 42.25 MB of hero video files.
- 4K mobile video and dual-video decoding.
- Missing images causing failed requests.
- Large unused PNG decor assets.
- Global smooth-scroll animation loop.

A Lighthouse/mobile-network test is required after assets are fixed.

### 97. Are there any console errors or build errors?

- `npm run lint`: passed.
- `npm run build`: passed.
- TypeScript compilation: passed.
- Intended routes: returned HTTP 200.
- Runtime asset errors: confirmed HTTP 404 for the legacy fallback image and logo; the other five legacy cafe image paths are also absent.
- Browser console: Unclear because no browser-console capture was performed, but failed image requests are expected.

### 98. What files are most important before deployment?

Highest priority:

- `src/data/site.ts`
- `src/app/layout.tsx`
- `src/data/menu.ts`
- `src/data/gallery.ts`
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/home/`
- `src/app/menu/page.tsx`
- `src/app/gallery/page.tsx`
- `src/app/find-us/page.tsx`
- `src/components/find-us/`
- `public/assets/cafe-beings/`
- `src/app/favicon.ico`
- `next.config.ts`

### 99. What steps are needed to safely convert this project into Delilah's Cafe?

1. Preserve or commit the current dirty working tree before broad changes.
2. Confirm the brand positioning: Continental, Italian, or both.
3. Make `src/data/site.ts` the complete Delilah source of truth.
4. Replace metadata, JSON-LD, route copy, footer, navbar alt text, and old brand strings.
5. Add verified address, phone, hours, services, Maps URL, social/order/booking links.
6. Replace all missing legacy assets with licensed Delilah media.
7. Create Delilah logo, favicon, and Open Graph assets.
8. Replace menu data with verified categories, items, prices, and dietary information.
9. Rewrite homepage sections and remove the Cafe Beings pet-saving identity.
10. Optimize videos and implement reliable posters/reduced-motion behavior.
11. Remove or archive unused components/assets only after decisions on 3D and legacy material.
12. Add sitemap, robots, updated structured data, and canonical production URL.
13. Run lint, build, route checks, responsive QA, accessibility QA, and Lighthouse before deployment.

### 100. What exact next actions should the owner give after this audit?

Recommended sequence of owner instructions:

1. **“Phase 1: update only global Delilah business data, branding, metadata, structured data, navbar, and footer. Do not redesign sections yet.”**
2. **“Phase 2: replace all broken Cafe Beings assets with the Delilah logo, posters, interior, outdoor, food, and gallery images I provide.”**
3. **“Phase 3: replace the menu data with this verified Delilah menu and prices, then build a featured dishes section.”**
4. **“Phase 4: rewrite the homepage and Find Us content around Delilah's real vibe, services, reviews, price range, and Anand Vihar location.”**
5. **“Phase 5: optimize both hero videos for web, add reduced-motion/poster behavior, and fix the mobile hydration issue.”**
6. **“Phase 6: run full responsive, accessibility, SEO, performance, and deployment QA.”**

Before Phase 1, provide the missing owner decisions listed below.

## 12. Files That Need Editing

| File Path | Reason | Priority |
|---|---|---|
| `src/data/site.ts` | Replace the Cafe Beings source of truth with Delilah's verified identity, address, phone, hours, services, links, and domain. | Critical |
| `src/app/layout.tsx` | Replace metadata, Open Graph data, metadata base, and JSON-LD. | Critical |
| `public/assets/cafe-beings/` | Restore/replace all missing active images and move toward a Delilah-specific asset namespace. | Critical |
| `src/components/layout/Navbar.tsx` | Replace broken old logo, old alt text, and verify Delilah header treatment. | Critical |
| `src/components/layout/Footer.tsx` | Replace old configured brand, slogan, logo, location, hours, and contact placeholders. | Critical |
| `src/data/menu.ts` | Replace all draft Cafe Beings items and placeholder prices with verified Delilah menu content. | Critical |
| `src/data/gallery.ts` | Replace legacy image paths, filters/captions, and old alt text with Delilah media. | Critical |
| `src/app/menu/page.tsx` | Replace old metadata, broken hero image, old copy, and placeholder warning. | High |
| `src/app/gallery/page.tsx` | Replace old metadata and Cafe Beings-specific introduction. | High |
| `src/app/find-us/page.tsx` | Replace old metadata, heading, location copy, and CTA content. | High |
| `src/components/find-us/MapCard.tsx` | Replace old map placeholder data with Delilah pin/embed or accurate location card. | High |
| `src/components/find-us/VisitInfo.tsx` | Add verified phone, services, hours, and social/contact actions. | High |
| `src/components/home/DesktopHero.tsx` | Add a working poster, verify cuisine subtitle, improve contrast, and use optimized video. | High |
| `src/components/home/MobileHero.tsx` | Verify cuisine subtitle, mobile text contrast, CTA set, and small-screen layout. | High |
| `src/components/home/SeamlessMobileHeroVideo.tsx` | Replace missing fallback, reduce media load, add error/reduced-motion handling, and reconsider dual video elements. | Critical |
| `src/components/home/HomeStorySection.tsx` | Replace Cafe Beings story and missing image. | High |
| `src/components/home/HomeBentoGrid.tsx` | Remove old pet identity and replace missing image references/content. | High |
| `src/components/home/HomeMenuPreview.tsx` | Showcase real popular dishes instead of generic categories/interior images. | High |
| `src/components/home/HomeGalleryPreview.tsx` | Replace all missing images and legacy labels. | High |
| `src/components/home/HomeMottoSection.tsx` | Remove or repurpose “Have a cup. Save a pup.” content. | Critical |
| `src/components/home/HomeFinalCta.tsx` | Replace missing image, old alt text, and generic CTA content. | High |
| `src/components/gallery/GalleryGrid.tsx` | Revalidate lightbox accessibility and image behavior after asset replacement. | Medium |
| `src/components/menu/MenuBrowser.tsx` | Add featured dishes/empty state and improve search semantics if required. | Medium |
| `src/app/favicon.ico` | Replace default Vercel triangle with Delilah branding. | High |
| `src/app/sitemap.ts` | Missing; create for SEO after production domain is known. | Medium |
| `src/app/robots.ts` | Missing; create for SEO after deployment policy is known. | Medium |
| `next.config.ts` | Review image/video caching, deployment target, and optional output settings. | Medium |
| `README.md` | Replace generic create-next-app instructions with accurate project/deployment documentation. | Low |
| `package.json` | Rename package and remove unused dependencies after feature decisions. | Low |
| `src/components/3d/` | Keep, integrate, or remove after deciding whether the site will use 3D. | Needs owner decision |
| `src/components/layout/MobileNav.tsx` | Unused duplicate mobile navigation; keep or remove after confirming navigation direction. | Low |
| `src/components/home/CafeStory.tsx` | Unused legacy homepage component with old content and broken images. | Low |
| `src/components/home/SpecialtyCards.tsx` | Unused legacy homepage component. | Low |
| `src/components/home/MenuPreview.tsx` | Unused legacy homepage component. | Low |
| `src/components/home/GalleryPreview.tsx` | Unused legacy homepage component. | Low |
| `src/components/home/VisitCTA.tsx` | Unused legacy homepage component. | Low |
| `CODEX_MEMORY.md` | Stale: it says floating leaves remain active, but the current component is deleted. | Low |
| `cafe_beings_codex_website_prompt.md` | Historical Cafe Beings brief; retain as archive or replace with a Delilah brief. | Needs owner decision |

## 13. Missing Information Needed From Owner

- [ ] Confirm the final public brand spelling: `Delilah's Cafe`, `Delilah’s Cafe`, or another legal/styled form.
- [ ] Confirm whether to display the Hindi name `देलीलाह कैफे`.
- [ ] Confirm cuisine positioning: Continental, Italian, café, or a combined descriptor.
- [ ] Confirm whether “Caffè Italiano” is accurate and approved.
- [ ] Provide the official Delilah logo/wordmark and preferred logo variants.
- [ ] Provide a favicon/app icon or approve creating one from the logo.
- [ ] Provide the exact Google Maps pin URL and, if needed, latitude/longitude.
- [ ] Confirm complete weekly opening hours; only “closes 11 PM” is currently supplied.
- [ ] Confirm the phone format to display and use for `tel:` links.
- [ ] Confirm whether the phone number is also available on WhatsApp.
- [ ] Provide official Instagram, Facebook, email, and website links.
- [ ] Provide Zomato, Swiggy, direct ordering, or delivery links.
- [ ] Confirm whether reservations are accepted and the preferred booking method.
- [ ] Provide the full verified menu, categories, prices, descriptions, and dietary labels.
- [ ] Confirm which supplied popular items should be marked “Popular” or featured.
- [ ] Confirm whether the ₹400–1,200 range should be displayed publicly.
- [ ] Confirm whether the 4.2/374 rating should be displayed as a dated snapshot or connected to a live listing.
- [ ] Provide licensed Delilah interior, outdoor seating, food, drink, exterior, and team photographs.
- [ ] Confirm usage rights for the current hero videos and any customer/review imagery.
- [ ] Confirm whether outdoor seating is always available or conditional.
- [ ] Confirm exact kerbside pickup and no-contact delivery wording.
- [ ] Confirm whether Delilah is pet-friendly; the current pet-focused copy must not be assumed.
- [ ] Provide the production domain for canonical metadata and sitemap generation.
- [ ] Decide whether to retain any 3D effects.
- [ ] Decide whether to keep smooth scrolling through Lenis.

## 14. Recommended Conversion Plan

1. **Freeze the baseline.** Commit or back up the current working tree, including the new Delilah videos and current homepage changes.
2. **Resolve brand facts.** Confirm cuisine positioning, Hindi/Italian subtitle choice, logo, exact hours, map pin, contact links, ordering, and booking.
3. **Centralize Delilah data.** Expand `src/data/site.ts` to hold all verified business facts, services, rating snapshot, price range, address, social links, and contact actions.
4. **Complete global rebranding.** Update metadata, JSON-LD, navbar, footer, favicon, alt text, and all active Cafe Beings strings.
5. **Repair assets first.** Add Delilah posters and real photographs, then update all references so no route generates image 404s.
6. **Optimize media.** Produce smaller desktop/mobile hero files, strip audio, add posters, and support reduced motion/data-saving behavior.
7. **Replace menu data.** Add Delilah categories, popular dishes, verified prices, dietary tags, and optional item images.
8. **Rewrite homepage sections.** Keep the strong botanical layout but replace pet-saving content with Delilah's actual atmosphere, outdoor seating, friends, food, drinks, and services.
9. **Rebuild location/conversion paths.** Add accurate address, map, phone, call, WhatsApp, order, delivery, and reservation actions as approved.
10. **Finish SEO.** Add Delilah page metadata, canonical production URL, Open Graph image, structured LocalBusiness/Restaurant data, sitemap, and robots file.
11. **Remove dead code carefully.** Remove unused legacy home components, duplicate mobile nav, 3D dependencies, or unused decor only after owner decisions.
12. **Run final QA.** Verify lint, build, route status, all asset URLs, keyboard behavior, reduced motion, real devices, Lighthouse, metadata previews, and deployment behavior.

## 15. Important Notes Before Editing

- The Git working tree is already heavily modified. Do not use destructive reset/checkout commands or overwrite unrelated owner changes.
- The old Cafe Beings media files are deleted, while active code still references them. Reverting all deletions would restore old-brand assets, not solve the Delilah conversion.
- The current build passing does not mean the website is healthy. Public asset paths are not fully validated at build time; runtime 404s were confirmed.
- `src/data/site.ts` should become the single source of truth. At present, Delilah's name is hardcoded in hero/navbar files while the rest of the site reads Cafe Beings from config.
- “Caffè Italiano” may conflict with the supplied “Continental restaurant / cafe” description. Do not expand the Italian positioning without owner confirmation.
- The hero videos are visually Delilah-specific but far too large for a production cafe homepage.
- The mobile hero's two-video crossfade is expensive and the viewport-switching approach can create a blank initial mobile render.
- The Open Graph image path is broken, the metadata base is an example domain, and the favicon is the default Vercel icon.
- The current rating and review count can change. If displayed, it should be verified at launch or labeled as a dated snapshot.
- No full browser/device test suite exists. Lint and build pass, but responsive, accessibility, and console behavior still require manual QA.
- `CODEX_MEMORY.md` is stale and should not be treated as authoritative for the current source.
- This project uses Next.js 16.2.6. Before future implementation changes, continue following `AGENTS.md` and read the relevant local guides under `node_modules/next/dist/docs/`.
