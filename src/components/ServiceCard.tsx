import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

interface ServiceCardProps {
  image: string;
  title: string;
  description?: string;
  bulletPoints?: string[];
  whatsappMessage: string;
  index?: number;
}

const ServiceCard = ({ image, title, description, bulletPoints, whatsappMessage, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-elegant flex flex-col"
    >
      <div className="image-hover-zoom aspect-[4/3]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading text-lg font-bold mb-2">{title}</h3>
        {description && <p className="text-muted-foreground text-sm mb-3">{description}</p>}
        {bulletPoints && bulletPoints.length > 0 && (
          <ul className="text-muted-foreground text-sm mb-4 space-y-1 flex-1">
            {bulletPoints.map((pt, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-primary mt-0.5">•</span> {pt}
              </li>
            ))}
          </ul>
        )}
        <WhatsAppButton message={whatsappMessage} />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
