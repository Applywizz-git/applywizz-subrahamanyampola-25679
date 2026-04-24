import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import MobileSidebar from "@/components/MobileSidebar";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!loading) {
      AOS.init({
        duration: 800,
        once: true,
        easing: "ease-out-cubic",
        offset: 80,
      });
    }
  }, [loading]);

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen bg-heritage overflow-x-hidden">
      {/* Global parallax background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-fixed opacity-30 pointer-events-none"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="fixed inset-0 luxury-bg opacity-90 pointer-events-none" />

      <div className="relative z-10">
        <Header onOpenSidebar={() => setSidebarOpen(true)} />
        <MobileSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main>
          <Hero />
          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
          <About />
          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
          <Experience />
          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
          <Projects />
          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
          <Skills />
          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
          <Certifications />
          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
          <Education />
          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Index;
