import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Wedding decoration"
          className="w-full h-full object-cover"
        />
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
          Premium wedding decoration, tent house, lighting and event rental services.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/services" className="btn-gold">
            View Services
          </Link>

          <Link
            to="/kalyana-mandapam"
            className="btn-gold-outline border-card text-card hover:bg-card hover:text-foreground"
          >
            Book Mandapam
          </Link>
        </div>

      </motion.div>

    </section>
  );
};

export default HeroSection;