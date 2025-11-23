import AboutSection from "@/components/HomePage/AboutSection";
import HeroSection from "@/components/HomePage/HeroSection";
import ServiceSection from "@/components/HomePage/ServiceSection";
import ChooseUs from "@/components/HomePage/ChooseUs";
import FAQSection from "@/components/HomePage/FAQSection";
import BannerSection from "@/components/HomePage/BannerSection";

export default function Home() {
  return (
    <div className="mx-8">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ChooseUs />
      <BannerSection />
      <FAQSection />
    </div>
  );
}
