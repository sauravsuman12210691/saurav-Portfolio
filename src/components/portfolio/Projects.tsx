
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Grocky: AI-Powered Job Interview Platform",
      domain: "Career & EdTech",
      description: "Built a full-stack job interview simulator with real-time AI voice interactions using Vapi AI and Next.js. Integrated Google Gemini for generating personalized feedback and improvement insights after each mock interview session.",
      technologies: ["Next.js", "Tailwind CSS", "Firebase", "Vapi AI", "Google Gemini", "Zod", "shadcn/ui"],
      features: [
        "Real-time AI voice interactions",
        "Personalized feedback generation",
        "Secure authentication with Firebase",
        "Responsive UI with Tailwind CSS"
      ],
      liveUrl: "https://grocky.vercel.app/sign-in",
      githubUrl: "https://github.com/sauravsuman12210691/grocky",
      gradient: "from-purple-600 to-blue-600",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    },
    {
      title: "Event Email Scheduler",
      domain: "Productivity",
      description: "Developed a productivity tool that connects to Gmail using Google OAuth to extract and filter event-related emails. Implemented AI-powered classification and display of emails based on event context.",
      technologies: ["Node.js", "Express.js", "Google OAuth", "React.js", "MongoDB"],
      features: [
        "Gmail API integration",
        "AI-powered email classification",
        "NLP-based email sorting",
        "Secure OAuth authentication"
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/sauravsuman12210691/email-event-app",
      gradient: "from-green-600 to-teal-600",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      title: "YourTeacher (TubeAcademy)",
      domain: "EdTech Platform",
      description: "Developed for TubeAcademy, tailored for students of classes 9 to 12. Built a full-stack MERN web app with role-based logins for admin, teachers, and students with real-time query resolution.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      features: [
        "Role-based authentication",
        "Real-time query resolution",
        "Structured course access",
        "User dashboards"
      ],
      liveUrl: "https://tube-academy.vercel.app/",
      githubUrl: "https://github.com/sauravsuman12210691/Your-Teacher",
      gradient: "from-orange-600 to-red-600",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
    }
  ];

  return (
    <div className="container mx-auto px-6 relative">
      {/* Floating Bubbles for Projects Section */}
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-blue-400/10 to-cyan-400/10 backdrop-blur-sm border border-blue-300/10"
          style={{
            width: Math.random() * 40 + 20,
            height: Math.random() * 40 + 20,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Innovative solutions built with modern technologies and AI integration
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ 
              scale: 1.02,
              rotateY: 5,
            }}
            className="h-full"
          >
            <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 h-full flex flex-col overflow-hidden">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-blue-400 mb-2">
                  {project.title}
                </CardTitle>
                <Badge 
                  variant="secondary" 
                  className="bg-cyan-600/20 text-cyan-300 border-cyan-400/30 w-fit"
                >
                  {project.domain}
                </Badge>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-300 mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <motion.div 
                          className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                        />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-300 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge 
                          variant="outline" 
                          className="text-xs border-blue-400/30 text-blue-300 hover:bg-blue-400/10"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-400/30 text-blue-300 hover:bg-blue-400/10"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={16} />
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
