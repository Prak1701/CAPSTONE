import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setError('');
  };

  const isFakeEmail = (email) => {
    const fakePatterns = [
      /^test@/i,
      /^abc@/i,
      /^example@/i,
      /@example\.com$/i,
      /^user@/i,
      /^demo@/i,
      /^admin@/i
    ];
    return fakePatterns.some(pattern => pattern.test(email));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFakeEmail(formData.email)) {
      setError('Please use a valid personal or work email address.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Signup successful!');
        
        // ✅ Automatically log the user in:
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userEmail', formData.email);

        history.push('/home'); // ✅ Redirect to home after signup
      } else {
        console.error('Signup failed:', data);
        setError(data.error || data.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Network or Server Error:', error.message);
      setError('Signup failed. ' + (error.message || 'Please try again.'));
    }
  };

  return (
    <div className="signup-container">
      <main className="signup-main">
        <div className="signup-card">
          <h1>Sign Up</h1>
          <p>Create an account to track your scan history</p>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleSubmit} className="signup-form">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <button type="submit" className="signup-button">Sign Up</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Signup;
