import React from "react";
import "./styles/Footer.css";
import wave from "./assets/footer.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>chepkorircarren9@gmail.com</p>
        <p>All Rights Reserved</p>
        <div className=" footer-img">
          <img src={wave} alt={wave} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
