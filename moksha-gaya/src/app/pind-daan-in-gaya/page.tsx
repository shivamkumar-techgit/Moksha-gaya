import React from "react";
import { Metadata } from "next";
import PindDaanInGayaClient from "./PindDaanInGayaClient";
import { LocalBusinessSchema, OrganizationSchema, BreadcrumbSchema, FAQSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Pind Daan in Gaya | Authentic Pind Daan Rituals in Gaya",
  description: "Book authentic Pind Daan in Gaya with experienced Vedic priests. Complete ritual assistance at Vishnupad Temple, Falgu River and Akshay Vat.",
  keywords: ["Pind Daan in Gaya", "Gaya Pind Daan", "Pind Daan packages Gaya", "Gaya Pitru Paksha", "perform Pind Daan in Gaya"],
  alternates: {
    canonical: "/pind-daan-in-gaya",
  },
};

export default function PindDaanInGayaPage() {
  const faqs = [
    {
      q: "Why is Gaya considered the best place for performing Pind Daan?",
      a: "According to the Garuda Purana and Vayu Purana, Gaya is blessed by Lord Vishnu as the body of Gayasur. Performing Pind Daan here satisfies the ancestors permanently and helps them achieve salvation (Moksha) instantly."
    },
    {
      q: "What are the most important Vedis (locations) for Pind Daan in Gaya?",
      a: "The three most critical locations are the Falgu River (for water tarpan), Vishnupad Temple (placing pindas on Lord Vishnu's footprint), and Akshay Vat (the immortal Banyan tree for final blessings)."
    },
    {
      q: "How long does the Pind Daan ritual take to complete?",
      a: "Depending on the package, the ritual takes between 1.5 to 3 hours for standard sites. If performing the full 45-Vedi ritual, it can stretch over 2 to 3 days."
    },
    {
      q: "Can we perform Pind Daan in Gaya on behalf of someone else?",
      a: "Yes, you can perform it for your parents, grandparents, spouse, or siblings. If you cannot travel to Gaya, we also offer Online Pind Daan where our Pandits perform the ritual live via video call."
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
          { name: "Pind Daan in Gaya", item: "/pind-daan-in-gaya" },
        ]}
      />
      <PindDaanInGayaClient />
    </>
  );
}
