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
      <div className="w-full bg-gray-900 flex flex-col items-center">
        <div className="w-full flex flex-col justify-center bg-gray-900">
          <Navbar />
          <Main/>
          <About/>
          <Resume/>
          <Projects/>
          <Contact/>
          </div>
      </div>
  );
}

export default App;
