import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import EventHighlights from "./components/EventHighlights";
import EventSchedule from "./components/EventSchedule";
import RSVPForm from "./components/RSVPForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Hero />

      <Countdown />

      <EventHighlights />

      <EventSchedule />

      <RSVPForm />

      <Footer />
    </div>
  );
}

export default App;