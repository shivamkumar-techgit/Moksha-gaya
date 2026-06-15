import { notFound } from "next/navigation";
import React from "react";
import { Metadata } from "next";
import { ritualGuides } from "@/data/ritualGuides";
import RitualGuideDetailClient from "./RitualGuideDetailClient";
import { BreadcrumbSchema } from "@/components/JsonLd";

interface RitualGuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: RitualGuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const currentGuide = ritualGuides.find((g) => g.slug === slug);

  if (!currentGuide) {
    return {
      title: "Ritual Guide Not Found",
    };
  }

  return {
    title: currentGuide.title,
    description: currentGuide.shortDesc || `${currentGuide.title} - Step by step ritual guide and details for performing it in the holy city of Gaya.`,
    alternates: {
      canonical: `/ritual-guide/${slug}`,
    },
    openGraph: {
      title: currentGuide.title,
      description: currentGuide.shortDesc || `${currentGuide.title} - Step by step ritual guide and details for performing it in the holy city of Gaya.`,
    }
  };
}

export async function generateStaticParams() {
  return ritualGuides.map((guide) => ({
    slug: guide.slug,
  }));
}

export default async function RitualGuideDetailPage({ params }: RitualGuidePageProps) {
  const { slug } = await params;
  const currentGuide = ritualGuides.find((g) => g.slug === slug);

  if (!currentGuide) {
    notFound();
  }

  const pageTitle = currentGuide.title;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Ritual Guide", item: "/ritual-guide" },
          { name: pageTitle, item: `/ritual-guide/${slug}` },
        ]}
      />
      <RitualGuideDetailClient slug={slug} />
    </>
  );
}
