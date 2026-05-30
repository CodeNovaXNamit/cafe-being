# Cafe Beings Website — Codex Build Prompt

Use this entire prompt inside Codex to build a beautiful static-but-scalable website for **Cafe Beings**.

---

## 1. Project Goal

Build a premium, aesthetic, cute, Gen-Z-friendly, pet-loving cafe website for **Cafe Beings**.

The cafe vibe is:

- warm indoor jungle
- rattan / wicker / rope lights
- lots of green plants
- cozy wooden seating
- soft beige, coffee brown, leafy green, mustard yellow and black accents
- cute pet-friendly personality
- slogan from the logo: **“Have a cup, save a pup”**
- peaceful, romantic, Instagrammable, but still practical for real customers

The final website should make visitors feel:

> “This cafe looks so cute and cozy that I want to visit it today.”

The site should be a **4-page website**:

1. **Home**
2. **Menu**
3. **Gallery**
4. **Find Us**

For now it should be static, but the structure must be scalable so later we can connect CMS, backend, booking, dynamic menu, reviews, and admin controls.

---

## 2. Tech Stack Requirement

Use a modern **Node.js based web stack**.

Use:

- **Next.js App Router**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** for page transitions and entrance/exit animations
- **React Three Fiber + Drei + Three.js** for tasteful 3D elements
- **Lenis or smooth scroll helper** for soft scrolling
- **lucide-react** for icons
- local static data files for scalability

Install packages as needed:

```bash
npm install framer-motion three @react-three/fiber @react-three/drei lenis lucide-react clsx
```

Do not make a plain HTML/CSS site. Build a real scalable Next.js project.

---

## 3. Important Design Direction

The website should not look like a generic cafe template.

It should feel like a **small magical plant cafe** with soft cinematic movement.

Design keywords:

- boho cafe
- indoor jungle
- cozy coffee corner
- cute dog/paw identity
- earthy aesthetic
- warm lights
- glass table reflections
- rattan lamps
- plant shadows
- photo-friendly cafe
- soft floating animations
- mobile-first but desktop cinematic

Use the logo mood:

- beige background
- hand-drawn coffee cup
- brown/sepia text
- paw icon
- vintage cafe stamp feeling

Primary color palette suggestion:

```ts
const palette = {
  cream: "#EFE5D6",
  warmCream: "#F7EEDC",
  coffeeBrown: "#4B3628",
  espresso: "#221914",
  leafGreen: "#2F5D3A",
  deepGreen: "#163B2A",
  mustard: "#D6A842",
  terracotta: "#B96D42",
  softBlack: "#12100E",
  glassWhite: "rgba(255,255,255,0.72)"
}
```

Typography suggestion:

- Use a soft serif for headings, for example `Playfair Display`, `Cormorant Garamond`, or `Fraunces`
- Use a clean sans-serif for body text, for example `Inter`, `Nunito Sans`, or `Manrope`
- The site should feel premium but not too corporate

---

## 4. Assets Provided

I will add the cafe photos and logo in the project folder.

Assume the assets will be placed here:

```txt
/public/assets/cafe-beings/
  cafe-being-main.jpeg
  cafe-being-counter.png
  cafe-being-wide.png
  cafe-beings-logo.png
  cafe-window-night.png
  cafe-window-seating.png
  cafe-hanging-decor.png
```

Use these images across the website.

The screenshots show:

- rattan basket lamps on ceiling
- rope pendant bulbs
- lots of plants and palms
- wooden cafe counter
- yellow cushions
- cozy glass tables
- dark/green/wood interior
- night window seating
- hanging macrame/dreamcatcher style decor
- a logo that says **Cafe Beings — Have a cup save a pup**

Image behavior:

- Use `next/image`
- Use image blur / soft reveal animations
- Do not stretch images
- Use proper alt text
- Use different cropping/layout for mobile and desktop
- Add slight parallax to selected foreground plants on desktop
- Keep mobile performance light

---

## 5. Public Info and Data Accuracy

Use this Google Maps link as the source of truth for the location button:

