import './signin.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('userEmail', data.email); // ✅ Save email after login
        history.push('/history');
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (error) {
      setError('Network error. Please try again later.');
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-content">
        <div className="signin-card">
          <h2>Authentication Page</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your E-mail address"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Enter your Password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
            <button type="submit" className="thq-button-filled">
              Sign In
            </button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
