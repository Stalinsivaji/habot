import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './SearchSection.css';
import BagImage from '../../assests/suitcase.png'; 
import MapImage from '../../assests/placeholder.png'; 

const SearchSection = () => {
  // State to hold input values
  const [serviceQuery, setServiceQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');

  // Initialize useNavigate
  const navigate = useNavigate();

  // Handler for the search button
  const handleSearch = () => {
    console.log('Searching for service:', serviceQuery);
    console.log('Searching in location:', locationQuery);
  };

  // Handler for the click here functionality
  const handleClickHere = () => {
    // Navigate to the desired route
    navigate('/post-requirement'); // Change this to your desired path
  };

  return (
    <section className="section">
      <h2 className="supplier-text">Are You a Supplier?</h2>
      <h1 className="opportunities-text">Explore Matching Opportunities</h1>

      <div className="search-container">
        <div className="input-container">
          <img src={BagImage} alt="Bag Icon" className="icon" /> 
          <input
            type="text"
            placeholder="Search your required service here"
            className="input"
            value={serviceQuery}
            onChange={(e) => setServiceQuery(e.target.value)}
          />
        </div>

        <div className="input-container">
          <img src={MapImage} alt="Map Icon" className="icon" /> 
          <input
            type="text"
            placeholder="Search your desired location here"
            className="input"
            value={locationQuery}
            onChange={(e) => setLocationQuery(e.target.value)}
          />
        </div>

        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>

      <p className="buyer-text">
        Are you a buyer?{' '}
        <span className="click-here" onClick={handleClickHere}>
          Click here if you are looking to post a requirement under
        </span>
      </p>
    </section>
  );
};

export default SearchSection;
