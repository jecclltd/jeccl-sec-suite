import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Shield, 
  Clock, 
  Users, 
  FileCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Lock,
  Network,
  Award,
  TrendingUp,
  ChevronDown
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import secSuiteHero from "@/assets/secsuite-hero.jpg";
import partnership from "@/assets/partnership.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().min(1, "Company name is required").max(100, "Company name must be less than 100 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters")
});

const SecSuite = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Here you would normally send to your backend
      // For now, we'll just show a success message
      toast({
        title: "Request Received!",
        description: "We'll contact you within 24 hours to schedule your free cyber risk review.",
      });
      
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Jeccl Cyber</div>
          <div className="flex items-center gap-6">
            <a href="/" className="text-foreground hover:text-accent transition-colors">Home</a>
            <a href="/about" className="text-foreground hover:text-accent transition-colors">About</a>
            <a href="/#services" className="text-foreground hover:text-accent transition-colors">Services</a>
            <a href="/sec-suite" className="text-accent font-semibold">Sec-Suite</a>
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
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${secSuiteHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold mb-6">
              Introducing Sec-Suite
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Comprehensive Cybersecurity Protection for UK SMEs
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Protect your business from cyber attacks with proactive, 24/7 security monitoring. 
              Focus on growth while we handle your cybersecurity—stress-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">Book Your Free Cyber Risk Review</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#solution">Learn How It Works</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Risk Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                What's at Stake for Your Business?
              </h2>
              <p className="text-xl text-muted-foreground">
                Cyber threats are growing, and UK SMEs are prime targets. The cost of inaction is far greater than investment in protection.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 border-2 border-destructive/20 hover:border-destructive/40 transition-colors">
                <AlertTriangle className="w-12 h-12 text-destructive mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Financial Loss</h3>
                <p className="text-muted-foreground mb-4">
                  Average breach costs UK SMEs £4,200 per incident. Recovery costs, lost revenue, and reputation damage add up quickly.
                </p>
                <div className="text-3xl font-bold text-destructive">£4,200+</div>
              </Card>

              <Card className="p-8 border-2 border-destructive/20 hover:border-destructive/40 transition-colors">
                <Clock className="w-12 h-12 text-destructive mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Business Interruption</h3>
                <p className="text-muted-foreground mb-4">
                  Downtime from ransomware or data breaches can halt operations for days or weeks, costing you customers and contracts.
                </p>
                <div className="text-3xl font-bold text-destructive">Days Lost</div>
              </Card>

              <Card className="p-8 border-2 border-destructive/20 hover:border-destructive/40 transition-colors">
                <FileCheck className="w-12 h-12 text-destructive mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Regulatory Penalties</h3>
                <p className="text-muted-foreground mb-4">
                  ICO fines reach up to £17.5M or 4% of turnover. Non-compliance with GDPR can devastate your business.
                </p>
                <div className="text-3xl font-bold text-destructive">£17.5M</div>
              </Card>
            </div>

            <div className="mt-12 p-8 bg-card rounded-xl border-2 border-accent/20">
              <div className="flex items-start gap-4">
                <Shield className="w-10 h-10 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Don't Let Your Business Become a Statistic</h3>
                  <p className="text-lg text-muted-foreground">
                    43% of cyberattacks target small businesses, yet only 14% are adequately prepared. 
                    Sec-Suite ensures you're in the protected majority, not the vulnerable majority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                How Sec-Suite Protects Your Business
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive cybersecurity service combines advanced technology with expert human oversight 
                to keep your business safe 24/7.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-accent/10 rounded-xl">
                    <Clock className="w-10 h-10 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">24/7 Security Monitoring</h3>
                    <p className="text-muted-foreground mb-4">
                      Round-the-clock threat detection and monitoring. Our systems never sleep, 
                      identifying and responding to threats before they become breaches.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Real-time threat intelligence
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Automated alert systems
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Immediate incident response
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-accent/10 rounded-xl">
                    <AlertTriangle className="w-10 h-10 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Rapid Breach Response</h3>
                    <p className="text-muted-foreground mb-4">
                      Expert-led incident response team ready to contain and resolve security 
                      incidents, minimising damage and downtime.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Immediate containment protocols
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Forensic analysis & recovery
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Post-incident reporting
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-accent/10 rounded-xl">
                    <Users className="w-10 h-10 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Comprehensive Staff Training</h3>
                    <p className="text-muted-foreground mb-4">
                      Regular security awareness training for your entire team. Turn your staff 
                      into your first line of defence against cyber threats.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Monthly training sessions
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Phishing simulations
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Security best practices
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-accent/10 rounded-xl">
                    <FileCheck className="w-10 h-10 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Compliance Management</h3>
                    <p className="text-muted-foreground mb-4">
                      Stay compliant with GDPR, ICO, and industry regulations. We handle the 
                      complexity so you can focus on your business.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Regular compliance audits
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Policy updates & implementation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Audit-ready documentation
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-accent/10 rounded-xl">
                    <Lock className="w-10 h-10 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Vulnerability Management</h3>
                    <p className="text-muted-foreground mb-4">
                      Proactive identification and remediation of security weaknesses before 
                      attackers can exploit them.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Regular vulnerability scans
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Prioritized remediation plans
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Patch management
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-accent/10 rounded-xl">
                    <Network className="w-10 h-10 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Network Security</h3>
                    <p className="text-muted-foreground mb-4">
                      Advanced firewall management, intrusion detection, and network monitoring 
                      to protect your digital perimeter.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Firewall configuration & monitoring
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Intrusion detection systems
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Secure remote access
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Why Choose Jeccl Cyber's Sec-Suite?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Over 20 years of cybersecurity expertise protecting UK businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src={partnership} 
                  alt="Trusted cybersecurity partnership"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">20+ Years of Expertise</h3>
                    <p className="text-muted-foreground">
                      Founded by Christopher Mason with over two decades in cybersecurity, 
                      working with everything from SMEs to enterprise organizations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">Dedicated Support</h3>
                    <p className="text-muted-foreground">
                      You're not just a number. Every Sec-Suite client gets a dedicated security 
                      consultant who knows your business inside and out.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                    <TrendingUp className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">Proven Results</h3>
                    <p className="text-muted-foreground">
                      Our clients have experienced zero successful breaches since implementing 
                      Sec-Suite. We don't just monitor—we protect.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-lg text-muted-foreground mb-4 italic">
                  "Sec-Suite has transformed how we think about security. We sleep better knowing 
                  Jeccl Cyber is watching over our systems 24/7. The training alone has saved us 
                  from multiple phishing attempts."
                </p>
                <div>
                  <p className="font-bold text-foreground">Sarah Mitchell</p>
                  <p className="text-sm text-muted-foreground">CEO, TechStart Solutions Ltd</p>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-lg text-muted-foreground mb-4 italic">
                  "After implementing Sec-Suite, we passed our ISO 27001 audit with flying colors. 
                  The team at Jeccl Cyber didn't just help us meet compliance—they helped us 
                  understand why it matters."
                </p>
                <div>
                  <p className="font-bold text-foreground">James Robertson</p>
                  <p className="text-sm text-muted-foreground">Operations Director, Innovate Finance</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Transparent, Value-Driven Pricing
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Flexible packages designed to fit your business size and security needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Essential</h3>
                <p className="text-sm text-muted-foreground mb-4">Up to 10 users • Single site</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">£699</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">24/7 monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Quarterly vulnerability scans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Staff training (quarterly)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Email & phone support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#contact">Get Started</a>
                </Button>
              </Card>

              <Card className="p-8 border-2 border-accent hover:shadow-2xl transition-all duration-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Professional</h3>
                <p className="text-sm text-muted-foreground mb-4">Up to 30 users • Single site</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">£1,799</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Everything in Essential</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Monthly vulnerability scans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Staff training (monthly)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Compliance management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Dedicated security consultant</span>
                  </li>
                </ul>
                <Button variant="hero" className="w-full" asChild>
                  <a href="#contact">Get Started</a>
                </Button>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">Custom</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Everything in Professional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Custom integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Penetration testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Priority support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Custom SLA agreements</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#contact">Contact Us</a>
                </Button>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground mb-8">
                <strong>Additional consulting available at £1,200/day</strong> for strategic security initiatives, 
                incident response, or specialised projects.
              </p>
              
              <div className="bg-card border-2 border-accent/20 rounded-xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Additional Services Available</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">ISO 27001 Certification</p>
                      <p className="text-sm text-muted-foreground">Full support and implementation available</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Cyber Essentials</p>
                      <p className="text-sm text-muted-foreground">Certification support and guidance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">IT Support Services</p>
                      <p className="text-sm text-muted-foreground">Ongoing technical support available</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Infrastructure Remedial Work</p>
                      <p className="text-sm text-muted-foreground">Security improvements and upgrades</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  All additional services are priced individually based on your requirements. Contact us for a tailored quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about Sec-Suite
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-accent">
                  What makes Sec-Suite different from other security services?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sec-Suite combines advanced automated monitoring with expert human oversight. 
                  Unlike fully automated solutions, we provide dedicated security consultants who 
                  understand your business. Unlike purely consulting-based services, we offer 24/7 
                  monitoring and rapid response. It's the best of both worlds.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-accent">
                  How quickly can you deploy Sec-Suite for my business?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Most businesses are fully onboarded within 2-3 weeks. We start with an initial 
                  security assessment, then implement monitoring tools, configure systems, and train 
                  your team. Basic monitoring can begin within 48 hours of agreement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-accent">
                  What happens if you detect a security threat?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our system immediately alerts our security operations center. We assess the threat, 
                  contain it if necessary, and notify you with recommended actions. For critical threats, 
                  we can take immediate action to protect your systems (with your pre-approved authorization). 
                  You'll receive a detailed incident report within 24 hours.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-accent">
                  Do I need existing security infrastructure to use Sec-Suite?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No. We work with businesses at all security maturity levels. If you have existing 
                  security tools, we'll integrate with them. If not, we'll recommend and implement 
                  appropriate solutions as part of your Sec-Suite package. We meet you where you are.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-accent">
                  Is Sec-Suite suitable for businesses with remote workers?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely. We specialize in securing hybrid and remote work environments. Sec-Suite 
                  includes secure remote access solutions, endpoint protection for remote devices, 
                  and training specifically focused on remote work security best practices.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-accent">
                  What compliance standards does Sec-Suite help with?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sec-Suite helps you meet GDPR, ISO 27001, Cyber Essentials, Cyber Essentials Plus, 
                  and ICO requirements. We also support industry-specific standards for financial services, 
                  healthcare, and legal sectors. Our compliance management includes regular audits, 
                  policy updates, and audit-ready documentation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-accent">
                  Can I upgrade or downgrade my Sec-Suite plan?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes. Your security needs may change as your business grows. You can upgrade or 
                  downgrade your plan with 30 days' notice. We'll work with you to ensure a smooth 
                  transition and recommend the right level of protection for your current situation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-accent">
                  What's included in the free cyber risk review?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Your free review includes a 60-minute consultation where we assess your current 
                  security posture, identify immediate vulnerabilities, review your compliance status, 
                  and provide a prioritized action plan. There's no obligation—just valuable insights 
                  into your cybersecurity risks and how to address them.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 shadow-2xl">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Protect Your Business?
                </h2>
                <p className="text-xl opacity-90">
                  Book your free cyber risk review today. No obligation, just expert insights 
                  into your security posture and how Sec-Suite can help.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-primary-foreground mb-2 block">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-primary-foreground text-foreground"
                      placeholder="John Smith"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-200 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-primary-foreground mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-primary-foreground text-foreground"
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-200 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="company" className="text-primary-foreground mb-2 block">
                    Company Name *
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-primary-foreground text-foreground"
                    placeholder="Your Company Ltd"
                  />
                  {errors.company && (
                    <p className="text-sm text-red-200 mt-1">{errors.company}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="text-primary-foreground mb-2 block">
                    Tell us about your security needs *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-primary-foreground text-foreground min-h-32"
                    placeholder="What are your main cybersecurity concerns?"
                  />
                  {errors.message && (
                    <p className="text-sm text-red-200 mt-1">{errors.message}</p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    className="flex-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Request Free Risk Review"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    asChild
                  >
                    <a href="https://calendly.com/jeccl/introduction-1-2-1" target="_blank" rel="noopener noreferrer">
                      Book Consultation
                    </a>
                  </Button>
                </div>
              </form>

              <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
                <p className="text-lg opacity-90 mb-4">
                  Prefer to talk? We're here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-primary-foreground">
                  <a href="mailto:hello@jeccl.com" className="hover:underline">
                    hello@jeccl.com
                  </a>
                  <span className="hidden sm:inline">|</span>
                  <a href="tel:+441234567890" className="hover:underline">
                    +44 (0) 1234 567 890
                  </a>
                </div>
              </div>
            </Card>
          </div>
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
            <a href="/sec-suite" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Sec-Suite</a>
          </div>
          <div className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Jeccl Cyber. Part of Jeccl Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SecSuite;
