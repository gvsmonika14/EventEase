import "./EventSchedule.css";

function EventSchedule() {
  const schedule = [
    {
      time: "09:00 AM",
      title: "Registration",
      icon: "📝",
      description: "Check in and collect your event kit.",
    },
    {
      time: "10:00 AM",
      title: "Opening Keynote",
      icon: "🎤",
      description: "Welcome speech and keynote session.",
    },
    {
      time: "11:30 AM",
      title: "Networking Break",
      icon: "☕",
      description: "Meet speakers, developers, and recruiters.",
    },
    {
      time: "01:00 PM",
      title: "Hands-on Workshop",
      icon: "💻",
      description: "Build exciting real-world projects.",
    },
    {
      time: "04:00 PM",
      title: "Prize Distribution",
      icon: "🏆",
      description: "Certificates, prizes, and closing ceremony.",
    },
  ];

  return (
    <section className="schedule-section">
      <h2>📅 Event Schedule</h2>

      <div className="schedule-container">
        {schedule.map((item, index) => (
          <div className="schedule-card" key={index}>
            <div className="icon">{item.icon}</div>

            <h3>{item.time}</h3>

            <h4>{item.title}</h4>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventSchedule;