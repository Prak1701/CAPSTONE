import './signin.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('isAuthenticated', 'true');
    history.push('/history');
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
        </div>
      </div>
    </div>
  );
};

export default SignIn;
