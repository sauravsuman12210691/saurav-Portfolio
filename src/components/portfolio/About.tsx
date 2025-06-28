
import { motion } from "framer-motion";
import { Code, Database, Cloud, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "300+ Problems Solved",
      description: "LeetCode & GeeksForGeeks"
    },
    {
      icon: Database,
      title: "25+ APIs Designed",
      description: "30% latency reduction"
    },
    {
      icon: Cloud,
      title: "99.9% Uptime",
      description: "AWS deployment expertise"
    },
    {
      icon: Zap,
      title: "40% Performance Boost",
      description: "MongoDB optimization"
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I'm a passionate Full Stack Developer with expertise in the MERN stack and modern web technologies. 
          Currently pursuing Computer Science Engineering at Lovely Professional University, I specialize in 
          building scalable web applications with AI integration and cloud deployment.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 h-full">
              <CardContent className="p-6 text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 mb-4"
                >
                  <item.icon size={24} className="text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-gradient-to-r from-slate-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">My Journey</h3>
            <p className="text-gray-300 mb-4">
              As a Full Stack Developer at Neartocollege, I've engineered robust MERN applications, 
              optimized database performance, and deployed scalable solutions on AWS. My passion for 
              AI and modern web technologies drives me to create innovative solutions.
            </p>
            <p className="text-gray-300">
              With a strong foundation in computer science and hands-on experience in various domains 
              including EdTech, Career platforms, and Productivity tools, I'm committed to building 
              technology that makes a difference.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-gray-300">Dean's List - Top 10% at LPU</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span className="text-gray-300">5+ Coursera Certifications</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-gray-300">AI & Machine Learning Enthusiast</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span className="text-gray-300">Cloud & DevOps Practitioner</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
