import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-card">

        <h1>🎉 Annual Tech Conference 2026</h1>

        <h3>Where Innovation Meets Technology</h3>

        <p>
          Join developers, designers and innovators for an unforgettable
          experience filled with learning, networking and exciting sessions.
        </p>

        <button>Register Now 🚀</button>

        <div className="hero-info">

          <div>
            <h2>📅</h2>
            <span>25 Dec 2026</span>
          </div>

          <div>
            <h2>📍</h2>
            <span>Hyderabad</span>
          </div>

          <div>
            <h2>👥</h2>
            <span>500+ Guests</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;