import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { resumeData } from "@/data/resume";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: resumeData.github, label: "GitHub" },
    { icon: Linkedin, href: resumeData.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${resumeData.email}`, label: "Email" },
  ];

  return (
    <footer className="border-t border-divider bg-deep-slate/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="p-3 rounded-full border border-divider text-platinum/60 hover:text-primary hover:border-primary transition-all glow-hover"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          <motion.p
            className="text-sm text-muted-foreground text-center"
            animate={{
              textShadow: [
                "0 0 0px hsl(38 43% 54% / 0)",
                "0 0 10px hsl(38 43% 54% / 0.3)",
                "0 0 0px hsl(38 43% 54% / 0)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            © {new Date().getFullYear()}{" "}
            <span className="text-primary">{resumeData.name}</span>. All
            rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
