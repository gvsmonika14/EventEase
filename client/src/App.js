import AdminDashboard from "./components/AdminDashboard";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import EventHighlights from "./components/EventHighlights";
import EventSchedule from "./components/EventSchedule";
import Speakers from "./components/Speakers";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />

      <Countdown />

      <EventHighlights />

      <EventSchedule />

      <Speakers />

      <Gallery />

      <FAQ />

      <AdminDashboard />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;