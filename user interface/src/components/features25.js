import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import './features25.css'

// Imported images
import emailImage from '../assets/email.jpg'
import resultImage from '../assets/result.jpg'
import scanHistImage from '../assets/scanhist.png'  // Corrected path for Scan History image

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="thq-section-padding">
      <div className="features25-container2 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 0 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features25-text4">
                      Email Content Analysis
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features25-text2">
                      Detect phishing emails by analyzing the content of the
                      email for suspicious elements.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>

          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 1 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features25-text3">Scan History</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features25-text5">
                      View previous scans by signing in and verifying your
                      identity.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>

          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal3"
          >
            <div className="features25-divider-container3">
              {activeTab === 2 && <div className="features25-container5"></div>}
            </div>
            <div className="features25-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features25-text6">Instant Results</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features25-text1">
                      Receive immediate results after inputting email content
                      for analysis.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>

        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt="Email Content Analysis"
              src={emailImage}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={scanHistImage}  // Corrected path for Scan History image
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt="Instant Results"
              src={resultImage}
              className="features25-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature3Description: undefined,
  feature1ImgAlt: 'Email Content Analysis Image',
  feature1Description: undefined,
  feature3ImgAlt: 'Instant Results Image',
  feature2Title: undefined,
  feature1Title: undefined,
  feature2Description: undefined,
  feature3Title: undefined,
  feature2ImgAlt: 'Scan History Image',
  feature2ImgSrc: scanHistImage,  // Default path for scan history image
}

Features25.propTypes = {
  feature3Description: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
}

export default Features25
