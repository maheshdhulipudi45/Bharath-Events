  

// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const fadeUp = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
// };

// const ContactCTA = () => {
//   return (
// <section className="gold-gradient py-16 px-4 text-center">

//   <motion.div {...fadeUp} className="max-w-2xl mx-auto">

//     <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
//       Ready to Plan Your Event?
//     </h2>

//     <p className="text-primary-foreground/80 mb-8">
//       Contact us today for a free consultation and quote for your upcoming event.
//     </p>

//     <div className="flex flex-wrap gap-4 justify-center">

//       <Link
//         to="/contact"
//         className="inline-block bg-card text-foreground font-semibold px-8 py-3 rounded-xl hover:shadow-lg transition-all hover:scale-105"
//       >
//         Get in Touch
//       </Link>

//       <a
//         href="tel:+919618678345"
//         className="inline-block border-2 border-card text-card font-semibold px-8 py-3 rounded-xl hover:bg-card hover:text-foreground transition-all hover:scale-105"
//       >
//         Call Now
//       </a>

//     </div>

//   </motion.div>

// </section>
//   );
// };

// export default ContactCTA;


import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ContactCTA = () => {
  return (
<section className="py-20 px-4 bg-background flex justify-center">

  <motion.div
    {...fadeUp}
    className="max-w-4xl w-full text-center rounded-3xl p-12
    bg-gradient-to-r from-yellow-600  to-yellow-800
    shadow-2xl"
  >

    <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
      Ready to Plan Your Event?
    </h2>

    <p className="text-white/80 mb-10 max-w-xl mx-auto">
      Contact us today for a free consultation and quote for your upcoming event.
    </p>

    <div className="flex flex-wrap justify-center gap-4">

      <Link
        to="/contact"
        className="px-8 py-3 rounded-xl font-semibold bg-white text-black hover:scale-105 transition"
      >
        Get in Touch
      </Link>

      <a
        href="tel:+919618678345"
        className="px-8 py-3 rounded-xl font-semibold border border-white text-white flex items-center gap-2 hover:bg-white hover:text-black transition"
      >
        <Phone size={18} />
        Call Now
      </a>

    </div>

  </motion.div>

</section>
  );
};

export default ContactCTA;