import React from "react";
import { Metadata } from "next";
import WhyPindDaanGayaClient from "./WhyPindDaanGayaClient";

export const metadata: Metadata = {
  title: "Why Perform Pind Daan in Gaya?",
  description: "Explore the scriptural importance of performing ancestral rituals in the holy land of Gaya, blessed by Lord Vishnu.",
  alternates: {
    canonical: "/why-pind-daan-gaya",
  },
};

export default function WhyPindDaanGayaPage() {
  return <WhyPindDaanGayaClient />;
}
