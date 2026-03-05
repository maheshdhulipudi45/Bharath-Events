import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import BookingStepper from "@/components/mandapam/BookingStepper";
import StepSelectDate from "@/components/mandapam/StepSelectDate";
import StepDetails from "@/components/mandapam/StepDetails";
import StepConfirm from "@/components/mandapam/StepConfirm";
import { Users, Wind, UtensilsCrossed, BedDouble, Car, Zap, Flower2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

import mandapam1 from "@/assets/mandapam-1.jpg";
import mandapam2 from "@/assets/mandapam-2.jpg";
import mandapam3 from "@/assets/mandapam-3.jpg";
import mandapam4 from "@/assets/srimanikyambakalyanmandapam.jpg";

const sliderImages = [mandapam1, mandapam2, mandapam3];

const facilities = [
  { icon: Users, label: "500+ Seating Capacity" },
  { icon: Wind, label: "AC & Non-AC Halls" },
  { icon: UtensilsCrossed, label: "Dining Hall" },
  { icon: BedDouble, label: "Rooms Available" },
  { icon: Car, label: "Parking Facility" },
  { icon: Zap, label: "Generator Backup" },
  { icon: Flower2, label: "Decoration Available" },
];

const WHATSAPP_NUMBER = "917658956116";
const SPAM_COOLDOWN_MS = 60000; // 1 minute between submissions

const getConfirmedBookedDates = (): Date[] => {
  try {
    const stored = localStorage.getItem("confirmedBookedDates");
    if (stored) {
      return JSON.parse(stored).map((d: string) => new Date(d));
    }
  } catch {}
  return [];
};

const KalyanaMandapam = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bookingStep, setBookingStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [formData, setFormData] = useState({ name: "", phone: "", location: "", guests: "", message: "" });
  const [bookedDates, setBookedDates] = useState<Date[]>(getConfirmedBookedDates);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const checkSpamProtection = useCallback((): boolean => {
    const phone = formData.phone.replace(/\D/g, "");
    
    // Check cooldown
    const lastSubmit = localStorage.getItem(`booking_last_submit_${phone}`);
    if (lastSubmit) {
      const elapsed = Date.now() - parseInt(lastSubmit, 10);
      if (elapsed < SPAM_COOLDOWN_MS) {
        const remaining = Math.ceil((SPAM_COOLDOWN_MS - elapsed) / 1000);
        toast.error(`Please wait ${remaining} seconds before submitting another request.`);
        return false;
      }
    }

    // Check duplicate: same phone + same date
    if (selectedDate) {
      const dateKey = selectedDate.toISOString().split("T")[0];
      const dupKey = `booking_${phone}_${dateKey}`;
      if (localStorage.getItem(dupKey)) {
        toast.error("You have already sent a booking request for this date.");
        return false;
      }
    }

    return true;
  }, [formData.phone, selectedDate]);

  const handleConfirm = () => {
    if (!checkSpamProtection()) return;
    if (!selectedDate) return;

    const phone = formData.phone.replace(/\D/g, "");
    const dateStr = selectedDate.toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    // Build WhatsApp message
    const message = [
      "🏛 *Kalyana Mandapam Booking Request*",
      "",
      `👤 *Name:* ${formData.name}`,
      `📞 *Phone:* ${formData.phone}`,
      `📅 *Event Date:* ${dateStr}`,
      `📍 *Location:* ${formData.location}`,
      `👥 *Guests:* ${formData.guests}`,
      formData.message ? `💬 *Message:* ${formData.message}` : "",
      "",
      "Please confirm this booking.",
    ].filter(Boolean).join("\n");

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");

    // Record spam prevention
    const dateKey = selectedDate.toISOString().split("T")[0];
    localStorage.setItem(`booking_last_submit_${phone}`, String(Date.now()));
    localStorage.setItem(`booking_${phone}_${dateKey}`, "sent");

    toast.success("Your booking request has been sent. Waiting for admin confirmation.");

    // Reset form
    setBookingStep(0);
    setSelectedDate(undefined);
    setFormData({ name: "", phone: "", location: "", guests: "", message: "" });
  };

  const resetBooking = () => {
    setBookingStep(0);
    setSelectedDate(undefined);
    setFormData({ name: "", phone: "", location: "", guests: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Slider */}
      <section className="relative h-[70vh] overflow-hidden">
        {sliderImages.map((img, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: currentSlide === i ? 1 : 0,
              scale: currentSlide === i ? 1.05 : 1,
            }}
            transition={{ duration: 1.2 }}
          >
            <img src={img} alt={`Mandapam ${i + 1}`} className="w-full h-full object-cover" />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-card mb-4">
              Bharath Kalyana Mandapam
            </h1>
            <p className="text-card/80 text-lg mb-6">The perfect venue for your dream wedding</p>
            <a href="#booking" className="btn-gold">Book Your Mandapam</a>
          </motion.div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {sliderImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                currentSlide === i ? "bg-primary w-8" : "bg-card/50"
              )}
            />
          ))}
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <SectionHeading title="Mandapam Facilities" subtitle="Everything you need for a grand celebration" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {facilities.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-secondary"
              >
                <f.icon className="text-primary mb-2" size={32} />
                <span className="text-sm font-medium">{f.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="section-padding bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading
            title="Book Your Date"
            subtitle="3 simple steps to reserve your mandapam"
          />

          <BookingStepper currentStep={bookingStep} />

          <AnimatePresence mode="wait">
            {bookingStep === 0 && (
              <StepSelectDate
                key="step-date"
                selectedDate={selectedDate}
                onDateSelect={handleDateSelect}
                bookedDates={bookedDates}
                onNext={() => setBookingStep(1)}
              />
            )}
            {bookingStep === 1 && selectedDate && (
              <StepDetails
                key="step-details"
                formData={formData}
                setFormData={setFormData}
                selectedDate={selectedDate}
                onBack={() => setBookingStep(0)}
                onNext={() => setBookingStep(2)}
              />
            )}
            {bookingStep === 2 && selectedDate && (
              <StepConfirm
                key="step-confirm"
                formData={formData}
                selectedDate={selectedDate}
                onBack={() => setBookingStep(1)}
                onConfirm={handleConfirm}
              />
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KalyanaMandapam;
