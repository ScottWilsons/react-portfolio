import React from "react";
import "./index.css";

function Contact() {
  return (
    <div id="contact" className="contact-wrapper">
      <div className="contact">
        <h2 className="contact-title">Contact</h2>
        <div className="contact-content">
          <form
            action="https://formsubmit.co/88ffc94f0170df701aa60e5b85f4d42f"
            method="POST"
          >
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            ></input>
            <input
              type="text"
              name="Name"
              placeholder="Your name"
              required
            ></input>
            <input
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
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
