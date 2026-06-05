export interface Package {
  name: string;
  desc: string;
  price: string;
  features: string[];
  popular: boolean;
  cta: string;
}

export const packages: Package[] = [
  {
    name: "Essential Package",
    desc: "Essential ritual arrangements for families visiting Gaya.",
    price: "₹ 5,100 onwards",
    features: [
      "Verified Pandit assistance",
      "Puja material sourcing",
      "Sankalp & offering guidance",
      "Vishnupad Temple ritual coordination",
      "Vedic telephone/WhatsApp support"
    ],
    popular: false,
    cta: "Enquire Now"
  },
  {
    name: "Traditional Package",
    desc: "Designed for families seeking complete comfort and priority arrangements.",
    price: "₹ 11,500 onwards",
    features: [
      "Vedic Pandit trained in ancestral rites",
      "Pure ritual puja materials (ghee, fruits, dry items)",
      "Priority queue access at Vishnupad Temple",
      "Local transport (AC sedan) for temple visits",
      "Dedicated coordinator support in Gaya",
      "Railway/Airport pickup and drop support",
      "Brahman Bhoj arrangements (1 Brahmin)"
    ],
    popular: true,
    cta: "Choose Traditional"
  },
  {
    name: "Complete Family Package",
    desc: "Comprehensive spiritual experience for families and large groups desiring complete coordination.",
    price: "By Quotation",
    features: [
      "Senior Acharya/Pandit selection",
      "Specialized Vedic rituals (includes Havan and custom rites)",
      "Priority coordination at all Gaya sacred sites",
      "Comfortable AC SUV transportation",
      "Quality hotel & accommodation coordination",
      "Brahman Bhoj arrangements (5 Brahmins)",
      "Dedicated personal coordinator available 24/7",
      "Prasad delivery & framing services"
    ],
    popular: false,
    cta: "Choose Family Package"
  }
];
