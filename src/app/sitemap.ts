import type { MetadataRoute } from "next";
import { books } from "@/data/books";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.whitebreadpublishersltd.com.ng";

  // Get unique books to avoid duplicates
  const uniqueBooks = Array.from(
    new Map(books.map((book) => [book.id, book])).values()
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/books`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    // Add anchored sections from homepage for better crawlability
    {
      url: `${baseUrl}/#books`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.80,
    },
    {
      url: `${baseUrl}/#why-whitebread`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.80,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.80,
    },
  ];
}