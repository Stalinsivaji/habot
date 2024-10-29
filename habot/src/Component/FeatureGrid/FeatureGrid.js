import React from 'react';
import './FeatureGrid.css';
import ProfileIcon from '../../assests/Grid1.png';
import PostIcon from '../../assests/Grid2.png';
import SearchIcon from '../../assests/Grid3.png';
import EditIcon from '../../assests/Grid4.png';
import ContactIcon from '../../assests/Grid5.png';
import ConnectIcon from '../../assests/Grid6.png';

const FeatureGrid = () => {
  return (
    <section className="FeatureContainer">
      <div className="row">
        <div className="cardLightBlue">
          <img src={ProfileIcon} alt="Profile Icon" className="Featureicon" />
          <p className="Featuretext">Select Your Role and <br/> Sign Up</p>
        </div>
        <div className="cardWhite">
          <img src={PostIcon} alt="Post Icon" className="Featureicon" />
          <p className="Featuretext">Buyers Post Your <br/> Requirements</p>
        </div>
        <div className="cardLightBlue">
          <img src={SearchIcon} alt="Search Icon" className="Featureicon" />
          <p className="Featuretext">Review, Select, and <br/>Contact the Best Suppliers</p>
        </div>
      </div>
      <div className="row">
        <div className="cardWhite">
          <img src={EditIcon} alt="Edit Icon" className="Featureicon" />
          <p className="Featuretext">Suppliers Complete your <br/> profile and get notified for <br/> opportunities</p>
        </div>
        <div className="cardLightBlue">
          <img src={ContactIcon} alt="Contact Icon" className="Featureicon" />
          <p className="Featuretext">Contact Buyers and Share <br/> your Quote for the service</p>
        </div>
        <div className="cardWhite">
          <img src={ConnectIcon} alt="Connect Icon" className="Featureicon" />
          <p className="Featuretext">Both Parties can Connect <br/> and Make Business, Leave a <br/> Feedback</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
