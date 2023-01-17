import React from "react";
import "./styles/Technologies.css";
import {
  FaAngular,
  FaHtml5,
  FaReact,
  FaCss3,
  FaDatabase,
} from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="tech-stack">
      <div className="stack">
        <h1>Technologies</h1>
      </div>
      <div className="description">
        <p>
          I've worked with a range of Technologies <br />
          in the development world <br />
          From Back-end to Design
        </p>
      </div>
      <div className="list">
        <div className="list-item">
          <FaReact className="icon1" />

          <div className="list-container">
            <h1>Front-end</h1>
            <p>
              Experience with <br />
              React.js
            </p>
          </div>
        </div>
        <div className="list-item">
          <FaReact className="icon1" />

          <div className="list-container">
            <h1>Back-end</h1>
            <p>
              Experience with <br />
              SpringBoot
            </p>
          </div>
        </div>
        <div className="list-item">
          <FaAngular className="icon1" />

          <div className="list-container">
            <h1>Front-end</h1>
            <p>
              Experience with <br />
              Angular.js
            </p>
          </div>
        </div>
        <div className="list-item">
          <FaDatabase className="icon1" />

          <div className="list-container">
            <p>
              Experience with <br />
              MySQL databases
            </p>
          </div>
        </div>
        <div className="list-item">
          <FaCss3 className="icon1" />

          <div className="list-container">
            <h1>Front-end</h1>
            <p>
              Experience with <br />
              CSS,SCSS
            </p>
          </div>
        </div>
        <div className="list-item">
          <FaHtml5 className="icon1" />

          <div className="list-container">
            <h1>Front-end</h1>
            <p>
              Experience with <br />
              HTML5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
