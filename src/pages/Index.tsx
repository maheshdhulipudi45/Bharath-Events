import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
 import ServicesPreview from "@/components/home/ServicesPreview";
import MandapamPreview from "@/components/home/MandapamPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedServices from "@/components/home/FeaturedServices";
import RentalsPreview from "@/components/home/RentalsPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import ServiceLocations from "@/components/home/ServiceLocations";
import ContactCTA from "@/components/home/ContactCTA";
import WhatsappFloat from "@/components/home/WhatsappFloat";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">

      <Navbar />

      <HeroSection />

      <AboutPreview />

      <ServicesPreview />

      <MandapamPreview />

      <WhyChooseUs />

      <FeaturedServices />

      <RentalsPreview />

      <GalleryPreview />

      <ServiceLocations />

      <ContactCTA />
      <WhatsappFloat />
       <Footer />

    </div>
  );
};

export default Index;