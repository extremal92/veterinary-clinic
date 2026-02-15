"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Section from "@/shared/ui/Section";
import SectionHeader from "@/shared/ui/SectionHeader";

export default function Pricing() {
  const t = useTranslations("pricing");
  const items = t.raw("items") as { name: string; price: string }[];

  return (
    <Section id="pricing" className="bg-slate-50">
      <div className="space-y-10">
        <SectionHeader
          align="center"
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <motion.div
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-6 py-4 text-sm font-semibold text-slate-900">
                  {t("tableService")}
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                  {t("tablePrice")}
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr
                  key={item.name}
                  className="border-b border-slate-100 last:border-b-0"
                >
                  <td className="px-6 py-4 text-sm text-slate-700">{item.name}</td>
                  <td className="px-6 py-4 text-right text-sm font-medium text-slate-900">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </Section>
  );
}
