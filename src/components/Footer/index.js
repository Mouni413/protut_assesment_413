import React from "react";
import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineCopyright,
  AiOutlineInstagram,
} from "react-icons/ai";

import "./index.css";

const Footer = () => {
  return (
    <div className="footer-background-container">
      <div className="footer-top-details">
        <div className="footer-top-1 footer-1">
          <h1 className="footer-heading">Get the Latest Insights</h1>
          <p className="footer-description">
            Sign up for weekly curated sustainability news.
          </p>
          <input type="email" placeholder="Email" className="email-input" />
          <button type="button" className="subscribe-button">
            Subscribe
          </button>
        </div>
        <div className="footer-top-1 footer-2">
          <h1 className="footer-heading">About Novisto</h1>
          <p className="footer-description">Our Team Company News Resources</p>
        </div>
        <div className="footer-top-1 footer-3">
          <h1 className="footer-heading">ESG Software</h1>
          <p className="footer-description">
            ESG Software For Corporate For Private Capital Sécurité Technology
          </p>
        </div>
        <div className="footer-top-1 footer-4">
          <h1 className="footer-heading">Let’s talk.</h1>
          <p className="footer-description">Get in touch with our team.</p>
          <button className="contact-us-button" type="button">
            Contact Us
          </button>
          <p className="footer-description">
            481 Viger Ave W #200, Montreal, Quebec, H2Z 1G6 Canada
          </p>
          <div className="social-media-icons">
            <AiFillLinkedin className="social-media-icons" />
            <AiOutlineTwitter className="social-media-icons" />
            <AiFillYoutube className="social-media-icons" />
            <AiOutlineInstagram className="social-media-icons" />
          </div>
        </div>
      </div>
      <div className="element">
        <hr className="horizontal-line" />
      </div>
      <div className="footer-bottom-container">
        <div className="footer-bottom-1">
          <AiOutlineCopyright className="copy-right-icon" />
          <p className="copy-right-des">2024 Novisto All Rights Reserved.</p>
        </div>
        <div className="footer-bottom-1 footer-bottom-2">
          <p className="copy-right-des terms">Terms of Use</p>
          <p className="copy-right-des terms">Privacy Statement</p>
          <p className="copy-right-des terms">Cookie Polocy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
