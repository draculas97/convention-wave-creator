import Navigation from "@/components/Navigation";
import { MapPin, Car, Plane, Train, Phone, Wifi, Utensils, Waves, Camera, Star } from "lucide-react";

const Venue = () => {
  const amenities = [
    { icon: Wifi, title: "High-Speed WiFi", description: "Complimentary internet throughout the resort" },
    { icon: Utensils, title: "Multi-Cuisine Dining", description: "5 restaurants with diverse culinary options" },
    { icon: Waves, title: "Beach Access", description: "Private beach with recreational facilities" },
    { icon: Car, title: "Parking", description: "Ample parking space for all attendees" },
    { icon: Camera, title: "Photography", description: "Scenic locations for professional photos" },
    { icon: Star, title: "Luxury Accommodation", description: "5-star amenities and service standards" },
  ];

  const transportation = [
    {
      mode: "By Air",
      icon: Plane,
      details: [
        "Chennai International Airport (MAA) - 45 km away",
        "Regular taxi and cab services available",
        "Airport shuttle can be arranged",
        "Approximate travel time: 1-1.5 hours"
      ]
    },
    {
      mode: "By Train", 
      icon: Train,
      details: [
        "Chennai Central Railway Station - 40 km away",
        "Chennai Egmore Station - 38 km away",
        "Pre-paid taxi counters available",
        "Approximate travel time: 1-1.5 hours"
      ]
    },
    {
      mode: "By Road",
      icon: Car,
      details: [
        "Located on East Coast Road (ECR)",
        "Well-connected by state highways",
        "GPS coordinates: 12.7925° N, 80.2466° E",
        "Ample parking available at venue"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              MGM Beach Resort
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Experience luxury and comfort at one of Chennai's premier beach resorts, perfectly located on the scenic East Coast Road
            </p>
            <div className="flex items-center justify-center gap-2 text-primary">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">East Coast Road (ECR), Chennai, Tamil Nadu 603112</span>
            </div>
          </div>

          {/* Hero Image and Quick Info */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="animate-fade-in-up">
              <div className="bg-gradient-card rounded-xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-24 h-24 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">Resort Image Placeholder</p>
                  <p className="text-sm text-muted-foreground mt-2">Stunning beachfront property</p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-card p-8 rounded-xl shadow-card border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Resort Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-convention-gold mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">5-Star Luxury Resort</p>
                      <p className="text-sm text-muted-foreground">Premium accommodation and world-class facilities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Waves className="w-5 h-5 text-ocean-blue mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Private Beach Access</p>
                      <p className="text-sm text-muted-foreground">Exclusive beachfront with recreational activities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Utensils className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Multiple Dining Options</p>
                      <p className="text-sm text-muted-foreground">5 restaurants serving diverse cuisines</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Strategic Location</p>
                      <p className="text-sm text-muted-foreground">Easy access from Chennai airport and city center</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="mb-20">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Resort Amenities
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need for a comfortable and productive stay
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {amenities.map((amenity, index) => (
                <div
                  key={amenity.title}
                  className="bg-card p-6 rounded-xl shadow-card border border-border hover:shadow-elegant transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                    <amenity.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{amenity.title}</h3>
                  <p className="text-muted-foreground text-sm">{amenity.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Transportation */}
          <div className="mb-20">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How to Reach
              </h2>
              <p className="text-lg text-muted-foreground">
                Multiple convenient transportation options to reach the venue
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {transportation.map((transport, index) => (
                <div
                  key={transport.mode}
                  className="bg-card p-6 rounded-xl shadow-card border border-border animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-3">
                      <transport.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{transport.mode}</h3>
                  </div>
                  <ul className="space-y-2">
                    {transport.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Map and Contact */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-6">Location Map</h3>
              <div className="bg-card p-8 rounded-xl shadow-card border border-border h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive map will be embedded here</p>
                  <p className="text-sm text-muted-foreground mt-2">Google Maps integration</p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="bg-card p-8 rounded-xl shadow-card border border-border">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Resort Address</h4>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div className="text-muted-foreground">
                        <p>MGM Beach Resort</p>
                        <p>East Coast Road (ECR)</p>
                        <p>Chennai, Tamil Nadu 603112</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Resort Contact</h4>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">+91 44 2744 2447</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Convention Support</h4>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary" />
                        <span>9894816962</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary" />
                        <span>0422-4374920</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;