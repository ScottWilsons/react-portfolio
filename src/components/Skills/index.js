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
import {
  SiTypescript,
  SiJest,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
} from "react-icons/si";

function Skills() {
  return (
    <div id="skills" className="skills-wrapper">
      <div className="skills">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-content">
          <div className="skill-section-container">
            <div className="skill-logo-container">
              <FaCss3Alt className="skill-logo" />
            </div>
            <div className="skill-logo-container">
              <FaHtml5 className="skill-logo" />
            </div>
            <div className="skill-logo-container">
              <FaReact className="skill-logo" />
            </div>
            <div className="skill-logo-container">
              <FaSass className="skill-logo" />
            </div>
          </div>
          <div className="skill-section-container">
            <div className="skill-logo-container">
              <DiJavascript1 className="skill-logo" />
            </div>
            <div className="skill-logo-container">
              <FaNodeJs className="skill-logo" />
            </div>
            <div className="skill-logo-container">
              <FaPython className="skill-logo" />
            </div>
            <div className="skill-logo-container">
              <SiTypescript className="skill-logo" />
            </div>
          </div>
          <div className="skill-section-container">
            <div className="skill-logo-container">
              <DiPhotoshop className="skill-logo" />
            </div>
            <div className="skill-logo-container">
              <FaFigma className="skill-logo" />
            </div>
            <div className="skill-logo-container">
              <FaTrello className="skill-logo" />
            </div>
            <div className="skill-logo-container">
              <FaJira className="skill-logo" />
            </div>
          </div>
          <div className="skill-section-container">
            <div className="skill-logo-container">
              <SiJest className="skill-logo" />
            </div>
            <div className="skill-logo-container">
              <SiNextdotjs className="skill-logo" />
            </div>
            <div className="skill-logo-container">
              <SiExpress className="skill-logo" />
            </div>
            <div className="skill-logo-container">
              <SiPostgresql className="skill-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
