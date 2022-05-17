import React from "react";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex gap-5">
          <Link as={Link} to="/about">
            About Us
          </Link>
          <Link as={Link} to="/contact">
            Contact
          </Link>
          <Link as={Link} to="/blog">
            Blog
          </Link>
        </div>
        <p className="mb-0 copy">Copy right &copy; 2022 by e-WAREHOUSE</p>
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
