import "./App.css";
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main className="main">
      <Navbar />
      <div className="content">
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}

export default App;
