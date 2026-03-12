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

const GEO = {
  lat: 47.046338109594714,
  lng: 28.848144013645125,
} as const;

export const SITE: SiteConfig = {
  name: "Clinică și Farmacie Veterinară - Nicoleta-Lux",

  logo: "/images/nicoleta-lux-vet-logo.jpg",
  ogImage: "/images/nicoleta-lux-vet-og-image.png",

  phone: "+373022922805",

  social: {
    fb: "https://www.facebook.com/nicoletalux",
    insta: "https://www.instagram.com/nicoletalux.md/",
  },

  address: "Strada Calea Orheiului 59, Chisinau, Moldova",
  geo: GEO,

  mapEmbedUrl: `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1500!2d${GEO.lng}!3d${GEO.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDfCsDAyJzU2LjAiTiAyOMKwNTEnMjIuMSJF!5e0!3m2!1sro!2smd!4v1702300000000!5m2!1sro!2smd`,

  rating: 4.5,
  reviews: 509,

  schedule: {
    Mon: "08:00 – 17:00",
    Tue: "08:00 – 17:00",
    Wed: "08:00 – 17:00",
    Thu: "08:00 – 17:00",
    Fri: "08:00 – 17:00",
    Sat: "08:00 – 13:00",
    Sun: "closed",
  },
};