```txt
https://maps.app.goo.gl/2A7FxyWaLqqBXvmj9
```

Public online listings suggest Cafe Beings is in Ambala and that its menu may include items like sandwiches, pasta, burgers, fries, Maggi, shakes, and coffee-style cafe drinks. Treat all online info as **draft content only**.

Very important:

- Do not fake exact address, phone number, opening hours, or prices unless they are owner-verified.
- Put all business details in a single config file so they can be updated easily later.
- Add comments like `// TODO: verify with owner` wherever needed.
- If you add menu prices, keep them as sample placeholders and mark them easy to edit.

Create:

```txt
/src/data/site.ts
/src/data/menu.ts
/src/data/gallery.ts
```

Example:

```ts
export const siteConfig = {
  name: "Cafe Beings",
  tagline: "Have a cup, save a pup.",
  shortDescription:
    "A warm, plant-filled cafe corner for coffee, comfort food, conversations, and kind hearts.",
  locationLabel: "Cafe Beings, Ambala",
  googleMapsUrl: "https://maps.app.goo.gl/2A7FxyWaLqqBXvmj9",
  phone: "", // TODO: verify with owner
  instagram: "", // TODO: add official Instagram
  openingHours: "10:00 AM – 10:00 PM", // TODO: verify with owner
};
```

---

## 6. Website Structure

Create these routes:

```txt
/
 /menu
 /gallery
 /find-us
```

Suggested folder structure:

```txt
src/
  app/
    layout.tsx
    page.tsx
    menu/page.tsx
    gallery/page.tsx
    find-us/page.tsx
    template.tsx
    globals.css
  components/
    layout/
      Navbar.tsx
      MobileNav.tsx
      Footer.tsx
      PageTransition.tsx
    home/
      Hero.tsx
      CafeStory.tsx
      SpecialtyCards.tsx
      MenuPreview.tsx
      GalleryPreview.tsx
      VisitCTA.tsx
    menu/
      MenuCategoryTabs.tsx
      MenuCard.tsx
    gallery/
      GalleryGrid.tsx
      GalleryFilter.tsx
    find-us/
      MapCard.tsx
      VisitInfo.tsx
    3d/
      CafeScene.tsx
      FloatingCup.tsx
      FloatingBeans.tsx
      PawParticles.tsx
    ui/
      Button.tsx
      SectionHeader.tsx
      SoftCard.tsx
      AnimatedImage.tsx
  data/
    site.ts
    menu.ts
    gallery.ts
  lib/
    utils.ts
```

---

## 7. Layout Direction — Desktop

Desktop should be cinematic and more expressive.

### Desktop Home Page

Hero concept:

- Full-screen warm hero
- background: cafe interior image with dark/soft cream overlay
- foreground: animated palm/leaf layer
- center: logo or cafe name
- headline: **“Cafe Beings”**
- subheading: **“Have a cup. Save a pup.”**
- short copy:  
  **“A plant-filled little cafe where coffee, comfort food, soft lights and kind hearts meet.”**
- CTAs:
  - View Menu
  - Find Us

Add a small 3D scene on desktop:

- Floating coffee cup or simple latte cup
- soft floating coffee beans
- subtle paw-print particles
- tiny leaf motion
- no heavy game-like look
- it should feel like a living brand detail, not a 3D demo

Scroll behavior:

- When scrolling from the hero, the logo/heading softly moves upward and fades
- foreground leaves drift out slowly
- next content section slides in softly
- cards enter with staggered animation
- gallery preview moves slightly horizontally on scroll
- menu preview cards rise with soft blur-to-clear animation

Desktop sections:

1. Hero
2. “A little jungle of coffee and comfort”
3. Specialty cards
4. Signature menu preview
5. Gallery strip
6. Visit CTA

---

## 8. Layout Direction — Mobile

Mobile must not be just a squeezed desktop layout.

Make a different mobile experience:

- image-first hero
- minimal 3D or no heavy 3D Canvas on mobile
- bottom sticky mini navigation or compact floating nav
- swipeable specialty cards
- vertical story sections
- gallery as stacked rounded image cards
- large tap-friendly buttons
- avoid long heavy animations
- keep performance fast

