import React from "react";
import { Metadata } from "next";
import GayaPindDaanClient from "./GayaPindDaanClient";
import { LocalBusinessSchema, OrganizationSchema, BreadcrumbSchema, FAQSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Gaya Pind Daan Packages, Process & Timing | Gaya Rituals",
  description: "Detailed guide to Gaya Pind Daan. Explore custom package costs, Pitrapaksha timings, puja materials, and step-by-step ancestral salvation rituals.",
  keywords: ["Gaya Pind Daan", "Gaya Pind Daan Packages", "Gaya Pind Daan Cost", "Pitrapaksha Gaya", "perform Gaya Pind Daan"],
  alternates: {
    canonical: "/gaya-pind-daan",
  },
};

export default function GayaPindDaanPage() {
  const faqs = [
    {
      q: "What is the cost of performing Pind Daan in Gaya?",
      a: "The cost of performing Pind Daan varies depending on the number of Vedis (locations) and Brahmins fed. Standard packages start from ₹5,500 and go up to ₹21,000 for multi-day premium packages which include VIP assistance, transport, and lodging."
    },
    {
      q: "When is the best time to perform Gaya Pind Daan?",
      a: "While Pind Daan can be performed throughout the year, the 15-day period of Pitru Paksha (usually in September-October) is considered the most auspicious. Other highly recommended times are Amavasya, Solar or Lunar eclipses."
    },
    {
      q: "What items (samagri) are required for Gaya Pind Daan?",
      a: "The primary items are barley flour (jau ka aata) or rice flour for making the Pinda, honey, sesame seeds (til), milk, curd, ghee, and kush grass. Our package covers all necessary high-quality ritual items."
    },
    {
      q: "Do your packages include accommodation and travel support in Gaya?",
      a: "Yes, our Standard and Premium packages include local cab services for vedi transport, and our Premium package includes premium accommodation stay. We ensure a completely hassle-free experience for senior citizens."
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
          { name: "Gaya Pind Daan", item: "/gaya-pind-daan" },
        ]}
      />
      <GayaPindDaanClient />
    </>
  );
}
