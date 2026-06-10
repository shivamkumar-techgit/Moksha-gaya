export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
  service: string;
  photo: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Rajesh Sharma",
    location: "Delhi",
    quote: "Our family was very anxious about traveling to Gaya for Pind Daan. Moksha Gaya made the process incredibly smooth. The Pandit was extremely knowledgeable, and our coordinator guided us at every temple. We felt a deep sense of peace.",
    rating: 5,
    service: "Pind Daan Package",
    photo: "/images/testimonials/rajesh_sharma.png"
  },
  {
    name: "Amit Verma",
    location: "United States",
    quote: "Living in the US, I was worried about not being able to perform Pind Daan for my parents. Moksha Gaya organized the online ceremony flawlessly. We joined via video, took the Sankalp, and watched the pandit perform the rites at Vishnupad. It was a comforting experience.",
    rating: 5,
    service: "Online Pind Daan",
    photo: "/images/testimonials/amit_verma.png"
  },
  {
    name: "Suresh Kumar",
    location: "Mumbai",
    quote: "We performed my father's annual Shraddh in Gaya through Moksha Gaya. They handled all the details, from booking the pandit to preparing the food for Brahmanas. It allowed us to focus completely on the spiritual aspect of the ritual.",
    rating: 5,
    service: "Shraddh Karma",
    photo: "/images/testimonials/suresh_kumar.png"
  },
  {
    name: "Mishra Family",
    location: "Patna",
    quote: "Everything was arranged professionally. The Pandit Ji guided us throughout the process and made the entire ritual seamless and peaceful for our elders.",
    rating: 5,
    service: "Pind Daan",
    photo: "/images/testimonials/rajesh_sharma.png"
  }
];
