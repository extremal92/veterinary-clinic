export type SiteScheduleKey =
  | "Mon"
  | "Tue"
  | "Wed"
  | "Thu"
  | "Fri"
  | "Sat"
  | "Sun";

export type SiteConfig = {
  name: string;
  logo: string;
  ogImage: string;
  phone: string;
  social: {
    fb: string;
    insta: string;
  };
  address: string;
  geo: {
    lat: number;
    lng: number;
  };
  mapEmbedUrl: string;
  rating: number;
  reviews: number;
  schedule: Record<SiteScheduleKey, string>;
};

export const SITE: SiteConfig = {
  name: "Nags-Vet",

  logo: "/images/logo.png",
  ogImage: "/images/og-image.png",

  phone: "+373 688 48 444",

  social: {
    fb: "https://www.facebook.com/nags.veterinary/",
    insta: "https://www.instagram.com/nagsvet/",
  },

  address: "Strada Florilor 8/1, Chișinău, Moldova",

  geo: {
    lat: 47.04888893105609,
    lng: 28.856174169385017,
  },

  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1500!2d28.856147390188934!3d47.04889633996955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDfCsDAyJzU2LjAiTiAyOMKwNTEnMjIuMSJF!5e0!3m2!1sro!2smd!4v1702300000000!5m2!1sro!2smd",

  rating: 4.6,
  reviews: 278,

  schedule: {
    Mon: "09:00 – 19:00",
    Tue: "09:00 – 19:00",
    Wed: "09:00 – 19:00",
    Thu: "09:00 – 19:00",
    Fri: "09:00 – 19:00",
    Sat: "09:00 – 16:00",
    Sun: "closed",
  },
};
