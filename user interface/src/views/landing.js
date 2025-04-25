import React from 'react';
import { useHistory } from 'react-router-dom';
import './landing.css';

const Landing = () => {
  const history = useHistory();

  const handleSignup = () => {
    history.push('/signup');
  };

  const handleContinue = () => {
    history.push('/home'); // or '/' if home is at root
  };

  return (
    <div className="landing-container">
      <div className="landing-card">
        <h1>Welcome to Phishing Email Detection Website</h1>
        <p>Start by signing up or continue without saving your analysis</p>
        <div className="landing-buttons">
          <button className="primary-btn" onClick={handleSignup}>
            Sign Up
          </button>
          <button className="secondary-btn" onClick={handleContinue}>
            Continue Without Signing Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
