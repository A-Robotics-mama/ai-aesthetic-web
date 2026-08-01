import type { NextConfig } from "next";

/**
 * The site is served as static files from GitHub Pages, so the build has to
 * produce plain HTML with no Node runtime behind it.
 *
 * `output: "export"` writes the whole site to `out/`. Anything that needs a
 * server at request time — route handlers, server actions, image optimisation,
 * middleware — will fail the build rather than fail silently in production,
 * which is the behaviour we want: the legal pages Meta reviews must be real
 * files that cannot 500.
 */
const nextConfig: NextConfig = {
  output: "export",

  /**
   * Emits `/privacy-policy/index.html` instead of `/privacy-policy.html`.
   * GitHub Pages serves directory indexes, so this is what makes the clean
   * URLs registered with Meta resolve without a redirect.
   */
  trailingSlash: true,

  /**
   * The optimiser is a server feature and is unavailable in an export. Images
   * are served exactly as they are committed.
   */
  images: { unoptimized: true },
};

export default nextConfig;
