import React from "react";
import { Metadata } from "next";
import GayaPindDaanPackagesClient from "./GayaPindDaanPackagesClient";
import { LocalBusinessSchema, OrganizationSchema, BreadcrumbSchema, FAQSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Gaya Pind Daan Packages - Complete Puja Pricing | Gaya Rituals",
  description: "Compare Gaya Pind Daan packages. From Basic (₹5,100) to Premium (₹25,000) multi-day rituals. Inclusions: Vedic Pandits, VIP temple entry, Brahmin Bhojan, and stay.",
  keywords: ["Gaya Pind Daan Packages", "Gaya Pind Daan price list", "Pind Daan packages in Gaya", "Gaya Puja packages", "Gaya Pind Daan pricing"],
  alternates: {
    canonical: "/gaya-pind-daan-packages",
  },
};

export default function GayaPindDaanPackagesPage() {
  const faqs = [
    {
      q: "What does the standard Gaya Pind Daan package include?",
      a: "Our Standard package includes a verified Vedic Pandit, premium puja materials, Brahmin Bhoj for 5 Brahmins, 7 to 9 sacred Vedis covered, a dedicated transport vehicle for all Vedis, priority temple queues, and general accommodation guidance."
    },
    {
      q: "Do your packages include feeding local Brahmins (Brahmin Bhojan)?",
      a: "Yes. In Vedic rituals, feeding Brahmins is crucial to seal the puja. The Economy package feeds 2 Brahmins, the Standard feeds 5, and the Premium package includes feeding 11 Brahmins, in line with ancient custom."
    },
    {
      q: "How many Vedis are covered in the Basic, Standard, and Premium packages?",
      a: "The Basic package covers the 3 primary locations (Vishnupad, Falgu River, Akshay Vat). Standard covers 7-9 key spots. The Premium package covers all 45+ historical Vedis across Gaya, spread over 2 to 3 days."
    },
    {
      q: "Can the package details be customized for multiple family members?",
      a: "Yes. If multiple family members are performing Pind Daan together under the same Gotra, we customize the package to avoid duplicating costs for transport, lodging, or materials, charging only for additional Sankalps and Bhojans."
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
          { name: "Gaya Pind Daan Packages", item: "/gaya-pind-daan-packages" },
        ]}
      />
      <GayaPindDaanPackagesClient />
    </>
  );
}
