import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://gayarituals.com";

  // 1. Static Routes
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/places",
    "/ritual-guide",
    "/blog",
    "/why-pind-daan-gaya",
    "/book-now",
    "/pind-daan-in-gaya",
    "/gaya-pind-daan",
    "/online-pind-daan-gaya",
    "/gaya-shraddha",
    "/best-pandit-for-pind-daan-in-gaya",
    "/gaya-pind-daan-packages",
    "/gaya-pind-daan-cost",
    "/narayan-bali-puja-gaya",
    "/tripindi-shraddha-gaya",
    "/pitru-paksha-gaya",
    "/pitra-dosh-puja-gaya",
    "/book-pind-daan-gaya",
    "/leave-a-review",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Dynamic Routes Helper
  const getDynamicRoutes = (dirName: string, pathPrefix: string, priority: number) => {
    const dirPath = path.join(process.cwd(), "content", dirName);
    if (!fs.existsSync(dirPath)) return [];
    
    try {
      const files = fs.readdirSync(dirPath);
      return files
        .filter((file) => file.endsWith(".md"))
        .map((file) => {
          const slug = file.replace(".md", "");
          const stats = fs.statSync(path.join(dirPath, file));
          return {
            url: `${baseUrl}${pathPrefix}/${slug}`,
            lastModified: stats.mtime,
            changeFrequency: "weekly" as const,
            priority,
          };
        });
    } catch (e) {
      console.error(`Error generating sitemap for ${dirName}:`, e);
      return [];
    }
  };

  const serviceRoutes = getDynamicRoutes("services", "/services", 0.7);
  const placeRoutes = getDynamicRoutes("places", "/places", 0.6);
  const guideRoutes = getDynamicRoutes("ritual-guide", "/ritual-guide", 0.7);
  const blogRoutes = getDynamicRoutes("blog", "/blog", 0.6);

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...placeRoutes,
    ...guideRoutes,
    ...blogRoutes,
  ];
}
