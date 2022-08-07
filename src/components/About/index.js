import React from "react";
import "./index.css";

function About() {
  return (
    <div id="about" className="about-wrapper">
      <div className="about">
        <h2 className="about-title">About</h2>
        <div className="about-content">
          <div className="about-image"></div>
          <div className="about-text-background">
            <p className="about-text">
              A motivated software engineer, seeking an environment to get stuck
              in to and use my problem solving mindset and skills I have learned
              during my time at School of Code. From previous employments, I
              have developed soft skills that I believe will help me make a
              difference in the tech industry - Communication, Leadership and
              Adaptability are among these.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
