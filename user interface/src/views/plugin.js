import React from 'react';
import './plugin.css';

const Plugin = () => {
  return (
    <div className="plugin-container">
      <h1 className="plugin-title">Download Our Firefox Plugin</h1>
      <p className="plugin-description">
        Stay one step ahead of phishing attacks. Download our Firefox plugin and keep your emails safe, always.
      </p>
      <a
        href="/phishing-detector-classified.zip"
        download
        className="plugin-download-btn"
      >
        Download Plugin
      </a>
    </div>
  );
};

export default Plugin;