import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Kalyana Mandapam", path: "/kalyana-mandapam" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-2 md:py-4 px-3">
       <Link to="/" className="flex flex-col leading-tight">
  <span className="font-heading text-lg md:text-2xl font-bold text-primary tracking-wide">
    BHARATH
  </span>
  <span className="text-[8px] md:text-xs tracking-[2px] text-muted-foreground uppercase">
    Tent House & Lighting
  </span>
</Link>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`font-body text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  location.pathname === item.path ? "text-primary border-b-2 border-primary pb-1" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="tel:+919618678345"
              className="btn-gold inline-flex items-center gap-2 !px-5 !py-2.5 text-sm"
            >
              <Phone size={16} />
              Call Now
            </a>
          </li>
        </ul>

        {/* Mobile actions */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:+919618678345"
            className="btn-gold inline-flex items-center gap-1.5 !px-4 !py-2 text-xs"
          >
            <Phone size={14} />
            Call
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <ul className="flex flex-col py-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-6 py-3 font-body text-sm font-medium transition-colors hover:bg-secondary ${
                      location.pathname === item.path ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
