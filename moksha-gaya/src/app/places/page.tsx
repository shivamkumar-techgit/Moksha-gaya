import React from "react";
import { Metadata } from "next";
import PlacesClient from "./PlacesClient";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Sacred Places & Vedis in Gaya Pilgrimage | Gaya Rituals",
  description: "Explore the historical and scriptural importance of Vishnupad Temple, Falgu River, Akshay Vat, Pretshila, and other sacred Vedis of Gaya.",
  keywords: ["sacred places in Gaya", "Gaya Vedis list", "Vishnupad temple history", "Akshay Vat Banyan tree"],
  alternates: {
    canonical: "/places",
  },
};

export default function PlacesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Sacred Places", item: "/places" },
        ]}
      />
      <PlacesClient />
    </>
  );
}
