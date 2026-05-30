export type MenuItem = {
  name: string;
  price: string; // TODO: verify with owner
  description: string;
  tag?: "Popular" | "Veg";
  veg?: boolean;
};

export type MenuCategory = {
  name: string;
  description: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    name: "Coffee & Sips",
    description: "Warm, chilled and cozy cafe drinks.",
    items: [
      {
        name: "Classic Cold Coffee",
        price: "Rs --",
        description: "Creamy, chilled and cafe-style.",
        tag: "Popular",
        veg: true,
      },
      {
        name: "Hot Coffee",
        price: "Rs --",
        description: "Simple, warm and comforting.",
        veg: true,
      },
      {
        name: "Shakes",
        price: "Rs --",
        description: "Sweet cafe shakes for slow evenings.",
        veg: true,
      },
    ],
  },
  {
    name: "Sandwiches",
    description: "Comforting grilled bites for casual hunger.",
    items: [
      {
        name: "Veg Grilled Sandwich",
        price: "Rs --",
        description: "A simple cafe classic.",
        veg: true,
      },
      {
        name: "Paneer Grilled Sandwich",
        price: "Rs --",
        description: "Soft paneer filling with grilled bread.",
        tag: "Popular",
        veg: true,
      },
      {
        name: "Cheese Mushroom Sandwich",
        price: "Rs --",
        description: "Cheesy, warm and rich.",
        veg: true,
      },
    ],
  },
  {
    name: "Pasta",
    description: "Creamy and tangy bowls for comfort cravings.",
    items: [
      {
        name: "White Sauce Pasta",
        price: "Rs --",
        description: "Creamy, mild and comforting.",
        veg: true,
      },
      {
        name: "Red Sauce Pasta",
        price: "Rs --",
        description: "Tangy, spicy and bold.",
        veg: true,
      },
    ],
  },
  {
    name: "Burgers & Snacks",
    description: "Easy bites for friends and quick hangouts.",
    items: [
      {
        name: "Aloo Tikki Burger",
        price: "Rs --",
        description: "A familiar comfort burger.",
        veg: true,
      },
      {
        name: "Masala Fries",
        price: "Rs --",
        description: "Crispy fries with masala kick.",
        veg: true,
      },
      {
        name: "Veg Maggi",
        price: "Rs --",
        description: "The classic cafe comfort bowl.",
        veg: true,
      },
    ],
  },
];
