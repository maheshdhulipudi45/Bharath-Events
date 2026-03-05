// import { Clock, Star, Users, Shield } from "lucide-react";

// const items = [
//   { icon: Clock, title: "15+ Years Experience" },
//   { icon: Star, title: "Premium Quality" },
//   { icon: Users, title: "Professional Team" },
//   { icon: Shield, title: "On-Time Service" },
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="section-padding bg-card">
//       <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

//         {items.map((item) => (
//           <div key={item.title} className="text-center p-6 border rounded-xl">
//             <item.icon className="mx-auto mb-3 text-primary" />
//             <h3 className="font-bold">{item.title}</h3>
//           </div>
//         ))}

//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;


import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Star, Clock, Users, Shield } from "lucide-react";

const whyChooseUs = [
  { icon: Clock, title: "15+ Years Experience", desc: "Trusted by hundreds of families" },
  { icon: Star, title: "Premium Quality", desc: "Top-grade materials & setups" },
  { icon: Users, title: "Dedicated Team", desc: "Professional & reliable staff" },
  { icon: Shield, title: "On-Time Delivery", desc: "We never miss deadlines" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const WhyChooseUs = () => {
  return (
<section className="section-padding bg-card">

  <div className="container mx-auto">

    <SectionHeading
      title="Why Choose Us"
      subtitle="We make your events truly unforgettable"
    />

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

          <h3 className="font-heading font-bold text-base mb-1">
            {item.title}
          </h3>

          <p className="text-muted-foreground text-xs">
            {item.desc}
          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>
  );
};

export default WhyChooseUs;