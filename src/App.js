import "./App.css";
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Welcome from "./components/Welcome";

function App() {
  return (
    <main className="main">
      <div className="background">
        <Navbar />
        <div className="content">
          <Welcome />
          <About />
          <Projects />
          <Skills />
          <Testimonials />
          <Contact />
        </div>
      </div>
    </main>
  );
}

export default App;
