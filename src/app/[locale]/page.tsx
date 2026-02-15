import Hero from "@/widgets/hero/Hero";
import Services from "@/widgets/services/Services";
import About from "@/widgets/about/About";
import Doctors from "@/widgets/doctors/Doctors";
import Pricing from "@/widgets/pricing/Pricing";
import Testimonials from "@/widgets/testimonials/Testimonials";
import Contact from "@/widgets/contact/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Doctors />
      <Pricing />
      <Testimonials />
      <Contact />
    </>
  );
}
