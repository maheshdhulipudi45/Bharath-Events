// import { Link } from "react-router-dom";
// import mandapam from "@/assets/srimanikyambakalyanmandapam.jpg";

// const MandapamPreview = () => {
//   return (
//     <section className="section-padding">
//       <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-10 items-center">

//         <img src={mandapam} className="rounded-2xl object-cover" />

//         <div>
//           <h2 className="font-heading text-3xl font-bold mb-4">
//             Sri Manikyamba Kalyana Mandapam
//           </h2>

//           <p className="text-muted-foreground mb-5">
//             Perfect wedding venue with AC halls and 500+ seating capacity.
//           </p>

//           <Link to="/kalyana-mandapam" className="btn-gold">
//             Book Your Mandapam
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default MandapamPreview;


import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import mandapam2 from "@/assets/srimanikyambakalyanmandapam.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const MandapamPreview = () => {
  return (
<section className="section-padding">
  <div className="container mx-auto">
    <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">

      <motion.div {...fadeUp} className="image-hover-zoom rounded-2xl overflow-hidden">
        <img src={mandapam2} alt="Kalyana Mandapam" className="w-full aspect-[4/3] object-cover" />
      </motion.div>

      <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
        <h2 className="font-heading text-3xl font-bold mb-4">
          Sri Manikyamba Kalyana Mandapam
        </h2>

        <p className="text-muted-foreground mb-5 leading-relaxed">
          Our beautiful Kalyana Mandapam is the perfect venue for your dream wedding. With 500+ seating capacity, AC halls, dining facilities, and complete decoration services.
        </p>

        <ul className="space-y-2 mb-6 text-sm">
          {[
            "500+ Seating Capacity",
            "AC & Non-AC Halls",
            "Complete Decoration",
            "Parking & Generator Backup",
          ].map((f) => (
            <li key={f} className="flex items-center gap-2.5 font-medium">
              <CheckCircle2 className="text-primary flex-shrink-0" size={18} />
              {f}
            </li>
          ))}
        </ul>

        <Link to="/kalyana-mandapam" className="btn-gold">
          Book Your Mandapam
        </Link>

      </motion.div>

    </div>
  </div>
</section>
  );
};

export default MandapamPreview;