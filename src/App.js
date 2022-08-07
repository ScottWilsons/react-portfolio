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
  const saved = localStorage.getItem("key");
  const [theme, setTheme] = useState(saved === null ? "light-mode" : saved);
  console.log(theme);
  function ThemeSetter() {
    if (theme === "light-mode") {
      setTheme("dark-mode");
      localStorage.setItem("key", "dark-mode");
    } else if (theme === "dark-mode") {
      setTheme("light-mode");
      localStorage.setItem("key", "light-mode");
    }
  }
  return (
    <body className={theme}>
      <main className="main">
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
    </body>
  );
}

export default App;
