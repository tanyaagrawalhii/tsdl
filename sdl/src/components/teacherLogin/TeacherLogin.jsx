import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './TeacherLogin.css'; // Import the updated CSS
import loginImage from '../../assets/teacher-login.jpg'; // Import the image

const TeacherLogin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!name || !email || !password) {
      alert('Please fill out all fields.');
      return;
    }
    navigate('/teacher/dashboard',{ state: { name } });
  };

  return (
    <div className="login-container">
      {/* Left section containing the image */}
      <div className="left-section">
        <img src={loginImage} alt="Login Visual" className="login-image" />
      </div>

      {/* Right section containing the login form */}
      <div className="right-section">
        <div className="login-box">
          <h2>Welcome!</h2>
          <p>Login to your account</p>
          <div className="login-form">
          <div className="form-group">
          
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter your name" 
          />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="form-input"
              />
            </div>
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherLogin;
