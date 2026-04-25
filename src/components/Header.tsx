import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { resumeData } from "@/data/resume";

const navItems = [
  "Home", "About", "Experience", "Projects", "Skills", "Certifications", "Education", "Contact",
];

const Header = ({ onOpenSidebar }: { onOpenSidebar: () => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-2 backdrop-blur-xl bg-heritage/80 shadow-lg shadow-black/20"
            : "py-4 backdrop-blur-md bg-heritage/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="Home"
              smooth
              duration={800}
              className="cursor-pointer"
            >
              <span className="text-xl md:text-2xl font-serif font-bold gradient-gold-text">
                {resumeData.name.split(' ').map(n => n[0]).join('')}
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                <Link
                  to={item}
                  spy
                  smooth
                  offset={-80}
                  duration={800}
                  activeClass="!text-primary"
                  className="px-3 py-2 text-sm text-platinum/70 hover:text-primary transition-colors duration-300 cursor-pointer gold-underline"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenSidebar();
            }}
            className="md:hidden p-2 text-platinum hover:text-primary transition-colors"
            aria-label="Open navigation"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
