import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, MessageSquare, Cloud, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Chat Web App",
      description: "A modern chat platform featuring real-time messaging, secure authentication, and multi-room support. Built with Firebase for seamless real-time updates and deployed for public access.",
      technologies: ["JavaScript", "Firebase", "HTML/CSS", "Realtime Database"],
      features: [
        "Real-time messaging with Firebase Realtime Database",
        "Secure user authentication and registration",
        "Multiple chat rooms support",
        "Responsive design for all devices",
        "GitHub integration and Firebase Hosting"
      ],
      icon: MessageSquare,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Weather App",
      description: "An intelligent desktop application that provides comprehensive weather information with dynamic visual elements and forecasting capabilities.",
      technologies: ["Python", "Tkinter", "OpenWeatherMap API", "GUI"],
      features: [
        "Location-based weather fetching",
        "Dynamic background changes based on weather",
        "Interactive forecast charts and graphs",
        "User-friendly desktop GUI interface",
        "Real-time weather condition updates"
      ],
      icon: Cloud,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio showcasing projects, skills, and professional experience with modern web technologies and interactive design elements.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      features: [
        "Interactive and responsive user interface",
        "Project showcase with detailed descriptions",
        "Resume download functionality",
        "Modern design with smooth animations",
        "Deployed on GitHub Pages"
      ],
      icon: Globe,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical skills through practical applications and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index} 
                className="bg-glass-bg backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group"
              >
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Project Info */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-10`}>
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                          <p className="text-muted-foreground">{project.description}</p>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4">
                        <Button variant="default" size="sm" className="group-hover:shadow-glow transition-all">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button variant="outline" size="sm">
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </Button>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-4 text-primary">Key Features:</h4>
                      <ul className="space-y-3">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;