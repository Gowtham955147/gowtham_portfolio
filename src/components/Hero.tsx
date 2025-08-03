import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, Download, Github } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main heading with gradient text */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-text-gradient bg-clip-text text-transparent">
            Gowtham Pentapalli
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
          Electronics & Communication Engineering Student
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Passionate about software development, embedded systems, and full-stack web applications. 
          Transforming ideas into innovative technical solutions.
        </p>

        {/* Contact info */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
          <a href="mailto:gowthampentapalli@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            gowthampentapalli@gmail.com
          </a>
          <a href="https://linkedin.com/in/gowtham-pentapalli" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone className="w-4 h-4" />
            +91-7816091734
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          <Button 
            variant="glass" 
            size="xl"
            onClick={() => scrollToSection('contact')}
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;