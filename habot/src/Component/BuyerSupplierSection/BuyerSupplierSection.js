import React, { useState } from 'react';
import video from '../../assests/habot-video.jpg';
import youtubeLogo from '../../assests/Youtube_logo.png';
import './BuyerSupplierSection.css';

const BuyerSupplierSection = () => {
  const [selectedOption, setSelectedOption] = useState('Buyer');

  const handleSelection = (option) => {
    setSelectedOption(option);
  };

  const videoLink = 'https://www.youtube.com/watch?v=IZLp-TZyDkQ';

  return (
    <section className="buyerSupplierContainer">
      <div className="image-container">
        <a href={videoLink} target="_blank" rel="noopener noreferrer">
          <img src={video} alt="Related" className="image" />
          <img src={youtubeLogo} alt="YouTube Logo" className="youtube-logo" />
        </a>
      </div>

      <div className="content-container">
        <div className="toggle-buttons">
          <div className="button-container-left">
            <button
              className={selectedOption === 'Buyer' ? 'selected-button' : 'button'}
              onClick={() => handleSelection('Buyer')}
            >
              Buyer
            </button>
          </div>
          <div className="button-container-right">
            <button
              className={selectedOption === 'Supplier' ? 'selected-button' : 'button'}
              onClick={() => handleSelection('Supplier')}
            >
              Supplier
            </button>
          </div>
        </div>

        {selectedOption === 'Buyer' && (
          <div className="content-section">
            <div className="bullet-point">
              <span className="bullet-icon">✔</span>
              <span className="bullet-text">Post your requirements.</span>
            </div>
            <div className="bullet-point">
              <span className="bullet-icon">✔</span>
              <span className="bullet-text">Sit back for multiple suppliers to contact you.</span>
            </div>
            <div className="bullet-point">
              <span className="bullet-icon">✔</span>
              <span className="bullet-text">Choose among the suppliers based on the rating and reviews.</span>
            </div>
          </div>
        )}

        {selectedOption === 'Supplier' && (
          <div className="content-section">
            <div className="bullet-point">
              <span className="bullet-icon">✔</span>
              <span className="bullet-text">Access a large database of potential buyers.</span>
            </div>
            <div className="bullet-point">
              <span className="bullet-icon">✔</span>
              <span className="bullet-text">Bid on buyer requirements that match your services.</span>
            </div>
            <div className="bullet-point">
              <span className="bullet-icon">✔</span>
              <span className="bullet-text">Build your reputation through ratings and reviews.</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default BuyerSupplierSection;
