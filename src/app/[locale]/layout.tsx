import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import { SITE } from "@/config/site";
import { routing } from "@/i18n/routing";
import Header from "@/widgets/header/Header";
import Footer from "@/widgets/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: LayoutProps): Promise<Metadata> {
  const { locale } = await props.params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "seo" });
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const path = locale === routing.defaultLocale ? "/" : `/${locale}`;
  const url = new URL(path, baseUrl);

  const alternates: NonNullable<Metadata["alternates"]> = {
    canonical: url.toString(),
    languages: Object.fromEntries(
      routing.locales.map((loc) => {
        const locPath = loc === routing.defaultLocale ? "/" : `/${loc}`;
        return [loc, new URL(locPath, baseUrl).toString()];
      }),
    ),
  };

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL(baseUrl),
    alternates,
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      url: url.toString(),
      siteName: SITE.name,
      images: [
        {
          url: SITE.ogImage,
          alt: t("title"),
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 text-slate-900 antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
