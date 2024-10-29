import React from 'react';

const HowItWorksSection = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>How it works?</h2>
      <p style={styles.description}>
        Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with <br /> 
        potential buyers, and build successful business relationships, sharing valuable feedback.
      </p>
    </section>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffffff',
    padding: '40px 20px',
    textAlign: 'center',
    color: '#000000', 
  },
  heading: {
    fontFamily: 'Poppins, sans-serif', 
    fontSize: '37.34px', 
    fontWeight: 700, 
    lineHeight: '48px', 
    color: '#000000',
    marginBottom: '20px',
  },
  description: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '17.16px', 
    fontWeight: 400,
    lineHeight: '26px', 
    textAlign: 'center', 
    color: '#000000', 
  },
};

export default HowItWorksSection;