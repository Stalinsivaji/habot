import React from 'react';
import './SignupSection.css';
import arrowImage from '../../assests/arrowIcon.png';

const SignupSection = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <section className="container">
      <div className="leftColumn">
        <h3 className="heading">
          Ready to dive into <span className="habotText">HABOT</span>?
        </h3>
        <p className="description">
          Signing up with HABOT opens the door to a world of new opportunities
          <br /> and potential for business growth. Gain access to a vibrant
          community <br /> of like-minded individuals, unlock valuable resources, and
          take the first <br /> step towards realizing your entrepreneurial dreams.
        </p>
        <button className="signupButton" onClick={handleButtonClick}>
          Sign up Today! <img src={arrowImage} alt="Arrow" className="arrow-image" />
        </button>
      </div>

      <div className="rightColumn">
        <div className="buttonColumn">
          <button className="locationButton">Abu Dhabi</button>
          <button className="locationButton">Sharjah & Ajman</button>
          <button className="locationButton">Ras Al Khaimah</button>
        </div>
        <div className="buttonColumn">
          <button className="locationButton">Dubai</button>
          <button className="locationButton">Fujairah</button>
          <button className="locationButton">Umm Al Quwain</button>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
