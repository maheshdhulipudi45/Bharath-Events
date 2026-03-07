



import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import ownerImg from "@/assets/owner.jpg";
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const AboutPreview = () => {
  return (
<section className="section-padding bg-card">
  <div className="container mx-auto">
    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">

      <motion.div {...fadeUp} className="flex justify-center">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-secondary border-4 border-primary shadow-lg flex items-center justify-center overflow-hidden">

  <img
    src={ownerImg}
    alt="Bharath Tent House Owner"
    className="w-full h-full object-cover"
  />

</div>
      </motion.div>

      <motion.div {...fadeUp}>
        <h2 className="font-heading text-3xl font-bold mb-4">
          About Bharath Tent House
        </h2>

        <p className="text-muted-foreground mb-5 leading-relaxed text-justify">
          With over 10 years of experience, we are the most trusted name in wedding decoration, tent house services, and event rentals across Konaseema.
        </p>

        <ul className="space-y-2.5 mb-6">
          {[
            "10+ Years Experience",
            "Wedding & Birthday Decorations",
            "Tent House & Lighting",
            "Kalyana Mandapam Booking",
            "Serving Pasuvullanka & Nearby Areas",
          ].map((pt) => (
            <li key={pt} className="flex items-center gap-2.5 text-sm font-medium">
              <CheckCircle2 className="text-primary flex-shrink-0" size={18} />
              {pt}
            </li>
          ))}
        </ul>

        <Link to="/about" className="text-primary font-semibold hover:underline">
          Learn More →
        </Link>
      </motion.div>

    </div>
  </div>
</section>
  );
};

export default AboutPreview;