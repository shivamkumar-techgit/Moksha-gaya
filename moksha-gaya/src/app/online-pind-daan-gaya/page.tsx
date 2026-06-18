import React from "react";
import { Metadata } from "next";
import OnlinePindDaanGayaClient from "./OnlinePindDaanGayaClient";
import { LocalBusinessSchema, OrganizationSchema, BreadcrumbSchema, FAQSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Online Pind Daan Gaya - Remote Live Video Puja | Gaya Rituals",
  description: "Perform authentic online Pind Daan in Gaya via HD live stream. Tailored for NRIs and families unable to travel. Receive ritual videos, photos, and Prasad by post.",
  keywords: ["Online Pind Daan Gaya", "remote Pind Daan Gaya", "NRI Pind Daan", "e-pind daan gaya", "perform Pind Daan online in Gaya"],
  alternates: {
    canonical: "/online-pind-daan-gaya",
  },
};

export default function OnlinePindDaanGayaPage() {
  const faqs = [
    {
      q: "Is Online Pind Daan scripturally valid?",
      a: "Yes, in situations where a devotee cannot travel due to health, distance, or travel restrictions, scriptures allow performing rituals via proxy (Pratinidhi). Our pandits conduct the custom Sankalp in your name and Gotra while you participate and watch live via video stream."
    },
    {
      q: "How does the online Pind Daan process work?",
      a: "1. You register with ancestor names and Gotra. 2. A live HD video link is shared. 3. You join the call for the initial Sankalp. 4. The Pandit performs the Tarpan and Pinda Arpan at Gaya. 5. You watch the live ceremony and perform remote prayers."
    },
    {
      q: "Do we receive Prasad and ritual proof?",
      a: "Yes, we record the complete ceremony and share high-definition photos and videos of the offerings. We also package and ship the sacred Prasad, Falgu Bhasma, and Vishnu Charana thread to your domestic or international address."
    },
    {
      q: "What do I need to prepare at home for the online puja?",
      a: "You only need a stable internet connection, a quiet space, and optionally a photo of your ancestors. The pandit will guide you on doing minor symbolic water offerings (Tarpan) from your home during the call."
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
          { name: "Online Pind Daan Gaya", item: "/online-pind-daan-gaya" },
        ]}
      />
      <OnlinePindDaanGayaClient />
    </>
  );
}