Mobile hero:

- top logo
- large image card with rounded bottom corners
- headline below image
- sticky CTA: “Get Directions”
- menu CTA under it

Mobile navigation:

- compact top navbar or floating pill
- pages: Home, Menu, Gallery, Find Us
- use soft brown/cream style

---

## 9. Page Details

### 9.1 Home Page

Sections to build:

#### Hero

Copy:

```txt
Cafe Beings
Have a cup. Save a pup.

A cozy plant-filled cafe made for slow coffee, comfort bites, soft conversations and tiny happy moments.
```

Buttons:

- View Menu
- Find Us

Small badge examples:

- Plant-filled cafe
- Cozy seating
- Pet-loving soul

#### Story Section

Heading:

```txt
A little jungle of coffee, comfort and kindness.
```

Body:

```txt
Cafe Beings feels like stepping into a warm indoor garden. Rope lights glow softly, rattan lamps hang above, plants wrap the corners, and every table feels like a small pause from the busy outside world.
```

Add 2 images side by side on desktop; stacked on mobile.

#### Specialty Cards

Create 6 beautiful cards:

1. **Plant-Filled Corners**  
   “Every corner is wrapped in greens, textures and soft light.”

2. **Coffee & Comfort Bites**  
   “From warm coffee to casual cafe food, the menu is made for relaxed hangouts.”

3. **Have a Cup, Save a Pup**  
   “The brand carries a gentle pet-loving heart with a cute paw identity.”

4. **Cute Photo Spots**  
   “Rattan lights, yellow cushions, glass tables and leafy frames make the cafe camera-friendly.”

5. **Slow Conversations**  
   “A calm place for dates, friends, small work sessions and quiet evenings.”

6. **Warm Evening Mood**  
   “At night, the lights and window corners turn the cafe into a cozy little hideaway.”

#### Menu Preview

Show 4-6 menu categories with beautiful cards.

Examples:

- Coffee & Drinks
- Sandwiches
- Pasta
- Burgers
- Snacks
- Shakes

Add CTA: “Explore Full Menu”

#### Gallery Preview

Use a cinematic horizontal image strip on desktop and carousel/stack on mobile.

CTA: “See Gallery”

#### Visit CTA

Text:

```txt
Come for the coffee. Stay for the corners.
```

Buttons:

- Open Google Maps
- View Gallery

---

### 9.2 Menu Page

Build a clean, aesthetic menu page.

Important:

- Use local data from `src/data/menu.ts`
- Make categories easy to edit
- Add search or category filter
- Add vegetarian markers if useful
- Prices should be editable
- Do not hard-code every item inside JSX

Suggested sample categories:

```ts
export const menuCategories = [
  {
    name: "Coffee & Sips",
    description: "Warm, chilled and cozy cafe drinks.",
    items: [
      { name: "Classic Cold Coffee", price: "₹--", description: "Creamy, chilled and cafe-style.", tag: "Popular" },
      { name: "Hot Coffee", price: "₹--", description: "Simple, warm and comforting." },
      { name: "Shakes", price: "₹--", description: "Sweet cafe shakes for slow evenings." }
    ]
  },
  {
    name: "Sandwiches",
    description: "Comforting grilled bites for casual hunger.",
    items: [
      { name: "Veg Grilled Sandwich", price: "₹--", description: "A simple cafe classic." },
      { name: "Paneer Grilled Sandwich", price: "₹--", description: "Soft paneer filling with grilled bread.", tag: "Popular" },
      { name: "Cheese Mushroom Sandwich", price: "₹--", description: "Cheesy, warm and rich." }
    ]
  },
  {
    name: "Pasta",
    description: "Creamy and tangy bowls for comfort cravings.",
    items: [
      { name: "White Sauce Pasta", price: "₹--", description: "Creamy, mild and comforting." },
      { name: "Red Sauce Pasta", price: "₹--", description: "Tangy, spicy and bold." }
    ]
  },
  {
    name: "Burgers & Snacks",
    description: "Easy bites for friends and quick hangouts.",
    items: [
      { name: "Aloo Tikki Burger", price: "₹--", description: "A familiar comfort burger." },
      { name: "Masala Fries", price: "₹--", description: "Crispy fries with masala kick." },
      { name: "Veg Maggi", price: "₹--", description: "The classic cafe comfort bowl." }
    ]
  }
]
```

