import { useTranslations } from "next-intl";
import { SITE } from "@/config/site";
import Section from "@/shared/ui/Section";
import { Clock, MapPin, Phone, ExternalLink, Facebook } from "lucide-react";

export default function Contact() {
  const t = useTranslations("contact");

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${SITE.geo.lat},${SITE.geo.lng}`,
  )}`;

  const isSundayClosed = SITE.schedule.Sun === "closed";

  return (
    <Section
      id="contact"
      className="bg-gradient-to-r from-blue-600 to-cyan-600 py-20 text-white lg:py-28"
    >
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t("title")}</h2>
        <p className="text-xl text-blue-100">{t("subtitle")}</p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="flex items-start flex-wrap sm:flex-nowrap space-x-4 rounded-2xl bg-white/10 p-6 backdrop-blur">
            <div className="rounded-xl bg-white/20 p-3">
              <MapPin className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="min-w-0 w-full sm:w-auto sm:-flex-1">
              <h3 className="mb-1 text-lg font-semibold mt-2 sm:mt-0">
                {t("addressTitle")}
              </h3>
              <p className="text-blue-100">{SITE.address}</p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center text-white transition-colors hover:text-blue-200"
              >
                {t("directions")}
                <ExternalLink className="ml-1 h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="flex items-start flex-wrap sm:flex-nowrap space-x-4 rounded-2xl bg-white/10 p-6 backdrop-blur">
            <div className="rounded-xl bg-white/20 p-3">
              <Phone className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="min-w-0 w-full sm:w-auto sm:-flex-1">
              <h3 className="mb-1 text-lg font-semibold mt-2 sm:mt-0">
                {t("phoneTitle")}
              </h3>
              <a
                href={`tel:${SITE.phone}`}
                className="text-2xl font-bold transition-colors hover:text-blue-200"
              >
                {SITE.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start flex-wrap sm:flex-nowrap space-x-4 rounded-2xl bg-white/10 p-6 backdrop-blur">
            <div className="rounded-xl bg-white/20 p-3">
              <Clock className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="min-w-0 w-full sm:w-auto sm:-flex-1">
              <h3 className="mb-2 text-lg font-semibold mt-2 sm:mt-0">
                {t("scheduleTitle")}
              </h3>
              <div className="space-y-1 text-blue-100">
                <div className="flex justify-between gap-8">
                  <span>{t("scheduleWeekdays")}</span>
                  <span className="font-medium text-white">
                    {SITE.schedule.Mon}
                  </span>
                </div>
                <div className="flex justify-between gap-8">
                  <span>{t("scheduleSat")}</span>
                  <span className="font-medium text-white">
                    {SITE.schedule.Sat}
                  </span>
                </div>
                <div className="flex justify-between gap-8">
                  <span>{t("scheduleSun")}</span>
                  <span
                    className={
                      isSundayClosed
                        ? "font-medium text-red-300"
                        : "font-medium text-white"
                    }
                  >
                    {isSundayClosed ? t("scheduleClosed") : SITE.schedule.Sun}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-8 py-2.5 text-sm font-semibold text-blue-600 shadow transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {t("call")}
            </a>
            <a
              href={SITE.social.fb}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white bg-transparent px-8 py-2.5 text-sm font-medium text-white shadow transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              <Facebook className="h-5 w-5" aria-hidden="true" />
              {t("facebook")}
            </a>
          </div>
        </div>

        <div className="min-h-[400px] overflow-hidden rounded-2xl shadow-2xl lg:h-full">
          <iframe
            title={t("mapTitle")}
            src={SITE.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[400px] w-full border-0"
          />
        </div>
      </div>
    </Section>
  );
}
