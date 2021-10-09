import React from "react";

import { Link } from "react-router-dom";

import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <span className="footer-bg"></span>
        <div className="footer-items">
          <div className="footer-nav">
            <Link to="/Services" className="link">Services</Link>
            <Link to="/About" className="link">About</Link>
            <Link to="/Portfolio" className="link">Portfolio</Link>
            <Link to="/Contact" className="link">Contact</Link>
          </div>
          <div className="footer-socials">
            <img
              src="img/facebookIcon.svg"
              alt="facebook"
              className="facebookIcon"
            />
            <img
              src="img/messengerIcon.svg"
              alt="messenger"
              className="messengerIcon"
            />
            <img
              src="img/instagramIcon.svg"
              alt="instagram"
              className="instagramIcon"
            />
          </div>
        </div>
      </div>
      <div className="copyright">Copyright StrechySolutions 2021</div>
    </div>
  );
};

export default Footer;
