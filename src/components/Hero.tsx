// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Download, ArrowDown } from "lucide-react";
// import { Link } from "react-scroll";
// import heroBg from "@/assets/hero-bg.jpg";
// import profilePhoto from "@/assets/profile-photo.jpg";

// const techCycle = ["React", "javascript", "TypeScript", "Cloud"];

// const Hero = () => {
//   const [currentTech, setCurrentTech] = useState(0);
//   const [displayText, setDisplayText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentWord = techCycle[currentTech];
//     let timeout: NodeJS.Timeout;

//     if (!isDeleting) {
//       if (displayText.length < currentWord.length) {
//         timeout = setTimeout(() => setDisplayText(currentWord.slice(0, displayText.length + 1)), 100);
//       } else {
//         timeout = setTimeout(() => setIsDeleting(true), 1500);
//       }
//     } else {
//       if (displayText.length > 0) {
//         timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 60);
//       } else {
//         setIsDeleting(false);
//         setCurrentTech((prev) => (prev + 1) % techCycle.length);
//       }
//     }

//     return () => clearTimeout(timeout);
//   }, [displayText, isDeleting, currentTech]);

//   return (
//     <section
//       id="Home"
//       className="relative min-h-screen flex items-center overflow-hidden"
//     >
//       {/* Parallax BG */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-fixed"
//         style={{ backgroundImage: `url(${heroBg})` }}
//       >
//         <div className="absolute inset-0 luxury-bg opacity-80" />
//       </div>

//       <div className="relative z-10 section-container w-full">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left - Text */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <motion.p
//               className="text-primary text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-sans"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//             >
//               Senior Java Full Stack Developer
//             </motion.p>

//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 text-platinum text-3d">
//               Building Scalable
//               <br />
//               Web Apps with
//               <br />
//               <span className="gradient-gold-text">Modern Tech</span>
//             </h1>

//             <motion.p
//               className="text-platinum/80 text-lg mb-8 leading-relaxed max-w-lg"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//             >
//               Architecting high-availability enterprise systems with Java, Spring Boot, and Cloud technologies.
//               Specialized in modernizing legacy monoliths into scalable microservices ecosystems.
//               Dedicated to delivering secure, compliant, and performant digital solutions.
//             </motion.p>


//             <div className="flex items-center gap-2 mb-8 font-mono text-lg md:text-xl text-champagne">
//               <span className="text-primary">&gt;</span>
//               <span>{displayText}</span>
//               <span
//                 className="inline-block w-0.5 h-6 bg-primary"
//                 style={{ animation: "typewriter-blink 1s step-end infinite" }}
//               />
//             </div>

//             <div className="flex flex-wrap gap-4">
//               <Link
//                 to="Projects"
//                 smooth
//                 offset={-80}
//                 duration={800}
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-6 py-3 rounded-lg gradient-gold-bg text-primary-foreground font-semibold flex items-center gap-2 transition-shadow hover:shadow-lg hover:shadow-primary/20"
//                 >
//                   View Projects
//                   <ArrowDown size={18} />
//                 </motion.button>
//               </Link>

//               <a href="/ravindra_babu_resume.pdf" download>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-6 py-3 rounded-lg border border-primary/50 text-primary font-semibold flex items-center gap-2 hover:bg-primary/10 transition-colors"
//                 >
//                   Download Resume
//                   <Download size={18} />
//                 </motion.button>
//               </a>
//             </div>
//           </motion.div>

//           {/* Right - Profile */}
//           <motion.div
//             className="flex justify-center lg:justify-end"
//             initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
//             animate={{ opacity: 1, scale: 1, rotate: 0 }}
//             transition={{
//               duration: 0.8,
//               delay: 0.3,
//               type: "spring",
//               bounce: 0.4,
//             }}
//           >
//             <motion.div
//               className="relative preserve-3d"
//               whileHover={{
//                 rotateY: 15,
//                 rotateX: -10,
//                 scale: 1.05,
//               }}
//               initial={{ transform: "perspective(1000px) rotateY(0deg) rotateX(0deg)" }}
//               transition={{ type: "spring", stiffness: 100, damping: 20 }}
//               style={{ transformStyle: "preserve-3d" }}
//             >
//               {/* Back Layer (Depth) */}
//               <div
//                 className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary opacity-60 blur-md transform translate-z-[-20px] scale-95"
//                 style={{ transform: "translateZ(-30px)" }}
//               />

//               {/* Middle Layer (Border) */}
//               <div
//                 className="absolute -inset-2 rounded-2xl border border-accent/30 bg-card/20 backdrop-blur-sm transform translate-z-[-10px]"
//                 style={{ transform: "translateZ(-15px)" }}
//               />

//               {/* Main Image Layer */}
//               <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-primary/50 shadow-2xl shadow-primary/20 backdrop-blur-md bg-card/10 relative z-10">
//                 <img
//                   src={profilePhoto}
//                   alt="Ravindra Babu Bejjanki"
//                   className="w-full h-full object-cover"
//                   loading="eager"
//                 />

//                 {/* Overlay Glint */}
//                 <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
//               </div>

