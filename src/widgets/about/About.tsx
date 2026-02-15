"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Section from "@/shared/ui/Section";
import { Heart, Shield, Award } from "lucide-react";

export default function About() {
  const t = useTranslations("about");

  return (
    <Section
      id="about"
      className="bg-gradient-to-br from-blue-50 via-cyan-50 to-white py-20 lg:py-28"
    >
      <motion.div
        className="grid items-center gap-12 lg:grid-cols-2"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-6">
          <span
            className="mb-4 inline-flex items-center rounded-md border-0 bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700 shadow"
            aria-hidden
          >
            <Heart className="mr-1 h-3 w-3" aria-hidden="true" />
            {t("eyebrow")}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {t("title")}
          </h2>
          <p className="text-xl font-medium text-blue-600">{t("subtitle")}</p>
          <p className="text-lg leading-relaxed text-gray-600">{t("body")}</p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <Shield className="h-6 w-6 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {t("mission.title")}
              </h3>
              <p className="text-sm text-gray-600">
                {t("mission.description")}
              </p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100">
                <Award className="h-6 w-6 text-cyan-600" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {t("values.title")}
              </h3>
              <p className="text-sm text-gray-600">{t("values.description")}</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <div className="relative h-72 w-full sm:h-80 lg:h-[400px]">
              <Image
                src="/images/about.jpg"
                alt={t("imageAlt")}
                fill
                sizes="(min-width: 1024px) 480px, (min-width: 640px) 70vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 md:-bottom-6 md:-right-6 md:p-6 p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xl">
              <div className="text-xl md:text-3xl font-bold">278+</div>
              <div className="text-blue-100">{t("clientsBadgeLabel")}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
