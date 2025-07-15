import Navigation from "@/components/Navigation";
import { Camera, MapPin, Utensils, ShoppingBag, Building, Waves, Car, Clock } from "lucide-react";

const ChennaiExperience = () => {
  const attractions = [
    {
      name: "Marina Beach",
      category: "Beaches",
      icon: Waves,
      description: "World's second-longest urban beach, perfect for morning walks and sunset views",
      distance: "35 km from venue",
      highlights: ["13 km long beach", "Street food stalls", "Lighthouse", "Cultural events"]
    },
    {
      name: "Mahabalipuram",
      category: "Heritage",
      icon: Building,
      description: "UNESCO World Heritage site with ancient rock-cut temples and sculptures",
      distance: "25 km from venue",
      highlights: ["Shore Temple", "Five Rathas", "Krishna's Butter Ball", "Beach town"]
    },
    {
      name: "Kapaleeshwarar Temple",
      category: "Religious",
      icon: Building,
      description: "Ancient Dravidian architecture temple dedicated to Lord Shiva",
      distance: "40 km from venue",
      highlights: ["7th-century temple", "Dravidian architecture", "Mylapore district", "Cultural significance"]
    },
    {
      name: "Fort St. George",
      category: "Historical",
      icon: Building,
      description: "First British fortress in India, now housing a museum",
      distance: "42 km from venue",
      highlights: ["Colonial history", "St. Mary's Church", "Museum", "Government offices"]
    },
    {
      name: "T. Nagar",
      category: "Shopping",
      icon: ShoppingBag,
      description: "One of India's largest shopping districts for traditional and modern items",
      distance: "38 km from venue",
      highlights: ["Ranganathan Street", "Silk sarees", "Jewelry", "Bustling markets"]
    },
    {
      name: "Covelong Beach",
      category: "Beaches",
      icon: Waves,
      description: "Pristine beach near the venue, perfect for water sports and relaxation",
      distance: "15 km from venue",
      highlights: ["Water sports", "Fishing village", "Peaceful environment", "Beach resorts"]
    }
  ];

  const foodExperiences = [
    {
      dish: "Idli & Dosa",
      description: "Traditional South Indian breakfast served with sambar and chutneys",
      type: "Breakfast"
    },
    {
      dish: "Chettinad Cuisine",
      description: "Spicy and flavorful dishes from the Chettinad region",
      type: "Regional Specialty"
    },
    {
      dish: "Filter Coffee",
      description: "Authentic South Indian coffee served in traditional steel tumblers",
      type: "Beverage"
    },
    {
      dish: "Biryani",
      description: "Fragrant rice dish with meat or vegetables, Chennai style",
      type: "Main Course"
    },
    {
      dish: "Payasam",
      description: "Traditional sweet dessert made with milk, rice, and jaggery",
      type: "Dessert"
    },
    {
      dish: "Street Food",
      description: "Marina Beach sundal, kothu parotta, and local snacks",
      type: "Street Food"
    }
  ];

  const tours = [
    {
      title: "Chennai Heritage Tour",
      duration: "Full Day (8 hours)",
      highlights: ["Fort St. George", "Kapaleeshwarar Temple", "San Thome Cathedral", "Government Museum"],
      price: "₹2,500 per person",
      includes: "Transportation, guide, lunch"
    },
    {
      title: "Mahabalipuram Day Trip",
      duration: "Full Day (6 hours)",
      highlights: ["Shore Temple", "Five Rathas", "Arjuna's Penance", "Tiger Cave"],
      price: "₹2,000 per person",
      includes: "Transportation, guide, entry fees"
    },
    {
      title: "Culinary Walking Tour",
      duration: "Half Day (4 hours)",
      highlights: ["Local markets", "Street food", "Traditional restaurants", "Spice shops"],
      price: "₹1,500 per person",
      includes: "Food tastings, guide"
    },
    {
      title: "Beach & Culture Tour",
      duration: "Half Day (4 hours)",
      highlights: ["Marina Beach", "Mylapore district", "Traditional crafts", "Local life"],
      price: "₹1,200 per person",
      includes: "Transportation, guide"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Discover Chennai
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore the cultural capital of South India and make the most of your visit to Chennai
            </p>
            <div className="flex items-center justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" />
                <span>Rich Heritage</span>
              </div>
              <div className="flex items-center gap-2">
                <Utensils className="w-5 h-5 text-secondary" />
                <span>Culinary Delights</span>
              </div>
              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-ocean-blue" />
                <span>Cultural Experiences</span>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="bg-gradient-card p-8 rounded-xl shadow-elegant border border-border mb-16 animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Welcome to Chennai
                </h2>
                <p className="text-muted-foreground mb-6">
                  Chennai, formerly known as Madras, is the capital city of Tamil Nadu and a major cultural, 
                  economic, and educational center in South India. Known for its rich history, beautiful beaches, 
                  classical music, and mouth-watering cuisine, Chennai offers a perfect blend of tradition and modernity.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Year-round pleasant weather</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-primary" />
                    <span>Easy transportation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-primary" />
                    <span>Diverse cuisine options</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-primary" />
                    <span>Photo-worthy locations</span>
                  </div>
                </div>
              </div>
              <div className="bg-muted/50 rounded-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-24 h-24 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">Chennai City Image</p>
                  <p className="text-sm text-muted-foreground mt-2">Cultural landmarks and modern skyline</p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Attractions */}
          <div className="mb-20">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Must-Visit Attractions
              </h2>
              <p className="text-lg text-muted-foreground">
                Discover Chennai's most iconic landmarks and hidden gems
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {attractions.map((attraction, index) => (
                <div
                  key={attraction.name}
                  className="bg-card p-6 rounded-xl shadow-card border border-border hover:shadow-elegant transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                      <attraction.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                      {attraction.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2">{attraction.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{attraction.description}</p>
                  
                  <div className="flex items-center gap-2 mb-4 text-primary text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{attraction.distance}</span>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-2">Highlights:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {attraction.highlights.map((highlight, hlIndex) => (
                        <div key={hlIndex} className="text-xs text-muted-foreground flex items-center gap-1">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Food Experience */}
          <div className="mb-20">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Culinary Journey
              </h2>
              <p className="text-lg text-muted-foreground">
                Taste the authentic flavors of South Indian cuisine
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foodExperiences.map((food, index) => (
                <div
                  key={food.dish}
                  className="bg-card p-6 rounded-xl shadow-card border border-border hover:shadow-elegant transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Utensils className="w-8 h-8 text-secondary" />
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      {food.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{food.dish}</h3>
                  <p className="text-muted-foreground text-sm">{food.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Organized Tours */}
          <div className="mb-20">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Organized Tours
              </h2>
              <p className="text-lg text-muted-foreground">
                Pre and post-convention tour packages for attendees
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {tours.map((tour, index) => (
                <div
                  key={tour.title}
                  className="bg-card p-8 rounded-xl shadow-card border border-border hover:shadow-elegant transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground">{tour.title}</h3>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">{tour.price}</div>
                      <div className="text-xs text-muted-foreground">{tour.duration}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-foreground mb-2">Tour Highlights:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {tour.highlights.map((highlight, hlIndex) => (
                        <div key={hlIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-foreground mb-1">Includes:</h4>
                    <p className="text-sm text-muted-foreground">{tour.includes}</p>
                  </div>

                  <button className="w-full bg-gradient-hero text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                    Book This Tour
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Information */}
          <div className="animate-fade-in">
            <div className="bg-gradient-card p-8 rounded-xl shadow-elegant border border-border">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Travel Tips & Information
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Car className="w-5 h-5 text-primary" />
                    Transportation
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Metro: Comprehensive network covering major areas</li>
                    <li>• Buses: Extensive public bus system</li>
                    <li>• Auto-rickshaws: Available throughout the city</li>
                    <li>• Cabs: Uber, Ola readily available</li>
                    <li>• Car rentals: Multiple agencies available</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-secondary" />
                    Shopping
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• T. Nagar: Traditional shopping district</li>
                    <li>• Express Avenue: Modern shopping mall</li>
                    <li>• Pondy Bazaar: Street shopping</li>
                    <li>• Silk sarees: Kanchipuram specialty</li>
                    <li>• Handicrafts: Bronze items, jewelry</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-ocean-blue" />
                    Best Time to Visit
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• October-February: Pleasant weather</li>
                    <li>• Early morning: Beach visits</li>
                    <li>• Evening: Temple visits</li>
                    <li>• Weekdays: Less crowded attractions</li>
                    <li>• Festival seasons: Cultural experiences</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">For Tour Bookings & Information:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div>
                    <p><strong>Email:</strong> mugesh@expressholidays.in</p>
                    <p><strong>Phone:</strong> 9894816962</p>
                  </div>
                  <div>
                    <p><strong>Office Hours:</strong> Mon-Fri 10am-6pm</p>
                    <p><strong>Emergency:</strong> 24/7 support available</p>
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

export default ChennaiExperience;