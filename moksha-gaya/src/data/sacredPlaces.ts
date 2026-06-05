export interface SacredPlace {
  name: string;
  slug: string;
  desc: string;
  icon: string;
  image: string;
}

export const sacredPlaces: SacredPlace[] = [
  {
    name: "Vishnupad Temple",
    slug: "vishnupad-temple",
    desc: "Home to the sacred footprint of Lord Vishnu. It is considered the most critical location for offering Pind Daan to ancestors.",
    icon: "🏛️",
    image: "/images/temples/vishnu-pad-image.jpg"
  },
  {
    name: "Falgu River",
    slug: "falgu-river",
    desc: "A holy river believed to be an incarnation of Lord Vishnu. The sands and waters of the Falgu are used to make the initial Pind offerings.",
    icon: "🌊",
    image: "/images/rituals/falgu-river2.jpg"
  },
  {
    name: "Akshay Vat",
    slug: "akshay-vat",
    desc: "The immortal Banyan tree blessed by Goddess Sita. Offering the final Pind here is believed to grant eternal liberation to ancestors.",
    icon: "🌳",
    image: "/images/rituals/pinddan-image18.jpg"
  },
  {
    name: "Pretshila",
    slug: "pretshila",
    desc: "A sacred hill associated with the spirits. Special prayers are offered here to liberate souls that died tragic, unnatural deaths.",
    icon: "⛰️",
    image: "/images/gallery/local-gaya.jpg"
  },
  {
    name: "Ramshila",
    slug: "ramshila",
    desc: "A historical hill where Lord Rama offered Pind Daan for his father, King Dasharatha. Performing rituals here brings supreme blessings.",
    icon: "🛕",
    image: "/images/gallery/local-gaya1.jpg"
  }
];
