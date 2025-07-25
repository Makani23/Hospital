import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import FeaturedDoctors from "@/components/FeaturedDoctors"
import ServicesSection from "@/components/ServicesSection"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedDoctors />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Index;