import React from "react";
import { Metadata } from "next";
import WhyPindDaanGayaClient from "./WhyPindDaanGayaClient";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Why Perform Pind Daan in Gaya?",
  description: "Explore the scriptural importance of performing ancestral rituals in the holy land of Gaya, blessed by Lord Vishnu.",
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
