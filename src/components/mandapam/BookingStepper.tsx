import { motion } from "framer-motion";
import { CalendarCheck, UserCircle, ClipboardCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingStepperProps {
  currentStep: number;
}

const steps = [
  { icon: CalendarCheck, label: "Select Date" },
  { icon: UserCircle, label: "Your Details" },
  { icon: ClipboardCheck, label: "Confirm Booking" },
];

const BookingStepper = ({ currentStep }: BookingStepperProps) => {
  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: currentStep === i ? 1.15 : 1 }}
              className={cn(
                "w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                currentStep > i
                  ? "bg-primary border-primary text-primary-foreground"
                  : currentStep === i
                  ? "bg-primary/10 border-primary text-primary"
                  : "bg-secondary border-border text-muted-foreground"
              )}
            >
              <step.icon size={22} />
            </motion.div>
            <span
              className={cn(
                "text-xs mt-2 font-medium whitespace-nowrap",
                currentStep >= i ? "text-primary" : "text-muted-foreground"
              )}
            >
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={cn(
                "w-12 md:w-24 h-0.5 mx-2 mt-[-1rem] transition-all duration-300",
                currentStep > i ? "bg-primary" : "bg-border"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default BookingStepper;
