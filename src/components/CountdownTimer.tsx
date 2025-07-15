import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const conventionDate = new Date("2025-10-29T09:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = conventionDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="bg-gradient-card p-6 rounded-xl shadow-elegant border border-border animate-fade-in">
      <h3 className="text-xl font-semibold text-center mb-4 text-foreground">
        Convention Starts In
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {timeUnits.map((unit, index) => (
          <div
            key={unit.label}
            className="text-center bg-card p-4 rounded-lg shadow-card border border-border hover:shadow-elegant transition-all duration-300 animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-2xl md:text-3xl font-bold text-primary">
              {unit.value.toString().padStart(2, "0")}
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;