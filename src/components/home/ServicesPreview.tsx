// import { motion } from "framer-motion";
// import SectionHeading from "@/components/SectionHeading";
// import { Tent, Lightbulb, Building2, PartyPopper } from "lucide-react";

// const highlights = [
//   { icon: Tent, title: "Tent House", desc: "Premium tents for all events" },
//   { icon: Lightbulb, title: "Lighting", desc: "Stunning lighting setups" },
//   { icon: Building2, title: "Mandapam", desc: "Kalyana Mandapam booking" },
//   { icon: PartyPopper, title: "Rentals", desc: "Chairs, tables, sound & more" },
// ];

// const fadeUp = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
// };

// const ServicesPreview = () => {
//   return (
// <section className="section-padding">
//   <div className="container mx-auto">

//     <SectionHeading
//       title="What We Offer"
//       subtitle="Comprehensive event solutions for weddings, birthdays, and celebrations"
//     />

//     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

//       {highlights.map((item, i) => (
//         <motion.div
//           key={item.title}
//           {...fadeUp}
//           transition={{ delay: i * 0.1 }}
//           className="text-center p-6 rounded-2xl bg-secondary hover:shadow-lg transition-shadow"
//         >

//           <item.icon className="mx-auto mb-3 text-primary" size={36} />

//           <h3 className="font-heading font-bold text-lg mb-1">
//             {item.title}
//           </h3>

//           <p className="text-muted-foreground text-sm">
//             {item.desc}
//           </p>

//         </motion.div>
//       ))}

//     </div>
//   </div>
// </section>
//   );
// };

// export default ServicesPreview;


import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Tent, Lightbulb, Building2, PartyPopper } from "lucide-react";

const highlights = [
  { icon: Tent, title: "Tent House", desc: "Premium tents for all events" },
  { icon: Lightbulb, title: "Lighting", desc: "Stunning lighting setups" },
  { icon: Building2, title: "Mandapam", desc: "Kalyana Mandapam booking" },
  { icon: PartyPopper, title: "Rentals", desc: "Chairs, tables, sound & more" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ServicesPreview = () => {
  return (
<section className="section-padding">
  <div className="container mx-auto">

    <SectionHeading
      title="What We Offer"
      subtitle="Comprehensive event solutions for weddings, birthdays, and celebrations"
    />

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      {highlights.map((item, i) => (
        <motion.div
          key={item.title}
          {...fadeUp}
          transition={{ delay: i * 0.1 }}
          className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all hover:-translate-y-1"
        >

          <item.icon className="mx-auto mb-3 text-primary" size={36} />

          <h3 className="font-heading font-bold text-lg mb-1">
            {item.title}
          </h3>

          <p className="text-muted-foreground text-sm">
            {item.desc}
          </p>

        </motion.div>
      ))}

    </div>

  </div>
</section>
  );
};

export default ServicesPreview;