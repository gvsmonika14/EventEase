function Hero(props) {
  return (
    <div className="hero">
      <h1>🎉 {props.eventName}</h1>

      <h2>RSVP Management System</h2>

      <p>
        Join us for an exciting day of learning, networking,
        and innovation!
      </p>

      <hr />

      <p>📅 <strong>Date:</strong> {props.eventDate}</p>

      <p>⏰ <strong>Time:</strong> {props.eventTime}</p>

      <p>📍 <strong>Venue:</strong> {props.venue}</p>
    </div>
  );
}

export default Hero;