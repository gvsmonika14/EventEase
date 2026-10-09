import ProtectedRoute from "./components/ProtectedRoute";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

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
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AdminDashboard from "./components/AdminDashboard";
import AdminLogin from "./components/AdminLogin";

function HomePage({ darkMode, setDarkMode }) {
  return (
    <>
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
      <RSVPForm />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <Routes>

      {/* Home Page */}
      <Route
        path="/"
        element={
          <HomePage
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        }
      />

      {/* Admin Login */}
      <Route
        path="/admin-login"
        element={<AdminLogin />}
      />

      {/* Protected Admin Dashboard */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;