Page design:

- top hero with warm menu image/collage
- category tabs
- cards with soft paper texture feel
- sticky category nav on desktop if suitable
- mobile accordion or filter chips

---

### 9.3 Gallery Page

Build a gallery that feels like a visual love letter to the cafe.

Features:

- masonry grid on desktop
- stacked cards on mobile
- filters:
  - All
  - Interiors
  - Plants
  - Seating
  - Lights
  - Night Mood
- image hover: soft zoom, warm overlay, caption appears
- click image to open lightbox/modal
- keyboard close support for modal
- use `next/image`

Captions examples:

- “Rattan lights above the cozy cafe corner”
- “A leafy table made for slow conversations”
- “Window-side seating with a soft city view”
- “Warm ropes, plants and evening glow”
- “A little indoor jungle for coffee people”

---

### 9.4 Find Us Page

Build a practical but beautiful Find Us page.

Sections:

1. Heading:
   ```txt
   Find your way to Cafe Beings
   ```

2. Warm intro:
   ```txt
   A cozy little cafe corner waiting with coffee, plants, soft lights and a calm seat for you.
   ```

3. Google Maps CTA:
   Use:
   ```txt
   https://maps.app.goo.gl/2A7FxyWaLqqBXvmj9
   ```

4. Map card:
   - If exact embed is not available, create a styled map placeholder with “Open in Google Maps”
   - Do not add wrong address
   - Use `siteConfig.locationLabel`

5. Visit info cards:
   - Opening hours
   - Best for: coffee, dates, friends, cozy work, photos
   - Vibe: plant-filled, warm lights, pet-loving brand
   - Phone/Instagram placeholders from config

6. CTA:
   ```txt
   Bring your people. Find your corner.
   ```

---

## 10. Animation and Motion Requirements

Use motion tastefully. The site should feel alive, not distracting.

Required animations:

- page transition fade/slide
- navbar blur on scroll
- hero text entrance
- image reveal with blur-to-clear
- card stagger animation
- floating 3D cup/beans/paw icons on desktop
- scroll-linked movement for selected images
- subtle hover movement on cards/buttons
- smooth gallery hover zoom
- reduced-motion support

Implementation notes:

- Use `framer-motion`
- Use `useReducedMotion`
- Use dynamic import for 3D scene:
  ```ts
  const CafeScene = dynamic(() => import("@/components/3d/CafeScene"), { ssr: false })
  ```
- Do not load heavy 3D Canvas on mobile by default
- Use CSS media queries or a hook to disable heavy effects below tablet width
- Keep 3D decorative only, not required for navigation

---

## 11. 3D Scene Direction

Create a small, beautiful 3D cafe-inspired scene.

Do not use heavy external models unless necessary.

Use simple Three.js / React Three Fiber shapes:

- latte cup/circle/cylinder form
- floating beans
- soft paw prints as flat shapes or sprites
- leaf-like planes
- warm light orb
- subtle rotation with mouse movement
- scroll progress affects position/opacity slightly

Visual feel:

- cream/brown/green
- soft shadows
- no harsh neon
- no game-like materials
- no overcomplicated environment

Desktop only:

- show on hero right side or behind text as soft decorative layer
- opacity should not hurt text readability

Mobile:

- use static illustration/icon instead of full 3D if performance is affected

---

## 12. Navigation and Footer

### Navbar

Desktop:

- left: logo / Cafe Beings
- center or right links: Home, Menu, Gallery, Find Us
- CTA: Get Directions
- transparent on hero, cream/glass after scroll

Mobile:

- compact logo
- menu button or bottom nav
- CTA button visible

### Footer

Footer should feel branded, not boring.

Include:

- Cafe Beings logo/name
- slogan: “Have a cup, save a pup”
- quick links
- Google Maps link
- small text:
  ```txt
  Coffee, comfort and cozy little corners.
  ```

Use paw/coffee/leaf motifs softly.

---

## 13. SEO Requirements

Add proper metadata.

Home title:

```txt
Cafe Beings | Have a Cup, Save a Pup
```

Description:

```txt
Cafe Beings is a cozy, plant-filled cafe with warm lights, comfort bites and a pet-loving heart. Visit for coffee, conversations and calm corners.
```

Add page-specific metadata for:

- Menu
- Gallery
- Find Us

Add Open Graph image using one of the cafe images.

Add local business structured data, but keep uncertain fields empty or configurable.

Do not hard-code unverified data.

---

## 14. Performance Requirements

This website must feel premium but still load fast.

Rules:

- Use `next/image`
- Lazy load below-the-fold images
- Compress images if needed
- Do not load desktop-only 3D on mobile
- Avoid huge animation libraries unless needed
- No autoplay heavy video unless I explicitly add it later
- Use `prefers-reduced-motion`
- No layout shift
- No horizontal scroll
- Make Lighthouse-friendly choices

---

## 15. Accessibility Requirements

- Proper semantic HTML
- All buttons and links keyboard accessible
- Good contrast
- Alt text for all images
- Focus states visible
- Modal/lightbox closes with Escape
- Reduced motion supported
- Text readable on image backgrounds

---

## 16. Content Tone

The copy should be beautiful, warm and aesthetic.

Avoid generic lines like:

- “Welcome to our cafe”
- “We provide best services”
- “Experience excellence”

Use emotional, visual, soft writing instead.

Good tone examples:

```txt
A tiny pause from the busy city, wrapped in plants, coffee and warm light.
```

```txt
Pick a corner, order something comforting, and let the cafe slow the day down.
```

```txt
Some places are not just for eating. They are for sitting longer than planned.
```

```txt
Have a cup. Save a pup. Carry a little kindness with your coffee.
```

---

## 17. UI Details

Use these UI ideas:

- rounded 2xl / 3xl cards
- soft shadows
- glassmorphism only where it fits
- paper texture or subtle grain background
- warm gradient overlays
- leaf-shaped blobs
- paw print micro icons
- animated underline on nav links
- organic section dividers
- image cards with uneven heights on desktop
- floating “Open Maps” CTA on Find Us page
- small animated “Currently cozy” or “Plant-filled corner” badge

Do not make it too childish. It should be cute but still premium.

---

## 18. Scalability

Even though this is static now, code it so later it can grow.

Use data files for:

- menu
- gallery
- site details
- specialty cards
- page content where practical

Keep components reusable.

Do not put 500 lines inside one page file.

---

## 19. Final Deliverables Expected from Codex

Create the complete working website.

After implementation, provide:

1. All code changes
2. Install commands used
3. Local run command
4. Build command
5. Short explanation of file structure
6. Notes on where to update:
   - menu items
   - prices
   - phone number
   - Instagram
   - opening hours
   - address
   - gallery images

Run:

```bash
npm run lint
npm run build
```

Fix all errors before final answer.

---

## 20. Acceptance Checklist

The website is complete only if:

- Home page looks cinematic and cafe-specific
- Menu page uses editable data
- Gallery page has real image layout and lightbox
- Find Us page uses the provided Google Maps link
- Desktop and mobile layouts feel intentionally different
- 3D is tasteful and does not slow mobile
- Animations are smooth and not annoying
- No console errors
- No horizontal scroll
- All images have alt text
- Business details are easy to update
- It is ready for Vercel deployment

---

## 21. Extra Important Instruction

Do not make a generic template.

The entire site should feel like it was designed specifically from the provided Cafe Beings screenshots:

- rattan lamps
- rope lights
- plants
- wooden cafe counter
- cozy seating
- yellow cushions
- glass tables
- paw logo
- beige/brown hand-drawn cafe identity
- warm indoor jungle feel

Make the design so beautiful that the first screen itself feels like a cafe brand campaign.
