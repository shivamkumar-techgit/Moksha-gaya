import React from "react";
import { Metadata } from "next";
import ContactClient from "./ContactClient";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us | Pandit Booking & Consultations | Gaya Rituals",
  description: "Connect with our coordination desk in Gaya. Contact us via phone, WhatsApp, email, or visit our office near Vishnupad Temple.",
  keywords: ["contact Gaya Rituals", "Gaya Pandit phone number", "book Pind Daan Gaya", "Gaya puja office"],
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
