import React from "react";
import { Metadata } from "next";
import RitualGuideClient from "./RitualGuideClient";

export const metadata: Metadata = {
  title: "Vedic Ritual Guides & Procedures",
  description: "Comprehensive step-by-step guides on Pind Daan, Tarpan, Narayan Bali, and Pitra Dosh rituals.",
  alternates: {
    canonical: "/ritual-guide",
  },
};

export default function RitualGuidePage() {
  return <RitualGuideClient />;
}
