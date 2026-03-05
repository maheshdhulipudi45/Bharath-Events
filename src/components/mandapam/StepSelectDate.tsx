import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { CheckCircle2, XCircle, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepSelectDateProps {
  selectedDate: Date | undefined;
  onDateSelect: (date: Date | undefined) => void;
  bookedDates: Date[];
  onNext: () => void;
}

const isDateBooked = (date: Date, bookedDates: Date[]) => {
  return bookedDates.some(
    (d) =>
      d.getDate() === date.getDate() &&
      d.getMonth() === date.getMonth() &&
      d.getFullYear() === date.getFullYear()
  );
};

const StepSelectDate = ({ selectedDate, onDateSelect, bookedDates, onNext }: StepSelectDateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col items-center"
    >
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-2 mb-6 inline-flex items-center gap-2 text-sm text-primary font-medium">
        <CalendarDays size={16} />
        Pick your event date
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-6">
        <span className="flex items-center gap-2 text-sm">
          <CheckCircle2 size={16} className="text-green-600" /> Available
        </span>
        <span className="flex items-center gap-2 text-sm">
          <XCircle size={16} className="text-destructive" /> Booked
        </span>
      </div>

      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={onDateSelect}
        disabled={(date) => date < new Date() || isDateBooked(date, bookedDates)}
        modifiers={{ booked: bookedDates }}
        modifiersStyles={{
          booked: {
            backgroundColor: "hsl(0 84% 60%)",
            color: "white",
            borderRadius: "50%",
            opacity: 0.7,
          },
        }}
        className="p-3 pointer-events-auto rounded-2xl border border-border shadow-lg bg-card"
      />

      {selectedDate && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-muted-foreground mb-3">
            Selected:{" "}
            <span className="font-semibold text-foreground">
              {selectedDate.toLocaleDateString("en-IN", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </p>
          <button onClick={onNext} className="btn-gold px-8">
            Continue →
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default StepSelectDate;
