import React from "react";
import { Metadata } from "next";
import PitruPakshaGayaClient from "./PitruPakshaGayaClient";
import { LocalBusinessSchema, OrganizationSchema, BreadcrumbSchema, FAQSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Pitru Paksha Gaya - Pind Daan Booking & Schedule | Gaya Rituals",
  description: "Complete guide and booking for Pitru Paksha Gaya. Schedule your ancestral rituals, book verified pandas, transport, and hotels in advance.",
  keywords: ["Pitru Paksha Gaya", "Gaya Pitru Paksha booking", "Pitru Paksha dates Gaya", "Pitrapaksha Gaya rituals", "Gaya Pind Daan Pitru Paksha"],
  alternates: {
    canonical: "/pitru-paksha-gaya",
  },
};

export default function PitruPakshaGayaPage() {
  const faqs = [
    {
      q: "What is the significance of Pitru Paksha in Gaya?",
      a: "Pitru Paksha is a sacred 15-day period in the Hindu calendar dedicated to remembering and offering food/water to departed ancestors. Performing Pind Daan in Gaya during this time carries immense spiritual weight, opening the gates of heaven for forefathers and clearing lineage debts."
    },
    {
      q: "When does Pitru Paksha occur and how is it calculated?",
      a: "Pitru Paksha falls during the Bhadrapada month (typically September or October), starting on the day after the full moon (Purnima) and ending on the new moon day (Sarvapitri Amavasya). The exact dates vary yearly based on the lunar calendar."
    },
    {
      q: "Why is advance booking highly recommended for Pitru Paksha in Gaya?",
      a: "During Pitru Paksha, millions of devotees visit Gaya, causing extreme rushes at temples, premium hotel shortages, and high cab rates. Advance booking secures experienced Pandits, VIP temple queue access, comfortable stays, and hassle-free local transport."
    },
    {
      q: "What lodging and transport support do you provide during this peak season?",
      a: "We offer complete end-to-end logistics including verified hotel bookings (near the temples), private cabs for vedi-to-vedi transfers, fast track entry tokens, and dedicated guides to navigate the massive crowds safely."
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
          { name: "Pitru Paksha Gaya", item: "/pitru-paksha-gaya" },
        ]}
      />
      <PitruPakshaGayaPageClient />
    </>
  );
}

function PitruPakshaGayaPageClient() {
  return <PitruPakshaGayaClient />;
}
