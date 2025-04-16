import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Add this import
import './navbar8.css';

const Navbar8 = (props) => {
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false);
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false);

  return (
    <header className="navbar8-container1">
      <header data-thq="thq-navbar" className="navbar8-navbar-interactive">
        <div data-thq="thq-navbar-nav" className="navbar8-desktop-menu">
          <nav className="navbar8-links1">
            {/* Replace <a> tags with <Link> components */}
            <Link
              to="/"
              className="navbar8-link11 thq-link thq-body-small"
            >
              {props.link1 ?? (
                <Fragment>
                  <span className="navbar8-text18">home</span>
                </Fragment>
              )}
            </Link>
            <Link to="/email-input" className="thq-link thq-body-small">
              {props.link2 ?? (
                <Fragment>
                  <span className="navbar8-text16">emailinput</span>
                </Fragment>
              )}
            </Link>
            <Link
              to="/history"
              className="navbar8-link31 thq-link thq-body-small"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="navbar8-text24">history</span>
                </Fragment>
              )}
            </Link>
            {/* Keep the rest of your component the same */}
            {/* ... */}
          </nav>
          {/* ... rest of your component remains the same ... */}
        </div>
      </header>
    </header>
  );
};

// Update defaultProps to use relative paths instead of teleporthq URLs
Navbar8.defaultProps = {
  linkUrlPage4: '/result',
  link2Url: '/email-input',
  // ... keep other default props but update URLs to relative paths
  linkUrlPage2: '/email-input',
  linkUrlPage1: '/',
  linkUrlPage3: '/history',
  link1Url: '/',
  link3Url: '/history',
  // ... rest of your defaultProps
};

// Keep your propTypes the same
Navbar8.propTypes = {
  // ... your existing propTypes
};

export default Navbar8;