import "./App.css";
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";

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
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
