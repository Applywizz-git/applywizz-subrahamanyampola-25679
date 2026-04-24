import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-heritage flex items-center justify-center luxury-bg">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-8xl font-serif font-bold gradient-gold-text mb-4">
          404
        </h1>
        <p className="text-platinum/60 mb-8 text-lg">Page not found</p>
        <Link
          to="/"
          className="px-6 py-3 rounded-lg gradient-gold-bg text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/20 transition-shadow"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
