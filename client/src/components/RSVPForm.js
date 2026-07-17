import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import "./RSVPForm.css";

function RSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !guests) {
      alert("⚠ Please fill in all the fields.");
      return;
    }

    setSubmitted(true);

    setName("");
    setEmail("");
    setGuests("");

    // Hide confetti after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  }

  return (
    <section className="rsvp-section">

      {submitted && (
        <Confetti
        width={windowSize.width}
        height={windowSize.height}
        numberOfPieces={400}
        recycle={false}
        gravity={0.25}
        />
      )}

      <div className="form-card">

        <h2>📝 RSVP Registration</h2>

        {submitted && (
          <div className="success-message">
            🎉 Thank you! Your RSVP has been submitted successfully.
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="👤 Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="📧 Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="number"
            placeholder="👥 Number of guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />

          <button type="submit">
            Submit RSVP 🚀
          </button>

        </form>

      </div>

    </section>
  );
}

export default RSVPForm;