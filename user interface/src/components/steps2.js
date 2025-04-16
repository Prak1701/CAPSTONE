import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
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
              <br></br>
              <br></br>
              <span>
                We simplify cybersecurity for everyone — whether you&apos;re a
                professional or a student. Just enter your email details, scan
                for phishing signs, and review your scan history and results,
                all in one place.
              </span>
            </p>
            <div className="steps2-actions">
              <button className="thq-button-animated thq-button-filled">
                <span className="thq-body-small">Start Analysis</span>
              </button>
            </div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2 className="thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps2-text33">Enter Email Details</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text18 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text29">
                      Provide the email address, content, subject, and any
                      attachments for scanning.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text19 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps2-text31">View Scan History</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text21 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text32">
                      Sign in to view your previous scan history and results.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text22 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps2-text34">Scan Email</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text24 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text30">
                      Initiate the scan process to detect phishing emails.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text25 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2 className="thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps2-text36">View Scan Result</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text27 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text35">
                      Check the scan result to see if the email is flagged as a
                      phishing attempt.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text28 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step1Description: undefined,
  step3Description: undefined,
  step2Title: undefined,
  step2Description: undefined,
  step1Title: undefined,
  step3Title: undefined,
  step4Description: undefined,
  step4Title: undefined,
}

Steps2.propTypes = {
  step1Description: PropTypes.element,
  step3Description: PropTypes.element,
  step2Title: PropTypes.element,
  step2Description: PropTypes.element,
  step1Title: PropTypes.element,
  step3Title: PropTypes.element,
  step4Description: PropTypes.element,
  step4Title: PropTypes.element,
}

export default Steps2
