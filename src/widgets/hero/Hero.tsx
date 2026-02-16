"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SITE } from "@/config/site";
import Container from "@/shared/ui/Container";
import Button from "@/shared/ui/Button";
import Badge from "@/shared/ui/Badge";
import Card from "@/shared/ui/Card";
import { Clock, PawPrint, Phone, Star } from "lucide-react";

const fadeSlide = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const container = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0 },
  },
};

export default function Hero() {
  const tHero = useTranslations("hero");
  const tContact = useTranslations("contact");

  const maxRating = 5;

  return (
    <section
      id="home"
      className="relative flex items-center bg-gradient-to-br from-blue-50 via-cyan-50 to-white "
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 z-[99]">
          <PawPrint className="absolute top-10 right-20 h-32 w-32 text-blue-400 rotate-12" />
          <PawPrint className="absolute top-48 right-60 h-20 w-20 text-cyan-400 -rotate-12" />
          <PawPrint className="absolute bottom-40 right-32 h-24 w-24 text-blue-300 rotate-45" />
        </div>
      </div>

      <Container className="relative z-10 py-12 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <motion.div
            className="space-y-8"
            variants={container}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="flex flex-wrap items-center gap-3"
              variants={fadeSlide}
            >
              <Badge className="bg-sky-100 text-sky-800 ring-sky-200">
                <span className="inline-flex items-center gap-1.5">
                  <PawPrint className="h-4 w-4" />
                  {tHero("badgeLabel")}
                </span>
              </Badge>
              <span className="text-sm font-medium text-sky-700">
                {tHero("clinicLabel", { name: SITE.name })}
              </span>
            </motion.div>

            <motion.div className="space-y-4" variants={fadeSlide}>
              <h1
                className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
                // @ts-expect-error "anywhere" is valid CSS but not in React's WordWrap type
                style={{ wordWrap: "anywhere" }}
              >
                {tHero("title")}
              </h1>
              <p className="max-w-xl text-base text-slate-600 sm:text-lg">
                {tHero("subtitle")}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              variants={fadeSlide}
            >
              <Badge>
                <span className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-slate-900">
                    {SITE.rating.toFixed(1)}
                  </span>
                  <span className="text-xs text-slate-600">
                    {tHero("ratingLabel", { max: maxRating })}
                  </span>
                </span>
              </Badge>
              <span className="text-sm text-slate-500">
                {tHero("ratingBasedOn", { count: SITE.reviews })}
              </span>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-3"
              variants={fadeSlide}
            >
              <Button href="#contact">
                <PawPrint className="mr-2 h-4 w-4" />
                {tHero("primaryCta")}
              </Button>
              <Button variant="secondary" href={`tel:${SITE.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                {tHero("secondaryCta")}
              </Button>
            </motion.div>

            <motion.div variants={fadeSlide}>
              <Card className="flex items-center gap-4 bg-white w-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
                    {tHero("workingHoursTitle")}
                  </p>
                  <div className="mt-1 space-y-0.5 text-xs text-slate-600">
                    <p>
                      <span className="font-medium">
                        {tContact("dayMon")}–{tContact("dayFri")}:
                      </span>{" "}
                      {SITE.schedule.Mon}
                    </p>
                    <p>
                      <span className="font-medium">{tContact("daySat")}:</span>{" "}
                      {SITE.schedule.Sat}
                    </p>
                    <p>
                      <span className="font-medium">{tContact("daySun")}:</span>{" "}
                      {SITE.schedule.Sun === "closed"
                        ? tHero("workingHoursClosed")
                        : SITE.schedule.Sun}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          <div className="relative">
            <motion.div
              className="max-w-full pointer-events-none absolute z-10 bottom-0 left-0 lg:-bottom-6 lg:-left-6 rounded-2xl border border-blue-100 bg-white p-2 lg:p-4 shadow-xl"
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-yellow-100 p-3">
                  <Star
                    className="h-6 w-6 fill-yellow-500 text-yellow-500"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {SITE.rating.toFixed(1)}
                  </div>
                  <div className="text-sm text-gray-500">
                    {tHero("ratingFacebook", { count: SITE.reviews })}
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="max-w-full pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-sky-200/70 via-sky-100/40 to-blue-200/70 blur-2xl" />
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Card className="relative overflow-hidden rounded-[2rem] border-sky-100 bg-sky-50/80 !p-0 shadow-lg">
                <div className="relative h-72 w-full sm:h-80 lg:h-96">
                  <Image
                    src="/images/hero.jpg"
                    alt={tHero("imageAlt")}
                    fill
                    priority
                    sizes="(min-width: 1024px) 480px, (min-width: 640px) 70vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
