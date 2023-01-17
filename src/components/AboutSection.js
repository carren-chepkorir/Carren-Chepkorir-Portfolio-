import React from "react";
import "./styles/AboutSection.css";
import mypic2 from "./assets/she-code.png";
const AboutSection = () => {
  return (
    <div className="section">
      <div className="about">
        <h1>ABOUT ME</h1>
      </div>
      <div className="section-container">
        <div className="section-image">
          <img src={mypic2} alt="" />
        </div>
        <div className="section-content">
          <h1>Who is Carren</h1>
          <p>1 year of experience in Website Development</p>
          <p>Javacript Developer</p>
          <p>React Js Developer</p>
          <p>Spring Boot Developper</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
