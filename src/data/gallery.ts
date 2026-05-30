export type GalleryFilter =
  | "All"
  | "Interiors"
  | "Plants"
  | "Seating"
  | "Lights"
  | "Night Mood";

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  filter: Exclude<GalleryFilter, "All">;
};

export const galleryFilters: GalleryFilter[] = [
  "All",
  "Interiors",
  "Plants",
  "Seating",
  "Lights",
  "Night Mood",
];

export const galleryItems: GalleryItem[] = [
  {
    src: "/assets/cafe-beings/cafe-being-main.jpeg",
    alt: "Cafe Beings main seating area with plants and warm tones",
    caption: "A little indoor jungle for coffee people",
    filter: "Interiors",
  },
  {
    src: "/assets/cafe-beings/cafe-hanging-decor.png",
    alt: "Hanging decor and plant-lit interior corner",
    caption: "Warm ropes, plants and evening glow",
    filter: "Plants",
  },
  {
    src: "/assets/cafe-beings/cafe-window-seating.png",
    alt: "Window-side seating with cozy lighting",
    caption: "Window-side seating with a soft city view",
    filter: "Seating",
  },
  {
    src: "/assets/cafe-beings/cafe-window-night.png",
    alt: "Night-time cafe corner with warm lights",
    caption: "Rattan lights above the cozy cafe corner",
    filter: "Night Mood",
  },
  {
    src: "/assets/cafe-beings/cafe-being-counter.png",
    alt: "Cafe counter with wooden textures and plants",
    caption: "A leafy table made for slow conversations",
    filter: "Lights",
  },
  {
    src: "/assets/cafe-beings/Cafe-beings2.png",
    alt: "Cafe interior with yellow cushions and plants",
    caption: "Soft corners for longer-than-planned catchups",
    filter: "Interiors",
  },
];
