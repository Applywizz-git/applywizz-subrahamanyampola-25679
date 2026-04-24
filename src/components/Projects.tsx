import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { resumeData } from "@/data/resume";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = resumeData.projects[activeIndex];

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % resumeData.projects.length);
  const prev = () =>
    setActiveIndex(
      (prev) =>
        (prev - 1 + resumeData.projects.length) % resumeData.projects.length
    );

  return (
    <section id="Projects" className="relative">
      <div className="section-container">
        <h2 className="section-title" data-aos="fade-up">
          <span className="gradient-gold-text">Projects</span>
        </h2>

        {/* Top navigation buttons */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {resumeData.projects.map((p, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveIndex(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 border ${
                activeIndex === i
                  ? "gradient-gold-bg text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "border-divider text-platinum/70 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {p.title}
            </motion.button>
          ))}
        </div>

        {/* Project card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="glass-card overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left - Image */}
              <div className="relative overflow-hidden aspect-video md:aspect-auto">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden md:block" />
              </div>

              {/* Right - Description */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-4">
                  {project.title}
                </h3>

                <div className="space-y-3 mb-6">
                  {project.description.map((d, i) => (
                    <p key={i} className="text-sm text-platinum/80 leading-relaxed">
                      {d}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="skill-chip text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Chevron navigation */}
        <div className="flex justify-center gap-4 mt-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="p-3 rounded-full border border-divider hover:border-primary text-platinum/60 hover:text-primary transition-all"
            aria-label="Previous project"
          >
            <ChevronLeft size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="p-3 rounded-full border border-divider hover:border-primary text-platinum/60 hover:text-primary transition-all"
            aria-label="Next project"
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
