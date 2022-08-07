import React from "react";
import "./index.css";

function Contact() {
  return (
    <div id="contact" className="contact-wrapper">
      <div className="contact">
        <h2 className="contact-title">Contact</h2>
        <div className="contact-content">
          <form
            className="form-content"
            action="https://formsubmit.co/88ffc94f0170df701aa60e5b85f4d42f"
            method="POST"
          >
            <input
              className="contact-input"
              type="email"
              name="email"
              placeholder="Your email"
              required
            ></input>
            <input
              className="contact-input"
              type="text"
              name="Name"
              placeholder="Your name"
              required
            ></input>
            <input
              className="contact-input-message"
              type="text"
              name="Message"
              placeholder="Your message"
              required
            ></input>
            <input
              type="hidden"
              name="_subject"
              value="New Message From Portfolio"
              required
            ></input>
            <button className="send-button" type="submit">
              Send
            </button>
          </form>
          <div className="logo-container">
            <a
              href="https://www.linkedin.com/in/scott-wilsons/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-logo-link">
                <div className="linkedin"></div>
              </div>
            </a>
            <a
              href="https://github.com/ScottWilsons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-logo-link">
                <div className="github"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
