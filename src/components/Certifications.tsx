import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Award } from "lucide-react";

const Certifications = () => {
  return (
    <section id="Certifications" className="relative">
      <div className="section-container">
        <h2 className="section-title" data-aos="fade-up">
          <span className="gradient-gold-text">Certifications</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {resumeData.certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, rotateY: 5 }}
              className="glass-card p-6 flex flex-col items-center text-center group cursor-default"
              style={{ perspective: 1000 }}
            >
              <motion.div
                className="p-3 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors"
                animate={{
                  boxShadow: [
                    "0 0 0 0 hsl(38 43% 54% / 0)",
                    "0 0 15px 3px hsl(38 43% 54% / 0.3)",
                    "0 0 0 0 hsl(38 43% 54% / 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                <Award className="text-primary" size={24} />
              </motion.div>

              <p className="text-sm text-platinum/90 font-medium leading-relaxed">
                {cert}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
