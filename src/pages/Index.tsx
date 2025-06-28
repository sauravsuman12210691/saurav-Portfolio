
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Experience from "../components/portfolio/Experience";
import Projects from "../components/portfolio/Projects";
import Skills from "../components/portfolio/Skills";
import Education from "../components/portfolio/Education";
import Contact from "../components/portfolio/Contact";
import Navigation from "../components/portfolio/Navigation";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "skills", "education", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen text-white">
      <Navigation activeSection={activeSection} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about" className="py-20">
          <About />
        </section>
        
        <section id="experience" className="py-20">
          <Experience />
        </section>
        
        <section id="projects" className="py-20">
          <Projects />
        </section>
        
        <section id="skills" className="py-20">
          <Skills />
        </section>
        
        <section id="education" className="py-20">
          <Education />
        </section>
        
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </motion.div>
    </div>
  );
};

export default Index;
