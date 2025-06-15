const urls: MetadataRoute.Sitemap = [
  {
    url: "/",
    changeFrequency: "weekly",
    priority: 1.0,
    lastModified: new Date().toISOString(),
    images: [APP.url + "/images/movers-in-dubai.jpg"],
  },
  {
    url: "/about-us",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: new Date().toISOString(),
    images: [APP.url + "/images/movers-in-dubai-team.jpg"],
  },
  {
    url: "/book-movers-online",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: new Date().toISOString(),
    images: [APP.url + "/images/movers-team-of-abu-muhammad-mover.png"],
  },
  {
    url: "/home-moving-dubai",
    changeFrequency: "monthly",
    priority: 0.7,
    lastModified: new Date().toISOString(),
    images: [
      APP.url + "/images/movers-packing-household-furniture-in-dubai.png",
    ],
  },
  {
    url: "/local-movers-in-dubai",
    changeFrequency: "monthly",
    priority: 0.7,
    lastModified: new Date().toISOString(),
    images: [APP.url + "/local/villa-moving-service-dubai-hills.jpg"],
  },
  {
    url: "/single-item-movers-dubai",
    changeFrequency: "monthly",
    priority: 0.7,
    lastModified: new Date().toISOString(),
    images: [APP.url + "/single/same-day-single-item-move.jpg"],
  },
];

import { APP } from "@/lib/constants";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return urls.map((url) => ({
    url: `${APP.url}${url.url}`,
    priority: url.priority,
    changeFrequency: url.changeFrequency,
    lastModified: url.lastModified,
    images: url.images,
  }));
}
