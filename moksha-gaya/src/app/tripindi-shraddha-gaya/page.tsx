import React from "react";
import { Metadata } from "next";
import TripindiShraddhaClient from "./TripindiShraddhaClient";
import { LocalBusinessSchema, OrganizationSchema, BreadcrumbSchema, FAQSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Tripindi Shraddha in Gaya - Lineage Salvation Puja | Gaya Rituals",
  description: "Appease ancestors from three lineages with Tripindi Shraddha in Gaya. Resolve family struggles, marriage delays, and career blocks. Book authentic rites.",
  keywords: ["Tripindi Shraddha in Gaya", "Tripindi puja Gaya", "Tripindi Shraddh cost Gaya", "Tripindi benefits", "Gaya Tripindi Shraddh"],
  alternates: {
    canonical: "/tripindi-shraddha-gaya",
  },
};

export default function TripindiShraddhaPage() {
  const faqs = [
    {
      q: "What is Tripindi Shraddha?",
      a: "Tripindi Shraddha is a specialized rite performed to pacify unsatisfied ancestral souls from three different lineages (paternal, maternal, and spouse) who passed away in different states. It clears deep-seated karmic blocks affecting descendants."
    },
    {
      q: "Who should perform Tripindi Shraddha?",
      a: "Anyone experiencing recurring problems such as severe blockages in career or business, chronic unexplained illnesses in the family, long-term marriage delays, or difficulties in childbirth (Vansh Vridhi) is advised to perform this puja."
    },
    {
      q: "What are the benefits of performing Tripindi Shraddha in Gaya?",
      a: "Gaya is the ultimate landing ground for ancestral spirits. Performing Tripindi here multiplies the efficacy of the mantra chants and offering pindas, ensuring that the ancestors of multiple lineages cross over instantly and stop obstructing family growth."
    },
    {
      q: "What is the difference between Narayan Bali and Tripindi Shraddha?",
      a: "Narayan Bali is performed specifically for ancestors who passed away unnatural or accidental deaths. Tripindi Shraddha is performed to satisfy ancestors who passed away naturally but remain unsatisfied due to skipped annual rituals or bad planetary combinations."
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
          { name: "Tripindi Shraddha in Gaya", item: "/tripindi-shraddha-gaya" },
        ]}
      />
      <TripindiShraddhaPageClient />
    </>
  );
}

function TripindiShraddhaPageClient() {
  return <TripindiShraddhaClient />;
}
