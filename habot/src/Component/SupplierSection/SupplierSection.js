import React, { useState } from 'react';
import './SupplierSection.css';

const SupplierSection = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleGetVerifiedClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <section className="supplierContainer">
      <div className="textContainer">
        <h2 className="heading">
          Let Suppliers <span className="underline">Find You</span>
        </h2>
      </div>

      <div className="buttonContainer">
        <button className="buttonVerified" onClick={handleGetVerifiedClick}>
          Get Verified
        </button>
      </div>

      {isPopupVisible && (
        <div className="popup">
          <div className="popupContent">
            <h3>Let Suppliers Find You <br/> Get Verified</h3>
            <button onClick={handleClosePopup} className="closeButton">Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default SupplierSection;
