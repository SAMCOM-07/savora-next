export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export const IMAGES = {
  hero: "/images/44fe100f-2d87-471d-9752-4135037ead56.jpg",
  dish1: "/images/a03dafa0-ecf1-4cb1-87d1-37d5b638a03d.jpg",
  dish2: "/images/4bec638d-73ba-4407-a8be-ace3bdb33b20.jpg",
  dish3: "/images/3b7595e3-c15e-418d-8c1a-d94b268402ff.jpg",
  interior: "/images/bd44193a-1549-4d08-8341-ccb134097563.jpg",
  chef: "/images/3880a0e4-35e9-4561-af57-bdefa67d0817.jpg",
  diningRoom: "/images/71fd2f10-a23e-4359-ae28-b59c3b740112.jpg",
  team: "/images/3467616a-5fc0-498b-8ee3-43398aa90479.jpg",
  pasta: "/images/1f896920-40af-46b3-b791-be712749dba0.jpg",
  event: "/images/da2d2822-6767-4a31-a391-33ae655f46dd.jpg",
};

export interface Dish {
  name: string;
  description: string;
  price: string;
  tag: string;
  image: string;
}

export const FEATURED_DISHES: Dish[] = [
  {
    name: "Seared Hokkaido Scallops",
    description:
      "Saffron velouté, charred leek, aged verjus and a whisper of caviar.",
    price: "$42",
    tag: "Chef's Pick",
    image: IMAGES.dish1,
  },
  {
    name: "Wagyu A5 Fillet",
    description:
      "Black truffle jus, smoked bone marrow and heritage garden greens.",
    price: "$96",
    tag: "Signature",
    image: IMAGES.dish2,
  },
  {
    name: "Valrhona Gold Sphere",
    description:
      "70% dark chocolate, wild berry coulis and edible 24k gold leaf.",
    price: "$28",
    tag: "Dessert",
    image: IMAGES.dish3,
  },
];

export type MenuCategory = "Starters" | "Main Course" | "Desserts" | "Drinks";

export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export const MENU: Record<MenuCategory, MenuItem[]> = {
  Starters: [
    {
      name: "Seared Hokkaido Scallops",
      description: "Saffron velouté, charred leek, aged verjus.",
      price: "$42",
    },
    {
      name: "Burrata & Heirloom",
      description: "Basil oil, aged balsamic pearls, sourdough crisp.",
      price: "$26",
    },
    {
      name: "Tuna Tartare",
      description: "Yuzu kosho, avocado mousse, taro chip.",
      price: "$34",
    },
    {
      name: "Foie Gras Terrine",
      description: "Brioche, spiced fig compote, sea salt.",
      price: "$38",
    },
  ],

  "Main Course": [
    {
      name: "Wagyu A5 Fillet",
      description: "Black truffle jus, smoked bone marrow.",
      price: "$96",
    },
    {
      name: "Duck à l’Orange",
      description: "Confit leg, glazed carrots, orange gastrique.",
      price: "$58",
    },
    {
      name: "Butter-Poached Halibut",
      description: "Champagne beurre blanc, samphire, caviar.",
      price: "$64",
    },
    {
      name: "Wild Mushroom Risotto",
      description: "Aged parmesan, black truffle, herb oil.",
      price: "$46",
    },
  ],

  Desserts: [
    {
      name: "Valrhona Gold Sphere",
      description: "Dark chocolate, wild berry, 24k gold leaf.",
      price: "$28",
    },
    {
      name: "Vanilla Bean Soufflé",
      description: "Madagascar vanilla, crème anglaise.",
      price: "$24",
    },
    {
      name: "Tarte Tatin",
      description: "Caramelised apple, crème fraîche, calvados.",
      price: "$22",
    },
    {
      name: "Pistachio Crémeux",
      description: "Raspberry gel, white chocolate, rose.",
      price: "$26",
    },
  ],

  Drinks: [
    {
      name: "Savora Old Fashioned",
      description: "Barrel-aged bourbon, smoked orange, bitters.",
      price: "$22",
    },
    {
      name: "Vintage Champagne",
      description: "Dom Pérignon 2013, by the glass.",
      price: "$48",
    },
    {
      name: "Gold Negroni",
      description: "Gin, Campari, sweet vermouth, gold dust.",
      price: "$24",
    },
    {
      name: "Reserve Wine Flight",
      description: "Sommelier selection, three pours.",
      price: "$65",
    },
  ],
};

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "An unforgettable evening. Every course was a work of art — Savora sets a new standard for fine dining.",
    name: "Isabella Moreau",
    role: "Food & Wine Critic",
  },
  {
    quote:
      "The ambiance, the service, the flavors. Savora is nothing short of a masterpiece from start to finish.",
    name: "James Whitfield",
    role: "Michelin Guide Inspector",
  },
  {
    quote:
      "I have dined across the world, and few places rival the artistry and warmth I experienced here.",
    name: "Amara Okafor",
    role: "Travel Journalist",
  },
];

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const FEATURES: Feature[] = [
  {
    title: "Michelin-Trained Chefs",
    description: "A brigade forged in the world’s finest kitchens.",
    icon: "ChefHat",
  },
  {
    title: "Seasonal Ingredients",
    description: "Sourced daily from artisan farms and coastlines.",
    icon: "Leaf",
  },
  {
    title: "Curated Wine Cellar",
    description: "Over 400 rare vintages, hand-selected.",
    icon: "Wine",
  },
  {
    title: "Private Dining",
    description: "Intimate suites for your most special moments.",
    icon: "Gem",
  },
];

export interface EventItem {
  date: string;
  title: string;
  description: string;
  badge: string;
}

export const EVENTS: EventItem[] = [
  {
    date: "Aug 14",
    title: "Chef’s Table: Autumn Harvest",
    description:
      "A seven-course journey plated at the pass with sommelier pairings.",
    badge: "Limited Seats",
  },
  {
    date: "Aug 28",
    title: "Champagne & Caviar Evening",
    description: "Vintage cuvées paired with the finest ossetra selections.",
    badge: "Featured",
  },
  {
    date: "Sep 09",
    title: "Truffle Season Menu",
    description:
      "A celebration of white Alba truffle across five decadent courses.",
    badge: "New",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "Do you require reservations?",
    answer:
      "Reservations are highly recommended and can be made up to 60 days in advance. Walk-ins are welcomed at the bar subject to availability.",
  },
  {
    question: "Is there a dress code?",
    answer:
      "We observe an elegant smart-casual dress code. We kindly ask guests to refrain from athletic wear and beachwear.",
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer:
      "Absolutely. Our chefs craft bespoke menus for vegetarian, vegan, gluten-free and allergen-specific needs. Please note them when booking.",
  },
  {
    question: "Do you offer private events?",
    answer:
      "Yes. Our private dining suites host intimate gatherings of 8 to 40 guests with tailored menus and dedicated service.",
  },
  {
    question: "Do you offer catering or off-site events?",
    answer:
      "Yes. Our culinary team can create Savora experiences for select off-site celebrations. Please contact guest relations with your date, location and estimated guest count.",
  },
  {
    question: "Do you offer delivery?",
    answer:
      "Our full tasting menu is designed for the dining room. A limited collection of Savora pantry items and celebratory menus is available for pre-order on special occasions.",
  },
  {
    question: "Is parking available?",
    answer:
      "Complimentary valet parking is offered to all dinner guests from 5:00 PM onwards.",
  },
];

export const GALLERY = [
  IMAGES.dish2,
  IMAGES.interior,
  IMAGES.dish1,
  IMAGES.hero,
  IMAGES.dish3,
  IMAGES.interior,
];
