import React from "react";
import "./index.css";
import {
  FaCss3Alt,
  FaHtml5,
  FaFigma,
  FaTrello,
  FaJira,
  FaPython,
  FaSass,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { DiJavascript1, DiPhotoshop } from "react-icons/di";
import { SiTypescript } from "react-icons/si";

function Skills() {
  return (
    <div id="skills" className="skills-wrapper">
      <div className="skills">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-content">
          <div className="skill-section-container">
            <div className="skill-logo">
              <FaCss3Alt />
            </div>
            <div className="skill-logo">
              <FaHtml5 />
            </div>
            <div className="skill-logo">
              <FaReact />
            </div>
            <div className="skill-logo">
              <FaSass />
            </div>
          </div>
          <div className="skill-section-container">
            <div className="skill-logo">
              <DiJavascript1 />
            </div>
            <div className="skill-logo">
              <FaNodeJs />
            </div>
            <div className="skill-logo">
              <FaPython />
            </div>
            <div className="skill-logo">
              <SiTypescript />
            </div>
          </div>
          <div className="skill-section-container">
            <div className="skill-logo">
              <DiPhotoshop />
            </div>
            <div className="skill-logo">
              <FaFigma />
            </div>
            <div className="skill-logo">
              <FaTrello />
            </div>
            <div className="skill-logo">
              <FaJira />
            </div>
          </div>
          {/* <div className="skill-section-container">
            <div className="skill-logo"></div>
            <div className="skill-logo"></div>
            <div className="skill-logo"></div>
            <div className="skill-logo"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
