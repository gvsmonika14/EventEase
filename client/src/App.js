import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import EventHighlights from "./components/EventHighlights";
import EventSchedule from "./components/EventSchedule";
import Speakers from "./components/Speakers";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
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
      <Speakers />
      <Gallery />
      <FAQ />
      <RSVPForm />
      <Footer />
    </div>
  );
}

export default App;