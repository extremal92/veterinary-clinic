"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Section from "@/shared/ui/Section";
import SectionHeader from "@/shared/ui/SectionHeader";

/** Placeholder so no 404 until real photos are in public/images/doctors/ (doctor-1.jpg, doctor-2.jpg, doctor-3.jpg) */
const DOCTOR_IMAGE_PLACEHOLDER = "/images/doctors/placeholder.svg";

const DOCTOR_IMAGES = [
  "/images/doctors/doctor-1.jpg",
  "/images/doctors/doctor-2.jpg",
  "/images/doctors/doctor-3.jpg",
] as const;

/** Set to true when doctor-1.jpg, doctor-2.jpg, doctor-3.jpg are added to public/images/doctors/ */
const USE_REAL_DOCTOR_PHOTOS = false;

function DoctorCard({
  item,
  imageSrc,
  placeholderSrc,
}: {
  item: { name: string; role: string; description: string };
  imageSrc: string;
  placeholderSrc: string;
}) {
  const [imageError, setImageError] = useState(false);
  const usePlaceholder = !USE_REAL_DOCTOR_PHOTOS || imageError;
  const src = usePlaceholder ? placeholderSrc : imageSrc;

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-200">
        <Image
          src={src}
          alt={item.name}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
          unoptimized
          onError={() => setImageError(true)}
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
        <p className="mt-1 text-sm font-medium text-sky-600">{item.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function Doctors() {
  const t = useTranslations("doctors");
  const items = t.raw("items") as {
    name: string;
    role: string;
    description: string;
  }[];

  return (
    <Section id="doctors" className="bg-white">
      <div className="space-y-10">
        <SectionHeader
          align="center"
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {items.map((item, index) => (
            <DoctorCard
              key={item.name}
              item={item}
              imageSrc={DOCTOR_IMAGES[index]}
              placeholderSrc={DOCTOR_IMAGE_PLACEHOLDER}
            />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
