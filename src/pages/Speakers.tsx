import Navigation from "@/components/Navigation";
import { Users, Award, Building, Linkedin, Twitter, Globe } from "lucide-react";

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Rajesh Kumar",
      title: "Chief Medical Officer",
      organization: "Apollo Hospitals, Chennai",
      bio: "Dr. Rajesh Kumar is a renowned cardiologist with over 20 years of experience in interventional cardiology. He has pioneered several minimally invasive cardiac procedures and has published extensively in international journals. He leads the cardiac care division at Apollo Hospitals and has been instrumental in advancing telemedicine initiatives across South India.",
      specializations: ["Interventional Cardiology", "Telemedicine", "Medical Innovation"],
      sessions: ["Keynote: Future of Medical Technology"],
      image: "/api/placeholder/300/400",
      social: {
        linkedin: "#",
        website: "#"
      }
    },
    {
      name: "Dr. Priya Sharma",
      title: "Director of AI Research",
      organization: "IIT Madras Healthcare Division",
      bio: "Dr. Priya Sharma is a leading expert in artificial intelligence applications in healthcare. She holds a PhD in Computer Science from Stanford University and has been at the forefront of developing AI-powered diagnostic tools. Her research focuses on machine learning algorithms for medical imaging and predictive healthcare analytics.",
      specializations: ["Artificial Intelligence", "Medical Imaging", "Predictive Analytics"],
      sessions: ["Technical Session: AI in Healthcare"],
      image: "/api/placeholder/300/400",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Dr. Arun Menon",
      title: "Senior Consultant",
      organization: "AIIMS, New Delhi",
      bio: "Dr. Arun Menon is a distinguished internal medicine specialist with expertise in digital health solutions. He has been instrumental in implementing electronic health records systems across multiple hospitals and has conducted extensive research on telemedicine effectiveness in rural healthcare delivery.",
      specializations: ["Internal Medicine", "Digital Health", "Healthcare Systems"],
      sessions: ["Workshop: Telemedicine Best Practices"],
      image: "/api/placeholder/300/400",
      social: {
        linkedin: "#",
        website: "#"
      }
    },
    {
      name: "Dr. Meera Nair",
      title: "Head of Emergency Medicine",
      organization: "Fortis Healthcare, Bangalore",
      bio: "Dr. Meera Nair is an accomplished emergency medicine physician with over 15 years of experience in critical care. She has led emergency response teams during several major disasters and has published research on emergency medical protocols. She currently heads the emergency medicine department at Fortis Healthcare.",
      specializations: ["Emergency Medicine", "Critical Care", "Disaster Management"],
      sessions: ["Case Studies: Successful Medical Interventions"],
      image: "/api/placeholder/300/400",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Prof. Vikram Singh",
      title: "Professor of Neurosurgery",
      organization: "Christian Medical College, Vellore",
      bio: "Prof. Vikram Singh is an internationally recognized neurosurgeon specializing in complex brain and spine surgeries. He has performed over 3,000 successful neurosurgical procedures and has trained hundreds of medical professionals. His research in minimally invasive neurosurgical techniques has been published in top-tier medical journals.",
      specializations: ["Neurosurgery", "Spine Surgery", "Medical Education"],
      sessions: ["Panel Discussion: Digital Health Innovations"],
      image: "/api/placeholder/300/400",
      social: {
        linkedin: "#",
        website: "#"
      }
    },
    {
      name: "Dr. Sunita Reddy",
      title: "Chief of Pediatrics",
      organization: "Rainbow Children's Hospital, Hyderabad",
      bio: "Dr. Sunita Reddy is a leading pediatrician with expertise in neonatal care and pediatric cardiology. She has been recognized for her contributions to child healthcare and has established several pediatric care protocols that are now standard practice across India. She is also actively involved in medical education and research.",
      specializations: ["Pediatrics", "Neonatal Care", "Pediatric Cardiology"],
      sessions: ["Research Presentations: Latest Clinical Studies"],
      image: "/api/placeholder/300/400",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Speakers
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Learn from India's most distinguished medical professionals and healthcare innovators
            </p>
            <div className="flex items-center justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>50+ Expert Speakers</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-secondary" />
                <span>Leading Institutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-ocean-blue" />
                <span>Multiple Specializations</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div
                key={speaker.name}
                className="bg-card rounded-xl shadow-card border border-border overflow-hidden hover:shadow-elegant transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-card flex items-center justify-center">
                    <Users className="w-24 h-24 text-muted-foreground/50" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{speaker.name}</h3>
                    <p className="text-white/90 text-sm">{speaker.title}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Building className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{speaker.organization}</span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {speaker.bio}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {speaker.specializations.map((spec, specIndex) => (
                        <span
                          key={specIndex}
                          className="inline-block bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Sessions:</h4>
                    <div className="space-y-1">
                      {speaker.sessions.map((session, sessionIndex) => (
                        <div key={sessionIndex} className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                          {session}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    {speaker.social.linkedin && (
                      <a href={speaker.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {speaker.social.twitter && (
                      <a href={speaker.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {speaker.social.website && (
                      <a href={speaker.social.website} className="text-muted-foreground hover:text-primary transition-colors">
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center animate-fade-in">
            <div className="bg-gradient-hero p-8 rounded-xl shadow-glow">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                More Speakers Coming Soon
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                We're continuously adding more distinguished speakers to our lineup. Stay tuned for updates!
              </p>
              <div className="text-primary-foreground/80">
                <span className="text-3xl font-bold">50+</span>
                <span className="ml-2">confirmed speakers and counting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;