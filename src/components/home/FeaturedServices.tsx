
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import SectionHeading from "@/components/SectionHeading";
// import tentImg from "@/assets/tent-premium.jpg";
// import lightsImg from "@/assets/lights-serial.jpg";
// import mandapamImg from "@/assets/mandapam-1.jpg";

// const fadeUp = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
// };

// const FeaturedServices = () => {
//   return (
// <section className="section-padding">

//   <div className="container mx-auto">

//     <SectionHeading title="Featured Services" />

//     <div className="grid md:grid-cols-3 gap-8">

//       {[
//         { img: tentImg, title: "Premium Tents", desc: "Elegant tent setups for weddings and events", link: "/services" },
//         { img: lightsImg, title: "Event Lighting", desc: "Stunning lighting to set the perfect mood", link: "/services" },
//         { img: mandapamImg, title: "Kalyana Mandapam", desc: "Beautiful venue for your dream wedding", link: "/kalyana-mandapam" },
//       ].map((item, i) => (

//         <motion.div
//           key={item.title}
//           {...fadeUp}
//           transition={{ delay: i * 0.15 }}
//           className="card-elegant group"
//         >

//           <div className="image-hover-zoom aspect-[4/3]">
//             <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
//           </div>

//           <div className="p-6">

//             <h3 className="font-heading text-xl font-bold mb-2">
//               {item.title}
//             </h3>

//             <p className="text-muted-foreground text-sm mb-4">
//               {item.desc}
//             </p>

//             <Link to={item.link} className="text-primary font-semibold text-sm hover:underline">
//               Learn More →
//             </Link>

//           </div>

//         </motion.div>

//       ))}

//     </div>

//   </div>

// </section>
//   );
// };

// export default FeaturedServices;


import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import tentImg from "@/assets/tent-premium.jpg";
import lightsImg from "@/assets/lights-serial.jpg";
import mandapamImg from "@/assets/mandapam-1.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const FeaturedServices = () => {
  return (
<section className="section-padding bg-card">

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
          className="group rounded-2xl overflow-hidden hover:shadow-lg transition-all"
        >

          <div className="image-hover-zoom aspect-[4/3]">
            <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
          </div>

          <div className="p-6 text-center">

            <h3 className="font-heading text-xl font-bold mb-2">
              {item.title}
            </h3>

            <p className="text-muted-foreground text-sm mb-4">
              {item.desc}
            </p>

            <Link
              to={item.link}
              className="text-primary font-semibold text-sm hover:underline"
            >
              Learn More →
            </Link>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>
  );
};

export default FeaturedServices;