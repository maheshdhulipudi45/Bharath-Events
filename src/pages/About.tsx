import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { CheckCircle2, Award, Palette, Lightbulb, ShieldCheck, Heart } from "lucide-react";
import ownerImg from "@/assets/owner.jpg";

const bulletPoints = [
  "10+ Years Experience in Event Decorations",
  "Wedding & Birthday Event Setup",
  "Tent House & Lighting Services",
  "Kalyana Mandapam Booking",
  "Serving Muramalla & Nearby Areas",
];

const whyChooseUs = [
  { icon: Award, title: "Experienced Team", description: "Over 15 years of professional event management expertise" },
  { icon: Palette, title: "Quality Decoration Materials", description: "Premium fabrics, flowers, and décor for every occasion" },
  { icon: Lightbulb, title: "Professional Lighting Setup", description: "Stunning lighting arrangements that transform your venue" },
  { icon: ShieldCheck, title: "Reliable Service", description: "On-time delivery and setup with dedicated support" },
  { icon: Heart, title: "Trusted by Many Families", description: "Hundreds of happy families across Konaseema and nearby areas" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 section-padding">
        <div className="container mx-auto">
          <SectionHeading title="About Us" subtitle="Your trusted partner for premium event services" />

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-secondary border-4 border-primary shadow-lg flex items-center justify-center overflow-hidden">

  <img
    src={ownerImg}
    alt="Bharath Tent House Owner"
    className="w-full h-full object-cover"
  />

</div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
           <h3 className="font-heading text-2xl font-bold mb-4">
  Bharath Tent House & Lighting
</h3>

<p className="text-muted-foreground mb-6 leading-relaxed text-justify">
  Bharath Tent House & Lighting was founded and managed by 
  <strong> Suribabu Dhulipudi </strong> from <strong>Pasuvullanka</strong>. 
  With over <strong>10+ years of experience</strong>, our business has become a trusted name in 
  wedding decorations, tent house services, and event rentals across Pasuvullanka and nearby areas. 
  We specialize in creating memorable events with premium tents, beautiful lighting setups, 
  elegant furniture rentals, and complete event arrangements including Kalyana Mandapam services. 
  Our goal is to make every celebration grand, well-organized, and unforgettable for our customers.
</p>

              <ul className="space-y-3">
                {bulletPoints.map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                    <span className="text-foreground font-medium text-sm">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading title="Why Choose Bharath Tent House" subtitle="Reasons families trust us for their special occasions" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-secondary/50 rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-primary" size={28} />
                </div>
                <h4 className="font-heading text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
