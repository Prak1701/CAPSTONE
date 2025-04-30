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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, attachment: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('senderEmail', formData.senderEmail);
    formDataToSend.append('subject', formData.subject);
    formDataToSend.append('content', formData.content);
    if (formData.attachment) {
      formDataToSend.append('attachment', formData.attachment);
    }

    try {
      const response = await fetch('http://localhost:5000/api/analyze', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();
      console.log('Server response:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      alert(`Phishing detection result: ${data.phishingResult}`);
    } catch (error) {
      console.error('Error submitting email:', error);
      alert('Failed to analyze email. Please try again.');
    }
  };

  return (
    <div className="email-input-container">
      <Helmet>
        <title>Email Analysis | Phising Email Detection Website</title>
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
      </main>
      <Footer4 />
    </div>
  );
};

export default EmailInput;
