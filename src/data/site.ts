const address =
  "28 LSC DDA Market, Pushpanjali, Anand Vihar, New Delhi, Delhi 110092";

export const siteConfig = {
  name: "Delilah's Cafe",
  hindiName: "देलीलाह कैफे",
  shortName: "Delilah's",
  tagline: "Cozy Continental food and dreamy corners.",
  description:
    "A cozy, aesthetic Continental restaurant and cafe in Anand Vihar with plants, warm lighting, outdoor seating, good food, and drinks.",
  businessType: "Continental restaurant / cafe",
  cuisine: "Continental",
  rating: 4.2, // Snapshot from 374 reviews; verify again before production launch.
  reviewCount: 374,
  priceRange: "₹400–1,200 per person",
  address,
  locationLabel: "Local Shopping Complex, Anand Vihar, New Delhi",
  phone: "070090 90922",
  phoneHref: "tel:+917009090922",
  whatsappHref: null as string | null, // TODO: confirm whether this number supports WhatsApp.
  hoursLabel: "Closes at 11 PM",
  openingHours: null as string[] | null, // TODO: add verified weekly opening hours.
  services: ["Dine-in", "Kerbside pickup", "No-contact delivery"],
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, // TODO: replace with the official exact Google Maps pin URL.
  orderUrl: null as string | null, // TODO: add verified Zomato or order-online URL.
  reservationUrl: null as string | null, // TODO: confirm reservation method or URL.
  instagramUrl: null as string | null, // TODO: add the official Instagram URL.
  siteUrl: null as string | null, // TODO: add the final production domain.
  seo: {
    title: "Delilah's Cafe | Cozy Continental Cafe in Anand Vihar, Delhi",
    description:
      "Visit Delilah's Cafe in Anand Vihar, New Delhi for cozy cafe vibes, Continental food, coffee, mocktails, pizzas, fries, warm lighting, plants, and relaxed seating.",
  },
  visitTags: ["Friends", "Cozy meals", "Coffee", "Drinks", "Photos"],
  vibe:
    "Cozy, aesthetic, Pinterest-coded corners with plants, warm lighting, and outdoor seating.",
};

// TODO (menu phase): replace draft menu data with the verified full menu and prices.
export const popularItemsForMenuPhase = [
  "Garlic Bread with Cheese",
  "Watermelon Mojito",
  "Truffle Fries",
  "Paparazzi Farm Pizza 10 Inch",
  "Hot Chocolate with Nutella",
  "Pineapple Juice",
  "Paparazzi Farm Neapolitan Pizza",
  "No Wine Sangria",
  "Onion Rings",
  "Peri Peri Fries",
  "Exotic Veg Platter",
] as const;

// TODO (Phase 2): replace these legacy homepage cards with Delilah-specific content.
export const specialtyCards = [
  {
    title: "Plant-Filled Corners",
    description: "Every corner is wrapped in greens, textures and soft light.",
  },
  {
    title: "Coffee & Comfort Bites",
    description:
      "From warm coffee to casual cafe food, the menu is made for relaxed hangouts.",
  },
  {
    title: "Have a Cup, Save a Pup",
    description:
      "The brand carries a gentle pet-loving heart with a cute paw identity.",
  },
  {
    title: "Cute Photo Spots",
    description:
      "Rattan lights, yellow cushions, glass tables and leafy frames make the cafe camera-friendly.",
  },
  {
    title: "Slow Conversations",
    description:
      "A calm place for dates, friends, small work sessions and quiet evenings.",
  },
  {
    title: "Warm Evening Mood",
    description:
      "At night, the lights and window corners turn the cafe into a cozy little hideaway.",
  },
];
