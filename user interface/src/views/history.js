import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar8 from '../components/navbar8';
import Footer4 from '../components/footer4';
import './history.css';

const History = () => {
  const history = useHistory();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [scanData, setScanData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    setIsSignedIn(auth === 'true');

    if (auth === 'true') {
      fetchScanHistory();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchScanHistory = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/email');
      if (response.ok) {
        const data = await response.json();
        setScanData(data);
      } else {
        console.error('Failed to fetch scan history.');
      }
    } catch (error) {
      console.error('Error fetching scan history:', error);
    } finally {
      setLoading(false);
    }
  };

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
        {loading ? (
          <p>Loading...</p>
        ) : !isSignedIn ? (
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
        ) : scanData.length === 0 ? (
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
            {scanData.map((scan) => (
              <div key={scan._id} className="scan-item">
                <p><strong>Email:</strong> {scan.senderEmail || 'Not Provided'}</p>
                <p><strong>Subject:</strong> {scan.subject || 'No Subject'}</p>
                <p><strong>Content:</strong> {scan.content || 'No Content'}</p>
                <p><strong>Result:</strong> {scan.phishingResult || 'No Result'}</p>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer4 />
    </div>
  );
};

export default History;
