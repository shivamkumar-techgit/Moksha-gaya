import React from "react";
import { Metadata } from "next";
import ContactClient from "./ContactClient";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Gaya Rituals. Reach out via phone, email, or visit our office in Gaya for ritual inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Contact Us", item: "/contact" },
        ]}
      />
      <ContactClient />
    </>
  );
}
