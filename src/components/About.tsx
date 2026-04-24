import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { resumeData } from "@/data/resume";

const AnimatedCounter = ({ target, label }: { target: number; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = duration / target;
    const timer = setInterval(() => {
      start++;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-serif font-bold text-primary">
        {count}{label.toLowerCase().includes("accuracy") || label.toLowerCase().includes("gain") ? "%" : "+"}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

const skillBars = [
  { name: "Machine Learning / AI", level: 95 },
  { name: "Generative AI & LLMs", level: 92 },
  { name: "Python & Data Science", level: 90 },
  { name: "NLP & Computer Vision", level: 88 },
  { name: "MLOps & Deployment", level: 85 },
];

const About = () => {
  return (
    <section id="About" className="relative">
      <div className="section-container">
        <h2 className="section-title" data-aos="fade-up">
          <span className="gradient-gold-text">About Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Summary */}
          <div data-aos="fade-right">
            <div className="space-y-4">
              {resumeData.summary.map((para, i) => (
                <p
                  key={i}
                  className="text-platinum/80 leading-relaxed text-sm md:text-base"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Counters + Bars */}
          <div data-aos="fade-left" className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
              {resumeData.stats.map((stat) => (
                <AnimatedCounter
                  key={stat.label}
                  target={stat.value}
                  label={stat.label}
                />
              ))}
            </div>

            <div className="space-y-5">
              {skillBars.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm text-platinum/80">{skill.name}</span>
                    <span className="text-xs text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-charcoal rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full shimmer relative"
                      style={{
                        background: "linear-gradient(90deg, hsl(38 43% 54%), hsl(39 43% 75%))",
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.15, ease: "easeOut" }}
                      whileHover={{ scaleX: 1.02 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
