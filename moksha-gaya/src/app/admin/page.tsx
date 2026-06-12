import React from "react";
import { Metadata } from "next";
import AdminClient from "./AdminClient";

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Administrative dashboard for Moksha Dham Gayaji leads and communications management.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <AdminClient />;
}
