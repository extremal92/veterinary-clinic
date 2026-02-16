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
  lat: 47.05124024117077,
  lng: 28.867994364985194,
} as const;

export const SITE: SiteConfig = {
  name: "Anvet",

  logo: "/images/logo1.png",
  ogImage: "/images/og-image1.png",

  phone: "+373 69 529 954",

  social: {
    fb: "https://www.facebook.com/AnVetClinic/",
    insta:
      "https://www.instagram.com/explore/locations/111844597214751/anvet-clinica-veterinara/",
  },

  address: "Strada Miron Costin 15/1, Chișinău, Moldova",
  geo: GEO,

  mapEmbedUrl: `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1500!2d${GEO.lng}!3d${GEO.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDfCsDAyJzU2LjAiTiAyOMKwNTEnMjIuMSJF!5e0!3m2!1sro!2smd!4v1702300000000!5m2!1sro!2smd`,

  rating: 4.7,
  reviews: 98,

  schedule: {
    Mon: "08:00 – 17:00",
    Tue: "08:00 – 17:00",
    Wed: "08:00 – 17:00",
    Thu: "08:00 – 17:00",
    Fri: "08:00 – 17:00",
    Sat: "09:00 – 12:00",
    Sun: "closed",
  },
};
