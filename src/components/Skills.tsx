import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import {
  Code2,
  Server,
  Cloud,
  Layout,
  Shield,
  Database,
  GitBranch,
  Radio,
  Settings,
} from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Programming Languages": <Code2 size={20} />,
  "Backend & Microservices": <Server size={20} />,
  "Spring Cloud & Service Governance": <Settings size={20} />,
  "Frontend": <Layout size={20} />,
  "API Management & Security": <Shield size={20} />,
  "Cloud & Containerization": <Cloud size={20} />,
  "Messaging & Streaming": <Radio size={20} />,
  "Databases": <Database size={20} />,
  "CI/CD & Monitoring": <GitBranch size={20} />,
};

const Skills = () => {
  return (
    <section id="Skills" className="relative">
      <div className="section-container">
        <h2 className="section-title" data-aos="fade-up">
          <span className="gradient-gold-text">Technical Skills</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(resumeData.skills).map(([category, skills], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-5 hover:border-primary/30 transition-all duration-300 group"
              data-aos="zoom-in"
              data-aos-delay={i * 50}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  {categoryIcons[category] || <Code2 size={20} />}
                </div>
                <h3 className="font-serif font-semibold text-sm text-platinum">
                  {category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    className="skill-chip text-xs"
                    whileHover={{
                      scale: 1.08,
                      rotate: [0, -2, 2, 0],
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.02 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
