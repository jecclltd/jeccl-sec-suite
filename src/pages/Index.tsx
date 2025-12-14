import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Lock, FileCheck, Users, Award, TrendingUp, Target, AlertTriangle, CheckCircle2, Network } from "lucide-react";
import heroImage from "@/assets/hero-cyber.jpg";
import servicesImage from "@/assets/services-hero.jpg";
import securityNetwork from "@/assets/security-network.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import securityShield from "@/assets/security-shield.jpg";
import consultantPresenting from "@/assets/consultant-presenting.jpg";
import JecclCyberLogo from "@/components/JecclCyberLogo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <JecclCyberLogo size="sm" variant="horizontal" />
          </a>
          <div className="flex items-center gap-6">
            <a href="/about" className="text-foreground hover:text-accent transition-colors">About</a>
            <a href="#services" className="text-foreground hover:text-accent transition-colors">Services</a>
            <a href="/cyberj" className="text-foreground hover:text-accent transition-colors">CyberJ</a>
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
        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Premium Cybersecurity Consulting Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Trusted by leading UK SMEs. Our expert consultants deliver enterprise-grade security 
                solutions tailored to your business needs.
              </p>
            </div>

            {/* Featured Image Section */}
            <div className="mb-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <img 
                    src={teamCollaboration} 
                    alt="Cybersecurity team collaborating on security solutions"
                    className="rounded-xl shadow-2xl w-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-3xl font-bold mb-6 text-foreground">
                    Why UK Businesses Choose Jeccl Cyber
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Expert-Led Consulting</p>
                        <p className="text-muted-foreground">Industry veterans with decades of combined experience</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Tailored Solutions</p>
                        <p className="text-muted-foreground">Custom security strategies designed for your business</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Proven Track Record</p>
                        <p className="text-muted-foreground">Protecting businesses across the UK for years</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Services Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent group">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                    <Lock className="w-10 h-10 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Comprehensive Security Assessments</h3>
                    <p className="text-muted-foreground mb-4">
                      In-depth analysis of your entire security infrastructure. We identify vulnerabilities, 
                      assess risks, and provide a detailed roadmap for strengthening your defenses.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        Penetration testing & vulnerability scanning
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        Network security architecture review
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        Risk assessment & mitigation planning
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent group">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                    <FileCheck className="w-10 h-10 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Policy & Compliance Implementation</h3>
                    <p className="text-muted-foreground mb-4">
                      Stay ahead of regulatory requirements with our comprehensive policy frameworks. 
                      We ensure your business meets ICO, GDPR, and industry-specific compliance standards.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        GDPR & ICO compliance consulting
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        Security policy development & implementation
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        Regular compliance audits & updates
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent group">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                    <Users className="w-10 h-10 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Security Awareness Training</h3>
                    <p className="text-muted-foreground mb-4">
                      Your team is your first line of defence. We deliver engaging, practical training 
                      that transforms your staff into security-conscious professionals.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        Phishing awareness & prevention
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        Social engineering defense tactics
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        Ongoing security culture development
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent group">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                    <Shield className="w-10 h-10 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Ongoing Security Support</h3>
                    <p className="text-muted-foreground mb-4">
                      Continuous monitoring and expert guidance to keep your business protected against 
                      evolving cyber threats. We're your trusted security partner.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        24/7 security monitoring & incident response
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        Regular security updates & patches
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        Dedicated security consultant access
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* Consulting Image */}
            <div className="mt-16 relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={consultantPresenting} 
                alt="Expert cybersecurity consultant presenting security solutions"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 flex items-center">
                <div className="container mx-auto px-8 text-primary-foreground">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Expert Guidance When You Need It Most
                  </h3>
                  <p className="text-xl mb-6 max-w-2xl opacity-90">
                    Our consultants bring real-world experience to every engagement. At £1,200 per day, 
                    you're investing in expertise that protects your business and enables secure growth.
                  </p>
                  <Button variant="secondary" size="lg" asChild>
                    <a href="https://calendly.com/jeccl/introduction-1-2-1" target="_blank" rel="noopener noreferrer">
                      Book Your Consultation
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cybersecurity Matters */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Why Cybersecurity is Critical for Your Business
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                In today's digital landscape, cybersecurity isn't optional—it's essential. 
                With data breaches costing UK businesses millions annually, proactive protection 
                is your best investment.
              </p>
            </div>

            {/* Visual Stats Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src={securityShield} 
                  alt="Advanced cybersecurity protection shield"
                  className="rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <AlertTriangle className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">Rising Cyber Threats</h3>
                    <p className="text-muted-foreground">
                      Cyber attacks on UK businesses have increased by 64% in the past year. 
                      Don't become another statistic.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Target className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">SMEs Are Prime Targets</h3>
                    <p className="text-muted-foreground">
                      43% of cyber attacks target small and medium businesses. Attackers know 
                      SMEs often lack robust security measures.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Network className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">Regulatory Requirements</h3>
                    <p className="text-muted-foreground">
                      ICO fines for data breaches can reach £17.5 million or 4% of annual turnover. 
                      Compliance is non-negotiable.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-accent group">
                <div className="p-4 bg-accent/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Shield className="w-12 h-12 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Enterprise-Grade Protection</h3>
                <p className="text-muted-foreground">
                  Implement the same security standards used by Fortune 500 companies, 
                  tailored for your SME budget and needs.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-accent group">
                <div className="p-4 bg-accent/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <FileCheck className="w-12 h-12 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Full Compliance Assurance</h3>
                <p className="text-muted-foreground">
                  Meet GDPR, ICO, and industry-specific regulations with confidence. 
                  We keep you compliant and audit-ready.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-accent group">
                <div className="p-4 bg-accent/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <TrendingUp className="w-12 h-12 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Secure Business Growth</h3>
                <p className="text-muted-foreground">
                  Win larger contracts, build customer trust, and expand with confidence 
                  knowing your security is world-class.
                </p>
              </Card>
            </div>
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

export default Index;
