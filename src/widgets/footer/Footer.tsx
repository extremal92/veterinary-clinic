import Image from "next/image";
import { useTranslations } from "next-intl";
import { MapPin, Phone, Facebook, Instagram } from "lucide-react";
import { SITE } from "@/config/site";
import Container from "@/shared/ui/Container";
import { LINKS } from "@/widgets/header/links";

export default function Footer() {
  const t = useTranslations("footer");
  const tHeader = useTranslations("header");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-4 lg:gap-12 lg:py-16">
          <div className="space-y-4">
            <div className="relative h-14 w-14 overflow-hidden">
              <Image
                src={SITE.logo}
                alt={SITE.name}
                fill
                sizes="56px"
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-lg font-semibold text-white">{SITE.name}</p>
              <p className="mt-1 text-sm text-gray-400">{t("tagline")}</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              {t("navTitle")}
            </h3>
            <nav className="flex flex-col gap-3" aria-label={t("navTitle")}>
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {tHeader(link.labelKey)}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              {t("contactTitle")}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0"
                  aria-hidden="true"
                />
                <span>{SITE.address}</span>
              </div>
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-3 text-sm text-blue-400 transition-colors hover:text-blue-300"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                {SITE.phone}
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              {t("socialTitle")}
            </h3>
            <div className="flex gap-3">
              <a
                href={SITE.social.fb}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-800 p-2.5 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={SITE.social.insta}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-800 p-2.5 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-gray-800 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            {t("copyright", {
              year,
              name: SITE.name,
            })}
          </p>
          <a
            href="https://www.rrdev.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 transition-colors hover:text-gray-400"
          >
            Powered by <span className="font-bold">rrdev.site</span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
