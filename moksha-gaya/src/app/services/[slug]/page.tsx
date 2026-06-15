import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import React from "react";
import { Metadata } from "next";
import ServiceDetailClient from "./ServiceDetailClient";
import { services } from "@/data/services";
import { BreadcrumbSchema } from "@/components/JsonLd";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content", "services", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return {
      title: "Service Not Found",
    };
  }

  const rawContent = fs.readFileSync(filePath, "utf8");
  const { metadata } = parseMarkdown(rawContent);
  const serviceObj = services.find((s) => s.slug === slug);
  const image = serviceObj?.image || metadata.image || "/images/gallery/ritual-ai1.png";

  return {
    title: metadata.title || slug.replace(/-/g, " "),
    description: metadata.excerpt || `Authentic Vedic ${metadata.title || slug.replace(/-/g, " ")} ritual services in Gaya coordinated by Gaya Rituals.`,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: metadata.title || slug.replace(/-/g, " "),
      description: metadata.excerpt,
      images: [
        {
          url: image,
        }
      ]
    }
  };
}

export async function generateStaticParams() {
  const dirPath = path.join(process.cwd(), "content", "services");
  if (!fs.existsSync(dirPath)) return [];
  const files = fs.readdirSync(dirPath);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => ({
      slug: f.replace(".md", ""),
    }));
}

function parseMarkdown(fileContent: string) {
  const match = fileContent.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { metadata: {} as Record<string, string>, content: fileContent };

  const yamlBlock = match[1];
  const content = match[2];

  const metadata: Record<string, string> = {};
  yamlBlock.split("\n").forEach((line) => {
    const parts = line.split(":");
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const value = parts.slice(1).join(":").trim();
      metadata[key] = value.replace(/^['"]|['"]$/g, ""); // strip quotes
    }
  });

  return { metadata, content };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content", "services", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf8");
  const { metadata, content } = parseMarkdown(rawContent);

  // Clean content and split into sections
  const cleanContent = content.replace(/---/g, ""); // Remove markdown dividers
  const rawSections = cleanContent.split(/\n## /);
  
  const parsedSections = rawSections
    .map((sec) => {
      const lines = sec.split("\n").map(l => l.trim()).filter(Boolean);
      if (lines.length === 0) return null;
      
      const title = lines[0].replace(/^##\s+/, "");
      const bodyLines = lines.slice(1);
      
      return { title, bodyLines };
    })
    .filter((x): x is { title: string; bodyLines: string[] } => x !== null);

  // Get matching service image & other recommendations
  const serviceObj = services.find((s) => s.slug === slug);
  const image = serviceObj?.image || metadata.image || "/images/gallery/ritual-ai1.png";

  const otherItems = services
    .filter((s) => s.slug !== slug)
    .slice(0, 3)
    .map((s) => ({
      title: s.title,
      slug: s.slug,
      image: s.image,
    }));

  const pageTitle = metadata.title || serviceObj?.title || slug.replace(/-/g, " ");

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/services" },
          { name: pageTitle, item: `/services/${slug}` },
        ]}
      />
      <ServiceDetailClient
        slug={slug}
        metadata={metadata}
        sections={parsedSections}
        image={image}
        otherItems={otherItems}
      />
    </>
  );
}
