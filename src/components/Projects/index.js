import React from "react";
import "./index.css";
import ImageSlider from "../Slider/imageSlider";

function Projects() {
  return (
    <div id="projects" className="projects-wrapper">
      <div className="projects">
        <h2 className="projects-title">Projects</h2>
        <ImageSlider />
      </div>
    </div>
  );
}

export default Projects;
