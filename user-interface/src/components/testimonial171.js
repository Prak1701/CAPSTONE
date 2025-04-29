import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial171.css'

const Testimonial171 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial171-max-width thq-section-max-width">
        <div className="testimonial171-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial171-text35">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial171-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial171-text32">
                  I have been using this tool for a while now, and it has
                  significantly improved our team&apos;s ability to detect
                  phishing emails. It&apos;s a must-have for anyone concerned
                  about email security.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card">
                <div className="testimonial171-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial171-image1"
                  />
                  <div className="testimonial171-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial171-text26">
                            John Doe
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial171-text25">
                            Cybersecurity Analyst
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial171-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial171-text34">
                        This tool is user-friendly and provides accurate
                        results. It has become an essential part of our
                        cybersecurity strategy.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card">
                <div className="testimonial171-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial171-image2"
                  />
                  <div className="testimonial171-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial171-text29">
                            Jane Smith
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial171-text24">
                            IT Manager
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial171-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial171-text28">
                        As a student studying cybersecurity, this tool has
                        helped me understand the importance of email security. I
                        highly recommend it to my peers.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card">
                <div className="testimonial171-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial171-image3"
                  />
                  <div className="testimonial171-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial171-text27">
                            David Lee
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial171-text33">Student</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial171-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial171-text36">
                        I have tested various phishing detection tools, and this
                        one stands out for its efficiency and reliability.
                        It&apos;s a game-changer in the cybersecurity industry.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card">
                <div className="testimonial171-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial171-image4"
                  />
                  <div className="testimonial171-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial171-text31">
                            Emily Brown
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial171-text30">
                            Security Consultant
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial171-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial171-text37">
                        Protecting against phishing attacks is crucial in
                        today&apos;s digital world. This tool simplifies the
                        process and provides peace of mind to users.
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

Testimonial171.defaultProps = {
  author2Position: undefined,
  author1Position: undefined,
  author3Alt: 'Image of David Lee',
  author1Name: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1574182245530-967d9b3831af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDY0MzY2NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: undefined,
  review2: undefined,
  author2Name: undefined,
  author4Position: undefined,
  author4Name: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1500649297466-74794c70acfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDY0MzY2NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Image of John Doe',
  author2Src:
    'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDY0MzY2NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDY0MzY2NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Jane Smith',
  author4Alt: 'Image of Emily Brown',
  content1: undefined,
  author3Position: undefined,
  review1: undefined,
  heading1: undefined,
  review3: undefined,
  review4: undefined,
}

Testimonial171.propTypes = {
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

export default Testimonial171
