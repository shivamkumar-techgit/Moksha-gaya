import React from "react";
import { Metadata } from "next";
import GayaPindDaanCostClient from "./GayaPindDaanCostClient";
import { LocalBusinessSchema, OrganizationSchema, BreadcrumbSchema, FAQSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Gaya Pind Daan Cost & Dakshina Rates | Gaya Rituals",
  description: "Get transparent rates for Gaya Pind Daan cost, pandit dakshina, and puja samagri. No hidden charges. Book authentic rituals with upfront pricing.",
  keywords: ["Gaya Pind Daan Cost", "Gaya Pind Daan rates", "Pandit dakshina in Gaya", "Pind Daan puja cost", "Gaya Pind Daan price list"],
  alternates: {
    canonical: "/gaya-pind-daan-cost",
  },
};

export default function GayaPindDaanCostPage() {
  const faqs = [
    {
      q: "What are the main components of the Gaya Pind Daan cost?",
      a: "The total cost covers: 1. Pandit Ji's Dakshina. 2. High-quality ritual ingredients (barley, honey, sesame, curd, fruits, sweets). 3. Temple permissions and Vedi entry charges. 4. Feeding of local Brahmins (Brahmin Bhoj). 5. Local transfers between the Vedis."
    },
    {
      q: "Is Pandit Dakshina included in your package cost?",
      a: "Yes, unlike traditional bookings where pandas might demand additional Dakshina at each Vedi, our packages include the complete Pandit Dakshina upfront, ensuring zero uncomfortable negotiations."
    },
    {
      q: "Are there any hidden charges or mandatory temple payments?",
      a: "No. Gaya Rituals guarantees 100% pricing transparency. We cover all material costs, priest dakshinas, and entry tickets in the package. General temple charity is optional and completely left to your discretion."
    },
    {
      q: "How can we pay the package cost?",
      a: "We accept payments via UPI, major credit/debit cards, Net Banking, and Bank Transfers. You can pay a token advance online to secure your date and Pandit, and the remainder upon arrival in Gaya."
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
          { name: "Gaya Pind Daan Cost", item: "/gaya-pind-daan-cost" },
        ]}
      />
      <GayaPindDaanCostPageClient />
    </>
  );
}

function GayaPindDaanCostPageClient() {
  return <GayaPindDaanCostClient />;
}
