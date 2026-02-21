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
  lat: 47.05055337208971,
  lng: 28.86641022976548,
} as const;

export const SITE: SiteConfig = {
  name: "Vet Planeta",

  logo: "/images/vet-planeta-logo.png",
  ogImage: "/images/vet-planeta-og-image.jpg",

  phone: "+373 692 53 554",

  social: {
    fb: "https://www.facebook.com/profile.php?id=100064076469090",
    insta: "https://www.instagram.com/vet.planeta/",
  },

  address: "Strada Miron Costin 13/6, MD-2068, Chișinău, Молдова",
  geo: GEO,

  mapEmbedUrl: `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1500!2d${GEO.lng}!3d${GEO.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDfCsDAyJzU2LjAiTiAyOMKwNTEnMjIuMSJF!5e0!3m2!1sro!2smd!4v1702300000000!5m2!1sro!2smd`,

  rating: 4.8,
  reviews: 104,

  schedule: {
    Mon: "09:00 – 19:00",
    Tue: "09:00 – 19:00",
    Wed: "09:00 – 19:00",
    Thu: "09:00 – 19:00",
    Fri: "09:00 – 19:00",
    Sat: "09:00 – 14:00",
    Sun: "closed",
  },
};
