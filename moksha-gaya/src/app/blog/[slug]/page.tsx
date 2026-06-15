import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import React from "react";
import { Metadata } from "next";
import BlogDetailClient from "./BlogDetailClient";
import { BreadcrumbSchema } from "@/components/JsonLd";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content", "blog", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return {
      title: "Blog Post Not Found",
    };
  }

  const rawContent = fs.readFileSync(filePath, "utf8");
  const { metadata } = parseMarkdown(rawContent);

  return {
    title: metadata.title || slug.replace(/-/g, " "),
    description: metadata.excerpt || `Read our guide on ${metadata.title || slug.replace(/-/g, " ")} on Gaya Rituals.`,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: metadata.title || slug.replace(/-/g, " "),
      description: metadata.excerpt,
      images: [
        {
          url: metadata.image || "/images/gallery/ritual-ai2.png",
        }
      ]
    }
  };
}

export async function generateStaticParams() {
  const dirPath = path.join(process.cwd(), "content", "blog");
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

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content", "blog", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf8");
  const { metadata, content } = parseMarkdown(rawContent);

  // Clean content and split into sections
  const cleanContent = content.replace(/---/g, ""); // Remove dividers
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

  // Read all other blog posts to recommend 3 related posts
  const blogDirPath = path.join(process.cwd(), "content", "blog");
  const otherItems: Array<{ title: string; slug: string; image: string; category: string }> = [];
  
  if (fs.existsSync(blogDirPath)) {
    const files = fs.readdirSync(blogDirPath);
    files.forEach((file) => {
      const fileSlug = file.replace(".md", "");
      if (file.endsWith(".md") && fileSlug !== slug && otherItems.length < 3) {
        const otherRaw = fs.readFileSync(path.join(blogDirPath, file), "utf8");
        const parsed = parseMarkdown(otherRaw);
        otherItems.push({
          title: parsed.metadata.title || fileSlug,
          slug: fileSlug,
          image: parsed.metadata.image || "/images/gallery/ritual-ai2.png",
          category: parsed.metadata.category || "General"
        });
      }
    });
  }

  const pageTitle = metadata.title || slug.replace(/-/g, " ");

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
          { name: pageTitle, item: `/blog/${slug}` },
        ]}
      />
      <BlogDetailClient
        slug={slug}
        metadata={metadata}
        sections={parsedSections}
        otherItems={otherItems}
      />
    </>
  );
}
