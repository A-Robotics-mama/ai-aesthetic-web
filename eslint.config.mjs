import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      /**
       * The site is a static export with the image optimiser switched off
       * (`images: { unoptimized: true }` in next.config.ts), so `next/image`
       * would emit the same `<img>` with more machinery around it. The club's
       * photographs are already cropped and re-encoded to the sizes the page
       * uses, so the warning has nothing left to warn about here.
       */
      "@next/next/no-img-element": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
