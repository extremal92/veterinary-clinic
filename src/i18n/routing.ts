import {defineRouting} from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ro", "ru", "en", "ua"],
  defaultLocale: "ro",
  localePrefix: "as-needed",
});

export type AppLocale = (typeof routing.locales)[number];

