import React from "react";
import { Metadata } from "next";
import WhyPindDaanGayaClient from "./WhyPindDaanGayaClient";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Why Perform Pind Daan in Gaya? Scriptural Benefits | Gaya Rituals",
  description: "Understand the scriptural significance, benefits, and stories from Garuda and Vayu Puranas explaining why Gaya is the land of salvation.",
  keywords: ["importance of Pind Daan in Gaya", "why perform Pind Daan", "benefits of Gaya Pind Daan", "Gayasur story"],
  alternates: {
    canonical: "/why-pind-daan-gaya",
  },
};

export default function WhyPindDaanGayaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Why Perform Pind Daan in Gaya?", item: "/why-pind-daan-gaya" },
        ]}
      />
      <WhyPindDaanGayaClient />
    </>
  );
}
