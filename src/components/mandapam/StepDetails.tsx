import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  location: string;
  guests: string;
  message: string;
}

interface StepDetailsProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  selectedDate: Date;
  onBack: () => void;
  onNext: () => void;
}

const fields = [
  { name: "name", label: "Full Name", type: "text", placeholder: "Enter your full name" },
  { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
  { name: "location", label: "Location / City", type: "text", placeholder: "Your city or village" },
  { name: "guests", label: "Expected Guests", type: "number", placeholder: "e.g. 200" },
];

const StepDetails = ({ formData, setFormData, selectedDate, onBack, onNext }: StepDetailsProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.35 }}
      className="max-w-lg mx-auto"
    >
      <div className="bg-card rounded-2xl shadow-lg border border-border p-6 md:p-8">
        <div className="bg-primary/10 rounded-xl p-3 mb-6 text-center">
          <p className="text-sm text-muted-foreground">Booking for</p>
          <p className="font-heading text-lg font-bold text-primary">
            {selectedDate.toLocaleDateString("en-IN", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium mb-1.5">{field.label}</label>
              <input
                type={field.type}
                required
                placeholder={field.placeholder}
                value={formData[field.name as keyof FormData]}
                onChange={(e) =>
                  setFormData({ ...formData, [field.name]: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition-all"
              />
            </div>
          ))}
          <div>
            <label className="block text-sm font-medium mb-1.5">Message (Optional)</label>
            <textarea
              rows={3}
              placeholder="Any special requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none resize-none transition-all"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onBack}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-secondary transition-colors"
            >
              <ArrowLeft size={16} /> Back
            </button>
            <button type="submit" className="btn-gold flex-1">
              Review Booking →
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default StepDetails;
