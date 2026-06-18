import fs from "fs";
import path from "path";
import React from "react";
import { Metadata } from "next";
import BlogClient from "./BlogClient";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Ancestral Rituals Blog, Astrological & Vedic Guides | Gaya Rituals",
  description: "Read deep-dive scriptural analyses, astrological guides for Pitru Dosha, updates on Pitru Paksha dates, and tips for pilgrimage travel.",
  keywords: ["ancestral rituals blog", "Gaya pilgrimage blog", "Pitru Dosha tips", "Vedic scriptures guides"],
  alternates: {
    canonical: "/blog",
  },
};

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

export default async function BlogPage() {
  const blogDirPath = path.join(process.cwd(), "content", "blog");
  const posts: Array<{
    title: string;
    excerpt: string;
    date: string;
    category: string;
    readTime: string;
    image: string;
    slug: string;
  }> = [];

  if (fs.existsSync(blogDirPath)) {
    const files = fs.readdirSync(blogDirPath);
    files.forEach((file) => {
      if (file.endsWith(".md")) {
        const slug = file.replace(".md", "");
        const rawContent = fs.readFileSync(path.join(blogDirPath, file), "utf8");
        const parsed = parseMarkdown(rawContent);
        posts.push({
          title: parsed.metadata.title || slug,
          excerpt: parsed.metadata.excerpt || "",
          date: parsed.metadata.date || "",
          category: parsed.metadata.category || "Guides",
          readTime: parsed.metadata.readTime || "5 min read",
          image: parsed.metadata.image || "/images/gallery/ritual-ai2.png",
          slug: slug
        });
      }
    });
  }

  // Sort posts by date (newest first) if needed
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
        ]}
      />
      <BlogClient posts={posts} />
    </>
  );
}
