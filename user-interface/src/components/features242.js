import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features242.css'

const Features242 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features242-container2 thq-section-max-width">
        <div className="features242-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features242-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features242-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features242-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features242-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features242-tab-horizontal1"
          >
            <div className="features242-divider-container1">
              {activeTab === 0 && (
                <div className="features242-container3"></div>
              )}
            </div>
            <div className="features242-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features242-text4">
                      Real-time Phishing Detection
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features242-text5">
                      Analyze email content and attachments
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features242-tab-horizontal2"
          >
            <div className="features242-divider-container2">
              {activeTab === 1 && (
                <div className="features242-container4"></div>
              )}
            </div>
            <div className="features242-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features242-text6">
                      Instant Scan Results
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features242-text3">
                      Receive real-time results for immediate action
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features242-tab-horizontal3"
          >
            <div className="features242-divider-container3">
              {activeTab === 2 && (
                <div className="features242-container5"></div>
              )}
            </div>
            <div className="features242-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features242-text2">Scan History</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features242-text1">
                      View scan history for reference
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features242.defaultProps = {
  feature1ImgAlt: 'Phishing Email Detection Tool',
  feature3Description: undefined,
  feature3Title: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1583912268179-ccc39663824a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDY0Njk2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1721879455048-64c9e14c255b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDY0Njk2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description: undefined,
  feature1Title: undefined,
  feature3ImgAlt: 'Scan History Icon',
  feature1Description: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDY0Njk3MHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgAlt: 'Real-time Results Icon',
  feature2Title: undefined,
}

Features242.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
}

export default Features242
