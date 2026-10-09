import "./EventHighlights.css";

function EventHighlights() {
  return (
    <section className="highlights" id="events">
      <h2>✨ Why Attend?</h2>

      <div className="highlight-container">

        <div className="highlight-card">
          <h3>🎤 Inspiring Speakers</h3>
          <p>
            Learn from industry experts, innovators, and successful
            entrepreneurs sharing their experiences.
          </p>
        </div>

        <div className="highlight-card">
          <h3>🤝 Networking</h3>
          <p>
            Meet professionals, students, and recruiters to build valuable
            career connections.
          </p>
        </div>

        <div className="highlight-card">
          <h3>🚀 Workshops</h3>
          <p>
            Participate in interactive sessions, coding workshops, and
            hands-on technical activities.
          </p>
        </div>

        <div className="highlight-card">
          <h3>🎁 Exciting Rewards</h3>
          <p>
            Win exciting prizes, certificates, goodies, and exclusive
            opportunities throughout the event.
          </p>
        </div>

      </div>
    </section>
  );
}

export default EventHighlights;