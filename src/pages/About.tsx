import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Shield, TrendingUp } from "lucide-react";
import aboutImage from "@/assets/about-professional.jpg";
import JecclCyberLogo from "@/components/JecclCyberLogo";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <JecclCyberLogo size="sm" variant="horizontal" />
          </a>
          <div className="flex items-center gap-6">
            <a href="/" className="text-foreground hover:text-accent transition-colors">Home</a>
            <a href="/#services" className="text-foreground hover:text-accent transition-colors">Services</a>
            <a href="/cyberj" className="text-foreground hover:text-accent transition-colors">CyberJ</a>
            <a href="/#contact" className="text-foreground hover:text-accent transition-colors">Contact</a>
            <Button variant="hero" size="sm" asChild>
              <a href="https://calendly.com/jeccl/introduction-1-2-1" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Jeccl Cyber
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Expert cybersecurity leadership for UK SMEs
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Our Approach</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We combine deep technical expertise with practical business understanding
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-accent">
              <Award className="w-16 h-16 mx-auto mb-6 text-accent" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Expert Leadership</h3>
              <p className="text-muted-foreground">
                Award-winning expertise with a Masters in Cyber Security ensuring your business receives world-class guidance.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-accent">
              <Shield className="w-16 h-16 mx-auto mb-6 text-accent" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Proactive Protection</h3>
              <p className="text-muted-foreground">
                Stay ahead of threats with forward-thinking security strategies tailored to your business needs.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-accent">
              <TrendingUp className="w-16 h-16 mx-auto mb-6 text-accent" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Business Focus</h3>
              <p className="text-muted-foreground">
                Security solutions that enable growth, not hinder it. We understand the needs of UK SMEs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto p-12 text-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Let's Discuss Your Security Needs</h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a consultation to learn how Jeccl Cyber can protect and empower your business.
            </p>
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
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <a href="/" className="inline-block mb-4 hover:opacity-80 transition-opacity">
            <JecclCyberLogo size="md" variant="full" className="text-primary-foreground" />
          </a>
          <p className="text-primary-foreground/80 mb-6">
            Protecting UK SMEs with expert cybersecurity solutions
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a>
            <a href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About</a>
            <a href="/#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Services</a>
            <a href="/cyberj" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">CyberJ</a>
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

export default About;
