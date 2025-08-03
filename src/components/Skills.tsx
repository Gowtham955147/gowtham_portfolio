import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Brain, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "Python", "Java", "HTML/CSS", "JavaScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frameworks & Tools",
      icon: Wrench,
      skills: ["Firebase", "Git", "Linux", "VS Code", "OpenCV"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Technical Concepts",
      icon: Brain,
      skills: ["Cloud Computing", "Image Processing", "Web Development", "Embedded Systems", "Database Management"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Problem Solving", "Teamwork", "Time Management", "Communication", "Leadership"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Telugu", level: "Native" },
    { name: "Hindi", level: "Intermediate" }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and professional capabilities
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="bg-glass-bg backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10`}>
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Languages Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Languages
            </span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <Card 
                key={index}
                className="bg-glass-bg backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold mb-2">{language.name}</h4>
                  <Badge variant="outline" className="border-primary/40 text-primary">
                    {language.level}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Proficiency */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Core Competencies
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Full-Stack Development</span>
                <span className="text-primary">85%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-to-r from-primary to-primary-hover h-2 rounded-full" style={{width: "85%"}}></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Embedded Systems</span>
                <span className="text-primary">80%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-to-r from-primary to-primary-hover h-2 rounded-full" style={{width: "80%"}}></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Cloud Technologies</span>
                <span className="text-primary">75%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-to-r from-primary to-primary-hover h-2 rounded-full" style={{width: "75%"}}></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Problem Solving</span>
                <span className="text-primary">90%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-to-r from-primary to-primary-hover h-2 rounded-full" style={{width: "90%"}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;