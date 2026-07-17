import "./Speakers.css";

function Speakers() {
  const speakers = [
    {
      name: "Sarah Johnson",
      role: "Senior Software Engineer",
      company: "Google",
      image: "https://i.pravatar.cc/300?img=32",
    },
    {
      name: "David Lee",
      role: "Cloud Architect",
      company: "Microsoft",
      image: "https://i.pravatar.cc/300?img=12",
    },
    {
      name: "Priya Sharma",
      role: "AI Engineer",
      company: "OpenAI",
      image: "https://i.pravatar.cc/300?img=47",
    },
    {
      name: "Alex Chen",
      role: "Frontend Lead",
      company: "Meta",
      image: "https://i.pravatar.cc/300?img=15",
    },
  ];

  return (
    <section className="speakers">
      <h2>🎤 Meet Our Speakers</h2>

      <div className="speaker-container">
        {speakers.map((speaker, index) => (
          <div className="speaker-card" key={index}>
            <img
              src={speaker.image}
              alt={speaker.name}
            />

            <h3>{speaker.name}</h3>

            <h4>{speaker.role}</h4>

            <p>{speaker.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Speakers;