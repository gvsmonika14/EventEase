import { useEffect, useState } from "react";
import "./Countdown.css";

function Countdown() {
  const eventDate = new Date("December 25, 2026 10:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = eventDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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