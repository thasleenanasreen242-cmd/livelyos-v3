import type { MetadataRoute } from "next";

export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://planverseos.com",
      priority: 1,
    },
  ];
}