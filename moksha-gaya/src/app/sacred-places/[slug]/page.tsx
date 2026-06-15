import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import React from "react";
import { Metadata } from "next";
import SacredPlaceClient from "./SacredPlaceClient";
import { sacredPlaces } from "@/data/sacredPlaces";
import { BreadcrumbSchema } from "@/components/JsonLd";

interface SacredPlacePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: SacredPlacePageProps): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content", "sacred-places", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return {
      title: "Sacred Place Not Found",
    };
  }

  const rawContent = fs.readFileSync(filePath, "utf8");
  const { metadata } = parseMarkdown(rawContent);
  const placeObj = sacredPlaces.find((p) => p.slug === slug);
  const image = placeObj?.image || metadata.image || "/images/gallery/local-gaya.jpg";

  return {
    title: metadata.title || slug.replace(/-/g, " "),
    description: metadata.excerpt || `Explore the significance and history of ${metadata.title || slug.replace(/-/g, " ")} in the holy dham of Gaya.`,
    alternates: {
      canonical: `/sacred-places/${slug}`,
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
  const dirPath = path.join(process.cwd(), "content", "sacred-places");
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

export default async function SacredPlaceDetailPage({ params }: SacredPlacePageProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content", "sacred-places", `${slug}.md`);

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

  // Get matching sacred place details & recommendations
  const placeObj = sacredPlaces.find((p) => p.slug === slug);
  const image = placeObj?.image || metadata.image || "/images/gallery/local-gaya.jpg";

  const otherItems = sacredPlaces
    .filter((p) => p.slug !== slug)
    .slice(0, 3)
    .map((p) => ({
      title: p.name,
      slug: p.slug,
      image: p.image,
    }));

  const pageTitle = metadata.title || placeObj?.name || slug.replace(/-/g, " ");

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Sacred Places", item: "/sacred-places" },
          { name: pageTitle, item: `/sacred-places/${slug}` },
        ]}
      />
      <SacredPlaceClient
        slug={slug}
        metadata={metadata}
        sections={parsedSections}
        image={image}
        otherItems={otherItems}
      />
    </>
  );
}
