import Navigation from "@/components/Navigation";
import { Award, Building, Star, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: "Platinum",
      color: "bg-gradient-to-r from-gray-300 to-gray-100",
      textColor: "text-gray-800",
      benefits: [
        "Prime logo placement on all materials",
        "15-minute speaking slot",
        "Premium exhibition space (6m x 6m)",
        "VIP delegate passes (10)",
        "Networking dinner sponsorship",
        "Welcome kit branding rights",
        "Pre-event email promotion"
      ],
      sponsors: ["Platinum Sponsor 1", "Platinum Sponsor 2"]
    },
    {
      tier: "Gold",
      color: "bg-convention-gold",
      textColor: "text-foreground",
      benefits: [
        "Logo on main stage backdrop",
        "Exhibition space (4m x 4m)",
        "VIP delegate passes (6)",
        "Coffee break sponsorship opportunity",
        "Program guide advertisement",
        "Social media mentions"
      ],
      sponsors: ["Gold Sponsor 1", "Gold Sponsor 2", "Gold Sponsor 3"]
    },
    {
      tier: "Silver", 
      color: "bg-gradient-to-r from-gray-400 to-gray-200",
      textColor: "text-gray-800",
      benefits: [
        "Logo in conference materials",
        "Exhibition space (3m x 3m)",
        "Delegate passes (4)",
        "Networking session access",
        "Website listing"
      ],
      sponsors: ["Silver Sponsor 1", "Silver Sponsor 2", "Silver Sponsor 3", "Silver Sponsor 4"]
    },
    {
      tier: "Bronze",
      color: "bg-gradient-to-r from-amber-600 to-amber-400",
      textColor: "text-white",
      benefits: [
        "Logo in program guide",
        "Exhibition space (2m x 2m)",
        "Delegate passes (2)",
        "Website listing",
        "Certificate of appreciation"
      ],
      sponsors: ["Bronze Sponsor 1", "Bronze Sponsor 2", "Bronze Sponsor 3", "Bronze Sponsor 4", "Bronze Sponsor 5"]
    },
    {
      tier: "Associate",
      color: "bg-primary",
      textColor: "text-primary-foreground",
      benefits: [
        "Website listing",
        "Program guide mention",
        "Networking access",
        "Certificate of participation"
      ],
      sponsors: ["Associate 1", "Associate 2", "Associate 3", "Associate 4", "Associate 5", "Associate 6"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Sponsors
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We gratefully acknowledge the generous support of our sponsors who make this convention possible
            </p>
            <div className="flex items-center justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span>Multiple Sponsorship Tiers</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-secondary" />
                <span>Industry Leaders</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-convention-gold" />
                <span>Premium Benefits</span>
              </div>
            </div>
          </div>

          {/* Sponsorship Tiers */}
          <div className="space-y-12">
            {sponsorTiers.map((tier, tierIndex) => (
              <div
                key={tier.tier}
                className="animate-fade-in-up"
                style={{ animationDelay: `${tierIndex * 0.1}s` }}
              >
                <div className="bg-card rounded-xl shadow-card border border-border overflow-hidden">
                  <div className={`${tier.color} p-6`}>
                    <h2 className={`text-3xl font-bold ${tier.textColor} text-center`}>
                      {tier.tier} Sponsors
                    </h2>
                  </div>
                  
                  <div className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-4">Sponsorship Benefits</h3>
                        <ul className="space-y-2">
                          {tier.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-4">Current Sponsors</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {tier.sponsors.map((sponsor, sponsorIndex) => (
                            <div
                              key={sponsorIndex}
                              className="bg-muted/50 p-4 rounded-lg text-center border border-border hover:shadow-card transition-all duration-300"
                            >
                              <Building className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                              <p className="text-sm font-medium text-foreground">{sponsor}</p>
                              <p className="text-xs text-muted-foreground">Logo Coming Soon</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Become a Sponsor CTA */}
          <div className="mt-20 animate-fade-in">
            <div className="bg-gradient-hero p-12 rounded-xl shadow-glow text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Become a Sponsor
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Partner with us to reach 500+ medical professionals and showcase your brand to industry leaders. 
                Multiple sponsorship packages available to suit your marketing objectives.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary-foreground mb-4">Why Sponsor?</h3>
                  <ul className="text-primary-foreground/90 text-left space-y-2">
                    <li className="flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      <span>Brand visibility to targeted audience</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      <span>Networking with industry leaders</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      <span>Thought leadership opportunities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      <span>Lead generation and business development</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary-foreground mb-4">Contact Information</h3>
                  <div className="text-primary-foreground/90 space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4" />
                      <span>convention@lugi.org</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4" />
                      <span>9894816962</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4" />
                      <span>0422-4374920</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="animate-float">
                  Download Sponsorship Brochure
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
                  Contact Sponsorship Team
                </Button>
              </div>
            </div>
          </div>

          {/* Thank You Section */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="bg-card p-8 rounded-xl shadow-card border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Thank You to Our Sponsors
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The success of the 22nd Annual Convention is made possible through the generous support 
                of our sponsors. We are grateful for their commitment to advancing medical education 
                and professional development in our community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;