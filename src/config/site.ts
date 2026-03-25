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
  lat: 46.987081735696485,
  lng: 28.882763621989184,
} as const;

export const SITE: SiteConfig = {
  name: "ANIMALIA VET",

  logo: "/images/animalia-vet-logo.jpg",
  ogImage: "/images/animalia-vet-og.jpg",

  phone: "+373 791 02 028",

  social: {
    fb: "",
    insta: "",
  },

  address: "Strada Burebista 38, Chisinau, Moldova",
  geo: GEO,

  mapEmbedUrl: `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1500!2d${GEO.lng}!3d${GEO.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDfCsDAyJzU2LjAiTiAyOMKwNTEnMjIuMSJF!5e0!3m2!1sro!2smd!4v1702300000000!5m2!1sro!2smd`,

  rating: 4.9,
  reviews: 62,

  schedule: {
    Mon: "10:00 – 18:00",
    Tue: "10:00 – 18:00",
    Wed: "10:00 – 18:00",
    Thu: "10:00 – 18:00",
    Fri: "10:00 – 18:00",
    Sat: "10:00 – 16:00",
    Sun: "closed",
  },
};
