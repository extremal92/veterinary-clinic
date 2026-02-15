"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { usePathname, Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import type { AppLocale } from "@/i18n/routing";
import { Globe } from "lucide-react";

const LOCALES: AppLocale[] = ["ro", "ru", "en", "ua"];

export default function LanguageSwitcher() {
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const t = useTranslations("languages");
  const headerT = useTranslations("header");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    function handleClick(event: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [open]);

  const currentLabel = t(locale);

  return (
    <div ref={containerRef} className="relative z-[200]">
      <button
        type="button"
        aria-label={headerT("languageSwitcherAria")}
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/60 bg-white/20 px-3 py-1.5 text-xs font-medium text-slate-900 shadow-sm backdrop-blur-md hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
      >
        <Globe className="h-5 w-5 text-sky-600/90" />
        {/* <span className="h-5 w-5 rounded-full bg-sky-600/90" /> */}
        <span>{currentLabel}</span>
        <span className="text-[10px] text-slate-600">▾</span>
      </button>

      {open ? (
        <div className="absolute right-0 z-[101] mt-2 w-40 overflow-hidden rounded-2xl border border-white/20 bg-slate-900/70 text-xs text-slate-50 shadow-xl backdrop-blur-xl">
          {LOCALES.map((loc) => {
            const isActive = loc === locale;

            return (
              <Link
                key={loc}
                href={pathname}
                locale={loc}
                className={`flex items-center justify-between px-3 py-2 transition-colors ${
                  isActive ? "bg-sky-500/40" : "hover:bg-white/10"
                }`}
                onClick={() => setOpen(false)}
              >
                <span>{t(loc)}</span>
                {isActive ? <span aria-hidden="true">•</span> : null}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
