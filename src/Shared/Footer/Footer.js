import React from "react";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container d-flex justify-content-around align-items-center">
        <h5>e-WAREHOUSE</h5>
        <p className="mb-0">Copy right &copy; 2022</p>
        <div className="social-icons d-flex justify-content-around">
          <a
            href="http://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer">
            <FaFacebookSquare />
          </a>
          <a
            href="http://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer">
            <FaTwitterSquare />
          </a>
          <a
            href="http://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
