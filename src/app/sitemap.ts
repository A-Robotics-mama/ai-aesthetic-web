import type { MetadataRoute } from "next";
import { CLINIC } from "@/constants/company";

/**
 * Metadata routes are treated as request-time handlers unless told otherwise,
 * which `output: "export"` rejects. This pins the file to build time so it is
 * emitted as a static `sitemap.xml`.
 */
export const dynamic = "force-static";

/**
 * Static export writes this to `sitemap.xml` at build time.
 *
 * Every public route is listed explicitly rather than discovered, so a page
 * that exists but should not be indexed cannot leak in by accident.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/about/", priority: 0.8 },
    { path: "/treatments/", priority: 0.8 },
    { path: "/technologies/", priority: 0.7 },
    { path: "/contact/", priority: 0.7 },
    { path: "/privacy-policy/", priority: 0.4 },
    { path: "/terms/", priority: 0.4 },
    { path: "/data-deletion/", priority: 0.4 },
  ];

  return routes.map((route) => ({
    url: `${CLINIC.origin}${route.path}`,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
