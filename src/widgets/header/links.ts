export const LINKS = [
  {href: "#services", labelKey: "navServices"},
  {href: "#about", labelKey: "navAbout"},
  {href: "#doctors", labelKey: "navDoctors"},
  {href: "#pricing", labelKey: "navPricing"},
  {href: "#testimonials", labelKey: "navTestimonials"},
  {href: "#contact", labelKey: "navContact"},
] as const;

export type HeaderLink = (typeof LINKS)[number];

