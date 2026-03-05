// import { motion } from "framer-motion";
// import { MapPin } from "lucide-react";
// import SectionHeading from "../SectionHeading";

// const serviceLocations = [
//   "Konaseema",
//   "Amalapuram",
//   "Kakinada",
//   "Rajahmundry",
//   "Nearby Villages",
// ];

// const ServiceLocations = () => {
//   return (
//     <section className="section-padding">
//       <div className="container mx-auto">

//         <SectionHeading
//           title="Service Locations"
//           subtitle="We proudly serve across these areas"
//         />

//         <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">

//           <motion.div>

//             <div className="flex flex-wrap gap-3 mb-6">
//               {serviceLocations.map((loc) => (
//                 <span
//                   key={loc}
//                   className="inline-flex items-center gap-2 px-4 py-2.5 bg-secondary rounded-xl text-sm font-medium"
//                 >
//                   <MapPin size={14} className="text-primary" />
//                   {loc}
//                 </span>
//               ))}
//             </div>

//             <p className="text-muted-foreground text-sm leading-relaxed">
//               We provide tent house, lighting, event rental and decoration
//               services across Konaseema, Amalapuram, Kakinada, Rajahmundry
//               and nearby villages.
//             </p>

//           </motion.div>

//           <motion.div className="rounded-2xl overflow-hidden shadow-lg">
//             <iframe
//               src="https://www.google.com/maps?q=Sri+Manikyamba+Kalyana+Mandapam&output=embed"
//               width="100%"
//               height="300"
//               style={{ border: 0 }}
//               loading="lazy"
//             />
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceLocations;

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const serviceLocations = [
  "Konaseema",
  "Muramalla",
  "Yanam",
  "Mummidivaram",
  "Nearby Villages",
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ServiceLocations = () => {
  return (
<section className="section-padding">

  <div className="container mx-auto">

    <SectionHeading
      title="Service Locations"
      subtitle="We proudly serve across these areas"
    />

    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">

      <motion.div {...fadeUp}>

        <div className="flex flex-wrap gap-3 mb-6">

          {serviceLocations.map((loc) => (

            <span
              key={loc}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-secondary rounded-xl text-sm font-medium"
            >

              <MapPin size={14} className="text-primary" />

              {loc}

            </span>

          ))}

        </div>

        <p className="text-muted-foreground text-sm leading-relaxed">
          We provide tent house, lighting, event rental and decoration services across Konaseema, Muramalla, Yanam, Mummidivaram, and all nearby villages. Contact us for services in your area.
        </p>

      </motion.div>

      <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="rounded-2xl overflow-hidden shadow-lg">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19649.172216744224!2d82.15018975136094!3d16.68250648634732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37f534072ff227%3A0xa70f2edaa62dcb78!2sSri%20Manikyamba%20kalyanamandapam!5e1!3m2!1sen!2sin!4v1772720035809!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
        />

      </motion.div>

    </div>

  </div>

</section>
  );
};

export default ServiceLocations;