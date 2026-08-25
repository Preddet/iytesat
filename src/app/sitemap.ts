import type { MetadataRoute } from "next";
import { events } from "@/data/events";

const baseUrl = "https://iytesat.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/hakkimizda`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/etkinlikler`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/sss`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/iletisim`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const eventRoutes: MetadataRoute.Sitemap = events.map((event) => ({
    url: `${baseUrl}/etkinlikler/${event.slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...eventRoutes];
}
