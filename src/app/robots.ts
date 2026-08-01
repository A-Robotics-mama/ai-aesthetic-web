import type { MetadataRoute } from "next";
import { CLINIC } from "@/constants/company";

/** Emitted at build time as a static `robots.txt`. See sitemap.ts. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${CLINIC.origin}/sitemap.xml`,
  };
}
