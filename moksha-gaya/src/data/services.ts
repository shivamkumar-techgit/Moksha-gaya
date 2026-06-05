export interface Service {
  title: string;
  slug: string;
  desc: string;
  icon: string;
  image: string;
}

export const services: Service[] = [
  {
    title: "Pind Daan",
    slug: "pind-daan",
    desc: "Sacred ancestral offering ceremony performed at key spots in Gaya (Vishnupad, Falgu River, Akshay Vat) for soul salvation.",
    icon: "🕉️",
    image: "/images/rituals/pinddan-image1.jpg"
  },
  {
    title: "Shraddh Karma",
    slug: "shraddh-karma",
    desc: "Traditional annual ceremonies performed with absolute Vedic discipline to express gratitude and pay homage to ancestors.",
    icon: "🕯️",
    image: "/images/rituals/pinddan-image2.jpg"
  },
  {
    title: "Tarpan Ritual",
    slug: "tarpan",
    desc: "Sacred water and sesame seed offering ceremony to satisfy the souls of ancestors residing in the Pitru Loka.",
    icon: "💧",
    image: "/images/rituals/falgu-river.png"
  },
  {
    title: "Narayan Bali",
    slug: "narayan-bali",
    desc: "A highly specialized two-day ritual performed to resolve severe Pitru Dosha and liberate souls that met untimely deaths.",
    icon: "🔱",
    image: "/images/rituals/pinddan-image16.jpg"
  },
  {
    title: "Tripindi Shraddh",
    slug: "tripindi-shraddh",
    desc: "Special ritual performed to satisfy ancestors from three different lineages and remove deep-seated family obstacles.",
    icon: "🔥",
    image: "/images/rituals/pinddan-image17.webp"
  },
  {
    title: "Online Pind Daan",
    slug: "online-pind-daan",
    desc: "Premium remote digital service enabling NRI and distant families to participate in rituals via high-definition live video.",
    icon: "💻",
    image: "/images/gallery/ritual-ai6.png"
  }
];
