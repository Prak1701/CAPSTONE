import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar8 from '../components/navbar8';
import Footer4 from '../components/footer4';
import './history.css';

const History = () => {
  const history = useHistory();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [hasScans, setHasScans] = useState(false);

  return (
    <div className="history-container">
      <Helmet>
        <title>Scan History</title>
      </Helmet>
      
      <Navbar8 
        link1="Home"
        link2="Email Input"
        link3="History"
      />

      <main className="history-content">
        {!isSignedIn ? (
          <div className="history-unsigned">
            <h2>Hold Up! You haven't Signed In yet.</h2>
            <p>Your scans are classified! Authenticate yourself first:</p>
            <div className="history-buttons">
              <button 
                onClick={() => history.push('/signin')}
                className="thq-button-filled"
              >
                Login
              </button>
              <button 
                onClick={() => history.push('/')}
                className="thq-button-outline"
              >
                Maybe Later
              </button>
            </div>
          </div>
        ) : !hasScans ? (
          <div className="history-noscans">
            <h2>Report: No Data Found</h2>
            <p>You haven't intercepted any emails yet!</p>
            <button 
              onClick={() => history.push('/email-input')}
              className="thq-button-filled"
            >
              Launch New Analysis
            </button>
          </div>
        ) : (
          <div className="history-scans">
            <h2>Classified Interceptions</h2>
            <div className="scan-item">
              <p><strong>Subject:</strong> "URGENT: Your nest has won 1 million worms!"</p>
              <p><strong>Verdict:</strong> PHISHING ATTEMPT (100% sure)</p>
              <p><strong>Pigeon Note:</strong> "Too many CAPS, smelled fishy"</p>
            </div>
          </div>
        )}
      </main>

      <Footer4 />
    </div>
  );
};

export default History;