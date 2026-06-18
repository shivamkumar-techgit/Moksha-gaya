import React from "react";
import { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Puja Services & Ritual Packages in Gaya | Gaya Rituals",
  description: "Explore our authentic Vedic services: Pind Daan, Annual Shraddh, Tarpan, Tripindi, and Narayan Bali Pujas. Custom packages and logistics.",
  keywords: ["Gaya puja services", "Gaya ritual packages", "Pind Daan packages", "Tarpan services Gaya"],
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/services" },
        ]}
      />
      <ServicesClient />
    </>
  );
}
