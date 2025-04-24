import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './navbar8.css';

const Navbar8 = (props) => {
  return (
    <header className="navbar8-container1">
      <header data-thq="thq-navbar" className="navbar8-navbar-interactive">
        <div data-thq="thq-navbar-nav" className="navbar8-desktop-menu">
          <nav className="navbar8-links1">
            <Link to="/" className="navbar8-link11 thq-link thq-body-small">
              {props.link1 ?? <span className="navbar8-text18">home</span>}
            </Link>
            <Link to="/signup" className="thq-link thq-body-small">
              {props.link2 ?? <span className="navbar8-text16">sign Up</span>}
            </Link>
            <Link to="/history" className="navbar8-link31 thq-link thq-body-small">
              {props.link3 ?? <span className="navbar8-text24">history</span>}
            </Link>
            <Link to="/plugin" className="navbar8-link41 thq-link thq-body-small">
              {props.link4 ?? <span className="navbar8-text28">plugin</span>}
            </Link>
          </nav>
        </div>
      </header>
    </header>
  );
};

Navbar8.defaultProps = {
  linkUrlPage1: '/',
  link1Url: '/',
  linkUrlPage2: '/signup',
  link2Url: '/signup',
  linkUrlPage3: '/history',
  link3Url: '/history',
  linkUrlPage4: '/plugin',
  link4Url: '/plugin',
};

Navbar8.propTypes = {
  link1: PropTypes.node,
  link2: PropTypes.node,
  link3: PropTypes.node,
  link4: PropTypes.node,
  link1Url: PropTypes.string,
  link2Url: PropTypes.string,
  link3Url: PropTypes.string,
  link4Url: PropTypes.string,
};

export default Navbar8;