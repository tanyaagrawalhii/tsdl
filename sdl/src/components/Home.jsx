import React from 'react';
import { useNavigate } from 'react-router-dom';
import noteTakingImage from '../assets/note-taking.jpeg';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Left Section with Image */}
      <div className="left-section">
        <img src={noteTakingImage} alt="Note Taking" className="home-image" />
      </div>
      
      {/* Right Section with Buttons */}
      <div className="right-section">
        <h1 className="title">Welcome to the Project Diary</h1>
        <p className="subtitle">Please choose your login type</p>
        <button className="login-button student" onClick={() => navigate('/student/login')}>
          Student Login
        </button>
        <button className="login-button teacher" onClick={() => navigate('/teacher/login')}>
          Teacher Login
        </button>
      </div>
    </div>
  );
};

export default Home;
