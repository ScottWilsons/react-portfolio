import React from "react";
import "./index.css";

function Navbar({ ThemeSetter }) {
  return (
    <div className="nav">
      <div className="logoBox">
        <div className="logo" />
      </div>
      <a href="#about" className="linkButton">
        About
      </a>
      <a href="#projects" className="linkButton">
        Projects
      </a>
      <a href="#skills" className="linkButton">
        Skills
      </a>
      <a href="#contact" className="linkButton">
        Contact
      </a>
      <button onClick={() => ThemeSetter()}>click here</button>
    </div>
  );
}

export default Navbar;
