import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="Experience" className="relative">
      <div className="section-container">
        <h2 className="section-title" data-aos="fade-up">
          <span className="gradient-gold-text">Experience</span>
        </h2>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-0.5" />

          <div className="space-y-12">
            {resumeData.experience.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } items-start gap-8`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-6 z-10 shadow-lg shadow-primary/30" />
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-primary/20 rounded-full -translate-x-3 mt-4.5 z-0 animate-pulse-glow" />

                  {/* Spacer for mobile */}
                  <div className="md:hidden w-8" />

                  {/* Card */}
                  <div
                    className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] glass-card p-6 hover:border-primary/30 transition-all duration-300 group ${
                      isLeft ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <Briefcase className="text-primary mt-0.5 shrink-0" size={18} />
                      <div>
                        <h3 className="text-lg font-serif font-bold text-platinum group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-primary text-sm font-semibold">
                          {exp.company}
                          {exp.location && ` | ${exp.location}`}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {exp.dates}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="text-xs md:text-sm text-platinum/70 leading-relaxed flex gap-2"
                        >
                          <span className="text-primary mt-1 shrink-0">▹</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-xs rounded-full border border-primary/20 text-primary/80 hover:border-primary hover:text-primary hover:shadow-sm hover:shadow-primary/20 transition-all cursor-default"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
