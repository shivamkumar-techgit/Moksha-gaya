import React from "react";
import { Metadata } from "next";
import PindDaanBookingClient from "./PindDaanBookingClient";
import { LocalBusinessSchema, OrganizationSchema, BreadcrumbSchema, FAQSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Pind Daan Booking in Gaya | Online & Offline Ritual Registration",
  description: "Book authentic Pind Daan services in Gaya. Direct coordination with verified Gayawal Pandits, clean accommodation, and local transport.",
  keywords: ["Pind Daan Booking in Gaya", "Gaya Pind Daan registration", "book pandit for pind daan Gaya", "Gaya rituals booking"],
  alternates: {
    canonical: "/book-pind-daan-gaya",
  },
};

export default function PindDaanBookingPage() {
  const faqs = [
    {
      q: "How can I book a Pind Daan slot in Gaya?",
      a: "You can easily book a slot by selecting one of our customized packages (Standard, Premium, etc.), entering your gotra/ancestry details, and confirming the date. Our coordinators then assign a verified Gayawal Panda for your ritual."
    },
    {
      q: "What details are required at the time of booking?",
      a: "We require the names of the departed ancestors (if known), their dates of passing (tithi), your family Gotra, and the number of family members attending. Standard ID cards are also needed for local hotel accommodations."
    },
    {
      q: "Is pre-booking required for Pitru Paksha?",
      a: "Yes, pre-booking is highly recommended during Pitru Paksha. Gaya attracts millions of devotees during this 15-day period, and pre-booking ensures guaranteed hotel slots, transport cabs, and priest allocations."
    },
    {
      q: "Can I book a remote/online Pind Daan session?",
      a: "Yes. If you cannot travel to Gaya, we offer live streaming booking where our verified priests conduct the entire ritual at Falgu River or Vishnupad Temple on your behalf, with your presence coordinated via a secure live video call."
    }
  ];

  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Pind Daan Booking in Gaya", item: "/book-pind-daan-gaya" },
        ]}
      />
      <PindDaanBookingClient />
    </>
  );
}
