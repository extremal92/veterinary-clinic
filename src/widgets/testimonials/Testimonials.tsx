"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SITE } from "@/config/site";
import Section from "@/shared/ui/Section";
import SectionHeader from "@/shared/ui/SectionHeader";
import Badge from "@/shared/ui/Badge";
import { Star, Facebook, ExternalLink } from "lucide-react";

export default function Testimonials() {
  const t = useTranslations("testimonials");

  const maxRating = 5;
  const cards = t.raw("cards") as {
    name: string;
    role: string;
    text: string;
  }[];

  return (
    <Section id="testimonials" className="bg-white">
      <div className="space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <SectionHeader eyebrow={t("eyebrow")} title={t("title")} />
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="bg-amber-50 text-amber-800 ring-amber-100">
              <span className="flex items-center gap-2">
                <Star
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  aria-hidden="true"
                />
                <span className="text-sm font-semibold">
                  {SITE.rating.toFixed(1)} / {maxRating}
                </span>
              </span>
            </Badge>
            <p className="text-sm text-slate-600">
              {t("summary", {
                rating: SITE.rating.toFixed(1),
                max: maxRating,
                count: SITE.reviews,
              })}
            </p>
          </div>
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {cards.map((card) => (
            <div
              key={card.name}
              className="rounded-2xl relative border-0 bg-white shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-6 pt-6">
                <div className="mb-4 flex">
                  {Array.from({ length: maxRating }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mb-6 text-sm italic leading-relaxed text-gray-600">
                  &quot;{card.text}&quot;
                </p>
                <div className="flex items-center absolute bottom-4 z-10 left-6">
                  <span className="font-bold text-sm text-gray-900">
                    {card.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-8 text-center">
          <a
            href={SITE.social.fb}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-600 bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
          >
            <Facebook className="h-4 w-4" aria-hidden="true" />
            {t("followUsOnFacebook")}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </Section>
  );
}
