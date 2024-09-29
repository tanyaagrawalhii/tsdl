import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentLogin.css';

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement login logic
    navigate('/student/dashboard');
  };

  const handleRegisterRedirect = () => {
    navigate('/student/register');
  };

  return (
    <div className="student-login-container">
      <div className="student-login-box">
        <div className="student-login-left">
          <h2 className="student-login-title">Sign In</h2>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="student-login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="student-login-input"
          />
          
          <button onClick={handleLogin} className="student-login-button">
            Sign In
          </button>
          <p className="student-login-forgot">Forgot Password?</p>
        </div>
        <div className="student-login-right">
          <h2>Welcome to login</h2>
          <p>Don’t have an account?</p>
          <button onClick={handleRegisterRedirect} className="student-login-signup-button">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
