import React from "react";
import { Metadata } from "next";
import RitualGuideClient from "./RitualGuideClient";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Vedic Ritual Guides & Ancestor Puja Procedures | Gaya Rituals",
  description: "Comprehensive step-by-step guides on performing Pind Daan, Tarpan, Narayan Bali, and annual Shraddha rituals according to Garuda Purana.",
  keywords: ["how to perform Pind Daan", "Tarpan procedure", "Narayan Bali puja steps", "Vedic rituals guide"],
  alternates: {
    canonical: "/ritual-guide",
  },
};

export default function RitualGuidePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Ritual Guide", item: "/ritual-guide" },
        ]}
      />
      <RitualGuideClient />
    </>
  );
}
