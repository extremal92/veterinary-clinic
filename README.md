# Nags-Vet — Veterinary Clinic

Next.js site for the veterinary clinic (i18n: ro, ru, en, ua).

## Setup

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Environment**

   Copy the example env and set the public site URL for production:

   ```bash
   cp .env.example .env.local
   ```

   In `.env.local`:

   - `NEXT_PUBLIC_SITE_URL` — full URL of the site (e.g. `https://nagsvet.md`). Used for sitemap, robots.txt, Open Graph, and canonical URLs. Default in dev: `http://localhost:3000`.

3. **Run dev**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `pnpm dev` — development (Next.js + Turbopack)
- `pnpm build` — production build
- `pnpm start` — start production server
- `pnpm lint` — ESLint

## Project

- **Stack:** Next.js 16, React 19, next-intl, Tailwind CSS, Framer Motion
- **SEO:** `src/app/robots.ts` → `/robots.txt`, `src/app/sitemap.ts` → `/sitemap.xml` (both use `NEXT_PUBLIC_SITE_URL`)
