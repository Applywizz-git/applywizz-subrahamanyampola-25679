import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="Education" className="relative">
      <div className="section-container">
        <h2 className="section-title" data-aos="fade-up">
          <span className="gradient-gold-text">Education</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {resumeData.education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <motion.div
                className="inline-flex p-4 rounded-full bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  animate={{
                    filter: [
                      "drop-shadow(0 0 0px hsl(38 43% 54% / 0))",
                      "drop-shadow(0 0 8px hsl(38 43% 54% / 0.5))",
                      "drop-shadow(0 0 0px hsl(38 43% 54% / 0))",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <GraduationCap className="text-primary" size={32} />
                </motion.div>
              </motion.div>

              <h3 className="text-lg font-serif font-bold text-platinum mb-2">
                {edu.degree}
              </h3>
              <p className="text-sm text-primary/80">{edu.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
