import React from "react";
import { Metadata } from "next";
import AboutClient from "./AboutClient";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the mission, scriptural authenticity, and coordinators at Gaya Rituals.",
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
