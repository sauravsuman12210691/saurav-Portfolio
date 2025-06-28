
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experience = {
    company: "Neartocollege",
    position: "Full Stack Developer",
    duration: "Feb 2024 – Present",
    location: "Remote",
    achievements: [
      "Engineered and maintained a full-stack MERN web application, handling both front-end and back-end tasks",
      "Designed and integrated 25+ RESTful APIs, reducing data fetch latency by 30% through optimized architecture",
      "Enhanced MongoDB performance with index optimization and aggregation pipelines, boosting efficiency by 40%",
      "Developed responsive and dynamic React.js interfaces, leading to a 25% increase in user engagement",
      "Deployed application on AWS with auto-scaling and CI/CD pipelines, ensuring 99.9% uptime and seamless scalability",
      "Integrated Razorpay for secure and seamless payment processing, increasing transaction success rate by 20%",
      "Implemented key security best practices and performance enhancements to support a growing user base effectively"
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "AWS (EC2, S3)", "Razorpay"]
  };

  return (
    <div className="container mx-auto px-6 bg-slate-900/50 py-16 rounded-lg">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Building robust, scalable applications with modern technologies
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <Card className="bg-slate-800/80 border-slate-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 shadow-2xl">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <motion.h3 
                  className="text-2xl font-bold text-white mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  {experience.position}
                </motion.h3>
                <motion.div 
                  className="text-xl text-blue-400 font-semibold mb-2"
                  whileHover={{ x: 10 }}
                >
                  {experience.company}
                </motion.div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Calendar size={16} />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin size={16} />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-cyan-400 mb-4">Key Achievements</h4>
              <div className="space-y-3">
                {experience.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <motion.div 
                      className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                    />
                    <p className="text-gray-300 leading-relaxed">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {experience.techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="bg-slate-700/60 text-blue-300 border-blue-500/30 hover:bg-slate-600/60 transition-colors"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Experience;
