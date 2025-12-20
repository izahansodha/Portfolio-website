import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main.jsx";
import About from "./pages/about.jsx";
import Resume from "./pages/resume.jsx";
import Projects from "./pages/project.jsx";
import Contact from "./pages/contact.jsx";

function App() {
  return (
      <div className="w-full h-screen bg-[#0c969c] flex flex-col items-center">
        <div className="p-5 flex justify-center">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
  );
}

export default App;
