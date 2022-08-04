import React from "react";
import "./index.css";
import ImageSlider from "../Slider/imageSlider";
import { SliderData } from "../Slider/sliderData";

function Projects() {
  return (
    <div id="projects" className="projects-wrapper">
      <div className="projects">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-slider-container">
          <ImageSlider slides={SliderData} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
