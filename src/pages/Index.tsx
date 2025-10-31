import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Lock, FileCheck, Users, Award, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-cyber.jpg";
import servicesImage from "@/assets/services-hero.jpg";
import securityNetwork from "@/assets/security-network.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Jeccl Cyber</div>
          <div className="flex items-center gap-6">
            <a href="/about" className="text-foreground hover:text-accent transition-colors">About</a>
            <a href="#services" className="text-foreground hover:text-accent transition-colors">Services</a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">Contact</a>
            <Button variant="hero" size="sm" asChild>
              <a href="https://calendly.com/jeccl/introduction-1-2-1" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Protecting Your Business in the Digital Age
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Industry-leading cybersecurity solutions tailored for UK SMEs. Keep your data safe, 
              secure, and compliant with expert guidance from Jeccl Cyber.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://calendly.com/jeccl/introduction-1-2-1" target="_blank" rel="noopener noreferrer">
                  Schedule Consultation
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#services">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-20 px-4 bg-muted/30">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${servicesImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Our Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive cybersecurity solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <Lock className="w-12 h-12 mb-4 text-accent" />
              <h3 className="text-2xl font-bold mb-3 text-foreground">Security Assessment</h3>
              <p className="text-muted-foreground">
                Comprehensive evaluation of your current security posture with actionable recommendations 
                to strengthen your defenses.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <FileCheck className="w-12 h-12 mb-4 text-accent" />
              <h3 className="text-2xl font-bold mb-3 text-foreground">Policy Implementation</h3>
              <p className="text-muted-foreground">
                Updated and implemented policies and procedures ensuring compliance with the latest 
                industry standards.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <Users className="w-12 h-12 mb-4 text-accent" />
              <h3 className="text-2xl font-bold mb-3 text-foreground">Staff Training</h3>
              <p className="text-muted-foreground">
                Educate your team on cybersecurity best practices and create a culture of security 
                awareness within your organization.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <Shield className="w-12 h-12 mb-4 text-accent" />
              <h3 className="text-2xl font-bold mb-3 text-foreground">Ongoing Support</h3>
              <p className="text-muted-foreground">
                Continuous monitoring and support to ensure your business stays protected against 
                evolving cyber threats.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Cybersecurity Matters */}
      <section className="relative py-20 px-4">
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url(${securityNetwork})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Why Cybersecurity is Critical</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Cyber Security is more important now than ever before. With us creating more and more data, 
              we need to keep it as safe as possible. With Jeccl Cyber on your side, you'll have the latest 
              industry standards, updated and implemented policies and procedures.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-accent">
              <Shield className="w-16 h-16 mx-auto mb-6 text-accent" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Data Protection</h3>
              <p className="text-muted-foreground">
                Keep yours and your customers' data safe and secure with the latest security standards.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-accent">
              <FileCheck className="w-16 h-16 mx-auto mb-6 text-accent" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Compliance Ready</h3>
              <p className="text-muted-foreground">
                Stay compliant with ICO and government regulations with expert policy implementation.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-accent">
              <TrendingUp className="w-16 h-16 mx-auto mb-6 text-accent" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Business Growth</h3>
              <p className="text-muted-foreground">
                Position your business in the best place to grow securely without cybersecurity concerns.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto p-12 text-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Don't fall foul of the ICO and government regulations. Let's work together to implement 
              the latest security standards for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                asChild
              >
                <a href="https://calendly.com/jeccl/introduction-1-2-1" target="_blank" rel="noopener noreferrer">
                  Schedule Your Consultation
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="#contact">Contact Us Today</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold mb-4">Jeccl Cyber</div>
          <p className="text-primary-foreground/80 mb-6">
            Protecting UK SMEs with expert cybersecurity solutions
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a>
            <a href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About</a>
            <a href="/#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Services</a>
            <a href="/#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a>
          </div>
          <div className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Jeccl Cyber. Part of Jeccl Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
