import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import LogoImage from '../../assests/Group.png';
import LinkedInImage from '../../assests/LinkedIn.png';
import TwitterImage from '../../assests/Twitter.png';
import FacebookImage from '../../assests/Facebook.png';
import InstagramImage from '../../assests/Instagram.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left-section">
        <img src={LogoImage} alt="HABOT Logo" className="logo" /> 
        <p style={{marginLeft:"40px"}}>© Stalin Sivaji</p>
      </div>

      {/* Center Links */}
      <div className="center-section">
        <ul className="column">
          <li className="column-title">Company</li>
          <li className="link">
            <Link to="/about">About</Link>
          </li>
          <li className="link">
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
        <ul className="column">
          <li className="column-title">Terms</li>
          <li className="link">
            <Link to="/data-privacy">Data Privacy</Link>
          </li>
          <li className="link">
            <Link to="/terms">Terms</Link>
          </li>
          <li className="link">
            <Link to="/accessibility">Accessibility</Link>
          </li>
        </ul>
        <ul className="column">
          <li className="column-title">Related</li>
          <li className="link">
            <Link to="/find-buyer">Find Buyer</Link>
          </li>
          <li className="link">
            <Link to="/feedback">Feedback</Link>
          </li>
        </ul>
      </div>

      <div className="right-section">
      <a href="/linkedin" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInImage} alt="LinkedIn" className="footer-icon" />
        </a>
        <a href="/twitter" target="_blank" rel="noopener noreferrer">
          <img src={TwitterImage} alt="Twitter" className="footer-icon" />
        </a>
        <a href="/facebook" target="_blank" rel="noopener noreferrer">
          <img src={FacebookImage} alt="Facebook" className="footer-icon" />
        </a>
        <a href="/instagram" target="_blank" rel="noopener noreferrer">
          <img src={InstagramImage} alt="Instagram" className="footer-icon" />
        </a>
      </div>

      
    </footer>
  );
};

export default Footer;
