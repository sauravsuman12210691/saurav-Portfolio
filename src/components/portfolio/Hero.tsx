
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/sauravsuman12210691", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/sauravsuman1610", label: "LinkedIn" },
    { icon: Mail, href: "mailto:sauravsrivastav9876@gmail.com", label: "Email" },
  ];

  // Fixed bubble animation variants with proper typing
  const bubbleAnimationProps = {
    y: [0, -20, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  const floatingBubbles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    left: Math.random() * 100,
    delay: i * 0.5,
    duration: 4 + Math.random() * 2
  }));

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Profile Image Corner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 50, y: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-24 right-8 z-20"
      >
        <div className="relative">
          <Avatar className="w-32 h-32 border-4 border-blue-400/50 shadow-2xl">
            <AvatarImage 
              src="/pimg.jpg" 
              alt="Saurav Suman" 
            />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-2xl font-bold">
              SS
            </AvatarFallback>
          </Avatar>
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur opacity-30"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>

      {/* Floating Bubbles */}
      {floatingBubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 backdrop-blur-sm border border-blue-300/20"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -100, -20],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.5, 1],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Saurav Suman
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Full Stack Developer & AI Enthusiast
          </motion.p>
          
          <motion.div
            className="flex items-center justify-center gap-4 text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Patna, Bihar</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 9507919802</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              animate={bubbleAnimationProps}
              style={{ animationDelay: `${index * 0.2}s` }}
              whileHover={{ 
                scale: 1.2,
                rotate: 360,
                backgroundColor: "rgba(59, 130, 246, 0.2)"
              }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300"
            >
              <link.icon size={24} className="text-blue-400" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator with Bubble Animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={bubbleAnimationProps}
      >
        <div className="w-1 h-16 bg-gradient-to-b from-blue-400 to-transparent rounded-full" />
      </motion.div>
    </div>
  );
};

export default Hero;
