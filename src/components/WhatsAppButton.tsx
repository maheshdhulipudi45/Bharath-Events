import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  message: string;
  label?: string;
}

const WhatsAppButton = ({ message, label = "Book on WhatsApp" }: WhatsAppButtonProps) => {
  const phone = "919876543210";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-gold inline-flex items-center gap-2 text-sm"
    >
      <MessageCircle size={18} />
      {label}
    </a>
  );
};

export default WhatsAppButton;
