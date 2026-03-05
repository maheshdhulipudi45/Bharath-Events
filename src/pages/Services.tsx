import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { X } from "lucide-react";

import tentNormal from "@/assets/tent-normal.jpg";
import tentPremium from "@/assets/tent-premium.jpg";
import tentWaterproof from "@/assets/tent-waterproof.jpg";
import tentEvent from "@/assets/tent-event.jpg";
import lightsSerial from "@/assets/lights-serial.jpg";
import lightsCurtain from "@/assets/lights-curtain.jpg";
import lightsWedding from "@/assets/lights-wedding.jpg";
import lightsOutdoor from "@/assets/lights-outdoor.jpg";
import rentalChairs from "@/assets/rental-chairs.jpg";
import rentalSofa from "@/assets/rental-sofa.jpg";
import rentalDj from "@/assets/rental-dj.jpg";
import rentalTables from "@/assets/rental-tables.jpg";

const tentServices = [
  { image: tentNormal, title: "Normal Tent", bulletPoints: ["Suitable for small gatherings", "Quick setup & takedown", "Affordable option"], whatsappMessage: "I want to book Normal Tent service." },
  { image: tentPremium, title: "Premium Tent", bulletPoints: ["Elegant draping & golden accents", "Perfect for weddings & receptions", "Customizable designs"], whatsappMessage: "I want to book Premium Tent service." },
  { image: tentWaterproof, title: "Waterproof Tent", bulletPoints: ["Heavy-duty waterproof material", "All-weather protection", "Ideal for outdoor events"], whatsappMessage: "I want to book Waterproof Tent service." },
  { image: tentEvent, title: "Event Tent", bulletPoints: ["Colorful festive designs", "Great for parties & celebrations", "Multiple size options"], whatsappMessage: "I want to book Event Tent service." },
];

const lightingServices = [
  { image: lightsSerial, title: "Serial Lights", bulletPoints: ["Warm ambient string lights", "Perfect for outdoor decor", "Available in multiple colors"], whatsappMessage: "I want to book Serial Lights decoration service." },
  { image: lightsCurtain, title: "Curtain Lights", bulletPoints: ["LED curtain backdrop", "Creates stunning stage effect", "Energy efficient"], whatsappMessage: "I want to book Curtain Lights decoration service." },
  { image: lightsWedding, title: "Wedding Lighting", bulletPoints: ["Grand stage lighting setup", "Includes spot & flood lights", "Professional installation"], whatsappMessage: "I want to book Wedding Lighting decoration service." },
  { image: lightsOutdoor, title: "Outdoor Lighting", bulletPoints: ["Garden & pathway lighting", "Fairy lights & lanterns", "Creates magical ambiance"], whatsappMessage: "I want to book Outdoor Lighting decoration service." },
];

const rentalServices = [
  { image: rentalChairs, title: "Wedding & Birthday Chairs", bulletPoints: ["Premium quality chairs", "Available in bulk quantity", "Delivery & pickup included"], whatsappMessage: "I want to rent Wedding Chairs." },
  { image: rentalSofa, title: "VIP & Bride-Groom Sofa", bulletPoints: ["Luxurious ornate sofa sets", "Perfect for stage decoration", "Multiple designs available"], whatsappMessage: "I want to rent VIP Sofa Set." },
  { image: rentalDj, title: "Sound Boxes / DJ Setup", bulletPoints: ["Professional sound systems", "DJ equipment included", "Covers large venues"], whatsappMessage: "I want to rent DJ Sound Setup." },
  { image: rentalTables, title: "Dining & Buffet Tables", bulletPoints: ["Elegant table arrangements", "Various sizes available", "Suitable for all events"], whatsappMessage: "I want to rent Dining Tables." },
];

const galleryImages = [
  tentPremium, lightsWedding, rentalSofa, tentEvent, lightsCurtain, rentalChairs, lightsOutdoor, tentWaterproof,
];

const Services = () => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Tent Services */}
      <section className="pt-28 section-padding">
        <div className="container mx-auto">
          <SectionHeading title="Tent Services" subtitle="Premium tent solutions for every occasion" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tentServices.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Lighting */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <SectionHeading title="Lighting Services" subtitle="Create magical ambiance with our lighting setups" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lightingServices.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Rentals */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading title="Event Rentals" subtitle="Everything you need for a perfect event" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rentalServices.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <SectionHeading title="Gallery" subtitle="A glimpse of our recent work" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="image-hover-zoom rounded-xl cursor-pointer aspect-square"
                onClick={() => setLightboxImg(img)}
              >
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover rounded-xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            <button className="absolute top-6 right-6 text-card" onClick={() => setLightboxImg(null)}>
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={lightboxImg}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Services;
