import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-wedding.jpg";
import tentImg from "@/assets/tent-premium.jpg";
import lightsImg from "@/assets/lights-serial.jpg";
import mandapamImg from "@/assets/mandapam-1.jpg";
import rentalImg from "@/assets/rental-sofa.jpg";
import lightsWedding from "@/assets/lights-wedding.jpg";
import tentEvent from "@/assets/tent-event.jpg";
import lightsCurtain from "@/assets/lights-curtain.jpg";
import lightsOutdoor from "@/assets/lights-outdoor.jpg";
import mandapam2 from "@/assets/srimanikyambakalyanmandapam.jpg";
import rentalChairs from "@/assets/rental-chairs.jpg";
import rentalDj from "@/assets/rental-dj.jpg";
import { Tent, Lightbulb, Building2, PartyPopper, CheckCircle2, Star, Clock, Users, Shield, MapPin } from "lucide-react";

const highlights = [
  { icon: Tent, title: "Tent House", desc: "Premium tents for all events" },
  { icon: Lightbulb, title: "Lighting", desc: "Stunning lighting setups" },
  { icon: Building2, title: "Mandapam", desc: "Kalyana Mandapam booking" },
  { icon: PartyPopper, title: "Rentals", desc: "Chairs, tables, sound & more" },
];

const whyChooseUs = [
  { icon: Clock, title: "15+ Years Experience", desc: "Trusted by hundreds of families" },
  { icon: Star, title: "Premium Quality", desc: "Top-grade materials & setups" },
  { icon: Users, title: "Dedicated Team", desc: "Professional & reliable staff" },
  { icon: Shield, title: "On-Time Delivery", desc: "We never miss deadlines" },
];

const serviceLocations = [
  "Konaseema", "Amalapuram", "Kakinada", "Rajahmundry", "Nearby Villages",
];

