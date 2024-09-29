import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentRegister.css';

const StudentRegister = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    // Implement registration logic
    navigate('/student/login');
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-left">
          <h2 className="register-title">Sign Up</h2>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="register-input"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="register-input"
          />
          <input
            type="text"
            placeholder="Contact Info"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            className="register-input"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="register-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="register-input"
          />
          <button onClick={handleRegister} className="register-button">
            Sign Up
          </button>
        </div>
        <div className="register-right">
          <h2>Welcome to Register</h2>
          <p>Already have an account?</p>
          <button onClick={() => navigate('/student/login')} className="login-link">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentRegister;
