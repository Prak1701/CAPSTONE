import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';

import Navbar8 from '../components/navbar8';
import Features24 from '../components/features24';
import CTA26 from '../components/cta26';
import Features25 from '../components/features25';
import Steps2 from '../components/steps2';
import Footer4 from '../components/footer4';
import './home.css';

const Home = (props) => {
  const history = useHistory();

  return (
    <div className="home-container">
      <Helmet>
        <title>Superior Unique Pigeon</title>
        <meta property="og:title" content="Superior Unique Pigeon" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text10">View scan result</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text11">Sign In</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text12">Email Input</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text13">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text14">Home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text15">Result</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text16">Email Input</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text17">Plugin</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text18">Go to the Home page</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text19">Input email content and subject</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text20">History</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text21">History</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22">View scan history</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text23">Verify Identity</span>
          </Fragment>
        }
        link1Url="/"
      ></Navbar8>

      {/* Added section wrapper for Features24 */}
      <div className="features-section">
        <h2 className="section-title">Our Detection Capabilities</h2>
        <Features24
          feature3Description={
            <Fragment>
              <span className="home-text24">
                Get instant results on the legitimacy of the email to protect
                yourself from phishing attacks.
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text25">Real-Time Results</span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text26">
                Scan any file attachments in the email for potential threats or
                malicious content.
              </span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="home-text27">Email Content Analysis</span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text28">
                Detect phishing emails by analyzing the content of the email for
                suspicious elements.
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text29">File Attachment Scanning</span>
            </Fragment>
          }
        />
      </div>

      <CTA26
        heading1={
          <Fragment>
            <span className="home-text30">
              Detect Phishing Emails with Ease
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text31">
              Protect yourself from email scams by using our phishing detection
              tool.
            </span>
          </Fragment>
        }
        action1={
          <button 
            onClick={() => history.push('/email-input')}
            className="thq-button-filled"
            style={{ 
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              padding: 0
            }}
          >
            <span className="home-text32">Get Started Now</span>
          </button>
        }
      ></CTA26>

      {/* Added section wrapper for Features25 */}
      <div className="features-section">
        <h2 className="section-title">How It Works</h2>
        <Features25
          feature3Description={
            <Fragment>
              <span className="home-text33">
                Receive immediate results after inputting email content for
                analysis.
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text34">
                Input an email address, content, and subject to detect phishing
                emails.
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text35">Scan History</span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="home-text36">Email Content Analysis</span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text37">
                View previous scans by signing in and verifying your identity.
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text38">Instant Results</span>
            </Fragment>
          }
        />
      </div>

      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text39">
              Provide the email address, content, subject, and any attachments
              for scanning.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text40">
              Initiate the scan process to detect phishing emails.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text41">View Scan History</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text42">
              Sign in to view your previous scan history and results.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text43">Enter Email Details</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text44">Scan Email</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text45">
              Check the scan result to see if the email is flagged as a phishing
              attempt.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text46">View Scan Result</span>
          </Fragment>
        }
      ></Steps2>

      <Footer4
        link5={
          <Fragment>
            <span className="home-text47">Sign In</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text48">History</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text49">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text50">Email Input</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text51">Result</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  );
};

export default Home;