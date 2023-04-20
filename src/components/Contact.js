import React from "react";
import logo from "./headshot.jpg";
import "./Contact.css";

export default function Description() {
  return (
    <div className="layout">
      <div id="profile-section-1">
        <h1 id="text-name">Adrian Nadarajah</h1>
        <img id="headshot" src={logo} alt="Headshot of Adrian Nadarajah" />
      </div>
      <div className="profile-section-2">
        <div id="phone">
          <span id="telephone-icon" className="material-symbols-outlined">
            call
          </span>
          <p className="telephone-number">647.836.6152</p>
        </div>
        <div id="email">
          <a href="mailto:adriannadarajah@gmail.com">
            <span id="email-icon" className="material-symbols-outlined">
              mail
            </span>
          </a>
          <p className="email">Email</p>
        </div>
        <div id="linkedin">
          <a
            // href="https://www.linkedin.com/in/adrian-nadarajah-90a39a70/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span id="linkedin-icon" className="material-symbols-outlined">
              group
            </span>
          </a>
          <p className="linkedin" id>
            Linkedin
          </p>
        </div>
      </div>
      <div className="profile-section-3">
        <p className="data-analyst">
          Big Data Analyst & Data Product Developer
        </p>
      </div>
      <div className="button-section">
        <form
          action="https://adriannadarajah.pythonanywhere.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="about-me-button">About Me</button>
        </form>
        <form
          action="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="professional-button">Professional</button>
        </form>
        <form
          action="https://adriannadarajah.pythonanywhere.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hobbies-button">Hobbies</button>
        </form>
      </div>
    </div>
  );
}
