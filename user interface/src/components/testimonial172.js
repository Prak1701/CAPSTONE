import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial172.css'

const Testimonial172 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial172-max-width thq-section-max-width">
        <div className="testimonial172-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial172-text35">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial172-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial172-text32">
                  I have been using this tool for a while now, and it has been
                  instrumental in detecting phishing emails that would have
                  otherwise gone unnoticed. Highly recommended for anyone
                  concerned about email security.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial172-card1"
              >
                <div className="testimonial172-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial172-image1"
                  />
                  <div className="testimonial172-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial172-text26">
                            John Doe
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial172-text25">
                            Cybersecurity Professional
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial172-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial172-text34">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial172-card2"
              >
                <div className="testimonial172-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial172-image2"
                  />
                  <div className="testimonial172-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial172-text29">
                            Jane Smith
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial172-text24">
                            IT Student
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial172-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial172-text28">
                        As a student studying IT, this tool has been a
                        game-changer for me. It&apos;s user-friendly and
                        provides quick results, making it easy to identify
                        potential threats in emails.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial172-card3"
              >
                <div className="testimonial172-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial172-image3"
                  />
                  <div className="testimonial172-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial172-text27">
                            Michael Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial172-text33">
                            Network Administrator
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial172-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial172-text36">
                        In my line of work, email security is paramount. This
                        tool has saved us from numerous phishing attempts and
                        has become an essential part of our cybersecurity
                        strategy.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial172-card4"
              >
                <div className="testimonial172-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial172-image4"
                  />
                  <div className="testimonial172-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial172-text31">
                            Sarah Lee
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial172-text30">
                            Business Owner
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial172-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial172-text37">
                        I run a small business, and protecting our sensitive
                        information is crucial. This tool has given me peace of
                        mind knowing that our emails are being scanned for
                        potential threats.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial172.defaultProps = {
  author2Position: undefined,
  author1Position: undefined,
  author3Alt: 'Image of Michael Johnson',
  author1Name: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDY0Njk2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: undefined,
  review2: undefined,
  author2Name: undefined,
  author4Position: undefined,
  author4Name: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1706606999710-72658165a73d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDY0Njk2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Image of John Doe',
  author2Src:
    'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDY0Njk3MHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDY0Njk3MHw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Jane Smith',
  author4Alt: 'Image of Sarah Lee',
  content1: undefined,
  author3Position: undefined,
  review1: undefined,
  heading1: undefined,
  review3: undefined,
  review4: undefined,
}

Testimonial172.propTypes = {
  author2Position: PropTypes.element,
  author1Position: PropTypes.element,
  author3Alt: PropTypes.string,
  author1Name: PropTypes.element,
  author1Src: PropTypes.string,
  author3Name: PropTypes.element,
  review2: PropTypes.element,
  author2Name: PropTypes.element,
  author4Position: PropTypes.element,
  author4Name: PropTypes.element,
  author4Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author3Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  content1: PropTypes.element,
  author3Position: PropTypes.element,
  review1: PropTypes.element,
  heading1: PropTypes.element,
  review3: PropTypes.element,
  review4: PropTypes.element,
}

export default Testimonial172
