import React from "react";
import "./styles/Main.css";
import { Link } from "react-router-dom";
import mypic from "./assets/carren.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Main = () => {
  return (
    <div className="main">
      <div className="main-content">
        <div className="main-container">
          <div className="text">
            <p>Hey There</p>
            <h1>I am Carren Chepkorir</h1>
            <p>Passionate Software Developer</p>
            <div className="icons">
              <FaTwitter className="icon" />

              <a href="https://www.linkedin.com/in/carren-chepkorir-24a4ba220/">
                <FaLinkedin className="icon" />
              </a>
              <FaGithub className="icon" />
            </div>
            <div className="buttons">
              <Link to="/projects">
                <button>See my Work</button>
              </Link>
              <Link to="/contact">
                <button>Hire Me</button>
              </Link>
            </div>
          </div>

          <div className="image-container">
            <img className="mypic" src={mypic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
