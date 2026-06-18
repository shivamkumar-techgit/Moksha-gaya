import React from "react";
import { Metadata } from "next";
import NarayanBaliPujaClient from "./NarayanBaliPujaClient";
import { LocalBusinessSchema, OrganizationSchema, BreadcrumbSchema, FAQSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Narayan Bali Puja in Gaya - Pitru Dosha Nivaran | Gaya Rituals",
  description: "Perform 2-day Narayan Bali Puja in Gaya for unnatural death salvation and severe Pitru Dosha relief. Conducted by expert Vedic priests with complete lodging support.",
  keywords: ["Narayan Bali Puja in Gaya", "Narayan Bali cost Gaya", "Narayan Bali procedure Gaya", "unnatural death puja Gaya", "Pitru Dosha Gaya"],
  alternates: {
    canonical: "/narayan-bali-puja-gaya",
  },
};

export default function NarayanBaliPujaPage() {
  const faqs = [
    {
      q: "Why is Narayan Bali performed?",
      a: "Narayan Bali is a specialized Vedic ritual performed to satisfy and liberate souls that met untimely, sudden, or unnatural deaths (due to accidents, illnesses, suicide, etc.) and to clear severe Pitru Dosha affecting the family's health, peace, and growth."
    },
    {
      q: "What is the difference between standard Pind Daan and Narayan Bali?",
      a: "Standard Pind Daan is performed for ancestors who passed away naturally, satisfying them and speeding their journey to Pitru Loka. Narayan Bali is an intensive, specialized puja invoking Lord Narayana specifically for souls stuck in lower realms due to unnatural deaths."
    },
    {
      q: "How many days does the Narayan Bali puja take?",
      a: "Narayan Bali is a 2-day comprehensive ritual. The first day involves making dummy straw bodies, doing fire rituals (Havan), and invocation. The second day involves Pinda offerings, Brahmin Bhojan, and formal conclusion."
    },
    {
      q: "What is the cost of Narayan Bali Puja in Gaya?",
      a: "Because Narayan Bali requires 2 days, specialized puja samagri, and multiple pandits, the package cost starts from ₹15,000. It includes lodging support, transportation, all materials, and Brahmin Bhojan."
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
          { name: "Narayan Bali Puja in Gaya", item: "/narayan-bali-puja-gaya" },
        ]}
      />
      <NarayanBaliPageClient />
    </>
  );
}

function NarayanBaliPageClient() {
  return <NarayanBaliPujaClient />;
}
