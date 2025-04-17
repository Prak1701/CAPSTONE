import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';  // Import useHistory for v5
import PropTypes from 'prop-types';
import './steps2.css';

const Steps2 = (props) => {
  const history = useHistory();  // Hook to navigate between pages

  const handleStartAnalysis = () => {
    history.push('/email-input');  // Navigate to the email input page
  };

  return (
    <div className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">Discover the Power of Our Tool</h2>
            <p className="thq-body-large">
              <span>
                Protect your inbox from phishing threats with our intelligent
                email scanner.
              </span>
              <br />
              <br />
              <span>
                We simplify cybersecurity for everyone — whether you&apos;re a
                professional or a student. Just enter your email details, scan
                for phishing signs, and review your scan history and results,
                all in one place.
              </span>
            </p>
            <div className="steps2-actions">
              {/* Start Analysis Button */}
              <button className="thq-button-animated thq-button-filled" onClick={handleStartAnalysis}>
                <span className="thq-body-small">Start Analysis</span>
              </button>
            </div>
          </div>
          {/* Rest of your Steps2 code */}
        </div>
      </div>
    </div>
  );
};

Steps2.propTypes = {
  // Your prop types
};

export default Steps2;
