import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "919949708345";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam protection: cooldown per phone
    const phone = form.phone.replace(/\D/g, "");
    const lastSubmit = localStorage.getItem(`contact_last_submit_${phone}`);
    if (lastSubmit) {
      const elapsed = Date.now() - parseInt(lastSubmit, 10);
      if (elapsed < 60000) {
        const remaining = Math.ceil((60000 - elapsed) / 1000);
        toast.error(`Please wait ${remaining} seconds before sending another message.`);
        return;
      }
    }

    setIsSubmitting(true);

    // Build WhatsApp message
    const message = [
      "📞 *New Contact Enquiry*",
      "",
      `👤 *Name:* ${form.name}`,
      `📞 *Phone:* ${form.phone}`,
      form.email ? `📧 *Email:* ${form.email}` : "",
      `💬 *Message:* ${form.message}`,
    ].filter(Boolean).join("\n");

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");

    // Record cooldown
    localStorage.setItem(`contact_last_submit_${phone}`, String(Date.now()));

    toast.success("Your message has been sent successfully!");
    setForm({ name: "", phone: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 section-padding">
        <div className="container mx-auto">
          <SectionHeading title="Contact Us" subtitle="Get in touch for bookings and inquiries" />

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-heading text-2xl font-bold">Get In Touch</h3>
              <p className="text-muted-foreground">
                Ready to plan your event? Contact us today for a free consultation and quote.
              </p>

              {[
                { icon: Phone, label: "Phone", value: "+91 9618678345", href: "tel:+919618678345" },
                { icon: MessageCircle, label: "WhatsApp", value: "+91 9949708345", href: "https://wa.me/919949708345" },
                { icon: Mail, label: "Email", value: "info@bharathtenthouse.com", href: "mailto:info@bharathtenthouse.com" },
                { icon: MapPin, label: "Location", value: "Konaseema, Andhra Pradesh" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <item.icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <a
                href="https://wa.me/919949708345?text=Hello%2C%20I%20want%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-card p-8 rounded-2xl shadow-lg space-y-4"
            >
              {[
                { name: "name", label: "Name", type: "text" },
                { name: "phone", label: "Phone", type: "tel" },
                { name: "email", label: "Email", type: "email" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium mb-1">{field.label}</label>
                  <input
                    type={field.type}
                    required
                    value={form[field.name as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                />
              </div>
              <button type="submit" disabled={isSubmitting} className="btn-gold w-full">
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </motion.form>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.6751234531703!2d82.14897899999998!3d16.683629200000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37f50033732933%3A0x2d2ce9639531b0a8!2sSri%20Manikyamba%20Nilayam!5e1!3m2!1sen!2sin!4v1772720723641!5m2!1sen!2sin" 
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bharath Tent House Location"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
