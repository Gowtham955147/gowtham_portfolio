import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, MapPin, Download, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gowthampentapalli@gmail.com",
      href: "mailto:gowthampentapalli@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "gowtham-pentapalli",
      href: "https://linkedin.com/in/gowtham-pentapalli",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7816091734",
      href: "tel:+917816091734",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Vizianagaram, Andhra Pradesh, India",
      href: "#",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Whether you're looking for a passionate developer, want to discuss a project, 
                  or just want to connect, I'd love to hear from you. Let's create something amazing together!
                </p>
              </div>

              <div className="grid gap-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <Card 
                      key={index}
                      className="bg-glass-bg backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group"
                    >
                      <CardContent className="p-6">
                        <a 
                          href={contact.href}
                          className="flex items-center gap-4 group-hover:scale-105 transition-transform"
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${contact.color} bg-opacity-10`}>
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-sm text-muted-foreground mb-1">
                              {contact.label}
                            </p>
                            <p className="text-foreground font-medium">
                              {contact.value}
                            </p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col justify-center">
              <Card className="bg-glass-bg backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
                <CardContent className="p-8 text-center">
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary-hover rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Ready to Collaborate?</h3>
                    <p className="text-muted-foreground mb-6">
                      I'm currently open to internship opportunities, freelance projects, 
                      and full-time positions in software development.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      onClick={() => window.open('mailto:gowthampentapalli@gmail.com', '_blank')}
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Send me an Email
                    </Button>
                    
                    <Button 
                      variant="glass" 
                      size="lg" 
                      className="w-full"
                      onClick={() => window.open('https://linkedin.com/in/gowtham-pentapalli', '_blank')}
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      Connect on LinkedIn
                    </Button>

                    <div className="pt-4 border-t border-primary/20">
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="w-full"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download Resume
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-primary/20">
          <p className="text-muted-foreground">
            © 2024 Gowtham Pentapalli. Built with passion and modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;