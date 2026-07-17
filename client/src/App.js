import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import EventHighlights from "./components/EventHighlights";
import RSVPForm from "./components/RSVPForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Countdown />
      <EventHighlights />
      <RSVPForm />
    </div>
  );
}

export default App;