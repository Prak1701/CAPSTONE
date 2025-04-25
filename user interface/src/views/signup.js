import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar8 from '../components/navbar8';
import Footer4 from '../components/footer4';
import './signup.css';

const Signup = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User signed up:', formData);
    history.push('/email-input');
  };

  return (
    <div className="signup-container">
      <Navbar8 />
      <main className="signup-main">
        <h1>Sign Up</h1>
        <p>Register to use the email analysis tool</p>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </main>
      <Footer4 />
    </div>
  );
};

export default Signup;
