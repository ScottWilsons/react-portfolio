import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("light-mode");
  function ThemeSetter() {
    if (theme === "light-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  }
  return (
    <main className={theme}>
      <div className="background">
        <Navbar ThemeSetter={ThemeSetter} />
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
