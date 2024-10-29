import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../../assests/habot-logo.jpg';
import downArrowImage from '../../assests/Vector.png'; // Adjust the path as necessary
import './Header.css'; 

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="buttons-container">
        <Link to="/find-suppliers" style={{textDecoration:"none"}}>
          <button className="buttonHeader">Find Suppliers</button>
        </Link>

        <div className="dropdown-container">
          <button className="buttonHeader" onClick={toggleDropdown}>
            Find Service Tags
            <img src={downArrowImage} alt="Down Arrow" className="down-arrow-image" /> 
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item">Service Tag 1</div>
              <div className="dropdown-item">Service Tag 2</div>
              <div className="dropdown-item">Service Tag 3</div>
            </div>
          )}
        </div>

        <Link to="/login">
          <button className="login-button">Login / Sign Up</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
