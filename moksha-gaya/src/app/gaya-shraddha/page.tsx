import React from "react";
import { Metadata } from "next";
import GayaShraddhaClient from "./GayaShraddhaClient";
import { LocalBusinessSchema, OrganizationSchema, BreadcrumbSchema, FAQSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Gaya Shraddha Karma - Tarpan & Pitru Puja | Gaya Rituals",
  description: "Connect with experienced Vedic priests to perform Gaya Shraddha, Tarpan, Tripindi, and Narayan Bali rituals. Complete travel, stay, and samagri coordination.",
  keywords: ["Gaya Shraddha", "Gaya Shraddha Karma", "Tarpan Gaya", "Gaya Tripindi Shraddh", "Gaya Narayan Bali", "perform Gaya Shraddha"],
  alternates: {
    canonical: "/gaya-shraddha",
  },
};

export default function GayaShraddhaPage() {
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
      q: "What is the difference between normal Shraddha and Gaya Shraddha?",
      a: "A standard Shraddha is done annually at home or local temples on the death anniversary (Tithi) of the ancestors. Gaya Shraddha is a one-time sacred pilgrimage ritual that gives permanent satisfaction to ancestors, resolving ancestral blocks and helping them attain final salvation."
    },
    {
      q: "When should we perform Narayan Bali or Tripindi Shraddh in Gaya?",
      a: "Narayan Bali is performed to resolve Pitru Dosha caused by untimely, unnatural, or accidental deaths in the family. Tripindi Shraddh is performed to resolve issues when three generations of ancestors are unsatisfied or when there are recurring problems like career blockages, family disputes, or childlessness."
    },
    {
      q: "How many days does the Gaya Shraddha ceremony take?",
      a: "A standard Gaya Shraddha takes 1 day (about 3 hours). The comprehensive 17-Vedi ritual takes 1 to 2 days, and the detailed 45-Vedi ritual requires 3 complete days. Narayan Bali requires a specific 2-day puja process."
    },
    {
      q: "How do we book Gaya Shraddha services with you?",
      a: "You can book directly through our website booking form or by contacting our coordinate managers over WhatsApp/Phone. We verify your Gotra and family background to allocate the right Pandits and schedule the puja timings."
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
          { name: "Gaya Shraddha", item: "/gaya-shraddha" },
        ]}
      />
      <GayaShraddhaPageClient />
    </>
  );
}

// Named alias or wrapper to prevent name collision with GayaShraddhaClient component
function GayaShraddhaPageClient() {
  return <GayaShraddhaClient />;
}
