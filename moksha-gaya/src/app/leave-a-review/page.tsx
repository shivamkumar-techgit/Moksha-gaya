import React from "react";
import { Metadata } from "next";
import LeaveAReviewClient from "./LeaveAReviewClient";
import { LocalBusinessSchema, OrganizationSchema, BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Leave a Review | Gaya Rituals",
  description: "Share your experience performing Pind Daan, Shraddha, or other Vedic rituals in Gaya. Help other families find authentic Gayawal Pandit guidance.",
  keywords: ["Gaya Rituals reviews", "leave a review Gaya Rituals", "Gaya Pandit reviews", "Pind Daan feedback"],
  alternates: {
    canonical: "/leave-a-review",
  },
};

export default function LeaveAReviewPage() {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Leave a Review", item: "/leave-a-review" },
        ]}
      />
      <LeaveAReviewClient />
    </>
  );
}
