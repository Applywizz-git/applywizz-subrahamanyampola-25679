import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);
  const name = "CHANDANA LINGALA";
  const letters = name.split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 800);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-heritage"
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="flex flex-wrap justify-center gap-x-1 md:gap-x-2 px-4">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                className="text-2xl md:text-5xl lg:text-6xl font-serif font-bold tracking-wider"
                style={{
                  background: "linear-gradient(90deg, hsl(215 5% 64%), hsl(0 0% 93%), hsl(215 5% 64%))",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  y: [20, 0, 0, -10],
                  backgroundPosition: ["0% 0%", "100% 0%", "200% 0%", "200% 0%"],
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.08,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>

          <motion.div
            className="absolute bottom-16 left-1/2 -translate-x-1/2"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-8 h-8 border-2 border-platinum/30 rounded-full border-t-platinum animate-spin" />
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-heritage"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      )}
    </AnimatePresence>
  );
};

export default Preloader;
