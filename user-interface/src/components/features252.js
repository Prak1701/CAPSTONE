import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features252.css'

const Features252 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features252-container2 thq-section-max-width">
        <div className="features252-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features252-tab-horizontal1"
          >
            <div className="features252-divider-container1">
              {activeTab === 0 && (
                <div className="features252-container3"></div>
              )}
            </div>
            <div className="features252-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features252-text4">
                      Real-time Email Content Analysis
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features252-text2">
                      Detect phishing emails and potential threats in file
                      attachments instantly.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features252-tab-horizontal2"
          >
            <div className="features252-divider-container2">
              {activeTab === 1 && (
                <div className="features252-container4"></div>
              )}
            </div>
            <div className="features252-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features252-text3">Scan History</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features252-text5">
                      View past scan results to track email security over time.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features252-tab-horizontal3"
          >
            <div className="features252-divider-container3">
              {activeTab === 2 && (
                <div className="features252-container5"></div>
              )}
            </div>
            <div className="features252-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features252-text6">
                      Email Scam Protection
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features252-text1">
                      Stay safe from email scams and cyber threats with our
                      advanced detection tool.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features252-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features252-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features252-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features252-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features252.defaultProps = {
  feature3Description: undefined,
  feature1ImgAlt: 'Real-time Email Content Analysis Image',
  feature1Description: undefined,
  feature3ImgAlt: 'Email Scam Protection Image',
  feature2Title: undefined,
  feature1Title: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1562673667-86fb31353b3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDY0Njk2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1611073061541-842812eaa37c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDY0Njk2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description: undefined,
  feature3Title: undefined,
  feature2ImgAlt: 'Scan History Image',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1501516069922-a9982bd6f3bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDY0Njk3MHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features252.propTypes = {
  feature3Description: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
}

export default Features252
