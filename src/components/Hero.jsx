import React from 'react';
import './Hero.css'; // Create a CSS file for styling
import Img from '/img.png'; // Import the image file
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <img src={Img} alt="Aayush Gupta" className="profile-pic" />
        <h1>Aayush Gupta</h1>
        <p>Talent Acquisition Manager | Leadership Hiring Specialist</p>
        <div className="hero-buttons">
          <a href="https://linkedin.com/in/aayushgupta8602021515" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
          <a href="/resume.pdf" download className="btn">Download Resume</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
