"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Section from "@/shared/ui/Section";
import SectionHeader from "@/shared/ui/SectionHeader";
import {
  Smile,
  Scissors,
  Eye,
  Heart,
  Sparkles,
  Bug,
  Cpu,
  FileText,
  TestTube,
  Building2,
  type LucideIcon,
} from "lucide-react";

const SERVICE_CONFIG: {
  key: string;
  Icon: LucideIcon;
  iconClassName: string;
}[] = [
  { key: "dentistry", Icon: Smile, iconClassName: "bg-blue-100 text-blue-600" },
  {
    key: "surgery",
    Icon: Scissors,
    iconClassName: "bg-rose-100 text-rose-600",
  },
  {
    key: "endoscopy",
    Icon: Eye,
    iconClassName: "bg-violet-100 text-violet-600",
  },
  { key: "therapy", Icon: Heart, iconClassName: "bg-pink-100 text-pink-600" },
  {
    key: "dermatology",
    Icon: Sparkles,
    iconClassName: "bg-amber-100 text-amber-600",
  },
  {
    key: "parasitology",
    Icon: Bug,
    iconClassName: "bg-green-100 text-green-600",
  },
  {
    key: "microchipping",
    Icon: Cpu,
    iconClassName: "bg-cyan-100 text-cyan-600",
  },
  {
    key: "vetPassports",
    Icon: FileText,
    iconClassName: "bg-indigo-100 text-indigo-600",
  },
  {
    key: "laboratory",
    Icon: TestTube,
    iconClassName: "bg-purple-100 text-purple-600",
  },
  {
    key: "inpatient",
    Icon: Building2,
    iconClassName: "bg-red-100 text-red-600",
  },
];

export default function Services() {
  const t = useTranslations("services");

  return (
    <Section id="services" className="bg-white">
      <div className="space-y-10">
        <SectionHeader
          align="center"
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:gap-4 lg:grid-cols-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {SERVICE_CONFIG.map(({ key, Icon, iconClassName }) => (
            <div
              key={key}
              className="group cursor-pointer overflow-hidden rounded-2xl border-0 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex flex-col space-y-1.5 p-6 pb-4 lg:p-4 lg:pb-2">
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 ${iconClassName}`}
                >
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                  {t(`items.${key}.title`)}
                </h3>
              </div>
              <div className="p-6 pt-0 lg:p-4">
                <p className="text-sm leading-relaxed text-slate-600">
                  {t(`items.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/services-1.png"
              alt={t("image1Alt")}
              width={800}
              height={256}
              className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
              style={{ height: "auto" }}
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/services-2.png"
              alt={t("image2Alt")}
              width={800}
              height={256}
              className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
              style={{ height: "auto" }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
