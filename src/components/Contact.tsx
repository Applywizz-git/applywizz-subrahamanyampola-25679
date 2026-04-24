import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, CheckCircle, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Confetti effect
    createConfetti();

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const createConfetti = () => {
    const colors = ["#B8965A", "#D8C6A4", "#D9D9D9"];
    for (let i = 0; i < 40; i++) {
      const confetti = document.createElement("div");
      confetti.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        width: ${Math.random() * 8 + 4}px;
        height: ${Math.random() * 8 + 4}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: ${Math.random() > 0.5 ? "50%" : "0"};
        z-index: 9999;
        pointer-events: none;
        animation: confetti-fall ${Math.random() * 2 + 1}s forwards;
      `;
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 3000);
    }
  };

  const InputWrapper = ({
    name,
    icon: Icon,
    label,
    children,
  }: {
    name: string;
    icon: React.ElementType;
    label: string;
    children: React.ReactNode;
  }) => (
    <div className="relative">
      <motion.label
        className={`absolute left-10 transition-all duration-300 pointer-events-none ${focused === name || formData[name as keyof typeof formData]
          ? "top-1 text-xs text-primary"
          : "top-3.5 text-sm text-muted-foreground"
          }`}
        animate={
          focused === name
            ? { y: -4, scale: 0.85, originX: 0 }
            : formData[name as keyof typeof formData]
              ? { y: -4, scale: 0.85, originX: 0 }
              : { y: 0, scale: 1 }
        }
      >
        {label}
      </motion.label>
      <Icon
        className={`absolute left-3 top-3.5 transition-colors ${focused === name ? "text-primary" : "text-muted-foreground"
          }`}
        size={18}
      />
      {children}
    </div>
  );

  return (
    <section id="Contact" className="relative">
      <div className="section-container">
        <h2 className="section-title" data-aos="fade-up">
          <span className="gradient-gold-text">Get In Touch</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Side: Contact Info */}
          <div className="space-y-8" data-aos="fade-right">
            <h3 className="text-2xl font-serif text-platinum mb-6">Let's create something extraordinary together.</h3>

            <div className="space-y-6">
              <a href="tel:(361)-510-5276" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center border border-divider group-hover:border-primary/50 transition-colors">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-platinum group-hover:text-primary transition-colors">(361)-510-5276</p>
                </div>
              </a>

              <a href="mailto:chandanalingala04@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center border border-divider group-hover:border-primary/50 transition-colors">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-platinum group-hover:text-primary transition-colors">chandanalingala04@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/lingalachandana23/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center border border-divider group-hover:border-primary/50 transition-colors">
                  <Linkedin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="text-platinum group-hover:text-primary transition-colors">linkedin.com/in/lingalachandana23</p>
                </div>
              </a>

              <a href="https://github.com/clingala" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center border border-divider group-hover:border-primary/50 transition-colors">
                  <Github className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="text-platinum group-hover:text-primary transition-colors">github.com/clingala</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center border border-divider group-hover:border-primary/50 transition-colors">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-platinum group-hover:text-primary transition-colors">Corpus Christi, TX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div data-aos="fade-left" data-aos-delay="100">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card p-6 md:p-8 space-y-6"
              aria-label="Contact form"
            >
              <InputWrapper name="name" icon={User} label="Your Name">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-charcoal/50 border border-divider rounded-lg pl-10 pr-4 pt-5 pb-2 text-sm text-platinum focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                  aria-label="Your Name"
                />
              </InputWrapper>

              <InputWrapper name="email" icon={Mail} label="Your Email">
                <input
                  type="email"
                  required
                  value={formData.email}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-charcoal/50 border border-divider rounded-lg pl-10 pr-4 pt-5 pb-2 text-sm text-platinum focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                  aria-label="Your Email"
                />
              </InputWrapper>

              <InputWrapper name="message" icon={MessageSquare} label="Your Message">
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-charcoal/50 border border-divider rounded-lg pl-10 pr-4 pt-5 pb-2 text-sm text-platinum focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                  aria-label="Your Message"
                />
              </InputWrapper>

              <motion.button
                type="submit"
                disabled={submitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-lg gradient-gold-bg text-primary-foreground font-semibold flex items-center justify-center gap-2 disabled:opacity-50 transition-all"
              >
                {submitted ? (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", bounce: 0.5 }}
                    >
                      <CheckCircle size={20} />
                    </motion.div>
                    Sent!
                  </>
                ) : (
                  <>
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Send size={18} />
                    </motion.div>
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes confetti-fall {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(${Math.random() > 0.5 ? "" : "-"}${Math.random() * 200}px, ${Math.random() * 400 + 200}px) rotate(${Math.random() * 720}deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
