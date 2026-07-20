import "./EventHighlights.css";

function EventHighlights() {
  return (
    <section id="events"
    className="highlights"
    data-aos="fade-right"
    >

      <h2>🌟 Why Attend?</h2>

      <div className="highlight-container">

        <div className="card">
          <h3>💡 Learn from Experts</h3>
          <p>
            Attend inspiring sessions by experienced industry professionals.
          </p>
        </div>

        <div className="card">
          <h3>🤝 Network</h3>
          <p>
            Connect with developers, students, and recruiters.
          </p>
        </div>

        <div className="card">
          <h3>🚀 Hands-on Workshops</h3>
          <p>
            Build exciting projects and improve your practical skills.
          </p>
        </div>

        <div className="card">
          <h3>🏆 Win Exciting Prizes</h3>
          <p>
            Participate in competitions and win certificates and goodies.
          </p>
        </div>

      </div>

    </section>
  );
}

export default EventHighlights;