import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-convention.jpg";

const HeroSection = () => {
  const highlights = [
    { icon: Users, text: "500+ Attendees", subtext: "Medical Professionals" },
    { icon: Award, text: "50+ Speakers", subtext: "Industry Experts" },
    { icon: Calendar, text: "2 Days", subtext: "Knowledge & Networking" },
    { icon: MapPin, text: "Chennai", subtext: "MGM Beach Resort" },
  ];

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-primary/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-block bg-gradient-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 animate-float">
              🎉 Early Bird Registration Open
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">22nd Annual</span>
              <br />
              <span className="text-foreground">Convention</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl text-primary">2025</span>
            </h1>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 text-lg text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>October 29-30, 2025</span>
              </div>
              <div className="hidden sm:block text-muted-foreground">•</div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>MGM Beach Resort, Chennai</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Join the most prestigious medical convention of the year. Connect with industry leaders, 
              explore cutting-edge innovations, and advance your professional journey in the beautiful 
              coastal city of Chennai.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/register">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Register Now
                </Button>
              </Link>
              <Link to="/agenda">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  View Agenda
                </Button>
              </Link>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={highlight.text}
                  className="bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <highlight.icon className="w-6 h-6 text-primary mb-2 mx-auto lg:mx-0" />
                  <div className="text-sm font-semibold text-foreground">{highlight.text}</div>
                  <div className="text-xs text-muted-foreground">{highlight.subtext}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Additional visual element or form preview */}
          <div className="hidden lg:block animate-fade-in">
            <div className="bg-card/90 backdrop-blur-md p-8 rounded-2xl shadow-elegant border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Quick Registration</h3>
              <p className="text-muted-foreground mb-6">
                Secure your spot at Chennai's premier medical convention
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground">Without Accommodation</span>
                  <span className="font-semibold text-primary">₹21,500</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground">With Accommodation (2N/3D)</span>
                  <span className="font-semibold text-primary">From ₹29,875</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground">With Accommodation (3N/4D)</span>
                  <span className="font-semibold text-primary">From ₹35,875</span>
                </div>
              </div>

              <Link to="/register" className="block mt-6">
                <Button variant="default" size="lg" className="w-full">
                  Start Registration
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default HeroSection;