import Navigation from "@/components/Navigation";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const Agenda = () => {
  const agendaData = [
    {
      day: "Day 1 - October 29th, 2025",
      sessions: [
        {
          time: "08:00 - 09:00",
          title: "Registration & Welcome Coffee",
          type: "registration",
          venue: "Main Lobby"
        },
        {
          time: "09:00 - 09:30",
          title: "Opening Ceremony & Welcome Address",
          speaker: "Convention Committee",
          type: "opening",
          venue: "Main Hall"
        },
        {
          time: "09:30 - 10:30",
          title: "Keynote: Future of Medical Technology",
          speaker: "Dr. Rajesh Kumar",
          type: "keynote",
          venue: "Main Hall"
        },
        {
          time: "10:30 - 11:00",
          title: "Tea Break & Networking",
          type: "break",
          venue: "Exhibition Area"
        },
        {
          time: "11:00 - 12:30",
          title: "Panel Discussion: Digital Health Innovations",
          speaker: "Multiple Speakers",
          type: "panel",
          venue: "Main Hall"
        },
        {
          time: "12:30 - 13:30",
          title: "Lunch & Exhibition Visit",
          type: "break",
          venue: "Restaurant"
        },
        {
          time: "13:30 - 15:00",
          title: "Technical Session: AI in Healthcare",
          speaker: "Dr. Priya Sharma",
          type: "technical",
          venue: "Conference Room A"
        },
        {
          time: "15:00 - 15:30",
          title: "Coffee Break",
          type: "break",
          venue: "Exhibition Area"
        },
        {
          time: "15:30 - 17:00",
          title: "Workshop: Telemedicine Best Practices",
          speaker: "Dr. Arun Menon",
          type: "workshop",
          venue: "Conference Room B"
        },
        {
          time: "19:30 - 22:00",
          title: "Welcome Dinner & Cultural Program",
          type: "social",
          venue: "Beach Restaurant"
        }
      ]
    },
    {
      day: "Day 2 - October 30th, 2025",
      sessions: [
        {
          time: "08:30 - 09:00",
          title: "Morning Coffee & Registration",
          type: "registration",
          venue: "Main Lobby"
        },
        {
          time: "09:00 - 10:30",
          title: "Research Presentations: Latest Clinical Studies",
          speaker: "Various Researchers",
          type: "research",
          venue: "Main Hall"
        },
        {
          time: "10:30 - 11:00",
          title: "Tea Break",
          type: "break",
          venue: "Exhibition Area"
        },
        {
          time: "11:00 - 12:30",
          title: "Industry Forum: Healthcare Policy Updates",
          speaker: "Policy Experts",
          type: "forum",
          venue: "Main Hall"
        },
        {
          time: "12:30 - 13:30",
          title: "Lunch",
          type: "break",
          venue: "Restaurant"
        },
        {
          time: "13:30 - 15:00",
          title: "Case Studies: Successful Medical Interventions",
          speaker: "Dr. Meera Nair",
          type: "case-study",
          venue: "Conference Room A"
        },
        {
          time: "15:00 - 15:30",
          title: "Coffee Break",
          type: "break",
          venue: "Exhibition Area"
        },
        {
          time: "15:30 - 16:30",
          title: "Awards Ceremony & Recognition",
          type: "awards",
          venue: "Main Hall"
        },
        {
          time: "16:30 - 17:00",
          title: "Closing Remarks & Next Year's Announcement",
          type: "closing",
          venue: "Main Hall"
        }
      ]
    }
  ];

  const getSessionTypeColor = (type: string) => {
    const colors = {
      registration: "bg-muted text-muted-foreground",
      opening: "bg-primary text-primary-foreground",
      keynote: "bg-gradient-hero text-primary-foreground",
      break: "bg-warm-sand text-foreground",
      panel: "bg-secondary text-secondary-foreground",
      technical: "bg-ocean-blue text-white",
      workshop: "bg-accent text-accent-foreground",
      social: "bg-convention-gold text-foreground",
      research: "bg-convention-navy text-white",
      forum: "bg-gradient-accent text-accent-foreground",
      "case-study": "bg-primary-glow text-white",
      awards: "bg-convention-gold text-foreground",
      closing: "bg-primary text-primary-foreground"
    };
    return colors[type as keyof typeof colors] || "bg-card text-card-foreground";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Convention Agenda
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive 2-day program featuring keynotes, panels, workshops, and networking opportunities
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>October 29-30, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>MGM Beach Resort, Chennai</span>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {agendaData.map((day, dayIndex) => (
              <div key={day.day} className="animate-fade-in-up" style={{ animationDelay: `${dayIndex * 0.2}s` }}>
                <div className="bg-gradient-card p-6 rounded-xl shadow-elegant border border-border mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{day.day}</h2>
                  <p className="text-muted-foreground">Full day of learning, networking, and professional development</p>
                </div>

                <div className="space-y-4">
                  {day.sessions.map((session, sessionIndex) => (
                    <div
                      key={sessionIndex}
                      className="bg-card p-6 rounded-lg shadow-card border border-border hover:shadow-elegant transition-all duration-300 animate-scale-in"
                      style={{ animationDelay: `${(dayIndex * 0.2) + (sessionIndex * 0.05)}s` }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex items-center gap-3 md:w-48">
                          <Clock className="w-5 h-5 text-primary" />
                          <span className="font-semibold text-foreground">{session.time}</span>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-foreground mb-1">{session.title}</h3>
                              {session.speaker && (
                                <div className="flex items-center gap-2 mb-2">
                                  <Users className="w-4 h-4 text-muted-foreground" />
                                  <span className="text-muted-foreground">{session.speaker}</span>
                                </div>
                              )}
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">{session.venue}</span>
                              </div>
                            </div>
                            
                            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getSessionTypeColor(session.type)}`}>
                              {session.type.charAt(0).toUpperCase() + session.type.slice(1).replace('-', ' ')}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center animate-fade-in">
            <div className="bg-gradient-hero p-8 rounded-xl shadow-glow">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Download Complete Agenda
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Get the full agenda with detailed session descriptions, speaker bios, and venue maps
              </p>
              <button className="bg-white/20 text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;