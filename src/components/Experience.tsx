import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional experience working with aviation technology and communication systems
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-glass-bg backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">Intern</h3>
                      <h4 className="text-lg text-primary font-medium">Airports Authority of India</h4>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-muted-foreground mt-2 md:mt-0">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="w-4 h-4" />
                        May 2025 - Jul 2025
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        Visakhapatnam, India
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold mb-2 text-primary">Key Responsibilities:</h5>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          Worked on Communication, Navigation, and Surveillance (CNS) systems used in airport operations
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          Collaborated with technical teams to inspect, configure, and calibrate navigation and communication modules
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          Contributed to performance testing of ILS (Instrument Landing System) and VOR/DME systems
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-3 text-primary">Technologies & Systems:</h5>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">CNS Systems</Badge>
                        <Badge variant="secondary">ILS</Badge>
                        <Badge variant="secondary">VOR/DME</Badge>
                        <Badge variant="secondary">Navigation Systems</Badge>
                        <Badge variant="secondary">Communication Modules</Badge>
                        <Badge variant="secondary">Performance Testing</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8">
              <span className="bg-text-gradient bg-clip-text text-transparent">
                Certifications & Workshops
              </span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-glass-bg backdrop-blur-md border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">NPTEL Certifications</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Computer Vision and Image Processing</li>
                    <li>• Cloud Computing</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-glass-bg backdrop-blur-md border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Professional Development</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• IEEE Workshop on AI in Communication Systems (2024)</li>
                    <li>• Full Stack Web Development Bootcamp by TechCrux (2023)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;