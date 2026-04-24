import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const navItems = [
  "Home", "About", "Experience", "Projects", "Skills", "Certifications", "Education", "Contact",
];

interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;
}

const MobileSidebar = ({ open, onClose }: MobileSidebarProps) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* Sidebar */}
          <motion.nav
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 z-[70] w-72 bg-slate-deep border-r border-divider flex flex-col"
            role="navigation"
            aria-label="Mobile navigation"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-divider">
              <span className="text-xl font-serif font-bold gradient-gold-text">CL</span>
              <button
                onClick={onClose}
                className="p-2 text-platinum/60 hover:text-primary transition-colors"
                aria-label="Close navigation"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 py-6 px-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <Link
                    to={item}
                    spy
                    smooth
                    offset={-80}
                    duration={800}
                    onClick={onClose}
                    activeClass="!text-primary !bg-primary/10"
                    className="block px-4 py-3 rounded-lg text-platinum/70 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer text-base"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        onClose();
                      }
                    }}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-6 border-t border-divider">
              <p className="text-xs text-muted-foreground text-center">
                © {new Date().getFullYear()} Chandana Lingala
              </p>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileSidebar;
