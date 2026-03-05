import { motion } from "framer-motion";
import { ArrowLeft, CalendarDays, User, Phone, MapPin, Users, MessageSquare } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  location: string;
  guests: string;
  message: string;
}

interface StepConfirmProps {
  formData: FormData;
  selectedDate: Date;
  onBack: () => void;
  onConfirm: () => void;
}

const StepConfirm = ({ formData, selectedDate, onBack, onConfirm }: StepConfirmProps) => {
  const details = [
    { icon: CalendarDays, label: "Event Date", value: selectedDate.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" }) },
    { icon: User, label: "Name", value: formData.name },
    { icon: Phone, label: "Phone", value: formData.phone },
    { icon: MapPin, label: "Location", value: formData.location },
    { icon: Users, label: "Guests", value: formData.guests },
    ...(formData.message ? [{ icon: MessageSquare, label: "Message", value: formData.message }] : []),
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.35 }}
      className="max-w-lg mx-auto"
    >
      <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
        {/* Ticket header */}
        <div className="bg-primary text-primary-foreground p-5 text-center">
          <h3 className="font-heading text-xl font-bold">Booking Summary</h3>
          <p className="text-sm opacity-80 mt-1">Bharath Kalyana Mandapam</p>
        </div>

        {/* Ticket perforated line */}
        <div className="relative h-4">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-background rounded-r-full" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-background rounded-l-full" />
          <div className="border-t-2 border-dashed border-border mx-6 mt-2" />
        </div>

        {/* Details */}
        <div className="p-6 space-y-4">
          {details.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="font-medium text-sm">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="px-6 pb-2">
          <p className="text-xs text-muted-foreground text-center">
            Your request will be sent via WhatsApp. The date will be confirmed by the admin.
          </p>
        </div>

        {/* Actions */}
        <div className="p-6 pt-3 flex gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-secondary transition-colors"
          >
            <ArrowLeft size={16} /> Edit
          </button>
          <button onClick={onConfirm} className="btn-gold flex-1">
            ✓ Send Booking Request
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default StepConfirm;
