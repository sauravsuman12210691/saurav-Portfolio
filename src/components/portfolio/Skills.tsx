
import { motion } from "framer-motion";
import { Code, Database, Cloud, Settings, TestTube, GitBranch } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Java", "Python", "C++", "JavaScript"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Database,
      title: "Web Development",
      skills: ["MERN Stack", "Next.js", "PHP", "HTML5", "CSS3", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Backend & Databases",
      skills: ["REST APIs", "Microservices", "gRPC", "MySQL", "MongoDB", "Firebase"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: GitBranch,
      title: "Version Control & CI/CD",
      skills: ["Git", "GitHub", "GitHub Actions"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Settings,
      title: "Software Development",
      skills: ["System Design", "Data Structures & Algorithms", "Agile Methodologies"],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: TestTube,
      title: "Testing Tools",
      skills: ["Postman", "REST Assured", "Playwright (basic)", "BrowserStack (basic)", "Appium (learning)"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Cloud,
      title: "Tools & Platforms",
      skills: ["Docker", "Linux/Unix", "Shell Scripting", "Vercel", "Netlify", "Firebase Hosting"],
      color: "from-gray-500 to-slate-500"
    }
  ];

  const achievements = [
    "Solved 300+ Problems on LeetCode and GeeksForGeeks",
    "Dean's List – Lovely Professional University",
    "Top 10% students academic excellence recognition"
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
          Technical Skills
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          A diverse toolkit for building modern, scalable applications
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, rotateY: 5 }}
            className="h-full"
          >
            <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}
                  >
                    <category.icon size={20} className="text-white" />
                  </motion.div>
                  <CardTitle className="text-lg font-semibold text-blue-400">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
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
                        className="bg-blue-600/20 text-blue-300 border-blue-400/30 hover:bg-blue-600/30 transition-colors text-xs"
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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-gradient-to-r from-slate-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20"
      >
        <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">Key Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 rounded-lg bg-slate-700/30 border border-blue-500/10"
            >
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-3" />
              <p className="text-gray-300 text-sm">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
