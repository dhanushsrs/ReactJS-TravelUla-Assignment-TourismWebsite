import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import LandingPage from "./pages/Home/LandingPage";
import KenyaTrip from "./pages/Kenya/KenyaTrip";
import BookNow from "./pages/BookNow/BookNow";
import Itinerary from "./pages/Itinerary/Itinerary";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/kenya-trip" element={<KenyaTrip />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
