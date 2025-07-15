import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, CreditCard, Shield, Award } from "lucide-react";

const Register = () => {
  const registrationTypes = [
    {
      type: "Without Accommodation",
      price: "₹21,500",
      description: "Convention access only (does not include hotel stay)",
      features: [
        "Full convention access (2 days)",
        "All meals during convention",
        "Welcome kit and materials",
        "Networking sessions",
        "Certificate of attendance"
      ],
      popular: false
    },
    {
      type: "With Accommodation 2N/3D Triple",
      price: "₹29,875",
      description: "Oct 28-30, 2025 (Triple sharing room)",
      features: [
        "Everything in basic package",
        "2 nights accommodation",
        "Triple sharing room",
        "Daily breakfast",
        "Welcome dinner included"
      ],
      popular: true,
      addGuest: true
    },
    {
      type: "With Accommodation 2N/3D Double",
      price: "₹32,875", 
      description: "Oct 28-30, 2025 (Double sharing room)",
      features: [
        "Everything in basic package",
        "2 nights accommodation", 
        "Double sharing room",
        "Daily breakfast",
        "Welcome dinner included"
      ],
      popular: false,
      addGuest: true
    },
    {
      type: "With Accommodation 2N/3D Single",
      price: "₹40,875",
      description: "Oct 28-30, 2025 (Single occupancy)",
      features: [
        "Everything in basic package",
        "2 nights accommodation",
        "Single occupancy room",
        "Daily breakfast",
        "Welcome dinner included"
      ],
      popular: false
    },
    {
      type: "With Accommodation 3N/4D Triple",
      price: "₹35,875",
      description: "Oct 27-30, 2025 (Triple sharing room)",
      features: [
        "Everything in basic package",
        "3 nights accommodation",
        "Triple sharing room", 
        "Daily breakfast",
        "Welcome dinner included"
      ],
      popular: false,
      addGuest: true
    },
    {
      type: "With Accommodation 3N/4D Double",
      price: "₹39,875",
      description: "Oct 27-30, 2025 (Double sharing room)",
      features: [
        "Everything in basic package",
        "3 nights accommodation",
        "Double sharing room",
        "Daily breakfast", 
        "Welcome dinner included"
      ],
      popular: false,
      addGuest: true
    },
    {
      type: "With Accommodation 3N/4D Single",
      price: "₹52,375",
      description: "Oct 27-30, 2025 (Single occupancy)",
      features: [
        "Everything in basic package",
        "3 nights accommodation",
        "Single occupancy room",
        "Daily breakfast",
        "Welcome dinner included"
      ],
      popular: false
    }
  ];

  const pricingPlans = [
    { plan: "Early Bird", period: "Until Aug 15, 2025", discount: "Current pricing", active: true },
    { plan: "Plan A", period: "Aug 16 - Sep 15, 2025", discount: "+₹1,000", active: false },
    { plan: "Plan B", period: "Sep 16 - Oct 10, 2025", discount: "+₹2,000", active: false },
    { plan: "Plan F", period: "Oct 11 - Oct 25, 2025", discount: "+₹3,500", active: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Register Now
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Secure your spot at the 22nd Annual Convention. Early bird pricing available until August 15th, 2025.
            </p>
            <div className="flex items-center justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>October 29-30, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>MGM Beach Resort, Chennai</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-ocean-blue" />
                <span>Limited Seats</span>
              </div>
            </div>
          </div>

          {/* Pricing Timeline */}
          <div className="mb-16">
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="text-2xl font-bold text-foreground mb-4">Registration Pricing Timeline</h2>
              <p className="text-muted-foreground">Prices increase as the event approaches. Register early to save!</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4">
              {pricingPlans.map((plan, index) => (
                <div
                  key={plan.plan}
                  className={`p-4 rounded-lg border text-center animate-scale-in ${
                    plan.active 
                      ? 'bg-primary text-primary-foreground border-primary' 
                      : 'bg-card text-card-foreground border-border'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-semibold mb-1">{plan.plan}</h3>
                  <p className={`text-sm mb-2 ${plan.active ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                    {plan.period}
                  </p>
                  <p className={`text-xs font-medium ${plan.active ? 'text-primary-foreground' : 'text-foreground'}`}>
                    {plan.discount}
                  </p>
                  {plan.active && (
                    <div className="mt-2">
                      <span className="inline-block bg-white/20 text-xs px-2 py-1 rounded">Active</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Registration Options */}
          <div className="mb-16">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choose Your Package
              </h2>
              <p className="text-lg text-muted-foreground">
                Select the registration type that best suits your needs
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {registrationTypes.map((option, index) => (
                <Card
                  key={option.type}
                  className={`p-6 relative hover:shadow-elegant transition-all duration-300 animate-fade-in-up ${
                    option.popular ? 'ring-2 ring-primary border-primary' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {option.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{option.type}</h3>
                    <div className="text-3xl font-bold text-primary mb-2">{option.price}</div>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                    {option.addGuest && (
                      <p className="text-xs text-primary mt-1">+ Add Spouse/Guest option available</p>
                    )}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={option.popular ? "default" : "outline"} 
                    className="w-full"
                  >
                    Select This Package
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Register */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Register Early?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Early Bird Savings</h3>
                    <p className="text-muted-foreground text-sm">
                      Save up to ₹3,500 by registering before August 15th, 2025. Prices increase closer to the event.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Guaranteed Accommodation</h3>
                    <p className="text-muted-foreground text-sm">
                      Secure your preferred room type at MGM Beach Resort. Limited rooms available.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ocean-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Priority Access</h3>
                    <p className="text-muted-foreground text-sm">
                      Early registrants get priority access to networking sessions and special events.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-convention-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Networking Opportunities</h3>
                    <p className="text-muted-foreground text-sm">
                      Connect with 500+ medical professionals, industry leaders, and speakers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-gradient-hero p-8 rounded-xl shadow-glow text-center">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Ready to Register?
                </h3>
                <p className="text-primary-foreground/90 mb-6">
                  Join us for two days of learning, networking, and professional growth in beautiful Chennai.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary-foreground mb-2">What's Included:</h4>
                    <ul className="text-primary-foreground/90 text-sm space-y-1">
                      <li>• Full access to all sessions and workshops</li>
                      <li>• Welcome kit with conference materials</li>
                      <li>• All meals during the convention</li>
                      <li>• Networking opportunities</li>
                      <li>• Certificate of attendance</li>
                      <li>• Access to speaker presentations</li>
                    </ul>
                  </div>
                </div>

                <Button variant="secondary" size="xl" className="w-full mb-4 animate-float">
                  Start Registration Process
                </Button>
                
                <p className="text-primary-foreground/80 text-sm">
                  Secure payment processing • Full refund if cancelled before Sep 30th
                </p>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="text-center animate-fade-in">
            <div className="bg-card p-8 rounded-xl shadow-card border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Need Help with Registration?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our support team is here to assist you with the registration process
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Email Support</h4>
                  <p className="text-muted-foreground text-sm">lugihelpdesk@gmail.com</p>
                  <p className="text-muted-foreground text-sm">convention@lugi.org</p>
                  <p className="text-xs text-muted-foreground mt-1">Response within 1 business day</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Phone Support</h4>
                  <p className="text-muted-foreground text-sm">9894816962</p>
                  <p className="text-muted-foreground text-sm">0422-4374920</p>
                  <p className="text-xs text-muted-foreground mt-1">Mon-Fri 10am-6pm, Sat 10am-1pm</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technical Support</h4>
                  <p className="text-muted-foreground text-sm">mugesh@expressholidays.in</p>
                  <p className="text-xs text-muted-foreground mt-1">For payment & technical issues</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;