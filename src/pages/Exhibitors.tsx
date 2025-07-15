import Navigation from "@/components/Navigation";
import { Building, MapPin, Mail, Phone, FileText, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Exhibitors = () => {
  const exhibitors = [
    {
      name: "MedTech Innovations Pvt Ltd",
      category: "Medical Equipment",
      description: "Leading provider of advanced diagnostic equipment and medical imaging solutions",
      booth: "A-101",
      website: "www.medtechinnovations.com",
      contact: "info@medtechinnovations.com"
    },
    {
      name: "PharmaCare Solutions",
      category: "Pharmaceuticals",
      description: "Comprehensive pharmaceutical solutions and drug development services",
      booth: "A-102",
      website: "www.pharmacaresolutions.com",
      contact: "contact@pharmacaresolutions.com"
    },
    {
      name: "Digital Health Systems",
      category: "Healthcare IT",
      description: "Electronic health records and healthcare management software solutions",
      booth: "B-201",
      website: "www.digitalhealthsys.com",
      contact: "sales@digitalhealthsys.com"
    },
    {
      name: "BioLab Instruments",
      category: "Laboratory Equipment",
      description: "State-of-the-art laboratory instruments and diagnostic testing equipment",
      booth: "B-202",
      website: "www.biolabinstruments.com",
      contact: "info@biolabinstruments.com"
    },
    {
      name: "Wellness Technologies",
      category: "Telemedicine",
      description: "Telemedicine platforms and remote patient monitoring solutions",
      booth: "C-301",
      website: "www.wellnesstech.com",
      contact: "hello@wellnesstech.com"
    },
    {
      name: "SurgicalCare Devices",
      category: "Surgical Equipment",
      description: "Precision surgical instruments and minimally invasive surgical solutions",
      booth: "C-302",
      website: "www.surgicalcaredevices.com",
      contact: "support@surgicalcaredevices.com"
    },
    {
      name: "Healthcare Analytics Pro",
      category: "Data Analytics",
      description: "Healthcare data analytics and business intelligence solutions",
      booth: "D-401",
      website: "www.healthanalyticspro.com",
      contact: "contact@healthanalyticspro.com"
    },
    {
      name: "MedSupply Chain",
      category: "Supply Chain",
      description: "Medical supply chain management and procurement solutions",
      booth: "D-402",
      website: "www.medsupplychain.com",
      contact: "info@medsupplychain.com"
    }
  ];

  const boothSizes = [
    {
      size: "Standard Booth (3m x 3m)",
      price: "₹45,000",
      features: ["9 sqm exhibition space", "Basic furniture included", "Power connection", "Company name board"]
    },
    {
      size: "Premium Booth (4m x 4m)",
      price: "₹75,000",
      features: ["16 sqm exhibition space", "Premium furniture package", "Enhanced lighting", "Corner location preference", "Storage facility"]
    },
    {
      size: "Executive Booth (6m x 6m)",
      price: "₹1,20,000",
      features: ["36 sqm exhibition space", "Custom booth design support", "Priority location", "Multiple power points", "Dedicated meeting area", "Welcome kit inclusion"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Exhibition Directory
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore cutting-edge medical technologies and solutions from leading healthcare companies
            </p>
            <div className="flex items-center justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" />
                <span>50+ Exhibitors</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-secondary" />
                <span>Industry Leaders</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-ocean-blue" />
                <span>Innovation Showcase</span>
              </div>
            </div>
          </div>

          {/* Current Exhibitors */}
          <div className="mb-20">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Confirmed Exhibitors
              </h2>
              <p className="text-lg text-muted-foreground">
                Meet our exhibitors and discover the latest innovations in healthcare
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exhibitors.map((exhibitor, index) => (
                <div
                  key={exhibitor.name}
                  className="bg-card p-6 rounded-xl shadow-card border border-border hover:shadow-elegant transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                      <Building className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                        Booth {exhibitor.booth}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">{exhibitor.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{exhibitor.category}</p>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{exhibitor.description}</p>

                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      <span>{exhibitor.booth} - Exhibition Hall</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3 h-3" />
                      <span>{exhibitor.contact}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <Button variant="outline" size="sm" className="w-full">
                      Visit Booth
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Exhibition Information */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">Exhibition Highlights</h2>
              <div className="bg-card p-8 rounded-xl shadow-card border border-border">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Latest Technologies</h3>
                      <p className="text-muted-foreground text-sm">Explore cutting-edge medical devices, software solutions, and innovative healthcare technologies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Networking Opportunities</h3>
                      <p className="text-muted-foreground text-sm">Connect with industry leaders, suppliers, and potential business partners</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-ocean-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Product Demonstrations</h3>
                      <p className="text-muted-foreground text-sm">Live demonstrations and hands-on experience with the latest medical innovations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-convention-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Educational Resources</h3>
                      <p className="text-muted-foreground text-sm">Access to white papers, case studies, and educational materials from exhibitors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-bold text-foreground mb-6">Exhibition Schedule</h2>
              <div className="bg-card p-8 rounded-xl shadow-card border border-border">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Day 1 - October 29th, 2025</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Exhibition Setup</span>
                        <span>06:00 - 08:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Exhibition Open</span>
                        <span>08:30 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Networking Coffee Breaks</span>
                        <span>10:30 & 15:00</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Day 2 - October 30th, 2025</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Exhibition Open</span>
                        <span>08:30 - 17:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Product Demos</span>
                        <span>09:00 - 16:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Booth Dismantling</span>
                        <span>17:00 - 19:00</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> Exhibition hall will be open to all registered attendees during coffee breaks and lunch sessions for maximum networking opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Apply for Exhibition */}
          <div className="animate-fade-in">
            <div className="bg-gradient-hero p-12 rounded-xl shadow-glow text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Apply for Exhibition Space
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Showcase your products and services to 500+ medical professionals. Limited spaces available.
              </p>
              <Button variant="secondary" size="lg" className="animate-float">
                Apply Now
              </Button>
            </div>

            {/* Booth Pricing */}
            <div className="grid md:grid-cols-3 gap-6">
              {boothSizes.map((booth, index) => (
                <div
                  key={booth.size}
                  className="bg-card p-6 rounded-xl shadow-card border border-border hover:shadow-elegant transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">{booth.size}</h3>
                  <div className="text-2xl font-bold text-primary mb-4">{booth.price}</div>
                  <ul className="space-y-2 mb-6">
                    {booth.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Select This Package
                  </Button>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="mt-12 bg-card p-8 rounded-xl shadow-card border border-border">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Exhibition Inquiries</h3>
                <p className="text-muted-foreground">For exhibition bookings and inquiries, please contact our team</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">convention@lugi.org</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">9894816962, 0422-4374920</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Exhibition Prospectus</p>
                      <p className="text-muted-foreground">Download detailed information</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Download Prospectus
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibitors;