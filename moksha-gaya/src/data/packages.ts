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
    name: "Basic Package",
    desc: "Essential ritual arrangements at core locations for individuals visiting Gaya.",
    price: "₹ 5,100 onwards",
    features: [
      "Verified Pandit Ji assistance",
      "Essential Puja materials sourcing",
      "Sankalp & offering guidance",
      "3 Sacred Places covered",
      "1 Hour ritual duration",
      "Online participation option"
    ],
    popular: false,
    cta: "Enquire Now"
  },
  {
    name: "Economy Package",
    desc: "A balanced offering with extended assistance and Brahmana charity.",
    price: "₹ 8,500 onwards",
    features: [
      "Verified Pandit Ji assistance",
      "Complete Puja materials included",
      "Brahmin Bhoj (2 Brahmins)",
      "5 Sacred Places covered",
      "1 Hour ritual duration",
      "Online participation option",
      "Dedicated coordinator support"
    ],
    popular: false,
    cta: "Select Economy"
  },
  {
    name: "Standard Package",
    desc: "Our most popular package offering priority access and private local transport.",
    price: "₹ 11,500 onwards",
    features: [
      "Verified Pandit Ji assistance",
      "Premium Puja materials included",
      "Brahmin Bhoj (5 Brahmins)",
      "7-9 Sacred Places covered",
      "3 Hours ritual duration",
      "Online participation option",
      "AC Sedan vehicle local transport",
      "Priority queue at Vishnupad Temple"
    ],
    popular: true,
    cta: "Select Standard"
  },
  {
    name: "Premium Package",
    desc: "The ultimate 17 or 45-point traditional ritual journey with luxury transfers & stay.",
    price: "₹ 21,500 onwards",
    features: [
      "Senior Vedic Acharya selection",
      "Complete premium Puja materials",
      "Brahmin Bhoj (11 Brahmins)",
      "45+ Sacred Places (Complete Vedis)",
      "2-3 Days comprehensive duration",
      "Online participation option",
      "Private AC SUV transportation",
      "Dedicated personal coordinator 24/7",
      "Quality hotel stay coordination"
    ],
    popular: false,
    cta: "Select Premium"
  }
];