const galleryImages = [
  lightsWedding, tentEvent, mandapamImg, lightsCurtain, lightsOutdoor, mandapam2, rentalChairs, rentalDj,
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* 1. Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Wedding decoration" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/30" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-3xl"
        >
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-card mb-4 leading-tight">
            Bharath Tent House & Lighting
          </h1>
          <p className="text-card/80 text-lg md:text-xl mb-8 font-body">
            Premium wedding decoration, tent house, lighting and event rental services for your special occasions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/services" className="btn-gold">View Services</Link>
            <Link to="/kalyana-mandapam" className="btn-gold-outline border-card text-card hover:bg-card hover:text-foreground">Book Mandapam</Link>
          </div>
        </motion.div>
      </section>

      {/* 2. About Preview */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="flex justify-center">
              <div className="w-44 h-44 md:w-52 md:h-52 rounded-full bg-secondary border-4 border-primary shadow-lg flex items-center justify-center">
                <span className="font-heading text-5xl font-bold text-primary">BT</span>
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <h2 className="font-heading text-3xl font-bold mb-4">About Bharath Tent House</h2>
              <p className="text-muted-foreground mb-5 leading-relaxed text-justify">
                With over 15 years of experience, we are the most trusted name in wedding decoration, tent house services, and event rentals across Konaseema.
              </p>
              <ul className="space-y-2.5 mb-6">
                {["15+ Years Experience", "Wedding & Birthday Decorations", "Tent House & Lighting", "Kalyana Mandapam Booking", "Serving Konaseema & Nearby Areas"].map((pt) => (
                  <li key={pt} className="flex items-center gap-2.5 text-sm font-medium">
                    <CheckCircle2 className="text-primary flex-shrink-0" size={18} /> {pt}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="text-primary font-semibold hover:underline">Learn More →</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Services Preview (What We Offer) */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading title="What We Offer" subtitle="Comprehensive event solutions for weddings, birthdays, and celebrations" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-secondary hover:shadow-lg transition-shadow"
              >
                <item.icon className="mx-auto mb-3 text-primary" size={36} />
                <h3 className="font-heading font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


       {/* 7. Kalyana Mandapam Preview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="image-hover-zoom rounded-2xl overflow-hidden">
              <img src={mandapam2} alt="Kalyana Mandapam" className="w-full aspect-[4/3] object-cover" />
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <h2 className="font-heading text-3xl font-bold mb-4">Bharath Kalyana Mandapam</h2>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                Our beautiful Kalyana Mandapam is the perfect venue for your dream wedding. With 500+ seating capacity, AC halls, dining facilities, and complete decoration services.
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                {["500+ Seating Capacity", "AC & Non-AC Halls", "Complete Decoration", "Parking & Generator Backup"].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 font-medium">
                    <CheckCircle2 className="text-primary flex-shrink-0" size={18} /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/kalyana-mandapam" className="btn-gold">Book Your Mandapam</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <SectionHeading title="Why Choose Us" subtitle="We make your events truly unforgettable" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-background border border-border"
              >
                <div className="w-14 h-14 rounded-full gold-gradient mx-auto mb-4 flex items-center justify-center">
                  <item.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="font-heading font-bold text-base mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Tent & Lighting Highlights */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading title="Featured Services" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: tentImg, title: "Premium Tents", desc: "Elegant tent setups for weddings and events", link: "/services" },
              { img: lightsImg, title: "Event Lighting", desc: "Stunning lighting to set the perfect mood", link: "/services" },
              { img: mandapamImg, title: "Kalyana Mandapam", desc: "Beautiful venue for your dream wedding", link: "/kalyana-mandapam" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ delay: i * 0.15 }}
                className="card-elegant group"
              >
                <div className="image-hover-zoom aspect-[4/3]">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                  <Link to={item.link} className="text-primary font-semibold text-sm hover:underline">
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Event Rentals Preview */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <SectionHeading title="Event Rentals" subtitle="Quality rental items for every occasion" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { img: rentalChairs, title: "Wedding Chairs", desc: "Premium seating for all events" },
              { img: rentalImg, title: "VIP Sofa Sets", desc: "Luxurious stage sofa sets" },
              { img: rentalDj, title: "Sound & DJ Setup", desc: "Professional sound systems" },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="card-elegant">
                <div className="image-hover-zoom aspect-[4/3]">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-heading font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="btn-gold-outline">View All Rentals →</Link>
          </div>
        </div>
      </section>

      {/* 7. Kalyana Mandapam Preview
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="image-hover-zoom rounded-2xl overflow-hidden">
              <img src={mandapam2} alt="Kalyana Mandapam" className="w-full aspect-[4/3] object-cover" />
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <h2 className="font-heading text-3xl font-bold mb-4">Bharath Kalyana Mandapam</h2>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                Our beautiful Kalyana Mandapam is the perfect venue for your dream wedding. With 500+ seating capacity, AC halls, dining facilities, and complete decoration services.
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                {["500+ Seating Capacity", "AC & Non-AC Halls", "Complete Decoration", "Parking & Generator Backup"].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 font-medium">
                    <CheckCircle2 className="text-primary flex-shrink-0" size={18} /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/kalyana-mandapam" className="btn-gold">Book Your Mandapam</Link>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* 8. Gallery Preview */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <SectionHeading title="Our Work" subtitle="A glimpse of our recent event setups" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className="image-hover-zoom rounded-xl aspect-square overflow-hidden"
              >
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="btn-gold-outline">View Full Gallery →</Link>
          </div>
        </div>
      </section>

      {/* 9. Service Locations + Map */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading title="Service Locations" subtitle="We proudly serve across these areas" />
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
            <motion.div {...fadeUp}>
              <div className="flex flex-wrap gap-3 mb-6">
                {serviceLocations.map((loc) => (
                  <span key={loc} className="inline-flex items-center gap-2 px-4 py-2.5 bg-secondary rounded-xl text-sm font-medium">
                    <MapPin size={14} className="text-primary" /> {loc}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We provide tent house, lighting, event rental and decoration services across Konaseema, Amalapuram, Kakinada, Rajahmundry, and all nearby villages. Contact us for services in your area.
              </p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122251.99955028072!2d81.64!3d16.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d0f0e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sKonaseema%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bharath Tent House Location"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 10. Contact CTA */}
      <section className="gold-gradient py-16 px-4 text-center">
        <motion.div
          {...fadeUp}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Plan Your Event?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Contact us today for a free consultation and quote for your upcoming event.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="inline-block bg-card text-foreground font-semibold px-8 py-3 rounded-xl hover:shadow-lg transition-all hover:scale-105">
              Get in Touch
            </Link>
            <a href="tel:+919876543210" className="inline-block border-2 border-card text-card font-semibold px-8 py-3 rounded-xl hover:bg-card hover:text-foreground transition-all hover:scale-105">
              Call Now
            </a>
          </div>
        </motion.div>
      </section>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
};

export default Index;
