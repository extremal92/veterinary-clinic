import Image from "next/image";
import { useTranslations } from "next-intl";
import { Phone } from "lucide-react";
import { LINKS, type HeaderLink } from "@/widgets/header/links";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/config/site";
import Container from "@/shared/ui/Container";
import Button from "@/shared/ui/Button";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("header");

  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white backdrop-blur-md z-[101]">
      <Container className="flex h-20 items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl">
            <Image
              src={SITE.logo}
              alt={t("logoAlt")}
              fill
              sizes="40px"
              className="object-contain"
            />
          </div>
          {/* <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-slate-900">
              {SITE.name}
            </span>
            <span className="text-xs text-slate-500">
              from translations to avoid inline user text
            </span>
          </div> */}
        </div>

        <nav
          className="hidden flex-1 justify-center gap-8 text-sm font-medium text-slate-600 lg:flex"
          aria-label={t("navigationAria")}
        >
          {LINKS.map((link: HeaderLink) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-sky-700 font-medium text-base"
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Button
            href={`tel:${SITE.phone}`}
            className="hidden sm:inline-flex justify-center items-center gap-2 w-fit lg:min-w-[150px]"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden md:inline">{t("callNow")}</span>
          </Button>
        </div>
      </Container>
    </header>
  );
}
