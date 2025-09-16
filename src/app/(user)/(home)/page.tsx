import "@/styles/css/home.css";
import HeroSection from "./HeroSection";
import DomainSearchSection from "./SearchSection";
import PackageSection from "./PackageSection";
import GuaranteeBadges from "@/components/coman/GuaranteeBadges";
import TestimonialSlider from "@/components/coman/Testimonial";
import WhyChooseUs from "@/components/coman/WhyChooseUs";
function HomePage() {
  return (
    <div id="app-home-section">
      <HeroSection />
      <div className="multiple-section-wrap">
        <DomainSearchSection />
        <PackageSection />
        <GuaranteeBadges />
        <TestimonialSlider />
        <WhyChooseUs />
      </div>
    </div>
  );
}

export default HomePage;
