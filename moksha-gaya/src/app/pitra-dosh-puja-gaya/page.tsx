import React from "react";
import { Metadata } from "next";
import PitraDoshPujaClient from "./PitraDoshPujaClient";
import { LocalBusinessSchema, OrganizationSchema, BreadcrumbSchema, FAQSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Pitra Dosh Puja in Gaya | Remedial Puja for Ancestral Peace",
  description: "Perform authentic Pitra Dosh Nivaran Puja in Gaya Ji. Find experienced Vedic priests to resolve lineage hurdles at Vishnupad Temple and Falgu River.",
  keywords: ["Pitra Dosh Puja in Gaya", "Pitra Dosh Nivaran Gaya", "Ancestral curse puja Gaya", "remedial puja Gaya", "Gaya Pitru Dosha"],
  alternates: {
    canonical: "/pitra-dosh-puja-gaya",
  },
};

export default function PitraDoshPujaPage() {
  const faqs = [
    {
      q: "What is Pitru Dosha and how does it manifest?",
      a: "Pitru Dosha is a karmic imbalance in a person's birth chart resulting from the unsatisfied souls of departed ancestors. It often manifests as obstacles in career growth, persistent health issues, delayed marriage, financial distress, or frequent family conflicts."
    },
    {
      q: "Why is Gaya the ultimate place for Pitra Dosh Nivaran Puja?",
      a: "Gaya is scripturally recognized as the body of Gayasur, blessed by Lord Vishnu to grant salvation to any soul for whom rituals are performed here. Conducting Pitru Dosh Puja at the footprints of Lord Vishnu (Vishnupad) or Falgu River provides instant liberation to ancestor souls, removing the Dosha."
    },
    {
      q: "What is the best time to perform Pitra Dosh Puja in Gaya?",
      a: "The annual Pitru Paksha period (September-October) is the most auspicious time. Apart from that, performing the puja on any Amavasya (new moon day), solar/lunar eclipse days, or during the transit of Sun into Sagittarius or Pisces is highly beneficial."
    },
    {
      q: "How long does the Pitra Dosh Puja take in Gaya?",
      a: "The puja usually takes between 3 to 4 hours. It includes purificatory baths, Sankalp, specific fire offerings (Havan), Pind Arpan on the footprints of Lord Vishnu, and concluding Brahmin Bhojan."
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
          { name: "Pitra Dosh Puja in Gaya", item: "/pitra-dosh-puja-gaya" },
        ]}
      />
      <PitraDoshPujaClient />
    </>
  );
}
