import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './StudentDetail.css'; // Import your styling here

const StudentDetails = () => {
  const { state } = useLocation(); // Access the student data passed from the dashboard
  const [feedback, setFeedback] = useState({}); // State to handle feedback per note
  const [ratings, setRatings] = useState({}); // State to handle ratings per note

  if (!state) {
    return <div>No student data found.</div>; // Handle the case when no data is found
  }

  // Dummy data for the student including project notes related to an Attendance Tracker App
  const studentData = {
    name: state.name,
    image: state.image,
    phone: state.phone || '9589748002',
    address: state.address || '123 Main St, Ujjain',
    email: state.email || 'tanya.522354@gmail.com',
    notes: state.notes || [
      {
        title: 'User Authentication Module',
        description: 'Implemented login and signup functionalities with JWT authentication.',
        file: 'https://example.com/file1.pdf',
        progress: 'Completed',
      },
      {
        title: 'Attendance Data Storage',
        description: 'Set up database schema for storing daily attendance records.',
        file: 'https://example.com/file2.pdf',
        progress: 'In Progress',
      },
      {
        title: 'UI for Attendance Dashboard',
        description: 'Design phase for creating a responsive dashboard to track attendance.',
        file: 'https://example.com/file3.pdf',
        progress: 'Not Started',
      },
    ],
  };

  const { name, image, phone, address, email, notes } = studentData; // Destructure student data

  // Handle feedback submission
  const handleFeedbackChange = (index, event) => {
    setFeedback({
      ...feedback,
      [index]: event.target.value,
    });
  };

  const submitFeedback = (index) => {
    alert(`Feedback submitted for "${notes[index].title}": ${feedback[index]}`);
  };

  // Handle rating
  const handleRatingChange = (index, rating) => {
    setRatings({
      ...ratings,
      [index]: rating,
    });
  };

  return (
    <div className="student-details-container">
      <div className="student-info">
        <img src={image} alt={name} className="student-profile-image" />
        <h2>{name}</h2>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Send Message:</strong>
          <a href={`https://wa.me/${phone}`} target="_blank" rel="noopener noreferrer" className="contact-link">
            <i className="fa-brands fa-whatsapp"></i> Send via WhatsApp
          </a>
        </p>
        <p>
          <strong>Address:</strong> {address}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Send Email:</strong>
          <a href={`mailto:${email}`} className="contact-link">
            <i className="fa-solid fa-envelope"></i> Send via Email
          </a>
        </p>
      </div>

      {/* Main Content Area for Project Progress */}
      <div className="notes-section">
        <h3>Project Progress: Attendance Tracker App</h3>
        {notes && notes.length > 0 ? (
          notes.map((note, index) => (
            <div className="note" key={index}>
              <h4>{note.title}</h4>
              <p>{note.description}</p>
              <p><strong>Progress:</strong> {note.progress}</p> {/* Show the progress phase */}
              {note.file && <a href={note.file} target="_blank" rel="noopener noreferrer">View File</a>}
              
              {/* Rating System */}
              <div className="rating-section">
                <strong>Rate this task:</strong>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={ratings[index] >= star ? 'rated-star' : 'unrated-star'}
                    onClick={() => handleRatingChange(index, star)}
                    style={{ cursor: 'pointer', color: ratings[index] >= star ? '#FFD700' : '#CCC' }}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Feedback Form */}
              <div className="feedback-section">
                <strong>Leave Feedback:</strong>
                <textarea
                  value={feedback[index] || ''}
                  onChange={(e) => handleFeedbackChange(index, e)}
                  placeholder="Enter feedback here"
                  className="feedback-input"
                />
                <button onClick={() => submitFeedback(index)} className="feedback-button">
                  Submit Feedback
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No project progress available for this student.</p>
        )}
      </div>
    </div>
  );
};

export default StudentDetails;
