import "./App.css";
import "aos/dist/aos.css";

import { useEffect } from "react";
import AOS from "aos";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import EventHighlights from "./components/EventHighlights";
import EventSchedule from "./components/EventSchedule";
import Speakers from "./components/Speakers";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import RSVPForm from "./components/RSVPForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <div className="App">

      <div data-aos="fade-down">
        <Navbar />
      </div>

      <div data-aos="zoom-in">
        <Hero />
      </div>

      <div data-aos="fade-up">
        <Countdown />
      </div>

      <div data-aos="fade-right">
        <EventHighlights />
      </div>

      <div data-aos="fade-left">
        <EventSchedule />
      </div>

      <div data-aos="zoom-in-up">
        <Speakers />
      </div>

      <div data-aos="zoom-in">
        <Gallery />
      </div>

      <div data-aos="fade-up">
        <FAQ />
      </div>

      <div data-aos="flip-left">
        <RSVPForm />
      </div>

      <div data-aos="fade-up">
        <Contact />
      </div>

      <div data-aos="fade">
        <Footer />
      </div>

    </div>
  );
}

export default App;