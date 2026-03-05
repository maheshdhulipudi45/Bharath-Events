// import rental from "@/assets/rental-sofa.jpg";

// const RentalsPreview = () => {
//   return (
//     <section className="section-padding bg-card">
//       <div className="container mx-auto grid md:grid-cols-3 gap-6">

//         <img src={rental} className="rounded-xl" />
//         <img src={rental} className="rounded-xl" />
//         <img src={rental} className="rounded-xl" />

//       </div>
//     </section>
//   );
// };

// export default RentalsPreview;  
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import rentalImg from "@/assets/rental-sofa.jpg";
import rentalChairs from "@/assets/rental-chairs.jpg";
import rentalDj from "@/assets/rental-dj.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const RentalsPreview = () => {
  return (
<section className="section-padding bg-card">

  <div className="container mx-auto">

    <SectionHeading
      title="Event Rentals"
      subtitle="Quality rental items for every occasion"
    />

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">

      {[
        { img: rentalChairs, title: "Wedding Chairs", desc: "Premium seating for all events" },
        { img: rentalImg, title: "VIP Sofa Sets", desc: "Luxurious stage sofa sets" },
        { img: rentalDj, title: "Sound & DJ Setup", desc: "Professional sound systems" },
      ].map((item, i) => (

        <motion.div
          key={item.title}
          {...fadeUp}
          transition={{ delay: i * 0.1 }}
          className="card-elegant"
        >

          <div className="image-hover-zoom aspect-[4/3]">
            <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
          </div>

          <div className="p-5 text-center">

            <h3 className="font-heading font-bold text-lg mb-1">
              {item.title}
            </h3>

            <p className="text-muted-foreground text-sm">
              {item.desc}
            </p>

          </div>

        </motion.div>

      ))}

    </div>

    <div className="text-center mt-8">
      <Link to="/services" className="btn-gold-outline">
        View All Rentals →
      </Link>
    </div>

  </div>

</section>
  );
};

export default RentalsPreview;