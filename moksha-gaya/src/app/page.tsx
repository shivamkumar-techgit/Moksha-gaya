import { Metadata } from "next";
import Hero from "@/sections/Hero";
import TrustStats from "@/sections/TrustStats";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Services from "@/sections/Services";
import SacredPlaces from "@/sections/SacredPlaces";
import PilgrimageAssistance from "@/sections/PilgrimageAssistance";
import HowItWorks from "@/sections/HowItWorks";
import Packages from "@/sections/Packages";
import Gallery from "@/sections/Gallery";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import CTA from "@/sections/CTA";
import { LocalBusinessSchema, OrganizationSchema, FAQSchema } from "@/components/JsonLd";
import { faqCategories } from "@/data/faq";

export const metadata: Metadata = {
  title: "Gaya Rituals | Authentic Pind Daan & Ancestral Pujas in Gaya",
  description: "Perform sacred Pind Daan, Shraddh, Tarpan, Narayan Bali & Tripindi Shraddh in Gaya. Verified Gayawal Pandits, temple VIP entries, lodging & cabs.",
  keywords: ["Gaya Rituals", "Pind Daan in Gaya", "Gaya Pind Daan", "Shraddh in Gaya", "Gaya Pandits", "Narayan Bali in Gaya"],
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const homeFaqs = faqCategories.flatMap(category => 
    category.items.map(item => ({
      q: item.q,
      a: item.a
    }))
  );

  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <FAQSchema faqs={homeFaqs} />
      
      <Hero />
      <TrustStats />
      <WhyChooseUs />
      <Services />
      <SacredPlaces />
      <PilgrimageAssistance />
      <HowItWorks />
      <Packages />
      <Gallery />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}