//               {/* Front Floating Element (Floating Badge) */}
//               <motion.div
//                 className="absolute -bottom-6 -right-6 px-6 py-3 bg-card/90 backdrop-blur-xl border border-accent/50 rounded-xl shadow-xl z-20"
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                 style={{ transform: "translateZ(30px)" }}
//               >
//                 <span className="text-accent font-mono font-bold">9+ Years Exp</span>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 -translate-x-1/2"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//       >
//         <ArrowDown className="text-primary/50" size={24} />
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;










































import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import { Link } from "react-scroll";
import heroBg from "@/assets/hero-bg.jpg";
const profilePhoto = "/profile.jpeg";
import { resumeData } from "@/data/resume";

const techCycle = ["Python", "TensorFlow", "PyTorch", "NLP"];

const Hero = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [greetingText, setGreetingText] = useState("");
  const [greetingComplete, setGreetingComplete] = useState(false);

  // Greeting typing effect
  useEffect(() => {
    const greeting = `Hi, I'm ${resumeData.name}`;
    if (greetingText.length < greeting.length) {
      const timeout = setTimeout(() => {
        setGreetingText(greeting.slice(0, greetingText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setGreetingComplete(true);
    }
  }, [greetingText]);

  // Tech stack typing effect (starts after greeting)
  useEffect(() => {
    if (!greetingComplete) return;

    const currentWord = techCycle[currentTech];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => setDisplayText(currentWord.slice(0, displayText.length + 1)), 100);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1500);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 60);
      } else {
        setIsDeleting(false);
        setCurrentTech((prev) => (prev + 1) % techCycle.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTech, greetingComplete]);

  return (
    <section
      id="Home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Parallax BG */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 luxury-bg opacity-80" />
      </div>

      <div className="relative z-10 section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Greeting with typing effect */}
            <motion.div
              className="text-2xl sm:text-4xl md:text-5xl font-serif mb-4 text-platinum"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span>{greetingText}</span>
              {!greetingComplete && (
                <span
                  className="inline-block w-0.5 h-8 md:h-10 bg-primary ml-1"
                  style={{ animation: "typewriter-blink 1s step-end infinite" }}
                />
              )}
            </motion.div>

            <motion.p
              className="text-primary text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-sans"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              AI & ML Engineer
            </motion.p>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 text-platinum text-3d">
              Enterprise AI
              <br />
              Pipelines with
              <br />
              <span className="gradient-gold-text">Machine Learning</span>
            </h1>

            <motion.p
              className="text-platinum/80 text-lg mb-8 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Artificial Intelligence and Machine Learning Engineer with 3+ years of experience supporting data processing pipelines, dataset validation workflows, and machine learning–ready analytics environments across financial and healthcare platforms.
            </motion.p>


            <div className="flex items-center gap-2 mb-8 font-mono text-lg md:text-xl text-champagne">
              <span className="text-primary">&gt;</span>
              <span>{displayText}</span>
              <span
                className="inline-block w-0.5 h-6 bg-primary"
                style={{ animation: "typewriter-blink 1s step-end infinite" }}
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="Projects"
                smooth
                offset={-80}
                duration={800}
                className="w-full sm:w-auto"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-4 sm:px-6 py-3 rounded-lg gradient-gold-bg text-primary-foreground font-semibold flex items-center justify-center gap-2 transition-shadow hover:shadow-lg hover:shadow-primary/20 text-sm sm:text-base"
                >
                  View Projects
                  <ArrowDown size={18} />
                </motion.button>
              </Link>

              <a href={resumeData.resumeUrl} download className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-4 sm:px-6 py-3 rounded-lg border border-primary/50 text-primary font-semibold flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors text-sm sm:text-base"
                >
                  Download Resume
                  <Download size={18} />
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* Right - Profile */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              bounce: 0.4,
            }}
          >
            <motion.div
              className="relative preserve-3d"
              whileHover={{
                rotateY: 15,
                rotateX: -10,
                scale: 1.05,
              }}
              initial={{ transform: "perspective(1000px) rotateY(0deg) rotateX(0deg)" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Back Layer (Depth) */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary opacity-60 blur-md transform translate-z-[-20px] scale-95"
                style={{ transform: "translateZ(-30px)" }}
              />

              {/* Middle Layer (Border) */}
              <div
                className="absolute -inset-2 rounded-2xl border border-accent/30 bg-card/20 backdrop-blur-sm transform translate-z-[-10px]"
                style={{ transform: "translateZ(-15px)" }}
              />

              {/* Main Image Layer */}
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-primary/50 shadow-2xl shadow-primary/20 backdrop-blur-md bg-card/10 relative z-10">
                <img
                  src={profilePhoto}
                  alt={resumeData.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                />

                {/* Overlay Glint */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Front Floating Element (Floating Badge) */}
              <motion.div
                className="absolute -bottom-6 -right-6 px-6 py-3 bg-card/90 backdrop-blur-xl border border-accent/50 rounded-xl shadow-xl z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: "translateZ(30px)" }}
              >
                <span className="text-accent font-mono font-bold">3+ Years Exp</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-primary/50" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;

