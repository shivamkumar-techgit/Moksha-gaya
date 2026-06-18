import React from "react";
import { Metadata } from "next";
import BestPanditClient from "./BestPanditClient";
import { LocalBusinessSchema, OrganizationSchema, BreadcrumbSchema, FAQSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Best Pandit for Pind Daan in Gaya - Vedic Gayawal Priests",
  description: "Book verified, certified, and English/Hindi-speaking Gayawal Pandits for ancestral rites. Genuine Gotra verification and complete Garuda Purana guidelines.",
  keywords: ["best pandit for pind daan in gaya", "gaya pandit for pind daan", "gayawal pandas", "priests in gaya for pind daan", "Gaya Vedic Pandits"],
  alternates: {
    canonical: "/best-pandit-for-pind-daan-in-gaya",
  },
};

export default function BestPanditPage() {
  const faqs = [
    {
      q: "Who are the Gayawal Pandas (Pandits)?",
      a: "Gayawal Pandas are the traditional, lineage-based priests of Gaya who hold the exclusive right granted by Lord Vishnu to perform ancestral salvation rituals at the sacred Vedis of Gaya. They maintain ancient records of families (Bahi Khata) spanning centuries."
    },
    {
      q: "Do your Pandits speak local regional languages?",
      a: "Yes, we coordinate rituals with Pandits who are fluent in various languages including Hindi, English, Telugu, Tamil, Kannada, Bengali, and Gujarati. This ensures you understand every step and mantra of the ceremony."
    },
    {
      q: "How do you verify the credentials of the Pandits?",
      a: "All Pandits registered with Gaya Rituals are verified Gayawal Brahmins who have completed formal Vedic education in scripture, gotra lineage rules, and ritual mechanics. They have a minimum of 10-15 years of experience."
    },
    {
      q: "What is the customary Dakshina for the Pandits?",
      a: "Dakshina (priest offering) is transparently included in all our Economy, Standard, and Premium packages. This removes any ambiguity, hidden demands, or last-minute negotiation, allowing you to focus completely on the ritual."
    }
  ];

  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Best Pandit for Pind Daan in Gaya", item: "/best-pandit-for-pind-daan-in-gaya" },
        ]}
      />
      <BestPanditClient />
    </>
  );
}
