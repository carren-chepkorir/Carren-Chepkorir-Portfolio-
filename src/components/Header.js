import React, { useState } from "react";
import "./styles/Header.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const Header = () => {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  return (
    <div className="header">
      <div className="header-logo">
        <h1>Caremy</h1>
      </div>
      <nav className={active ? "navbar active" : "navbar"}>
        <ul>
          <div className="closed">
            <FaTimes className="close" onClick={showMenu} />
          </div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="changer">
        <FaBars className="menu" onClick={showMenu} />
      </div>
    </div>
  );
};

export default Header;
