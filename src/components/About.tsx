import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate final-year student with hands-on experience in software development and embedded systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Summary */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">Summary</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a final-year B.Tech student in Electronics and Communication Engineering at MVGR College of Engineering 
              with a strong passion for software development, embedded systems, and full-stack web applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With hands-on experience in cloud platforms, real-time databases, and GUI development, I excel at 
              translating user needs into technical solutions. My journey combines theoretical knowledge with 
              practical implementation across various technology stacks.
            </p>
          </div>

          {/* Education Card */}
          <Card className="bg-glass-bg backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <h4 className="text-lg font-medium text-primary mb-2">
                    B.Tech in Electronics and Communication Engineering
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    MVGR College of Engineering
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Nov 2022 - Apr 2026
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Vizianagaram, Andhra Pradesh
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Key Achievements
            </span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-glass-bg backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">Top 10</div>
                <p className="text-sm text-muted-foreground">
                  Finalist in inter-college Hackathon on Smart Solutions, 2024
                </p>
              </CardContent>
            </Card>
            <Card className="bg-glass-bg backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">2nd Place</div>
                <p className="text-sm text-muted-foreground">
                  College coding contest hosted by CSI Chapter
                </p>
              </CardContent>
            </Card>
            <Card className="bg-glass-bg backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">Top 5%</div>
                <p className="text-sm text-muted-foreground">
                  CodeChef ECE track challenges, 2023
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;