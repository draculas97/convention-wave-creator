import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, Users, MapPin, Award, Building, Plane } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: null },
    { name: "Agenda", path: "/agenda", icon: Calendar },
    { name: "Speakers", path: "/speakers", icon: Users },
    { name: "Venue", path: "/venue", icon: MapPin },
    { name: "Sponsors", path: "/sponsors", icon: Award },
    { name: "Exhibitors", path: "/exhibitors", icon: Building },
    { name: "Chennai Experience", path: "/chennai", icon: Plane },
    { name: "Register", path: "/register", icon: null, isSpecial: true },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center animate-pulse-glow">
                <span className="text-primary-foreground font-bold text-xl">22</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-foreground">Annual Convention</h1>
                <p className="text-xs text-muted-foreground">October 29-30, 2025</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActivePath(item.path)
                    ? "bg-primary text-primary-foreground shadow-elegant"
                    : "text-foreground hover:text-primary hover:bg-muted"
                } ${item.isSpecial ? "ml-4" : ""}`}
              >
                {item.isSpecial ? (
                  <Button variant="hero" size="sm" className="animate-float">
                    {item.name}
                  </Button>
                ) : (
                  <span className="flex items-center gap-1">
                    {item.icon && <item.icon className="w-4 h-4" />}
                    {item.name}
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border border-border rounded-lg mt-2 shadow-card">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isActivePath(item.path)
                      ? "bg-primary text-primary-foreground shadow-elegant"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    {item.icon && <item.icon className="w-4 h-4" />}
                    {item.name}
                    {item.isSpecial && <span className="ml-auto text-xs bg-gradient-hero px-2 py-1 rounded text-primary-foreground">Register</span>}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;