import React from 'react';
import reactLogo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="react__footer section__padding">
    <div className="react__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future?</h1>
    </div>

    <div className="react__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="react__footer-links">
      <div className="react__footer-links_logo">
        <img src={reactLogo} alt="react_logo" />
        <p>Osnabrück Innenstadt, Germany <br /> All Rights Reserved</p>
      </div>
      <div className="react__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="react__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="react__footer-links_div">
        <h4>Get in touch</h4>
        <p>M. Eng. Henry Gennet</p>
        <p>Osnabrück Innenstadt, Germany</p>
        <p>0049-123456789</p>
        <p>henry.gennet.dev@gmail.com</p>
      </div>
    </div>

    <div className="react__footer-copyright">
      <p>©{new Date().getFullYear()} React. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
