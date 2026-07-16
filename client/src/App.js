import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import RSVPForm from "./components/RSVPForm";

function App() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <Hero
          eventName="Annual Tech Conference 2026"
          eventDate="25 December 2026"
          eventTime="10:00 AM"
          venue="Hyderabad"
        />

        <RSVPForm />
      </div>
    </div>
  );
}
export default App;