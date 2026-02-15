import type {MetadataRoute} from "next";
import {routing} from "@/i18n/routing";

function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

function buildAlternates(baseUrl: string) {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    const path = locale === routing.defaultLocale ? "/" : `/${locale}`;
    languages[locale] = `${baseUrl}${path}`;
  }
  return {languages};
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const lastModified = new Date();
  const alternates = buildAlternates(baseUrl);

  return routing.locales.map((locale) => {
    const path = locale === routing.defaultLocale ? "/" : `/${locale}`;

    return {
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: locale === routing.defaultLocale ? 1 : 0.9,
      alternates,
    };
  });
}

