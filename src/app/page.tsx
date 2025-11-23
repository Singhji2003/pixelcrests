import AboutSection from "@/components/HomePage/AboutSection";
import HeroSection from "@/components/HomePage/HeroSection";
import ServiceSection from "@/components/HomePage/ServiceSection";
import ChooseUs from "@/components/HomePage/ChooseUs";

export default function Home() {
  return (
    <div className="mx-8">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ChooseUs />
    </div>
  );
}
