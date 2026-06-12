import React from "react";
import { Metadata } from "next";
import SacredPlacesClient from "./SacredPlacesClient";

export const metadata: Metadata = {
  title: "Sacred Places (Vedis) in Gaya",
  description: "Learn about the prominent holy places and shrines in Gaya, including Vishnupad Temple, Falgu River, and Akshay Vat.",
  alternates: {
    canonical: "/sacred-places",
  },
};

export default function SacredPlacesPage() {
  return <SacredPlacesClient />;
}
