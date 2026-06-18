import React from "react";
import { Metadata } from "next";
import BookNowClient from "./BookNowClient";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Book Pind Daan & Shraddh Karma Online | Gaya Rituals",
  description: "Book your ancestral rituals in Gaya online. Direct registration for in-person and live online video Pind Daan, Narayan Bali, and Tarpan.",
  keywords: ["book Pind Daan online", "Gaya ritual booking", "Narayan Bali booking", "online Pind Daan Gaya registration"],
  alternates: {
    canonical: "/book-now",
  },
};

export default function BookNowPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Book Now", item: "/book-now" },
        ]}
      />
      <BookNowClient />
    </>
  );
}
