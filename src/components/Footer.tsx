import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-gradient text-cream py-16 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-gold-light mb-4">Bharath Tent House</h3>
          <p className="text-cream/80 text-sm leading-relaxed text-justify">
            Premium wedding decoration, tent house, lighting and event rental services. 
            Serving Konaseema & nearby areas with 15+ years of experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-gold-light mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Kalyana Mandapam", path: "/kalyana-mandapam" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-cream/70 hover:text-gold-light text-sm transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold text-gold-light mb-4">Services</h3>
          <ul className="space-y-2 text-cream/70 text-sm">
            <li>Tent House Setup</li>
            <li>Wedding Lighting</li>
            <li>Event Rentals</li>
            <li>Kalyana Mandapam</li>
            <li>Sound & DJ Setup</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold text-gold-light mb-4">Contact</h3>
          <ul className="space-y-3 text-cream/80 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-gold-light" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-gold-light" />
              info@bharathtenthouse.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-gold-light mt-0.5" />
              Konaseema, Andhra Pradesh
            </li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-cream/60 hover:text-gold-light transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-cream/60 hover:text-gold-light transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-cream/60 hover:text-gold-light transition-colors"><Youtube size={20} /></a>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10 pt-6 border-t border-cream/10 text-center text-cream/50 text-xs">
        © 2024 Bharath Tent House & Lighting. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
