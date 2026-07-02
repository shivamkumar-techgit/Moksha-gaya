import React from "react";
import { Metadata } from "next";
import PindDaanInGayaClient from "./PindDaanInGayaClient";
import { LocalBusinessSchema, OrganizationSchema, BreadcrumbSchema, FAQSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Authentic Pind Daan in Gaya - Complete Ritual Packages | Gaya Rituals",
  description: "Performing Pind Daan in Gaya is a sacred duty to ensure the liberation and peace (Moksha) of your ancestors. Our team provides completely transparent, authentic, and step-by-step guidance for families visiting Gaya Ji.",
  keywords: ["Pind Daan in Gaya", "Gaya Pind Daan", "Pind Daan packages Gaya", "Gaya Pitru Paksha", "perform Pind Daan in Gaya"],
  alternates: {
    canonical: "/pind-daan-in-gaya",
  },
};

export default function PindDaanInGayaPage() {
  const faqs = [
    {
      q: "What pooja is done in Gaya?",
      a: "The primary pooja performed in Gaya is Pind Daan (also known as Gaya Shradh). This sacred ancestral ritual is performed to offer peace and salvation (Moksha) to the departed souls of ancestors."
    },
    {
      q: "What rituals are performed in Gaya?",
      a: "The main rituals performed in Gaya include Snana (holy bath), Sankalpa, Pinda Daan (offering rice balls), and Tarpan (offering sacred water) at major holy sites like the Vishnupad Temple and the Phalgu River."
    },
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
