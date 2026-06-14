import React from "react";
import { Metadata } from "next";
import BookNowClient from "./BookNowClient";

export const metadata: Metadata = {
  title: "Book Rites & Rituals",
  description: "Book your Pind Daan, Shraddh Karma, Tarpan, or Narayan Bali rituals online with Gaya Rituals.",
  alternates: {
    canonical: "/book-now",
  },
};

export default function BookNowPage() {
  return <BookNowClient />;
}
