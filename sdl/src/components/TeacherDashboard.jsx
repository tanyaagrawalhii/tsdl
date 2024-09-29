import React, { useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom'; // To access the state passed from login
import './TeacherDashboard.css';
import studentProfile from '../assets/studentProfile.jpg'; // Import the student profile image

const TeacherDashboard = () => {
  const { state } = useLocation(); // Access the state passed from the login page
  const loggedInUser = { name: state?.name || 'Unknown User' }; // Fallback in case name isn't available
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const students = [
    { id: 1, name: 'Rahul Verma', image: studentProfile }, // Assign the imported image
    { id: 2, name: 'Priya Sharma', image: studentProfile },
    { id: 3, name: 'Anjali Singh', image: studentProfile },
    { id: 4, name: 'Vikram Patel', image: studentProfile },
    { id: 5, name: 'Sita Rao', image: studentProfile },
    { id: 6, name: 'Mohammed Ali', image: studentProfile },
    { id: 7, name: 'Meera Desai', image: studentProfile },
    { id: 8, name: 'Rohan Mehta', image: studentProfile },
    { id: 9, name: 'Sneha Kulkarni', image: studentProfile },
    { id: 10, name: 'Karan Singh', image: studentProfile },
    { id: 11, name: 'Anita Joshi', image: studentProfile },
    { id: 12, name: 'Pooja Nair', image: studentProfile },
    { id: 13, name: 'Deepak Choudhary', image: studentProfile },
    { id: 14, name: 'Kavita Bansal', image: studentProfile },
    { id: 15, name: 'Ajay Kumar', image: studentProfile },
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleStudentClick = (student) => {
    navigate(`/student/${student.id}`, { state: student }); // Navigate to the student detail page
  };

  return (
    <div className="teacher-dashboard"> {/* Unique class name added here */}
      {/* Navbar */}
      <nav className="navbar">
        <input
          type="text"
          placeholder="Search students..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
        <div className="user-info">
          <div className="avatar">
            {loggedInUser.name.charAt(0)}
          </div>
          <span className="user-name">{loggedInUser.name}</span>
        </div>
      </nav>

      {/* Main Dashboard */}
      <div className="student-cards-container">
        {filteredStudents.map((student) => (
          <div className="student-card" key={student.id} onClick={() => handleStudentClick(student)}>
            <img src={student.image} alt={student.name} className="student-image" />
            <div className="student-info">
              <h3>{student.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherDashboard;
