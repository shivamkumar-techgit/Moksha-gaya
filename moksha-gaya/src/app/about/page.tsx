import React from "react";
import { Metadata } from "next";
import AboutClient from "./AboutClient";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Us | Authentic Vedic Priest Lineage | Gaya Rituals",
  description: "Learn about Gaya Rituals' mission, traditional Gayawal Pandit credentials, scriptural integrity, and complete pilgrimage assistance team.",
  keywords: ["about Gaya Rituals", "Gaya Pandits lineage", "traditional Gayawal pandas", "Gaya pilgrimage assistance"],
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "About Us", item: "/about" },
        ]}
      />
      <AboutClient />
    </>
  );
}
