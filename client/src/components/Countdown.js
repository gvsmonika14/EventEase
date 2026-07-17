import { useEffect, useState } from "react";
import "./Countdown.css";

function Countdown() {
  const eventDate = new Date("December 25, 2026 10:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    // Run immediately so the countdown appears without waiting 1 second
    calculateTimeLeft();

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <section className="countdown">
      <h2>⏳ Event Starts In</h2>

      <div className="countdown-box">
        <div>
          <h1>{timeLeft.days}</h1>
          <p>Days</p>
        </div>

        <div>
          <h1>{timeLeft.hours}</h1>
          <p>Hours</p>
        </div>

        <div>
          <h1>{timeLeft.minutes}</h1>
          <p>Minutes</p>
        </div>

        <div>
          <h1>{timeLeft.seconds}</h1>
          <p>Seconds</p>
        </div>
      </div>
    </section>
  );
}

export default Countdown;