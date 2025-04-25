import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar8 from '../components/navbar8';
import Footer4 from '../components/footer4';
import './email-input.css';

const EmailInput = () => {
  const [formData, setFormData] = useState({
    senderEmail: '',
    subject: '',
    content: '',
    attachment: null,
  });

  const [phishingResult, setPhishingResult] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, attachment: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);

    try {
      // Send the email data to the backend API for phishing analysis
      const response = await fetch('http://localhost:5000/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setPhishingResult(result.phishingResult); // Update phishing result state
        console.log('Email analyzed and stored successfully:', result);
      } else {
        console.error('Error analyzing email:', result);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div className="email-input-container">
      <Helmet>
        <title>Email Analysis | Superior Unique Pigeon</title>
      </Helmet>

      <Navbar8 />
      <main className="email-input-main">
        <h1>Email Analysis</h1>
        <p>Submit email details to check for phishing attempts</p>

        <form onSubmit={handleSubmit} className="email-input-form">
          <div className="form-group">
            <label>Sender Email</label>
            <input
              type="email"
              name="senderEmail"
              value={formData.senderEmail}
              onChange={handleChange}
              placeholder="sender@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Email subject"
              required
            />
          </div>

          <div className="form-group">
            <label>Email Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Paste the email content here..."
              rows="6"
              required
            />
          </div>

          <div className="form-group">
            <label>Attachment (Optional)</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="file-input"
            />
          </div>

          <button type="submit" className="submit-button">Analyze Email</button>
        </form>

        {phishingResult && (
          <div className="phishing-result">
            <h3>Phishing Detection Result: {phishingResult}</h3>
          </div>
        )}
      </main>
      <Footer4 />
    </div>
  );
};

export default EmailInput;
