import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { Music } from "./music";
import { Landing } from "./landing";
import {Live} from "./live";
import { Navigation } from "./navigation";
import {Contact} from "./contact"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/music" element={<Music />} />
        <Route path="/live" element={<Live />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes for other pages */}
      </Routes>
    </div>
  );
}

export default App;
