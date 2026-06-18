import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all standard search engine bots
        userAgent: "*",
        allow: "/",
      },
      {
        // OpenAI / ChatGPT crawler
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        // Google Gemini / AI Overviews crawler
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        // Perplexity AI crawler
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        // Anthropic Claude crawler
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        // Meta AI crawler
        userAgent: "FacebookBot",
        allow: "/",
      },
    ],
    sitemap: "https://gayarituals.com/sitemap.xml",
  };
}
