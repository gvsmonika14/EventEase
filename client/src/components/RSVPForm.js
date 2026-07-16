import { useState } from "react";

function RSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("");

  function handleSubmit() {
    if (name === "" || email === "" || guests === "") {
      alert("⚠ Please fill in all the fields.");
      return;
    }

    alert(
      `🎉 Thank you, ${name}!

Your RSVP has been submitted successfully.

📧 Email: ${email}
👥 Guests: ${guests}`
    );

    // Clear the form
    setName("");
    setEmail("");
    setGuests("");
  }

  return (
    <div className="form-card">
      <h2>RSVP Registration</h2>

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

      <button onClick={handleSubmit}>
        Submit RSVP
      </button>
    </div>
  );
}

export default RSVPForm;