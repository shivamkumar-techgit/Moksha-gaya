import React from "react";
import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Vedic Ritual Services",
  description: "Browse our authentic Vedic ritual packages for Pind Daan, Shraddh Karma, Tarpan, Tripindi Shraddha, and Narayan Bali in Gaya.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
