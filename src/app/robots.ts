import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
        crawlDelay: 1,
      },
      {
        userAgent: "AdsBot-Google",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 0.5,
      },
    ],
    sitemap: [
      "https://www.whitebreadpublishersltd.com.ng/sitemap.xml",
    ],
    host: "https://www.whitebreadpublishersltd.com.ng",
  };
}
