// import lights from "@/assets/lights-wedding.jpg";

// const GalleryPreview = () => {
//   return (
//     <section className="section-padding">
//       <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">

//         {Array(8).fill(0).map((_, i) => (
//           <img key={i} src={lights} className="rounded-xl object-cover" />
//         ))}

//       </div>
//     </section>
//   );
// };

// export default GalleryPreview; 
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";

import lightsWedding from "@/assets/lights-wedding.jpg";
import tentEvent from "@/assets/tent-event.jpg";
import mandapamImg from "@/assets/mandapam-1.jpg";
import lightsCurtain from "@/assets/lights-curtain.jpg";
import lightsOutdoor from "@/assets/lights-outdoor.jpg";
import mandapam2 from "@/assets/srimanikyambakalyanmandapam.jpg";
import rentalChairs from "@/assets/rental-chairs.jpg";
import rentalDj from "@/assets/rental-dj.jpg";

const galleryImages = [
  lightsWedding,
  tentEvent,
  mandapamImg,
  lightsCurtain,
  lightsOutdoor,
  mandapam2,
  rentalChairs,
  rentalDj,
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const GalleryPreview = () => {
  return (
<section className="section-padding bg-card">

  <div className="container mx-auto">

    <SectionHeading
      title="Our Work"
      subtitle="A glimpse of our recent event setups"
    />

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

      {galleryImages.map((img, i) => (

        <motion.div
          key={i}
          {...fadeUp}
          transition={{ delay: i * 0.05 }}
          className="image-hover-zoom rounded-xl aspect-square overflow-hidden"
        >

          <img
            src={img}
            alt={`Gallery ${i + 1}`}
            className="w-full h-full object-cover"
          />

        </motion.div>

      ))}

    </div>

    <div className="text-center mt-8">
      <Link to="/services" className="btn-gold-outline">
        View Full Gallery →
      </Link>
    </div>

  </div>

</section>
  );
};

export default GalleryPreview;