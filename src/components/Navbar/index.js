import React from "react";
import "./index.css";

function Navbar() {
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
    </div>
  );
}

export default Navbar;
