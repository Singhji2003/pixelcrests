import AboutSection from "@/components/HomePage/AboutSection";
import HeroSection from "@/components/HomePage/HeroSection";
import ServiceSection from "@/components/HomePage/ServiceSection";
import ChooseUs from "@/components/HomePage/ChooseUs";
import FAQSection from "@/components/HomePage/FAQSection";
import BannerSection from "@/components/HomePage/BannerSection";
import WorkSection from "@/components/HomePage/WorkSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <div className="mx-8">
        <AboutSection />
        <ServiceSection />
        <ChooseUs />
        <BannerSection />
        <WorkSection />
        <FAQSection />
      </div>
    </div>
  );
}
