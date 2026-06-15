import React from "react";
import { Metadata } from "next";
import RitualGuideClient from "./RitualGuideClient";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Vedic Ritual Guides & Procedures",
  description: "Comprehensive step-by-step guides on Pind Daan, Tarpan, Narayan Bali, and Pitra Dosh rituals.",
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
