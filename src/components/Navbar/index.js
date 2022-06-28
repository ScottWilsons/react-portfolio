import React from "react";
import "./index.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="logoBox">
        <div className="logo" />
      </div>
      <p className="linkButton">About</p>
      <p className="linkButton">Projects</p>
      <p className="linkButton">Skills</p>
      <p className="linkButton">Testimonials</p>
      <p className="linkButton">Contact</p>
    </div>
  );
}

export default Navbar;
