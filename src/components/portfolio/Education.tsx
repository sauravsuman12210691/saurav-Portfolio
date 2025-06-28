
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const education = [
    {
      institution: "Lovely Professional University",
      degree: "Computer Science and Engineering",
      duration: "2022-2026",
      location: "Jalandhar, Punjab",
      grade: "CGPA: 7.95",
      status: "Current",
      achievements: ["Dean's List", "Top 10% students"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      institution: "Bd College Patna",
      degree: "Intermediate With Science",
      duration: "2020-2021",
      location: "Patna, Bihar",
      grade: "Percentage: 76.6%",
      status: "Completed",
      achievements: ["Science Stream"],
      color: "from-green-600 to-teal-600"
    },
    {
      institution: "Gyanodaya Gurukul",
      degree: "Matriculation",
      duration: "2018-2019",
      location: "Patna, Bihar",
      grade: "Percentage: 74%",
      status: "Completed",
      achievements: ["Secondary Education"],
      color: "from-purple-600 to-pink-600"
    }
  ];

  const certificates = [
    {
      title: "Generative AI with Large Language Models",
      provider: "Coursera",
      duration: "Mar 2024 – Apr 2024",
      skills: ["AI", "LLM", "Machine Learning"]
    },
    {
      title: "Dynamic Programming and Greedy Algorithms",
      provider: "Coursera",
      duration: "Mar 2024 – Apr 2024",
      skills: ["Algorithms", "Problem Solving"]
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      provider: "Coursera",
      duration: "Jan 2024 – Mar 2024",
      skills: ["Networking", "TCP/IP"]
    },
    {
      title: "Software Development Processes and Methodologies",
      provider: "University of Minnesota, Coursera",
      duration: "Jan 2024 – Mar 2024",
      skills: ["SDLC", "Agile"]
    },
    {
      title: "Fundamentals of Management",
      provider: "Coursera",
      duration: "Jan 2024 – Mar 2024",
      skills: ["Management", "Leadership"]
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
          Education & Certifications
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Continuous learning and academic excellence
        </p>
      </motion.div>

      {/* Education Section */}
      <div className="mb-16">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-blue-400 mb-8 flex items-center gap-3"
        >
          <GraduationCap size={28} />
          Education
        </motion.h3>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex-1">
                      <div className={`w-full h-1 bg-gradient-to-r ${edu.color} rounded-full mb-4`} />
                      <h4 className="text-xl font-bold text-blue-400 mb-2">{edu.institution}</h4>
                      <p className="text-cyan-400 font-semibold mb-2">{edu.degree}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant={edu.status === "Current" ? "default" : "secondary"}
                        className={edu.status === "Current" ? "bg-green-600/20 text-green-400 border-green-400/30" : "bg-blue-600/20 text-blue-300 border-blue-400/30"}
                      >
                        {edu.status}
                      </Badge>
                      <p className="text-lg font-semibold text-cyan-400 mt-2">{edu.grade}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: achIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge 
                          variant="outline" 
                          className="border-yellow-400/30 text-yellow-300 hover:bg-yellow-400/10"
                        >
                          <Award size={12} className="mr-1" />
                          {achievement}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-blue-400 mb-8 flex items-center gap-3"
      >
        <Award size={28} />
        Certifications
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 h-full">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-blue-400 leading-tight">
                  {cert.title}
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="font-medium text-cyan-400">{cert.provider}</span>
                  <span>•</span>
                  <span>{cert.duration}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="bg-purple-600/20 text-purple-300 border-purple-400/30 hover:bg-purple-600/30 transition-colors text-xs"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
