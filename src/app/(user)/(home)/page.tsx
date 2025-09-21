import "@/styles/css/home.css";
import HeroSection from "./HeroSection";
import DomainSearchSection from "@/components/sections/DomainSearchSection";
import ChooseHostingPlans from "@/components/sections/ChooseHostingPlans";
import GuaranteeBadges from "@/components/sections/GuaranteeBadges";
import TestimonialSlider from "@/components/sections/Testimonial";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import PartnerLogosSection from "@/components/sections/PartnerSection";
function HomePage() {
  return (
    <div id="app-home-section">
      <HeroSection />
      <DomainSearchSection />
      <ChooseHostingPlans />
      <GuaranteeBadges />
      <TestimonialSlider />
      <PartnerLogosSection />
      <WhyChooseUs />
    </div>
  );
}

export default HomePage;
