import React from "react";
import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Moksha Dham Gayaji. Reach out via phone, email, or visit our office in Gaya for ritual inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
