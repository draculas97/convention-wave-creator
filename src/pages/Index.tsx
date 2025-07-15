import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin, Award, ArrowRight, Sparkles, Globe, Camera } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const quickLinks = [
    { 
      title: "View Agenda", 
      description: "Explore our comprehensive 2-day program",
      icon: Calendar,
      path: "/agenda",
      color: "bg-primary"
    },
    { 
      title: "Meet Speakers", 
      description: "Learn from industry-leading experts",
      icon: Users,
      path: "/speakers",
      color: "bg-secondary"
    },
    { 
      title: "Explore Venue", 
      description: "Discover MGM Beach Resort Chennai",
      icon: MapPin,
      path: "/venue",
      color: "bg-ocean-blue"
    },
    { 
      title: "View Sponsors", 
      description: "See our prestigious partners",
      icon: Award,
      path: "/sponsors",
      color: "bg-convention-gold"
    },
  ];

  const features = [
    {
      icon: Globe,
      title: "International Standards",
      description: "World-class convention with global best practices and internationally recognized speakers."
    },
    {
      icon: Users,
      title: "Networking Opportunities", 
      description: "Connect with 500+ medical professionals, industry leaders, and potential collaborators."
    },
    {
      icon: Camera,
      title: "Chennai Experience",
      description: "Explore the cultural capital of South India with curated local experiences and tours."
    },
    {
      icon: Sparkles,
      title: "Innovation Showcase",
      description: "Discover cutting-edge medical technologies and breakthrough research from leading institutions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Countdown Timer Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <CountdownTimer />
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore the Convention
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover everything you need to know about the 22nd Annual Convention
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={link.title}
                to={link.path}
                className="group block animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card p-6 rounded-xl shadow-card border border-border hover:shadow-elegant transition-all duration-300 group-hover:scale-105">
                  <div className={`w-12 h-12 ${link.color} rounded-lg flex items-center justify-center mb-4 group-hover:animate-float`}>
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {link.description}
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Attend Our Convention?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the premier medical convention in South India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Don't miss this opportunity to be part of Chennai's most prestigious medical convention. 
            Register now and secure your early bird pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button variant="secondary" size="xl" className="animate-float">
                Register Now
              </Button>
            </Link>
            <Link to="/agenda">
              <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
                View Full Agenda
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-convention-navy text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">22nd Annual Convention</h3>
              <p className="text-white/80 mb-4">
                October 29-30, 2025<br />
                MGM Beach Resort, Chennai
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/agenda" className="block text-white/80 hover:text-white transition-colors">Agenda</Link>
                <Link to="/speakers" className="block text-white/80 hover:text-white transition-colors">Speakers</Link>
                <Link to="/venue" className="block text-white/80 hover:text-white transition-colors">Venue</Link>
                <Link to="/register" className="block text-white/80 hover:text-white transition-colors">Register</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-white/80">
                <p>Email: lugihelpdesk@gmail.com</p>
                <p>Phone: 9894816962</p>
                <p>Hours: Mon-Fri 10am-6pm</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <p className="text-white/80">
                Stay updated with the latest convention news and announcements.
              </p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
            <p>&copy; 2025 Annual Convention. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
