import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MentalWellnessChatbot from "./components/MentalWellnessChatbot";
import "./App.css";

function App() {
  return (
  
      <div className="app">
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <MentalWellnessChatbot />
      </div>
  );
}

export default App;