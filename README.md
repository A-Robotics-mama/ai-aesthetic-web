# ai-aesthetic.eu

Website of **AI Aesthetic Club**, an aesthetic medicine clinic at Dream Tower in
Limassol, operated by Aesthetic Robotics Limited (HE 424463, Cyprus).

## Why this repository matters beyond the website

Three of these pages are registered in the Meta app dashboard and are read by
reviewers when the app asks for advanced access to Instagram messaging:

| Page | URL |
| --- | --- |
| Privacy Policy | `https://ai-aesthetic.eu/privacy-policy` |
| Terms of Use | `https://ai-aesthetic.eu/terms` |
| User Data Deletion | `https://ai-aesthetic.eu/data-deletion` |

If any of them stops resolving, the app review fails. The deploy workflow
therefore asserts that all three exist in the export and fails the build rather
than publishing a site whose registered URLs return 404.

## Stack

Next.js 16 with the App Router, React 19 and Tailwind v4, built as a **static
export** (`output: "export"`) and served from GitHub Pages. There is no server
behind the site: anything that needs one — route handlers, server actions,
image optimisation — will fail the build instead of failing in production.

Requires Node 20 or newer.

```bash
npm install
npm run dev            # http://localhost:3000
npm run build          # writes the site to ./out
npx tsc --noEmit
npm run lint
```

## Where the facts live

`src/constants/company.ts` is the single source of truth for the legal entity,
the two addresses, the trade mark, contact mailboxes, processors and retention
periods. Every legal page and the footer read from it.

Meta compares the entity declared in the app against the one shown on the site,
so a second copy of an address is a second chance to contradict the first. Edit
the constant, never the page.

The registered office (Amathoundos 98) and the clinic (Dream Tower,
Amathoundos 62) are different places and are never used interchangeably.

## Deployment

Pushing to `main` builds and publishes to GitHub Pages via
`.github/workflows/deploy.yml`. The custom domain is pinned by `public/CNAME`,
which the export copies to the site root.
